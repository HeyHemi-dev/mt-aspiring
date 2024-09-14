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
import useCurrentUser from '@/hooks/use-current-user'

function Nav() {
  const userQuery = useCurrentUser()

  let user
  const sheetContent = {
    title: '',
    description: '',
    links: [{ url: '/', text: '' }],
  }

  userQuery.isPending && (sheetContent.title = 'Loading...')
  userQuery.isError && (sheetContent.title = 'Error loading profile')
  if (userQuery.data) {
    user = userQuery.data
    // console.log('user', user)
    sheetContent.title = `Hello ${user.name}`
    sheetContent.description = 'This is a description for the side sheet'
    sheetContent.links = [
      { url: `/${user.username}/`, text: 'Saved Tiles' },
      { url: `/${user.username}/settings`, text: 'Settings' },
      { url: `/`, text: 'Log out' },
    ]
  }

  return (
    <div className="flex gap-4">
      <Link to="/tiles/create">Add Tile</Link>
      <Sheet>
        <SheetTrigger>Profile</SheetTrigger>
        <SheetContent className="grid content-start gap-4">
          <SheetHeader>
            <SheetTitle>{sheetContent.title}</SheetTitle>
            <SheetDescription>{sheetContent.description}</SheetDescription>
          </SheetHeader>
          <Separator />
          {sheetContent.links.map((link, index) => {
            return (
              <Link key={index} to={link.url}>
                {link.text}
              </Link>
            )
          })}
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Nav
