var Actions, BackAndroid, Component, DrawerLayout, GUI, Menu, Platform, React, RouteActions, RouteReducer, Routes, StatusBar, Toolbar, connect, mapDispatchToProps, mapStateToProps, ref, ref1,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = (React = require('react')).Component;

ref = require('react-native'), Platform = ref.Platform, StatusBar = ref.StatusBar, BackAndroid = ref.BackAndroid;

connect = require('react-redux').connect;

ref1 = require('react-native-router-flux'), RouteActions = ref1.Actions, RouteReducer = ref1.Reducer;

Actions = require('./redux/actions');

Routes = require('./routes');

DrawerLayout = require('react-native-drawer-layout');

Toolbar = require('./screens/_common/toolbar');

Menu = require('./screens/menu');

GUI = (function(superClass) {
  extend(GUI, superClass);

  function GUI(props) {
    this.initRoutesIfShowGUI = bind(this.initRoutesIfShowGUI, this);
    this.setStatusBarHiddenOnIOS = bind(this.setStatusBarHiddenOnIOS, this);
    this.closeDrawer = bind(this.closeDrawer, this);
    this.openDrawer = bind(this.openDrawer, this);
    GUI.__super__.constructor.apply(this, arguments);
    this.initRoutesIfShowGUI(props);
  }

  GUI.prototype.componentDidMount = function() {
    BackAndroid.addEventListener('hardwareBackPress', (function(_this) {
      return function() {
        if (_this.props.isRoot && _this.props.currentRoute !== 'main') {
          return RouteActions.main();
        } else {
          try {
            return RouteActions.pop();
          } catch (error) {

          }
        }
      };
    })(this));
    return true;
  };

  GUI.prototype.componentWillReceiveProps = function(nextProps) {
    return this.initRoutesIfShowGUI(nextProps);
  };

  GUI.prototype.render = function() {
    if (!this.props.showGUI) {
      return null;
    }
    return <DrawerLayout
      drawerWidth={250}
      ref={c => this.drawer = c}
      renderNavigationView={() => <Menu onSelect={this.closeDrawer} />}
      onDrawerSlide={this.setStatusBarHiddenOnIOS}
    >
      <Toolbar onMenu={this.openDrawer} onBack={this.back} />
      {this.routes}
    </DrawerLayout>;
  };

  GUI.prototype.back = function() {
    try {
      return RouteActions.pop();
    } catch (error) {

    }
  };

  GUI.prototype.openDrawer = function() {
    return this.drawer.openDrawer();
  };

  GUI.prototype.closeDrawer = function() {
    return this.drawer.closeDrawer();
  };

  GUI.prototype.setStatusBarHiddenOnIOS = function(e) {
    var hidden;
    if (Platform.OS !== 'ios') {
      return;
    }
    hidden = e.nativeEvent.offset > 0.3;
    return StatusBar.setHidden(hidden);
  };

  GUI.prototype.initRoutesIfShowGUI = function(props) {
    if (props.showGUI && !this.routes) {
      return this.routes = Routes(props.routeReducerCreate, props.registered);
    }
  };

  return GUI;

})(Component);

mapStateToProps = function(state) {
  return {
    isRoot: state.route.get('isRoot'),
    currentRoute: state.route.get('name'),
    showGUI: state.app.get('storageLoaded'),
    registered: state.user.auth.get('token') != null
  };
};

