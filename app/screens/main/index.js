var Links, RouteActions, Screen, connect, mapStateToProps, showScanReceipt;

RouteActions = require('react-native-router-flux').Actions;

connect = require('react-redux').connect;

Screen = require('./screen');

showScanReceipt = require('../../libs/show-scan-receipt');

Links = {
  stores: 'storeCats',
  dining: 'diningCats',
  events: 'events',
  offers: 'offers',
  map: 'map',
  scanReceipt: 'scanReceipt'
};

mapStateToProps = function(state) {
  var banners, registered;
  registered = state.user.auth.get('token') != null;
  banners = state.promo.offers.map(function(banner) {
    return banner.set('type', 'offers');
  }).concat(state.promo.events.map(function(banner) {
    return banner.set('type', 'events');
  })).filter(function(banner) {
    return banner.get('showOnMain');
  });
  return {
    storePlaces: state.store.places,
    diningPlaces: state.dining.places,
    banners: banners.toList().toJS(),
    onLinkClick: function(id) {
      var screen;
      if (id === 'scanReceipt') {
        if (!registered) {
          return RouteActions.bonusList();
        }
        return showScanReceipt();
      }
      screen = Links[id];
      return typeof RouteActions[screen] === "function" ? RouteActions[screen]() : void 0;
    },
    onBannerSelect: function(id) {
      var banner, browserLink, promoType, title, userId;
      banner = banners.get(id);
      title = banner != null ? banner.get('title') : void 0;
      if (browserLink = banner != null ? banner.get('browserLink') : void 0) {
        userId = state.user.info.get('id');
        browserLink = browserLink.replace('{USER_ID}', userId);
        return RouteActions.browser({
          title: title,
          source: {
            uri: browserLink
          }
        });
      } else {
        promoType = banner.get('type');
        return RouteActions.offer({
          promoType: promoType,
          id: id,
          title: title
        });
      }
    },
    onSearchSelect: function(id, type) {
      var ref, title;
      title = (ref = state[type].places.get(id)) != null ? ref.get('name') : void 0;
      return RouteActions.place({
        placeType: type,
        id: id,
        title: title
      });
    }
  };
};

