import React, { useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import "../App.css";

interface FormType {
  title: string;
  dateCreated: Date;
  dateModified: Date;
  status: "published" | "unpublished";
}

const FormList = () => {
  const { register, handleSubmit } = useForm<FormType[]>({
    defaultValues: [
      {
        title: "test",
        dateCreated: new Date(Date.now()),
        dateModified: new Date(Date.now()),
        status: "unpublished",
      },
    ],
  });
  const [forms, setForms] = useState<FormType[]>([
    {
      title: "test",
      dateCreated: new Date(Date.now()),
      dateModified: new Date(Date.now()),
      status: "unpublished",
    },
  ]);
  return forms.map((form) => {
    return (
      <div className="Form">
        <span>{form.title}</span>
        <span>Date Created: {`${form.dateCreated}`} </span>
        <span>Date Modified: {`${form.dateModified}`}</span>
        <span>Status: {form.status}</span>
        <button>Delete</button>
        <button>Edit</button>
        <button>View Results</button>
      </div>
    );
  });
};

export default FormList;
