var Reducers, makeServiceReducers, merge, serviceReducers, services;

merge = require('lodash.merge');

services = require('../services');

makeServiceReducers = require('./service/reducers');

Reducers = {
  user: require('./user/reducers')
};

serviceReducers = makeServiceReducers(services);

module.exports = merge(serviceReducers, Reducers);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpL3JlZHV4L3JlZHVjZXJzLmpzIiwic291cmNlcyI6WyJhcGkvcmVkdXgvcmVkdWNlcnMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxjQUFSOztBQUNSLFFBQUEsR0FBVyxPQUFBLENBQVEsYUFBUjs7QUFDWCxtQkFBQSxHQUFzQixPQUFBLENBQVEsb0JBQVI7O0FBR3RCLFFBQUEsR0FDRTtFQUFBLElBQUEsRUFBTSxPQUFBLENBQVEsaUJBQVIsQ0FBTjs7O0FBR0YsZUFBQSxHQUFrQixtQkFBQSxDQUFvQixRQUFwQjs7QUFJbEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsS0FBQSxDQUFNLGVBQU4sRUFBdUIsUUFBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJtZXJnZSA9IHJlcXVpcmUgJ2xvZGFzaC5tZXJnZSdcbnNlcnZpY2VzID0gcmVxdWlyZSAnLi4vc2VydmljZXMnXG5tYWtlU2VydmljZVJlZHVjZXJzID0gcmVxdWlyZSAnLi9zZXJ2aWNlL3JlZHVjZXJzJ1xuXG5cblJlZHVjZXJzID1cbiAgdXNlcjogcmVxdWlyZSAnLi91c2VyL3JlZHVjZXJzJ1xuXG5cbnNlcnZpY2VSZWR1Y2VycyA9IG1ha2VTZXJ2aWNlUmVkdWNlcnMoc2VydmljZXMpXG5cbiMgd2UgZG8gbm90IGNvbWJpbmUgcmVkdWNlcnNcbiMgc28gJ3VzZXInIGFuZCBzZXJ2aWNlcyB3aWxsIGJlIGF0IHJvb3Qgb2YgcmVkdXggc3RvcmFnZVxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZShzZXJ2aWNlUmVkdWNlcnMsIFJlZHVjZXJzKVxuIl19
