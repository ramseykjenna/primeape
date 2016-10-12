import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.company.companyName();
  },

  address() {
    return faker.address.streetAddress();
  },

  city() {
    return faker.address.city();
  },

  county() {
    return faker.address.county();
  },

  state() {
    return faker.address.stateAbbr();
  },

  zip() {
    return faker.address.zipCode();
  },

  billingAddress() {
    return faker.address.streetAddress();
  },

  billingZip() {
    return faker.address.zipCode();
  },

  email() {
    return faker.internet.email();
  },

  phone() {
    return faker.phone.phoneNumber();
  },

  phoneExt() {
    return faker.list.random(1234, 2345, 3456, 4567, 5678)();
  },

  fax() {
    return faker.phone.phoneNumber();
  },

  faxExt() {
    return faker.list.random(1234, 2345, 3456, 4567, 5678)();
  }
});
