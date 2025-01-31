export type UserEntity = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserEntity_AddressType;
  phone: string;
  website: string;
  company: UserEntity_CompanyType;
};

export type UserEntity_AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type UserEntity_CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type CreateUserDTO = {};

export type UpdateUserDTO = {};

export type QueryUsersDTO = void | Partial<
  Pick<UserEntity, "name" | "username" | "email">
>;

export type UserType = UserEntity & {
  displayName: string;
  mailto: string;
};
