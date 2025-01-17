import { XIcon } from "lucide-react";
import { Button } from "@/components/_shadcn/ui/button";

export const DeleteSelectedPosts = () => {
  return (
    <Button variant="ghost">
      Delete
      <XIcon />
    </Button>
  );
};
