var React, Router, Scene, WebView, ref, screens;

React = require('react');

WebView = require('react-native').WebView;

ref = require('react-native-router-flux'), Router = ref.Router, Scene = ref.Scene;

screens = require('./screens');

module.exports = function(reducerCreate, registered) {
  return <Router createReducer={reducerCreate}>
    <Scene key='root' hideNavBar={true}>
      <Scene
        key='main'
        component={screens.Main}
        hideNavBar={true} />
      <Scene
        key='storeCats'
        component={screens.Place.Categories('store')}
        hideNavBar={true}
        title="Stores" />
      <Scene
        key='diningCats'
        component={screens.Place.Categories('dining')}
        hideNavBar={true}
        title="Dining" />
      <Scene
        key='placeList'
        component={screens.Place.List}
        hideNavBar={true} />
      <Scene
        key='place'
        component={screens.Place.Detail}
        hideNavBar={true} />
      <Scene
        key='offers'
        component={screens.Promo.List('offers')}
        hideNavBar={true}
        title="Offers" />
      <Scene
        key='events'
        component={screens.Promo.List('events')}
        hideNavBar={true}
        title="Events" />
      <Scene
        key='offer'
        component={screens.Promo.Detail}
        hideNavBar={true} />
      <Scene
        key='parking'
        component={screens.Parking}
        hideNavBar={true}
        title="Parking" />
      <Scene
        key='profile'
        component={screens.Profile}
        hideNavBar={true}
        title="My profile" />
      <Scene
        key='bonusList'
        component={screens.Bonuses}
        hideNavBar={true}
        title="Bonus points" />
      <Scene
        key='signUp'
        component={screens.SignUp}
        initial={!registered}
        direction='vertical'
        hideNavBar={true}
        hideToolbar={true}
        title="Sign up" />
      <Scene
        key='scanReceipt'
        component={screens.ScanReceipt}
        hideNavBar={true}
        title="Scan receipt" />
      <Scene
        key='raffle'
        component={screens.Raffle}
        hideNavBar={true}
        title="Raffle" />
      <Scene
        key='about'
        component={screens.About}
        hideNavBar={true}
        title="About" />
      <Scene
        key='browser'
        component={WebView}
        hideNavBar={true} />
    </Scene>
  </Router>;
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlcyI6WyJyb3V0ZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSOztBQUNQLFVBQVcsT0FBQSxDQUFRLGNBQVI7O0FBQ1osTUFBa0IsT0FBQSxDQUFRLDBCQUFSLENBQWxCLEVBQUMsbUJBQUQsRUFBUzs7QUFDVCxPQUFBLEdBQVUsT0FBQSxDQUFRLFdBQVI7O0FBR1YsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxhQUFELEVBQWdCLFVBQWhCO1NBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEZSIsInNvdXJjZXNDb250ZW50IjpbIlJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG57V2ViVmlld30gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Um91dGVyLCBTY2VuZX0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUtcm91dGVyLWZsdXgnXG5zY3JlZW5zID0gcmVxdWlyZSAnLi9zY3JlZW5zJ1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKHJlZHVjZXJDcmVhdGUsIHJlZ2lzdGVyZWQpIC0+XG4gIGA8Um91dGVyIGNyZWF0ZVJlZHVjZXI9e3JlZHVjZXJDcmVhdGV9PlxuICAgIDxTY2VuZSBrZXk9J3Jvb3QnIGhpZGVOYXZCYXI9e3RydWV9PlxuICAgICAgPFNjZW5lXG4gICAgICAgIGtleT0nbWFpbidcbiAgICAgICAgY29tcG9uZW50PXtzY3JlZW5zLk1haW59XG4gICAgICAgIGhpZGVOYXZCYXI9e3RydWV9IC8+XG4gICAgICA8U2NlbmVcbiAgICAgICAga2V5PSdzdG9yZUNhdHMnXG4gICAgICAgIGNvbXBvbmVudD17c2NyZWVucy5QbGFjZS5DYXRlZ29yaWVzKCdzdG9yZScpfVxuICAgICAgICBoaWRlTmF2QmFyPXt0cnVlfVxuICAgICAgICB0aXRsZT1cIlN0b3Jlc1wiIC8+XG4gICAgICA8U2NlbmVcbiAgICAgICAga2V5PSdkaW5pbmdDYXRzJ1xuICAgICAgICBjb21wb25lbnQ9e3NjcmVlbnMuUGxhY2UuQ2F0ZWdvcmllcygnZGluaW5nJyl9XG4gICAgICAgIGhpZGVOYXZCYXI9e3RydWV9XG4gICAgICAgIHRpdGxlPVwiRGluaW5nXCIgLz5cbiAgICAgIDxTY2VuZVxuICAgICAgICBrZXk9J3BsYWNlTGlzdCdcbiAgICAgICAgY29tcG9uZW50PXtzY3JlZW5zLlBsYWNlLkxpc3R9XG4gICAgICAgIGhpZGVOYXZCYXI9e3RydWV9IC8+XG4gICAgICA8U2NlbmVcbiAgICAgICAga2V5PSdwbGFjZSdcbiAgICAgICAgY29tcG9uZW50PXtzY3JlZW5zLlBsYWNlLkRldGFpbH1cbiAgICAgICAgaGlkZU5hdkJhcj17dHJ1ZX0gLz5cbiAgICAgIDxTY2VuZVxuICAgICAgICBrZXk9J29mZmVycydcbiAgICAgICAgY29tcG9uZW50PXtzY3JlZW5zLlByb21vLkxpc3QoJ29mZmVycycpfVxuICAgICAgICBoaWRlTmF2QmFyPXt0cnVlfVxuICAgICAgICB0aXRsZT1cIk9mZmVyc1wiIC8+XG4gICAgICA8U2NlbmVcbiAgICAgICAga2V5PSdldmVudHMnXG4gICAgICAgIGNvbXBvbmVudD17c2NyZWVucy5Qcm9tby5MaXN0KCdldmVudHMnKX1cbiAgICAgICAgaGlkZU5hdkJhcj17dHJ1ZX1cbiAgICAgICAgdGl0bGU9XCJFdmVudHNcIiAvPlxuICAgICAgPFNjZW5lXG4gICAgICAgIGtleT0nb2ZmZXInXG4gICAgICAgIGNvbXBvbmVudD17c2NyZWVucy5Qcm9tby5EZXRhaWx9XG4gICAgICAgIGhpZGVOYXZCYXI9e3RydWV9IC8+XG4gICAgICA8U2NlbmVcbiAgICAgICAga2V5PSdwYXJraW5nJ1xuICAgICAgICBjb21wb25lbnQ9e3NjcmVlbnMuUGFya2luZ31cbiAgICAgICAgaGlkZU5hdkJhcj17dHJ1ZX1cbiAgICAgICAgdGl0bGU9XCJQYXJraW5nXCIgLz5cbiAgICAgIDxTY2VuZVxuICAgICAgICBrZXk9J3Byb2ZpbGUnXG4gICAgICAgIGNvbXBvbmVudD17c2NyZWVucy5Qcm9maWxlfVxuICAgICAgICBoaWRlTmF2QmFyPXt0cnVlfVxuICAgICAgICB0aXRsZT1cIk15IHByb2ZpbGVcIiAvPlxuICAgICAgPFNjZW5lXG4gICAgICAgIGtleT0nYm9udXNMaXN0J1xuICAgICAgICBjb21wb25lbnQ9e3NjcmVlbnMuQm9udXNlc31cbiAgICAgICAgaGlkZU5hdkJhcj17dHJ1ZX1cbiAgICAgICAgdGl0bGU9XCJCb251cyBwb2ludHNcIiAvPlxuICAgICAgPFNjZW5lXG4gICAgICAgIGtleT0nc2lnblVwJ1xuICAgICAgICBjb21wb25lbnQ9e3NjcmVlbnMuU2lnblVwfVxuICAgICAgICBpbml0aWFsPXshcmVnaXN0ZXJlZH1cbiAgICAgICAgZGlyZWN0aW9uPSd2ZXJ0aWNhbCdcbiAgICAgICAgaGlkZU5hdkJhcj17dHJ1ZX1cbiAgICAgICAgaGlkZVRvb2xiYXI9e3RydWV9XG4gICAgICAgIHRpdGxlPVwiU2lnbiB1cFwiIC8+XG4gICAgICA8U2NlbmVcbiAgICAgICAga2V5PSdzY2FuUmVjZWlwdCdcbiAgICAgICAgY29tcG9uZW50PXtzY3JlZW5zLlNjYW5SZWNlaXB0fVxuICAgICAgICBoaWRlTmF2QmFyPXt0cnVlfVxuICAgICAgICB0aXRsZT1cIlNjYW4gcmVjZWlwdFwiIC8+XG4gICAgICA8U2NlbmVcbiAgICAgICAga2V5PSdyYWZmbGUnXG4gICAgICAgIGNvbXBvbmVudD17c2NyZWVucy5SYWZmbGV9XG4gICAgICAgIGhpZGVOYXZCYXI9e3RydWV9XG4gICAgICAgIHRpdGxlPVwiUmFmZmxlXCIgLz5cbiAgICAgIDxTY2VuZVxuICAgICAgICBrZXk9J2Fib3V0J1xuICAgICAgICBjb21wb25lbnQ9e3NjcmVlbnMuQWJvdXR9XG4gICAgICAgIGhpZGVOYXZCYXI9e3RydWV9XG4gICAgICAgIHRpdGxlPVwiQWJvdXRcIiAvPlxuICAgICAgPFNjZW5lXG4gICAgICAgIGtleT0nYnJvd3NlcidcbiAgICAgICAgY29tcG9uZW50PXtXZWJWaWV3fVxuICAgICAgICBoaWRlTmF2QmFyPXt0cnVlfSAvPlxuICAgIDwvU2NlbmU+XG4gIDwvUm91dGVyPmBcbiJdfQ==
