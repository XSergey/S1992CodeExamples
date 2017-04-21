var Component, IconButton, Image, React, Screen, ScrollView, Text, TouchableOpacity, View, gstyles, ref, styles,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), ScrollView = ref.ScrollView, Image = ref.Image, View = ref.View, Text = ref.Text, TouchableOpacity = ref.TouchableOpacity;

Component = (React = require('react')).Component;

IconButton = require('../../_common/icon-button');

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

Screen = (function(superClass) {
  extend(Screen, superClass);

  function Screen() {
    return Screen.__super__.constructor.apply(this, arguments);
  }

  Screen.defaultProps = {
    onParking: function() {}
  };

  Screen.prototype.render = function() {
    var hasParking, ref1;
    hasParking = ((ref1 = this.props.place.parking) != null ? ref1.length : void 0) !== 0;
    return <ScrollView style={styles.screen}>
      { hasParking &&
        <IconButton
          title="PARKING"
          icon='local-parking'
          onPress={() => this.props.onParking(this.props.id)} />
      }
      <Image source={{uri: this.props.place.logo}} style={styles.logo} />
      <Text style={[gstyles.gray, styles.description]}>{this.props.place.description}</Text>
    </ScrollView>;
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wbGFjZS9kZXRhaWwvc2NyZWVuLmpzIiwic291cmNlcyI6WyJzY3JlZW5zL3BsYWNlL2RldGFpbC9zY3JlZW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsMkdBQUE7RUFBQTs7O0FBQUEsTUFNSSxPQUFBLENBQVEsY0FBUixDQU5KLEVBQ0UsMkJBREYsRUFFRSxpQkFGRixFQUdFLGVBSEYsRUFJRSxlQUpGLEVBS0U7O0FBRUQsWUFBYSxDQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUixDQUFSOztBQUNkLFVBQUEsR0FBYSxPQUFBLENBQVEsMkJBQVI7O0FBQ2IsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUNULE9BQUEsR0FBVSxPQUFBLENBQVEsMEJBQVI7O0FBR0o7Ozs7Ozs7RUFDSixNQUFDLENBQUEsWUFBRCxHQUNFO0lBQUEsU0FBQSxFQUFXLFNBQUEsR0FBQSxDQUFYOzs7bUJBR0YsTUFBQSxHQUFRLFNBQUE7QUFDTixRQUFBO0lBQUEsVUFBQSxvREFBaUMsQ0FBRSxnQkFBdEIsS0FBa0M7V0FFL0M7Ozs7Ozs7Ozs7RUFITTs7OztHQUxXOztBQW9CckIsTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJ7XG4gIFNjcm9sbFZpZXdcbiAgSW1hZ2VcbiAgVmlld1xuICBUZXh0XG4gIFRvdWNoYWJsZU9wYWNpdHlcbn0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Q29tcG9uZW50fSA9IFJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG5JY29uQnV0dG9uID0gcmVxdWlyZSAnLi4vLi4vX2NvbW1vbi9pY29uLWJ1dHRvbidcbnN0eWxlcyA9IHJlcXVpcmUgJy4vc3R5bGVzJ1xuZ3N0eWxlcyA9IHJlcXVpcmUgJ3NyYy9zdHlsZXMnXG5cblxuY2xhc3MgU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50XG4gIEBkZWZhdWx0UHJvcHM6XG4gICAgb25QYXJraW5nOiAtPlxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIGhhc1BhcmtpbmcgPSBAcHJvcHMucGxhY2UucGFya2luZz8ubGVuZ3RoIGlzbnQgMFxuXG4gICAgYDxTY3JvbGxWaWV3IHN0eWxlPXtzdHlsZXMuc2NyZWVufT5cbiAgICAgIHsgaGFzUGFya2luZyAmJlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIHRpdGxlPVwiUEFSS0lOR1wiXG4gICAgICAgICAgaWNvbj0nbG9jYWwtcGFya2luZydcbiAgICAgICAgICBvblByZXNzPXsoKSA9PiB0aGlzLnByb3BzLm9uUGFya2luZyh0aGlzLnByb3BzLmlkKX0gLz5cbiAgICAgIH1cbiAgICAgIDxJbWFnZSBzb3VyY2U9e3t1cmk6IHRoaXMucHJvcHMucGxhY2UubG9nb319IHN0eWxlPXtzdHlsZXMubG9nb30gLz5cbiAgICAgIDxUZXh0IHN0eWxlPXtbZ3N0eWxlcy5ncmF5LCBzdHlsZXMuZGVzY3JpcHRpb25dfT57dGhpcy5wcm9wcy5wbGFjZS5kZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgPC9TY3JvbGxWaWV3PmBcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcmVlblxuIl19
