import { ChangeEvent, useCallback } from "react";
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
        onChange?.(value);
      },
      [onChange]
    );
    return (
      <fieldset className="element-row">
        <p> {el.title}</p>
        {el.options.map((option) => {
          return (
            <>
              <label>{option.title}</label>
              <input
                type="radio"
                name={el.id}
                value={option.title}
                checked={option.title == value}
                onChange={handleChange}
              ></input>
            </>
          );
        })}
      </fieldset>
    );
  }