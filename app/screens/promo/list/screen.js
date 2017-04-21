var Button, Card, Component, Image, ListView, Media, React, Screen, TYPO, Text, TouchableOpacity, View, gstyles, ref, ref1, styles,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), ListView = ref.ListView, View = ref.View, Text = ref.Text, Image = ref.Image, TouchableOpacity = ref.TouchableOpacity;

Component = (React = require('react')).Component;

ref1 = require('react-native-material-design'), Card = ref1.Card, Button = ref1.Button, TYPO = ref1.TYPO;

Media = require('./card')["default"];

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

Screen = (function(superClass) {
  extend(Screen, superClass);

  Screen.defaultProps = {
    promos: []
  };

  function Screen(props) {
    this.share = bind(this.share, this);
    this.select = bind(this.select, this);
    this.renderPromo = bind(this.renderPromo, this);
    var dataSource;
    Screen.__super__.constructor.apply(this, arguments);
    dataSource = new ListView.DataSource({
      rowHasChanged: function(r1, r2) {
        return r1 !== r2;
      }
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(props.promos)
    };
  }

  Screen.prototype.componentWillReceiveProps = function(nextProps) {
    var promos;
    promos = nextProps.promos || Screen.defaultProps.promos;
    return this.setState({
      dataSource: this.state.dataSource.cloneWithRows(promos)
    });
  };

  Screen.prototype.render = function() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderPromo}
      enableEmptySections={true}
      style={styles.list} />;
  };

  Screen.prototype.renderPromo = function(promo) {
    return <Card>
      <Media image={<Image source={{uri: promo.image}} />} height={300} overlay>
        <Text style={[TYPO.paperFontHeadline, styles.title]}>{promo.title}</Text>
      </Media>
      <Card.Body>
        <Text style={gstyles.gray}>{promo.description}</Text>
      </Card.Body>
      { (promo.browserLink || promo.shareLink) &&
        <Card.Actions position='right'>
          { promo.browserLink &&
            <Button overrides={styles.extra.buttonStyle} text="OPEN" onPress={this.select(promo.id)}/>
          }
          { promo.shareLink &&
            <Button overrides={styles.extra.buttonStyle} text="SHARE" onPress={this.share(promo.id)}/>
          }
        </Card.Actions>
      }
    </Card>;
  };

  Screen.prototype.select = function(id) {
    return (function(_this) {
      return function() {
        var base;
        return typeof (base = _this.props).onSelect === "function" ? base.onSelect(id) : void 0;
      };
    })(this);
  };

  Screen.prototype.share = function(id) {
    return (function(_this) {
      return function() {
        var base;
        return typeof (base = _this.props).onShare === "function" ? base.onShare(id) : void 0;
      };
    })(this);
  };

  return Screen;

})(Component);

