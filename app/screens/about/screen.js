var Component, Icon, Image, ListView, React, Screen, Text, TouchableOpacity, View, gstyles, ref, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = (React = require('react')).Component;

ref = require('react-native'), ListView = ref.ListView, Image = ref.Image, View = ref.View, Text = ref.Text, TouchableOpacity = ref.TouchableOpacity;

Icon = require('react-native-vector-icons/MaterialIcons');

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

Screen = (function(superClass) {
  extend(Screen, superClass);

  Screen.defaultProps = {
    items: [],
    onSelect: function() {}
  };

  function Screen(props) {
    this.renderItem = bind(this.renderItem, this);
    var dataSource;
    Screen.__super__.constructor.apply(this, arguments);
    dataSource = new ListView.DataSource({
      rowHasChanged: function(r1, r2) {
        return r1 !== r2;
      }
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(props.items)
    };
  }

  Screen.prototype.componentWillReceiveProps = function(props) {
    return this.state.dataSource = this.state.dataSource.cloneWithRows(props.items);
  };

  Screen.prototype.render = function() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderItem}
      renderSeparator={this.renderSeparator}
      enableEmptySections={true}
      bounces={false}
      style={styles.list} />;
  };

  Screen.prototype.renderItem = function(item) {
    return <TouchableOpacity onPress={() => this.props.onSelect(item.id)}>
      <View style={styles.infoContainer}>
        <Icon name={item.icon} size={28} style={gstyles.gray} />
        <Text style={[gstyles.gray, styles.text]}>{item.description}</Text>
      </View>
    </TouchableOpacity>;
  };

  Screen.prototype.renderSeparator = function(sectionId, rowId) {
    var id;
    id = sectionId + "-" + rowId;
    return <View key={id} style={[gstyles.separator, styles.separator]} />;
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9hYm91dC9zY3JlZW4uanMiLCJzb3VyY2VzIjpbInNjcmVlbnMvYWJvdXQvc2NyZWVuLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLG1HQUFBO0VBQUE7Ozs7QUFBQyxZQUFhLENBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSLENBQVI7O0FBQ2QsTUFNSSxPQUFBLENBQVEsY0FBUixDQU5KLEVBQ0UsdUJBREYsRUFFRSxpQkFGRixFQUdFLGVBSEYsRUFJRSxlQUpGLEVBS0U7O0FBRUYsSUFBQSxHQUFPLE9BQUEsQ0FBUSx5Q0FBUjs7QUFDUCxNQUFBLEdBQVMsT0FBQSxDQUFRLFVBQVI7O0FBQ1QsT0FBQSxHQUFVLE9BQUEsQ0FBUSwwQkFBUjs7QUFHSjs7O0VBQ0osTUFBQyxDQUFBLFlBQUQsR0FDRTtJQUFBLEtBQUEsRUFBTyxFQUFQO0lBQ0EsUUFBQSxFQUFVLFNBQUEsR0FBQSxDQURWOzs7RUFJVyxnQkFBQyxLQUFEOztBQUNYLFFBQUE7SUFBQSx5Q0FBQSxTQUFBO0lBQ0EsVUFBQSxHQUFhLElBQUksUUFBUSxDQUFDLFVBQWIsQ0FBd0I7TUFBQSxhQUFBLEVBQWUsU0FBQyxFQUFELEVBQUssRUFBTDtlQUFZLEVBQUEsS0FBUTtNQUFwQixDQUFmO0tBQXhCO0lBQ2IsSUFBQyxDQUFBLEtBQUQsR0FBUztNQUFBLFVBQUEsRUFBWSxVQUFVLENBQUMsYUFBWCxDQUF5QixLQUFLLENBQUMsS0FBL0IsQ0FBWjs7RUFIRTs7bUJBTWIseUJBQUEsR0FBMkIsU0FBQyxLQUFEO1dBQ3pCLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBUCxHQUFvQixJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFsQixDQUFnQyxLQUFLLENBQUMsS0FBdEM7RUFESzs7bUJBSTNCLE1BQUEsR0FBUSxTQUFBO1dBQ047Ozs7Ozs7RUFETTs7bUJBVVIsVUFBQSxHQUFZLFNBQUMsSUFBRDtXQUNWOzs7Ozs7RUFEVTs7bUJBU1osZUFBQSxHQUFpQixTQUFDLFNBQUQsRUFBWSxLQUFaO0FBQ2YsUUFBQTtJQUFBLEVBQUEsR0FBUSxTQUFELEdBQVcsR0FBWCxHQUFjO1dBQ3JCO0VBRmU7Ozs7R0FuQ0U7O0FBd0NyQixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIntDb21wb25lbnR9ID0gUmVhY3QgPSByZXF1aXJlICdyZWFjdCdcbntcbiAgTGlzdFZpZXdcbiAgSW1hZ2VcbiAgVmlld1xuICBUZXh0XG4gIFRvdWNoYWJsZU9wYWNpdHlcbn0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG5JY29uID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXZlY3Rvci1pY29ucy9NYXRlcmlhbEljb25zJ1xuc3R5bGVzID0gcmVxdWlyZSAnLi9zdHlsZXMnXG5nc3R5bGVzID0gcmVxdWlyZSAnc3JjL3N0eWxlcydcblxuXG5jbGFzcyBTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnRcbiAgQGRlZmF1bHRQcm9wczpcbiAgICBpdGVtczogW11cbiAgICBvblNlbGVjdDogLT5cblxuXG4gIGNvbnN0cnVjdG9yOiAocHJvcHMpIC0+XG4gICAgc3VwZXJcbiAgICBkYXRhU291cmNlID0gbmV3IExpc3RWaWV3LkRhdGFTb3VyY2Uocm93SGFzQ2hhbmdlZDogKHIxLCByMikgLT4gcjEgaXNudCByMilcbiAgICBAc3RhdGUgPSBkYXRhU291cmNlOiBkYXRhU291cmNlLmNsb25lV2l0aFJvd3MocHJvcHMuaXRlbXMpXG5cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAocHJvcHMpIC0+XG4gICAgQHN0YXRlLmRhdGFTb3VyY2UgPSBAc3RhdGUuZGF0YVNvdXJjZS5jbG9uZVdpdGhSb3dzKHByb3BzLml0ZW1zKVxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIGA8TGlzdFZpZXdcbiAgICAgIGRhdGFTb3VyY2U9e3RoaXMuc3RhdGUuZGF0YVNvdXJjZX1cbiAgICAgIHJlbmRlclJvdz17dGhpcy5yZW5kZXJJdGVtfVxuICAgICAgcmVuZGVyU2VwYXJhdG9yPXt0aGlzLnJlbmRlclNlcGFyYXRvcn1cbiAgICAgIGVuYWJsZUVtcHR5U2VjdGlvbnM9e3RydWV9XG4gICAgICBib3VuY2VzPXtmYWxzZX1cbiAgICAgIHN0eWxlPXtzdHlsZXMubGlzdH0gLz5gXG5cblxuICByZW5kZXJJdGVtOiAoaXRlbSkgPT5cbiAgICBgPFRvdWNoYWJsZU9wYWNpdHkgb25QcmVzcz17KCkgPT4gdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtLmlkKX0+XG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmluZm9Db250YWluZXJ9PlxuICAgICAgICA8SWNvbiBuYW1lPXtpdGVtLmljb259IHNpemU9ezI4fSBzdHlsZT17Z3N0eWxlcy5ncmF5fSAvPlxuICAgICAgICA8VGV4dCBzdHlsZT17W2dzdHlsZXMuZ3JheSwgc3R5bGVzLnRleHRdfT57aXRlbS5kZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICA8L1ZpZXc+XG4gICAgPC9Ub3VjaGFibGVPcGFjaXR5PmBcblxuXG4gIHJlbmRlclNlcGFyYXRvcjogKHNlY3Rpb25JZCwgcm93SWQpIC0+XG4gICAgaWQgPSBcIiN7c2VjdGlvbklkfS0je3Jvd0lkfVwiXG4gICAgYDxWaWV3IGtleT17aWR9IHN0eWxlPXtbZ3N0eWxlcy5zZXBhcmF0b3IsIHN0eWxlcy5zZXBhcmF0b3JdfSAvPmBcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcmVlblxuIl19
