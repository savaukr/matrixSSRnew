import React from "react";
import { create } from "react-test-renderer";
import {App} from './App'

function Button(props) {
    return <button>Nothing to do for now</button>;
  }
  
describe("Button component", () => {
    test("Matches the snapshot", () => {
        const button = create(<App />);
        expect(button.toJSON()).toMatchSnapshot();
    });
});