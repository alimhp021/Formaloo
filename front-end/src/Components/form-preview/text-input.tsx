import { ChangeEvent, useCallback } from "react";
import { textInput } from "../../inputTypes";

type TextInputProps = {
  el: textInput;
  value?: string;
  onChange?: (value: string) => void;
};

export function TextInput({ el, value = "", onChange }: TextInputProps) {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <fieldset className="element-row" style={{margin: 0}}>
      <label>
        {el.title}
        <input
          name={el.id}
          placeholder={el.placeholder}
          required={el.isRequired}
          {...el.validations}
          value={value}
          onChange={handleChange}
        />
      </label>
    </fieldset>
  );
}
