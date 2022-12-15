import { faker } from "@faker-js/faker";
import { UserMainInfo, UsersMainInfos } from "../../protocols";

function createOneUserInfos(): UserMainInfo {
  return {
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName(),
    },
    location: {
      street: {
        number: faker.datatype.number({ min: 1 }),
        name: faker.address.street(),
      },
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      postcode: faker.address.zipCode(),
    },
    email: faker.internet.email(),
    phone: faker.phone.number(),
    cell: faker.phone.number(),
    picture: {
      large: faker.image.imageUrl(),
      medium: faker.image.imageUrl(),
      thumbnail: faker.image.imageUrl(),
    },
  };
}

export function createManyUsersInfos(count: number): UsersMainInfos {
  return {
    results: Array.from({ length: count }, createOneUserInfos),
  };
}
