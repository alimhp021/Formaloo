import "./form-preview.css";
import "../../inputTypes";
import { ElementInterfaces } from "../../inputTypes";
import { TextInput } from "./text-input";
import { RadioButton } from "./radio-button";
import { DropDown } from "./drop-down";
import { MultiSelect } from "./multi-select";
 

export type FormPreviewProps = {
  formTitle: string;
  elements: ElementInterfaces[];
};


// const componentTypeMap = {
//   inputText: TextInput,
//   multiSelect: MultiSelect,
//   radio: RadioButton,
//   select: DropDown,
// } satisfies Record<
//   FormalooInputSchema["type"],
//   React.FunctionComponent<ElementProps>
// >;
//"text" | "checkbox" | "radio" | "dropdown"
// const componentTypeMap = {
//     textInput: TextInput,
//     checkBoxInput: MultiSelect,
//     radioInput: RadioButton,
//     dropDownInput: DropDown,
//   } satisfies Record<
//     FormalooInputSchema["type"],
//     React.FunctionComponent<ElementProps>
//   >;

export function FormPreview({ elements, formTitle }: FormPreviewProps) {
  return (
    <div>
      <form className="form-preview">
        <label>
         <h1>{formTitle} Form</h1>
        </label>
        {elements.map((el) => {
          switch (el.type) {
            case "text":
              return <TextInput key={el.id} el={el} />;
            case "radio":
              return <RadioButton key={el.id} el={el} />;
            case "dropdown":
              return <DropDown key={el.id} el={el} />;
            case "checkbox":
              return <MultiSelect key={el.id} el={el} />;
          }
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
