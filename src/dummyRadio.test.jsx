import React from "react";
import { mount } from "enzyme";
import { DummyRadio } from "./dummyRadio";

describe("Dummy Radio Component", () => {
    it("shows to select an option", () => {
        const component = mount(<DummyRadio />);
        expect(component.find("input").length).toBe(2);
    });
    it("toggle  between options", () => {
        const component = mount(<DummyRadio />);
        component.find("[data-testid='yesRadio']").simulate('change', { target: { checked: true } });
        expect(component.find("[data-testid='yesRadio']").getDOMNode().checked).toBe(true);
        expect(component.find("[data-testid='noRadio']").getDOMNode().checked).toBe(false);


        component.find("[data-testid='noRadio']").simulate('change', { target: { checked: true } });
        expect(component.find("[data-testid='yesRadio']").getDOMNode().checked).toBe(false);
        expect(component.find("[data-testid='noRadio']").getDOMNode().checked).toBe(true);
    });
});