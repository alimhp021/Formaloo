import "./form-preview.css";
import "../../inputTypes";
import { ElementInterfaces, ElementTypes } from "../../inputTypes";
import { TextInput } from "./text-input";
import { RadioButton } from "./radio-button";
import { DropDown } from "./drop-down";
import { MultiSelect } from "./multi-select";
import { useContext } from "react";
import { ElementContext } from "../CreateForm";

export type FormProps = {
  formTitle: string;
  elements: ElementInterfaces[];
  formValue?: any;
  onChange?: (value: any) => void;
};

const componentTypeMap: Record<ElementTypes, React.FunctionComponent<any>> = {
  text: TextInput,
  checkbox: MultiSelect,
  radio: RadioButton,
  dropdown: DropDown,
};

function initialValue(elements: ElementInterfaces[]) {
  return Object.fromEntries(elements.map(({ id }) => [id, ""]));
}

export function Form({
  elements,
  formTitle,
  formValue = initialValue(elements),
  onChange,
}: FormProps) {
  const { removeElement } = useContext(ElementContext);

  return (
    <div>
      <form className="form-preview">
        <h3>{formTitle} Form</h3>
        {elements.map((el) => {
          const Component = componentTypeMap[el.type];
          console.log(Component.name)

          return (
            <div key={el.id} style={{ display: "flex", alignItems: "stretch" }}>
              <Component
                el={el}
                value={formValue[el.id]}
                onChange={(value: any) =>
                  onChange?.({ ...formValue, [el.id]: value })
                }
              />
              <button
                className="delete-btn"
                onClick={() => removeElement(el.id)}
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
