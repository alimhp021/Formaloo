import React from "react";
import { createContext, useEffect, useReducer } from "react";
import {
  textInput,
  radioInput,
  checkBoxInput,
  dropDownInput,
} from "../inputTypes";
import { SidePanel } from "./SidePanel";

interface PanelState {
  text: textInput;
  radio: radioInput;
  checkbox: checkBoxInput;
  dropdown: dropDownInput;
}

const initialPanelState: PanelState = {
  text: {
    id: "",
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
    id: "",
    type: "radio",
    title: "",
    isRequired: false,
    options: [{ title: "option 1" }, { title: "option 2" }],
    selected: { title: "option 1" },
  },
  checkbox: {
    id: "",
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
    id: "",
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
const reducer = (state: PanelState, action: action): PanelState => {
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
  const [panelState, dispatch] = useReducer(reducer, initialPanelState);
  useEffect(() => {
    console.log(panelState);
  }, [panelState]);
  return (
    <div className="CreateForm">
      <ElementContext.Provider value={{ dispatch: dispatch }}>
        <SidePanel></SidePanel>
      </ElementContext.Provider>
    </div>
  );
}

export default CreateForm;
