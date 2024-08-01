import { useRef } from "react";
import { FormPreview } from "./form-preview";
import "./generate-form.css";
import { ElementInterfaces } from "./inputTypes";

type GenerateFormProps = {
  elementsInfo: ElementInterfaces[];
  formName: string;
};

export function GenerateForm({ elementsInfo, formName }: GenerateFormProps) {
  const isChecked = useRef(false);

  return (
    <>
      <div>
      <FormPreview elements={elementsInfo} formTitle={formName}/>
        
      </div>
      <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const headers = new Headers();
          headers.append("Content-Type", "application/json");
          const data = {
            elementsInfo,
            isPublished: isChecked.current,
            formName
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
        <input
          type="checkbox"
          onChange={(e) => (isChecked.current = e.target.checked)}
        />
        <button type="submit"> submit</button>
      </form>
      </div>
    </>
  );
}
