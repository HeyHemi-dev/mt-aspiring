import { Link } from 'react-router-dom'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

function Nav() {
  return (
    <div className="flex gap-4">
      <Link to="/">Add Tile</Link>
      <Sheet>
        <SheetTrigger>Profile</SheetTrigger>
        <SheetContent>
          <div className="grid gap-4">
            <SheetHeader>
              <SheetTitle>Hello username</SheetTitle>
              <SheetDescription>
                This is a description for the side sheet
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <Link to="/">Settings</Link>
            <Link to="/">Log out</Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Nav
