import React from "react";
import { createContext, useEffect, useReducer } from "react";
import {
  textInput,
  radioInput,
  checkBoxInput,
  dropDownInput,
} from "../inputTypes";
import { SidePanel } from "./SidePanel";

interface State {
  text: textInput;
  radio: radioInput;
  checkbox: checkBoxInput;
  dropdown: dropDownInput;
}

const initialState: State = {
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
};
export const ElementContext = createContext<{
  dispatch: null | React.Dispatch<action>;
}>({ dispatch: null });

type action =
  | { type: "text"; value: textInput }
  | { type: "radio"; value: radioInput }
  | { type: "checkbox"; value: checkBoxInput }
  | { type: "dropdown"; value: dropDownInput };
const reducer = (state: State, action: action): State => {
  switch (action.type) {
    case "text":
      return { ...state, text: action.value };
    case "checkbox":
      return { ...state, checkbox: action.value };
    case "radio":
      return { ...state, radio: action.value };
    case "dropdown":
      return { ...state, dropdown: action.value };
  }
};
function CreateForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div>
      <ElementContext.Provider value={{ dispatch: dispatch }}>
        <SidePanel></SidePanel>
      </ElementContext.Provider>
    </div>
  );
}

export default CreateForm;
