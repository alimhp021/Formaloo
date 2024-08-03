import { ElementInterfaces } from "./inputTypes";
interface formResult {
  fields: ElementInterfaces[];
  submissionName: string;
}
interface FormType {
  title: string;
  elements: ElementInterfaces[];
  isPublished: boolean;
  results: formResult[];
}
export type { FormType };
