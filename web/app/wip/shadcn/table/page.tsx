"use client";

import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsDown,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronsUpDownIcon,
  CirclePlusIcon,
  EllipsisIcon,
  PencilIcon,
  Settings2Icon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import { Input } from "@/components/_shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/_shadcn/ui/select";
import { Checkbox } from "@/components/_shadcn/ui/checkbox";
import { Button } from "@/components/_shadcn/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/_shadcn/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/_shadcn/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/_shadcn/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function TableDemo() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);
  //

  return (
    <main className="space-y-8 p-8 font-sans">
      <header className="flex items-center justify-between">
        <hgroup>
          <h1 className="text-2xl font-bold">Welcome back!</h1>
          <p className="font-medium text-gray-500">
            Here's a list of your tasks for this month!
          </p>
        </hgroup>
        <Avatar>
          <AvatarImage src="https://github.com/2gbeh.png" alt="@shadcn" />
          <AvatarFallback>ET</AvatarFallback>
        </Avatar>
      </header>
      <div className="space-y-4">
        <section className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Input type="search" placeholder="Search posts ( / )" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Settings2Icon />
                  Author
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={showStatusBar}
                  onCheckedChange={setShowStatusBar}
                >
                  Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showActivityBar}
                  onCheckedChange={setShowActivityBar}
                  disabled
                >
                  Activity Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showPanel}
                  onCheckedChange={setShowPanel}
                >
                  Panel
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost">
              Delete
              <XIcon />
            </Button>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default">
                  <CirclePlusIcon />
                  Add
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={showStatusBar}
                  onCheckedChange={setShowStatusBar}
                >
                  Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showActivityBar}
                  onCheckedChange={setShowActivityBar}
                  disabled
                >
                  Activity Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showPanel}
                  onCheckedChange={setShowPanel}
                >
                  Panel
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>
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
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="w-10">
                  <Checkbox />
                </TableCell>
                <TableCell className="flex items-center gap-2 font-medium">
                  <Avatar className="h-8 w-8 text-xs">
                    <AvatarImage src="#" alt="@shadcn" />
                    <AvatarFallback>ET</AvatarFallback>
                  </Avatar>
                  {invoice.invoice}
                </TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="w-10">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost">
                        <EllipsisIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56_ font-mono">
                      <DropdownMenuItem className="text-xs">
                        Edit
                      </DropdownMenuItem>
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
      </div>
    </main>
  );
}

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
