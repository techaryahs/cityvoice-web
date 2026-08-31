import { NextResponse } from "next/server";
import { readMembers, writeMembers, Member } from "@/lib/members-server";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  const members = readMembers();
  return NextResponse.json(members);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, role, description, image } = body;

    if (!name || !role || !description || !image) {
      return NextResponse.json(
        { success: false, message: "Name, role, description, and image are required." },
        { status: 400 }
      );
    }

    const members = readMembers();
    const newMember: Member = {
      id: uuidv4(),
      name: name.trim(),
      role: role.trim(),
      description: description.trim(),
      image,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    members.push(newMember);
    writeMembers(members);

    return NextResponse.json({ success: true, member: newMember });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to create member." },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, name, role, description, image } = body;

    if (!id || !name || !role || !description || !image) {
      return NextResponse.json(
        { success: false, message: "ID, name, role, description, and image are required." },
        { status: 400 }
      );
    }

    const members = readMembers();
    const memberIndex = members.findIndex((m) => m.id === id);

    if (memberIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Member not found." },
        { status: 404 }
      );
    }

    // Optionally delete old image if image changed
    const oldImage = members[memberIndex].image;
    if (oldImage && oldImage !== image && oldImage.startsWith("/images/members/")) {
      const oldImagePath = path.join(process.cwd(), "public", oldImage);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    members[memberIndex] = {
      ...members[memberIndex],
      name: name.trim(),
      role: role.trim(),
      description: description.trim(),
      image,
      updatedAt: new Date().toISOString(),
    };

    writeMembers(members);

    return NextResponse.json({ success: true, member: members[memberIndex] });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update member." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Member ID is required." },
        { status: 400 }
      );
    }

    const members = readMembers();
    const member = members.find((m) => m.id === id);

    if (!member) {
      return NextResponse.json(
        { success: false, message: "Member not found." },
        { status: 404 }
      );
    }

    // Delete image file if it exists
    if (member.image && member.image.startsWith("/images/members/")) {
      const imagePath = path.join(process.cwd(), "public", member.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    const updatedMembers = members.filter((m) => m.id !== id);
    writeMembers(updatedMembers);

    return NextResponse.json({ success: true, message: "Member deleted successfully." });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to delete member." },
      { status: 500 }
    );
  }
}
