import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    // Console logging contact submission for development / production monitoring
    console.log("-----------------------------------------");
    console.log("New Portfolio Contact Form Submission:");
    console.log(`From: ${name} (${email})`);
    console.log(`Subject: ${subject || "No subject"}`);
    console.log(`Message:\n${message}`);
    console.log("-----------------------------------------");

    return NextResponse.json({
      success: true,
      message: "Message received successfully!",
    });
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
