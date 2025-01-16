import { ChevronsUpDownIcon, EllipsisIcon } from "lucide-react";
import { Checkbox } from "@/components/shadcn/ui/checkbox";
import { Button } from "@/components/shadcn/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";

interface IProps {
  posts: any[];
}

export const PostsTable: React.FC<IProps> = ({ posts }) => {
  return (
    <Table className="rounded border">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox checked />
          </TableHead>
          <TableHead>
            <div className="flex items-center gap-2">
              Author <ChevronsUpDownIcon size={16} />
            </div>
          </TableHead>
          <TableHead>
            <div className="flex items-center gap-2">
              Headline <ChevronsUpDownIcon size={16} />
            </div>
          </TableHead>
          <TableHead>Article</TableHead>
          <TableHead className=""></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post, i) => (
          <TableRow key={i}>
            <TableCell className="w-10">
              <Checkbox />
            </TableCell>
            <TableCell className="flex items-center gap-2 font-medium">
              <Avatar className="h-8 w-8 text-xs">
                <AvatarImage src="#" alt="@shadcn" />
                <AvatarFallback>ET</AvatarFallback>
              </Avatar>
              {post.post}
            </TableCell>
            <TableCell>{post.paymentStatus}</TableCell>
            <TableCell>{post.paymentMethod}</TableCell>
            <TableCell className="w-10">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <EllipsisIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56_ font-mono">
                  <DropdownMenuItem className="text-xs">Edit</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-xs">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
