/**
  Seed your development database using your factories.
  This data will not be loaded in your tests.
  Make sure to define a factory for each model you want to create.

  Note that this scenario will be ignored during testing. This is so you can
  change your development data without affecting your tests.
 */
export default function(server) {
  const customer = server.create('customer', { firstName: 'Steve', lastName: 'Jabour', email: 'sjabour@summit.com' });
  const account = server.create('account', { customer });
  const project = server.create('project', { account });

  server.create('order', { account, project });
}
