import { useCallback, useContext, useEffect, useState } from "react";
import "../App.css";
import { FormType } from "../Types/formType";
import { RouteContext } from "../App";

const FormList = () => {
  //api call : recieve forms
  const [forms, setForms] = useState<FormType[]>([]);
  const { updateRoute: updateRoute } = useContext(RouteContext);
  const deleteForm = useCallback((index: number) => {
    setForms((forms) => {
      return forms.slice(0, index).concat(forms.slice(index + 1));
    });
  }, []);
  const editForm = useCallback((index: number, newForm: FormType) => {
    setForms((forms) => {
      return forms
        .slice(0, index)
        .concat(newForm)
        .concat(forms.slice(index + 1));
    });
  }, []);

  useEffect(() => {
    // api post forms(after publish and delete)
  }, [forms]);

  return forms.map((form, index) => {
    return (
      <div className="Form">
        <span>{form.title}</span>
        <button
          onClick={() => {
            deleteForm(index);
          }}
        >
          Delete
        </button>
        {!form.isPublished && (
          <button
            onClick={() => {
              //deletes current form and posts the form returned by the EditForm page
              deleteForm(index);
              updateRoute({
                route: "editForm",
                form: {
                  ...form,
                },
              });
            }}
          >
            Edit
          </button>
        )}
        <button
          onClick={() => {
            if (!form.isPublished) {
              const newForm: FormType = { ...form, isPublished: true };
              editForm(index, newForm);
            }
          }}
        >
          {form.isPublished ? "Published" : "Publish"}
        </button>
        {form.isPublished && (
          <button
            onClick={() => {
              updateRoute({
                route: "resultList",
                form: {
                  ...form,
                },
              });
            }}
          >
            View Results
          </button>
        )}
      </div>
    );
  });
};

export default FormList;
