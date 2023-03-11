import { UserDto } from '../dto/user.dto';

export const DEFAULT_USER: UserDto = {
  id: 1,
  name: 'Lorem ipsum dolor sit amet',
  username: 'Lorem ipsum dolor sit amet',
  email: 'test@test.com',
  address: {
    street: 'Lorem ipsum dolor sit amet',
    suite: 'Lorem ipsum dolor sit amet',
    city: 'Lorem ipsum dolor sit amet',
    zipcode: 'Lorem ipsum dolor sit amet',
    geo: {
      lat: '0',
      lng: '0',
    },
  },
  phone: 'Lorem ipsum dolor sit amet',
  website: 'test.org',
  company: {
    name: 'Lorem ipsum dolor sit amet',
    catchPhrase: 'Lorem ipsum dolor sit amet',
    bs: 'Lorem ipsum dolor sit amet',
  },
};
