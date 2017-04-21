var Component, React, RouteActions, Screen, SearchScreen, connect,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = (React = require('react')).Component;

connect = require('react-redux').connect;

RouteActions = require('react-native-router-flux').Actions;

SearchScreen = require('../../_common/search-screen');

Screen = require('./screen');

module.exports = function(placeType) {
  var mapStateToProps;
  mapStateToProps = function(state) {
    var categories, categoriesProp;
    categories = state[placeType].categories;
    categoriesProp = categories.sortBy(function(category) {
      return category.get('priority');
    }).toList().toJS();
    return {
      categories: categoriesProp,
      places: state[placeType].places,
      searchText: state.app.get('toolbarSearchText'),
      onSelect: function(id) {
        var ref, title;
        title = (ref = categories.get(id)) != null ? ref.get('title') : void 0;
        return RouteActions.placeList({
          placeType: placeType,
          category: id,
          title: title
        });
      },
      onSearchSelect: function(id) {
        var ref, title;
        title = (ref = state[placeType].places.get(id)) != null ? ref.get('name') : void 0;
        return RouteActions.place({
          placeType: placeType,
          id: id,
          title: title
        });
      }
    };
  };
  return connect(mapStateToProps)((function(superClass) {
    extend(_Class, superClass);

    function _Class() {
      this._searchSelect = bind(this._searchSelect, this);
      this._search = bind(this._search, this);
      return _Class.__super__.constructor.apply(this, arguments);
    }

    _Class.hasSearch = true;

    _Class.prototype.render = function() {
      return <SearchScreen search={this._search} onSelect={this._searchSelect}>
        <Screen {...this.props} />
      </SearchScreen>;
    };

    _Class.prototype._search = function(text) {
      var _filterPlace;
      if (!text) {
        return [];
      }
      text = text.toLowerCase();
      _filterPlace = function(place) {
        var ref;
        return place.get('name').toLowerCase().includes(text) || ((ref = place.get('categories')) != null ? ref.some(function(category) {
          var ref1;
          return category.toLowerCase().includes(text) || ((ref1 = place.get('tags')) != null ? ref1.some(function(tag) {
            var ref2, ref3;
            return tag.toLowerCase().includes(text) || ((ref2 = place.get('phone')) != null ? ref2.includes(text) : void 0) || ((ref3 = place.get('site')) != null ? ref3.includes(text) : void 0);
          }) : void 0);
        }) : void 0);
      };
      return this.props.places.filter(_filterPlace).map(function(place, id) {
        return {
          id: id,
          title: place.get('name'),
          image: place.get('logo')
        };
      }).toList().toJS();
    };

    _Class.prototype._searchSelect = function(id) {
      return this.props.onSearchSelect(id);
    };

    return _Class;

  })(Component));
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wbGFjZS9jYXRlZ29yaWVzL2luZGV4LmpzIiwic291cmNlcyI6WyJzY3JlZW5zL3BsYWNlL2NhdGVnb3JpZXMvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsNkRBQUE7RUFBQTs7OztBQUFDLFlBQWEsQ0FBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLE9BQVIsQ0FBUjs7QUFDYixVQUFXLE9BQUEsQ0FBUSxhQUFSOztBQUNGLGVBQWdCLE9BQUEsQ0FBUSwwQkFBUixFQUF6Qjs7QUFDRCxZQUFBLEdBQWUsT0FBQSxDQUFRLDZCQUFSOztBQUNmLE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFHVCxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFDLFNBQUQ7QUFFZixNQUFBO0VBQUEsZUFBQSxHQUFrQixTQUFDLEtBQUQ7QUFDaEIsUUFBQTtJQUFBLFVBQUEsR0FBYSxLQUFNLENBQUEsU0FBQSxDQUFVLENBQUM7SUFFOUIsY0FBQSxHQUFpQixVQUNmLENBQUMsTUFEYyxDQUNQLFNBQUMsUUFBRDthQUFjLFFBQVEsQ0FBQyxHQUFULENBQWEsVUFBYjtJQUFkLENBRE8sQ0FFZixDQUFDLE1BRmMsQ0FBQSxDQUdmLENBQUMsSUFIYyxDQUFBO1dBS2pCO01BQUEsVUFBQSxFQUFZLGNBQVo7TUFDQSxNQUFBLEVBQVEsS0FBTSxDQUFBLFNBQUEsQ0FBVSxDQUFDLE1BRHpCO01BRUEsVUFBQSxFQUFZLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBVixDQUFjLG1CQUFkLENBRlo7TUFJQSxRQUFBLEVBQVUsU0FBQyxFQUFEO0FBQ1IsWUFBQTtRQUFBLEtBQUEsMkNBQTBCLENBQUUsR0FBcEIsQ0FBd0IsT0FBeEI7ZUFDUixZQUFZLENBQUMsU0FBYixDQUF1QjtVQUFBLFNBQUEsRUFBVyxTQUFYO1VBQXNCLFFBQUEsRUFBVSxFQUFoQztVQUFvQyxLQUFBLEVBQU8sS0FBM0M7U0FBdkI7TUFGUSxDQUpWO01BUUEsY0FBQSxFQUFnQixTQUFDLEVBQUQ7QUFDZCxZQUFBO1FBQUEsS0FBQSx3REFBdUMsQ0FBRSxHQUFqQyxDQUFxQyxNQUFyQztlQUNSLFlBQVksQ0FBQyxLQUFiLENBQW1CO1VBQUEsU0FBQSxFQUFXLFNBQVg7VUFBc0IsRUFBQSxFQUFJLEVBQTFCO1VBQThCLEtBQUEsRUFBTyxLQUFyQztTQUFuQjtNQUZjLENBUmhCOztFQVJnQjtTQXFCbEIsT0FBQSxDQUFRLGVBQVIsQ0FBQTs7Ozs7Ozs7O0lBQ0UsTUFBQyxDQUFBLFNBQUQsR0FBWTs7cUJBR1osTUFBQSxHQUFRLFNBQUE7YUFDTjs7O0lBRE07O3FCQU1SLE9BQUEsR0FBUyxTQUFDLElBQUQ7QUFDUCxVQUFBO01BQUEsSUFBRyxDQUFJLElBQVA7QUFDRSxlQUFPLEdBRFQ7O01BR0EsSUFBQSxHQUFPLElBQUksQ0FBQyxXQUFMLENBQUE7TUFFUCxZQUFBLEdBQWUsU0FBQyxLQUFEO0FBQ2IsWUFBQTtlQUFBLEtBQUssQ0FBQyxHQUFOLENBQVUsTUFBVixDQUFpQixDQUFDLFdBQWxCLENBQUEsQ0FBK0IsQ0FBQyxRQUFoQyxDQUF5QyxJQUF6QyxDQUFBLGtEQUN1QixDQUFFLElBQXpCLENBQThCLFNBQUMsUUFBRDtBQUFjLGNBQUE7aUJBQUEsUUFBUSxDQUFDLFdBQVQsQ0FBQSxDQUFzQixDQUFDLFFBQXZCLENBQWdDLElBQWhDLENBQUEsOENBQzNCLENBQUUsSUFBbkIsQ0FBd0IsU0FBQyxHQUFEO0FBQVMsZ0JBQUE7bUJBQUEsR0FBRyxDQUFDLFdBQUosQ0FBQSxDQUFpQixDQUFDLFFBQWxCLENBQTJCLElBQTNCLENBQUEsK0NBQ2YsQ0FBRSxRQUFwQixDQUE2QixJQUE3QixXQURpQyw4Q0FFaEIsQ0FBRSxRQUFuQixDQUE0QixJQUE1QjtVQUZ3QixDQUF4QjtRQUQ4QixDQUE5QjtNQUZhO2FBUWYsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUNMLENBQUMsTUFESCxDQUNVLFlBRFYsQ0FFRSxDQUFDLEdBRkgsQ0FFTyxTQUFDLEtBQUQsRUFBUSxFQUFSO2VBQ0g7VUFBQSxFQUFBLEVBQUksRUFBSjtVQUNBLEtBQUEsRUFBTyxLQUFLLENBQUMsR0FBTixDQUFVLE1BQVYsQ0FEUDtVQUVBLEtBQUEsRUFBTyxLQUFLLENBQUMsR0FBTixDQUFVLE1BQVYsQ0FGUDs7TUFERyxDQUZQLENBTUUsQ0FBQyxNQU5ILENBQUEsQ0FPRSxDQUFDLElBUEgsQ0FBQTtJQWRPOztxQkF3QlQsYUFBQSxHQUFlLFNBQUMsRUFBRDthQUNiLElBQUMsQ0FBQSxLQUFLLENBQUMsY0FBUCxDQUFzQixFQUF0QjtJQURhOzs7O0tBbENzQixVQUF2QztBQXZCZSIsInNvdXJjZXNDb250ZW50IjpbIntDb21wb25lbnR9ID0gUmVhY3QgPSByZXF1aXJlICdyZWFjdCdcbntjb25uZWN0fSA9IHJlcXVpcmUgJ3JlYWN0LXJlZHV4J1xue0FjdGlvbnM6IFJvdXRlQWN0aW9uc30gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUtcm91dGVyLWZsdXgnXG5TZWFyY2hTY3JlZW4gPSByZXF1aXJlICcuLi8uLi9fY29tbW9uL3NlYXJjaC1zY3JlZW4nXG5TY3JlZW4gPSByZXF1aXJlICcuL3NjcmVlbidcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChwbGFjZVR5cGUpIC0+XG5cbiAgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSAtPlxuICAgIGNhdGVnb3JpZXMgPSBzdGF0ZVtwbGFjZVR5cGVdLmNhdGVnb3JpZXNcblxuICAgIGNhdGVnb3JpZXNQcm9wID0gY2F0ZWdvcmllc1xuICAgICAgLnNvcnRCeSAoY2F0ZWdvcnkpIC0+IGNhdGVnb3J5LmdldCgncHJpb3JpdHknKVxuICAgICAgLnRvTGlzdCgpXG4gICAgICAudG9KUygpXG5cbiAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzUHJvcFxuICAgIHBsYWNlczogc3RhdGVbcGxhY2VUeXBlXS5wbGFjZXNcbiAgICBzZWFyY2hUZXh0OiBzdGF0ZS5hcHAuZ2V0KCd0b29sYmFyU2VhcmNoVGV4dCcpXG5cbiAgICBvblNlbGVjdDogKGlkKSAtPlxuICAgICAgdGl0bGUgPSBjYXRlZ29yaWVzLmdldChpZCk/LmdldCgndGl0bGUnKVxuICAgICAgUm91dGVBY3Rpb25zLnBsYWNlTGlzdChwbGFjZVR5cGU6IHBsYWNlVHlwZSwgY2F0ZWdvcnk6IGlkLCB0aXRsZTogdGl0bGUpXG5cbiAgICBvblNlYXJjaFNlbGVjdDogKGlkKSAtPlxuICAgICAgdGl0bGUgPSBzdGF0ZVtwbGFjZVR5cGVdLnBsYWNlcy5nZXQoaWQpPy5nZXQoJ25hbWUnKVxuICAgICAgUm91dGVBY3Rpb25zLnBsYWNlKHBsYWNlVHlwZTogcGxhY2VUeXBlLCBpZDogaWQsIHRpdGxlOiB0aXRsZSlcblxuXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSBjbGFzcyBleHRlbmRzIENvbXBvbmVudFxuICAgIEBoYXNTZWFyY2g6IHllc1xuXG5cbiAgICByZW5kZXI6IC0+XG4gICAgICBgPFNlYXJjaFNjcmVlbiBzZWFyY2g9e3RoaXMuX3NlYXJjaH0gb25TZWxlY3Q9e3RoaXMuX3NlYXJjaFNlbGVjdH0+XG4gICAgICAgIDxTY3JlZW4gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICA8L1NlYXJjaFNjcmVlbj5gXG5cblxuICAgIF9zZWFyY2g6ICh0ZXh0KSA9PlxuICAgICAgaWYgbm90IHRleHRcbiAgICAgICAgcmV0dXJuIFtdXG5cbiAgICAgIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKClcblxuICAgICAgX2ZpbHRlclBsYWNlID0gKHBsYWNlKSAtPlxuICAgICAgICBwbGFjZS5nZXQoJ25hbWUnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRleHQpIHx8XG4gICAgICAgIHBsYWNlLmdldCgnY2F0ZWdvcmllcycpPy5zb21lIChjYXRlZ29yeSkgLT4gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0KSB8fFxuICAgICAgICBwbGFjZS5nZXQoJ3RhZ3MnKT8uc29tZSAodGFnKSAtPiB0YWcudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0KSB8fFxuICAgICAgICBwbGFjZS5nZXQoJ3Bob25lJyk/LmluY2x1ZGVzKHRleHQpIHx8XG4gICAgICAgIHBsYWNlLmdldCgnc2l0ZScpPy5pbmNsdWRlcyh0ZXh0KVxuICAgICAgICAjIFRPRE86IGRlc2NyaXB0aW9uP1xuXG4gICAgICBAcHJvcHMucGxhY2VzXG4gICAgICAgIC5maWx0ZXIoX2ZpbHRlclBsYWNlKVxuICAgICAgICAubWFwIChwbGFjZSwgaWQpIC0+XG4gICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgdGl0bGU6IHBsYWNlLmdldCgnbmFtZScpXG4gICAgICAgICAgaW1hZ2U6IHBsYWNlLmdldCgnbG9nbycpXG4gICAgICAgIC50b0xpc3QoKVxuICAgICAgICAudG9KUygpXG5cblxuICAgIF9zZWFyY2hTZWxlY3Q6IChpZCkgPT5cbiAgICAgIEBwcm9wcy5vblNlYXJjaFNlbGVjdChpZClcbiJdfQ==
