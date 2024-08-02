import { useEffect, useState } from "react";
import "../App.css";
import { FormType } from "../Types/formType";

interface FormTypeWithDate extends FormType {
  dateCreated: string;
  dateModified: string;
}

const FormList = () => {
  const [forms, setForms] = useState<FormTypeWithDate[]>([]);

  useEffect(() => {
    const postForms: FormType[] = forms.map((form) => {
      const newForm: FormType = {
        title: form.title,
        status: form.status,
        elements: form.elements,
      };
      return newForm;
    });
    // api call PostForms
  });
  //api call : recieve forms

  return forms.map((form, index) => {
    return (
      <div className="Form">
        <span>{form.title}</span>
        <span>Date Created: {`${form.dateCreated}`} </span>
        <span>Date Modified: {`${form.dateModified}`}</span>
        <span>Status: {form.status}</span>
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
