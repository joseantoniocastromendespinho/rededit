import prisma from "@/lib/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import { Setting } from "../components/Setting"

async function getDate(userId:string){
  const data = await prisma.user.findUnique({
    where:{
        id:userId
    },
    select:{userName:true}
  }) 
  return data 

}
    


export default async function SettingPage(){
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    if(!user)
        return redirect("http://localhost:3000/api/auth/login")
    const data = await getDate(user.id)
    return(
        <div className="max-w-[1000px] mx-auto  flex flex-col mt-4">
        <Setting userName={data?.userName}/>
        </div>
    )
}