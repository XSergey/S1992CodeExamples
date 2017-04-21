var Linking, Platform, formatUrl, openMap, openMapAndroid, openMapIOS, openUrl, ref;

formatUrl = require('url').format;

ref = require('react-native'), Linking = ref.Linking, Platform = ref.Platform;

openUrl = function(url) {
  return Linking.canOpenURL(url).then(function(supported) {
    if (supported) {
      return Linking.openURL(url);
    }
  });
};

openMap = function() {
  switch (Platform.OS) {
    case 'android':
      return openMapAndroid.apply(null, arguments);
    case 'ios':
      return openMapIOS.apply(null, arguments);
  }
};

openMapIOS = function(location, route) {
  var query;
  if (route == null) {
    route = false;
  }
  query = {};
  query.ll = location.lat + "," + location.long;
  query.q = location.label;
  query.z = 11;
  return openUrl(formatUrl({
    protocol: 'http',
    host: 'maps.apple.com',
    query: query
  }));
};

openMapAndroid = function(location, route) {
  var protocol, query;
  if (route == null) {
    route = false;
  }
  query = {};
  if (location) {
    if (location.long && location.lat) {
      query.q = location.lat + "," + location.long;
      if (!route) {
        query.q += "(" + location.label + ")";
      }
    } else {
      query.q = location;
    }
  }
  protocol = route ? 'google.navigation' : 'geo';
  return openUrl(formatUrl({
    protocol: protocol,
    query: query
  }));
};

