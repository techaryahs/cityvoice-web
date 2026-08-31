import fs from "fs";
import path from "path";

const MEMBERS_FILE_PATH = path.join(process.cwd(), "data", "members.json");

export interface Member {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

// Ensure the file exists
function ensureFileExists() {
  if (!fs.existsSync(MEMBERS_FILE_PATH)) {
    const dir = path.dirname(MEMBERS_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(MEMBERS_FILE_PATH, "[]", "utf-8");
  }
}

export function readMembers(): Member[] {
  try {
    ensureFileExists();
    const file = fs.readFileSync(MEMBERS_FILE_PATH, "utf8");
    return JSON.parse(file) as Member[];
  } catch (error) {
    console.error("Error reading members.json:", error);
    return [];
  }
}

export function writeMembers(members: Member[]): boolean {
  try {
    ensureFileExists();
    fs.writeFileSync(MEMBERS_FILE_PATH, JSON.stringify(members, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error writing members.json:", error);
    return false;
  }
}
