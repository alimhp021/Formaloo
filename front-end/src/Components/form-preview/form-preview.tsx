import "./form-preview.css";
import "../../inputTypes";
import { ElementInterfaces, ElementTypes } from "../../inputTypes";
import { TextInput } from "./text-input";
import { RadioButton } from "./radio-button";
import { DropDown } from "./drop-down";
import { MultiSelect } from "./multi-select";

export type FormPreviewProps = {
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
}: FormPreviewProps) {
  return (
    <div>
      <form className="form-preview">
        <h3>{formTitle} Form</h3>
        {elements.map((el) => {
          const Component = componentTypeMap[el.type];

          return (
            <Component
              key={el.id}
              el={el}
              value={formValue[el.id]}
              onChange={(value: any) =>
                onChange?.({ ...formValue, [el.id]: value })
              }
            />
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
