import { z } from "zod";

export const loginSchema = z.object({
  userName: z.string().min(3, { message: "Must be atleast 3 characters" }),
  password: z.string().min(4, { message: "Must be atleast 4 characters" }),
});

export const newCourseSchema = z.object({
  title: z.string().min(3, { message: "Must be atleast 3 characters" }),
  price: z.number().gt(0, { message: "Must be greater than zero" }),
  description: z.string().min(3, { message: "Must be atleast 3 characters" }),
});
