'use server'

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function UpdateUsername(formData:FormData){
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    if(!user)
        { return redirect('/api/auth/login')}

    const username = formData.get('UserName') as string
    await prisma.user.update({
        where:{id:user.id},
        data:{userName:username}
    })
return {
    message:"Sucesso ao atulizar o UserName"
}
}