import { useCallback, useState } from "react";
import "./form-preview.css";
import "./inputTypes";
import {
  checkBoxInput,
  dropDownInput,
  ElementInterfaces,
  radioInput,
  textInput,
} from "./inputTypes";
import { ElementTypes } from "./inputTypes";

// export type FormalooInputSchema = {
//     id: string;
//     title: string;
//     //   type: string;//'inputText' | 'radio' | 'select' | 'multiSelect';
//     type: ElementTypes;//"inputText" | "radio" | "select" | "multiSelect";
//     option: {
//       requierd: boolean;
//     };
//   };
export type FormPreviewProps = {
  formTitle: string;
  elements: ElementInterfaces[];
};

//   type FormPreviewProps = {
//     elements: FormalooInputSchema[];
//   };
//type ElementProps = { el: FormalooInputSchema };
//type ElementProps = { el: FormalooInputSchema | textInput | checkBoxInput | radioInput |dropDownInput };
// type ElementProps<T extends ElementTypes = ElementTypes> = {
//   el: ElementInterfaces & { type: T };
// }; //why?

type TextInputProps = {
  el: textInput;
};

function TextInput({ el }: TextInputProps) {
  return (
    <fieldset className="element-row">
      <label>
        {el.title}
        <input
          placeholder={el.placeholder}
          required={el.isRequired}
          {...el.validations}
          value={el.text}
        />
      </label>
    </fieldset>
  );
}

type RadioButtonProps = {
  el: radioInput;
};

function RadioButton({ el }: RadioButtonProps) {
  // type: "radio";
  // options: { title: string }[];
  // selected: { title: string };

  //selected baraye chi hast??
  return (
    <fieldset className="element-row">
      <p> {el.title}</p>
      {el.options.map((val, _) => {
        return (
          <>
            <label>{val.title}</label>
            <input
              type={el.type}
              name="hardCode?????"
              value={val.title}
            ></input>
          </>
        );
      })}
    </fieldset>
  );
  //   return (
  //     <fieldset>
  //       <p> {el.title}</p>
  //       {dataPairs.map(([key, value], _) => {
  //         return (
  //           <>
  //             <label>{key}</label>
  //             <input type="radio" name="hardCode?????" value={value}></input>
  //           </>
  //         );
  //       })}
  //     </fieldset>
  //   );
}

type Option =
  | string
  | {
      text?: string;
      value?: string;
      title?: string;
    };

function normalizeOptions(options: Option[]) {
  return Array.isArray(options)
    ? options.map((v) =>
        typeof v == "string"
          ? { text: v, value: v }
          : { text: v.text ?? v.title ?? "", value: v.value ?? v.title ?? "" }
      )
    : Object.entries<string>(options).map(([key, value]) => ({
        text: key,
        value,
      }));
}

type DropDownProps = {
  el: dropDownInput;
};
function DropDown({ el }: DropDownProps) {
  const options = normalizeOptions(el.options);
  return (
    <fieldset className="element-row">
      <label>
        {el.title}
        <select name={el.id} defaultValue={el.selected.title}>
          {options.map(({ text, value }) => {
            //what's select value????? and also name!
            return (
              <option key={value} value={value}>
                {text}
              </option>
            );
          })}
        </select>
      </label>
    </fieldset>
  );
}

type MultiSelectProps = {
  el: checkBoxInput;
  onChange?: (selected: string[]) => void;
};

function MultiSelect({ el, onChange }: MultiSelectProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;
      setSelected((prev) => {
        const selected = checked
          ? [...prev, value]
          : prev.filter((v) => v !== value);
        onChange?.(selected);
        return selected;
      });
    },
    []
  );
  const options = normalizeOptions(el.options);
  return (
    <form>
      <fieldset className="element-row">
        <legend>{el.title}</legend>
        <ul>
          {options.map(({ text, value }) => {
            return (
              <li>
                <label>
                  {text}
                  <input
                    type="checkbox"
                    name={`${value}-checkbox`}
                    value={value}
                    checked={selected.includes(value)}
                    onChange={handleChange}
                  />
                  {/* name???? */}
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>
    </form>
  );
}

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
