import { FormRepository } from "../repository/form.repository";

export class FormService {
    constructor(private formRepository: FormRepository) {}

    getForms = async () => {
        return await this.formRepository.getForms();
    }
}