module.exports = connect(mapStateToProps)(Screen);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9tYWluL2luZGV4LmpzIiwic291cmNlcyI6WyJzY3JlZW5zL21haW4vaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQVUsZUFBZ0IsT0FBQSxDQUFRLDBCQUFSLEVBQXpCOztBQUNBLFVBQVcsT0FBQSxDQUFRLGFBQVI7O0FBQ1osTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUNULGVBQUEsR0FBa0IsT0FBQSxDQUFRLDhCQUFSOztBQUdsQixLQUFBLEdBQ0U7RUFBQSxNQUFBLEVBQVEsV0FBUjtFQUNBLE1BQUEsRUFBUSxZQURSO0VBRUEsTUFBQSxFQUFRLFFBRlI7RUFHQSxNQUFBLEVBQVEsUUFIUjtFQUlBLEdBQUEsRUFBSyxLQUpMO0VBS0EsV0FBQSxFQUFhLGFBTGI7OztBQVFGLGVBQUEsR0FBa0IsU0FBQyxLQUFEO0FBQ2hCLE1BQUE7RUFBQSxVQUFBLEdBQWE7RUFDYixPQUFBLEdBQVUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUNwQixDQUFDLEdBRE8sQ0FDSCxTQUFDLE1BQUQ7V0FBWSxNQUFNLENBQUMsR0FBUCxDQUFXLE1BQVgsRUFBbUIsUUFBbkI7RUFBWixDQURHLENBRVIsQ0FBQyxNQUZPLENBR04sS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUNWLENBQUMsR0FESCxDQUNPLFNBQUMsTUFBRDtXQUFZLE1BQU0sQ0FBQyxHQUFQLENBQVcsTUFBWCxFQUFtQixRQUFuQjtFQUFaLENBRFAsQ0FITSxDQU1SLENBQUMsTUFOTyxDQU1BLFNBQUMsTUFBRDtXQUFZLE1BQU0sQ0FBQyxHQUFQLENBQVcsWUFBWDtFQUFaLENBTkE7U0FRVjtJQUFBLFdBQUEsRUFBYSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQXpCO0lBQ0EsWUFBQSxFQUFjLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFEM0I7SUFFQSxPQUFBLEVBQVMsT0FBTyxDQUFDLE1BQVIsQ0FBQSxDQUFnQixDQUFDLElBQWpCLENBQUEsQ0FGVDtJQUlBLFdBQUEsRUFBYSxTQUFDLEVBQUQ7QUFDWCxVQUFBO01BQUEsSUFBRyxFQUFBLEtBQU0sYUFBVDtRQUNFLElBQUcsQ0FBSSxVQUFQO0FBQ0UsaUJBQU8sWUFBWSxDQUFDLFNBQWIsQ0FBQSxFQURUOztBQUdBLGVBQU8sZUFBQSxDQUFBLEVBSlQ7O01BTUEsTUFBQSxHQUFTLEtBQU0sQ0FBQSxFQUFBOzBEQUNmLFlBQWEsQ0FBQSxNQUFBO0lBUkYsQ0FKYjtJQWNBLGNBQUEsRUFBZ0IsU0FBQyxFQUFEO0FBQ2QsVUFBQTtNQUFBLE1BQUEsR0FBUyxPQUFPLENBQUMsR0FBUixDQUFZLEVBQVo7TUFDVCxLQUFBLG9CQUFRLE1BQU0sQ0FBRSxHQUFSLENBQVksT0FBWjtNQUNSLElBQUcsV0FBQSxvQkFBYyxNQUFNLENBQUUsR0FBUixDQUFZLGFBQVosVUFBakI7UUFDRSxNQUFBLEdBQVMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBaEIsQ0FBb0IsSUFBcEI7UUFDVCxXQUFBLEdBQWMsV0FBVyxDQUFDLE9BQVosQ0FBb0IsV0FBcEIsRUFBaUMsTUFBakM7ZUFDZCxZQUFZLENBQUMsT0FBYixDQUFxQjtVQUFBLEtBQUEsRUFBTyxLQUFQO1VBQWMsTUFBQSxFQUFRO1lBQUEsR0FBQSxFQUFLLFdBQUw7V0FBdEI7U0FBckIsRUFIRjtPQUFBLE1BQUE7UUFLRSxTQUFBLEdBQVksTUFBTSxDQUFDLEdBQVAsQ0FBVyxNQUFYO2VBQ1osWUFBWSxDQUFDLEtBQWIsQ0FBbUI7VUFBQyxXQUFBLFNBQUQ7VUFBWSxJQUFBLEVBQVo7VUFBZ0IsT0FBQSxLQUFoQjtTQUFuQixFQU5GOztJQUhjLENBZGhCO0lBMEJBLGNBQUEsRUFBZ0IsU0FBQyxFQUFELEVBQUssSUFBTDtBQUNkLFVBQUE7TUFBQSxLQUFBLG1EQUFrQyxDQUFFLEdBQTVCLENBQWdDLE1BQWhDO2FBQ1IsWUFBWSxDQUFDLEtBQWIsQ0FBbUI7UUFBQSxTQUFBLEVBQVcsSUFBWDtRQUFpQixFQUFBLEVBQUksRUFBckI7UUFBeUIsS0FBQSxFQUFPLEtBQWhDO09BQW5CO0lBRmMsQ0ExQmhCOztBQVZnQjs7QUF5Q2xCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLE9BQUEsQ0FBUSxlQUFSLENBQUEsQ0FBeUIsTUFBekIiLCJzb3VyY2VzQ29udGVudCI6WyJ7QWN0aW9uczogUm91dGVBY3Rpb25zfSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS1yb3V0ZXItZmx1eCdcbntjb25uZWN0fSA9IHJlcXVpcmUgJ3JlYWN0LXJlZHV4J1xuU2NyZWVuID0gcmVxdWlyZSAnLi9zY3JlZW4nXG5zaG93U2NhblJlY2VpcHQgPSByZXF1aXJlICcuLi8uLi9saWJzL3Nob3ctc2Nhbi1yZWNlaXB0J1xuXG5cbkxpbmtzID1cbiAgc3RvcmVzOiAnc3RvcmVDYXRzJ1xuICBkaW5pbmc6ICdkaW5pbmdDYXRzJ1xuICBldmVudHM6ICdldmVudHMnXG4gIG9mZmVyczogJ29mZmVycydcbiAgbWFwOiAnbWFwJ1xuICBzY2FuUmVjZWlwdDogJ3NjYW5SZWNlaXB0J1xuXG5cbm1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgLT5cbiAgcmVnaXN0ZXJlZCA9IHN0YXRlLnVzZXIuYXV0aC5nZXQoJ3Rva2VuJyk/XG4gIGJhbm5lcnMgPSBzdGF0ZS5wcm9tby5vZmZlcnNcbiAgICAubWFwIChiYW5uZXIpIC0+IGJhbm5lci5zZXQoJ3R5cGUnLCAnb2ZmZXJzJylcbiAgICAuY29uY2F0IChcbiAgICAgIHN0YXRlLnByb21vLmV2ZW50c1xuICAgICAgICAubWFwIChiYW5uZXIpIC0+IGJhbm5lci5zZXQoJ3R5cGUnLCAnZXZlbnRzJylcbiAgICApXG4gICAgLmZpbHRlciAoYmFubmVyKSAtPiBiYW5uZXIuZ2V0KCdzaG93T25NYWluJylcblxuICBzdG9yZVBsYWNlczogc3RhdGUuc3RvcmUucGxhY2VzXG4gIGRpbmluZ1BsYWNlczogc3RhdGUuZGluaW5nLnBsYWNlc1xuICBiYW5uZXJzOiBiYW5uZXJzLnRvTGlzdCgpLnRvSlMoKVxuXG4gIG9uTGlua0NsaWNrOiAoaWQpIC0+XG4gICAgaWYgaWQgaXMgJ3NjYW5SZWNlaXB0J1xuICAgICAgaWYgbm90IHJlZ2lzdGVyZWRcbiAgICAgICAgcmV0dXJuIFJvdXRlQWN0aW9ucy5ib251c0xpc3QoKVxuXG4gICAgICByZXR1cm4gc2hvd1NjYW5SZWNlaXB0KClcblxuICAgIHNjcmVlbiA9IExpbmtzW2lkXVxuICAgIFJvdXRlQWN0aW9uc1tzY3JlZW5dPygpXG5cbiAgb25CYW5uZXJTZWxlY3Q6IChpZCkgLT5cbiAgICBiYW5uZXIgPSBiYW5uZXJzLmdldChpZClcbiAgICB0aXRsZSA9IGJhbm5lcj8uZ2V0KCd0aXRsZScpXG4gICAgaWYgYnJvd3NlckxpbmsgPSBiYW5uZXI/LmdldCgnYnJvd3NlckxpbmsnKVxuICAgICAgdXNlcklkID0gc3RhdGUudXNlci5pbmZvLmdldCgnaWQnKVxuICAgICAgYnJvd3NlckxpbmsgPSBicm93c2VyTGluay5yZXBsYWNlKCd7VVNFUl9JRH0nLCB1c2VySWQpXG4gICAgICBSb3V0ZUFjdGlvbnMuYnJvd3Nlcih0aXRsZTogdGl0bGUsIHNvdXJjZTogdXJpOiBicm93c2VyTGluaylcbiAgICBlbHNlXG4gICAgICBwcm9tb1R5cGUgPSBiYW5uZXIuZ2V0KCd0eXBlJylcbiAgICAgIFJvdXRlQWN0aW9ucy5vZmZlcih7cHJvbW9UeXBlLCBpZCwgdGl0bGV9KVxuXG5cbiAgb25TZWFyY2hTZWxlY3Q6IChpZCwgdHlwZSkgLT5cbiAgICB0aXRsZSA9IHN0YXRlW3R5cGVdLnBsYWNlcy5nZXQoaWQpPy5nZXQoJ25hbWUnKVxuICAgIFJvdXRlQWN0aW9ucy5wbGFjZShwbGFjZVR5cGU6IHR5cGUsIGlkOiBpZCwgdGl0bGU6IHRpdGxlKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNjcmVlbilcbiJdfQ==
