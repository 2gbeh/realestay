"use client";

import { CirclePlusIcon } from "lucide-react";
import { Label } from "@/components/_shadcn/ui/label";
import { Input } from "@/components/_shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/_shadcn/ui/select";
import { Textarea } from "@/components/_shadcn/ui/textarea";
import { Button } from "@/components/_shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/_shadcn/ui/dialog";

export const AddPost = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <CirclePlusIcon />
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="font-sans text-xs sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Author
            </Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Headline
            </Label>
            <Input
              id="username"
              value="@peduarte"
              onChange={() => {}}
              className="col-span-3"
            />
          </div>
          <div className="grid w-full grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Article
            </Label>
            <Textarea
              placeholder="Type your message here."
              className="w-full"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
