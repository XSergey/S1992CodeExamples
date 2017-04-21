var Screen, connect, mapStateToProps;

connect = require('react-redux').connect;

Screen = require('./screen');

mapStateToProps = function(state, props) {
  var promo, promos;
  promos = state.promo[props.promoType];
  promo = promos.get(props.id);
  return {
    promo: promo.toJS()
  };
};

module.exports = connect(mapStateToProps)(Screen);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wcm9tby9kZXRhaWwvaW5kZXguanMiLCJzb3VyY2VzIjpbInNjcmVlbnMvcHJvbW8vZGV0YWlsL2luZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFDLFVBQVcsT0FBQSxDQUFRLGFBQVI7O0FBQ1osTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUdULGVBQUEsR0FBa0IsU0FBQyxLQUFELEVBQVEsS0FBUjtBQUNoQixNQUFBO0VBQUEsTUFBQSxHQUFTLEtBQUssQ0FBQyxLQUFNLENBQUEsS0FBSyxDQUFDLFNBQU47RUFDckIsS0FBQSxHQUFRLE1BQU0sQ0FBQyxHQUFQLENBQVcsS0FBSyxDQUFDLEVBQWpCO1NBRVI7SUFBQSxLQUFBLEVBQU8sS0FBSyxDQUFDLElBQU4sQ0FBQSxDQUFQOztBQUpnQjs7QUFPbEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FBQSxDQUFRLGVBQVIsQ0FBQSxDQUF5QixNQUF6QiIsInNvdXJjZXNDb250ZW50IjpbIntjb25uZWN0fSA9IHJlcXVpcmUgJ3JlYWN0LXJlZHV4J1xuU2NyZWVuID0gcmVxdWlyZSAnLi9zY3JlZW4nXG5cblxubWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgLT5cbiAgcHJvbW9zID0gc3RhdGUucHJvbW9bcHJvcHMucHJvbW9UeXBlXVxuICBwcm9tbyA9IHByb21vcy5nZXQocHJvcHMuaWQpXG5cbiAgcHJvbW86IHByb21vLnRvSlMoKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNjcmVlbilcbiJdfQ==