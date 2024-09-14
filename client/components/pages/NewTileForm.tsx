import { useForm } from 'react-hook-form'
// import { useEffect } from 'react'
import useCurrentUser from '@/hooks/use-current-user'
import { useToast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
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
import { Textarea } from '@/components/ui/textarea'
import { TileData } from 'model/tiles'

// Form input validation
const formSchema = z.object({
  imagePath: z.string().url().endsWith('.jpg'),
  title: z
    .string()
    .min(2, {
      message: 'title must be at least 2 characters.',
    })
    .max(50, {
      message: 'title must be no more than 60 characters.',
    }),
  description: z
    .string()
    .max(240, { message: 'Description must be no more than 240 characters.' }),
})

function NewTileForm() {
  const { toast } = useToast()
  const { data: user, isPending, isError } = useCurrentUser()

  // Set form default values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imagePath: '',
      title: '',
      description: '',
    },
  })

  // Try to update the user and give feedback
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (user) {
      const tileData: TileData = {
        imagePath: values.imagePath,
        title: values.title,
        description: values.description ? values.description : null,
        createdAt: new Date().toISOString(),
        createdBy: user.userAuth,
        isPrivate: 0,
      }
      try {
        console.log('tileData', tileData)
        toast({ description: 'Saved' })
      } catch (error) {
        toast({ description: 'Error, changes not saved' })
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
            name="imagePath"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com/image.jpg"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Link to an image.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Add a title" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Add a detailed description"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
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

  return (
    <section className="site-padding section-padding">
      <div className="content-wrapper flex flex-col gap-4">
        <h1>Create A New Tile</h1>
        {formOutlet}
      </div>
    </section>
  )
}

export default NewTileForm
