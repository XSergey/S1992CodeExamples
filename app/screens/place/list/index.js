var RouteActions, Screen, connect, mapStateToProps;

connect = require('react-redux').connect;

RouteActions = require('react-native-router-flux').Actions;

Screen = require('./screen');

mapStateToProps = function(state, props) {
  var category, placeType, places, placesProp;
  placeType = props.placeType;
  category = props.category;
  places = state[placeType].places;
  placesProp = places.filter(function(place) {
    var ref;
    return (ref = place.get('categories')) != null ? ref.includes(category) : void 0;
  }).toList().toJS();
  return {
    places: placesProp,
    onSelect: function(id) {
      var ref, title;
      title = (ref = places.get(id)) != null ? ref.get('name') : void 0;
      return RouteActions.place({
        placeType: placeType,
        id: id,
        title: title
      });
    }
  };
};

module.exports = connect(mapStateToProps)(Screen);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wbGFjZS9saXN0L2luZGV4LmpzIiwic291cmNlcyI6WyJzY3JlZW5zL3BsYWNlL2xpc3QvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUMsVUFBVyxPQUFBLENBQVEsYUFBUjs7QUFDRixlQUFnQixPQUFBLENBQVEsMEJBQVIsRUFBekI7O0FBQ0QsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUdULGVBQUEsR0FBa0IsU0FBQyxLQUFELEVBQVEsS0FBUjtBQUNoQixNQUFBO0VBQUEsU0FBQSxHQUFZLEtBQUssQ0FBQztFQUNsQixRQUFBLEdBQVcsS0FBSyxDQUFDO0VBQ2pCLE1BQUEsR0FBUyxLQUFNLENBQUEsU0FBQSxDQUFVLENBQUM7RUFFMUIsVUFBQSxHQUFhLE1BQ1gsQ0FBQyxNQURVLENBQ0gsU0FBQyxLQUFEO0FBQVcsUUFBQTt3REFBdUIsQ0FBRSxRQUF6QixDQUFrQyxRQUFsQztFQUFYLENBREcsQ0FFWCxDQUFDLE1BRlUsQ0FBQSxDQUdYLENBQUMsSUFIVSxDQUFBO1NBS2I7SUFBQSxNQUFBLEVBQVEsVUFBUjtJQUNBLFFBQUEsRUFBVSxTQUFDLEVBQUQ7QUFDUixVQUFBO01BQUEsS0FBQSx1Q0FBc0IsQ0FBRSxHQUFoQixDQUFvQixNQUFwQjthQUNSLFlBQVksQ0FBQyxLQUFiLENBQW1CO1FBQUEsU0FBQSxFQUFXLFNBQVg7UUFBc0IsRUFBQSxFQUFJLEVBQTFCO1FBQThCLEtBQUEsRUFBTyxLQUFyQztPQUFuQjtJQUZRLENBRFY7O0FBVmdCOztBQWdCbEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FBQSxDQUFRLGVBQVIsQ0FBQSxDQUF5QixNQUF6QiIsInNvdXJjZXNDb250ZW50IjpbIntjb25uZWN0fSA9IHJlcXVpcmUgJ3JlYWN0LXJlZHV4J1xue0FjdGlvbnM6IFJvdXRlQWN0aW9uc30gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUtcm91dGVyLWZsdXgnXG5TY3JlZW4gPSByZXF1aXJlICcuL3NjcmVlbidcblxuXG5tYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSAtPlxuICBwbGFjZVR5cGUgPSBwcm9wcy5wbGFjZVR5cGVcbiAgY2F0ZWdvcnkgPSBwcm9wcy5jYXRlZ29yeVxuICBwbGFjZXMgPSBzdGF0ZVtwbGFjZVR5cGVdLnBsYWNlc1xuICBcbiAgcGxhY2VzUHJvcCA9IHBsYWNlc1xuICAgIC5maWx0ZXIgKHBsYWNlKSAtPiBwbGFjZS5nZXQoJ2NhdGVnb3JpZXMnKT8uaW5jbHVkZXMoY2F0ZWdvcnkpXG4gICAgLnRvTGlzdCgpXG4gICAgLnRvSlMoKVxuXG4gIHBsYWNlczogcGxhY2VzUHJvcFxuICBvblNlbGVjdDogKGlkKSAtPlxuICAgIHRpdGxlID0gcGxhY2VzLmdldChpZCk/LmdldCgnbmFtZScpXG4gICAgUm91dGVBY3Rpb25zLnBsYWNlKHBsYWNlVHlwZTogcGxhY2VUeXBlLCBpZDogaWQsIHRpdGxlOiB0aXRsZSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTY3JlZW4pXG4iXX0=
