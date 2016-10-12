export default function() {
  const coalesce = true;

  this.namespace = '/api/';
  this.timing = 0;

  this.get('/accounts', { coalesce });
  this.get('/accounts/:id');

  this.get('/customers', { coalesce });
  this.get('/customers/:id');

  this.get('/orders', { coalesce });
  this.get('/orders/:id');

  this.get('/projects', { coalesce });
  this.get('/projects/:id');
}
