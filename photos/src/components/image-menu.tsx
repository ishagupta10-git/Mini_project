import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FolderPlus } from "lucide-react"
import { Menu } from "./ui/icons/menu"
import { AddToAlbumDialog } from "./add-to-album-dialog"
import { SearchResult } from "@/app/gallery/page"

export function ImageMenu({image}: {image: SearchResult}) {
  return (
    <div  className="absolute top-2 right-2">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="w-8 h-8 p-0">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={image} />
          </DropdownMenuItem>
          
        
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
