var ApiInitialized, Auth, Channel, call, dispatchServiceAction, fork, getApi, put, ref, ref1, ref2, select, serviceActionByName, serviceEvents, serviceReduxAction, services, subscribeServices, take, updateBasicServices, updateService, updateServices, updateServicesWithAuth;

ref = require('redux-saga/effects'), call = ref.call, put = ref.put, take = ref.take, select = ref.select, fork = ref.fork;

Auth = require('../user/auth/types');

ApiInitialized = require('bawadi-client/app/redux/types').ApiInitialized;

services = require('../../services');

Channel = require('bawadi-client/app/libs/channel');

ref1 = require('../utils'), getApi = ref1.getApi, serviceEvents = ref1.serviceEvents;

ref2 = require('./utils'), serviceActionByName = ref2.serviceActionByName, serviceReduxAction = ref2.serviceReduxAction;

subscribeServices = function*() {
  var api, channel, data, event, ref3, results, serviceName;
  yield take(ApiInitialized);
  api = (yield select(getApi));
  channel = new Channel();
  yield services.map(function(service) {
    var events;
    events = serviceEvents(service);
    return fork(api.subscribeService, service.name, events, function() {
      return channel.put(arguments);
    });
  });
  results = [];
  while (true) {
    ref3 = (yield call(channel.take)), serviceName = ref3[0], event = ref3[1], data = ref3[2];
    results.push((yield* dispatchServiceAction(serviceName, event, data)));
  }
  return results;
};

updateBasicServices = function*() {
  yield take(ApiInitialized);
  return (yield* updateServices(function(service) {
    return service.initialUpdate && !service.requireAuth;
  }));
};

updateServicesWithAuth = function*() {
  yield take(Auth.SignedIn);
  return (yield* updateServices(function(service) {
    return service.initialUpdate && service.requireAuth;
  }));
};

dispatchServiceAction = function*(serviceName, actionName, data) {
  var action, reduxAction;
  action = serviceActionByName(serviceName, actionName);
  if (action.convert) {
    data = action.convert(data);
  }
  if (data) {
    reduxAction = serviceReduxAction(serviceName, action);
    return (yield put(reduxAction(data)));
  }
};

updateService = function*(name) {
  var api, data, error;
  api = (yield select(getApi));
  try {
    data = (yield call(api.getServiceData, name));
    return (yield* dispatchServiceAction(name, 'found', data));
  } catch (error1) {
    error = error1;
    return console.error(error);
  }
};

updateServices = function*(filter) {
  var forkEffect;
  forkEffect = function(service) {
    return fork(updateService, service.name);
  };
  return (yield services.filter(filter).map(forkEffect));
};

