import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/_shadcn/ui/select";
import { Button } from "@/components/_shadcn/ui/button";

export const PostsTablePagination = () => {
  return (
    <div className="flex items-center justify-between gap-2 px-2 text-sm">
      <div>0 of 100 row(s) selected.</div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div>Rows per page</div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>Page 1 of 10</div>
        <div className="flex gap-3">
          <Button variant="outline" size="icon">
            <ChevronsLeftIcon />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronLeftIcon />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRightIcon />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronsRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
