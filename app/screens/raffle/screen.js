var Button, Component, Icon, Image, Linking, Platform, React, Screen, ScrollView, Text, TouchableOpacity, View, bold, colors, gstyles, ref, styles,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, Text = ref.Text, Image = ref.Image, ScrollView = ref.ScrollView, TouchableOpacity = ref.TouchableOpacity, Linking = ref.Linking, Platform = ref.Platform;

Component = (React = require('react')).Component;

Icon = require('react-native-vector-icons/MaterialIcons');

Button = require('../_common/button');

styles = require('./styles');

colors = require('bawadi-client/app/colors');

bold = (gstyles = require('bawadi-client/app/styles')).bold;

Screen = (function(superClass) {
  extend(Screen, superClass);

  function Screen() {
    return Screen.__super__.constructor.apply(this, arguments);
  }

  Screen.prototype.render = function() {
    var canBuyTicket;
    canBuyTicket = this.props.enoughPoints && this.props.activeRaffle;
    return <ScrollView style={styles.screen} bounces={false}>
      <Image
        source={require('bawadi-client/app/res/images/raffle.jpg')}
        style={styles.image} />
      <Text style={gstyles.gray}>
        <Text style={bold}>WIN AED 3000 DAILY{'\n\n'}</Text>

        {this.props.description}
      </Text>

      <Text style={[gstyles.gray, styles.info]}>
        <Text onPress={this.openTerms} style={[bold, {textDecorationLine: 'underline'}]}>
          Full raffle terms you can find here.
        </Text>{" "}
        { Platform.OS === 'ios' &&
          <Text style={gstyles.gray}>
            Apple are not involved in any way with the raffle.
          </Text>
        }
      </Text>

      { !this.props.activeRaffle &&
        <Text style={[gstyles.gray, styles.info]}>
          Raffle is not active now. Please wait for next raffle.
        </Text>
      }

      { !this.props.enoughPoints &&
        <Text style={[gstyles.gray, styles.info]}>
          You have no enough bonus points to get raffle entry. Press <Text style={bold}>GET MORE POINTS</Text> to earn bonus points.
        </Text>
      }

      { !!this.props.activeRaffle &&
        <Text style={styles.activeRaffle}>
          {this.props.activeRaffle.title}
        </Text>
      }

      <View style={styles.bonus}>
        <Text style={styles.bonusPoints}>
          {this.props.points + " points"}
        </Text>
        <View style={styles.tickets}>
          <Icon
            name='local-play'
            size={36}
            color={colors.orange}
            style={styles.ticketsIcon} />
          <Text style={styles.ticketsText}> x {this.props.ticketCount}</Text>
        </View>
      </View>

      <Button
        title={"GET RAFFLE DRAW ENTRY (" + this.props.ticketPrice + " POINTS)"}
        onPress={this.props.onBuyTicket}
        disabled={!canBuyTicket}
        style={[styles.button, styles.firstButton]} />
      <Button
        title="GET MORE POINTS"
        onPress={this.props.onGetBonuses}
        style={styles.button} />
    </ScrollView>;
  };

  Screen.prototype.openTerms = function() {
    var url;
    url = "http://bawadimall.com/leasing.php";
    return Linking.canOpenURL(url).then(function(supported) {
      if (supported) {
        return Linking.openURL(url);
      }
    });
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9yYWZmbGUvc2NyZWVuLmpzIiwic291cmNlcyI6WyJzY3JlZW5zL3JhZmZsZS9zY3JlZW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsOElBQUE7RUFBQTs7O0FBQUEsTUFRSSxPQUFBLENBQVEsY0FBUixDQVJKLEVBQ0UsZUFERixFQUVFLGVBRkYsRUFHRSxpQkFIRixFQUlFLDJCQUpGLEVBS0UsdUNBTEYsRUFNRSxxQkFORixFQU9FOztBQUVELFlBQWEsQ0FBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLE9BQVIsQ0FBUjs7QUFDZCxJQUFBLEdBQU8sT0FBQSxDQUFRLHlDQUFSOztBQUNQLE1BQUEsR0FBUyxPQUFBLENBQVEsbUJBQVI7O0FBQ1QsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUNULE1BQUEsR0FBUyxPQUFBLENBQVEsMEJBQVI7O0FBQ1IsT0FBUSxDQUFBLE9BQUEsR0FBVSxPQUFBLENBQVEsMEJBQVIsQ0FBVjs7QUFHSDs7Ozs7OzttQkFDSixNQUFBLEdBQVEsU0FBQTtBQUNOLFFBQUE7SUFBQSxZQUFBLEdBQWUsSUFBQyxDQUFBLEtBQUssQ0FBQyxZQUFQLElBQXdCLElBQUMsQ0FBQSxLQUFLLENBQUM7V0FFOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUhNOzttQkFvRVIsU0FBQSxHQUFXLFNBQUE7QUFDVCxRQUFBO0lBQUEsR0FBQSxHQUFNO1dBQ04sT0FBTyxDQUFDLFVBQVIsQ0FBbUIsR0FBbkIsQ0FBdUIsQ0FBQyxJQUF4QixDQUE2QixTQUFDLFNBQUQ7TUFDM0IsSUFBRyxTQUFIO2VBQ0UsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsR0FBaEIsRUFERjs7SUFEMkIsQ0FBN0I7RUFGUzs7OztHQXJFUTs7QUE0RXJCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCIiwic291cmNlc0NvbnRlbnQiOlsie1xuICBWaWV3XG4gIFRleHRcbiAgSW1hZ2VcbiAgU2Nyb2xsVmlld1xuICBUb3VjaGFibGVPcGFjaXR5XG4gIExpbmtpbmdcbiAgUGxhdGZvcm1cbn0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Q29tcG9uZW50fSA9IFJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG5JY29uID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXZlY3Rvci1pY29ucy9NYXRlcmlhbEljb25zJ1xuQnV0dG9uID0gcmVxdWlyZSAnLi4vX2NvbW1vbi9idXR0b24nXG5zdHlsZXMgPSByZXF1aXJlICcuL3N0eWxlcydcbmNvbG9ycyA9IHJlcXVpcmUgJ3NyYy9jb2xvcnMnXG57Ym9sZH0gPSBnc3R5bGVzID0gcmVxdWlyZSAnc3JjL3N0eWxlcydcblxuXG5jbGFzcyBTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnRcbiAgcmVuZGVyOiAtPlxuICAgIGNhbkJ1eVRpY2tldCA9IEBwcm9wcy5lbm91Z2hQb2ludHMgYW5kIEBwcm9wcy5hY3RpdmVSYWZmbGVcblxuICAgIGA8U2Nyb2xsVmlldyBzdHlsZT17c3R5bGVzLnNjcmVlbn0gYm91bmNlcz17ZmFsc2V9PlxuICAgICAgPEltYWdlXG4gICAgICAgIHNvdXJjZT17cmVxdWlyZSgnc3JjL3Jlcy9pbWFnZXMvcmFmZmxlLmpwZycpfVxuICAgICAgICBzdHlsZT17c3R5bGVzLmltYWdlfSAvPlxuICAgICAgPFRleHQgc3R5bGU9e2dzdHlsZXMuZ3JheX0+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtib2xkfT5XSU4gQUVEIDMwMDAgREFJTFl7J1xcblxcbid9PC9UZXh0PlxuXG4gICAgICAgIHt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgPC9UZXh0PlxuXG4gICAgICA8VGV4dCBzdHlsZT17W2dzdHlsZXMuZ3JheSwgc3R5bGVzLmluZm9dfT5cbiAgICAgICAgPFRleHQgb25QcmVzcz17dGhpcy5vcGVuVGVybXN9IHN0eWxlPXtbYm9sZCwge3RleHREZWNvcmF0aW9uTGluZTogJ3VuZGVybGluZSd9XX0+XG4gICAgICAgICAgRnVsbCByYWZmbGUgdGVybXMgeW91IGNhbiBmaW5kIGhlcmUuXG4gICAgICAgIDwvVGV4dD57XCIgXCJ9XG4gICAgICAgIHsgUGxhdGZvcm0uT1MgPT09ICdpb3MnICYmXG4gICAgICAgICAgPFRleHQgc3R5bGU9e2dzdHlsZXMuZ3JheX0+XG4gICAgICAgICAgICBBcHBsZSBhcmUgbm90IGludm9sdmVkIGluIGFueSB3YXkgd2l0aCB0aGUgcmFmZmxlLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgfVxuICAgICAgPC9UZXh0PlxuXG4gICAgICB7ICF0aGlzLnByb3BzLmFjdGl2ZVJhZmZsZSAmJlxuICAgICAgICA8VGV4dCBzdHlsZT17W2dzdHlsZXMuZ3JheSwgc3R5bGVzLmluZm9dfT5cbiAgICAgICAgICBSYWZmbGUgaXMgbm90IGFjdGl2ZSBub3cuIFBsZWFzZSB3YWl0IGZvciBuZXh0IHJhZmZsZS5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgfVxuXG4gICAgICB7ICF0aGlzLnByb3BzLmVub3VnaFBvaW50cyAmJlxuICAgICAgICA8VGV4dCBzdHlsZT17W2dzdHlsZXMuZ3JheSwgc3R5bGVzLmluZm9dfT5cbiAgICAgICAgICBZb3UgaGF2ZSBubyBlbm91Z2ggYm9udXMgcG9pbnRzIHRvIGdldCByYWZmbGUgZW50cnkuIFByZXNzIDxUZXh0IHN0eWxlPXtib2xkfT5HRVQgTU9SRSBQT0lOVFM8L1RleHQ+IHRvIGVhcm4gYm9udXMgcG9pbnRzLlxuICAgICAgICA8L1RleHQ+XG4gICAgICB9XG5cbiAgICAgIHsgISF0aGlzLnByb3BzLmFjdGl2ZVJhZmZsZSAmJlxuICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmFjdGl2ZVJhZmZsZX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuYWN0aXZlUmFmZmxlLnRpdGxlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICB9XG5cbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuYm9udXN9PlxuICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmJvbnVzUG9pbnRzfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5wb2ludHMgKyBcIiBwb2ludHNcIn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLnRpY2tldHN9PlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBuYW1lPSdsb2NhbC1wbGF5J1xuICAgICAgICAgICAgc2l6ZT17MzZ9XG4gICAgICAgICAgICBjb2xvcj17Y29sb3JzLm9yYW5nZX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMudGlja2V0c0ljb259IC8+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50aWNrZXRzVGV4dH0+IHgge3RoaXMucHJvcHMudGlja2V0Q291bnR9PC9UZXh0PlxuICAgICAgICA8L1ZpZXc+XG4gICAgICA8L1ZpZXc+XG5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdGl0bGU9e1wiR0VUIFJBRkZMRSBEUkFXIEVOVFJZIChcIiArIHRoaXMucHJvcHMudGlja2V0UHJpY2UgKyBcIiBQT0lOVFMpXCJ9XG4gICAgICAgIG9uUHJlc3M9e3RoaXMucHJvcHMub25CdXlUaWNrZXR9XG4gICAgICAgIGRpc2FibGVkPXshY2FuQnV5VGlja2V0fVxuICAgICAgICBzdHlsZT17W3N0eWxlcy5idXR0b24sIHN0eWxlcy5maXJzdEJ1dHRvbl19IC8+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHRpdGxlPVwiR0VUIE1PUkUgUE9JTlRTXCJcbiAgICAgICAgb25QcmVzcz17dGhpcy5wcm9wcy5vbkdldEJvbnVzZXN9XG4gICAgICAgIHN0eWxlPXtzdHlsZXMuYnV0dG9ufSAvPlxuICAgIDwvU2Nyb2xsVmlldz5gXG5cblxuICBvcGVuVGVybXM6IC0+XG4gICAgdXJsID0gXCJodHRwOi8vYmF3YWRpbWFsbC5jb20vbGVhc2luZy5waHBcIlxuICAgIExpbmtpbmcuY2FuT3BlblVSTCh1cmwpLnRoZW4gKHN1cHBvcnRlZCkgLT5cbiAgICAgIGlmIHN1cHBvcnRlZFxuICAgICAgICBMaW5raW5nLm9wZW5VUkwodXJsKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gU2NyZWVuXG4iXX0=
