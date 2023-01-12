import React from "react";
import { render } from "@testing-library/react";

import Rating from "./Rating";

describe("Rating", () => {
  test("renders the Rating component", () => {
    render(<Rating num="4.5"/>);
  });
});