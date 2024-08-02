import { useEffect, useState } from "react";
import "../App.css";
import { FormType } from "../Types/formType";
import { ElementInterfaces } from "./inputTypes";

interface FormTypeWithDate {
  formName: string;
  isPublished: boolean;
  elementsInfo: ElementInterfaces[];
  dateCreated: string;
  dateModified: string;
}

const FormList = () => {
  const [forms, setForms] = useState<FormTypeWithDate[]>([]);

  useEffect(() => {
    const postForms = forms.map((form) => {
      const newForm: FormType = {
        formName: form.formName,
        isPublished: form.isPublished,
        elementsInfo: form.elementsInfo,
      };
      return newForm;
    });
    // api call PostForms
  });
  //api call : recieve forms

  return forms.map((form, index) => {
    return (
      <div className="Form">
        <span>{form.formName}</span>
        <span>Date Created: {`${form.dateCreated}`} </span>
        <span>Date Modified: {`${form.dateModified}`}</span>
        <span>Status: {form.isPublished}</span>
        <button
          onClick={() => {
            setForms((forms) => {
              return forms.slice(0, index).concat(forms.slice(index + 1));
            });
          }}
        >
          Delete
        </button>
        <button>Edit</button>
        <button>View Results</button>
      </div>
    );
  });
};

export default FormList;
