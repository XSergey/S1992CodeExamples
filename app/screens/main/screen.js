var Banners, Component, HotLink, HotLinkScan, HotLinks, Image, React, Screen, SearchScreen, View, ref, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, Image = ref.Image;

Component = (React = require('react')).Component;

SearchScreen = require('../_common/search-screen');

Banners = require('./_common/banners');

HotLink = require('./_common/hotlink');

HotLinkScan = require('./_common/hotlinkscan');

styles = require('./styles');

HotLinks = (function(superClass) {
  extend(HotLinks, superClass);

  function HotLinks() {
    this.click = bind(this.click, this);
    return HotLinks.__super__.constructor.apply(this, arguments);
  }

  HotLinks.prototype.render = function() {
    return <View style={styles.hotLinks}>
      <View style={styles.links}>
        <HotLink id='stores' title="Stores" icon='store' onClick={this.click} />
        <HotLink id='dining' title="Dining" icon='local-dining' onClick={this.click} />
        <HotLink id='offers' title="Offers" icon='local-offer' onClick={this.click} />
        <HotLinkScan id='scanReceipt' title="Scan&nbsp;receipt" icon='photo-camera' onClick={this.click} />
      </View>
      <View style={styles.orangeLine} />
    </View>;
  };

  HotLinks.prototype.click = function(id) {
    var base;
    return typeof (base = this.props).onLinkClick === "function" ? base.onLinkClick(id) : void 0;
  };

  return HotLinks;

})(Component);

