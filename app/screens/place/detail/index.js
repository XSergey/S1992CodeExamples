var Screen, connect, linking, mapStateToProps;

connect = require('react-redux').connect;

linking = require('bawadi-client/app/libs/linking');

Screen = require('./screen');

mapStateToProps = function(state, props) {
  var place, places, type;
  type = props.placeType;
  places = state[type].places;
  place = places.get(props.id);
  return {
    place: place.toJS(),
    onParking: function(id) {
      var location, parking, parkingIds, parkings, route;
      parkingIds = places.get(id).get('parking');
      parkings = state.parking.filter(function(_, key) {
        return parkingIds.includes(key);
      }).toList().toJS();
      parking = parkings[0];
      location = {
        label: parking.title,
        lat: parking.latitude,
        long: parking.longitude
      };
      return linking.openMap(location, route = true);
    }
  };
};

module.exports = connect(mapStateToProps)(Screen);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wbGFjZS9kZXRhaWwvaW5kZXguanMiLCJzb3VyY2VzIjpbInNjcmVlbnMvcGxhY2UvZGV0YWlsL2luZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFDLFVBQVcsT0FBQSxDQUFRLGFBQVI7O0FBQ1osT0FBQSxHQUFVLE9BQUEsQ0FBUSxnQ0FBUjs7QUFDVixNQUFBLEdBQVMsT0FBQSxDQUFRLFVBQVI7O0FBR1QsZUFBQSxHQUFrQixTQUFDLEtBQUQsRUFBUSxLQUFSO0FBQ2hCLE1BQUE7RUFBQSxJQUFBLEdBQU8sS0FBSyxDQUFDO0VBQ2IsTUFBQSxHQUFTLEtBQU0sQ0FBQSxJQUFBLENBQUssQ0FBQztFQUNyQixLQUFBLEdBQVEsTUFBTSxDQUFDLEdBQVAsQ0FBVyxLQUFLLENBQUMsRUFBakI7U0FFUjtJQUFBLEtBQUEsRUFBTyxLQUFLLENBQUMsSUFBTixDQUFBLENBQVA7SUFDQSxTQUFBLEVBQVcsU0FBQyxFQUFEO0FBQ1QsVUFBQTtNQUFBLFVBQUEsR0FBYSxNQUFNLENBQUMsR0FBUCxDQUFXLEVBQVgsQ0FBYyxDQUFDLEdBQWYsQ0FBbUIsU0FBbkI7TUFFYixRQUFBLEdBQVcsS0FBSyxDQUFDLE9BQ2YsQ0FBQyxNQURRLENBQ0QsU0FBQyxDQUFELEVBQUksR0FBSjtlQUFZLFVBQVUsQ0FBQyxRQUFYLENBQW9CLEdBQXBCO01BQVosQ0FEQyxDQUVULENBQUMsTUFGUSxDQUFBLENBRUEsQ0FBQyxJQUZELENBQUE7TUFJWCxPQUFBLEdBQVUsUUFBUyxDQUFBLENBQUE7TUFDbkIsUUFBQSxHQUNFO1FBQUEsS0FBQSxFQUFPLE9BQU8sQ0FBQyxLQUFmO1FBQ0EsR0FBQSxFQUFLLE9BQU8sQ0FBQyxRQURiO1FBRUEsSUFBQSxFQUFNLE9BQU8sQ0FBQyxTQUZkOzthQUlGLE9BQU8sQ0FBQyxPQUFSLENBQWdCLFFBQWhCLEVBQTBCLEtBQUEsR0FBTSxJQUFoQztJQWJTLENBRFg7O0FBTGdCOztBQXNCbEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FBQSxDQUFRLGVBQVIsQ0FBQSxDQUF5QixNQUF6QiIsInNvdXJjZXNDb250ZW50IjpbIntjb25uZWN0fSA9IHJlcXVpcmUgJ3JlYWN0LXJlZHV4J1xubGlua2luZyA9IHJlcXVpcmUgJ3NyYy9saWJzL2xpbmtpbmcnXG5TY3JlZW4gPSByZXF1aXJlICcuL3NjcmVlbidcblxuXG5tYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSAtPlxuICB0eXBlID0gcHJvcHMucGxhY2VUeXBlXG4gIHBsYWNlcyA9IHN0YXRlW3R5cGVdLnBsYWNlc1xuICBwbGFjZSA9IHBsYWNlcy5nZXQocHJvcHMuaWQpXG5cbiAgcGxhY2U6IHBsYWNlLnRvSlMoKVxuICBvblBhcmtpbmc6IChpZCkgLT5cbiAgICBwYXJraW5nSWRzID0gcGxhY2VzLmdldChpZCkuZ2V0KCdwYXJraW5nJylcblxuICAgIHBhcmtpbmdzID0gc3RhdGUucGFya2luZ1xuICAgICAgLmZpbHRlciAoXywga2V5KSAtPiBwYXJraW5nSWRzLmluY2x1ZGVzKGtleSlcbiAgICAgIC50b0xpc3QoKS50b0pTKClcblxuICAgIHBhcmtpbmcgPSBwYXJraW5nc1swXVxuICAgIGxvY2F0aW9uID1cbiAgICAgIGxhYmVsOiBwYXJraW5nLnRpdGxlXG4gICAgICBsYXQ6IHBhcmtpbmcubGF0aXR1ZGVcbiAgICAgIGxvbmc6IHBhcmtpbmcubG9uZ2l0dWRlXG5cbiAgICBsaW5raW5nLm9wZW5NYXAobG9jYXRpb24sIHJvdXRlPXllcylcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTY3JlZW4pXG4iXX0=
