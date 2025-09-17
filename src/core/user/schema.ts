import { z } from "zod";

export const registerUserSchema = z
  .object({
    email: z.string().email("please enter the valid email address"),
    firstname: z.string({
      message: "This field must be required",
    }),
    lastname: z.string({ message: "This field must be required" }),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
        "Password must contain at least one uppercase letter, one number, and one symbol"
      ),
    rePassword: z.string(),
    agreement: z.boolean().default(false),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords must match",
    path: ["rePassword"],
  })
  .refine((data) => data.agreement === true, {
    message: "Please check agreement",
    path: ["agreement"],
  });
export type RegisterUserInput = z.infer<typeof registerUserSchema>;
