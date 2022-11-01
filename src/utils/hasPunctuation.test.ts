import { hasPunctuation } from "./hasPunctuation";

test("hasPunctuation identifies if a string includes '!' or '&' or '?'", () => {
  expect(hasPunctuation("hello")).toBe(false);
  expect(hasPunctuation("!")).toBe(true);
  expect(hasPunctuation("?")).toBe(true);
  expect(hasPunctuation("&")).toBe(true);
  expect(hasPunctuation("&!")).toBe(true);
  expect(hasPunctuation("Hello!")).toBe(true);
});
