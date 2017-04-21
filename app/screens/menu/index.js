var Menu, MenuItems, React, RouteActions, RouteType, Screen, ref,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

React = require('react');

ref = require('react-native-router-flux'), RouteActions = ref.Actions, RouteType = ref.ActionConst;

Screen = require('./screen');

MenuItems = [
  {
    title: "Main",
    id: 'main',
    icon: 'dashboard'
  }, {
    title: "Stores",
    id: 'storeCats',
    icon: 'store'
  }, {
    title: "Dining",
    id: 'diningCats',
    icon: 'local-dining'
  }, {
    title: "Events",
    id: 'events',
    icon: 'event'
  }, {
    title: "Offers",
    id: 'offers',
    icon: 'local-offer'
  }, {
    title: "Parking",
    id: 'parking',
    icon: 'local-parking'
  }, {
    title: "Raffle",
    id: 'raffle',
    icon: 'local-play'
  }, {
    title: "My profile",
    id: 'profile',
    icon: 'account-circle'
  }, {
    title: "About",
    id: 'about',
    icon: 'info-outline'
  }
];

Menu = (function(superClass) {
  extend(Menu, superClass);

  function Menu() {
    this.select = bind(this.select, this);
    return Menu.__super__.constructor.apply(this, arguments);
  }

  Menu.prototype.render = function() {
    return <Screen onSelect={this.select} items={MenuItems} />;
  };

  Menu.prototype.select = function(id) {
    var base;
    if (typeof (base = this.props).onSelect === "function") {
      base.onSelect();
    }
    return typeof RouteActions[id] === "function" ? RouteActions[id]({
      type: RouteType.REPLACE
    }) : void 0;
  };

  return Menu;

})(Screen);

