import z from "zod";

const postSchema = z.object({
  name: z.string({ invalid_type_error: "Name must be a string" }),
  prompt: z.string({ invalid_type_error: "Prompt must be a string" }),
  photo: z.string(),
});

export function validatePost(input) {
  return postSchema.safeParse(input);
}
