import { ElementTypes } from "../inputTypes";
import { useForm } from "react-hook-form";

interface SidePanelForm {
  inputType: ElementTypes;
}
export const SidePanel = () => {
  const { register } = useForm<SidePanelForm>({
    defaultValues: {
      inputType: "text",
    },
  });

  return (
    <form action="" className="SidePanelForm">
      <fieldset id="inputGroup" className="FieldSelection">
        <legend>Select a field type:</legend>
        <div>
          <input
            {...register("inputType")}
            type="radio"
            name="type"
            id="text"
            checked
          ></input>
          <label htmlFor="text">Text</label>
        </div>
        <div>
          <input
            {...register("inputType")}
            type="radio"
            name="type"
            id="checkbox"
          ></input>
          <label htmlFor="checkbox">CheckBox</label>
        </div>
        <div>
          <input
            {...register("inputType")}
            type="radio"
            name="type"
            id="radio"
          ></input>
          <label htmlFor="radio">Radio</label>
        </div>
        <div>
          <input
            {...register("inputType")}
            type="radio"
            name="type"
            id="dropdown"
          ></input>
          <label htmlFor="dropdown">Drop-Down</label>
        </div>
      </fieldset>
    </form>
  );
};
