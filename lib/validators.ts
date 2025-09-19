import { z } from "zod";

export const onboardingSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  projectName: z.string().min(2, "Project name is required"),
  primaryGoals: z.string().min(5, "Please describe primary goals"),
  additionalNotes: z.string().optional()
});

export type OnboardingInput = z.infer<typeof onboardingSchema>;