module.exports = function*() {
  return (yield [fork(subscribeServices), fork(updateBasicServices), fork(updateServicesWithAuth)]);
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpL3JlZHV4L3NlcnZpY2Uvc2FnYXMuanMiLCJzb3VyY2VzIjpbImFwaS9yZWR1eC9zZXJ2aWNlL3NhZ2FzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLE1BQWtDLE9BQUEsQ0FBUSxvQkFBUixDQUFsQyxFQUFDLGVBQUQsRUFBTyxhQUFQLEVBQVksZUFBWixFQUFrQixtQkFBbEIsRUFBMEI7O0FBQzFCLElBQUEsR0FBTyxPQUFBLENBQVEsb0JBQVI7O0FBQ04saUJBQWtCLE9BQUEsQ0FBUSwrQkFBUjs7QUFDbkIsUUFBQSxHQUFXLE9BQUEsQ0FBUSxnQkFBUjs7QUFDWCxPQUFBLEdBQVUsT0FBQSxDQUFRLGdDQUFSOztBQUNWLE9BQTBCLE9BQUEsQ0FBUSxVQUFSLENBQTFCLEVBQUMsb0JBQUQsRUFBUzs7QUFDVCxPQUE0QyxPQUFBLENBQVEsU0FBUixDQUE1QyxFQUFDLDhDQUFELEVBQXNCOztBQUd0QixpQkFBQSxHQUFvQixVQUFBO0FBQ2xCLE1BQUE7RUFBQSxNQUFNLElBQUEsQ0FBSyxjQUFMO0VBRU4sR0FBQSxHQUFNLENBQUEsTUFBTSxNQUFBLENBQU8sTUFBUCxDQUFOO0VBQ04sT0FBQSxHQUFVLElBQUksT0FBSixDQUFBO0VBRVYsTUFBTSxRQUFRLENBQUMsR0FBVCxDQUFhLFNBQUMsT0FBRDtBQUNqQixRQUFBO0lBQUEsTUFBQSxHQUFTLGFBQUEsQ0FBYyxPQUFkO1dBRVQsSUFBQSxDQUFLLEdBQUcsQ0FBQyxnQkFBVCxFQUEyQixPQUFPLENBQUMsSUFBbkMsRUFBeUMsTUFBekMsRUFBaUQsU0FBQTthQUMvQyxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVo7SUFEK0MsQ0FBakQ7RUFIaUIsQ0FBYjtBQU1OO1NBQU0sSUFBTjtJQUNFLE9BQTZCLENBQUEsTUFBTSxJQUFBLENBQUssT0FBTyxDQUFDLElBQWIsQ0FBTixDQUE3QixFQUFDLHFCQUFELEVBQWMsZUFBZCxFQUFxQjtpQkFDckIsQ0FBQSxPQUFXLHFCQUFBLENBQXNCLFdBQXRCLEVBQW1DLEtBQW5DLEVBQTBDLElBQTFDLENBQVg7RUFGRixDQUFBOztBQVprQjs7QUFpQnBCLG1CQUFBLEdBQXNCLFVBQUE7RUFDcEIsTUFBTSxJQUFBLENBQUssY0FBTDtTQUVOLENBQUEsT0FBVyxjQUFBLENBQWUsU0FBQyxPQUFEO1dBQ3hCLE9BQU8sQ0FBQyxhQUFSLElBQTBCLENBQUksT0FBTyxDQUFDO0VBRGQsQ0FBZixDQUFYO0FBSG9COztBQU90QixzQkFBQSxHQUF5QixVQUFBO0VBQ3ZCLE1BQU0sSUFBQSxDQUFLLElBQUksQ0FBQyxRQUFWO1NBRU4sQ0FBQSxPQUFXLGNBQUEsQ0FBZSxTQUFDLE9BQUQ7V0FDeEIsT0FBTyxDQUFDLGFBQVIsSUFBMEIsT0FBTyxDQUFDO0VBRFYsQ0FBZixDQUFYO0FBSHVCOztBQVF6QixxQkFBQSxHQUF3QixVQUFDLFdBQUQsRUFBYyxVQUFkLEVBQTBCLElBQTFCO0FBQ3RCLE1BQUE7RUFBQSxNQUFBLEdBQVMsbUJBQUEsQ0FBb0IsV0FBcEIsRUFBaUMsVUFBakM7RUFFVCxJQUFHLE1BQU0sQ0FBQyxPQUFWO0lBQ0UsSUFBQSxHQUFPLE1BQU0sQ0FBQyxPQUFQLENBQWUsSUFBZixFQURUOztFQUdBLElBQUcsSUFBSDtJQUNFLFdBQUEsR0FBYyxrQkFBQSxDQUFtQixXQUFuQixFQUFnQyxNQUFoQztXQUNkLENBQUEsTUFBTSxHQUFBLENBQUksV0FBQSxDQUFZLElBQVosQ0FBSixDQUFOLEVBRkY7O0FBTnNCOztBQVd4QixhQUFBLEdBQWdCLFVBQUMsSUFBRDtBQUNkLE1BQUE7RUFBQSxHQUFBLEdBQU0sQ0FBQSxNQUFNLE1BQUEsQ0FBTyxNQUFQLENBQU47QUFFTjtJQUNFLElBQUEsR0FBTyxDQUFBLE1BQU0sSUFBQSxDQUFLLEdBQUcsQ0FBQyxjQUFULEVBQXlCLElBQXpCLENBQU47V0FDUCxDQUFBLE9BQVcscUJBQUEsQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsRUFBcUMsSUFBckMsQ0FBWCxFQUZGO0dBQUEsY0FBQTtJQUdNO1dBQ0osT0FBTyxDQUFDLEtBQVIsQ0FBYyxLQUFkLEVBSkY7O0FBSGM7O0FBVWhCLGNBQUEsR0FBaUIsVUFBQyxNQUFEO0FBQ2YsTUFBQTtFQUFBLFVBQUEsR0FBYSxTQUFDLE9BQUQ7V0FBYSxJQUFBLENBQUssYUFBTCxFQUFvQixPQUFPLENBQUMsSUFBNUI7RUFBYjtTQUNiLENBQUEsTUFBTSxRQUFRLENBQUMsTUFBVCxDQUFnQixNQUFoQixDQUF1QixDQUFDLEdBQXhCLENBQTRCLFVBQTVCLENBQU47QUFGZTs7QUFLakIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsVUFBQTtTQUFHLENBQUEsTUFBTSxDQUN4QixJQUFBLENBQUssaUJBQUwsQ0FEd0IsRUFFeEIsSUFBQSxDQUFLLG1CQUFMLENBRndCLEVBR3hCLElBQUEsQ0FBSyxzQkFBTCxDQUh3QixDQUFOO0FBQUgiLCJzb3VyY2VzQ29udGVudCI6WyJ7Y2FsbCwgcHV0LCB0YWtlLCBzZWxlY3QsIGZvcmt9ID0gcmVxdWlyZSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuQXV0aCA9IHJlcXVpcmUgJy4uL3VzZXIvYXV0aC90eXBlcydcbntBcGlJbml0aWFsaXplZH0gPSByZXF1aXJlICdzcmMvcmVkdXgvdHlwZXMnXG5zZXJ2aWNlcyA9IHJlcXVpcmUgJy4uLy4uL3NlcnZpY2VzJ1xuQ2hhbm5lbCA9IHJlcXVpcmUgJ3NyYy9saWJzL2NoYW5uZWwnXG57Z2V0QXBpLCBzZXJ2aWNlRXZlbnRzfSA9IHJlcXVpcmUgJy4uL3V0aWxzJ1xue3NlcnZpY2VBY3Rpb25CeU5hbWUsIHNlcnZpY2VSZWR1eEFjdGlvbn0gPSByZXF1aXJlICcuL3V0aWxzJ1xuXG5cbnN1YnNjcmliZVNlcnZpY2VzID0gLT5cbiAgeWllbGQgdGFrZShBcGlJbml0aWFsaXplZClcblxuICBhcGkgPSB5aWVsZCBzZWxlY3QoZ2V0QXBpKVxuICBjaGFubmVsID0gbmV3IENoYW5uZWwoKVxuXG4gIHlpZWxkIHNlcnZpY2VzLm1hcCAoc2VydmljZSkgLT5cbiAgICBldmVudHMgPSBzZXJ2aWNlRXZlbnRzKHNlcnZpY2UpXG4gICAgXG4gICAgZm9yayBhcGkuc3Vic2NyaWJlU2VydmljZSwgc2VydmljZS5uYW1lLCBldmVudHMsIC0+XG4gICAgICBjaGFubmVsLnB1dChhcmd1bWVudHMpXG5cbiAgd2hpbGUgeWVzXG4gICAgW3NlcnZpY2VOYW1lLCBldmVudCwgZGF0YV0gPSB5aWVsZCBjYWxsKGNoYW5uZWwudGFrZSlcbiAgICB5aWVsZCBmcm9tIGRpc3BhdGNoU2VydmljZUFjdGlvbihzZXJ2aWNlTmFtZSwgZXZlbnQsIGRhdGEpXG5cblxudXBkYXRlQmFzaWNTZXJ2aWNlcyA9IC0+XG4gIHlpZWxkIHRha2UoQXBpSW5pdGlhbGl6ZWQpXG5cbiAgeWllbGQgZnJvbSB1cGRhdGVTZXJ2aWNlcyAoc2VydmljZSkgLT5cbiAgICBzZXJ2aWNlLmluaXRpYWxVcGRhdGUgYW5kIG5vdCBzZXJ2aWNlLnJlcXVpcmVBdXRoXG4gIFxuICBcbnVwZGF0ZVNlcnZpY2VzV2l0aEF1dGggPSAtPlxuICB5aWVsZCB0YWtlKEF1dGguU2lnbmVkSW4pXG5cbiAgeWllbGQgZnJvbSB1cGRhdGVTZXJ2aWNlcyAoc2VydmljZSkgLT5cbiAgICBzZXJ2aWNlLmluaXRpYWxVcGRhdGUgYW5kIHNlcnZpY2UucmVxdWlyZUF1dGhcblxuXG4jIGludGVybmFsXG5kaXNwYXRjaFNlcnZpY2VBY3Rpb24gPSAoc2VydmljZU5hbWUsIGFjdGlvbk5hbWUsIGRhdGEpIC0+XG4gIGFjdGlvbiA9IHNlcnZpY2VBY3Rpb25CeU5hbWUoc2VydmljZU5hbWUsIGFjdGlvbk5hbWUpXG5cbiAgaWYgYWN0aW9uLmNvbnZlcnRcbiAgICBkYXRhID0gYWN0aW9uLmNvbnZlcnQoZGF0YSlcblxuICBpZiBkYXRhXG4gICAgcmVkdXhBY3Rpb24gPSBzZXJ2aWNlUmVkdXhBY3Rpb24oc2VydmljZU5hbWUsIGFjdGlvbilcbiAgICB5aWVsZCBwdXQocmVkdXhBY3Rpb24oZGF0YSkpXG5cblxudXBkYXRlU2VydmljZSA9IChuYW1lKSAtPlxuICBhcGkgPSB5aWVsZCBzZWxlY3QoZ2V0QXBpKVxuXG4gIHRyeVxuICAgIGRhdGEgPSB5aWVsZCBjYWxsKGFwaS5nZXRTZXJ2aWNlRGF0YSwgbmFtZSlcbiAgICB5aWVsZCBmcm9tIGRpc3BhdGNoU2VydmljZUFjdGlvbihuYW1lLCAnZm91bmQnLCBkYXRhKVxuICBjYXRjaCBlcnJvclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cbiAgXG51cGRhdGVTZXJ2aWNlcyA9IChmaWx0ZXIpIC0+XG4gIGZvcmtFZmZlY3QgPSAoc2VydmljZSkgLT4gZm9yayh1cGRhdGVTZXJ2aWNlLCBzZXJ2aWNlLm5hbWUpXG4gIHlpZWxkIHNlcnZpY2VzLmZpbHRlcihmaWx0ZXIpLm1hcChmb3JrRWZmZWN0KVxuXG5cbm1vZHVsZS5leHBvcnRzID0gLT4geWllbGQgW1xuICBmb3JrKHN1YnNjcmliZVNlcnZpY2VzKVxuICBmb3JrKHVwZGF0ZUJhc2ljU2VydmljZXMpXG4gIGZvcmsodXBkYXRlU2VydmljZXNXaXRoQXV0aClcbl1cbiJdfQ==
