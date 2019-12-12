import { hello } from "./index";

describe("Hello World", () => {
  test("Say Hi!", () => {
    expect(hello()).toEqual("Hello, World!");
  });
});
