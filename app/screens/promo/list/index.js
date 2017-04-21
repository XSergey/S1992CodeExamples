var RouteActions, Screen, connect, share;

connect = require('react-redux').connect;

RouteActions = require('react-native-router-flux').Actions;

share = require('bawadi-client/app/libs/share');

Screen = require('./screen');

module.exports = function(promoType) {
  var mapStateToProps;
  mapStateToProps = function(state) {
    var promos;
    promos = state.promo[promoType].sortBy(function(item) {
      return -item.get('date').getTime();
    });
    return {
      promos: promos.toList().toJS(),
      onSelect: function(id) {
        var browserLink, promo, title, userId;
        promo = promos.get(id);
        title = promo != null ? promo.get('title') : void 0;
        if (browserLink = promo != null ? promo.get('browserLink') : void 0) {
          userId = state.user.info.get('id');
          browserLink = browserLink.replace('{USER_ID}', userId);
          return RouteActions.browser({
            title: title,
            source: {
              uri: browserLink
            }
          });
        } else {
          return RouteActions.offer({
            promoType: 'offers',
            id: id,
            title: title
          });
        }
      },
      onShare: function(id) {
        var description, image, link, promo, title;
        promo = promos.get(id);
        title = promo.get('title');
        description = promo.get('description');
        image = promo.get('image');
        link = promo.get('shareLink');
        return share(title, description, image, link);
      }
    };
  };
  return connect(mapStateToProps)(Screen);
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wcm9tby9saXN0L2luZGV4LmpzIiwic291cmNlcyI6WyJzY3JlZW5zL3Byb21vL2xpc3QvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUMsVUFBVyxPQUFBLENBQVEsYUFBUjs7QUFDRixlQUFnQixPQUFBLENBQVEsMEJBQVIsRUFBekI7O0FBQ0QsS0FBQSxHQUFRLE9BQUEsQ0FBUSw4QkFBUjs7QUFDUixNQUFBLEdBQVMsT0FBQSxDQUFRLFVBQVI7O0FBR1QsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxTQUFEO0FBQ2YsTUFBQTtFQUFBLGVBQUEsR0FBa0IsU0FBQyxLQUFEO0FBQ2hCLFFBQUE7SUFBQSxNQUFBLEdBQVMsS0FBSyxDQUFDLEtBQU0sQ0FBQSxTQUFBLENBQ25CLENBQUMsTUFETSxDQUNDLFNBQUMsSUFBRDthQUFVLENBQUMsSUFBSSxDQUFDLEdBQUwsQ0FBUyxNQUFULENBQWdCLENBQUMsT0FBakIsQ0FBQTtJQUFYLENBREQ7V0FHVDtNQUFBLE1BQUEsRUFBUSxNQUFNLENBQUMsTUFBUCxDQUFBLENBQWUsQ0FBQyxJQUFoQixDQUFBLENBQVI7TUFFQSxRQUFBLEVBQVUsU0FBQyxFQUFEO0FBQ1IsWUFBQTtRQUFBLEtBQUEsR0FBUSxNQUFNLENBQUMsR0FBUCxDQUFXLEVBQVg7UUFDUixLQUFBLG1CQUFRLEtBQUssQ0FBRSxHQUFQLENBQVcsT0FBWDtRQUNSLElBQUcsV0FBQSxtQkFBYyxLQUFLLENBQUUsR0FBUCxDQUFXLGFBQVgsVUFBakI7VUFDRSxNQUFBLEdBQVMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBaEIsQ0FBb0IsSUFBcEI7VUFDVCxXQUFBLEdBQWMsV0FBVyxDQUFDLE9BQVosQ0FBb0IsV0FBcEIsRUFBaUMsTUFBakM7aUJBQ2QsWUFBWSxDQUFDLE9BQWIsQ0FBcUI7WUFBQSxLQUFBLEVBQU8sS0FBUDtZQUFjLE1BQUEsRUFBUTtjQUFBLEdBQUEsRUFBSyxXQUFMO2FBQXRCO1dBQXJCLEVBSEY7U0FBQSxNQUFBO2lCQUtFLFlBQVksQ0FBQyxLQUFiLENBQW1CO1lBQUEsU0FBQSxFQUFXLFFBQVg7WUFBcUIsRUFBQSxFQUFJLEVBQXpCO1lBQTZCLEtBQUEsRUFBTyxLQUFwQztXQUFuQixFQUxGOztNQUhRLENBRlY7TUFZQSxPQUFBLEVBQVMsU0FBQyxFQUFEO0FBQ1AsWUFBQTtRQUFBLEtBQUEsR0FBUSxNQUFNLENBQUMsR0FBUCxDQUFXLEVBQVg7UUFDUixLQUFBLEdBQVEsS0FBSyxDQUFDLEdBQU4sQ0FBVSxPQUFWO1FBQ1IsV0FBQSxHQUFjLEtBQUssQ0FBQyxHQUFOLENBQVUsYUFBVjtRQUNkLEtBQUEsR0FBUSxLQUFLLENBQUMsR0FBTixDQUFVLE9BQVY7UUFDUixJQUFBLEdBQU8sS0FBSyxDQUFDLEdBQU4sQ0FBVSxXQUFWO2VBRVAsS0FBQSxDQUFNLEtBQU4sRUFBYSxXQUFiLEVBQTBCLEtBQTFCLEVBQWlDLElBQWpDO01BUE8sQ0FaVDs7RUFKZ0I7U0F5QmxCLE9BQUEsQ0FBUSxlQUFSLENBQUEsQ0FBeUIsTUFBekI7QUExQmUiLCJzb3VyY2VzQ29udGVudCI6WyJ7Y29ubmVjdH0gPSByZXF1aXJlICdyZWFjdC1yZWR1eCdcbntBY3Rpb25zOiBSb3V0ZUFjdGlvbnN9ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXJvdXRlci1mbHV4J1xuc2hhcmUgPSByZXF1aXJlICdzcmMvbGlicy9zaGFyZSdcblNjcmVlbiA9IHJlcXVpcmUgJy4vc2NyZWVuJ1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKHByb21vVHlwZSkgLT5cbiAgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSAtPlxuICAgIHByb21vcyA9IHN0YXRlLnByb21vW3Byb21vVHlwZV1cbiAgICAgIC5zb3J0QnkgKGl0ZW0pIC0+IC1pdGVtLmdldCgnZGF0ZScpLmdldFRpbWUoKVxuXG4gICAgcHJvbW9zOiBwcm9tb3MudG9MaXN0KCkudG9KUygpXG5cbiAgICBvblNlbGVjdDogKGlkKSAtPlxuICAgICAgcHJvbW8gPSBwcm9tb3MuZ2V0KGlkKVxuICAgICAgdGl0bGUgPSBwcm9tbz8uZ2V0KCd0aXRsZScpXG4gICAgICBpZiBicm93c2VyTGluayA9IHByb21vPy5nZXQoJ2Jyb3dzZXJMaW5rJylcbiAgICAgICAgdXNlcklkID0gc3RhdGUudXNlci5pbmZvLmdldCgnaWQnKVxuICAgICAgICBicm93c2VyTGluayA9IGJyb3dzZXJMaW5rLnJlcGxhY2UoJ3tVU0VSX0lEfScsIHVzZXJJZClcbiAgICAgICAgUm91dGVBY3Rpb25zLmJyb3dzZXIodGl0bGU6IHRpdGxlLCBzb3VyY2U6IHVyaTogYnJvd3NlckxpbmspXG4gICAgICBlbHNlXG4gICAgICAgIFJvdXRlQWN0aW9ucy5vZmZlcihwcm9tb1R5cGU6ICdvZmZlcnMnLCBpZDogaWQsIHRpdGxlOiB0aXRsZSlcblxuICAgIG9uU2hhcmU6IChpZCkgLT5cbiAgICAgIHByb21vID0gcHJvbW9zLmdldChpZClcbiAgICAgIHRpdGxlID0gcHJvbW8uZ2V0KCd0aXRsZScpXG4gICAgICBkZXNjcmlwdGlvbiA9IHByb21vLmdldCgnZGVzY3JpcHRpb24nKVxuICAgICAgaW1hZ2UgPSBwcm9tby5nZXQoJ2ltYWdlJylcbiAgICAgIGxpbmsgPSBwcm9tby5nZXQoJ3NoYXJlTGluaycpXG5cbiAgICAgIHNoYXJlKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIGxpbmspXG5cbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNjcmVlbilcbiJdfQ==
