import { ElementTypes } from "../../Types/inputTypes";
import { useForm } from "react-hook-form";
import { PanelCheckbox } from "./PanelCheckbox";
import { PanelText } from "./PanelText";
import { PanelRadio } from "./PanelRadio";
import { PanelDropDown } from "./PanelDropDown";

interface SidePanelForm {
  type: ElementTypes;
}

const setForm = (type: ElementTypes) => {
  switch (type) {
    case "text":
      return <PanelText></PanelText>;
    case "checkbox":
      return <PanelCheckbox></PanelCheckbox>;
    case "dropdown":
      return <PanelDropDown></PanelDropDown>;
    case "radio":
      return <PanelRadio></PanelRadio>;
  }
};

export const SidePanel = () => {
  const { register, watch } = useForm<SidePanelForm>({
    defaultValues: { type: "text" },
  });
  return (
    <div className="SidePanelForm">
      <fieldset id="inputGroup" className="FieldSelection">
        <legend>Select a field type:</legend>
        <select {...register("type", { required: true })} defaultValue="text">
          <option value="text">Text</option>
          <option value="checkbox">CheckBox</option>
          <option value="radio">Radio</option>
          <option value="dropdown">Drop-Down</option>
        </select>
      </fieldset>
      {setForm(watch("type"))}
    </div>
  );
};
