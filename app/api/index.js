var Api, DeviceInfo, ReceiptService, TicketService, UsersService, authentication, feathers, hooks, io, socketio,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

if ((typeof window !== "undefined" && window !== null ? window.navigator.toString() : void 0) === '[object Object]') {
  window.navigator = {
    userAgent: 'ReactNative'
  };
}

io = require('socket.io-client/dist/socket.io');

feathers = require('feathers/client');

socketio = require('feathers-socketio/client');

authentication = require('feathers-authentication/client');

hooks = require('feathers-hooks');

DeviceInfo = require('react-native-device-info');

UsersService = 'users';

ReceiptService = 'receipts';

TicketService = 'tickets';

Api = (function() {
  function Api(server) {
    this._userService = bind(this._userService, this);
    this.buyRaffleTicket = bind(this.buyRaffleTicket, this);
    this.uploadReceipt = bind(this.uploadReceipt, this);
    this.authenticateByPhone = bind(this.authenticateByPhone, this);
    this.authenticate = bind(this.authenticate, this);
    this.verify = bind(this.verify, this);
    this.signUp = bind(this.signUp, this);
    this.subscribeService = bind(this.subscribeService, this);
    this.getServiceData = bind(this.getServiceData, this);
    var options, socket;
    options = {
      transports: ['websocket'],
      forceNew: true
    };
    socket = io(server, options);
    this.app = feathers().configure(socketio(socket, {
      timeout: 10000
    })).configure(hooks()).configure(authentication());
  }

  Api.prototype.getServiceData = function(name) {
    return this.app.service(name).find();
  };

  Api.prototype.subscribeService = function(name, events, onEvent) {
    var service;
    service = this.app.service(name);
    return events.map(function(event) {
      return service.on(event, function(data) {
        return onEvent(name, event, data);
      });
    });
  };

  Api.prototype.signUp = function(info) {
    var deviceId;
    deviceId = DeviceInfo.getUniqueID();
    info = Object.assign({
      deviceId: deviceId
    }, info);
    return this._userService().create(info);
  };

  Api.prototype.verify = function(phone, code) {
    var deviceId;
    deviceId = DeviceInfo.getUniqueID();
    return this._userService().create({
      phone: phone,
      deviceId: deviceId,
      code: code
    });
  };

  Api.prototype.authenticate = function(token) {
    return this.app.authenticate({
      type: 'token',
      token: token
    });
  };

  Api.prototype.authenticateByPhone = function(phone) {
    var device;
    device = DeviceInfo.getUniqueID();
    return this.app.authenticate({
      type: 'local',
      phone: phone,
      device: device
    });
  };

  Api.prototype.uploadReceipt = function(base64) {
    return this.app.service(ReceiptService).create({
      image: base64
    });
  };

  Api.prototype.buyRaffleTicket = function() {
    return this.app.service(TicketService).create({});
  };

  Api.prototype._userService = function() {
    return this.app.service(UsersService);
  };

  return Api;

})();

