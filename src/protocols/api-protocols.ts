export type Infos = {
  results: UserMainInfos[];
};
export type UserMainInfos = {
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
