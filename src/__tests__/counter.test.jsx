import React from "react";
import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom";
import Counter from "../components/Counter";

test('test counter logic', () => {
  const {getByText} = render(<Counter/>);
  const getCounterText = getByText('Count is : 0');
  const getButtonElementByText = getByText('Click');

  fireEvent.click(getButtonElementByText);

  expect(getCounterText.textContent).toBe('Count is : 1');
})
