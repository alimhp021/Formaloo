import { z } from "zod";

export const formDto = z.object({
    creatorId: z.string().nonempty(),
    title: z.string().nonempty(),
    isPublished: z.boolean(),
    fields: z.string(),
});

export type FormDto  = z.infer<typeof formDto>;