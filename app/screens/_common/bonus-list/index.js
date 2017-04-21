var BonusList, Component, Icon, ListView, React, StatusColors, Text, View, gray, gstyles, lightGreen, lightRed, moment, ref, ref1, styles,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ref = require('react-native'), View = ref.View, Text = ref.Text, ListView = ref.ListView;

Component = (React = require('react')).Component;

Icon = require('react-native-vector-icons/MaterialIcons');

moment = require('moment');

ref1 = require('bawadi-client/app/colors'), lightGreen = ref1.lightGreen, lightRed = ref1.lightRed, gray = ref1.gray;

styles = require('./styles');

gstyles = require('bawadi-client/app/styles');

StatusColors = [gray, lightGreen, lightRed];

BonusList = (function(superClass) {
  extend(BonusList, superClass);

  BonusList.defaultProps = {
    bonuses: []
  };

  function BonusList() {
    var dataSource;
    BonusList.__super__.constructor.apply(this, arguments);
    dataSource = new ListView.DataSource({
      rowHasChanged: function(r1, r2) {
        return r1 !== r2;
      }
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.bonuses)
    };
  }

  BonusList.prototype.componentWillReceiveProps = function(newProps) {
    return this.state.dataSource = this.state.dataSource.cloneWithRows(newProps.bonuses);
  };

  BonusList.prototype.render = function() {
    return <View style={styles.container}>
      { this.props.bonuses.length !== 0 &&
        this.renderList() ||
        this.renderNoBonuses()
      }
    </View>;
  };

  BonusList.prototype.renderNoBonuses = function() {
    return <Text style={gstyles.gray}>You have no bonus points yet</Text>;
  };

  BonusList.prototype.renderList = function() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderBonus}
      renderSeparator={this.renderSeparator}
      bounces={false}
      enableEmptySections={true} />;
  };

  BonusList.prototype.renderBonus = function(bonus) {
    return <View style={styles.bonus}>
      <View style={styles.pointsContainer}>
        <Icon name='brightness-1' size={48} color={StatusColors[bonus.status]} />
        <View style={styles.pointsTextContainer}>
          <Text style={styles.points} numberOfLines={1}>{bonus.points || "?"}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[gstyles.gray, styles.title]}>{bonus.description}</Text>
        <Text style={gstyles.gray}>{moment(bonus.date).calendar()}</Text>
      </View>
    </View>;
  };

  BonusList.prototype.renderSeparator = function(sectionId, rowId) {
    var id;
    id = sectionId + "-" + rowId;
    return <View key={id} style={[gstyles.separator, styles.separator]} />;
  };

  return BonusList;

})(Component);

