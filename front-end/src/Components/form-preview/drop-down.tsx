import { dropDownInput } from "../../inputTypes";



type DropDownProps = {
    el: dropDownInput;
  };

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
      
 export function DropDown({ el }: DropDownProps) {
    const options = normalizeOptions(el.options);
    return (
      <fieldset className="element-row">
        <label>
          {el.title}
          <select name={el.id} defaultValue={el.selected.title}>
            {options.map(({ text, value }) => {
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