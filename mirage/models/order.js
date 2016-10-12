import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  account: belongsTo('account'),
  project: belongsTo('project')
});
