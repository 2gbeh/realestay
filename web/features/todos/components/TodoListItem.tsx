import React from "react";
import Link from "next/link";
import clsx from "clsx";
//
import { TodoEntity } from "@/store/todos/todos.types";
import { TodosPipe } from "@/store/todos/todos.pipe";

type PropsType = { todo: TodoEntity };

const TodoListItem: React.FC<PropsType> = ({ todo }) => {
  const transformed = TodosPipe.transform(todo);
  console.log("🚀 ~ TodoListItem");
  // RENDER
  return (
    <Link
      // href={{
      //   pathname: "/dashboard/[slug]",
      //   query: { slug: item.id },
      // }}
      href={`/dashboard/${encodeURIComponent(transformed.id)}`}
    >
      {transformed.title}
      <code
        className={clsx(
          "ml-2 rounded bg-black/[.05] px-1 py-0.5 text-sm font-semibold dark:bg-white/[.06]",
          transformed.textColor,
        )}
      >
        {transformed.status}
      </code>
    </Link>
  );
};

export default React.memo(TodoListItem);
