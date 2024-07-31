import { createContext, useCallback, useEffect, useState } from "react";
import "./App.css";
import {
  textInput,
  radioInput,
  checkBoxInput,
  dropDownInput,
} from "./inputTypes";
import { SidePanel } from "./Components/SidePanel";

interface State {
  text: textInput;
  radio: radioInput;
  checkbox: checkBoxInput;
  dropdown: dropDownInput;
}

export const ElementContext = createContext({
  setTextElement: (_textElement: textInput) => {},
  setRadioElement: (_radioElement: radioInput) => {},
  setCheckboxElement: (_checkboxElement: checkBoxInput) => {},
  setDropDownElement: (_dropdownElement: dropDownInput) => {},
});

function App() {
  const [state, setState] = useState<State>({
    text: {
      type: "text",
      text: "",
      title: "",
      isRequired: false,
      placeholder: "",
      validations: {
        minLength: 1,
        maxLength: 20,
        type: "text",
      },
    },
    radio: {
      type: "radio",
      title: "",
      isRequired: false,
      options: [{ title: "option 1" }, { title: "option 2" }],
      selected: { title: "option 1" },
    },
    checkbox: {
      type: "checkbox",
      title: "",
      isRequired: false,
      options: [{ title: "option 1" }, { title: "option 2" }],
      selected: [{ title: "option 1" }],
      validations: {
        selectedFileds: 1,
      },
    },
    dropdown: {
      type: "dropdown",
      title: "",
      isRequired: false,
      options: [{ title: "option 1" }, { title: "option 2" }],
      selected: { title: "option 1" },
    },
  });
  const setTextElement = useCallback(
    (textElement: textInput) => {
      setState({ ...state, text: textElement });
    },
    [state]
  );
  const setRadioElement = useCallback(
    (radioElement: radioInput) => {
      setState({ ...state, radio: radioElement });
    },
    [state]
  );
  const setCheckboxElement = useCallback(
    (checkboxElement: checkBoxInput) => {
      setState({ ...state, checkbox: checkboxElement });
    },
    [state]
  );
  const setDropDownElement = useCallback(
    (dropdownElement: dropDownInput) => {
      setState({ ...state, dropdown: dropdownElement });
    },
    [state]
  );
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="App">
      <ElementContext.Provider
        value={{
          setTextElement,
          setRadioElement,
          setCheckboxElement,
          setDropDownElement,
        }}
      >
        <SidePanel></SidePanel>
      </ElementContext.Provider>
    </div>
  );
}

export default App;
