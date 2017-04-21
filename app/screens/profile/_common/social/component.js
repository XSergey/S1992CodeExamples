var Button, Component, Icon, ListView, React, SocialNetworks, Text, View, Zocial, colors, ref, styles,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, Text = ref.Text, ListView = ref.ListView;

Component = (React = require('react')).Component;

Icon = require('react-native-vector-icons/MaterialIcons');

Zocial = require('react-native-vector-icons/Zocial');

Button = require('react-native-material-design').Button;

colors = require('bawadi-client/app/colors');

styles = require('./styles');

SocialNetworks = (function(superClass) {
  extend(SocialNetworks, superClass);

  SocialNetworks.defaultProps = {
    networks: []
  };

  function SocialNetworks() {
    var dataSource;
    SocialNetworks.__super__.constructor.apply(this, arguments);
    dataSource = new ListView.DataSource({
      rowHasChanged: function(r1, r2) {
        return r1 !== r2;
      }
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.networks)
    };
  }

  SocialNetworks.prototype.render = function() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderNetwork} />;
  };

  SocialNetworks.prototype._renderNetwork = function(network) {
    var Connect;
    Connect = network.connected ? <View style={{flexDirection: 'row'}}>
        <Icon name='check-circle' size={20} color={colors.lightGreen}/>
        <Text style={styles.connected}>CONNECTED</Text>
      </View> : <Button text="CONNECT" overrides={styles.extra.connectButton} />;
    return <View style={styles.scroll}>
      <View style={styles.infoContainer}>
        <Zocial name={network.icon} size={22} color={network.color} />
        <Text style={styles.name}>{network.name}</Text>
      </View>
      {Connect}
    </View>;
  };

  SocialNetworks.prototype._renderSeparator = function(sectionId, rowId) {
    var id;
    id = sectionId + "-" + rowId;
    return <View key={id} style={styles.separator} />;
  };

  return SocialNetworks;

})(Component);

