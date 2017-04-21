var Component, Icon, Image, NavigationBar, Platform, React, Text, TextInput, Toolbar, TouchableOpacity, View, gstyles, ref, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, Image = ref.Image, TextInput = ref.TextInput, TouchableOpacity = ref.TouchableOpacity, Text = ref.Text, Platform = ref.Platform;

Component = (React = require('react')).Component;

Icon = require('react-native-vector-icons/MaterialIcons');

NavigationBar = require('react-native-navbar');

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

Toolbar = (function(superClass) {
  extend(Toolbar, superClass);

  function Toolbar() {
    this.getSearch = bind(this.getSearch, this);
    this.getTitle = bind(this.getTitle, this);
    this.search = bind(this.search, this);
    this.actionSelected = bind(this.actionSelected, this);
    this.iconClicked = bind(this.iconClicked, this);
    this.title = bind(this.title, this);
    this.rightButton = bind(this.rightButton, this);
    this.leftButton = bind(this.leftButton, this);
    this.state = {
      searchText: ""
    };
  }

  Toolbar.prototype.componentWillReceiveProps = function(nextProps) {
    if (!nextProps.showSearch) {
      return this.search("");
    }
  };

  Toolbar.prototype.render = function() {
    if (!this.props.show) {
      return null;
    }
    return <NavigationBar
      title={this.title()}
      leftButton={this.leftButton()}
      rightButton={this.rightButton()}
      style={styles.toolbar} />;
  };

  Toolbar.prototype.leftButton = function() {
    var iconName, showMenuIcon;
    showMenuIcon = this.props.isRoot && !this.props.showSearch;
    iconName = showMenuIcon ? 'menu' : 'arrow-back';
    return <TouchableOpacity onPress={this.iconClicked} style={styles.button}>
      <Icon name={iconName} size={24} style={gstyles.gray} />
    </TouchableOpacity>;
  };

  Toolbar.prototype.rightButton = function() {
    var iconName, showClearIcon, showSearchIcon;
    showSearchIcon = !this.props.showSearch || this.state.searchText;
    if (!this.props.hasSearch || !showSearchIcon) {
      return;
    }
    showClearIcon = this.state.searchText;
    iconName = showClearIcon ? 'clear' : 'search';
    return <TouchableOpacity onPress={this.actionSelected} style={styles.button}>
      <Icon name={iconName} size={24} style={gstyles.gray} />
    </TouchableOpacity>;
  };

  Toolbar.prototype.title = function() {
    if (this.props.showSearch) {
      return this.getSearch();
    }
    if (this.props.title) {
      return this.getTitle();
    }
    return this.getLogo();
  };

  Toolbar.prototype.iconClicked = function() {
    var base, base1, base2;
    if (this.props.showSearch) {
      return typeof (base = this.props).onHideSearch === "function" ? base.onHideSearch() : void 0;
    }
    if (this.props.isRoot) {
      return typeof (base1 = this.props).onMenu === "function" ? base1.onMenu() : void 0;
    }
    return typeof (base2 = this.props).onBack === "function" ? base2.onBack() : void 0;
  };

  Toolbar.prototype.actionSelected = function() {
    var base, base1;
    if (this.props.showSearch) {
      this.setState({
        searchText: ""
      });
      return typeof (base = this.props).onSearch === "function" ? base.onSearch("") : void 0;
    } else {
      return typeof (base1 = this.props).onShowSearch === "function" ? base1.onShowSearch() : void 0;
    }
  };

  Toolbar.prototype.search = function(text) {
    var base;
    this.setState({
      searchText: text
    });
    return typeof (base = this.props).onSearch === "function" ? base.onSearch(text) : void 0;
  };

  Toolbar.prototype.getTitle = function() {
    var style;
    style = Platform.OS === 'ios' ? styles.titleIOS : styles.title;
    return <Text style={[gstyles.gray, style]} numberOfLines={1}>
      {this.props.title.toUpperCase()}
    </Text>;
  };

  Toolbar.prototype.getLogo = function() {
    var style;
    style = Platform.OS === 'ios' ? styles.logoIOS : styles.logo;
    return <Image source={require('bawadi-client/app/res/images/logo.png')} style={style} />;
  };

  Toolbar.prototype.getSearch = function() {
    return <TextInput
      ref={(c) => this.searchField = c}
      onChangeText={this.search}
      value={this.state.searchText}
      autoFocus={true}
      onSubmitEditing={() => this.searchField.blur()}
      placeholder="Search"
      style={styles.searchField} />;
  };

  return Toolbar;

})(Component);

