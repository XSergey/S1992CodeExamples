var Component, Icon, Image, ListView, React, Screen, Text, TouchableOpacity, View, gstyles, ref, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, Text = ref.Text, ListView = ref.ListView, Image = ref.Image, TouchableOpacity = ref.TouchableOpacity;

Component = (React = require('react')).Component;

Icon = require('react-native-vector-icons/MaterialIcons');

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

Screen = (function(superClass) {
  extend(Screen, superClass);

  Screen.defaultProps = {
    items: [],
    onSelect: function() {}
  };

  function Screen() {
    this.renderItem = bind(this.renderItem, this);
    var dataSource;
    Screen.__super__.constructor.apply(this, arguments);
    dataSource = new ListView.DataSource({
      rowHasChanged: function(r1, r2) {
        return r1 !== r2;
      }
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.items)
    };
  }

  Screen.prototype.render = function() {
    return <View style={styles.screen}>
      <Image source={require('bawadi-client/app/res/images/logo.png')} style={styles.logo} />
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}
        renderSeparator={this.renderSeparator}
        bounces={false} />
    </View>;
  };

  Screen.prototype.renderItem = function(item) {
    return <TouchableOpacity onPress={() => this.props.onSelect(item.id)}>
      <View style={styles.row}>
        <View style={styles.titleContainer}>
          { item.icon && <Icon style={[gstyles.gray, styles.icon]} name={item.icon} size={20} /> }
          <Text style={[gstyles.gray, styles.title]}>{item.title.toUpperCase()}</Text>
        </View>
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9tZW51L3NjcmVlbi5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9tZW51L3NjcmVlbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxtR0FBQTtFQUFBOzs7O0FBQUEsTUFNSSxPQUFBLENBQVEsY0FBUixDQU5KLEVBQ0UsZUFERixFQUVFLGVBRkYsRUFHRSx1QkFIRixFQUlFLGlCQUpGLEVBS0U7O0FBRUQsWUFBYSxDQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUixDQUFSOztBQUNkLElBQUEsR0FBTyxPQUFBLENBQVEseUNBQVI7O0FBQ1AsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUNULE9BQUEsR0FBVSxPQUFBLENBQVEsMEJBQVI7O0FBR0o7OztFQUNKLE1BQUMsQ0FBQSxZQUFELEdBQ0U7SUFBQSxLQUFBLEVBQU8sRUFBUDtJQUNBLFFBQUEsRUFBVSxTQUFBLEdBQUEsQ0FEVjs7O0VBSVcsZ0JBQUE7O0FBQ1gsUUFBQTtJQUFBLHlDQUFBLFNBQUE7SUFDQSxVQUFBLEdBQWEsSUFBSSxRQUFRLENBQUMsVUFBYixDQUF3QjtNQUFBLGFBQUEsRUFBZSxTQUFDLEVBQUQsRUFBSyxFQUFMO2VBQVksRUFBQSxLQUFRO01BQXBCLENBQWY7S0FBeEI7SUFDYixJQUFDLENBQUEsS0FBRCxHQUFTO01BQUEsVUFBQSxFQUFZLFVBQVUsQ0FBQyxhQUFYLENBQXlCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBaEMsQ0FBWjs7RUFIRTs7bUJBTWIsTUFBQSxHQUFRLFNBQUE7V0FDTjs7Ozs7Ozs7RUFETTs7bUJBV1IsVUFBQSxHQUFZLFNBQUMsSUFBRDtXQUNWOzs7Ozs7Ozs7RUFEVTs7bUJBWVosZUFBQSxHQUFpQixTQUFDLFNBQUQsRUFBWSxLQUFaO0FBQ2YsUUFBQTtJQUFBLEVBQUEsR0FBUSxTQUFELEdBQVcsR0FBWCxHQUFjO1dBQ3JCO0VBRmU7Ozs7R0FuQ0U7O0FBd0NyQixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIntcbiAgVmlld1xuICBUZXh0XG4gIExpc3RWaWV3XG4gIEltYWdlXG4gIFRvdWNoYWJsZU9wYWNpdHlcbn0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Q29tcG9uZW50fSA9IFJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG5JY29uID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXZlY3Rvci1pY29ucy9NYXRlcmlhbEljb25zJ1xuc3R5bGVzID0gcmVxdWlyZSAnLi9zdHlsZXMnXG5nc3R5bGVzID0gcmVxdWlyZSAnc3JjL3N0eWxlcydcblxuXG5jbGFzcyBTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnRcbiAgQGRlZmF1bHRQcm9wczpcbiAgICBpdGVtczogW11cbiAgICBvblNlbGVjdDogLT5cblxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIHN1cGVyXG4gICAgZGF0YVNvdXJjZSA9IG5ldyBMaXN0Vmlldy5EYXRhU291cmNlKHJvd0hhc0NoYW5nZWQ6IChyMSwgcjIpIC0+IHIxIGlzbnQgcjIpXG4gICAgQHN0YXRlID0gZGF0YVNvdXJjZTogZGF0YVNvdXJjZS5jbG9uZVdpdGhSb3dzKEBwcm9wcy5pdGVtcylcblxuXG4gIHJlbmRlcjogLT5cbiAgICBgPFZpZXcgc3R5bGU9e3N0eWxlcy5zY3JlZW59PlxuICAgICAgPEltYWdlIHNvdXJjZT17cmVxdWlyZSgnc3JjL3Jlcy9pbWFnZXMvbG9nby5wbmcnKX0gc3R5bGU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgPExpc3RWaWV3XG4gICAgICAgIGRhdGFTb3VyY2U9e3RoaXMuc3RhdGUuZGF0YVNvdXJjZX1cbiAgICAgICAgcmVuZGVyUm93PXt0aGlzLnJlbmRlckl0ZW19XG4gICAgICAgIHJlbmRlclNlcGFyYXRvcj17dGhpcy5yZW5kZXJTZXBhcmF0b3J9XG4gICAgICAgIGJvdW5jZXM9e2ZhbHNlfSAvPlxuICAgIDwvVmlldz5gXG5cblxuICByZW5kZXJJdGVtOiAoaXRlbSkgPT5cbiAgICBgPFRvdWNoYWJsZU9wYWNpdHkgb25QcmVzcz17KCkgPT4gdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtLmlkKX0+XG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnJvd30+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxuICAgICAgICAgIHsgaXRlbS5pY29uICYmIDxJY29uIHN0eWxlPXtbZ3N0eWxlcy5ncmF5LCBzdHlsZXMuaWNvbl19IG5hbWU9e2l0ZW0uaWNvbn0gc2l6ZT17MjB9IC8+IH1cbiAgICAgICAgICA8VGV4dCBzdHlsZT17W2dzdHlsZXMuZ3JheSwgc3R5bGVzLnRpdGxlXX0+e2l0ZW0udGl0bGUudG9VcHBlckNhc2UoKX08L1RleHQ+XG4gICAgICAgIDwvVmlldz5cbiAgICAgICAgPEljb24gc3R5bGU9e1tnc3R5bGVzLmdyYXksIHN0eWxlcy5jaGV2cm9uXX0gc2l6ZT17MjB9IG5hbWU9J2NoZXZyb24tcmlnaHQnIC8+XG4gICAgICA8L1ZpZXc+XG4gICAgPC9Ub3VjaGFibGVPcGFjaXR5PmBcblxuXG4gIHJlbmRlclNlcGFyYXRvcjogKHNlY3Rpb25JZCwgcm93SWQpIC0+XG4gICAgaWQgPSBcIiN7c2VjdGlvbklkfS0je3Jvd0lkfVwiXG4gICAgYDxWaWV3IGtleT17aWR9IHN0eWxlPXtnc3R5bGVzLnNlcGFyYXRvcn0gLz5gXG5cblxubW9kdWxlLmV4cG9ydHMgPSBTY3JlZW5cbiJdfQ==