module.exports = Screen;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wcm9tby9saXN0L3NjcmVlbi5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9wcm9tby9saXN0L3NjcmVlbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSw4SEFBQTtFQUFBOzs7O0FBQUEsTUFNSSxPQUFBLENBQVEsY0FBUixDQU5KLEVBQ0UsdUJBREYsRUFFRSxlQUZGLEVBR0UsZUFIRixFQUlFLGlCQUpGLEVBS0U7O0FBRUQsWUFBYSxDQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUixDQUFSOztBQUNkLE9BQXVCLE9BQUEsQ0FBUSw4QkFBUixDQUF2QixFQUFDLGdCQUFELEVBQU8sb0JBQVAsRUFBZTs7QUFDTCxRQUFTLE9BQUEsQ0FBUSxRQUFSLEdBQWxCOztBQUNELE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFDVCxPQUFBLEdBQVUsT0FBQSxDQUFRLDBCQUFSOztBQUdKOzs7RUFDSixNQUFDLENBQUEsWUFBRCxHQUNFO0lBQUEsTUFBQSxFQUFRLEVBQVI7OztFQUdXLGdCQUFDLEtBQUQ7Ozs7QUFDWCxRQUFBO0lBQUEseUNBQUEsU0FBQTtJQUNBLFVBQUEsR0FBYSxJQUFJLFFBQVEsQ0FBQyxVQUFiLENBQXdCO01BQUEsYUFBQSxFQUFlLFNBQUMsRUFBRCxFQUFLLEVBQUw7ZUFBWSxFQUFBLEtBQVE7TUFBcEIsQ0FBZjtLQUF4QjtJQUNiLElBQUMsQ0FBQSxLQUFELEdBQVM7TUFBQSxVQUFBLEVBQVksVUFBVSxDQUFDLGFBQVgsQ0FBeUIsS0FBSyxDQUFDLE1BQS9CLENBQVo7O0VBSEU7O21CQU1iLHlCQUFBLEdBQTJCLFNBQUMsU0FBRDtBQUN6QixRQUFBO0lBQUEsTUFBQSxHQUFTLFNBQVMsQ0FBQyxNQUFWLElBQW9CLE1BQU0sQ0FBQyxZQUFZLENBQUM7V0FDakQsSUFBQyxDQUFBLFFBQUQsQ0FBVTtNQUFBLFVBQUEsRUFBWSxJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFsQixDQUFnQyxNQUFoQyxDQUFaO0tBQVY7RUFGeUI7O21CQUszQixNQUFBLEdBQVEsU0FBQTtXQUNOOzs7OztFQURNOzttQkFRUixXQUFBLEdBQWEsU0FBQyxLQUFEO1dBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQURXOzttQkFxQmIsTUFBQSxHQUFRLFNBQUMsRUFBRDtXQUFRLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtBQUNkLFlBQUE7eUVBQU0sQ0FBQyxTQUFVO01BREg7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBO0VBQVI7O21CQUlSLEtBQUEsR0FBTyxTQUFDLEVBQUQ7V0FBUSxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7QUFDYixZQUFBO3dFQUFNLENBQUMsUUFBUztNQURIO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQTtFQUFSOzs7O0dBakRZOztBQXFEckIsTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJ7XG4gIExpc3RWaWV3XG4gIFZpZXdcbiAgVGV4dFxuICBJbWFnZVxuICBUb3VjaGFibGVPcGFjaXR5XG59ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlJ1xue0NvbXBvbmVudH0gPSBSZWFjdCA9IHJlcXVpcmUgJ3JlYWN0J1xue0NhcmQsIEJ1dHRvbiwgVFlQT30gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUtbWF0ZXJpYWwtZGVzaWduJ1xue2RlZmF1bHQ6IE1lZGlhfSA9IHJlcXVpcmUgJy4vY2FyZCdcbnN0eWxlcyA9IHJlcXVpcmUgJy4vc3R5bGVzJ1xuZ3N0eWxlcyA9IHJlcXVpcmUgJ3NyYy9zdHlsZXMnXG5cblxuY2xhc3MgU2NyZWVuIGV4dGVuZHMgQ29tcG9uZW50XG4gIEBkZWZhdWx0UHJvcHM6XG4gICAgcHJvbW9zOiBbXVxuXG5cbiAgY29uc3RydWN0b3I6IChwcm9wcykgLT5cbiAgICBzdXBlclxuICAgIGRhdGFTb3VyY2UgPSBuZXcgTGlzdFZpZXcuRGF0YVNvdXJjZShyb3dIYXNDaGFuZ2VkOiAocjEsIHIyKSAtPiByMSBpc250IHIyKVxuICAgIEBzdGF0ZSA9IGRhdGFTb3VyY2U6IGRhdGFTb3VyY2UuY2xvbmVXaXRoUm93cyhwcm9wcy5wcm9tb3MpXG5cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAobmV4dFByb3BzKSAtPlxuICAgIHByb21vcyA9IG5leHRQcm9wcy5wcm9tb3Mgb3IgU2NyZWVuLmRlZmF1bHRQcm9wcy5wcm9tb3NcbiAgICBAc2V0U3RhdGUoZGF0YVNvdXJjZTogQHN0YXRlLmRhdGFTb3VyY2UuY2xvbmVXaXRoUm93cyhwcm9tb3MpKVxuXG5cbiAgcmVuZGVyOiAtPlxuICAgIGA8TGlzdFZpZXdcbiAgICAgIGRhdGFTb3VyY2U9e3RoaXMuc3RhdGUuZGF0YVNvdXJjZX1cbiAgICAgIHJlbmRlclJvdz17dGhpcy5yZW5kZXJQcm9tb31cbiAgICAgIGVuYWJsZUVtcHR5U2VjdGlvbnM9e3RydWV9XG4gICAgICBzdHlsZT17c3R5bGVzLmxpc3R9IC8+YFxuXG5cbiAgcmVuZGVyUHJvbW86IChwcm9tbykgPT5cbiAgICBgPENhcmQ+XG4gICAgICA8TWVkaWEgaW1hZ2U9ezxJbWFnZSBzb3VyY2U9e3t1cmk6IHByb21vLmltYWdlfX0gLz59IGhlaWdodD17MzAwfSBvdmVybGF5PlxuICAgICAgICA8VGV4dCBzdHlsZT17W1RZUE8ucGFwZXJGb250SGVhZGxpbmUsIHN0eWxlcy50aXRsZV19Pntwcm9tby50aXRsZX08L1RleHQ+XG4gICAgICA8L01lZGlhPlxuICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgPFRleHQgc3R5bGU9e2dzdHlsZXMuZ3JheX0+e3Byb21vLmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgeyAocHJvbW8uYnJvd3NlckxpbmsgfHwgcHJvbW8uc2hhcmVMaW5rKSAmJlxuICAgICAgICA8Q2FyZC5BY3Rpb25zIHBvc2l0aW9uPSdyaWdodCc+XG4gICAgICAgICAgeyBwcm9tby5icm93c2VyTGluayAmJlxuICAgICAgICAgICAgPEJ1dHRvbiBvdmVycmlkZXM9e3N0eWxlcy5leHRyYS5idXR0b25TdHlsZX0gdGV4dD1cIk9QRU5cIiBvblByZXNzPXt0aGlzLnNlbGVjdChwcm9tby5pZCl9Lz5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyBwcm9tby5zaGFyZUxpbmsgJiZcbiAgICAgICAgICAgIDxCdXR0b24gb3ZlcnJpZGVzPXtzdHlsZXMuZXh0cmEuYnV0dG9uU3R5bGV9IHRleHQ9XCJTSEFSRVwiIG9uUHJlc3M9e3RoaXMuc2hhcmUocHJvbW8uaWQpfS8+XG4gICAgICAgICAgfVxuICAgICAgICA8L0NhcmQuQWN0aW9ucz5cbiAgICAgIH1cbiAgICA8L0NhcmQ+YFxuXG5cbiAgc2VsZWN0OiAoaWQpID0+ID0+XG4gICAgQHByb3BzLm9uU2VsZWN0PyhpZClcblxuICAgIFxuICBzaGFyZTogKGlkKSA9PiA9PlxuICAgIEBwcm9wcy5vblNoYXJlPyhpZClcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcmVlblxuIl19
