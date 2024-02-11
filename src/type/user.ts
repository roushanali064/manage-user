type TAddress = {
  address: string;
  city: string;
  coordinates: { latitude: number; longitude: number };
  postalCode: string;
  state: string;
};

type TBankInfo = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

type TCompany = {
  address: TAddress;
  department: string;
  name: string;
  title: string;
};

type TCryptoInfo = {
  coin: string;
  wallet: string;
  network: string;
};

type THair = {
  color: string;
  type: string;
};

export type TUser = {
  address: TAddress;
  age: number;
  bank: TBankInfo;
  birthDate: string;
  bloodGroup: string;
  company: TCompany;
  crypto: TCryptoInfo;
  domain: string;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: string;
  hair: THair;
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
};
