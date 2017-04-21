var BonusList, Button, Component, React, Screen, ScrollView, Text, View, gstyles, ref, styles,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, ScrollView = ref.ScrollView, Text = ref.Text;

Component = (React = require('react')).Component;

BonusList = require('../_common/bonus-list');

Button = require('../_common/button');

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

Screen = (function(superClass) {
  extend(Screen, superClass);

  function Screen() {
    return Screen.__super__.constructor.apply(this, arguments);
  }

  Screen.prototype.render = function() {
    return <ScrollView style={styles.screen} bounces={false}>
      <View style={styles.container}>
        { !this.props.registered &&
          <View>
            <Text style={[gstyles.gray, styles.description]}>Only registered users can earn bonus points!</Text>
            <Button
              title="SIGN UP"
              onPress={this.props.onSignUp}
              style={styles.button} />
          </View> ||
          <View>
            <Text style={[gstyles.gray, styles.description]}>Scan store receipts to get more bonus points!</Text>
            <Button
              title="SCAN RECEIPT"
              onPress={this.props.onScanReceipt}
              disabled={!this.props.registered}
              style={styles.button} />
          </View>
        }
        <Text style={styles.bonusPoints}>{this.props.points}</Text>
        <BonusList bonuses={this.props.bonuses} />
      </View>
    </ScrollView>;
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9ib251c2VzL3NjcmVlbi5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9ib251c2VzL3NjcmVlbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSx5RkFBQTtFQUFBOzs7QUFBQSxNQUEyQixPQUFBLENBQVEsY0FBUixDQUEzQixFQUFDLGVBQUQsRUFBTywyQkFBUCxFQUFtQjs7QUFDbEIsWUFBYSxDQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUixDQUFSOztBQUNkLFNBQUEsR0FBWSxPQUFBLENBQVEsdUJBQVI7O0FBQ1osTUFBQSxHQUFTLE9BQUEsQ0FBUSxtQkFBUjs7QUFDVCxNQUFBLEdBQVMsT0FBQSxDQUFRLFVBQVI7O0FBQ1QsT0FBQSxHQUFVLE9BQUEsQ0FBUSwwQkFBUjs7QUFHSjs7Ozs7OzttQkFDSixNQUFBLEdBQVEsU0FBQTtXQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQURNOzs7O0dBRFc7O0FBMkJyQixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIntWaWV3LCBTY3JvbGxWaWV3LCBUZXh0fSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZSdcbntDb21wb25lbnR9ID0gUmVhY3QgPSByZXF1aXJlICdyZWFjdCdcbkJvbnVzTGlzdCA9IHJlcXVpcmUgJy4uL19jb21tb24vYm9udXMtbGlzdCdcbkJ1dHRvbiA9IHJlcXVpcmUgJy4uL19jb21tb24vYnV0dG9uJ1xuc3R5bGVzID0gcmVxdWlyZSAnLi9zdHlsZXMnXG5nc3R5bGVzID0gcmVxdWlyZSAnc3JjL3N0eWxlcydcblxuXG5jbGFzcyBTY3JlZW4gZXh0ZW5kcyBDb21wb25lbnRcbiAgcmVuZGVyOiAtPlxuICAgIGA8U2Nyb2xsVmlldyBzdHlsZT17c3R5bGVzLnNjcmVlbn0gYm91bmNlcz17ZmFsc2V9PlxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7ICF0aGlzLnByb3BzLnJlZ2lzdGVyZWQgJiZcbiAgICAgICAgICA8Vmlldz5cbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtbZ3N0eWxlcy5ncmF5LCBzdHlsZXMuZGVzY3JpcHRpb25dfT5Pbmx5IHJlZ2lzdGVyZWQgdXNlcnMgY2FuIGVhcm4gYm9udXMgcG9pbnRzITwvVGV4dD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdGl0bGU9XCJTSUdOIFVQXCJcbiAgICAgICAgICAgICAgb25QcmVzcz17dGhpcy5wcm9wcy5vblNpZ25VcH1cbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5idXR0b259IC8+XG4gICAgICAgICAgPC9WaWV3PiB8fFxuICAgICAgICAgIDxWaWV3PlxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e1tnc3R5bGVzLmdyYXksIHN0eWxlcy5kZXNjcmlwdGlvbl19PlNjYW4gc3RvcmUgcmVjZWlwdHMgdG8gZ2V0IG1vcmUgYm9udXMgcG9pbnRzITwvVGV4dD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdGl0bGU9XCJTQ0FOIFJFQ0VJUFRcIlxuICAgICAgICAgICAgICBvblByZXNzPXt0aGlzLnByb3BzLm9uU2NhblJlY2VpcHR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5wcm9wcy5yZWdpc3RlcmVkfVxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmJ1dHRvbn0gLz5cbiAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIH1cbiAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5ib251c1BvaW50c30+e3RoaXMucHJvcHMucG9pbnRzfTwvVGV4dD5cbiAgICAgICAgPEJvbnVzTGlzdCBib251c2VzPXt0aGlzLnByb3BzLmJvbnVzZXN9IC8+XG4gICAgICA8L1ZpZXc+XG4gICAgPC9TY3JvbGxWaWV3PmBcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcmVlblxuIl19
