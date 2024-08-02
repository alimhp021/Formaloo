import { useCallback, ChangeEvent, useMemo } from "react";
import { dropDownInput } from "../../Types/inputTypes";

type DropDownProps = {
  el: dropDownInput;
  value?: string;
  onChange?: (value: string) => void;
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

export function DropDown({ el, value, onChange }: DropDownProps) {
  const options = useMemo(() => normalizeOptions(el.options), [el.options]);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.currentTarget.value;
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <fieldset className="element-row">
      <label>
        {el.title}
        <select
          name={el.id}
          defaultValue={el.selected.title}
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => {
            return (
              <option
                key={option.value}
                value={option.value}
                selected={value == option.value}
              >
                {option.text}
              </option>
            );
          })}
        </select>
      </label>
    </fieldset>
  );
}
