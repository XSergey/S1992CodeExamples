var Component, Image, ListView, PlaceList, React, Text, TouchableOpacity, View, gstyles, ref, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, ListView = ref.ListView, Text = ref.Text, Image = ref.Image, TouchableOpacity = ref.TouchableOpacity;

Component = (React = require('react')).Component;

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

PlaceList = (function(superClass) {
  extend(PlaceList, superClass);

  PlaceList.defaultProps = {
    places: []
  };

  function PlaceList(props) {
    this.select = bind(this.select, this);
    this.renderPlace = bind(this.renderPlace, this);
    var dataSource;
    PlaceList.__super__.constructor.call(this, props);
    dataSource = new ListView.DataSource({
      rowHasChanged: function(r1, r2) {
        return r1 !== r2;
      }
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(props.places)
    };
  }

  PlaceList.prototype.componentWillReceiveProps = function(nextProps) {
    var places;
    places = nextProps.places || Screen.defaultProps.places;
    return this.setState({
      dataSource: this.state.dataSource.cloneWithRows(places)
    });
  };

  PlaceList.prototype.render = function() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderPlace}
      renderSeparator={this.renderSeparator}
      enableEmptySections={true} />;
  };

  PlaceList.prototype.renderPlace = function(place) {
    return <TouchableOpacity onPress={() => this.select(place.id, place.type)}>
      <View style={styles.row}>
        <Image source={{uri: place.logo}} style={styles.logo} />
        <Text style={[gstyles.gray, styles.title]}>{place.name}</Text>
      </View>
    </TouchableOpacity>;
  };

  PlaceList.prototype.renderSeparator = function(sectionId, rowId) {
    var id;
    id = sectionId + "-" + rowId;
    return <View key={id} style={gstyles.separator} />;
  };

  PlaceList.prototype.select = function(id, type) {
    var base;
    return typeof (base = this.props).onSelect === "function" ? base.onSelect(id, type) : void 0;
  };

  return PlaceList;

})(Component);

