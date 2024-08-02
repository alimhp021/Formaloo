import { Fragment, useCallback, useState } from "react";
import { checkBoxInput } from "../../Types/inputTypes";

type MultiSelectProps = {
  el: checkBoxInput;
  value?: string[];
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

export function MultiSelect({
  el,
  value: selected = [],
  onChange,
}: MultiSelectProps) {
  const handleChange = useCallback(
    ({ target: { value, checked } }: React.ChangeEvent<HTMLInputElement>) => {
      console.log({ value, checked, selected });
      onChange?.(
        checked ? [...selected, value] : selected.filter((v) => v !== value)
      );
    },
    [selected]
  );

  const options = normalizeOptions(el.options);
  return (
    <fieldset className="element-row">
      <h3>{el.title}</h3>
      <ul>
        {options.map(({ text, value }) => {
          return (
            <Fragment key={`${el.id} ${text} ${value}`}>
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
            </Fragment>
          );
        })}
      </ul>
    </fieldset>
  );
}
