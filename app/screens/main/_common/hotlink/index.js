var Component, HotLink, MaterialIcons, React, Text, TouchableOpacity, View, ref, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, Text = ref.Text, TouchableOpacity = ref.TouchableOpacity;

Component = (React = require('react')).Component;

MaterialIcons = require('react-native-vector-icons/MaterialIcons');

styles = require('./styles');

HotLink = (function(superClass) {
  extend(HotLink, superClass);

  function HotLink() {
    this.click = bind(this.click, this);
    return HotLink.__super__.constructor.apply(this, arguments);
  }

  HotLink.defaultProps = {
    iconSet: MaterialIcons
  };

  HotLink.prototype.render = function() {
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

  HotLink.prototype.click = function() {
    var base;
    return typeof (base = this.props).onClick === "function" ? base.onClick(this.props.id) : void 0;
  };

  return HotLink;

})(Component);

module.exports = HotLink;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9tYWluL19jb21tb24vaG90bGluay9pbmRleC5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9tYWluL19jb21tb24vaG90bGluay9pbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxtRkFBQTtFQUFBOzs7O0FBQUEsTUFJSSxPQUFBLENBQVEsY0FBUixDQUpKLEVBQ0UsZUFERixFQUVFLGVBRkYsRUFHRTs7QUFFRCxZQUFhLENBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSLENBQVI7O0FBQ2QsYUFBQSxHQUFnQixPQUFBLENBQVEseUNBQVI7O0FBQ2hCLE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFHSDs7Ozs7Ozs7RUFDSixPQUFDLENBQUEsWUFBRCxHQUNFO0lBQUEsT0FBQSxFQUFTLGFBQVQ7OztvQkFHRixNQUFBLEdBQVEsU0FBQTtBQUNOLFFBQUE7SUFBQSxJQUFBLEdBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQztXQUNkOzs7Ozs7OztFQUZNOztvQkFZUixLQUFBLEdBQU8sU0FBQTtBQUNMLFFBQUE7bUVBQU0sQ0FBQyxRQUFTLElBQUMsQ0FBQSxLQUFLLENBQUM7RUFEbEI7Ozs7R0FqQmE7O0FBcUJ0QixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIntcbiAgVmlld1xuICBUZXh0XG4gIFRvdWNoYWJsZU9wYWNpdHlcbn0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Q29tcG9uZW50fSA9IFJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG5NYXRlcmlhbEljb25zID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXZlY3Rvci1pY29ucy9NYXRlcmlhbEljb25zJ1xuc3R5bGVzID0gcmVxdWlyZSAnLi9zdHlsZXMnXG5cblxuY2xhc3MgSG90TGluayBleHRlbmRzIENvbXBvbmVudFxuICBAZGVmYXVsdFByb3BzOlxuICAgIGljb25TZXQ6IE1hdGVyaWFsSWNvbnNcblxuXG4gIHJlbmRlcjogLT5cbiAgICBJY29uID0gQHByb3BzLmljb25TZXRcbiAgICBgPFRvdWNoYWJsZU9wYWNpdHkgb25QcmVzcz17dGhpcy5jbGlja30gc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPFZpZXc+XG4gICAgICAgIDxJY29uIG5hbWU9e3RoaXMucHJvcHMuaWNvbn0gc2l6ZT17MzJ9IHN0eWxlPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy50aXRsZUNvbnRhaW5lcn0+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50aXRsZX0+e3RoaXMucHJvcHMudGl0bGUudG9VcHBlckNhc2UoKX08L1RleHQ+XG4gICAgICAgIDwvVmlldz5cbiAgICAgIDwvVmlldz5cbiAgICA8L1RvdWNoYWJsZU9wYWNpdHk+YFxuXG5cbiAgY2xpY2s6ID0+XG4gICAgQHByb3BzLm9uQ2xpY2s/KEBwcm9wcy5pZClcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEhvdExpbmtcbiJdfQ==
