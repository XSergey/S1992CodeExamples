var Component, HotLinkScan, MaterialIcons, React, Text, TouchableOpacity, View, ref, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, Text = ref.Text, TouchableOpacity = ref.TouchableOpacity;

Component = (React = require('react')).Component;

MaterialIcons = require('react-native-vector-icons/MaterialIcons');

styles = require('./styles');

HotLinkScan = (function(superClass) {
  extend(HotLinkScan, superClass);

  function HotLinkScan() {
    this.click = bind(this.click, this);
    return HotLinkScan.__super__.constructor.apply(this, arguments);
  }

  HotLinkScan.defaultProps = {
    iconSet: MaterialIcons
  };

  HotLinkScan.prototype.render = function() {
    var Icon;
    Icon = this.props.iconSet;
    return <TouchableOpacity onPress={this.click} style={styles.container}>
      <View>
        <Icon name={this.props.icon} size={32} style={styles.icon} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>;
  };

  HotLinkScan.prototype.click = function() {
    var base;
    return typeof (base = this.props).onClick === "function" ? base.onClick(this.props.id) : void 0;
  };

  return HotLinkScan;

})(Component);

module.exports = HotLinkScan;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9tYWluL19jb21tb24vaG90bGlua3NjYW4vaW5kZXguanMiLCJzb3VyY2VzIjpbInNjcmVlbnMvbWFpbi9fY29tbW9uL2hvdGxpbmtzY2FuL2luZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLHVGQUFBO0VBQUE7Ozs7QUFBQSxNQUlJLE9BQUEsQ0FBUSxjQUFSLENBSkosRUFDRSxlQURGLEVBRUUsZUFGRixFQUdFOztBQUVELFlBQWEsQ0FBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLE9BQVIsQ0FBUjs7QUFDZCxhQUFBLEdBQWdCLE9BQUEsQ0FBUSx5Q0FBUjs7QUFDaEIsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUdIOzs7Ozs7OztFQUNKLFdBQUMsQ0FBQSxZQUFELEdBQ0U7SUFBQSxPQUFBLEVBQVMsYUFBVDs7O3dCQUdGLE1BQUEsR0FBUSxTQUFBO0FBQ04sUUFBQTtJQUFBLElBQUEsR0FBTyxJQUFDLENBQUEsS0FBSyxDQUFDO1dBQ2Q7Ozs7Ozs7O0VBRk07O3dCQVlSLEtBQUEsR0FBTyxTQUFBO0FBQ0wsUUFBQTttRUFBTSxDQUFDLFFBQVMsSUFBQyxDQUFBLEtBQUssQ0FBQztFQURsQjs7OztHQWpCaUI7O0FBcUIxQixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIntcbiAgVmlld1xuICBUZXh0XG4gIFRvdWNoYWJsZU9wYWNpdHlcbn0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Q29tcG9uZW50fSA9IFJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG5NYXRlcmlhbEljb25zID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXZlY3Rvci1pY29ucy9NYXRlcmlhbEljb25zJ1xuc3R5bGVzID0gcmVxdWlyZSAnLi9zdHlsZXMnXG5cblxuY2xhc3MgSG90TGlua1NjYW4gZXh0ZW5kcyBDb21wb25lbnRcbiAgQGRlZmF1bHRQcm9wczpcbiAgICBpY29uU2V0OiBNYXRlcmlhbEljb25zXG5cblxuICByZW5kZXI6IC0+XG4gICAgSWNvbiA9IEBwcm9wcy5pY29uU2V0XG4gICAgYDxUb3VjaGFibGVPcGFjaXR5IG9uUHJlc3M9e3RoaXMuY2xpY2t9IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxWaWV3PlxuICAgICAgICA8SWNvbiBuYW1lPXt0aGlzLnByb3BzLmljb259IHNpemU9ezMyfSBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGl0bGV9Pnt0aGlzLnByb3BzLnRpdGxlLnRvVXBwZXJDYXNlKCl9PC9UZXh0PlxuICAgICAgICA8L1ZpZXc+XG4gICAgICA8L1ZpZXc+XG4gICAgPC9Ub3VjaGFibGVPcGFjaXR5PmBcblxuXG4gIGNsaWNrOiA9PlxuICAgIEBwcm9wcy5vbkNsaWNrPyhAcHJvcHMuaWQpXG5cblxubW9kdWxlLmV4cG9ydHMgPSBIb3RMaW5rU2NhblxuIl19
