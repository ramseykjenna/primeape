import EmberRouter from 'ember-router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('customers',       { path: 'customers'     }, function() {
    this.route('customer',      { path: ':customer_id'  }, function() {
      this.route('accounts',    { path: 'accounts'      }, function() {
        this.route('account',   { path: ':account_id'   }, function() {});
      });
    });
  });
  this.route('accounts',        { path: 'accounts'      }, function() {
    this.route('account',       { path: ':account_id'   }, function() {
      this.route('invoices',    { path: 'invoices'      }, function() {
        this.route('invoice',   { path: ':invoice_id'   }, function() {});
      });
      this.route('orders',      { path: 'orders'        }, function() {
        this.route('order',     { path: ':order_id'     }, function() {});
      });
      this.route('projects',    { path: 'projects'      }, function() {
        this.route('project',   { path: ':project_id'   }, function() {
          this.route('orders',  { path: 'orders'        }, function() {
            this.route('order', { path: ':order_id'     }, function() {});
          });
        });
      });
      this.route('returns',     { path: 'returns'       }, function() {
        this.route('return',    { path: ':return_id'    }, function() {});
      });
    });
  });
  this.route('style-guide', function() {
    this.route('homepage');
  });
});

export default Router;
