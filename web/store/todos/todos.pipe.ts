import { TodoEntity, TodoType } from "./todos.types";

export class TodosPipe {
  static validate() {}

  static prepare() {}

  static transform(d: TodoEntity) {
    return {
      ...d,
      textColor: d.completed ? "text-green-600" : "text-yellow-600",
      status: d.completed ? "done" : "pending",
    } as TodoType;
  }
}
