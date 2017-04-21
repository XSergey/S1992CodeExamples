var Component, Image, ListView, React, Screen, Text, TouchableOpacity, TouchableWithoutFeedback, View, gstyles, ref, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), ListView = ref.ListView, View = ref.View, Image = ref.Image, Text = ref.Text, TouchableWithoutFeedback = ref.TouchableWithoutFeedback, TouchableOpacity = ref.TouchableOpacity;

Component = (React = require('react')).Component;

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

Screen = (function(superClass) {
  extend(Screen, superClass);

  function Screen() {
    this.select = bind(this.select, this);
    this.overlayPress = bind(this.overlayPress, this);
    this.renderItem = bind(this.renderItem, this);
    Screen.__super__.constructor.apply(this, arguments);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: function(r1, r2) {
          return r1 !== r2;
        }
      })
    };
  }

  Screen.prototype.componentWillReceiveProps = function(nextProps) {
    var base, items;
    if (nextProps.show) {
      items = (typeof (base = this.props).search === "function" ? base.search(nextProps.text) : void 0) || [];
      return this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    }
  };

  Screen.prototype.render = function() {
    return <View style={styles.screen}>
      {React.Children.only(this.props.children)}
      { this.props.show &&
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.overlayPress}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderItem}
            renderSeparator={this.renderSeparator}
            enableEmptySections={true}
            bounces={false}
            style={styles.list} />
        </View>
      }
    </View>;
  };

  Screen.prototype.renderItem = function(item) {
    return <TouchableOpacity onPress={() => this.select(item.id)}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
        <Text style={[gstyles.gray, styles.title]}>{item.title}</Text>
      </View>
    </TouchableOpacity>;
  };

  Screen.prototype.renderSeparator = function(sectionId, rowId) {
    var id;
    id = sectionId + "-" + rowId;
    return <View key={id} style={gstyles.separator} />;
  };

  Screen.prototype.overlayPress = function() {
    var base;
    return typeof (base = this.props).onOverlayPress === "function" ? base.onOverlayPress() : void 0;
  };

  Screen.prototype.select = function(id) {
    var base;
    return typeof (base = this.props).onSelect === "function" ? base.onSelect(id) : void 0;
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9fY29tbW9uL3NlYXJjaC1zY3JlZW4vc2NyZWVuLmpzIiwic291cmNlcyI6WyJzY3JlZW5zL19jb21tb24vc2VhcmNoLXNjcmVlbi9zY3JlZW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsdUhBQUE7RUFBQTs7OztBQUFBLE1BT0ksT0FBQSxDQUFRLGNBQVIsQ0FQSixFQUNFLHVCQURGLEVBRUUsZUFGRixFQUdFLGlCQUhGLEVBSUUsZUFKRixFQUtFLHVEQUxGLEVBTUU7O0FBRUQsWUFBYSxDQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUixDQUFSOztBQUNkLE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFDVCxPQUFBLEdBQVUsT0FBQSxDQUFRLDBCQUFSOztBQUdKOzs7RUFDUyxnQkFBQTs7OztJQUNYLHlDQUFBLFNBQUE7SUFDQSxJQUFDLENBQUEsS0FBRCxHQUFTO01BQUEsVUFBQSxFQUFZLElBQUksUUFBUSxDQUFDLFVBQWIsQ0FBd0I7UUFBQSxhQUFBLEVBQWUsU0FBQyxFQUFELEVBQUssRUFBTDtpQkFBWSxFQUFBLEtBQVE7UUFBcEIsQ0FBZjtPQUF4QixDQUFaOztFQUZFOzttQkFLYix5QkFBQSxHQUEyQixTQUFDLFNBQUQ7QUFDekIsUUFBQTtJQUFBLElBQUcsU0FBUyxDQUFDLElBQWI7TUFDRSxLQUFBLDJEQUFjLENBQUMsT0FBUSxTQUFTLENBQUMsZUFBekIsSUFBa0M7YUFDMUMsSUFBQyxDQUFBLFFBQUQsQ0FBVTtRQUFBLFVBQUEsRUFBWSxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFsQixDQUFnQyxLQUFoQyxDQUFaO09BQVYsRUFGRjs7RUFEeUI7O21CQU0zQixNQUFBLEdBQVEsU0FBQTtXQUNOOzs7Ozs7Ozs7Ozs7Ozs7OztFQURNOzttQkFvQlIsVUFBQSxHQUFZLFNBQUMsSUFBRDtXQUNWOzs7Ozs7OztFQURVOzttQkFXWixlQUFBLEdBQWlCLFNBQUMsU0FBRCxFQUFZLEtBQVo7QUFDZixRQUFBO0lBQUEsRUFBQSxHQUFRLFNBQUQsR0FBVyxHQUFYLEdBQWM7V0FDckI7RUFGZTs7bUJBS2pCLFlBQUEsR0FBYyxTQUFBO0FBQ1osUUFBQTswRUFBTSxDQUFDO0VBREs7O21CQUlkLE1BQUEsR0FBUSxTQUFDLEVBQUQ7QUFDTixRQUFBO29FQUFNLENBQUMsU0FBVTtFQURYOzs7O0dBcERXOztBQXdEckIsTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJ7XG4gIExpc3RWaWV3XG4gIFZpZXdcbiAgSW1hZ2VcbiAgVGV4dFxuICBUb3VjaGFibGVXaXRob3V0RmVlZGJhY2tcbiAgVG91Y2hhYmxlT3BhY2l0eVxufSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZSdcbntDb21wb25lbnR9ID0gUmVhY3QgPSByZXF1aXJlICdyZWFjdCdcbnN0eWxlcyA9IHJlcXVpcmUgJy4vc3R5bGVzJ1xuZ3N0eWxlcyA9IHJlcXVpcmUgJ3NyYy9zdHlsZXMnXG5cblxuY2xhc3MgU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50XG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIHN1cGVyXG4gICAgQHN0YXRlID0gZGF0YVNvdXJjZTogbmV3IExpc3RWaWV3LkRhdGFTb3VyY2Uocm93SGFzQ2hhbmdlZDogKHIxLCByMikgLT4gcjEgaXNudCByMilcblxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuZXh0UHJvcHMpIC0+XG4gICAgaWYgbmV4dFByb3BzLnNob3dcbiAgICAgIGl0ZW1zID0gQHByb3BzLnNlYXJjaD8obmV4dFByb3BzLnRleHQpIG9yIFtdXG4gICAgICBAc2V0U3RhdGUoZGF0YVNvdXJjZTogQHN0YXRlLmRhdGFTb3VyY2UuY2xvbmVXaXRoUm93cyhpdGVtcykpXG5cblxuICByZW5kZXI6IC0+XG4gICAgYDxWaWV3IHN0eWxlPXtzdHlsZXMuc2NyZWVufT5cbiAgICAgIHtSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pfVxuICAgICAgeyB0aGlzLnByb3BzLnNob3cgJiZcbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxUb3VjaGFibGVXaXRob3V0RmVlZGJhY2sgb25QcmVzcz17dGhpcy5vdmVybGF5UHJlc3N9PlxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5vdmVybGF5fSAvPlxuICAgICAgICAgIDwvVG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrPlxuICAgICAgICAgIDxMaXN0Vmlld1xuICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5zdGF0ZS5kYXRhU291cmNlfVxuICAgICAgICAgICAgcmVuZGVyUm93PXt0aGlzLnJlbmRlckl0ZW19XG4gICAgICAgICAgICByZW5kZXJTZXBhcmF0b3I9e3RoaXMucmVuZGVyU2VwYXJhdG9yfVxuICAgICAgICAgICAgZW5hYmxlRW1wdHlTZWN0aW9ucz17dHJ1ZX1cbiAgICAgICAgICAgIGJvdW5jZXM9e2ZhbHNlfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5saXN0fSAvPlxuICAgICAgICA8L1ZpZXc+XG4gICAgICB9XG4gICAgPC9WaWV3PmBcblxuXG4gIHJlbmRlckl0ZW06IChpdGVtKSA9PlxuICAgIGA8VG91Y2hhYmxlT3BhY2l0eSBvblByZXNzPXsoKSA9PiB0aGlzLnNlbGVjdChpdGVtLmlkKX0+XG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJvd30+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgIDxJbWFnZSBzb3VyY2U9e3t1cmk6IGl0ZW0uaW1hZ2V9fSBzdHlsZT17c3R5bGVzLmltYWdlfSAvPlxuICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtbZ3N0eWxlcy5ncmF5LCBzdHlsZXMudGl0bGVdfT57aXRlbS50aXRsZX08L1RleHQ+XG4gICAgICA8L1ZpZXc+XG4gICAgPC9Ub3VjaGFibGVPcGFjaXR5PmBcblxuXG4gIHJlbmRlclNlcGFyYXRvcjogKHNlY3Rpb25JZCwgcm93SWQpIC0+XG4gICAgaWQgPSBcIiN7c2VjdGlvbklkfS0je3Jvd0lkfVwiXG4gICAgYDxWaWV3IGtleT17aWR9IHN0eWxlPXtnc3R5bGVzLnNlcGFyYXRvcn0gLz5gXG5cblxuICBvdmVybGF5UHJlc3M6ID0+XG4gICAgQHByb3BzLm9uT3ZlcmxheVByZXNzPygpXG5cblxuICBzZWxlY3Q6IChpZCkgPT5cbiAgICBAcHJvcHMub25TZWxlY3Q/KGlkKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gU2NyZWVuXG4iXX0=
