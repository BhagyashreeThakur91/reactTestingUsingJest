import { render } from "@testing-library/react"
import HelloWorld from "../components/HelloWorld"
import "@testing-library/jest-dom";

test("render hello world text", ()=> {
    const { getByText } = render(<HelloWorld/>)
    const checkHelloWorldText = getByText('Hello World');
    expect(checkHelloWorldText).toBeInTheDocument();
});

test("check name by id", ()=> {
    const { getByTestId } = render(<HelloWorld/>)
    const getElement = getByTestId('name');
    expect(getElement.textContent).toBe("Bhagyashree Thakur");
})
