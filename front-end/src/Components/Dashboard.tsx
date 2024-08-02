import { RouteContext } from "../App";
import { useContext } from "react";
const Dashboard = () => {
  const { updateRoute: updateRoute } = useContext(RouteContext);
  return (
    <div>
      <button
        onClick={() => {
          updateRoute("createForm");
        }}
      >
        Create Form
      </button>
      <button
        onClick={() => {
          updateRoute("editForm");
        }}
      >
        Forms List
      </button>
    </div>
  );
};
export default Dashboard;
