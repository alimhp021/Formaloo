import { createContext, useCallback, useState } from "react";
import "./App.css";
import CreateForm from "./Components/CreateForm";

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

function App() {
  const [route, setRoute] = useState({ route: "createForm" });
  const updateRoute = useCallback((route: Route["route"]) => {
    setRoute({ route: route });
  }, []);
  return (
    <RouteContext.Provider value={{ updateRoute }}>
      <div className="App">
        <CreateForm></CreateForm>
      </div>
    </RouteContext.Provider>
  );
}
export default App;
