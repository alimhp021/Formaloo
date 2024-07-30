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
          <label htmlFor="text">text</label>
        </div>
        <div>
          <input
            {...register("inputType")}
            type="radio"
            name="type"
            id="checkbox"
          ></input>
          <label htmlFor="checkbox">checkbox</label>
        </div>
        <div>
          <input
            {...register("inputType")}
            type="radio"
            name="type"
            id="radio"
          ></input>
          <label htmlFor="radio">radio</label>
        </div>
        <div>
          <input
            {...register("inputType")}
            type="radio"
            name="type"
            id="dropdown"
          ></input>
          <label htmlFor="dropdown">dropdownnp</label>
        </div>
      </fieldset>
    </form>
  );
};
