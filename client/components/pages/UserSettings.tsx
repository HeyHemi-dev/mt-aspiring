import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import useCurrentUser from '@/hooks/use-current-user'
import useUpdateUser from '@/hooks/useUpdateUser'
import { useToast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { UserData } from 'model/users'

// Form input validation
const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'name must be at least 1 character.',
    })
    .max(128, {
      message: 'name must be no more than 128 characters.',
    }),
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(64, { message: 'Username must be no more than 64 characters.' })
    .regex(/^[a-z0-9-]+$/, {
      message:
        'Username can only contain lowercase letters, numbers, and hyphens',
    }),
  isBusiness: z.boolean(),
})

function UserSettings() {
  const { toast } = useToast()
  const { data: user, isPending, isError } = useCurrentUser()
  const userMutation = useUpdateUser()

  // Set form default values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      username: '',
      isBusiness: false,
    },
  })

  // Populate form with current user data
  useEffect(() => {
    if (user) {
      form.reset({
        username: user.username,
        name: user.name,
        isBusiness: user.userType === 'business' ? true : false,
      })
    }
  }, [user, form])

  // Handle submit
  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log('form submit values', values)
    if (user) {
      const userAuth = user.userAuth
      const userData: UserData = {
        username: values.username,
        name: values.name,
        userType: values.isBusiness ? 'business' : 'personal',
      }
      userMutation.mutate({ userAuth, userData })
      if (userMutation.isError)
        toast({ description: 'Error, changes not saved' })
      if (userMutation.isSuccess) {
        toast({ description: 'Saved' })
      }
    } else {
      toast({ description: 'Error, changes not saved' })
    }
  }

  // Conditionally render form
  let formOutlet = <></>
  if (isPending) formOutlet = <p>Loading Form</p>
  if (isError) formOutlet = <p>Error Loading Form</p>
  if (user) {
    formOutlet = (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isBusiness"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Account</FormLabel>
                <div className="flex items-center justify-between rounded-md border p-3 shadow-sm">
                  <FormDescription>
                    {`Switch to ${field.value ? 'personal' : 'business'} account`}
                  </FormDescription>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="self-end">
            Save
          </Button>
        </form>
      </Form>
    )
  }

  // Render page
  return (
    <section className="site-padding section-padding">
      <div className="content-wrapper flex flex-col gap-4">
        <h1>User Settings</h1>
        {formOutlet}
      </div>
    </section>
  )
}

export default UserSettings
