import { FormRepository } from "../repository/form.repository";

export class FormService {
    constructor(private formRepository: FormRepository) {}

    getForms = async (creatorId: string) => {
        return await this.formRepository.getForms(creatorId);
    }
}