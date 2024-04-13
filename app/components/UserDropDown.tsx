import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { MenuIcon } from "lucide-react"
import Link from "next/link"

interface appImage {
    avatarImage: string | null
}
export function UserDropdown({avatarImage}:appImage){
    return(
       <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full flex border items-center gap-x-3 px-2 py-2 lg:px4 lg:px-4">
                    <MenuIcon className="h-6 w-6 lg:h-5 lg:w-5"/>
                    <img src={avatarImage ?? "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"} alt ="avatar"
                     className="rounded-full h-8 w-8 hidden lg:block" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem>
                    <Link href="/r/create" className="w-full">
                    Criado pela comunidade.
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/create" className="w-full">
                    Criado post
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/setting" className="w-full">
                   Ferramentas
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                <LogoutLink className="w-full">Log out</LogoutLink>
                </DropdownMenuItem>


            </DropdownMenuContent>
       </DropdownMenu>
        )
}