module.exports = PlaceList;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9fY29tbW9uL3BsYWNlLWxpc3QvaW5kZXguanMiLCJzb3VyY2VzIjpbInNjcmVlbnMvX2NvbW1vbi9wbGFjZS1saXN0L2luZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLGdHQUFBO0VBQUE7Ozs7QUFBQSxNQU1JLE9BQUEsQ0FBUSxjQUFSLENBTkosRUFDRSxlQURGLEVBRUUsdUJBRkYsRUFHRSxlQUhGLEVBSUUsaUJBSkYsRUFLRTs7QUFFRCxZQUFhLENBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSLENBQVI7O0FBQ2QsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUNULE9BQUEsR0FBVSxPQUFBLENBQVEsMEJBQVI7O0FBR0o7OztFQUNKLFNBQUMsQ0FBQSxZQUFELEdBQ0U7SUFBQSxNQUFBLEVBQVEsRUFBUjs7O0VBR1csbUJBQUMsS0FBRDs7O0FBQ1gsUUFBQTtJQUFBLDJDQUFNLEtBQU47SUFDQSxVQUFBLEdBQWEsSUFBSSxRQUFRLENBQUMsVUFBYixDQUF3QjtNQUFBLGFBQUEsRUFBZSxTQUFDLEVBQUQsRUFBSyxFQUFMO2VBQVksRUFBQSxLQUFRO01BQXBCLENBQWY7S0FBeEI7SUFDYixJQUFDLENBQUEsS0FBRCxHQUFTO01BQUEsVUFBQSxFQUFZLFVBQVUsQ0FBQyxhQUFYLENBQXlCLEtBQUssQ0FBQyxNQUEvQixDQUFaOztFQUhFOztzQkFNYix5QkFBQSxHQUEyQixTQUFDLFNBQUQ7QUFDekIsUUFBQTtJQUFBLE1BQUEsR0FBUyxTQUFTLENBQUMsTUFBVixJQUFvQixNQUFNLENBQUMsWUFBWSxDQUFDO1dBQ2pELElBQUMsQ0FBQSxRQUFELENBQVU7TUFBQSxVQUFBLEVBQVksSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBbEIsQ0FBZ0MsTUFBaEMsQ0FBWjtLQUFWO0VBRnlCOztzQkFLM0IsTUFBQSxHQUFRLFNBQUE7V0FDTjs7Ozs7RUFETTs7c0JBUVIsV0FBQSxHQUFhLFNBQUMsS0FBRDtXQUNYOzs7Ozs7RUFEVzs7c0JBU2IsZUFBQSxHQUFpQixTQUFDLFNBQUQsRUFBWSxLQUFaO0FBQ2YsUUFBQTtJQUFBLEVBQUEsR0FBUSxTQUFELEdBQVcsR0FBWCxHQUFjO1dBQ3JCO0VBRmU7O3NCQUtqQixNQUFBLEdBQVEsU0FBQyxFQUFELEVBQUssSUFBTDtBQUNOLFFBQUE7b0VBQU0sQ0FBQyxTQUFVLElBQUk7RUFEZjs7OztHQXRDYzs7QUEwQ3hCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCIiwic291cmNlc0NvbnRlbnQiOlsie1xuICBWaWV3XG4gIExpc3RWaWV3XG4gIFRleHRcbiAgSW1hZ2VcbiAgVG91Y2hhYmxlT3BhY2l0eVxufSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZSdcbntDb21wb25lbnR9ID0gUmVhY3QgPSByZXF1aXJlICdyZWFjdCdcbnN0eWxlcyA9IHJlcXVpcmUgJy4vc3R5bGVzJ1xuZ3N0eWxlcyA9IHJlcXVpcmUgJ3NyYy9zdHlsZXMnXG5cblxuY2xhc3MgUGxhY2VMaXN0IGV4dGVuZHMgQ29tcG9uZW50XG4gIEBkZWZhdWx0UHJvcHM6XG4gICAgcGxhY2VzOiBbXVxuXG5cbiAgY29uc3RydWN0b3I6IChwcm9wcykgLT5cbiAgICBzdXBlcihwcm9wcylcbiAgICBkYXRhU291cmNlID0gbmV3IExpc3RWaWV3LkRhdGFTb3VyY2Uocm93SGFzQ2hhbmdlZDogKHIxLCByMikgLT4gcjEgaXNudCByMilcbiAgICBAc3RhdGUgPSBkYXRhU291cmNlOiBkYXRhU291cmNlLmNsb25lV2l0aFJvd3MocHJvcHMucGxhY2VzKVxuXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogKG5leHRQcm9wcykgLT5cbiAgICBwbGFjZXMgPSBuZXh0UHJvcHMucGxhY2VzIG9yIFNjcmVlbi5kZWZhdWx0UHJvcHMucGxhY2VzXG4gICAgQHNldFN0YXRlKGRhdGFTb3VyY2U6IEBzdGF0ZS5kYXRhU291cmNlLmNsb25lV2l0aFJvd3MocGxhY2VzKSlcblxuXG4gIHJlbmRlcjogLT5cbiAgICBgPExpc3RWaWV3XG4gICAgICBkYXRhU291cmNlPXt0aGlzLnN0YXRlLmRhdGFTb3VyY2V9XG4gICAgICByZW5kZXJSb3c9e3RoaXMucmVuZGVyUGxhY2V9XG4gICAgICByZW5kZXJTZXBhcmF0b3I9e3RoaXMucmVuZGVyU2VwYXJhdG9yfVxuICAgICAgZW5hYmxlRW1wdHlTZWN0aW9ucz17dHJ1ZX0gLz5gXG5cblxuICByZW5kZXJQbGFjZTogKHBsYWNlKSA9PlxuICAgIGA8VG91Y2hhYmxlT3BhY2l0eSBvblByZXNzPXsoKSA9PiB0aGlzLnNlbGVjdChwbGFjZS5pZCwgcGxhY2UudHlwZSl9PlxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yb3d9PlxuICAgICAgICA8SW1hZ2Ugc291cmNlPXt7dXJpOiBwbGFjZS5sb2dvfX0gc3R5bGU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgICA8VGV4dCBzdHlsZT17W2dzdHlsZXMuZ3JheSwgc3R5bGVzLnRpdGxlXX0+e3BsYWNlLm5hbWV9PC9UZXh0PlxuICAgICAgPC9WaWV3PlxuICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5gXG5cblxuICByZW5kZXJTZXBhcmF0b3I6IChzZWN0aW9uSWQsIHJvd0lkKSAtPlxuICAgIGlkID0gXCIje3NlY3Rpb25JZH0tI3tyb3dJZH1cIlxuICAgIGA8VmlldyBrZXk9e2lkfSBzdHlsZT17Z3N0eWxlcy5zZXBhcmF0b3J9IC8+YFxuXG5cbiAgc2VsZWN0OiAoaWQsIHR5cGUpID0+XG4gICAgQHByb3BzLm9uU2VsZWN0PyhpZCwgdHlwZSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYWNlTGlzdFxuIl19
