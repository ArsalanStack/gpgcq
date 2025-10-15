import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const subject = searchParams.get("subject")?.trim();
  const session = searchParams.get("session")?.trim();

  console.log("📩 Incoming request:", { subject, session });

  if (!subject || !session) {
    return NextResponse.json(
      { error: "Subject and session are required" },
      { status: 400 }
    );
  }

  try {
    console.log("🧠 Connecting to MongoDB...");
    await connectDB();
    console.log("✅ MongoDB connected");

    const collection = mongoose.connection.db.collection("bs_results");
    console.log("📚 Using collection:", collection.collectionName);

    // Get all subjects for debugging
    const allSubjects = await collection.find({}).project({ subject: 1, session: 1 }).toArray();
    console.log("📦 Subjects in DB:", allSubjects.map(d => d.subject));

    // Query
    const query = {
      subject: { $regex: new RegExp(`^${subject}$`, "i") },
      session: { $regex: new RegExp(`^${session}$`, "i") },
    };

    console.log("🔍 Querying with:", query);

    const result = await collection.findOne(query);

    if (!result) {
      console.warn("❌ No result found for query:", query);
      return NextResponse.json(
        { error: "No result found for this subject/session" },
        { status: 404 }
      );
    }

    console.log("✅ Result found:", result);
    return NextResponse.json(result);
  } catch (error) {
    console.error("💥 Error fetching data:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
