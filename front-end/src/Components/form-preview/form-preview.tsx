import "./form-preview.css";
import "../../Types/inputTypes";
import { ElementInterfaces, ElementTypes } from "../../Types/inputTypes";
import { TextInput } from "./text-input";
import { RadioButton } from "./radio-button";
import { DropDown } from "./drop-down";
import { MultiSelect } from "./multi-select";
import { useContext } from "react";
import { ElementContext } from "../CreateForm";
import { string } from "zod";

export type FormProps = {
  formTitle: string;
  elements: ElementInterfaces[];
  formValue?: Record<string, FormFieldValue>;
  onChange?: (value: any) => void;
  onSubmit?: (value: FormValue) => void;
};

const componentTypeMap: Record<ElementTypes, React.FunctionComponent<any>> = {
  text: TextInput,
  checkbox: MultiSelect,
  radio: RadioButton,
  dropdown: DropDown,
};

type FormFieldValue = string | string[] | number | number[] | boolean;

type FormValue = Record<string, FormFieldValue>;

function initialValue(elements: ElementInterfaces[]): FormValue {
  let yy = Object.fromEntries(
    elements.map(({ id, type }) => [id, type == "checkbox" ? [] : ""])
  );
  return yy;
}
//:[string,FormInputValueType]
// type u= {
//   [id:string , value:FormInputValueType]
// }

export function Form({
  elements,
  formTitle,
  formValue = initialValue(elements),
  onChange,
  onSubmit,
}: FormProps) {
  const { removeElement } = useContext(ElementContext);

  console.log({ formValue });
  return (
    <div>
      <form
        className="form-preview"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.(formValue);
        }}
      >
        <h3>{formTitle} Form</h3>
        {elements.map((el) => {
          const Component = componentTypeMap[el.type];
          return (
            <div key={el.id} style={{ display: "flex", alignItems: "center" }}>
              <Component
                el={el}
                value={formValue[el.id]}
                onChange={(value: any) =>
                  onChange?.({ ...formValue, [el.id]: value })
                }
              />
              <button
                className="delete-btn"
                onClick={() => removeElement!(el.id)}
              >
                <span>
                  <i className="bi bi-trash-fill"></i>
                </span>
              </button>
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
