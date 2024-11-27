import { NextRequest } from "next/server";
import { IProps } from "../../_helpers/types";
import { getUser, updateUser, deleteUser } from "@/app/_helpers/api";


export async function GET(request: NextRequest, { params }: IProps) {
    const { id } = params;
    const data = await getUser(id)
    return new Response(JSON.stringify(data))
}

export async function PUT(request: NextRequest, { params }: IProps) {
    const { id } = await params;
    const user = await request.json()
    await updateUser(id , user)
    return new Response(JSON.stringify(user))
}

export async function DELETE(request: NextRequest, context: { params: { id: number } }) {
    const { id } = context.params;
    deleteUser(id)
    return new Response("{}")
}