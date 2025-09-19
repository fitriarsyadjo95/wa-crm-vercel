import { NextRequest, NextResponse } from "next/server";
import { onboardingSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = onboardingSchema.parse(json);

    // For now, just return success - database integration can be added later
    console.log("Form submission:", parsed);

    return NextResponse.json({
      ok: true,
      message: "Form submitted successfully"
    });
  } catch (error: any) {
    console.error("API Error:", error);

    if (error.name === "ZodError") {
      return new NextResponse(
        JSON.stringify({ error: "Invalid input data", details: error.errors }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return new NextResponse(
      JSON.stringify({ error: error?.message ?? "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}