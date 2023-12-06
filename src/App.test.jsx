import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";


it("Formda eklediğimiz kullanıcı listeye ekleniyor mu", async () => {
  render(<App />);
  const user = userEvent.setup();

  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByLabelText("Yaş");
  const button = screen.getByRole("button");

  await user.type(nameInp, "isa");
  await user.type(mailInp, "isakursun58@gmail.com");
  await user.type(ageInp, "23");
  await user.click(button);

  screen.getByRole("cell", { name: "isa" });
  screen.getByRole("cell", { name: "isakursun58@gmail.com" });
  screen.getByRole("cell", { name: "23" });

});
