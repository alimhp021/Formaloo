export const formsSchemaObject = {
    id: {type: Number, required: true},
    creatorId: {type: String, required: true},
    title: {type: String, required: true},
    createDate: {type: Date, required: true, default: Date.now},
    modifyDate: {type: Date, required: true, default: Date.now},
    isPublished: {type: Boolean, required: true},
    fields: {type: String, required: true},
};