Screen = (function(superClass) {
  extend(Screen, superClass);

  function Screen() {
    this.searchSelect = bind(this.searchSelect, this);
    this.search = bind(this.search, this);
    this.bannerSelect = bind(this.bannerSelect, this);
    this.mapClick = bind(this.mapClick, this);
    this.linkClick = bind(this.linkClick, this);
    return Screen.__super__.constructor.apply(this, arguments);
  }

  Screen.hasSearch = true;

  Screen.prototype.render = function() {
    return <SearchScreen search={this.search} onSelect={this.searchSelect}>
      <View style={styles.back}>
        <Banners items={this.props.banners} onSelect={this.bannerSelect} />
        <View style={styles.imageContainer}>
          <Image source={require('bawadi-client/app/res/images/hearth.png')} />
        </View>
        <HotLinks onLinkClick={this.linkClick}/>
      </View>
    </SearchScreen>;
  };

  Screen.prototype.linkClick = function(id) {
    var base;
    return typeof (base = this.props).onLinkClick === "function" ? base.onLinkClick(id) : void 0;
  };

  Screen.prototype.mapClick = function() {
    return this._linkClick('map');
  };

  Screen.prototype.bannerSelect = function(id) {
    var base;
    return typeof (base = this.props).onBannerSelect === "function" ? base.onBannerSelect(id) : void 0;
  };

  Screen.prototype.search = function(text) {
    var dining, filterPlace, placeToSearchItem, search, stores;
    if (!text) {
      return [];
    }
    text = text.toLowerCase();
    filterPlace = function(place) {
      var ref1;
      return place.get('name').toLowerCase().includes(text) || ((ref1 = place.get('categories')) != null ? ref1.some(function(category) {
        var ref2;
        return category.toLowerCase().includes(text) || ((ref2 = place.get('tags')) != null ? ref2.some(function(tag) {
          var ref3, ref4;
          return tag.toLowerCase().includes(text) || ((ref3 = place.get('phone')) != null ? ref3.includes(text) : void 0) || ((ref4 = place.get('site')) != null ? ref4.includes(text) : void 0);
        }) : void 0);
      }) : void 0);
    };
    placeToSearchItem = function(type) {
      return function(place, id) {
        return {
          id: {
            id: id,
            type: type
          },
          title: place.get('name'),
          image: place.get('logo')
        };
      };
    };
    search = function(places, type) {
      return places.filter(filterPlace).map(placeToSearchItem(type)).toList();
    };
    stores = search(this.props.storePlaces, 'store');
    dining = search(this.props.diningPlaces, 'dining');
    return stores.concat(dining).toJS();
  };

  Screen.prototype.searchSelect = function(arg) {
    var id, type;
    id = arg.id, type = arg.type;
    return this.props.onSearchSelect(id, type);
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9tYWluL3NjcmVlbi5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9tYWluL3NjcmVlbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSx5R0FBQTtFQUFBOzs7O0FBQUEsTUFBZ0IsT0FBQSxDQUFRLGNBQVIsQ0FBaEIsRUFBQyxlQUFELEVBQU87O0FBQ04sWUFBYSxDQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUixDQUFSOztBQUNkLFlBQUEsR0FBZSxPQUFBLENBQVEsMEJBQVI7O0FBQ2YsT0FBQSxHQUFVLE9BQUEsQ0FBUSxtQkFBUjs7QUFDVixPQUFBLEdBQVUsT0FBQSxDQUFRLG1CQUFSOztBQUNWLFdBQUEsR0FBYyxPQUFBLENBQVEsdUJBQVI7O0FBQ2QsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUdIOzs7Ozs7OztxQkFFSixNQUFBLEdBQVEsU0FBQTtXQUNOOzs7Ozs7Ozs7RUFETTs7cUJBWVIsS0FBQSxHQUFPLFNBQUMsRUFBRDtBQUNMLFFBQUE7dUVBQU0sQ0FBQyxZQUFhO0VBRGY7Ozs7R0FkYzs7QUFrQmpCOzs7Ozs7Ozs7Ozs7RUFDSixNQUFDLENBQUEsU0FBRCxHQUFZOzttQkFHWixNQUFBLEdBQVEsU0FBQTtXQUNOOzs7Ozs7Ozs7RUFETTs7bUJBWVIsU0FBQSxHQUFXLFNBQUMsRUFBRDtBQUNULFFBQUE7dUVBQU0sQ0FBQyxZQUFhO0VBRFg7O21CQUlYLFFBQUEsR0FBVSxTQUFBO1dBQ1IsSUFBQyxDQUFBLFVBQUQsQ0FBWSxLQUFaO0VBRFE7O21CQUlWLFlBQUEsR0FBYyxTQUFDLEVBQUQ7QUFDWixRQUFBOzBFQUFNLENBQUMsZUFBZ0I7RUFEWDs7bUJBS2QsTUFBQSxHQUFRLFNBQUMsSUFBRDtBQUNOLFFBQUE7SUFBQSxJQUFHLENBQUksSUFBUDtBQUNFLGFBQU8sR0FEVDs7SUFHQSxJQUFBLEdBQU8sSUFBSSxDQUFDLFdBQUwsQ0FBQTtJQUVQLFdBQUEsR0FBYyxTQUFDLEtBQUQ7QUFDWixVQUFBO2FBQUEsS0FBSyxDQUFDLEdBQU4sQ0FBVSxNQUFWLENBQWlCLENBQUMsV0FBbEIsQ0FBQSxDQUErQixDQUFDLFFBQWhDLENBQXlDLElBQXpDLENBQUEsb0RBQ3VCLENBQUUsSUFBekIsQ0FBOEIsU0FBQyxRQUFEO0FBQWMsWUFBQTtlQUFBLFFBQVEsQ0FBQyxXQUFULENBQUEsQ0FBc0IsQ0FBQyxRQUF2QixDQUFnQyxJQUFoQyxDQUFBLDhDQUMzQixDQUFFLElBQW5CLENBQXdCLFNBQUMsR0FBRDtBQUFTLGNBQUE7aUJBQUEsR0FBRyxDQUFDLFdBQUosQ0FBQSxDQUFpQixDQUFDLFFBQWxCLENBQTJCLElBQTNCLENBQUEsK0NBQ2YsQ0FBRSxRQUFwQixDQUE2QixJQUE3QixXQURpQyw4Q0FFaEIsQ0FBRSxRQUFuQixDQUE0QixJQUE1QjtRQUZ3QixDQUF4QjtNQUQ4QixDQUE5QjtJQUZZO0lBUWQsaUJBQUEsR0FBb0IsU0FBQyxJQUFEO2FBQ2xCLFNBQUMsS0FBRCxFQUFRLEVBQVI7ZUFDRTtVQUFBLEVBQUEsRUFBSTtZQUFBLEVBQUEsRUFBSSxFQUFKO1lBQVEsSUFBQSxFQUFNLElBQWQ7V0FBSjtVQUNBLEtBQUEsRUFBTyxLQUFLLENBQUMsR0FBTixDQUFVLE1BQVYsQ0FEUDtVQUVBLEtBQUEsRUFBTyxLQUFLLENBQUMsR0FBTixDQUFVLE1BQVYsQ0FGUDs7TUFERjtJQURrQjtJQU1wQixNQUFBLEdBQVMsU0FBQyxNQUFELEVBQVMsSUFBVDthQUNQLE1BQ0UsQ0FBQyxNQURILENBQ1UsV0FEVixDQUVFLENBQUMsR0FGSCxDQUVPLGlCQUFBLENBQWtCLElBQWxCLENBRlAsQ0FHRSxDQUFDLE1BSEgsQ0FBQTtJQURPO0lBTVQsTUFBQSxHQUFTLE1BQUEsQ0FBTyxJQUFDLENBQUEsS0FBSyxDQUFDLFdBQWQsRUFBMkIsT0FBM0I7SUFDVCxNQUFBLEdBQVMsTUFBQSxDQUFPLElBQUMsQ0FBQSxLQUFLLENBQUMsWUFBZCxFQUE0QixRQUE1QjtXQUVULE1BQU0sQ0FBQyxNQUFQLENBQWMsTUFBZCxDQUFxQixDQUFDLElBQXRCLENBQUE7RUE3Qk07O21CQWdDUixZQUFBLEdBQWMsU0FBQyxHQUFEO0FBQ1osUUFBQTtJQURjLGFBQUk7V0FDbEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxjQUFQLENBQXNCLEVBQXRCLEVBQTBCLElBQTFCO0VBRFk7Ozs7R0E3REs7O0FBaUVyQixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIntWaWV3LCBJbWFnZX0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Q29tcG9uZW50fSA9IFJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG5TZWFyY2hTY3JlZW4gPSByZXF1aXJlICcuLi9fY29tbW9uL3NlYXJjaC1zY3JlZW4nXG5CYW5uZXJzID0gcmVxdWlyZSAnLi9fY29tbW9uL2Jhbm5lcnMnXG5Ib3RMaW5rID0gcmVxdWlyZSAnLi9fY29tbW9uL2hvdGxpbmsnXG5Ib3RMaW5rU2NhbiA9IHJlcXVpcmUgJy4vX2NvbW1vbi9ob3RsaW5rc2NhbidcbnN0eWxlcyA9IHJlcXVpcmUgJy4vc3R5bGVzJ1xuXG5cbmNsYXNzIEhvdExpbmtzIGV4dGVuZHMgQ29tcG9uZW50XG4gICMgVE9ETzogdG8gbWFwKClcbiAgcmVuZGVyOiAtPlxuICAgIGA8VmlldyBzdHlsZT17c3R5bGVzLmhvdExpbmtzfT5cbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMubGlua3N9PlxuICAgICAgICA8SG90TGluayBpZD0nc3RvcmVzJyB0aXRsZT1cIlN0b3Jlc1wiIGljb249J3N0b3JlJyBvbkNsaWNrPXt0aGlzLmNsaWNrfSAvPlxuICAgICAgICA8SG90TGluayBpZD0nZGluaW5nJyB0aXRsZT1cIkRpbmluZ1wiIGljb249J2xvY2FsLWRpbmluZycgb25DbGljaz17dGhpcy5jbGlja30gLz5cbiAgICAgICAgPEhvdExpbmsgaWQ9J29mZmVycycgdGl0bGU9XCJPZmZlcnNcIiBpY29uPSdsb2NhbC1vZmZlcicgb25DbGljaz17dGhpcy5jbGlja30gLz5cbiAgICAgICAgPEhvdExpbmtTY2FuIGlkPSdzY2FuUmVjZWlwdCcgdGl0bGU9XCJTY2FuJm5ic3A7cmVjZWlwdFwiIGljb249J3Bob3RvLWNhbWVyYScgb25DbGljaz17dGhpcy5jbGlja30gLz5cbiAgICAgIDwvVmlldz5cbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMub3JhbmdlTGluZX0gLz5cbiAgICA8L1ZpZXc+YFxuXG5cbiAgY2xpY2s6IChpZCkgPT5cbiAgICBAcHJvcHMub25MaW5rQ2xpY2s/KGlkKVxuICAgIFxuICAgIFxuY2xhc3MgU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50XG4gIEBoYXNTZWFyY2g6IHllc1xuXG5cbiAgcmVuZGVyOiAtPlxuICAgIGA8U2VhcmNoU2NyZWVuIHNlYXJjaD17dGhpcy5zZWFyY2h9IG9uU2VsZWN0PXt0aGlzLnNlYXJjaFNlbGVjdH0+XG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmJhY2t9PlxuICAgICAgICA8QmFubmVycyBpdGVtcz17dGhpcy5wcm9wcy5iYW5uZXJzfSBvblNlbGVjdD17dGhpcy5iYW5uZXJTZWxlY3R9IC8+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgIDxJbWFnZSBzb3VyY2U9e3JlcXVpcmUoJ3NyYy9yZXMvaW1hZ2VzL2hlYXJ0aC5wbmcnKX0gLz5cbiAgICAgICAgPC9WaWV3PlxuICAgICAgICA8SG90TGlua3Mgb25MaW5rQ2xpY2s9e3RoaXMubGlua0NsaWNrfS8+XG4gICAgICA8L1ZpZXc+XG4gICAgPC9TZWFyY2hTY3JlZW4+YFxuXG5cbiAgbGlua0NsaWNrOiAoaWQpID0+XG4gICAgQHByb3BzLm9uTGlua0NsaWNrPyhpZClcblxuXG4gIG1hcENsaWNrOiA9PlxuICAgIEBfbGlua0NsaWNrKCdtYXAnKVxuICAgIFxuICAgIFxuICBiYW5uZXJTZWxlY3Q6IChpZCkgPT5cbiAgICBAcHJvcHMub25CYW5uZXJTZWxlY3Q/KGlkKVxuXG5cbiAgIyBzZWFyY2ggZGVsZWdhdGVcbiAgc2VhcmNoOiAodGV4dCkgPT5cbiAgICBpZiBub3QgdGV4dFxuICAgICAgcmV0dXJuIFtdXG5cbiAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpXG5cbiAgICBmaWx0ZXJQbGFjZSA9IChwbGFjZSkgLT5cbiAgICAgIHBsYWNlLmdldCgnbmFtZScpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dCkgfHxcbiAgICAgIHBsYWNlLmdldCgnY2F0ZWdvcmllcycpPy5zb21lIChjYXRlZ29yeSkgLT4gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0KSB8fFxuICAgICAgcGxhY2UuZ2V0KCd0YWdzJyk/LnNvbWUgKHRhZykgLT4gdGFnLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dCkgfHxcbiAgICAgIHBsYWNlLmdldCgncGhvbmUnKT8uaW5jbHVkZXModGV4dCkgfHxcbiAgICAgIHBsYWNlLmdldCgnc2l0ZScpPy5pbmNsdWRlcyh0ZXh0KVxuICAgICAgIyBUT0RPOiBkZXNjcmlwdGlvbj9cblxuICAgIHBsYWNlVG9TZWFyY2hJdGVtID0gKHR5cGUpIC0+XG4gICAgICAocGxhY2UsIGlkKSAtPlxuICAgICAgICBpZDogaWQ6IGlkLCB0eXBlOiB0eXBlXG4gICAgICAgIHRpdGxlOiBwbGFjZS5nZXQoJ25hbWUnKVxuICAgICAgICBpbWFnZTogcGxhY2UuZ2V0KCdsb2dvJylcblxuICAgIHNlYXJjaCA9IChwbGFjZXMsIHR5cGUpIC0+XG4gICAgICBwbGFjZXNcbiAgICAgICAgLmZpbHRlcihmaWx0ZXJQbGFjZSlcbiAgICAgICAgLm1hcChwbGFjZVRvU2VhcmNoSXRlbSh0eXBlKSlcbiAgICAgICAgLnRvTGlzdCgpXG5cbiAgICBzdG9yZXMgPSBzZWFyY2goQHByb3BzLnN0b3JlUGxhY2VzLCAnc3RvcmUnKVxuICAgIGRpbmluZyA9IHNlYXJjaChAcHJvcHMuZGluaW5nUGxhY2VzLCAnZGluaW5nJylcblxuICAgIHN0b3Jlcy5jb25jYXQoZGluaW5nKS50b0pTKClcblxuXG4gIHNlYXJjaFNlbGVjdDogKHtpZCwgdHlwZX0pID0+XG4gICAgQHByb3BzLm9uU2VhcmNoU2VsZWN0KGlkLCB0eXBlKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gU2NyZWVuXG4iXX0=
