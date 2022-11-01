import { isInputStrong } from "./isInputStrong";

test("isInputStrong tests to see if the input meets 4 conditions and returns a boolean. The conditions are: \n the input is at least 7 characters in length it has at least one uppercase character it has at least one lowercase character it has at least one special character (pick five to focus on here, you don't need to be exhaustive", () => {
  expect(isInputStrong("No")).toBe(false);
  expect(isInputStrong("Yes123?")).toBe(true);
  expect(isInputStrong("No!")).toBe(false);
});
