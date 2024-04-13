import RedText from '../../public/logo-name.svg'
import RedMobile from '../../public/reddit-full.svg'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './ThemeToglle'
import { Button } from '@/components/ui/button'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components"
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { UserDropdown } from './UserDropDown'

export  async function NavBar(){
  const {getUser} = getKindeServerSession()
  const user = await getUser()
    return(
      <nav className='h-[10vh] w-full flex border-b px-5 lg:px-14 justify-between items-center'>
        <Link href="/" className='flex items-center gap-x-3'>
        <Image src={RedMobile} alt="Mobile" className='h-10 w-fit'/>
        <Image src={RedText} alt="Descktop" className="hidden lg:block h-9 w-fit"/>
        </Link>
        <div className="flex items-center gap-x-4">
        <ModeToggle/>
        {user ?
        (<UserDropdown avatarImage={user.picture}/>):
        (
          <div className='flex items-center gap-x-4'>
             <Button variant='secondary' asChild><LoginLink>Sign in</LoginLink></Button>
             <Button asChild ><RegisterLink>Sign up</RegisterLink></Button>
          </div>
        )
      }
       
        </div>
      
      </nav>
    )
}