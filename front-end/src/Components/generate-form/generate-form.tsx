import { useRef } from "react";
import "./generate-form.css";
import { Form } from "../form-preview/form-preview";
import { ElementInterfaces } from "../../inputTypes";

type GenerateFormProps = {
  elementsInfo: ElementInterfaces[];
};

export function GenerateForm({ elementsInfo }: GenerateFormProps) {
  const isPublished = useRef(false);
  const formName = useRef('');

  return (
    <>
      <div>
      <Form elements={elementsInfo} formTitle={formName.current}/>
      </div>
      <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const headers = new Headers();
          headers.append("Content-Type", "application/json");
          const data = {
            elementsInfo,
            isPublished: isPublished.current,
            formName: formName.current
          };
          const res = await fetch("/url", {
            method: "POST",
            headers,
            body: JSON.stringify(data),
          });
           console.log(res);
          // TODO: redirect user
        }}
      >
        <label>
          Enter Your Form Name :
        <input type="text" onChange={(e)=>{formName.current=e.currentTarget.value}} />
        </label>
        <input
          type="checkbox"
          name="isPublished"
          onChange={(e) => (isPublished.current = e.target.checked)}
        />
        <button type="submit"> submit</button>
      </form>
      </div>
    </>
  );
}
