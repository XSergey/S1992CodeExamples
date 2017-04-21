var Alert, Component, Parking, React, Screen, connect, linking, mapStateToProps,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = (React = require('react')).Component;

Alert = require('react-native').Alert;

connect = require('react-redux').connect;

linking = require('bawadi-client/app/libs/linking');

Screen = require('./screen');

Parking = (function(superClass) {
  extend(Parking, superClass);

  function Parking() {
    this.setSearchText = bind(this.setSearchText, this);
    return Parking.__super__.constructor.apply(this, arguments);
  }

  Parking.prototype.state = {
    searchText: ""
  };

  Parking.prototype.render = function() {
    return <Screen
      places={this.getPlaces()}
      searchText={this.state.setSearchText}
      onSelect={this.props.onShowMap}
      onSearch={this.setSearchText} />;
  };

  Parking.prototype.getPlaces = function() {
    var dining, nameContains, search, searchText, setType, stores;
    nameContains = function(text) {
      return function(place) {
        return place.get('name').toLowerCase().includes(text);
      };
    };
    setType = function(type) {
      return function(place) {
        return place.set('type', type);
      };
    };
    search = function(places, type, text) {
      return places.filter(nameContains(text)).map(setType(type)).toList();
    };
    searchText = this.state.searchText.toLowerCase();
    stores = search(this.props.stores, 'store', searchText);
    dining = search(this.props.dining, 'dining', searchText);
    return stores.concat(dining).toJS();
  };

  Parking.prototype.setSearchText = function(text) {
    return this.setState({
      searchText: text
    });
  };

  return Parking;

})(Component);

mapStateToProps = function(state) {
  return {
    stores: state.store.places,
    dining: state.dining.places,
    onShowMap: function(id, type) {
      var location, parking, parkingIds, parkings, places, route;
      switch (type) {
        case 'store':
          places = state.store.places;
          break;
        case 'dining':
          places = state.dining.places;
      }
      parkingIds = places.get(id).get('parking');
      if (!parkingIds || parkingIds.length === 0) {
        return Alert.alert("No parking", "Parking was not configured for this place");
      }
      parkings = state.parking.filter(function(_, key) {
        return parkingIds.includes(key);
      }).toList().toJS();
      parking = parkings[0];
      location = {
        label: parking.title,
        lat: parking.latitude,
        long: parking.longitude
      };
      return linking.openMap(location, route = true);
    }
  };
};

