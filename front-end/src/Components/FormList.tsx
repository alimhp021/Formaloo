import { useState } from "react";
import "../App.css";

interface FormType {
  title: string;
  dateCreated: string;
  dateModified: string;
  status: "published" | "unpublished";
}

const FormList = () => {
  const [forms, setForms] = useState<FormType[]>([]);

  //api call to setForms

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
            // api call new form list
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
