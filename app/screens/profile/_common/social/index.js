var SocialNetworks, colors, connect, mapStateToProps;

connect = require('react-redux').connect;

SocialNetworks = require('./component');

colors = require('bawadi-client/app/colors');

mapStateToProps = function(state) {
  return {
    networks: [
      {
        name: "Facebook",
        icon: 'facebook',
        color: colors.facebook
      }, {
        name: "Twitter",
        icon: 'twitter',
        color: colors.twitter,
        connected: true
      }
    ]
  };
};

module.exports = connect(mapStateToProps)(SocialNetworks);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wcm9maWxlL19jb21tb24vc29jaWFsL2luZGV4LmpzIiwic291cmNlcyI6WyJzY3JlZW5zL3Byb2ZpbGUvX2NvbW1vbi9zb2NpYWwvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUMsVUFBVyxPQUFBLENBQVEsYUFBUjs7QUFDWixjQUFBLEdBQWlCLE9BQUEsQ0FBUSxhQUFSOztBQUNqQixNQUFBLEdBQVMsT0FBQSxDQUFRLDBCQUFSOztBQUdULGVBQUEsR0FBa0IsU0FBQyxLQUFEO1NBQ2hCO0lBQUEsUUFBQSxFQUFVO01BQ1I7UUFBQyxJQUFBLEVBQU0sVUFBUDtRQUFtQixJQUFBLEVBQU0sVUFBekI7UUFBcUMsS0FBQSxFQUFPLE1BQU0sQ0FBQyxRQUFuRDtPQURRLEVBRVI7UUFBQyxJQUFBLEVBQU0sU0FBUDtRQUFrQixJQUFBLEVBQU0sU0FBeEI7UUFBbUMsS0FBQSxFQUFPLE1BQU0sQ0FBQyxPQUFqRDtRQUEwRCxTQUFBLEVBQVcsSUFBckU7T0FGUTtLQUFWOztBQURnQjs7QUFPbEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FBQSxDQUFRLGVBQVIsQ0FBQSxDQUF5QixjQUF6QiIsInNvdXJjZXNDb250ZW50IjpbIntjb25uZWN0fSA9IHJlcXVpcmUgJ3JlYWN0LXJlZHV4J1xuU29jaWFsTmV0d29ya3MgPSByZXF1aXJlICcuL2NvbXBvbmVudCdcbmNvbG9ycyA9IHJlcXVpcmUgJ3NyYy9jb2xvcnMnXG5cblxubWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSAtPlxuICBuZXR3b3JrczogW1xuICAgIHtuYW1lOiBcIkZhY2Vib29rXCIsIGljb246ICdmYWNlYm9vaycsIGNvbG9yOiBjb2xvcnMuZmFjZWJvb2t9XG4gICAge25hbWU6IFwiVHdpdHRlclwiLCBpY29uOiAndHdpdHRlcicsIGNvbG9yOiBjb2xvcnMudHdpdHRlciwgY29ubmVjdGVkOiB5ZXN9XG4gIF1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTb2NpYWxOZXR3b3JrcylcbiJdfQ==
