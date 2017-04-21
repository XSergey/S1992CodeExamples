var Api, App, AppRegistry, Component, GUI, React, ReduxProvider, Server, api, apiInitialized, configureStore, crashlytics, rootSaga, store,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

crashlytics = require('react-native-fabric-crashlytics');

crashlytics.init();

Component = (React = require('react')).Component;

AppRegistry = require('react-native').AppRegistry;

ReduxProvider = require('react-redux').Provider;

configureStore = require('./redux/store');

rootSaga = require('./api/redux/sagas');

Api = require('./api/index');

apiInitialized = require('./redux/actions').apiInitialized;

GUI = require('./gui');

Server = 'http://bawadi-server.eu-central-1.elasticbeanstalk.com';

api = new Api(Server);

store = configureStore();

store.runSaga(rootSaga);

store.dispatch(apiInitialized(api));

App = (function(superClass) {
  extend(App, superClass);

  function App() {
    return App.__super__.constructor.apply(this, arguments);
  }

  App.prototype.render = function() {
    return <ReduxProvider store={store}>
      <GUI />
    </ReduxProvider>;
  };

  return App;

})(Component);

AppRegistry.registerComponent('BawadiApp', function() {
  return App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLHNJQUFBO0VBQUE7OztBQUFBLFdBQUEsR0FBYyxPQUFBLENBQVEsaUNBQVI7O0FBQ2QsV0FBVyxDQUFDLElBQVosQ0FBQTs7QUFFQyxZQUFhLENBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSLENBQVI7O0FBQ2IsY0FBZSxPQUFBLENBQVEsY0FBUjs7QUFDTCxnQkFBaUIsT0FBQSxDQUFRLGFBQVIsRUFBM0I7O0FBQ0QsY0FBQSxHQUFpQixPQUFBLENBQVEsZUFBUjs7QUFDakIsUUFBQSxHQUFXLE9BQUEsQ0FBUSxtQkFBUjs7QUFDWCxHQUFBLEdBQU0sT0FBQSxDQUFRLGFBQVI7O0FBQ0wsaUJBQWtCLE9BQUEsQ0FBUSxpQkFBUjs7QUFDbkIsR0FBQSxHQUFNLE9BQUEsQ0FBUSxPQUFSOztBQUdOLE1BQUEsR0FBUzs7QUFFVCxHQUFBLEdBQU0sSUFBSSxHQUFKLENBQVEsTUFBUjs7QUFDTixLQUFBLEdBQVEsY0FBQSxDQUFBOztBQUNSLEtBQUssQ0FBQyxPQUFOLENBQWMsUUFBZDs7QUFDQSxLQUFLLENBQUMsUUFBTixDQUFlLGNBQUEsQ0FBZSxHQUFmLENBQWY7O0FBR007Ozs7Ozs7Z0JBQ0osTUFBQSxHQUFRLFNBQUE7V0FDTjs7O0VBRE07Ozs7R0FEUTs7QUFPbEIsV0FBVyxDQUFDLGlCQUFaLENBQThCLFdBQTlCLEVBQTJDLFNBQUE7U0FBRztBQUFILENBQTNDIiwic291cmNlc0NvbnRlbnQiOlsiY3Jhc2hseXRpY3MgPSByZXF1aXJlICdyZWFjdC1uYXRpdmUtZmFicmljLWNyYXNobHl0aWNzJ1xuY3Jhc2hseXRpY3MuaW5pdCgpXG5cbntDb21wb25lbnR9ID0gUmVhY3QgPSByZXF1aXJlICdyZWFjdCdcbntBcHBSZWdpc3RyeX0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57UHJvdmlkZXI6IFJlZHV4UHJvdmlkZXJ9ID0gcmVxdWlyZSAncmVhY3QtcmVkdXgnXG5jb25maWd1cmVTdG9yZSA9IHJlcXVpcmUgJy4vcmVkdXgvc3RvcmUnXG5yb290U2FnYSA9IHJlcXVpcmUgJy4vYXBpL3JlZHV4L3NhZ2FzJ1xuQXBpID0gcmVxdWlyZSAnLi9hcGkvaW5kZXgnXG57YXBpSW5pdGlhbGl6ZWR9ID0gcmVxdWlyZSAnLi9yZWR1eC9hY3Rpb25zJ1xuR1VJID0gcmVxdWlyZSAnLi9ndWknXG5cblxuU2VydmVyID0gJ2h0dHA6Ly9iYXdhZGktc2VydmVyLmV1LWNlbnRyYWwtMS5lbGFzdGljYmVhbnN0YWxrLmNvbSdcblxuYXBpID0gbmV3IEFwaShTZXJ2ZXIpXG5zdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKClcbnN0b3JlLnJ1blNhZ2Eocm9vdFNhZ2EpXG5zdG9yZS5kaXNwYXRjaChhcGlJbml0aWFsaXplZChhcGkpKVxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudFxuICByZW5kZXI6IC0+XG4gICAgYDxSZWR1eFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8R1VJIC8+XG4gICAgPC9SZWR1eFByb3ZpZGVyPmBcblxuXG5BcHBSZWdpc3RyeS5yZWdpc3RlckNvbXBvbmVudCgnQmF3YWRpQXBwJywgLT4gQXBwKVxuIl19
