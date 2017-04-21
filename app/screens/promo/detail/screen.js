var Component, Image, React, Screen, ScrollView, Text, View, gstyles, ref, styles,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), ScrollView = ref.ScrollView, Image = ref.Image, View = ref.View, Text = ref.Text;

Component = (React = require('react')).Component;

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

Screen = (function(superClass) {
  extend(Screen, superClass);

  function Screen() {
    return Screen.__super__.constructor.apply(this, arguments);
  }

  Screen.prototype.render = function() {
    return <ScrollView style={styles.scroll} bounces={false}>
      <Image source={{uri: this.props.promo.image}} style={styles.logo} />
      <Text style={[gstyles.gray, styles.description]}>{this.props.promo.description}</Text>
    </ScrollView>;
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wcm9tby9kZXRhaWwvc2NyZWVuLmpzIiwic291cmNlcyI6WyJzY3JlZW5zL3Byb21vL2RldGFpbC9zY3JlZW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsNkVBQUE7RUFBQTs7O0FBQUEsTUFLSSxPQUFBLENBQVEsY0FBUixDQUxKLEVBQ0UsMkJBREYsRUFFRSxpQkFGRixFQUdFLGVBSEYsRUFJRTs7QUFFRCxZQUFhLENBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSLENBQVI7O0FBQ2QsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUNULE9BQUEsR0FBVSxPQUFBLENBQVEsMEJBQVI7O0FBR0o7Ozs7Ozs7bUJBQ0osTUFBQSxHQUFRLFNBQUE7V0FDTjs7OztFQURNOzs7O0dBRFc7O0FBUXJCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCIiwic291cmNlc0NvbnRlbnQiOlsie1xuICBTY3JvbGxWaWV3XG4gIEltYWdlXG4gIFZpZXdcbiAgVGV4dFxufSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZSdcbntDb21wb25lbnR9ID0gUmVhY3QgPSByZXF1aXJlICdyZWFjdCdcbnN0eWxlcyA9IHJlcXVpcmUgJy4vc3R5bGVzJ1xuZ3N0eWxlcyA9IHJlcXVpcmUgJ3NyYy9zdHlsZXMnXG5cblxuY2xhc3MgU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50XG4gIHJlbmRlcjogLT5cbiAgICBgPFNjcm9sbFZpZXcgc3R5bGU9e3N0eWxlcy5zY3JvbGx9IGJvdW5jZXM9e2ZhbHNlfT5cbiAgICAgIDxJbWFnZSBzb3VyY2U9e3t1cmk6IHRoaXMucHJvcHMucHJvbW8uaW1hZ2V9fSBzdHlsZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICA8VGV4dCBzdHlsZT17W2dzdHlsZXMuZ3JheSwgc3R5bGVzLmRlc2NyaXB0aW9uXX0+e3RoaXMucHJvcHMucHJvbW8uZGVzY3JpcHRpb259PC9UZXh0PlxuICAgIDwvU2Nyb2xsVmlldz5gXG5cblxubW9kdWxlLmV4cG9ydHMgPSBTY3JlZW5cbiJdfQ==
