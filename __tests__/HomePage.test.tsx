import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Page - Rendering", () => {
  it("should have Home Page text", () => {
    render(<Home />);
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  }),
    it("should have a button with text Click Me", () => {
      render(<Home />);
      expect(
        screen.getByRole("button", { name: "Click Me" })
      ).toBeInTheDocument();
    });
  it("should have a label with text Enter Random Text:", () => {
    render(<Home />);
    // expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument();
  });
  it("should have a label with text Enter Specific Text:", () => {
    render(<Home />);
    expect(screen.getByLabelText(/Enter Specific Text/)).toBeInTheDocument();
  });
  it("should have a input field by Place Holder Text:", () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
  });

  it("should have a input field by Display Value:", () => {
    render(<Home />);
    expect(screen.getByDisplayValue(/AUDI/)).toBeInTheDocument();
  });

  it.todo("You can skecth out tests here");
});
