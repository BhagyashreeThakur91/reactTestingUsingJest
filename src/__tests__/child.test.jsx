import React from "react";
import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom";
import Child from "../components/child";

test('check props value', () => {
  const {getByTestId} = render(<Child count={500}/>)
    const getElement = getByTestId('child-count-value');
    expect(getElement.textContent).toBe('500');
});

test('check toggle text', ()=> {
    const {getByTestId} = render(<Child count={100}/>);
    const getToggleButtonElement = getByTestId('toggle-button');
    const getToggleText = getByTestId("toggle-text");

    expect(getToggleText.textContent).toBe('false');
    fireEvent.click(getToggleButtonElement);
    expect(getToggleText.textContent).toBe('true');
    fireEvent.click(getToggleButtonElement);
    expect(getToggleText.textContent).toBe('false');
})

