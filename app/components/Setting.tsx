"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { UpdateUsername } from "../actions"
import { SubmitButton } from "./SubmitButton"

export function Setting({userName}:{userName:string | undefined| null}){
    return(
        <form action={UpdateUsername}>
            <h1 className="text-3xl font-extrabold -tracking-tight">Settings</h1>
            <Separator className="my-4"/>
            <Label className="text-lg">Usermane</Label>
            <p className="text-muted-foreground">Pode mudar o seu UserName</p>
            <Input name="UserName" min={3} maxLength={21} className="mt-4" defaultValue={userName ?? undefined}/>
            <div className="mt-5 w-full flex gap-x-5 justify-end">
                <Button variant="secondary" asChild type="button"><Link href="/">Cancel</Link></Button>
              <SubmitButton/>
            </div>
        </form>
    )
}