import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createContext } from "react";
import { ElementInterfaces } from "../Types/inputTypes";
import { SidePanel } from "./Partial Components/SidePanel";
import { nanoid } from "nanoid";
import { GenerateForm } from "./generate-form/generate-form";

interface CreateFormState {
  elements: ElementInterfaces[];
}

type ElementsSetter = Dispatch<SetStateAction<CreateFormState>>;

const createElementContextValue = (setElements: ElementsSetter) => ({
  addElement(element: ElementInterfaces) {
    setElements((elementState) => {
      return {
        elements: [...elementState.elements, { ...element, id: nanoid() }],
      };
    });
  },
  removeElement(id: string) {
    setElements((elementState) => ({
      ...elementState,
      elements: elementState.elements.filter((el) => el.id != id),
    }));
  },
});

type ElementContext = ReturnType<typeof createElementContextValue>;

export const ElementContext = createContext<ElementContext>(null as any);

function CreateForm() {
  const [elementState, setElements] = useState<CreateFormState>({
    elements: [],
  });

  const elementContextValue = useMemo(
    () => createElementContextValue(setElements),
    []
  );

  useEffect(() => {}, [elementState]);

  return (
    <div className="CreateForm">
      <ElementContext.Provider value={elementContextValue}>
        <SidePanel></SidePanel>
        <GenerateForm elementsInfo={elementState.elements} />
      </ElementContext.Provider>
    </div>
  );
}

export default CreateForm;
