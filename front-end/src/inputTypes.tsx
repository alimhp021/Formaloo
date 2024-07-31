interface element {
  title: string;
  isRequired: boolean;
}
interface textInput extends element {
  type: "text";
  text: string;
  placeholder: string;
  validations: {
    minLength: number;
    maxLength: number;
    type: "text" | "telephone" | "email" | "number";
  };
}

interface checkBoxInput extends element {
  type: "checkbox";
  options: { title: string }[];
  selected: { title: string }[];
  validations: {
    selectedFileds: number;
  };
}

interface radioInput extends element {
  type: "radio";
  options: { title: string }[];
  selected: { title: string };
}

interface dropDownInput extends element {
  type: "dropdown";
  options: { title: string }[];
  selected: { title: string };
}

type ElementInterfaces = textInput | checkBoxInput | radioInput | dropDownInput;
type ElementTypes = "text" | "checkbox" | "radio" | "dropdown";

export type {
  ElementTypes,
  ElementInterfaces,
  element,
  textInput,
  checkBoxInput,
  radioInput,
  dropDownInput,
};
