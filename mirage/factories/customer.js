import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  address1() {
    return faker.address.streetAddress();
  },

  address2() {
    return faker.address.secondaryAddress();
  },

  cellPhone() {
    return faker.phone.phoneNumber();
  },

  city() {
    return faker.address.city();
  },

  email() {
    return faker.internet.email();
  },

  firstName() {
    return faker.name.firstName();
  },

  lastName() {
    return faker.name.lastName();
  },

  officePhone() {
    return faker.phone.phoneNumber();
  },

  state() {
    return faker.address.stateAbbr();
  },

  zip() {
    return faker.address.zipCode();
  }
});