module.exports = connect(mapStateToProps)(Parking);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wYXJraW5nL2luZGV4LmpzIiwic291cmNlcyI6WyJzY3JlZW5zL3BhcmtpbmcvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsMkVBQUE7RUFBQTs7OztBQUFDLFlBQWEsQ0FBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLE9BQVIsQ0FBUjs7QUFDYixRQUFTLE9BQUEsQ0FBUSxjQUFSOztBQUNULFVBQVcsT0FBQSxDQUFRLGFBQVI7O0FBQ1osT0FBQSxHQUFVLE9BQUEsQ0FBUSxnQ0FBUjs7QUFDVixNQUFBLEdBQVMsT0FBQSxDQUFRLFVBQVI7O0FBR0g7Ozs7Ozs7O29CQUNKLEtBQUEsR0FDRTtJQUFBLFVBQUEsRUFBWSxFQUFaOzs7b0JBR0YsTUFBQSxHQUFRLFNBQUE7V0FDTjs7Ozs7RUFETTs7b0JBUVIsU0FBQSxHQUFXLFNBQUE7QUFDVCxRQUFBO0lBQUEsWUFBQSxHQUFlLFNBQUMsSUFBRDthQUFVLFNBQUMsS0FBRDtlQUN2QixLQUFLLENBQUMsR0FBTixDQUFVLE1BQVYsQ0FBaUIsQ0FBQyxXQUFsQixDQUFBLENBQStCLENBQUMsUUFBaEMsQ0FBeUMsSUFBekM7TUFEdUI7SUFBVjtJQUdmLE9BQUEsR0FBVSxTQUFDLElBQUQ7YUFBVSxTQUFDLEtBQUQ7ZUFDbEIsS0FBSyxDQUFDLEdBQU4sQ0FBVSxNQUFWLEVBQWtCLElBQWxCO01BRGtCO0lBQVY7SUFHVixNQUFBLEdBQVMsU0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWY7YUFDUCxNQUNFLENBQUMsTUFESCxDQUNVLFlBQUEsQ0FBYSxJQUFiLENBRFYsQ0FFRSxDQUFDLEdBRkgsQ0FFTyxPQUFBLENBQVEsSUFBUixDQUZQLENBR0UsQ0FBQyxNQUhILENBQUE7SUFETztJQU1ULFVBQUEsR0FBYSxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFsQixDQUFBO0lBQ2IsTUFBQSxHQUFTLE1BQUEsQ0FBTyxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQWQsRUFBc0IsT0FBdEIsRUFBK0IsVUFBL0I7SUFDVCxNQUFBLEdBQVMsTUFBQSxDQUFPLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFBZCxFQUFzQixRQUF0QixFQUFnQyxVQUFoQztXQUVULE1BQU0sQ0FBQyxNQUFQLENBQWMsTUFBZCxDQUFxQixDQUFDLElBQXRCLENBQUE7RUFqQlM7O29CQW9CWCxhQUFBLEdBQWUsU0FBQyxJQUFEO1dBQ2IsSUFBQyxDQUFBLFFBQUQsQ0FBVTtNQUFBLFVBQUEsRUFBWSxJQUFaO0tBQVY7RUFEYTs7OztHQWpDSzs7QUFxQ3RCLGVBQUEsR0FBa0IsU0FBQyxLQUFEO1NBQ2hCO0lBQUEsTUFBQSxFQUFRLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBcEI7SUFDQSxNQUFBLEVBQVEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQURyQjtJQUVBLFNBQUEsRUFBVyxTQUFDLEVBQUQsRUFBSyxJQUFMO0FBQ1QsVUFBQTtBQUFBLGNBQU8sSUFBUDtBQUFBLGFBQ08sT0FEUDtVQUVJLE1BQUEsR0FBUyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBRGxCO0FBRFAsYUFHTyxRQUhQO1VBSUksTUFBQSxHQUFTLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFKMUI7TUFNQSxVQUFBLEdBQWEsTUFBTSxDQUFDLEdBQVAsQ0FBVyxFQUFYLENBQWMsQ0FBQyxHQUFmLENBQW1CLFNBQW5CO01BQ2IsSUFBRyxDQUFJLFVBQUosSUFBa0IsVUFBVSxDQUFDLE1BQVgsS0FBcUIsQ0FBMUM7QUFDRSxlQUFPLEtBQUssQ0FBQyxLQUFOLENBQVksWUFBWixFQUEwQiwyQ0FBMUIsRUFEVDs7TUFHQSxRQUFBLEdBQVcsS0FBSyxDQUFDLE9BQ2YsQ0FBQyxNQURRLENBQ0QsU0FBQyxDQUFELEVBQUksR0FBSjtlQUFZLFVBQVUsQ0FBQyxRQUFYLENBQW9CLEdBQXBCO01BQVosQ0FEQyxDQUVULENBQUMsTUFGUSxDQUFBLENBRUEsQ0FBQyxJQUZELENBQUE7TUFJWCxPQUFBLEdBQVUsUUFBUyxDQUFBLENBQUE7TUFDbkIsUUFBQSxHQUNFO1FBQUEsS0FBQSxFQUFPLE9BQU8sQ0FBQyxLQUFmO1FBQ0EsR0FBQSxFQUFLLE9BQU8sQ0FBQyxRQURiO1FBRUEsSUFBQSxFQUFNLE9BQU8sQ0FBQyxTQUZkOzthQUlGLE9BQU8sQ0FBQyxPQUFSLENBQWdCLFFBQWhCLEVBQTBCLEtBQUEsR0FBTSxJQUFoQztJQXJCUyxDQUZYOztBQURnQjs7QUEyQmxCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLE9BQUEsQ0FBUSxlQUFSLENBQUEsQ0FBeUIsT0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJ7Q29tcG9uZW50fSA9IFJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG57QWxlcnR9ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlJ1xue2Nvbm5lY3R9ID0gcmVxdWlyZSAncmVhY3QtcmVkdXgnXG5saW5raW5nID0gcmVxdWlyZSAnc3JjL2xpYnMvbGlua2luZydcblNjcmVlbiA9IHJlcXVpcmUgJy4vc2NyZWVuJ1xuXG5cbmNsYXNzIFBhcmtpbmcgZXh0ZW5kcyBDb21wb25lbnRcbiAgc3RhdGU6XG4gICAgc2VhcmNoVGV4dDogXCJcIlxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIGA8U2NyZWVuXG4gICAgICBwbGFjZXM9e3RoaXMuZ2V0UGxhY2VzKCl9XG4gICAgICBzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNldFNlYXJjaFRleHR9XG4gICAgICBvblNlbGVjdD17dGhpcy5wcm9wcy5vblNob3dNYXB9XG4gICAgICBvblNlYXJjaD17dGhpcy5zZXRTZWFyY2hUZXh0fSAvPmBcblxuXG4gIGdldFBsYWNlczogLT5cbiAgICBuYW1lQ29udGFpbnMgPSAodGV4dCkgLT4gKHBsYWNlKSAtPlxuICAgICAgcGxhY2UuZ2V0KCduYW1lJykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0KVxuXG4gICAgc2V0VHlwZSA9ICh0eXBlKSAtPiAocGxhY2UpIC0+XG4gICAgICBwbGFjZS5zZXQoJ3R5cGUnLCB0eXBlKVxuXG4gICAgc2VhcmNoID0gKHBsYWNlcywgdHlwZSwgdGV4dCkgLT5cbiAgICAgIHBsYWNlc1xuICAgICAgICAuZmlsdGVyKG5hbWVDb250YWlucyh0ZXh0KSlcbiAgICAgICAgLm1hcChzZXRUeXBlKHR5cGUpKVxuICAgICAgICAudG9MaXN0KClcblxuICAgIHNlYXJjaFRleHQgPSBAc3RhdGUuc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpXG4gICAgc3RvcmVzID0gc2VhcmNoKEBwcm9wcy5zdG9yZXMsICdzdG9yZScsIHNlYXJjaFRleHQpXG4gICAgZGluaW5nID0gc2VhcmNoKEBwcm9wcy5kaW5pbmcsICdkaW5pbmcnLCBzZWFyY2hUZXh0KVxuICAgIFxuICAgIHN0b3Jlcy5jb25jYXQoZGluaW5nKS50b0pTKClcblxuXG4gIHNldFNlYXJjaFRleHQ6ICh0ZXh0KSA9PlxuICAgIEBzZXRTdGF0ZShzZWFyY2hUZXh0OiB0ZXh0KVxuXG5cbm1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgLT5cbiAgc3RvcmVzOiBzdGF0ZS5zdG9yZS5wbGFjZXNcbiAgZGluaW5nOiBzdGF0ZS5kaW5pbmcucGxhY2VzXG4gIG9uU2hvd01hcDogKGlkLCB0eXBlKSAtPlxuICAgIHN3aXRjaCB0eXBlXG4gICAgICB3aGVuICdzdG9yZSdcbiAgICAgICAgcGxhY2VzID0gc3RhdGUuc3RvcmUucGxhY2VzXG4gICAgICB3aGVuICdkaW5pbmcnXG4gICAgICAgIHBsYWNlcyA9IHN0YXRlLmRpbmluZy5wbGFjZXNcblxuICAgIHBhcmtpbmdJZHMgPSBwbGFjZXMuZ2V0KGlkKS5nZXQoJ3BhcmtpbmcnKVxuICAgIGlmIG5vdCBwYXJraW5nSWRzIG9yIHBhcmtpbmdJZHMubGVuZ3RoIGlzIDBcbiAgICAgIHJldHVybiBBbGVydC5hbGVydChcIk5vIHBhcmtpbmdcIiwgXCJQYXJraW5nIHdhcyBub3QgY29uZmlndXJlZCBmb3IgdGhpcyBwbGFjZVwiKVxuXG4gICAgcGFya2luZ3MgPSBzdGF0ZS5wYXJraW5nXG4gICAgICAuZmlsdGVyIChfLCBrZXkpIC0+IHBhcmtpbmdJZHMuaW5jbHVkZXMoa2V5KVxuICAgICAgLnRvTGlzdCgpLnRvSlMoKVxuXG4gICAgcGFya2luZyA9IHBhcmtpbmdzWzBdXG4gICAgbG9jYXRpb24gPVxuICAgICAgbGFiZWw6IHBhcmtpbmcudGl0bGVcbiAgICAgIGxhdDogcGFya2luZy5sYXRpdHVkZVxuICAgICAgbG9uZzogcGFya2luZy5sb25naXR1ZGVcblxuICAgIGxpbmtpbmcub3Blbk1hcChsb2NhdGlvbiwgcm91dGU9eWVzKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBhcmtpbmcpXG4iXX0=