module.exports = SocialNetworks;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wcm9maWxlL19jb21tb24vc29jaWFsL2NvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9wcm9maWxlL19jb21tb24vc29jaWFsL2NvbXBvbmVudC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxpR0FBQTtFQUFBOzs7QUFBQSxNQUF5QixPQUFBLENBQVEsY0FBUixDQUF6QixFQUFDLGVBQUQsRUFBTyxlQUFQLEVBQWE7O0FBQ1osWUFBYSxDQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUixDQUFSOztBQUNkLElBQUEsR0FBTyxPQUFBLENBQVEseUNBQVI7O0FBQ1AsTUFBQSxHQUFTLE9BQUEsQ0FBUSxrQ0FBUjs7QUFDUixTQUFVLE9BQUEsQ0FBUSw4QkFBUjs7QUFDWCxNQUFBLEdBQVMsT0FBQSxDQUFRLDBCQUFSOztBQUNULE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFHSDs7O0VBQ0osY0FBQyxDQUFBLFlBQUQsR0FDRTtJQUFBLFFBQUEsRUFBVSxFQUFWOzs7RUFHVyx3QkFBQTtBQUNYLFFBQUE7SUFBQSxpREFBQSxTQUFBO0lBQ0EsVUFBQSxHQUFhLElBQUksUUFBUSxDQUFDLFVBQWIsQ0FBd0I7TUFBQSxhQUFBLEVBQWUsU0FBQyxFQUFELEVBQUssRUFBTDtlQUFZLEVBQUEsS0FBUTtNQUFwQixDQUFmO0tBQXhCO0lBQ2IsSUFBQyxDQUFBLEtBQUQsR0FBUztNQUFBLFVBQUEsRUFBWSxVQUFVLENBQUMsYUFBWCxDQUF5QixJQUFDLENBQUEsS0FBSyxDQUFDLFFBQWhDLENBQVo7O0VBSEU7OzJCQU1iLE1BQUEsR0FBUSxTQUFBO1dBQ047OztFQURNOzsyQkFNUixjQUFBLEdBQWdCLFNBQUMsT0FBRDtBQUNkLFFBQUE7SUFBQSxPQUFBLEdBQWEsT0FBTyxDQUFDLFNBQVgsR0FDUjs7O2FBRFEsR0FNUjtXQUVGOzs7Ozs7O0VBVGM7OzJCQWtCaEIsZ0JBQUEsR0FBa0IsU0FBQyxTQUFELEVBQVksS0FBWjtBQUNoQixRQUFBO0lBQUEsRUFBQSxHQUFRLFNBQUQsR0FBVyxHQUFYLEdBQWM7V0FDckI7RUFGZ0I7Ozs7R0FuQ1M7O0FBd0M3QixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIntWaWV3LCBUZXh0LCBMaXN0Vmlld30gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Q29tcG9uZW50fSA9IFJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG5JY29uID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXZlY3Rvci1pY29ucy9NYXRlcmlhbEljb25zJ1xuWm9jaWFsID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXZlY3Rvci1pY29ucy9ab2NpYWwnXG57QnV0dG9ufSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS1tYXRlcmlhbC1kZXNpZ24nXG5jb2xvcnMgPSByZXF1aXJlICdzcmMvY29sb3JzJ1xuc3R5bGVzID0gcmVxdWlyZSAnLi9zdHlsZXMnXG5cblxuY2xhc3MgU29jaWFsTmV0d29ya3MgZXh0ZW5kcyBDb21wb25lbnRcbiAgQGRlZmF1bHRQcm9wczpcbiAgICBuZXR3b3JrczogW11cblxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIHN1cGVyXG4gICAgZGF0YVNvdXJjZSA9IG5ldyBMaXN0Vmlldy5EYXRhU291cmNlKHJvd0hhc0NoYW5nZWQ6IChyMSwgcjIpIC0+IHIxIGlzbnQgcjIpXG4gICAgQHN0YXRlID0gZGF0YVNvdXJjZTogZGF0YVNvdXJjZS5jbG9uZVdpdGhSb3dzKEBwcm9wcy5uZXR3b3JrcylcblxuXG4gIHJlbmRlcjogLT5cbiAgICBgPExpc3RWaWV3XG4gICAgICBkYXRhU291cmNlPXt0aGlzLnN0YXRlLmRhdGFTb3VyY2V9XG4gICAgICByZW5kZXJSb3c9e3RoaXMuX3JlbmRlck5ldHdvcmt9IC8+YFxuXG5cbiAgX3JlbmRlck5ldHdvcms6IChuZXR3b3JrKSAtPlxuICAgIENvbm5lY3QgPSBpZiBuZXR3b3JrLmNvbm5lY3RlZFxuICAgICAgYDxWaWV3IHN0eWxlPXt7ZmxleERpcmVjdGlvbjogJ3Jvdyd9fT5cbiAgICAgICAgPEljb24gbmFtZT0nY2hlY2stY2lyY2xlJyBzaXplPXsyMH0gY29sb3I9e2NvbG9ycy5saWdodEdyZWVufS8+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuY29ubmVjdGVkfT5DT05ORUNURUQ8L1RleHQ+XG4gICAgICA8L1ZpZXc+YFxuICAgIGVsc2VcbiAgICAgIGA8QnV0dG9uIHRleHQ9XCJDT05ORUNUXCIgb3ZlcnJpZGVzPXtzdHlsZXMuZXh0cmEuY29ubmVjdEJ1dHRvbn0gLz5gXG5cbiAgICBgPFZpZXcgc3R5bGU9e3N0eWxlcy5zY3JvbGx9PlxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5pbmZvQ29udGFpbmVyfT5cbiAgICAgICAgPFpvY2lhbCBuYW1lPXtuZXR3b3JrLmljb259IHNpemU9ezIyfSBjb2xvcj17bmV0d29yay5jb2xvcn0gLz5cbiAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5uYW1lfT57bmV0d29yay5uYW1lfTwvVGV4dD5cbiAgICAgIDwvVmlldz5cbiAgICAgIHtDb25uZWN0fVxuICAgIDwvVmlldz5gXG5cblxuICBfcmVuZGVyU2VwYXJhdG9yOiAoc2VjdGlvbklkLCByb3dJZCkgLT5cbiAgICBpZCA9IFwiI3tzZWN0aW9uSWR9LSN7cm93SWR9XCJcbiAgICBgPFZpZXcga2V5PXtpZH0gc3R5bGU9e3N0eWxlcy5zZXBhcmF0b3J9IC8+YFxuXG5cbm1vZHVsZS5leHBvcnRzID0gU29jaWFsTmV0d29ya3NcbiJdfQ==
