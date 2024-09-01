import { Input } from '@/components/ui/input'

function SearchBar() {
  return (
    <div className="flex w-full justify-center px-4">
      <Input
        className="max-w-[40vw] flex-grow rounded-full"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default SearchBar
