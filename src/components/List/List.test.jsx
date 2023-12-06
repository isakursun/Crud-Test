import { expect } from "vitest";
import { users } from "../../constants/constants";
import List from ".";
import { render, screen, within } from "@testing-library/react";

it("gönderilen dizideki her veri için tablonun body kısmına bir satır basmak", () => {
  render(<List users={users} />);

  const body = screen.getByTestId("table-body");

  const rows = within(body).getAllByRole("row");

  expect(rows).toHaveLength(users.length);
});

it("herbir kullanıcı için ekranda ki tablo hücrelerinde değerleri yazıyor mu", () => {
  render(<List users={users} />);
  for (const user of users) {
    screen.getByRole("cell", { name: user.name });
    screen.getByRole("cell", { name: user.email });
    screen.getByRole("cell", { name: user.age });
  }
});
