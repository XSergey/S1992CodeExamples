var BonusList, Button, Component, Icon, React, Screen, ScrollView, Separator, SocialNetworks, Text, TextButton, View, gstyles, ref, styles,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ref = require('react-native'), View = ref.View, Text = ref.Text, ScrollView = ref.ScrollView;

Component = (React = require('react')).Component;

Icon = require('react-native-vector-icons/MaterialIcons');

TextButton = require('react-native-material-design').Button;

Button = require('../_common/button');

BonusList = require('../_common/bonus-list');

SocialNetworks = require('./_common/social');

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

Separator = (function(superClass) {
  extend(Separator, superClass);

  function Separator() {
    return Separator.__super__.constructor.apply(this, arguments);
  }

  Separator.prototype.render = function() {
    return <View style={styles.separator} />;
  };

  return Separator;

})(Component);

Screen = (function(superClass) {
  extend(Screen, superClass);

  function Screen() {
    this.moreBonuses = bind(this.moreBonuses, this);
    return Screen.__super__.constructor.apply(this, arguments);
  }

  Screen.prototype.render = function() {
    return <ScrollView style={styles.screen} bounces={false}>
      <View style={styles.container}>
        { !this.props.registered &&
          <Button
            title="SIGN UP"
            onPress={this.props.onSignUp}
            style={styles.signUpButton} /> ||
          <View style={styles.infoContainer}>
            <Text style={[gstyles.gray, styles.infoHeader]}>Phone number</Text>
            <Separator />
            <View style={styles.phoneContainer}>
              <Icon name='phone' size={28} style={gstyles.gray}/>
              <Text style={[gstyles.gray, styles.phone]}>{this.props.phone}</Text>
            </View>
          </View>
        }


        <View style={styles.infoContainer}>
          <Text style={[gstyles.gray, styles.infoHeader]}>Bonus points</Text>
          <Separator />
          <View style={styles.bonus}>
            <Text style={styles.bonusPoints}>{this.props.points}</Text>
            <TextButton
              text="SHOW ALL"
              overrides={styles.extra.bonusMoreButton}
              onPress={this.moreBonuses} />
          </View>
          <BonusList bonuses={this.props.bonuses} />
        </View>
      </View>
    </ScrollView>;
  };

  Screen.prototype.moreBonuses = function() {
    var base;
    return typeof (base = this.props).onMoreBonuses === "function" ? base.onMoreBonuses() : void 0;
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wcm9maWxlL3NjcmVlbi5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9wcm9maWxlL3NjcmVlbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxzSUFBQTtFQUFBOzs7O0FBQUEsTUFBMkIsT0FBQSxDQUFRLGNBQVIsQ0FBM0IsRUFBQyxlQUFELEVBQU8sZUFBUCxFQUFhOztBQUNaLFlBQWEsQ0FBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLE9BQVIsQ0FBUjs7QUFDZCxJQUFBLEdBQU8sT0FBQSxDQUFRLHlDQUFSOztBQUNFLGFBQWMsT0FBQSxDQUFRLDhCQUFSLEVBQXRCOztBQUNELE1BQUEsR0FBUyxPQUFBLENBQVEsbUJBQVI7O0FBQ1QsU0FBQSxHQUFZLE9BQUEsQ0FBUSx1QkFBUjs7QUFDWixjQUFBLEdBQWlCLE9BQUEsQ0FBUSxrQkFBUjs7QUFDakIsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUNULE9BQUEsR0FBVSxPQUFBLENBQVEsMEJBQVI7O0FBR0o7Ozs7Ozs7c0JBQ0osTUFBQSxHQUFRLFNBQUE7V0FDTjtFQURNOzs7O0dBRGM7O0FBS2xCOzs7Ozs7OzttQkFDSixNQUFBLEdBQVEsU0FBQTtXQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQURNOzttQkFtQ1IsV0FBQSxHQUFhLFNBQUE7QUFDWCxRQUFBO3lFQUFNLENBQUM7RUFESTs7OztHQXBDTTs7QUF3Q3JCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCIiwic291cmNlc0NvbnRlbnQiOlsie1ZpZXcsIFRleHQsIFNjcm9sbFZpZXd9ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlJ1xue0NvbXBvbmVudH0gPSBSZWFjdCA9IHJlcXVpcmUgJ3JlYWN0J1xuSWNvbiA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS12ZWN0b3ItaWNvbnMvTWF0ZXJpYWxJY29ucydcbntCdXR0b246IFRleHRCdXR0b259ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLW1hdGVyaWFsLWRlc2lnbidcbkJ1dHRvbiA9IHJlcXVpcmUgJy4uL19jb21tb24vYnV0dG9uJ1xuQm9udXNMaXN0ID0gcmVxdWlyZSAnLi4vX2NvbW1vbi9ib251cy1saXN0J1xuU29jaWFsTmV0d29ya3MgPSByZXF1aXJlICcuL19jb21tb24vc29jaWFsJ1xuc3R5bGVzID0gcmVxdWlyZSAnLi9zdHlsZXMnXG5nc3R5bGVzID0gcmVxdWlyZSAnc3JjL3N0eWxlcydcblxuXG5jbGFzcyBTZXBhcmF0b3IgZXh0ZW5kcyBDb21wb25lbnRcbiAgcmVuZGVyOiAtPlxuICAgIGA8VmlldyBzdHlsZT17c3R5bGVzLnNlcGFyYXRvcn0gLz5gXG5cblxuY2xhc3MgU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50XG4gIHJlbmRlcjogLT5cbiAgICBgPFNjcm9sbFZpZXcgc3R5bGU9e3N0eWxlcy5zY3JlZW59IGJvdW5jZXM9e2ZhbHNlfT5cbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgeyAhdGhpcy5wcm9wcy5yZWdpc3RlcmVkICYmXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdGl0bGU9XCJTSUdOIFVQXCJcbiAgICAgICAgICAgIG9uUHJlc3M9e3RoaXMucHJvcHMub25TaWduVXB9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLnNpZ25VcEJ1dHRvbn0gLz4gfHxcbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmluZm9Db250YWluZXJ9PlxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e1tnc3R5bGVzLmdyYXksIHN0eWxlcy5pbmZvSGVhZGVyXX0+UGhvbmUgbnVtYmVyPC9UZXh0PlxuICAgICAgICAgICAgPFNlcGFyYXRvciAvPlxuICAgICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5waG9uZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9J3Bob25lJyBzaXplPXsyOH0gc3R5bGU9e2dzdHlsZXMuZ3JheX0vPlxuICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17W2dzdHlsZXMuZ3JheSwgc3R5bGVzLnBob25lXX0+e3RoaXMucHJvcHMucGhvbmV9PC9UZXh0PlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5pbmZvQ29udGFpbmVyfT5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17W2dzdHlsZXMuZ3JheSwgc3R5bGVzLmluZm9IZWFkZXJdfT5Cb251cyBwb2ludHM8L1RleHQ+XG4gICAgICAgICAgPFNlcGFyYXRvciAvPlxuICAgICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuYm9udXN9PlxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5ib251c1BvaW50c30+e3RoaXMucHJvcHMucG9pbnRzfTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0QnV0dG9uXG4gICAgICAgICAgICAgIHRleHQ9XCJTSE9XIEFMTFwiXG4gICAgICAgICAgICAgIG92ZXJyaWRlcz17c3R5bGVzLmV4dHJhLmJvbnVzTW9yZUJ1dHRvbn1cbiAgICAgICAgICAgICAgb25QcmVzcz17dGhpcy5tb3JlQm9udXNlc30gLz5cbiAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgICAgPEJvbnVzTGlzdCBib251c2VzPXt0aGlzLnByb3BzLmJvbnVzZXN9IC8+XG4gICAgICAgIDwvVmlldz5cbiAgICAgIDwvVmlldz5cbiAgICA8L1Njcm9sbFZpZXc+YFxuXG5cbiAgbW9yZUJvbnVzZXM6ID0+XG4gICAgQHByb3BzLm9uTW9yZUJvbnVzZXM/KClcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcmVlblxuIl19
