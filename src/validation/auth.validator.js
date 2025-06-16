import { z } from 'zod'

export const signupUserSchema = z.object({
    username: z.string().min(5).max(255),
    email: z.string().email(),
    password: z.string().min(7).max(255),
});

export const loginUserSchema = signupUserSchema.omit({ username: true });
