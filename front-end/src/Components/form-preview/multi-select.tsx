import { useCallback, useState } from "react";
import { checkBoxInput } from "../../inputTypes";

type MultiSelectProps = {
  el: checkBoxInput;
  onChange?: (selected: string[]) => void;
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

export function MultiSelect({ el, onChange }: MultiSelectProps) {
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
                    name={`${el.id}-${value}`}
                    value={value}
                    checked={selected.includes(value)}
                    onChange={handleChange}
                  />
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>
    </form>
  );
}
