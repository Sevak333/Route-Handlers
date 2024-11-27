import { getAllUsers, createUser } from "../_helpers/api";
import { NextRequest } from "next/server";

export async function GET() {
    const data = await getAllUsers()
    return new Response(JSON.stringify(data))
}

export async function POST(request: NextRequest) {
    const user = await request.json()
    createUser(user)
    return new Response(JSON.stringify(user))
}

