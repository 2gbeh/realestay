import { XIcon } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";

export const DeleteSelectedPosts = () => {
  return (
    <Button variant="ghost">
      Delete
      <XIcon />
    </Button>
  );
};
