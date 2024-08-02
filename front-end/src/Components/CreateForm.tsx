import { useCallback, useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { ElementInterfaces } from "../inputTypes";
import { SidePanel } from "./SidePanel";
// import { RouteContext } from "../App";
import { nanoid } from "nanoid";
import { GenerateForm } from "./generate-form/generate-form";

interface CreateFormState {
  elements: ElementInterfaces[];
}

type ElementContext = { addElement: ((arg: ElementInterfaces) => void), removeElement: (id: string) => void };
export const ElementContext = createContext<ElementContext>(null as any);

// const { updateRoute: updateRoute } = useContext(RouteContext);

function CreateForm() {
  const [elementState, setElements] = useState<CreateFormState>({
    elements: [],
  });
  useEffect(() => {}, [elementState]);

  const addElement = useCallback((element: ElementInterfaces) => {
    setElements((elementState) => {
      return {
        elements: [...elementState.elements, { ...element, id: nanoid() }],
      };
    });
  }, []);

  const removeElement = useCallback(
    (id: string) =>
      setElements((elementState) => ({
        ...elementState,
        elements: elementState.elements.filter((el) => el.id != id),
      })),
    []
  );

  return (
    <div className="CreateForm">
      <ElementContext.Provider value={{ addElement, removeElement }}>
        <SidePanel></SidePanel>
        <GenerateForm elementsInfo={elementState.elements} />
      </ElementContext.Provider>
    </div>
  );
}

export default CreateForm;