module.exports = Toolbar;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9fY29tbW9uL3Rvb2xiYXIvY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJzY3JlZW5zL19jb21tb24vdG9vbGJhci9jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsOEhBQUE7RUFBQTs7OztBQUFBLE1BT0ksT0FBQSxDQUFRLGNBQVIsQ0FQSixFQUNFLGVBREYsRUFFRSxpQkFGRixFQUdFLHlCQUhGLEVBSUUsdUNBSkYsRUFLRSxlQUxGLEVBTUU7O0FBRUQsWUFBYSxDQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUixDQUFSOztBQUNkLElBQUEsR0FBTyxPQUFBLENBQVEseUNBQVI7O0FBQ1AsYUFBQSxHQUFnQixPQUFBLENBQVEscUJBQVI7O0FBQ2hCLE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFDVCxPQUFBLEdBQVUsT0FBQSxDQUFRLDBCQUFSOztBQUdKOzs7RUFDUyxpQkFBQTs7Ozs7Ozs7O0lBQ1gsSUFBQyxDQUFBLEtBQUQsR0FBUztNQUFBLFVBQUEsRUFBWSxFQUFaOztFQURFOztvQkFJYix5QkFBQSxHQUEyQixTQUFDLFNBQUQ7SUFDekIsSUFBRyxDQUFJLFNBQVMsQ0FBQyxVQUFqQjthQUNFLElBQUMsQ0FBQSxNQUFELENBQVEsRUFBUixFQURGOztFQUR5Qjs7b0JBSzNCLE1BQUEsR0FBUSxTQUFBO0lBQ04sSUFBRyxDQUFJLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBZDtBQUNFLGFBQU8sS0FEVDs7V0FHQTs7Ozs7RUFKTTs7b0JBV1IsVUFBQSxHQUFZLFNBQUE7QUFDVixRQUFBO0lBQUEsWUFBQSxHQUFlLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFBUCxJQUFrQixDQUFJLElBQUMsQ0FBQSxLQUFLLENBQUM7SUFDNUMsUUFBQSxHQUFjLFlBQUgsR0FBcUIsTUFBckIsR0FBaUM7V0FFNUM7OztFQUpVOztvQkFTWixXQUFBLEdBQWEsU0FBQTtBQUNYLFFBQUE7SUFBQSxjQUFBLEdBQWlCLENBQUksSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFYLElBQXlCLElBQUMsQ0FBQSxLQUFLLENBQUM7SUFDakQsSUFBRyxDQUFJLElBQUMsQ0FBQSxLQUFLLENBQUMsU0FBWCxJQUF3QixDQUFJLGNBQS9CO0FBQ0UsYUFERjs7SUFHQSxhQUFBLEdBQWdCLElBQUMsQ0FBQSxLQUFLLENBQUM7SUFDdkIsUUFBQSxHQUFjLGFBQUgsR0FBc0IsT0FBdEIsR0FBbUM7V0FFOUM7OztFQVJXOztvQkFhYixLQUFBLEdBQU8sU0FBQTtJQUNMLElBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFWO0FBQ0UsYUFBTyxJQUFDLENBQUEsU0FBRCxDQUFBLEVBRFQ7O0lBR0EsSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQVY7QUFDRSxhQUFPLElBQUMsQ0FBQSxRQUFELENBQUEsRUFEVDs7V0FHQSxJQUFDLENBQUEsT0FBRCxDQUFBO0VBUEs7O29CQVVQLFdBQUEsR0FBYSxTQUFBO0FBQ1gsUUFBQTtJQUFBLElBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQyxVQUFWO0FBQ0UsMEVBQWEsQ0FBQyx3QkFEaEI7O0lBR0EsSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQVY7QUFDRSxzRUFBYSxDQUFDLGtCQURoQjs7b0VBR00sQ0FBQztFQVBJOztvQkFVYixjQUFBLEdBQWdCLFNBQUE7QUFDZCxRQUFBO0lBQUEsSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVY7TUFDRSxJQUFDLENBQUEsUUFBRCxDQUFVO1FBQUEsVUFBQSxFQUFZLEVBQVo7T0FBVjtzRUFDTSxDQUFDLFNBQVUsYUFGbkI7S0FBQSxNQUFBOzRFQUlRLENBQUMsd0JBSlQ7O0VBRGM7O29CQVFoQixNQUFBLEdBQVEsU0FBQyxJQUFEO0FBQ04sUUFBQTtJQUFBLElBQUMsQ0FBQSxRQUFELENBQVU7TUFBQSxVQUFBLEVBQVksSUFBWjtLQUFWO29FQUNNLENBQUMsU0FBVTtFQUZYOztvQkFLUixRQUFBLEdBQVUsU0FBQTtBQUNSLFFBQUE7SUFBQSxLQUFBLEdBQVcsUUFBUSxDQUFDLEVBQVQsS0FBZSxLQUFsQixHQUE2QixNQUFNLENBQUMsUUFBcEMsR0FBa0QsTUFBTSxDQUFDO1dBRWpFOzs7RUFIUTs7b0JBUVYsT0FBQSxHQUFTLFNBQUE7QUFDUCxRQUFBO0lBQUEsS0FBQSxHQUFXLFFBQVEsQ0FBQyxFQUFULEtBQWUsS0FBbEIsR0FBNkIsTUFBTSxDQUFDLE9BQXBDLEdBQWlELE1BQU0sQ0FBQztXQUNoRTtFQUZPOztvQkFLVCxTQUFBLEdBQVcsU0FBQTtXQUNUOzs7Ozs7OztFQURTOzs7O0dBekZTOztBQW9HdEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJ7XG4gIFZpZXdcbiAgSW1hZ2VcbiAgVGV4dElucHV0XG4gIFRvdWNoYWJsZU9wYWNpdHlcbiAgVGV4dFxuICBQbGF0Zm9ybVxufSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZSdcbntDb21wb25lbnR9ID0gUmVhY3QgPSByZXF1aXJlICdyZWFjdCdcbkljb24gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUtdmVjdG9yLWljb25zL01hdGVyaWFsSWNvbnMnXG5OYXZpZ2F0aW9uQmFyID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLW5hdmJhcidcbnN0eWxlcyA9IHJlcXVpcmUgJy4vc3R5bGVzJ1xuZ3N0eWxlcyA9IHJlcXVpcmUgJ3NyYy9zdHlsZXMnXG5cblxuY2xhc3MgVG9vbGJhciBleHRlbmRzIENvbXBvbmVudFxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBAc3RhdGUgPSBzZWFyY2hUZXh0OiBcIlwiXG5cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAobmV4dFByb3BzKSAtPlxuICAgIGlmIG5vdCBuZXh0UHJvcHMuc2hvd1NlYXJjaFxuICAgICAgQHNlYXJjaChcIlwiKVxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIGlmIG5vdCBAcHJvcHMuc2hvd1xuICAgICAgcmV0dXJuIG51bGxcblxuICAgIGA8TmF2aWdhdGlvbkJhclxuICAgICAgdGl0bGU9e3RoaXMudGl0bGUoKX1cbiAgICAgIGxlZnRCdXR0b249e3RoaXMubGVmdEJ1dHRvbigpfVxuICAgICAgcmlnaHRCdXR0b249e3RoaXMucmlnaHRCdXR0b24oKX1cbiAgICAgIHN0eWxlPXtzdHlsZXMudG9vbGJhcn0gLz5gXG5cblxuICBsZWZ0QnV0dG9uOiA9PlxuICAgIHNob3dNZW51SWNvbiA9IEBwcm9wcy5pc1Jvb3QgYW5kIG5vdCBAcHJvcHMuc2hvd1NlYXJjaFxuICAgIGljb25OYW1lID0gaWYgc2hvd01lbnVJY29uIHRoZW4gJ21lbnUnIGVsc2UgJ2Fycm93LWJhY2snXG5cbiAgICBgPFRvdWNoYWJsZU9wYWNpdHkgb25QcmVzcz17dGhpcy5pY29uQ2xpY2tlZH0gc3R5bGU9e3N0eWxlcy5idXR0b259PlxuICAgICAgPEljb24gbmFtZT17aWNvbk5hbWV9IHNpemU9ezI0fSBzdHlsZT17Z3N0eWxlcy5ncmF5fSAvPlxuICAgIDwvVG91Y2hhYmxlT3BhY2l0eT5gXG5cblxuICByaWdodEJ1dHRvbjogPT5cbiAgICBzaG93U2VhcmNoSWNvbiA9IG5vdCBAcHJvcHMuc2hvd1NlYXJjaCBvciBAc3RhdGUuc2VhcmNoVGV4dFxuICAgIGlmIG5vdCBAcHJvcHMuaGFzU2VhcmNoIG9yIG5vdCBzaG93U2VhcmNoSWNvblxuICAgICAgcmV0dXJuXG5cbiAgICBzaG93Q2xlYXJJY29uID0gQHN0YXRlLnNlYXJjaFRleHRcbiAgICBpY29uTmFtZSA9IGlmIHNob3dDbGVhckljb24gdGhlbiAnY2xlYXInIGVsc2UgJ3NlYXJjaCdcblxuICAgIGA8VG91Y2hhYmxlT3BhY2l0eSBvblByZXNzPXt0aGlzLmFjdGlvblNlbGVjdGVkfSBzdHlsZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICA8SWNvbiBuYW1lPXtpY29uTmFtZX0gc2l6ZT17MjR9IHN0eWxlPXtnc3R5bGVzLmdyYXl9IC8+XG4gICAgPC9Ub3VjaGFibGVPcGFjaXR5PmBcblxuXG4gIHRpdGxlOiA9PlxuICAgIGlmIEBwcm9wcy5zaG93U2VhcmNoXG4gICAgICByZXR1cm4gQGdldFNlYXJjaCgpXG5cbiAgICBpZiBAcHJvcHMudGl0bGVcbiAgICAgIHJldHVybiBAZ2V0VGl0bGUoKVxuXG4gICAgQGdldExvZ28oKVxuXG5cbiAgaWNvbkNsaWNrZWQ6ID0+XG4gICAgaWYgQHByb3BzLnNob3dTZWFyY2hcbiAgICAgIHJldHVybiBAcHJvcHMub25IaWRlU2VhcmNoPygpXG5cbiAgICBpZiBAcHJvcHMuaXNSb290XG4gICAgICByZXR1cm4gQHByb3BzLm9uTWVudT8oKVxuXG4gICAgQHByb3BzLm9uQmFjaz8oKVxuXG5cbiAgYWN0aW9uU2VsZWN0ZWQ6ID0+XG4gICAgaWYgQHByb3BzLnNob3dTZWFyY2hcbiAgICAgIEBzZXRTdGF0ZShzZWFyY2hUZXh0OiBcIlwiKVxuICAgICAgQHByb3BzLm9uU2VhcmNoPyhcIlwiKVxuICAgIGVsc2VcbiAgICAgIEBwcm9wcy5vblNob3dTZWFyY2g/KClcblxuXG4gIHNlYXJjaDogKHRleHQpID0+XG4gICAgQHNldFN0YXRlKHNlYXJjaFRleHQ6IHRleHQpXG4gICAgQHByb3BzLm9uU2VhcmNoPyh0ZXh0KVxuXG5cbiAgZ2V0VGl0bGU6ID0+XG4gICAgc3R5bGUgPSBpZiBQbGF0Zm9ybS5PUyBpcyAnaW9zJyB0aGVuIHN0eWxlcy50aXRsZUlPUyBlbHNlIHN0eWxlcy50aXRsZVxuXG4gICAgYDxUZXh0IHN0eWxlPXtbZ3N0eWxlcy5ncmF5LCBzdHlsZV19IG51bWJlck9mTGluZXM9ezF9PlxuICAgICAge3RoaXMucHJvcHMudGl0bGUudG9VcHBlckNhc2UoKX1cbiAgICA8L1RleHQ+YFxuXG5cbiAgZ2V0TG9nbzogLT5cbiAgICBzdHlsZSA9IGlmIFBsYXRmb3JtLk9TIGlzICdpb3MnIHRoZW4gc3R5bGVzLmxvZ29JT1MgZWxzZSBzdHlsZXMubG9nb1xuICAgIGA8SW1hZ2Ugc291cmNlPXtyZXF1aXJlKCdzcmMvcmVzL2ltYWdlcy9sb2dvLnBuZycpfSBzdHlsZT17c3R5bGV9IC8+YFxuXG5cbiAgZ2V0U2VhcmNoOiA9PlxuICAgIGA8VGV4dElucHV0XG4gICAgICByZWY9eyhjKSA9PiB0aGlzLnNlYXJjaEZpZWxkID0gY31cbiAgICAgIG9uQ2hhbmdlVGV4dD17dGhpcy5zZWFyY2h9XG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxuICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgb25TdWJtaXRFZGl0aW5nPXsoKSA9PiB0aGlzLnNlYXJjaEZpZWxkLmJsdXIoKX1cbiAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgIHN0eWxlPXtzdHlsZXMuc2VhcmNoRmllbGR9IC8+YFxuXG5cbm1vZHVsZS5leHBvcnRzID0gVG9vbGJhclxuIl19
