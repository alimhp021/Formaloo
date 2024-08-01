import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { dropDownInput } from "../inputTypes";
import { useContext } from "react";
import { ElementContext } from "./CreateForm";
export const PanelDropDown = () => {
  const { register, getValues, handleSubmit, control } = useForm<dropDownInput>(
    {
      defaultValues: {
        id: "",
        type: "dropdown",
        title: "",
        isRequired: false,
        options: [{ title: "option 1" }, { title: "option 2" }],
        selected: { title: "option 1" },
      },
    }
  );
  const { fields, append, remove } = useFieldArray({
    name: "options",
    control,
  });
  const { dispatch } = useContext(ElementContext);

  const onSubmit: SubmitHandler<dropDownInput> = (data) => {
    dispatch!({ type: "dropdown", value: data });
  };

  return (
    <form action="" className="TextForm" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Enter field's title</label>

      <input
        {...register("title", { required: true })}
        type="text"
        placeholder="Enter field's title"
        id="title"
      />
      <section>
        <input {...register("isRequired")} type="checkbox" id="required" />
        <label htmlFor="required">Required?</label>
      </section>
      <section>
        {fields.map((field, index) => {
          return (
            <section key={field.id}>
              <label htmlFor={field.id}>Option {index + 1}: </label>
              <input
                {...register(`options.${index}.title` as const, {
                  required: true,
                })}
                id={field.id}
                type="text"
              ></input>
              {index > 1 && (
                <button type="button" onClick={() => remove(index)}>
                  remove
                </button>
              )}
            </section>
          );
        })}
        <button
          type="button"
          onClick={() =>
            append({ title: `option ${getValues("options").length + 1}` })
          }
        >
          APPEND
        </button>
      </section>
      <button type="submit">Submit</button>
    </form>
  );
};
