import z from "zod";

safePar;

const postSchema = z.object({
  name: z.string(),
  prompt: z.string(),
  photo: z.string(),
});

export function validatePost(input) {
  return postSchema.safeParse(input);
}
