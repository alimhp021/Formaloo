import { ChangeEvent, Fragment, useCallback } from "react";
import { radioInput } from "../../inputTypes";

type RadioButtonProps = {
  el: radioInput;
  value?: string;
  onChange?: (value: string) => void;
};

export function RadioButton({ el, value, onChange }: RadioButtonProps) {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      console.log({value})
      onChange?.(value);
    },
    [onChange]
  );
  return (
    <fieldset className="element-row" style={{ display: "flex", alignItems: "center", flexDirection: 'column' }}>
      <p> {el.title}</p>
      {el.options.map((option) => {
        return (
          <div key={`${el.id} ${option.title}`}>
            <label>{option.title}</label>
            <input
              type="radio"
              name={el.id}
              value={option.title}
              checked={option.title == value}
              onChange={handleChange}
            />
          </div>
        );
      })}
    </fieldset>
  );
}
