import { useRef, useState } from "react";
import "./generate-form.css";
import { Form } from "../form-preview/form-preview";
import { ElementInterfaces } from "../../inputTypes";

type GenerateFormProps = {
  elementsInfo: ElementInterfaces[];
};

export function GenerateForm({ elementsInfo }: GenerateFormProps) {
  const [formTitle, setFormTitle] = useState("");
  const [formValue, setFormValue] = useState();

  const createFormUrl = '/createForm"';
  return (
    <div className="generate-form">
      <Form
        elements={elementsInfo}
        formTitle={formTitle}
        formValue={formValue}
        onChange={setFormValue}
      />
      <form
        className="create-generated-form"
        onSubmit={async (e) => {
          e.preventDefault();
          const headers = new Headers();
          headers.append("Content-Type", "application/json");
          const formData = new FormData(e.currentTarget);

          const data = {
            elementsInfo,
            isPublished: !!formData.get("isPublished"),
            formName: formTitle,
          };
          const res = await fetch(createFormUrl, {
            method: "POST",
            headers,
            body: JSON.stringify(data),
          });
          console.log(res);
          // TODO: redirect user
        }}
      >
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          Enter Your Form Name
          <input
            type="text"
            onChange={(e) => {
              setFormTitle(e.currentTarget.value);
            }}
          />
        </label>
        <label style={{ display: "flex", gap: "0.5rem" }}>
          Is Published?
          <input type="checkbox" name="isPublished" />
        </label>
        <button type="submit"> submit</button>
      </form>
    </div>
  );
}
