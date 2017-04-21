var Component, Icon, Image, ListView, React, Screen, Text, TouchableOpacity, View, gstyles, ref, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), ListView = ref.ListView, TouchableOpacity = ref.TouchableOpacity, View = ref.View, Text = ref.Text, Image = ref.Image;

Icon = require('react-native-vector-icons/MaterialIcons');

Component = (React = require('react')).Component;

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

Screen = (function(superClass) {
  extend(Screen, superClass);

  Screen.defaultProps = {
    places: [],
    onSelect: function() {}
  };

  function Screen(props) {
    this.renderPlace = bind(this.renderPlace, this);
    var dataSource;
    Screen.__super__.constructor.apply(this, arguments);
    dataSource = new ListView.DataSource({
      rowHasChanged: function(r1, r2) {
        return r1 !== r2;
      }
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(props.places)
    };
  }

  Screen.prototype.componentWillReceiveProps = function(props) {
    return this.setState({
      dataSource: this.state.dataSource.cloneWithRows(props.places)
    });
  };

  Screen.prototype.render = function() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderPlace}
      renderSeparator={this.renderSeparator}
      enableEmptySections={true}
      style={styles.screen} />;
  };

  Screen.prototype.renderPlace = function(place) {
    var logo;
    if (place.logo) {
      logo = <Image source={{uri: place.logo}} style={styles.logoImage} />;
    } else {
      logo = <Icon
        name='store'
        size={styles.extra.storeIconSize}
        style={styles.logoIcon} />;
    }
    return <TouchableOpacity onPress={() => this.props.onSelect(place.id)}>
      <View style={styles.row}>
        {logo}
        <Text style={[gstyles.gray, styles.title]}>{place.name}</Text>
      </View>
    </TouchableOpacity>;
  };

  Screen.prototype.renderSeparator = function(sectionId, rowId) {
    var id;
    id = sectionId + "-" + rowId;
    return <View key={id} style={gstyles.separator} />;
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wbGFjZS9saXN0L3NjcmVlbi5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9wbGFjZS9saXN0L3NjcmVlbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxtR0FBQTtFQUFBOzs7O0FBQUEsTUFNSSxPQUFBLENBQVEsY0FBUixDQU5KLEVBQ0UsdUJBREYsRUFFRSx1Q0FGRixFQUdFLGVBSEYsRUFJRSxlQUpGLEVBS0U7O0FBRUYsSUFBQSxHQUFPLE9BQUEsQ0FBUSx5Q0FBUjs7QUFDTixZQUFhLENBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSLENBQVI7O0FBQ2QsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUNULE9BQUEsR0FBVSxPQUFBLENBQVEsMEJBQVI7O0FBR0o7OztFQUNKLE1BQUMsQ0FBQSxZQUFELEdBQ0U7SUFBQSxNQUFBLEVBQVEsRUFBUjtJQUNBLFFBQUEsRUFBVSxTQUFBLEdBQUEsQ0FEVjs7O0VBSVcsZ0JBQUMsS0FBRDs7QUFDWCxRQUFBO0lBQUEseUNBQUEsU0FBQTtJQUNBLFVBQUEsR0FBYSxJQUFJLFFBQVEsQ0FBQyxVQUFiLENBQXdCO01BQUEsYUFBQSxFQUFlLFNBQUMsRUFBRCxFQUFLLEVBQUw7ZUFBWSxFQUFBLEtBQVE7TUFBcEIsQ0FBZjtLQUF4QjtJQUNiLElBQUMsQ0FBQSxLQUFELEdBQVM7TUFBQSxVQUFBLEVBQVksVUFBVSxDQUFDLGFBQVgsQ0FBeUIsS0FBSyxDQUFDLE1BQS9CLENBQVo7O0VBSEU7O21CQU1iLHlCQUFBLEdBQTJCLFNBQUMsS0FBRDtXQUN6QixJQUFDLENBQUEsUUFBRCxDQUFVO01BQUEsVUFBQSxFQUFZLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWxCLENBQWdDLEtBQUssQ0FBQyxNQUF0QyxDQUFaO0tBQVY7RUFEeUI7O21CQUkzQixNQUFBLEdBQVEsU0FBQTtXQUNOOzs7Ozs7RUFETTs7bUJBU1IsV0FBQSxHQUFhLFNBQUMsS0FBRDtBQUNYLFFBQUE7SUFBQSxJQUFHLEtBQUssQ0FBQyxJQUFUO01BQ0UsSUFBQSxHQUFPLDhEQURUO0tBQUEsTUFBQTtNQUdFLElBQUEsR0FBTzs7O21DQUhUOztXQVFBOzs7Ozs7RUFUVzs7bUJBaUJiLGVBQUEsR0FBaUIsU0FBQyxTQUFELEVBQVksS0FBWjtBQUNmLFFBQUE7SUFBQSxFQUFBLEdBQVEsU0FBRCxHQUFXLEdBQVgsR0FBYztXQUNyQjtFQUZlOzs7O0dBMUNFOztBQStDckIsTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJ7XG4gIExpc3RWaWV3XG4gIFRvdWNoYWJsZU9wYWNpdHlcbiAgVmlld1xuICBUZXh0XG4gIEltYWdlXG59ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlJ1xuSWNvbiA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS12ZWN0b3ItaWNvbnMvTWF0ZXJpYWxJY29ucydcbntDb21wb25lbnR9ID0gUmVhY3QgPSByZXF1aXJlICdyZWFjdCdcbnN0eWxlcyA9IHJlcXVpcmUgJy4vc3R5bGVzJ1xuZ3N0eWxlcyA9IHJlcXVpcmUgJ3NyYy9zdHlsZXMnXG5cblxuY2xhc3MgU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50XG4gIEBkZWZhdWx0UHJvcHM6XG4gICAgcGxhY2VzOiBbXVxuICAgIG9uU2VsZWN0OiAtPlxuXG5cbiAgY29uc3RydWN0b3I6IChwcm9wcykgLT5cbiAgICBzdXBlclxuICAgIGRhdGFTb3VyY2UgPSBuZXcgTGlzdFZpZXcuRGF0YVNvdXJjZShyb3dIYXNDaGFuZ2VkOiAocjEsIHIyKSAtPiByMSBpc250IHIyKVxuICAgIEBzdGF0ZSA9IGRhdGFTb3VyY2U6IGRhdGFTb3VyY2UuY2xvbmVXaXRoUm93cyhwcm9wcy5wbGFjZXMpXG5cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAocHJvcHMpIC0+XG4gICAgQHNldFN0YXRlKGRhdGFTb3VyY2U6IEBzdGF0ZS5kYXRhU291cmNlLmNsb25lV2l0aFJvd3MocHJvcHMucGxhY2VzKSlcblxuXG4gIHJlbmRlcjogLT5cbiAgICBgPExpc3RWaWV3XG4gICAgICBkYXRhU291cmNlPXt0aGlzLnN0YXRlLmRhdGFTb3VyY2V9XG4gICAgICByZW5kZXJSb3c9e3RoaXMucmVuZGVyUGxhY2V9XG4gICAgICByZW5kZXJTZXBhcmF0b3I9e3RoaXMucmVuZGVyU2VwYXJhdG9yfVxuICAgICAgZW5hYmxlRW1wdHlTZWN0aW9ucz17dHJ1ZX1cbiAgICAgIHN0eWxlPXtzdHlsZXMuc2NyZWVufSAvPmBcblxuXG4gIHJlbmRlclBsYWNlOiAocGxhY2UpID0+XG4gICAgaWYgcGxhY2UubG9nb1xuICAgICAgbG9nbyA9IGA8SW1hZ2Ugc291cmNlPXt7dXJpOiBwbGFjZS5sb2dvfX0gc3R5bGU9e3N0eWxlcy5sb2dvSW1hZ2V9IC8+YFxuICAgIGVsc2VcbiAgICAgIGxvZ28gPSBgPEljb25cbiAgICAgICAgbmFtZT0nc3RvcmUnXG4gICAgICAgIHNpemU9e3N0eWxlcy5leHRyYS5zdG9yZUljb25TaXplfVxuICAgICAgICBzdHlsZT17c3R5bGVzLmxvZ29JY29ufSAvPmBcblxuICAgIGA8VG91Y2hhYmxlT3BhY2l0eSBvblByZXNzPXsoKSA9PiB0aGlzLnByb3BzLm9uU2VsZWN0KHBsYWNlLmlkKX0+XG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJvd30+XG4gICAgICAgIHtsb2dvfVxuICAgICAgICA8VGV4dCBzdHlsZT17W2dzdHlsZXMuZ3JheSwgc3R5bGVzLnRpdGxlXX0+e3BsYWNlLm5hbWV9PC9UZXh0PlxuICAgICAgPC9WaWV3PlxuICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5gXG5cblxuICByZW5kZXJTZXBhcmF0b3I6IChzZWN0aW9uSWQsIHJvd0lkKSAtPlxuICAgIGlkID0gXCIje3NlY3Rpb25JZH0tI3tyb3dJZH1cIlxuICAgIGA8VmlldyBrZXk9e2lkfSBzdHlsZT17Z3N0eWxlcy5zZXBhcmF0b3J9IC8+YFxuXG5cbm1vZHVsZS5leHBvcnRzID0gU2NyZWVuXG4iXX0=
