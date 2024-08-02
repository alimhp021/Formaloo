import { ElementInterfaces } from "./inputTypes";

interface FormType {
  title: string;
  status: "published" | "unpublished";
  elements: ElementInterfaces[];
}
export type { FormType };
