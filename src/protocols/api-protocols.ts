export type UsersMainInfos = {
  results: UserMainInfo[];
};

export type UserMainInfo = {
  name: {
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  email: string;
  phone: string;
  cell: string;

  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export type UserAddress = {
  userName: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
};
