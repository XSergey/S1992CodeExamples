var Button, Component, React, Text, TouchableOpacity, View, ref, styles,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, Text = ref.Text, TouchableOpacity = ref.TouchableOpacity;

Component = (React = require('react')).Component;

styles = require('./styles');

Button = (function(superClass) {
  extend(Button, superClass);

  function Button() {
    return Button.__super__.constructor.apply(this, arguments);
  }

  Button.prototype.render = function() {
    return <TouchableOpacity onPress={this.props.onPress} {...this.props}>
      <View style={[styles.button, this.props.disabled && styles.disabledButton]}>
        <Text style={styles.title}>{this.props.title}</Text>
        {this.props.children}
      </View>
    </TouchableOpacity>;
  };

  return Button;

})(Component);

module.exports = Button;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9fY29tbW9uL2J1dHRvbi9pbmRleC5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9fY29tbW9uL2J1dHRvbi9pbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxtRUFBQTtFQUFBOzs7QUFBQSxNQUFpQyxPQUFBLENBQVEsY0FBUixDQUFqQyxFQUFDLGVBQUQsRUFBTyxlQUFQLEVBQWE7O0FBQ1osWUFBYSxDQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUixDQUFSOztBQUNkLE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFHSDs7Ozs7OzttQkFDSixNQUFBLEdBQVEsU0FBQTtXQUNOOzs7Ozs7RUFETTs7OztHQURXOztBQVVyQixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIntWaWV3LCBUZXh0LCBUb3VjaGFibGVPcGFjaXR5fSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZSdcbntDb21wb25lbnR9ID0gUmVhY3QgPSByZXF1aXJlICdyZWFjdCdcbnN0eWxlcyA9IHJlcXVpcmUgJy4vc3R5bGVzJ1xuXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudFxuICByZW5kZXI6IC0+XG4gICAgYDxUb3VjaGFibGVPcGFjaXR5IG9uUHJlc3M9e3RoaXMucHJvcHMub25QcmVzc30gey4uLnRoaXMucHJvcHN9PlxuICAgICAgPFZpZXcgc3R5bGU9e1tzdHlsZXMuYnV0dG9uLCB0aGlzLnByb3BzLmRpc2FibGVkICYmIHN0eWxlcy5kaXNhYmxlZEJ1dHRvbl19PlxuICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRpdGxlfT57dGhpcy5wcm9wcy50aXRsZX08L1RleHQ+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9WaWV3PlxuICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5gXG5cblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b25cbiJdfQ==
