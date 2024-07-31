import { ElementTypes } from "../inputTypes";
import { useForm } from "react-hook-form";
import { PanelCheckbox } from "./PanelCheckbox";
import { PanelText } from "./PanelText";
import { PanelRadio } from "./PanelRadio";
import { PanelDropDown } from "./PanelDropDown";

interface SidePanelForm {
  type: ElementTypes;
}

export const SidePanel = () => {
  const { register, watch } = useForm<SidePanelForm>({
    defaultValues: { type: "text" },
  });
  return (
    <div className="SidePanelForm">
      <form action="">
        <fieldset id="inputGroup" className="FieldSelection">
          <legend>Select a field type:</legend>
          <select {...register("type", { required: true })} defaultValue="text">
            <option value="text">Text</option>
            <option value="checkbox">CheckBox</option>
            <option value="radio">Radio</option>
            <option value="checkbox">Drop-Down</option>
          </select>
        </fieldset>
      </form>
      {watch("type") === "text" && <PanelText></PanelText>}
      {watch("type") === "radio" && <PanelRadio></PanelRadio>}
      {watch("type") === "checkbox" && <PanelCheckbox></PanelCheckbox>}
      {watch("type") === "dropdown" && <PanelDropDown></PanelDropDown>}
    </div>
  );
};
