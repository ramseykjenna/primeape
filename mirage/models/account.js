import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  customer: belongsTo('customer'),
  orders:   hasMany('order'),
  projects: hasMany('project')
});
