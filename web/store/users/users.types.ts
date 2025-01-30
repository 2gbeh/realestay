export type UserEntity = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserEntityAddress;
  phone: string;
  website: string;
  company: UserEntityCompany;
};

export type UserEntityAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type UserEntityCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type QueryUsersDTO = void | {
  name?: string;
  username?: string;
  email?: string;
};
