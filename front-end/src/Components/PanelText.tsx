import { useForm, SubmitHandler } from "react-hook-form";
import { textInput } from "../inputTypes";
import { useContext } from "react";
import { ElementContext } from "./CreateForm";
// import { number, z } from "zod";
export const PanelText = () => {
  const { register, getValues, handleSubmit } = useForm<textInput>({
    defaultValues: {
      id: "",
      type: "text",
      text: "",
      title: "",
      isRequired: false,
      placeholder: "",
      validations: {
        minLength: 1,
        maxLength: 20,
        type: "text",
      },
    },
  });

  const { addElement: addElement } = useContext(ElementContext);

  // const inputType = z.object({
  //   text: z.coerce.string(),
  //   number: z.coerce.number(),
  //   email: z.coerce.string().email(),
  //   telephone: z.coerce.string().startsWith("09").max(11).min(11).regex(/\d/),
  // });

  const onSubmit: SubmitHandler<textInput> = (data) => {
    addElement!(data);
  };

  return (
    <form className="TextForm" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Enter field's title</label>

      <input
        {...register("title", { required: true })}
        type="text"
        placeholder="Enter field's title"
        id="title"
      />
      <label htmlFor="placeholder">Enter placeholder's text</label>
      <input
        {...register("placeholder")}
        type="text"
        placeholder="Enter placeholder for field"
        id="placeholder"
      />

      <section>
        <input {...register("isRequired")} type="checkbox" id="required" />
        <label htmlFor="required"> Is this field required in your form?</label>
      </section>
      <section>
        <label htmlFor="min">Minimum Length:</label>
        <input
          type="number"
          id="min"
          {...register("validations.minLength", { min: 1 })}
          onChange={(e) => {
            if (Number(e.target.value) <= 1) {
              e.target.value = `${1}`;
            }
          }}
        />
      </section>
      <section>
        <label htmlFor="max">Maximum Length:</label>
        <input
          type="number"
          id="max"
          {...register("validations.maxLength", { min: 1 })}
          onChange={(e) => {
            if (Number(e.target.value) <= getValues("validations.minLength")) {
              e.target.value = `${getValues("validations.minLength")}`;
            }
          }}
        />
      </section>
      <fieldset id="textTypeGroup" className="">
        <legend>Select Text Input Type:</legend>
        <select {...register("validations.type")} defaultValue="text">
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="number">Number</option>
          <option value="telephone">Telephone</option>
        </select>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};
