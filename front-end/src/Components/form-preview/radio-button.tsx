import { radioInput } from "../../inputTypes";

type RadioButtonProps = {
    el: radioInput;
  };
  
  export function RadioButton({ el }: RadioButtonProps) {
    return (
      <fieldset className="element-row">
        <p> {el.title}</p>
        {el.options.map((val, _) => {
          return (
            <>
              <label>{val.title}</label>
              <input
                type={el.type}
                name={el.id}
                value={val.title}
              ></input>
            </>
          );
        })}
      </fieldset>
    );
  }