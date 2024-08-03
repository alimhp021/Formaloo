import { RouteContext } from "../App";
import { useContext } from "react";
const Dashboard = () => {
  const { updateRoute: updateRoute } = useContext(RouteContext);
  return (
    <div>
      <button
        onClick={() => {
          updateRoute({
            route: "createForm",
            form: { title: "", elements: [], results: [], isPublished: false },
          });
        }}
      >
        Create Form
      </button>
      <button
        onClick={() => {
          updateRoute({
            route: "formList",
            form: { title: "", elements: [], results: [], isPublished: false },
          });
        }}
      >
        Forms List
      </button>
    </div>
  );
};
export default Dashboard;
