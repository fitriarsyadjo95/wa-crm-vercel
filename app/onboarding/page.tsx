"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema, type OnboardingInput } from "@/lib/validators";
import { Input, Label, TextArea } from "@/components/FormField";

export default function OnboardingPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<OnboardingInput>({
    resolver: zodResolver(onboardingSchema)
  });

  const onSubmit = async (data: OnboardingInput) => {
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const error = await res.text();
        alert(`Submission failed: ${error}`);
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="pb-12">
      {isSuccess && (
        <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
          ✓ Your project has been successfully submitted!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <h1 className="text-3xl font-bold mb-2">Website Onboarding Survey</h1>

        <div className="rounded-2xl border border-gray-200 p-6 bg-white space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Project Information</h2>

          <div>
            <Label>Company Name *</Label>
            <Input register={register("companyName")} error={errors.companyName} placeholder="Your company name" />
          </div>

          <div>
            <Label>Contact Person *</Label>
            <Input register={register("contactName")} error={errors.contactName} placeholder="Full name" />
          </div>

          <div>
            <Label>Email *</Label>
            <Input register={register("email")} error={errors.email} type="email" placeholder="email@company.com" />
          </div>

          <div>
            <Label>Project Name *</Label>
            <Input register={register("projectName")} error={errors.projectName} placeholder="e.g., Company Website Revamp" />
          </div>

          <div>
            <Label>Primary Goals *</Label>
            <TextArea
              register={register("primaryGoals")}
              error={errors.primaryGoals}
              rows={3}
              placeholder="What are the main objectives of this website?"
            />
          </div>

          <div>
            <Label>Additional Notes</Label>
            <TextArea
              register={register("additionalNotes")}
              rows={4}
              placeholder="Any other requirements or special requests?"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit Form"}
          </button>

          <button
            type="button"
            onClick={() => reset()}
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-50 transition-colors"
          >
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
}