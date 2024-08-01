import React, { useCallback, useEffect, useState } from "react";
import { createContext } from "react";
import { ElementInterfaces } from "../inputTypes";
import { SidePanel } from "./SidePanel";
import { nanoid } from "nanoid";
import { GenerateForm } from "./generate-form/generate-form";


interface CreateFormState {
  elements: ElementInterfaces[];
}

type AddElement = { addElement: ((arg: ElementInterfaces) => void) | null };
export const ElementContext = createContext<AddElement>({
  addElement: () => {},
});

function CreateForm() {
  const [elementState, setElements] = useState<CreateFormState>({
    elements: [],
  });
  useEffect(() => {
    console.log(elementState);
  }, [elementState]);

  const addElement = useCallback((element: ElementInterfaces) => {
    setElements((elementState) => {
      return {
        elements: [...elementState.elements, { ...element, id: nanoid() }],
      };
    });
  }, []);

  return (
    <div className="CreateForm">
      <ElementContext.Provider value={{ addElement: addElement }}>
        <SidePanel></SidePanel>
        <GenerateForm elementsInfo={elementState.elements}/>
      </ElementContext.Provider>
    </div>
  );
}

export default CreateForm;