module.exports = {
  openUrl: openUrl,
  openMap: openMap
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicy9saW5raW5nLmpzIiwic291cmNlcyI6WyJsaWJzL2xpbmtpbmcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQVMsWUFBYSxPQUFBLENBQVEsS0FBUixFQUFyQjs7QUFDRCxNQUFzQixPQUFBLENBQVEsY0FBUixDQUF0QixFQUFDLHFCQUFELEVBQVU7O0FBR1YsT0FBQSxHQUFVLFNBQUMsR0FBRDtTQUNSLE9BQU8sQ0FBQyxVQUFSLENBQW1CLEdBQW5CLENBQXVCLENBQUMsSUFBeEIsQ0FBNkIsU0FBQyxTQUFEO0lBQzNCLElBQUcsU0FBSDthQUNFLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEdBQWhCLEVBREY7O0VBRDJCLENBQTdCO0FBRFE7O0FBTVYsT0FBQSxHQUFVLFNBQUE7QUFDUixVQUFPLFFBQVEsQ0FBQyxFQUFoQjtBQUFBLFNBQ08sU0FEUDthQUNzQixjQUFBLGFBQWUsU0FBZjtBQUR0QixTQUVPLEtBRlA7YUFFa0IsVUFBQSxhQUFXLFNBQVg7QUFGbEI7QUFEUTs7QUFNVixVQUFBLEdBQWEsU0FBQyxRQUFELEVBQVcsS0FBWDtBQUNYLE1BQUE7O0lBRHNCLFFBQU07O0VBQzVCLEtBQUEsR0FBUTtFQUVSLEtBQUssQ0FBQyxFQUFOLEdBQWMsUUFBUSxDQUFDLEdBQVYsR0FBYyxHQUFkLEdBQWlCLFFBQVEsQ0FBQztFQUN2QyxLQUFLLENBQUMsQ0FBTixHQUFVLFFBQVEsQ0FBQztFQUNuQixLQUFLLENBQUMsQ0FBTixHQUFVO1NBRVYsT0FBQSxDQUFRLFNBQUEsQ0FDTjtJQUFBLFFBQUEsRUFBVSxNQUFWO0lBQ0EsSUFBQSxFQUFNLGdCQUROO0lBRUEsS0FBQSxFQUFPLEtBRlA7R0FETSxDQUFSO0FBUFc7O0FBYWIsY0FBQSxHQUFpQixTQUFDLFFBQUQsRUFBVyxLQUFYO0FBQ2YsTUFBQTs7SUFEMEIsUUFBTTs7RUFDaEMsS0FBQSxHQUFRO0VBRVIsSUFBRyxRQUFIO0lBQ0UsSUFBRyxRQUFRLENBQUMsSUFBVCxJQUFrQixRQUFRLENBQUMsR0FBOUI7TUFDRSxLQUFLLENBQUMsQ0FBTixHQUFhLFFBQVEsQ0FBQyxHQUFWLEdBQWMsR0FBZCxHQUFpQixRQUFRLENBQUM7TUFDdEMsSUFBRyxDQUFJLEtBQVA7UUFBa0IsS0FBSyxDQUFDLENBQU4sSUFBVyxHQUFBLEdBQUksUUFBUSxDQUFDLEtBQWIsR0FBbUIsSUFBaEQ7T0FGRjtLQUFBLE1BQUE7TUFJRSxLQUFLLENBQUMsQ0FBTixHQUFVLFNBSlo7S0FERjs7RUFPQSxRQUFBLEdBQWMsS0FBSCxHQUFjLG1CQUFkLEdBQXVDO1NBQ2xELE9BQUEsQ0FBUSxTQUFBLENBQVU7SUFBQyxVQUFBLFFBQUQ7SUFBVyxPQUFBLEtBQVg7R0FBVixDQUFSO0FBWGU7O0FBY2pCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0VBQ2IsU0FBQSxPQURhO0VBRWIsU0FBQSxPQUZhIiwic291cmNlc0NvbnRlbnQiOlsie2Zvcm1hdDogZm9ybWF0VXJsfSA9IHJlcXVpcmUgJ3VybCdcbntMaW5raW5nLCBQbGF0Zm9ybX0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG5cblxub3BlblVybCA9ICh1cmwpIC0+XG4gIExpbmtpbmcuY2FuT3BlblVSTCh1cmwpLnRoZW4gKHN1cHBvcnRlZCkgLT5cbiAgICBpZiBzdXBwb3J0ZWRcbiAgICAgIExpbmtpbmcub3BlblVSTCh1cmwpXG5cblxub3Blbk1hcCA9IC0+XG4gIHN3aXRjaCBQbGF0Zm9ybS5PU1xuICAgIHdoZW4gJ2FuZHJvaWQnIHRoZW4gb3Blbk1hcEFuZHJvaWQoYXJndW1lbnRzLi4uKVxuICAgIHdoZW4gJ2lvcycgdGhlbiBvcGVuTWFwSU9TKGFyZ3VtZW50cy4uLilcblxuXG5vcGVuTWFwSU9TID0gKGxvY2F0aW9uLCByb3V0ZT1ubykgLT5cbiAgcXVlcnkgPSB7fVxuXG4gIHF1ZXJ5LmxsID0gXCIje2xvY2F0aW9uLmxhdH0sI3tsb2NhdGlvbi5sb25nfVwiXG4gIHF1ZXJ5LnEgPSBsb2NhdGlvbi5sYWJlbFxuICBxdWVyeS56ID0gMTFcblxuICBvcGVuVXJsIGZvcm1hdFVybFxuICAgIHByb3RvY29sOiAnaHR0cCdcbiAgICBob3N0OiAnbWFwcy5hcHBsZS5jb20nXG4gICAgcXVlcnk6IHF1ZXJ5XG5cblxub3Blbk1hcEFuZHJvaWQgPSAobG9jYXRpb24sIHJvdXRlPW5vKSAtPlxuICBxdWVyeSA9IHt9XG5cbiAgaWYgbG9jYXRpb25cbiAgICBpZiBsb2NhdGlvbi5sb25nIGFuZCBsb2NhdGlvbi5sYXRcbiAgICAgIHF1ZXJ5LnEgPSBcIiN7bG9jYXRpb24ubGF0fSwje2xvY2F0aW9uLmxvbmd9XCJcbiAgICAgIGlmIG5vdCByb3V0ZSB0aGVuIHF1ZXJ5LnEgKz0gXCIoI3tsb2NhdGlvbi5sYWJlbH0pXCJcbiAgICBlbHNlXG4gICAgICBxdWVyeS5xID0gbG9jYXRpb25cblxuICBwcm90b2NvbCA9IGlmIHJvdXRlIHRoZW4gJ2dvb2dsZS5uYXZpZ2F0aW9uJyBlbHNlICdnZW8nXG4gIG9wZW5VcmwgZm9ybWF0VXJsIHtwcm90b2NvbCwgcXVlcnl9XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgb3BlblVybFxuICAgIG9wZW5NYXBcbn1cbiJdfQ==
