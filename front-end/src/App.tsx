import { createContext, useCallback, useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import CreateForm from "./Components/CreateForm";
import EditForm from "./Components/EditForm";
import ViewResults from "./Components/ViewResult";
import ResultList from "./Components/ResultList";
import FormList from "./Components/FormList";
import FillForm from "./Components/FillForm";
import { FormType } from "./Types/formType";

interface Route {
  route:
    | "dashboard"
    | "createForm"
    | "editForm"
    | "fillForm"
    | "formList"
    | "resultList"
    | "viewRelusts";
  form: FormType;
}

export const RouteContext = createContext({
  updateRoute: (route: Route) => {},
});

const setCurrentPage = (route: Route) => {
  switch (route.route) {
    case "dashboard":
      return <Dashboard></Dashboard>;
    case "createForm":
      return <CreateForm></CreateForm>;
    case "editForm":
      return (
        <EditForm
          elements={route.form.elements}
          title={route.form.title}
        ></EditForm>
      );
    case "fillForm":
      return <FillForm></FillForm>;
    case "formList":
      return <FormList></FormList>;
    case "resultList":
      return <ResultList form={route.form}></ResultList>;
    case "viewRelusts":
      return <ViewResults></ViewResults>;
  }
};

function App() {
  const [routeState, setRoute] = useState<Route>({
    route: "dashboard",
    form: { elements: [], title: "", isPublished: false, results: [] },
  });
  const updateRoute = useCallback((route: Route) => {
    setRoute(route);
  }, []);
  return (
    <RouteContext.Provider value={{ updateRoute }}>
      <div className="App">{setCurrentPage(routeState)} </div>
    </RouteContext.Provider>
  );
}
export default App;
