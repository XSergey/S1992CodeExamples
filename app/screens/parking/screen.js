var Component, PlaceList, React, Screen, Text, TextInput, View, gstyles, ref, styles,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, Text = ref.Text, TextInput = ref.TextInput;

Component = (React = require('react')).Component;

PlaceList = require('../_common/place-list');

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

Screen = (function(superClass) {
  extend(Screen, superClass);

  function Screen() {
    return Screen.__super__.constructor.apply(this, arguments);
  }

  Screen.prototype.render = function() {
    return <View style={styles.screen}>
      <Text style={[gstyles.gray, styles.description]}>
        Select store and we will advise you best parking place
      </Text>

      <TextInput
        ref={(c) => this.searchField = c}
        onChangeText={this.props.onSearch}
        value={this.props.searchText}
        autoFocus={false}
        onSubmitEditing={() => this.searchField.blur()}
        placeholder="Search"
        style={styles.search} />

      <PlaceList places={this.props.places} onSelect={this.props.onSelect} />
    </View>;
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wYXJraW5nL3NjcmVlbi5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9wYXJraW5nL3NjcmVlbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxnRkFBQTtFQUFBOzs7QUFBQSxNQUlJLE9BQUEsQ0FBUSxjQUFSLENBSkosRUFDRSxlQURGLEVBRUUsZUFGRixFQUdFOztBQUVELFlBQWEsQ0FBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLE9BQVIsQ0FBUjs7QUFDZCxTQUFBLEdBQVksT0FBQSxDQUFRLHVCQUFSOztBQUNaLE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFDVCxPQUFBLEdBQVUsT0FBQSxDQUFRLDBCQUFSOztBQUdKOzs7Ozs7O21CQUNKLE1BQUEsR0FBUSxTQUFBO1dBQ047Ozs7Ozs7Ozs7Ozs7Ozs7RUFETTs7OztHQURXOztBQW9CckIsTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJ7XG4gIFZpZXdcbiAgVGV4dFxuICBUZXh0SW5wdXRcbn0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Q29tcG9uZW50fSA9IFJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG5QbGFjZUxpc3QgPSByZXF1aXJlICcuLi9fY29tbW9uL3BsYWNlLWxpc3QnXG5zdHlsZXMgPSByZXF1aXJlICcuL3N0eWxlcydcbmdzdHlsZXMgPSByZXF1aXJlICdzcmMvc3R5bGVzJ1xuXG5cbmNsYXNzIFNjcmVlbiBleHRlbmRzIENvbXBvbmVudFxuICByZW5kZXI6IC0+XG4gICAgYDxWaWV3IHN0eWxlPXtzdHlsZXMuc2NyZWVufT5cbiAgICAgIDxUZXh0IHN0eWxlPXtbZ3N0eWxlcy5ncmF5LCBzdHlsZXMuZGVzY3JpcHRpb25dfT5cbiAgICAgICAgU2VsZWN0IHN0b3JlIGFuZCB3ZSB3aWxsIGFkdmlzZSB5b3UgYmVzdCBwYXJraW5nIHBsYWNlXG4gICAgICA8L1RleHQ+XG5cbiAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgcmVmPXsoYykgPT4gdGhpcy5zZWFyY2hGaWVsZCA9IGN9XG4gICAgICAgIG9uQ2hhbmdlVGV4dD17dGhpcy5wcm9wcy5vblNlYXJjaH1cbiAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuc2VhcmNoVGV4dH1cbiAgICAgICAgYXV0b0ZvY3VzPXtmYWxzZX1cbiAgICAgICAgb25TdWJtaXRFZGl0aW5nPXsoKSA9PiB0aGlzLnNlYXJjaEZpZWxkLmJsdXIoKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICBzdHlsZT17c3R5bGVzLnNlYXJjaH0gLz5cblxuICAgICAgPFBsYWNlTGlzdCBwbGFjZXM9e3RoaXMucHJvcHMucGxhY2VzfSBvblNlbGVjdD17dGhpcy5wcm9wcy5vblNlbGVjdH0gLz5cbiAgICA8L1ZpZXc+YFxuXG5cbm1vZHVsZS5leHBvcnRzID0gU2NyZWVuXG4iXX0=
