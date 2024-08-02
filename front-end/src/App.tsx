import { createContext, useCallback, useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import CreateForm from "./Components/CreateForm";
import EditForm from "./Components/EditForm";
import ViewResults from "./Components/ViewResult";
import ResultList from "./Components/ResultList";
import FormList from "./Components/FormList";
import FillForm from "./Components/FillForm";

interface Route {
  route:
    | "dashboard"
    | "createForm"
    | "editForm"
    | "fillForm"
    | "formList"
    | "resultList"
    | "viewRelusts";
}

export const RouteContext = createContext({
  updateRoute: (route: Route["route"]) => {},
});

const setCurrentPage = (route: Route) => {
  switch (route.route) {
    case "dashboard":
      return <Dashboard></Dashboard>;
    case "createForm":
      return <CreateForm></CreateForm>;
    case "editForm":
      return <EditForm></EditForm>;
    case "fillForm":
      return <FillForm></FillForm>;
    case "formList":
      return <FormList></FormList>;
    case "resultList":
      return <ResultList></ResultList>;
    case "viewRelusts":
      return <ViewResults></ViewResults>;
  }
};

function App() {
  const [route, setRoute] = useState<Route>({ route: "dashboard" });
  const updateRoute = useCallback((route: Route["route"]) => {
    setRoute({ route: route });
  }, []);
  return (
    <RouteContext.Provider value={{ updateRoute }}>
      <div className="App">{setCurrentPage(route)} </div>
    </RouteContext.Provider>
  );
}
export default App;
