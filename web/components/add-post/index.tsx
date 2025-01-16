import { CirclePlusIcon } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";

export const AddPost = () => {
  return (
    <Button variant="default">
      <CirclePlusIcon />
      Add
    </Button>
  );
};
