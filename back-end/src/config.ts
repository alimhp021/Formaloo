import { makeDataHandler } from "./database/data-handler";
import { FormRepository } from "./modules/repository/form.repository";
import { FormService } from "./modules/services/get-forms";

export const dataHandler = makeDataHandler();

export const formRepository = new FormRepository(dataHandler);
export const formService = new FormService(formRepository);