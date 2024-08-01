import { textInput } from "../../inputTypes";

type TextInputProps = {
    el: textInput;
  };
  
  export function TextInput({ el }: TextInputProps) {
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