module.exports = BonusList;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9fY29tbW9uL2JvbnVzLWxpc3QvaW5kZXguanMiLCJzb3VyY2VzIjpbInNjcmVlbnMvX2NvbW1vbi9ib251cy1saXN0L2luZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLHFJQUFBO0VBQUE7OztBQUFBLE1BQXlCLE9BQUEsQ0FBUSxjQUFSLENBQXpCLEVBQUMsZUFBRCxFQUFPLGVBQVAsRUFBYTs7QUFDWixZQUFhLENBQUEsS0FBQSxHQUFRLE9BQUEsQ0FBUSxPQUFSLENBQVI7O0FBQ2QsSUFBQSxHQUFPLE9BQUEsQ0FBUSx5Q0FBUjs7QUFDUCxNQUFBLEdBQVMsT0FBQSxDQUFRLFFBQVI7O0FBQ1QsT0FBK0IsT0FBQSxDQUFRLDBCQUFSLENBQS9CLEVBQUMsNEJBQUQsRUFBYSx3QkFBYixFQUF1Qjs7QUFDdkIsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUNULE9BQUEsR0FBVSxPQUFBLENBQVEsMEJBQVI7O0FBR1YsWUFBQSxHQUFlLENBQ2IsSUFEYSxFQUViLFVBRmEsRUFHYixRQUhhOztBQU9UOzs7RUFDSixTQUFDLENBQUEsWUFBRCxHQUNFO0lBQUEsT0FBQSxFQUFTLEVBQVQ7OztFQUdXLG1CQUFBO0FBQ1gsUUFBQTtJQUFBLDRDQUFBLFNBQUE7SUFDQSxVQUFBLEdBQWEsSUFBSSxRQUFRLENBQUMsVUFBYixDQUF3QjtNQUFBLGFBQUEsRUFBZSxTQUFDLEVBQUQsRUFBSyxFQUFMO2VBQVksRUFBQSxLQUFRO01BQXBCLENBQWY7S0FBeEI7SUFDYixJQUFDLENBQUEsS0FBRCxHQUFTO01BQUEsVUFBQSxFQUFZLFVBQVUsQ0FBQyxhQUFYLENBQXlCLElBQUMsQ0FBQSxLQUFLLENBQUMsT0FBaEMsQ0FBWjs7RUFIRTs7c0JBTWIseUJBQUEsR0FBMkIsU0FBQyxRQUFEO1dBQ3pCLElBQUMsQ0FBQSxLQUFLLENBQUMsVUFBUCxHQUFvQixJQUFDLENBQUEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFsQixDQUFnQyxRQUFRLENBQUMsT0FBekM7RUFESzs7c0JBSTNCLE1BQUEsR0FBUSxTQUFBO1dBQ047Ozs7OztFQURNOztzQkFTUixlQUFBLEdBQWlCLFNBQUE7V0FDZjtFQURlOztzQkFJakIsVUFBQSxHQUFZLFNBQUE7V0FDVjs7Ozs7O0VBRFU7O3NCQVNaLFdBQUEsR0FBYSxTQUFDLEtBQUQ7V0FDWDs7Ozs7Ozs7Ozs7O0VBRFc7O3NCQWViLGVBQUEsR0FBaUIsU0FBQyxTQUFELEVBQVksS0FBWjtBQUNmLFFBQUE7SUFBQSxFQUFBLEdBQVEsU0FBRCxHQUFXLEdBQVgsR0FBYztXQUNyQjtFQUZlOzs7O0dBcERLOztBQXlEeEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJ7VmlldywgVGV4dCwgTGlzdFZpZXd9ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlJ1xue0NvbXBvbmVudH0gPSBSZWFjdCA9IHJlcXVpcmUgJ3JlYWN0J1xuSWNvbiA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS12ZWN0b3ItaWNvbnMvTWF0ZXJpYWxJY29ucydcbm1vbWVudCA9IHJlcXVpcmUgJ21vbWVudCdcbntsaWdodEdyZWVuLCBsaWdodFJlZCwgZ3JheX0gPSByZXF1aXJlICdzcmMvY29sb3JzJ1xuc3R5bGVzID0gcmVxdWlyZSAnLi9zdHlsZXMnXG5nc3R5bGVzID0gcmVxdWlyZSAnc3JjL3N0eWxlcydcblxuXG5TdGF0dXNDb2xvcnMgPSBbXG4gIGdyYXlcbiAgbGlnaHRHcmVlblxuICBsaWdodFJlZFxuXVxuXG5cbmNsYXNzIEJvbnVzTGlzdCBleHRlbmRzIENvbXBvbmVudFxuICBAZGVmYXVsdFByb3BzOlxuICAgIGJvbnVzZXM6IFtdXG5cblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBzdXBlclxuICAgIGRhdGFTb3VyY2UgPSBuZXcgTGlzdFZpZXcuRGF0YVNvdXJjZShyb3dIYXNDaGFuZ2VkOiAocjEsIHIyKSAtPiByMSBpc250IHIyKVxuICAgIEBzdGF0ZSA9IGRhdGFTb3VyY2U6IGRhdGFTb3VyY2UuY2xvbmVXaXRoUm93cyhAcHJvcHMuYm9udXNlcylcblxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IChuZXdQcm9wcykgLT5cbiAgICBAc3RhdGUuZGF0YVNvdXJjZSA9IEBzdGF0ZS5kYXRhU291cmNlLmNsb25lV2l0aFJvd3MobmV3UHJvcHMuYm9udXNlcylcblxuXG4gIHJlbmRlcjogLT5cbiAgICBgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgeyB0aGlzLnByb3BzLmJvbnVzZXMubGVuZ3RoICE9PSAwICYmXG4gICAgICAgIHRoaXMucmVuZGVyTGlzdCgpIHx8XG4gICAgICAgIHRoaXMucmVuZGVyTm9Cb251c2VzKClcbiAgICAgIH1cbiAgICA8L1ZpZXc+YFxuXG4gICAgICBcbiAgcmVuZGVyTm9Cb251c2VzOiAtPlxuICAgIGA8VGV4dCBzdHlsZT17Z3N0eWxlcy5ncmF5fT5Zb3UgaGF2ZSBubyBib251cyBwb2ludHMgeWV0PC9UZXh0PmBcbiAgICBcbiAgICBcbiAgcmVuZGVyTGlzdDogLT5cbiAgICBgPExpc3RWaWV3XG4gICAgICBkYXRhU291cmNlPXt0aGlzLnN0YXRlLmRhdGFTb3VyY2V9XG4gICAgICByZW5kZXJSb3c9e3RoaXMucmVuZGVyQm9udXN9XG4gICAgICByZW5kZXJTZXBhcmF0b3I9e3RoaXMucmVuZGVyU2VwYXJhdG9yfVxuICAgICAgYm91bmNlcz17ZmFsc2V9XG4gICAgICBlbmFibGVFbXB0eVNlY3Rpb25zPXt0cnVlfSAvPmBcblxuXG4gIHJlbmRlckJvbnVzOiAoYm9udXMpIC0+XG4gICAgYDxWaWV3IHN0eWxlPXtzdHlsZXMuYm9udXN9PlxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5wb2ludHNDb250YWluZXJ9PlxuICAgICAgICA8SWNvbiBuYW1lPSdicmlnaHRuZXNzLTEnIHNpemU9ezQ4fSBjb2xvcj17U3RhdHVzQ29sb3JzW2JvbnVzLnN0YXR1c119IC8+XG4gICAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMucG9pbnRzVGV4dENvbnRhaW5lcn0+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5wb2ludHN9IG51bWJlck9mTGluZXM9ezF9Pntib251cy5wb2ludHMgfHwgXCI/XCJ9PC9UZXh0PlxuICAgICAgICA8L1ZpZXc+XG4gICAgICA8L1ZpZXc+XG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmluZm9Db250YWluZXJ9PlxuICAgICAgICA8VGV4dCBzdHlsZT17W2dzdHlsZXMuZ3JheSwgc3R5bGVzLnRpdGxlXX0+e2JvbnVzLmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgICAgPFRleHQgc3R5bGU9e2dzdHlsZXMuZ3JheX0+e21vbWVudChib251cy5kYXRlKS5jYWxlbmRhcigpfTwvVGV4dD5cbiAgICAgIDwvVmlldz5cbiAgICA8L1ZpZXc+YFxuXG5cbiAgcmVuZGVyU2VwYXJhdG9yOiAoc2VjdGlvbklkLCByb3dJZCkgLT5cbiAgICBpZCA9IFwiI3tzZWN0aW9uSWR9LSN7cm93SWR9XCJcbiAgICBgPFZpZXcga2V5PXtpZH0gc3R5bGU9e1tnc3R5bGVzLnNlcGFyYXRvciwgc3R5bGVzLnNlcGFyYXRvcl19IC8+YFxuXG5cbm1vZHVsZS5leHBvcnRzID0gQm9udXNMaXN0XG4iXX0=
