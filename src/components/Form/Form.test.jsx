import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { expect } from "vitest";
import Form from ".";

it("form gönderilince 'addUser' doğru parametreleri alip çalışıyor mu", async () => {
  const mock = vi.fn();
  user.setup();

  render(<Form addUser={mock} />);

  //? gerekli verileri çağırma
  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByLabelText("Yaş");
  const button = screen.getByRole("button");

  //? name inputunu doldurma - ilk yol
  await user.click(nameInp);
  await user.keyboard("mustafa");

  //? mail inputunu doldurma - daha basit yol
  await user.type(mailInp, "mustafa45@gmail.com");

  //? yaş inputunu doldurma
  await user.type(ageInp, "25");

  //? formu gönderme
  await user.click(button);
  //? form gönderildiğinde addUser fonk çalısır
  expect(mock).toBeCalled();
  //?fonk çalışırken doğru argümanlarla çalışıyor mu
  expect(mock).toBeCalledWith({
    name: "mustafa",
    email: "mustafa45@gmail.com",
    age: "25",
  });
});
