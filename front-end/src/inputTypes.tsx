interface element {
  title: string;
  isRequired: boolean;
}
interface textInput extends element {
  type: "text";
  text: string;

  placeHolder: string;
  validations: {
    minLength: number;
    maxLength: number;
    type: "text" | "telephone" | "email" | "number";
  };
}

interface checkBoxInput extends element {
  type: "checkbox";
  options: string[];
  selected: string[];
  validations: {
    selectedFileds: number;
  };
}

interface radioInput extends element {
  type: "radio";
  options: string[];
  selected: string;
}

interface dropDownInput extends element {
  type: "dropdown";
  options: string[];
  selected: string;
}

type ElementInterfaces = textInput | checkBoxInput | radioInput | dropDownInput;
type ElementTypes = "text" | "checkbox" | "radio" | "dropdown";

export type {
  ElementTypes,
  ElementInterfaces,
  ElementInterfaces,
  ElementTypes,
  element,
  textInput,
  checkBoxInput,
  radioInput,
  dropDownInput,
};
