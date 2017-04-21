var VerifiedStatus, bonusPoints, getBonuses;

VerifiedStatus = 1;

getBonuses = function(state) {
  return state.bonuses.toList().sortBy(function(bonus) {
    return -bonus.get('date').getTime();
  });
};

bonusPoints = function(bonuses) {
  var sumVerified;
  sumVerified = function(all, bonus) {
    var points, status;
    points = bonus.get('points');
    status = bonus.get('status');
    if (status !== VerifiedStatus) {
      return all;
    }
    return all + points;
  };
  return bonuses.reduce(sumVerified, 0);
};

module.exports = {
  getBonuses: getBonuses,
  bonusPoints: bonusPoints
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicy9ib251c2VzLmpzIiwic291cmNlcyI6WyJsaWJzL2JvbnVzZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsY0FBQSxHQUFpQjs7QUFHakIsVUFBQSxHQUFhLFNBQUMsS0FBRDtTQUNYLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBZCxDQUFBLENBQ0UsQ0FBQyxNQURILENBQ1UsU0FBQyxLQUFEO1dBQ04sQ0FBQyxLQUFLLENBQUMsR0FBTixDQUFVLE1BQVYsQ0FBaUIsQ0FBQyxPQUFsQixDQUFBO0VBREssQ0FEVjtBQURXOztBQU1iLFdBQUEsR0FBYyxTQUFDLE9BQUQ7QUFDWixNQUFBO0VBQUEsV0FBQSxHQUFjLFNBQUMsR0FBRCxFQUFNLEtBQU47QUFDWixRQUFBO0lBQUEsTUFBQSxHQUFTLEtBQUssQ0FBQyxHQUFOLENBQVUsUUFBVjtJQUNULE1BQUEsR0FBUyxLQUFLLENBQUMsR0FBTixDQUFVLFFBQVY7SUFFVCxJQUFHLE1BQUEsS0FBWSxjQUFmO0FBQ0UsYUFBTyxJQURUOztXQUdBLEdBQUEsR0FBTTtFQVBNO1NBVWQsT0FBTyxDQUFDLE1BQVIsQ0FBZSxXQUFmLEVBQTRCLENBQTVCO0FBWFk7O0FBY2QsTUFBTSxDQUFDLE9BQVAsR0FBaUI7RUFDZixZQUFBLFVBRGU7RUFFZixhQUFBLFdBRmUiLCJzb3VyY2VzQ29udGVudCI6WyJWZXJpZmllZFN0YXR1cyA9IDFcblxuXG5nZXRCb251c2VzID0gKHN0YXRlKSAtPlxuICBzdGF0ZS5ib251c2VzLnRvTGlzdCgpXG4gICAgLnNvcnRCeSAoYm9udXMpIC0+XG4gICAgICAtYm9udXMuZ2V0KCdkYXRlJykuZ2V0VGltZSgpXG5cblxuYm9udXNQb2ludHMgPSAoYm9udXNlcykgLT5cbiAgc3VtVmVyaWZpZWQgPSAoYWxsLCBib251cykgLT5cbiAgICBwb2ludHMgPSBib251cy5nZXQoJ3BvaW50cycpXG4gICAgc3RhdHVzID0gYm9udXMuZ2V0KCdzdGF0dXMnKVxuXG4gICAgaWYgc3RhdHVzIGlzbnQgVmVyaWZpZWRTdGF0dXNcbiAgICAgIHJldHVybiBhbGxcblxuICAgIGFsbCArIHBvaW50c1xuXG5cbiAgYm9udXNlcy5yZWR1Y2Uoc3VtVmVyaWZpZWQsIDApXG4gIFxuICBcbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRCb251c2VzXG4gIGJvbnVzUG9pbnRzXG59XG4iXX0=