mapDispatchToProps = function(dispatch) {
  return {
    routeReducerCreate: function(params) {
      var defaultReducer;
      defaultReducer = RouteReducer(params);
      return function(state, action) {
        var newState;
        newState = defaultReducer(state, action);
        if (action.type !== 'RootContainerInitialAction') {
          dispatch(Actions.routed(newState));
          dispatch(Actions.toolbarSearch.show(false));
          dispatch(Actions.toolbarSearch.text(null));
        }
        return newState;
      };
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(GUI);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmpzIiwic291cmNlcyI6WyJndWkuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsMExBQUE7RUFBQTs7OztBQUFDLFlBQWEsQ0FBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLE9BQVIsQ0FBUjs7QUFDZCxNQUFxQyxPQUFBLENBQVEsY0FBUixDQUFyQyxFQUFDLHVCQUFELEVBQVcseUJBQVgsRUFBc0I7O0FBQ3JCLFVBQVcsT0FBQSxDQUFRLGFBQVI7O0FBQ1osT0FHSSxPQUFBLENBQVEsMEJBQVIsQ0FISixFQUNXLG9CQUFULE9BREYsRUFFVyxvQkFBVDs7QUFFRixPQUFBLEdBQVUsT0FBQSxDQUFRLGlCQUFSOztBQUNWLE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFDVCxZQUFBLEdBQWUsT0FBQSxDQUFRLDRCQUFSOztBQUNmLE9BQUEsR0FBVSxPQUFBLENBQVEsMkJBQVI7O0FBQ1YsSUFBQSxHQUFPLE9BQUEsQ0FBUSxnQkFBUjs7QUFHRDs7O0VBQ1MsYUFBQyxLQUFEOzs7OztJQUNYLHNDQUFBLFNBQUE7SUFDQSxJQUFDLENBQUEsbUJBQUQsQ0FBcUIsS0FBckI7RUFGVzs7Z0JBS2IsaUJBQUEsR0FBbUIsU0FBQTtJQUNqQixXQUFXLENBQUMsZ0JBQVosQ0FBNkIsbUJBQTdCLEVBQWtELENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtRQUNoRCxJQUFHLEtBQUMsQ0FBQSxLQUFLLENBQUMsTUFBUCxJQUFrQixLQUFDLENBQUEsS0FBSyxDQUFDLFlBQVAsS0FBeUIsTUFBOUM7aUJBQ0UsWUFBWSxDQUFDLElBQWIsQ0FBQSxFQURGO1NBQUEsTUFBQTtBQUdFO21CQUFJLFlBQVksQ0FBQyxHQUFiLENBQUEsRUFBSjtXQUFBLGFBQUE7QUFBQTtXQUhGOztNQURnRDtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBbEQ7QUFNQSxXQUFPO0VBUFU7O2dCQVVuQix5QkFBQSxHQUEyQixTQUFDLFNBQUQ7V0FDekIsSUFBQyxDQUFBLG1CQUFELENBQXFCLFNBQXJCO0VBRHlCOztnQkFJM0IsTUFBQSxHQUFRLFNBQUE7SUFDTixJQUFHLENBQUksSUFBQyxDQUFBLEtBQUssQ0FBQyxPQUFkO0FBQ0UsYUFBTyxLQURUOztXQUdBOzs7Ozs7Ozs7RUFKTTs7Z0JBZVIsSUFBQSxHQUFNLFNBQUE7QUFDSjthQUFJLFlBQVksQ0FBQyxHQUFiLENBQUEsRUFBSjtLQUFBLGFBQUE7QUFBQTs7RUFESTs7Z0JBSU4sVUFBQSxHQUFZLFNBQUE7V0FDVixJQUFDLENBQUEsTUFBTSxDQUFDLFVBQVIsQ0FBQTtFQURVOztnQkFJWixXQUFBLEdBQWEsU0FBQTtXQUNYLElBQUMsQ0FBQSxNQUFNLENBQUMsV0FBUixDQUFBO0VBRFc7O2dCQUliLHVCQUFBLEdBQXlCLFNBQUMsQ0FBRDtBQUN2QixRQUFBO0lBQUEsSUFBRyxRQUFRLENBQUMsRUFBVCxLQUFpQixLQUFwQjtBQUNFLGFBREY7O0lBR0EsTUFBQSxHQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBZCxHQUF1QjtXQUNoQyxTQUFTLENBQUMsU0FBVixDQUFvQixNQUFwQjtFQUx1Qjs7Z0JBUXpCLG1CQUFBLEdBQXFCLFNBQUMsS0FBRDtJQUNuQixJQUFHLEtBQUssQ0FBQyxPQUFOLElBQWtCLENBQUksSUFBQyxDQUFBLE1BQTFCO2FBQ0UsSUFBQyxDQUFBLE1BQUQsR0FBVSxNQUFBLENBQU8sS0FBSyxDQUFDLGtCQUFiLEVBQWlDLEtBQUssQ0FBQyxVQUF2QyxFQURaOztFQURtQjs7OztHQXZETDs7QUE0RGxCLGVBQUEsR0FBa0IsU0FBQyxLQUFEO1NBQ2hCO0lBQUEsTUFBQSxFQUFRLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBWixDQUFnQixRQUFoQixDQUFSO0lBQ0EsWUFBQSxFQUFjLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBWixDQUFnQixNQUFoQixDQURkO0lBRUEsT0FBQSxFQUFTLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBVixDQUFjLGVBQWQsQ0FGVDtJQUdBLFVBQUEsRUFBWSxvQ0FIWjs7QUFEZ0I7O0FBT2xCLGtCQUFBLEdBQXFCLFNBQUMsUUFBRDtTQUNuQjtJQUFBLGtCQUFBLEVBQW9CLFNBQUMsTUFBRDtBQUNsQixVQUFBO01BQUEsY0FBQSxHQUFpQixZQUFBLENBQWEsTUFBYjthQUNqQixTQUFDLEtBQUQsRUFBUSxNQUFSO0FBQ0UsWUFBQTtRQUFBLFFBQUEsR0FBVyxjQUFBLENBQWUsS0FBZixFQUFzQixNQUF0QjtRQUNYLElBQUcsTUFBTSxDQUFDLElBQVAsS0FBaUIsNEJBQXBCO1VBQ0UsUUFBQSxDQUFTLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixDQUFUO1VBQ0EsUUFBQSxDQUFTLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBdEIsQ0FBMkIsS0FBM0IsQ0FBVDtVQUNBLFFBQUEsQ0FBUyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQXRCLENBQTJCLElBQTNCLENBQVQsRUFIRjs7QUFJQSxlQUFPO01BTlQ7SUFGa0IsQ0FBcEI7O0FBRG1COztBQVlyQixNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFBLENBQVEsZUFBUixFQUF5QixrQkFBekIsQ0FBQSxDQUE2QyxHQUE3QyIsInNvdXJjZXNDb250ZW50IjpbIntDb21wb25lbnR9ID0gUmVhY3QgPSByZXF1aXJlICdyZWFjdCdcbntQbGF0Zm9ybSwgU3RhdHVzQmFyLCBCYWNrQW5kcm9pZH0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Y29ubmVjdH0gPSByZXF1aXJlICdyZWFjdC1yZWR1eCdcbntcbiAgQWN0aW9uczogUm91dGVBY3Rpb25zXG4gIFJlZHVjZXI6IFJvdXRlUmVkdWNlclxufSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS1yb3V0ZXItZmx1eCdcbkFjdGlvbnMgPSByZXF1aXJlICcuL3JlZHV4L2FjdGlvbnMnXG5Sb3V0ZXMgPSByZXF1aXJlICcuL3JvdXRlcydcbkRyYXdlckxheW91dCA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS1kcmF3ZXItbGF5b3V0J1xuVG9vbGJhciA9IHJlcXVpcmUgJy4vc2NyZWVucy9fY29tbW9uL3Rvb2xiYXInXG5NZW51ID0gcmVxdWlyZSAnLi9zY3JlZW5zL21lbnUnXG5cblxuY2xhc3MgR1VJIGV4dGVuZHMgQ29tcG9uZW50XG4gIGNvbnN0cnVjdG9yOiAocHJvcHMpIC0+XG4gICAgc3VwZXJcbiAgICBAaW5pdFJvdXRlc0lmU2hvd0dVSShwcm9wcylcblxuXG4gIGNvbXBvbmVudERpZE1vdW50OiAtPlxuICAgIEJhY2tBbmRyb2lkLmFkZEV2ZW50TGlzdGVuZXIgJ2hhcmR3YXJlQmFja1ByZXNzJywgPT5cbiAgICAgIGlmIEBwcm9wcy5pc1Jvb3QgYW5kIEBwcm9wcy5jdXJyZW50Um91dGUgaXNudCAnbWFpbidcbiAgICAgICAgUm91dGVBY3Rpb25zLm1haW4oKVxuICAgICAgZWxzZVxuICAgICAgICB0cnkgUm91dGVBY3Rpb25zLnBvcCgpIGNhdGNoXG5cbiAgICByZXR1cm4geWVzXG5cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAobmV4dFByb3BzKSAtPlxuICAgIEBpbml0Um91dGVzSWZTaG93R1VJKG5leHRQcm9wcylcblxuXG4gIHJlbmRlcjogLT5cbiAgICBpZiBub3QgQHByb3BzLnNob3dHVUlcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICBgPERyYXdlckxheW91dFxuICAgICAgZHJhd2VyV2lkdGg9ezI1MH1cbiAgICAgIHJlZj17YyA9PiB0aGlzLmRyYXdlciA9IGN9XG4gICAgICByZW5kZXJOYXZpZ2F0aW9uVmlldz17KCkgPT4gPE1lbnUgb25TZWxlY3Q9e3RoaXMuY2xvc2VEcmF3ZXJ9IC8+fVxuICAgICAgb25EcmF3ZXJTbGlkZT17dGhpcy5zZXRTdGF0dXNCYXJIaWRkZW5PbklPU31cbiAgICA+XG4gICAgICA8VG9vbGJhciBvbk1lbnU9e3RoaXMub3BlbkRyYXdlcn0gb25CYWNrPXt0aGlzLmJhY2t9IC8+XG4gICAgICB7dGhpcy5yb3V0ZXN9XG4gICAgPC9EcmF3ZXJMYXlvdXQ+YFxuXG5cbiAgYmFjazogLT5cbiAgICB0cnkgUm91dGVBY3Rpb25zLnBvcCgpIGNhdGNoXG5cblxuICBvcGVuRHJhd2VyOiA9PlxuICAgIEBkcmF3ZXIub3BlbkRyYXdlcigpXG5cblxuICBjbG9zZURyYXdlcjogPT5cbiAgICBAZHJhd2VyLmNsb3NlRHJhd2VyKClcblxuXG4gIHNldFN0YXR1c0JhckhpZGRlbk9uSU9TOiAoZSkgPT5cbiAgICBpZiBQbGF0Zm9ybS5PUyBpc250ICdpb3MnXG4gICAgICByZXR1cm5cblxuICAgIGhpZGRlbiA9IGUubmF0aXZlRXZlbnQub2Zmc2V0ID4gMC4zXG4gICAgU3RhdHVzQmFyLnNldEhpZGRlbihoaWRkZW4pXG5cblxuICBpbml0Um91dGVzSWZTaG93R1VJOiAocHJvcHMpID0+XG4gICAgaWYgcHJvcHMuc2hvd0dVSSBhbmQgbm90IEByb3V0ZXNcbiAgICAgIEByb3V0ZXMgPSBSb3V0ZXMocHJvcHMucm91dGVSZWR1Y2VyQ3JlYXRlLCBwcm9wcy5yZWdpc3RlcmVkKVxuXG5cbm1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgLT5cbiAgaXNSb290OiBzdGF0ZS5yb3V0ZS5nZXQoJ2lzUm9vdCcpXG4gIGN1cnJlbnRSb3V0ZTogc3RhdGUucm91dGUuZ2V0KCduYW1lJylcbiAgc2hvd0dVSTogc3RhdGUuYXBwLmdldCgnc3RvcmFnZUxvYWRlZCcpXG4gIHJlZ2lzdGVyZWQ6IHN0YXRlLnVzZXIuYXV0aC5nZXQoJ3Rva2VuJyk/XG5cblxubWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSAtPlxuICByb3V0ZVJlZHVjZXJDcmVhdGU6IChwYXJhbXMpIC0+XG4gICAgZGVmYXVsdFJlZHVjZXIgPSBSb3V0ZVJlZHVjZXIocGFyYW1zKVxuICAgIChzdGF0ZSwgYWN0aW9uKSAtPlxuICAgICAgbmV3U3RhdGUgPSBkZWZhdWx0UmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxuICAgICAgaWYgYWN0aW9uLnR5cGUgaXNudCAnUm9vdENvbnRhaW5lckluaXRpYWxBY3Rpb24nXG4gICAgICAgIGRpc3BhdGNoKEFjdGlvbnMucm91dGVkKG5ld1N0YXRlKSlcbiAgICAgICAgZGlzcGF0Y2goQWN0aW9ucy50b29sYmFyU2VhcmNoLnNob3cobm8pKVxuICAgICAgICBkaXNwYXRjaChBY3Rpb25zLnRvb2xiYXJTZWFyY2gudGV4dChudWxsKSlcbiAgICAgIHJldHVybiBuZXdTdGF0ZVxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR1VJKVxuIl19
