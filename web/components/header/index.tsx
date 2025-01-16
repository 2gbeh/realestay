import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { APP } from "@/constants/APP";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <hgroup>
        <h1 className="text-2xl font-bold">{APP.name}</h1>
        <p className="font-medium text-gray-500">{APP.summary}</p>
      </hgroup>
      <Avatar>
        <AvatarImage src="https://github.com/2gbeh.png" alt="2gbeh" />
        <AvatarFallback>ET</AvatarFallback>
      </Avatar>
    </header>
  );
};