module.exports = Api;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpL2luZGV4LmpzIiwic291cmNlcyI6WyJhcGkvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsMkdBQUE7RUFBQTs7QUFBQSx3REFBRyxNQUFNLENBQUUsU0FBUyxDQUFDLFFBQWxCLENBQUEsV0FBQSxLQUFnQyxpQkFBbkM7RUFDRSxNQUFNLENBQUMsU0FBUCxHQUFtQjtJQUFBLFNBQUEsRUFBVyxhQUFYO0lBRHJCOzs7QUFHQSxFQUFBLEdBQUssT0FBQSxDQUFRLGlDQUFSOztBQUNMLFFBQUEsR0FBVyxPQUFBLENBQVEsaUJBQVI7O0FBQ1gsUUFBQSxHQUFXLE9BQUEsQ0FBUSwwQkFBUjs7QUFDWCxjQUFBLEdBQWlCLE9BQUEsQ0FBUSxnQ0FBUjs7QUFDakIsS0FBQSxHQUFRLE9BQUEsQ0FBUSxnQkFBUjs7QUFDUixVQUFBLEdBQWEsT0FBQSxDQUFRLDBCQUFSOztBQUdiLFlBQUEsR0FBZTs7QUFDZixjQUFBLEdBQWlCOztBQUNqQixhQUFBLEdBQWdCOztBQUdWO0VBQ1MsYUFBQyxNQUFEOzs7Ozs7Ozs7O0FBQ1gsUUFBQTtJQUFBLE9BQUEsR0FBVTtNQUFBLFVBQUEsRUFBWSxDQUFDLFdBQUQsQ0FBWjtNQUEyQixRQUFBLEVBQVUsSUFBckM7O0lBQ1YsTUFBQSxHQUFTLEVBQUEsQ0FBRyxNQUFILEVBQVcsT0FBWDtJQUNULElBQUMsQ0FBQSxHQUFELEdBQU8sUUFBQSxDQUFBLENBQ0wsQ0FBQyxTQURJLENBQ00sUUFBQSxDQUFTLE1BQVQsRUFBaUI7TUFBQSxPQUFBLEVBQVMsS0FBVDtLQUFqQixDQUROLENBRUwsQ0FBQyxTQUZJLENBRU0sS0FBQSxDQUFBLENBRk4sQ0FHTCxDQUFDLFNBSEksQ0FHTSxjQUFBLENBQUEsQ0FITjtFQUhJOztnQkFTYixjQUFBLEdBQWdCLFNBQUMsSUFBRDtXQUNkLElBQUMsQ0FBQSxHQUFHLENBQUMsT0FBTCxDQUFhLElBQWIsQ0FBa0IsQ0FBQyxJQUFuQixDQUFBO0VBRGM7O2dCQUloQixnQkFBQSxHQUFrQixTQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsT0FBZjtBQUNoQixRQUFBO0lBQUEsT0FBQSxHQUFVLElBQUMsQ0FBQSxHQUFHLENBQUMsT0FBTCxDQUFhLElBQWI7V0FFVixNQUFNLENBQUMsR0FBUCxDQUFXLFNBQUMsS0FBRDthQUNULE9BQU8sQ0FBQyxFQUFSLENBQVcsS0FBWCxFQUFrQixTQUFDLElBQUQ7ZUFDaEIsT0FBQSxDQUFRLElBQVIsRUFBYyxLQUFkLEVBQXFCLElBQXJCO01BRGdCLENBQWxCO0lBRFMsQ0FBWDtFQUhnQjs7Z0JBUWxCLE1BQUEsR0FBUSxTQUFDLElBQUQ7QUFDTixRQUFBO0lBQUEsUUFBQSxHQUFXLFVBQVUsQ0FBQyxXQUFYLENBQUE7SUFDWCxJQUFBLEdBQU8sTUFBTSxDQUFDLE1BQVAsQ0FBYztNQUFDLFVBQUEsUUFBRDtLQUFkLEVBQTBCLElBQTFCO1dBQ1AsSUFBQyxDQUFBLFlBQUQsQ0FBQSxDQUFlLENBQUMsTUFBaEIsQ0FBdUIsSUFBdkI7RUFITTs7Z0JBTVIsTUFBQSxHQUFRLFNBQUMsS0FBRCxFQUFRLElBQVI7QUFDTixRQUFBO0lBQUEsUUFBQSxHQUFXLFVBQVUsQ0FBQyxXQUFYLENBQUE7V0FDWCxJQUFDLENBQUEsWUFBRCxDQUFBLENBQWUsQ0FBQyxNQUFoQixDQUF1QjtNQUFDLE9BQUEsS0FBRDtNQUFRLFVBQUEsUUFBUjtNQUFrQixNQUFBLElBQWxCO0tBQXZCO0VBRk07O2dCQUtSLFlBQUEsR0FBYyxTQUFDLEtBQUQ7V0FDWixJQUFDLENBQUEsR0FBRyxDQUFDLFlBQUwsQ0FBa0I7TUFBQyxJQUFBLEVBQU0sT0FBUDtNQUFnQixPQUFBLEtBQWhCO0tBQWxCO0VBRFk7O2dCQUlkLG1CQUFBLEdBQXFCLFNBQUMsS0FBRDtBQUNuQixRQUFBO0lBQUEsTUFBQSxHQUFTLFVBQVUsQ0FBQyxXQUFYLENBQUE7V0FDVCxJQUFDLENBQUEsR0FBRyxDQUFDLFlBQUwsQ0FBa0I7TUFBQyxJQUFBLEVBQU0sT0FBUDtNQUFnQixPQUFBLEtBQWhCO01BQXVCLFFBQUEsTUFBdkI7S0FBbEI7RUFGbUI7O2dCQUtyQixhQUFBLEdBQWUsU0FBQyxNQUFEO1dBQ2IsSUFBQyxDQUFBLEdBQUcsQ0FBQyxPQUFMLENBQWEsY0FBYixDQUE0QixDQUFDLE1BQTdCLENBQW9DO01BQUEsS0FBQSxFQUFPLE1BQVA7S0FBcEM7RUFEYTs7Z0JBSWYsZUFBQSxHQUFpQixTQUFBO1dBQ2YsSUFBQyxDQUFBLEdBQUcsQ0FBQyxPQUFMLENBQWEsYUFBYixDQUEyQixDQUFDLE1BQTVCLENBQW1DLEVBQW5DO0VBRGU7O2dCQUlqQixZQUFBLEdBQWMsU0FBQTtXQUNaLElBQUMsQ0FBQSxHQUFHLENBQUMsT0FBTCxDQUFhLFlBQWI7RUFEWTs7Ozs7O0FBSWhCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaWYgd2luZG93Py5uYXZpZ2F0b3IudG9TdHJpbmcoKSBpcyAnW29iamVjdCBPYmplY3RdJ1xuICB3aW5kb3cubmF2aWdhdG9yID0gdXNlckFnZW50OiAnUmVhY3ROYXRpdmUnXG5cbmlvID0gcmVxdWlyZSAnc29ja2V0LmlvLWNsaWVudC9kaXN0L3NvY2tldC5pbydcbmZlYXRoZXJzID0gcmVxdWlyZSAnZmVhdGhlcnMvY2xpZW50J1xuc29ja2V0aW8gPSByZXF1aXJlICdmZWF0aGVycy1zb2NrZXRpby9jbGllbnQnXG5hdXRoZW50aWNhdGlvbiA9IHJlcXVpcmUgJ2ZlYXRoZXJzLWF1dGhlbnRpY2F0aW9uL2NsaWVudCdcbmhvb2tzID0gcmVxdWlyZSAnZmVhdGhlcnMtaG9va3MnXG5EZXZpY2VJbmZvID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLWRldmljZS1pbmZvJ1xuXG5cblVzZXJzU2VydmljZSA9ICd1c2VycydcblJlY2VpcHRTZXJ2aWNlID0gJ3JlY2VpcHRzJ1xuVGlja2V0U2VydmljZSA9ICd0aWNrZXRzJ1xuXG5cbmNsYXNzIEFwaVxuICBjb25zdHJ1Y3RvcjogKHNlcnZlcikgLT5cbiAgICBvcHRpb25zID0gdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXSwgZm9yY2VOZXc6IHllc1xuICAgIHNvY2tldCA9IGlvKHNlcnZlciwgb3B0aW9ucylcbiAgICBAYXBwID0gZmVhdGhlcnMoKVxuICAgICAgLmNvbmZpZ3VyZShzb2NrZXRpbyhzb2NrZXQsIHRpbWVvdXQ6IDEwMDAwKSlcbiAgICAgIC5jb25maWd1cmUoaG9va3MoKSlcbiAgICAgIC5jb25maWd1cmUoYXV0aGVudGljYXRpb24oKSlcblxuXG4gIGdldFNlcnZpY2VEYXRhOiAobmFtZSkgPT5cbiAgICBAYXBwLnNlcnZpY2UobmFtZSkuZmluZCgpXG5cbiAgICBcbiAgc3Vic2NyaWJlU2VydmljZTogKG5hbWUsIGV2ZW50cywgb25FdmVudCkgPT5cbiAgICBzZXJ2aWNlID0gQGFwcC5zZXJ2aWNlKG5hbWUpXG4gICAgXG4gICAgZXZlbnRzLm1hcCAoZXZlbnQpIC0+XG4gICAgICBzZXJ2aWNlLm9uIGV2ZW50LCAoZGF0YSkgLT5cbiAgICAgICAgb25FdmVudChuYW1lLCBldmVudCwgZGF0YSlcblxuXG4gIHNpZ25VcDogKGluZm8pID0+XG4gICAgZGV2aWNlSWQgPSBEZXZpY2VJbmZvLmdldFVuaXF1ZUlEKClcbiAgICBpbmZvID0gT2JqZWN0LmFzc2lnbih7ZGV2aWNlSWR9LCBpbmZvKVxuICAgIEBfdXNlclNlcnZpY2UoKS5jcmVhdGUoaW5mbylcblxuXG4gIHZlcmlmeTogKHBob25lLCBjb2RlKSA9PlxuICAgIGRldmljZUlkID0gRGV2aWNlSW5mby5nZXRVbmlxdWVJRCgpXG4gICAgQF91c2VyU2VydmljZSgpLmNyZWF0ZSh7cGhvbmUsIGRldmljZUlkLCBjb2RlfSlcblxuXG4gIGF1dGhlbnRpY2F0ZTogKHRva2VuKSA9PlxuICAgIEBhcHAuYXV0aGVudGljYXRlKHt0eXBlOiAndG9rZW4nLCB0b2tlbn0pXG5cblxuICBhdXRoZW50aWNhdGVCeVBob25lOiAocGhvbmUpID0+XG4gICAgZGV2aWNlID0gRGV2aWNlSW5mby5nZXRVbmlxdWVJRCgpXG4gICAgQGFwcC5hdXRoZW50aWNhdGUoe3R5cGU6ICdsb2NhbCcsIHBob25lLCBkZXZpY2V9KVxuXG5cbiAgdXBsb2FkUmVjZWlwdDogKGJhc2U2NCkgPT5cbiAgICBAYXBwLnNlcnZpY2UoUmVjZWlwdFNlcnZpY2UpLmNyZWF0ZShpbWFnZTogYmFzZTY0KVxuXG5cbiAgYnV5UmFmZmxlVGlja2V0OiA9PlxuICAgIEBhcHAuc2VydmljZShUaWNrZXRTZXJ2aWNlKS5jcmVhdGUoe30pXG5cblxuICBfdXNlclNlcnZpY2U6ID0+XG4gICAgQGFwcC5zZXJ2aWNlKFVzZXJzU2VydmljZSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwaVxuIl19
