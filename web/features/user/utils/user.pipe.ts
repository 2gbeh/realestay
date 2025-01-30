import { APP } from "@/constants/APP";
import { UserEntity } from "./user.types";

export class UserPipe {
  static validate() {}

  static prepare() {}

  static transform(d: UserEntity) {
    let [firstName, lastName] = d.name.split(" ");
    //
    return {
      ...d,
      displayName: `${firstName} '${d.username}' ${lastName}`,
      mailto:
        `mailto:${d.email.toLowerCase()}?subject:Assigned task on ${APP.name}`.replaceAll(
          " ",
          "%20",
        ),
    };
  }
}
