var Component, Icon, IconButton, React, Text, TouchableOpacity, View, ref, styles,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, Text = ref.Text, TouchableOpacity = ref.TouchableOpacity;

Component = (React = require('react')).Component;

Icon = require('react-native-vector-icons/MaterialIcons');

styles = require('./style');

IconButton = (function(superClass) {
  extend(IconButton, superClass);

  function IconButton() {
    return IconButton.__super__.constructor.apply(this, arguments);
  }

  IconButton.defaultProps = {
    icon: 'check-circle',
    title: 'OK',
    onPress: function() {}
  };

  IconButton.prototype.render = function() {
    return <TouchableOpacity onPress={this.props.onPress}>
      <View style={styles.button}>
        <Icon
          name={this.props.icon}
          size={styles.extra.iconSize}
          style={styles.title} />
        <Text style={styles.title}> {this.props.title}</Text>
      </View>
    </TouchableOpacity>;
  };

  return IconButton;

})(Component);

module.exports = IconButton;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9fY29tbW9uL2ljb24tYnV0dG9uL2luZGV4LmpzIiwic291cmNlcyI6WyJzY3JlZW5zL19jb21tb24vaWNvbi1idXR0b24vaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsNkVBQUE7RUFBQTs7O0FBQUEsTUFBaUMsT0FBQSxDQUFRLGNBQVIsQ0FBakMsRUFBQyxlQUFELEVBQU8sZUFBUCxFQUFhOztBQUNaLFlBQWEsQ0FBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLE9BQVIsQ0FBUjs7QUFDZCxJQUFBLEdBQU8sT0FBQSxDQUFRLHlDQUFSOztBQUNQLE1BQUEsR0FBUyxPQUFBLENBQVEsU0FBUjs7QUFHSDs7Ozs7OztFQUNKLFVBQUMsQ0FBQSxZQUFELEdBQ0U7SUFBQSxJQUFBLEVBQU0sY0FBTjtJQUNBLEtBQUEsRUFBTyxJQURQO0lBRUEsT0FBQSxFQUFTLFNBQUEsR0FBQSxDQUZUOzs7dUJBS0YsTUFBQSxHQUFRLFNBQUE7V0FDTjs7Ozs7Ozs7O0VBRE07Ozs7R0FQZTs7QUFtQnpCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCIiwic291cmNlc0NvbnRlbnQiOlsie1ZpZXcsIFRleHQsIFRvdWNoYWJsZU9wYWNpdHl9ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlJ1xue0NvbXBvbmVudH0gPSBSZWFjdCA9IHJlcXVpcmUgJ3JlYWN0J1xuSWNvbiA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS12ZWN0b3ItaWNvbnMvTWF0ZXJpYWxJY29ucydcbnN0eWxlcyA9IHJlcXVpcmUgJy4vc3R5bGUnXG5cblxuY2xhc3MgSWNvbkJ1dHRvbiBleHRlbmRzIENvbXBvbmVudFxuICBAZGVmYXVsdFByb3BzOlxuICAgIGljb246ICdjaGVjay1jaXJjbGUnXG4gICAgdGl0bGU6ICdPSydcbiAgICBvblByZXNzOiAtPlxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIGA8VG91Y2hhYmxlT3BhY2l0eSBvblByZXNzPXt0aGlzLnByb3BzLm9uUHJlc3N9PlxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICBzaXplPXtzdHlsZXMuZXh0cmEuaWNvblNpemV9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy50aXRsZX0gLz5cbiAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50aXRsZX0+IHt0aGlzLnByb3BzLnRpdGxlfTwvVGV4dD5cbiAgICAgIDwvVmlldz5cbiAgICA8L1RvdWNoYWJsZU9wYWNpdHk+YFxuXG5cbm1vZHVsZS5leHBvcnRzID0gSWNvbkJ1dHRvblxuIl19
