var Component, Icon, ListView, React, Screen, Text, TouchableOpacity, View, gstyles, ref, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, ListView = ref.ListView, Text = ref.Text, TouchableOpacity = ref.TouchableOpacity;

Component = (React = require('react')).Component;

Icon = require('react-native-vector-icons/MaterialIcons');

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

Screen = (function(superClass) {
  extend(Screen, superClass);

  Screen.defaultProps = {
    categories: [],
    onSelect: function() {}
  };

  function Screen(props) {
    this.renderCategory = bind(this.renderCategory, this);
    var dataSource;
    Screen.__super__.constructor.apply(this, arguments);
    dataSource = new ListView.DataSource({
      rowHasChanged: function(r1, r2) {
        return r1 !== r2;
      }
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(props.categories)
    };
  }

  Screen.prototype.componentWillReceiveProps = function(props) {
    return this.setState({
      dataSource: this.state.dataSource.cloneWithRows(props.categories)
    });
  };

  Screen.prototype.render = function() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderCategory}
      renderSeparator={this.renderSeparator}
      enableEmptySections={true}
      style={styles.list} />;
  };

  Screen.prototype.renderCategory = function(category) {
    return <TouchableOpacity onPress={() => this.props.onSelect(category.id)}>
      <View style={styles.row}>
        <Text style={[gstyles.gray, styles.title]}>{category.title}</Text>
        <Icon style={[gstyles.gray, styles.chevron]} size={20} name='chevron-right' />
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wbGFjZS9jYXRlZ29yaWVzL3NjcmVlbi5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9wbGFjZS9jYXRlZ29yaWVzL3NjcmVlbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSw0RkFBQTtFQUFBOzs7O0FBQUEsTUFLSSxPQUFBLENBQVEsY0FBUixDQUxKLEVBQ0UsZUFERixFQUVFLHVCQUZGLEVBR0UsZUFIRixFQUlFOztBQUVELFlBQWEsQ0FBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLE9BQVIsQ0FBUjs7QUFDZCxJQUFBLEdBQU8sT0FBQSxDQUFRLHlDQUFSOztBQUNQLE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFDVCxPQUFBLEdBQVUsT0FBQSxDQUFRLDBCQUFSOztBQUdKOzs7RUFDSixNQUFDLENBQUEsWUFBRCxHQUNFO0lBQUEsVUFBQSxFQUFZLEVBQVo7SUFDQSxRQUFBLEVBQVUsU0FBQSxHQUFBLENBRFY7OztFQUlXLGdCQUFDLEtBQUQ7O0FBQ1gsUUFBQTtJQUFBLHlDQUFBLFNBQUE7SUFDQSxVQUFBLEdBQWEsSUFBSSxRQUFRLENBQUMsVUFBYixDQUF3QjtNQUFBLGFBQUEsRUFBZSxTQUFDLEVBQUQsRUFBSyxFQUFMO2VBQVksRUFBQSxLQUFRO01BQXBCLENBQWY7S0FBeEI7SUFDYixJQUFDLENBQUEsS0FBRCxHQUFTO01BQUEsVUFBQSxFQUFZLFVBQVUsQ0FBQyxhQUFYLENBQXlCLEtBQUssQ0FBQyxVQUEvQixDQUFaOztFQUhFOzttQkFNYix5QkFBQSxHQUEyQixTQUFDLEtBQUQ7V0FDekIsSUFBQyxDQUFBLFFBQUQsQ0FBVTtNQUFBLFVBQUEsRUFBWSxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFsQixDQUFnQyxLQUFLLENBQUMsVUFBdEMsQ0FBWjtLQUFWO0VBRHlCOzttQkFJM0IsTUFBQSxHQUFRLFNBQUE7V0FDTjs7Ozs7O0VBRE07O21CQVNSLGNBQUEsR0FBZ0IsU0FBQyxRQUFEO1dBQ2Q7Ozs7OztFQURjOzttQkFTaEIsZUFBQSxHQUFpQixTQUFDLFNBQUQsRUFBWSxLQUFaO0FBQ2YsUUFBQTtJQUFBLEVBQUEsR0FBUSxTQUFELEdBQVcsR0FBWCxHQUFjO1dBQ3JCO0VBRmU7Ozs7R0FsQ0U7O0FBdUNyQixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIntcbiAgVmlld1xuICBMaXN0Vmlld1xuICBUZXh0XG4gIFRvdWNoYWJsZU9wYWNpdHlcbn0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Q29tcG9uZW50fSA9IFJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG5JY29uID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXZlY3Rvci1pY29ucy9NYXRlcmlhbEljb25zJ1xuc3R5bGVzID0gcmVxdWlyZSAnLi9zdHlsZXMnXG5nc3R5bGVzID0gcmVxdWlyZSAnc3JjL3N0eWxlcydcblxuXG5jbGFzcyBTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnRcbiAgQGRlZmF1bHRQcm9wczpcbiAgICBjYXRlZ29yaWVzOiBbXVxuICAgIG9uU2VsZWN0OiAtPlxuXG5cbiAgY29uc3RydWN0b3I6IChwcm9wcykgLT5cbiAgICBzdXBlclxuICAgIGRhdGFTb3VyY2UgPSBuZXcgTGlzdFZpZXcuRGF0YVNvdXJjZShyb3dIYXNDaGFuZ2VkOiAocjEsIHIyKSAtPiByMSBpc250IHIyKVxuICAgIEBzdGF0ZSA9IGRhdGFTb3VyY2U6IGRhdGFTb3VyY2UuY2xvbmVXaXRoUm93cyhwcm9wcy5jYXRlZ29yaWVzKVxuXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogKHByb3BzKSAtPlxuICAgIEBzZXRTdGF0ZShkYXRhU291cmNlOiBAc3RhdGUuZGF0YVNvdXJjZS5jbG9uZVdpdGhSb3dzKHByb3BzLmNhdGVnb3JpZXMpKVxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIGA8TGlzdFZpZXdcbiAgICAgIGRhdGFTb3VyY2U9e3RoaXMuc3RhdGUuZGF0YVNvdXJjZX1cbiAgICAgIHJlbmRlclJvdz17dGhpcy5yZW5kZXJDYXRlZ29yeX1cbiAgICAgIHJlbmRlclNlcGFyYXRvcj17dGhpcy5yZW5kZXJTZXBhcmF0b3J9XG4gICAgICBlbmFibGVFbXB0eVNlY3Rpb25zPXt0cnVlfVxuICAgICAgc3R5bGU9e3N0eWxlcy5saXN0fSAvPmBcblxuXG4gIHJlbmRlckNhdGVnb3J5OiAoY2F0ZWdvcnkpID0+XG4gICAgYDxUb3VjaGFibGVPcGFjaXR5IG9uUHJlc3M9eygpID0+IHRoaXMucHJvcHMub25TZWxlY3QoY2F0ZWdvcnkuaWQpfT5cbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucm93fT5cbiAgICAgICAgPFRleHQgc3R5bGU9e1tnc3R5bGVzLmdyYXksIHN0eWxlcy50aXRsZV19PntjYXRlZ29yeS50aXRsZX08L1RleHQ+XG4gICAgICAgIDxJY29uIHN0eWxlPXtbZ3N0eWxlcy5ncmF5LCBzdHlsZXMuY2hldnJvbl19IHNpemU9ezIwfSBuYW1lPSdjaGV2cm9uLXJpZ2h0JyAvPlxuICAgICAgPC9WaWV3PlxuICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5gXG5cblxuICByZW5kZXJTZXBhcmF0b3I6IChzZWN0aW9uSWQsIHJvd0lkKSAtPlxuICAgIGlkID0gXCIje3NlY3Rpb25JZH0tI3tyb3dJZH1cIlxuICAgIGA8VmlldyBrZXk9e2lkfSBzdHlsZT17Z3N0eWxlcy5zZXBhcmF0b3J9IC8+YFxuICAgIFxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcmVlblxuIl19
