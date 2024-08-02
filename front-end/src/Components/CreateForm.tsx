import { useCallback, useEffect, useState } from "react";
import { createContext } from "react";
import { ElementInterfaces } from "../Types/inputTypes";
import { SidePanel } from "./Partial Components/SidePanel";
import { nanoid } from "nanoid";
import { GenerateForm } from "./generate-form/generate-form";

interface CreateFormState {
  elements: ElementInterfaces[];
}

type ElementContext = {
  addElement: ((arg: ElementInterfaces) => void) | null;
  removeElement: ((id: string) => void) | null;
};
export const ElementContext = createContext<ElementContext>({
  addElement: null,
  removeElement: null,
});

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