module.exports = Menu;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9tZW51L2luZGV4LmpzIiwic291cmNlcyI6WyJzY3JlZW5zL21lbnUvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsNERBQUE7RUFBQTs7OztBQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUjs7QUFDUixNQUdJLE9BQUEsQ0FBUSwwQkFBUixDQUhKLEVBQ1csbUJBQVQsT0FERixFQUVlLGdCQUFiOztBQUVGLE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFHVCxTQUFBLEdBQVk7RUFDVjtJQUFDLEtBQUEsRUFBTyxNQUFSO0lBQWdCLEVBQUEsRUFBSSxNQUFwQjtJQUE0QixJQUFBLEVBQU0sV0FBbEM7R0FEVSxFQUVWO0lBQUMsS0FBQSxFQUFPLFFBQVI7SUFBa0IsRUFBQSxFQUFJLFdBQXRCO0lBQW1DLElBQUEsRUFBTSxPQUF6QztHQUZVLEVBR1Y7SUFBQyxLQUFBLEVBQU8sUUFBUjtJQUFrQixFQUFBLEVBQUksWUFBdEI7SUFBb0MsSUFBQSxFQUFNLGNBQTFDO0dBSFUsRUFJVjtJQUFDLEtBQUEsRUFBTyxRQUFSO0lBQWtCLEVBQUEsRUFBSSxRQUF0QjtJQUFnQyxJQUFBLEVBQU0sT0FBdEM7R0FKVSxFQUtWO0lBQUMsS0FBQSxFQUFPLFFBQVI7SUFBa0IsRUFBQSxFQUFJLFFBQXRCO0lBQWdDLElBQUEsRUFBTSxhQUF0QztHQUxVLEVBT1Y7SUFBQyxLQUFBLEVBQU8sU0FBUjtJQUFtQixFQUFBLEVBQUksU0FBdkI7SUFBa0MsSUFBQSxFQUFNLGVBQXhDO0dBUFUsRUFRVjtJQUFDLEtBQUEsRUFBTyxRQUFSO0lBQWtCLEVBQUEsRUFBSSxRQUF0QjtJQUFnQyxJQUFBLEVBQU0sWUFBdEM7R0FSVSxFQVNWO0lBQUMsS0FBQSxFQUFPLFlBQVI7SUFBc0IsRUFBQSxFQUFJLFNBQTFCO0lBQXFDLElBQUEsRUFBTSxnQkFBM0M7R0FUVSxFQVVWO0lBQUMsS0FBQSxFQUFPLE9BQVI7SUFBaUIsRUFBQSxFQUFJLE9BQXJCO0lBQThCLElBQUEsRUFBTSxjQUFwQztHQVZVOzs7QUFjTjs7Ozs7Ozs7aUJBQ0osTUFBQSxHQUFRLFNBQUE7V0FDTjtFQURNOztpQkFJUixNQUFBLEdBQVEsU0FBQyxFQUFEO0FBQ04sUUFBQTs7VUFBTSxDQUFDOztvREFDUCxZQUFhLENBQUEsRUFBQSxFQUFLO01BQUEsSUFBQSxFQUFNLFNBQVMsQ0FBQyxPQUFoQjs7RUFGWjs7OztHQUxTOztBQVVuQixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIlJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG57XG4gIEFjdGlvbnM6IFJvdXRlQWN0aW9uc1xuICBBY3Rpb25Db25zdDogUm91dGVUeXBlXG59ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXJvdXRlci1mbHV4J1xuU2NyZWVuID0gcmVxdWlyZSAnLi9zY3JlZW4nXG5cblxuTWVudUl0ZW1zID0gW1xuICB7dGl0bGU6IFwiTWFpblwiLCBpZDogJ21haW4nLCBpY29uOiAnZGFzaGJvYXJkJ31cbiAge3RpdGxlOiBcIlN0b3Jlc1wiLCBpZDogJ3N0b3JlQ2F0cycsIGljb246ICdzdG9yZSd9XG4gIHt0aXRsZTogXCJEaW5pbmdcIiwgaWQ6ICdkaW5pbmdDYXRzJywgaWNvbjogJ2xvY2FsLWRpbmluZyd9XG4gIHt0aXRsZTogXCJFdmVudHNcIiwgaWQ6ICdldmVudHMnLCBpY29uOiAnZXZlbnQnfVxuICB7dGl0bGU6IFwiT2ZmZXJzXCIsIGlkOiAnb2ZmZXJzJywgaWNvbjogJ2xvY2FsLW9mZmVyJ31cbiMgIHt0aXRsZTogXCJNYWxsIG1hcFwiLCBpZDogJ21hcCcsIGljb246ICdtYXAnfVxuICB7dGl0bGU6IFwiUGFya2luZ1wiLCBpZDogJ3BhcmtpbmcnLCBpY29uOiAnbG9jYWwtcGFya2luZyd9XG4gIHt0aXRsZTogXCJSYWZmbGVcIiwgaWQ6ICdyYWZmbGUnLCBpY29uOiAnbG9jYWwtcGxheSd9XG4gIHt0aXRsZTogXCJNeSBwcm9maWxlXCIsIGlkOiAncHJvZmlsZScsIGljb246ICdhY2NvdW50LWNpcmNsZSd9XG4gIHt0aXRsZTogXCJBYm91dFwiLCBpZDogJ2Fib3V0JywgaWNvbjogJ2luZm8tb3V0bGluZSd9XG5dXG5cblxuY2xhc3MgTWVudSBleHRlbmRzIFNjcmVlblxuICByZW5kZXI6IC0+XG4gICAgYDxTY3JlZW4gb25TZWxlY3Q9e3RoaXMuc2VsZWN0fSBpdGVtcz17TWVudUl0ZW1zfSAvPmBcblxuXG4gIHNlbGVjdDogKGlkKSA9PlxuICAgIEBwcm9wcy5vblNlbGVjdD8oKVxuICAgIFJvdXRlQWN0aW9uc1tpZF0/KHR5cGU6IFJvdXRlVHlwZS5SRVBMQUNFKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gTWVudVxuIl19
