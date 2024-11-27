import { deleteUser } from "@/app/_helpers/api_web";
import { redirect } from "next/navigation";

interface IProps {
    params: { id: number };
}

export default async function Delete({ params }: IProps) {
    await deleteUser(params.id); 
    redirect("/web/users"); 
    return null; 
}
