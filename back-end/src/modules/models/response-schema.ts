export const responsesSchemaObject = {
    id: {type: Number, required: true},
    formId: {type: Number, required: true},
    name: {type: String, required: true},
    createTime: {type: Date, required: true, default: Date.now},
    answers: {type: String, required: true},
};
