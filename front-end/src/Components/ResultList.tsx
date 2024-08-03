import { FormType } from "../Types/formType";
import { RouteContext } from "../App";
import { useContext } from "react";

const ResultList = ({ form }: { form: FormType }) => {
  const { updateRoute: updateRoute } = useContext(RouteContext);
  return (
    <div>
      {form.results.map((res) => {
        return (
          <div>
            <head>{res.submissionName}</head>
            <button
              onClick={() => {
                updateRoute!({ route: "viewRelusts", form: { ...form } });
              }}
            ></button>
          </div>
        );
      })}
    </div>
  );
};
export default ResultList;
