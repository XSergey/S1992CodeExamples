var makeTypes, ref, serviceActionType, serviceActionTypePath, set, setServiceTypes;

set = require('lodash.set');

ref = require('../utils'), serviceActionTypePath = ref.serviceActionTypePath, serviceActionType = ref.serviceActionType;

setServiceTypes = function(types, service) {
  var setActionType;
  setActionType = function(types, action) {
    var path, type;
    if (action.reduxAction) {
      return types;
    }
    path = serviceActionTypePath(service.name, action);
    type = serviceActionType(service.name, action);
    return set(types, path, type);
  };
  return service.actions.reduce(setActionType, types);
};

makeTypes = function(services) {
  return services.reduce(setServiceTypes, {});
};

module.exports = makeTypes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpL3JlZHV4L3NlcnZpY2UvdHlwZXMuanMiLCJzb3VyY2VzIjpbImFwaS9yZWR1eC9zZXJ2aWNlL3R5cGVzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLEdBQUEsR0FBTSxPQUFBLENBQVEsWUFBUjs7QUFDTixNQUE2QyxPQUFBLENBQVEsVUFBUixDQUE3QyxFQUFDLGlEQUFELEVBQXdCOztBQUd4QixlQUFBLEdBQWtCLFNBQUMsS0FBRCxFQUFRLE9BQVI7QUFDaEIsTUFBQTtFQUFBLGFBQUEsR0FBZ0IsU0FBQyxLQUFELEVBQVEsTUFBUjtBQUNkLFFBQUE7SUFBQSxJQUFHLE1BQU0sQ0FBQyxXQUFWO0FBQ0UsYUFBTyxNQURUOztJQUdBLElBQUEsR0FBTyxxQkFBQSxDQUFzQixPQUFPLENBQUMsSUFBOUIsRUFBb0MsTUFBcEM7SUFDUCxJQUFBLEdBQU8saUJBQUEsQ0FBa0IsT0FBTyxDQUFDLElBQTFCLEVBQWdDLE1BQWhDO1dBRVAsR0FBQSxDQUFJLEtBQUosRUFBVyxJQUFYLEVBQWlCLElBQWpCO0VBUGM7U0FTaEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFoQixDQUF1QixhQUF2QixFQUFzQyxLQUF0QztBQVZnQjs7QUFhbEIsU0FBQSxHQUFZLFNBQUMsUUFBRDtTQUNWLFFBQVEsQ0FBQyxNQUFULENBQWdCLGVBQWhCLEVBQWlDLEVBQWpDO0FBRFU7O0FBSVosTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJzZXQgPSByZXF1aXJlICdsb2Rhc2guc2V0J1xue3NlcnZpY2VBY3Rpb25UeXBlUGF0aCwgc2VydmljZUFjdGlvblR5cGV9ID0gcmVxdWlyZSAnLi4vdXRpbHMnXG5cblxuc2V0U2VydmljZVR5cGVzID0gKHR5cGVzLCBzZXJ2aWNlKSAtPlxuICBzZXRBY3Rpb25UeXBlID0gKHR5cGVzLCBhY3Rpb24pIC0+XG4gICAgaWYgYWN0aW9uLnJlZHV4QWN0aW9uICMgY3VzdG9tIHJlZHVjZXIsIHNraXBcbiAgICAgIHJldHVybiB0eXBlc1xuICAgIFxuICAgIHBhdGggPSBzZXJ2aWNlQWN0aW9uVHlwZVBhdGgoc2VydmljZS5uYW1lLCBhY3Rpb24pICMgJ1Byb21vLk9mZmVycy5VcGRhdGVkJ1xuICAgIHR5cGUgPSBzZXJ2aWNlQWN0aW9uVHlwZShzZXJ2aWNlLm5hbWUsIGFjdGlvbikgIyAnUFJPTU9fT0ZGRVJTX1VQREFURUQnXG5cbiAgICBzZXQodHlwZXMsIHBhdGgsIHR5cGUpXG5cbiAgc2VydmljZS5hY3Rpb25zLnJlZHVjZShzZXRBY3Rpb25UeXBlLCB0eXBlcylcblxuXG5tYWtlVHlwZXMgPSAoc2VydmljZXMpIC0+XG4gIHNlcnZpY2VzLnJlZHVjZShzZXRTZXJ2aWNlVHlwZXMsIHt9KVxuXG5cbm1vZHVsZS5leHBvcnRzID0gbWFrZVR5cGVzXG4iXX0=
