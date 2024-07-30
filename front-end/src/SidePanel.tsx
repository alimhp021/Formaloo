import { useRef, useState } from "react";
import { ElementTypes, ElementInterfaces } from "../inputTypes";
import { useForm, SubmitHandler } from "react-hook-form";

interface SidePanelForm {
  inputType: ElementTypes;
}
export const SidePanel = () => {
  // const { register, handleSubmit } = useForm<IFormInput>();

  return (
    <form action="" className="SidePanelForm">
      <fieldset id="inputGroup" className="FieldSelection">
        <legend>Select a field type:</legend>
        <div>
          <input type="radio" name="type" id="text"></input>
          <label htmlFor="text">Text</label>
        </div>
        <div>
          <input type="radio" name="type" id="checkbox"></input>
          <label htmlFor="checkbox">CheckBox</label>
        </div>
        <div>
          <input type="radio" name="type" id="radio"></input>
          <label htmlFor="radio">Radio</label>
        </div>
        <div>
          <input type="radio" name="type" id="dropdown"></input>
          <label htmlFor="dropdown">Drop-Down</label>
        </div>
      </fieldset>
    </form>
  );
};
