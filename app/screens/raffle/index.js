var Actions, DefaultRaffleText, RouteActions, Screen, TicketPrice, bonusPoints, connect, getBonuses, mapDispatchToProps, mapStateToProps, ref;

connect = require('react-redux').connect;

RouteActions = require('react-native-router-flux').Actions;

Screen = require('./screen');

Actions = require('bawadi-client/app/redux/actions');

ref = require('../../libs/bonuses'), getBonuses = ref.getBonuses, bonusPoints = ref.bonusPoints;

TicketPrice = 100;

DefaultRaffleText = "-Download this app and get a coupon from Mall Information Desk and enter our daily raffle.\n-Purchase from any Bawadi Mall stores, bring your receipt to Information Desk and get a chance to win our daily prize of AED3000 worth of Bawadi Mall Gift Vouchers that are redeemable at any of the outlets in the mall.\nRaffle draw will be held daily at 9 PM.";

mapStateToProps = function(state) {
  var activeRaffle, description, points, ref1, ref2, ticketCount;
  points = bonusPoints(getBonuses(state));
  description = ((ref1 = state.config.get('raffleText')) != null ? ref1.get('value') : void 0) || DefaultRaffleText;
  activeRaffle = (ref2 = state.raffles.filter(function(raffle) {
    return raffle.get('active');
  }).sortBy(function(raffle) {
    return -raffle.get('to');
  }).first()) != null ? ref2.toJS() : void 0;
  if (activeRaffle) {
    ticketCount = state.tickets.filter(function(ticket) {
      return ticket.get('raffle') === activeRaffle.id;
    }).size;
  } else {
    ticketCount = 0;
  }
  return {
    points: points,
    ticketCount: ticketCount,
    ticketPrice: TicketPrice,
    enoughPoints: points >= TicketPrice,
    activeRaffle: activeRaffle,
    onGetBonuses: RouteActions.bonusList,
    description: description
  };
};

mapDispatchToProps = function(dispatch) {
  return {
    onBuyTicket: function() {
      return dispatch(Actions.bonuses.buyTicket());
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Screen);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9yYWZmbGUvaW5kZXguanMiLCJzb3VyY2VzIjpbInNjcmVlbnMvcmFmZmxlL2luZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFDLFVBQVcsT0FBQSxDQUFRLGFBQVI7O0FBQ0YsZUFBZ0IsT0FBQSxDQUFRLDBCQUFSLEVBQXpCOztBQUNELE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFDVCxPQUFBLEdBQVUsT0FBQSxDQUFRLGlDQUFSOztBQUNWLE1BQTRCLE9BQUEsQ0FBUSxvQkFBUixDQUE1QixFQUFDLDJCQUFELEVBQWE7O0FBR2IsV0FBQSxHQUFjOztBQUNkLGlCQUFBLEdBQW9COztBQU9wQixlQUFBLEdBQWtCLFNBQUMsS0FBRDtBQUNoQixNQUFBO0VBQUEsTUFBQSxHQUFTLFdBQUEsQ0FBWSxVQUFBLENBQVcsS0FBWCxDQUFaO0VBQ1QsV0FBQSwwREFBNEMsQ0FBRSxHQUFoQyxDQUFvQyxPQUFwQyxXQUFBLElBQWdEO0VBRTlELFlBQUE7Ozs7NEJBR1UsQ0FBRSxJQUhHLENBQUE7RUFLZixJQUFHLFlBQUg7SUFDRSxXQUFBLEdBQWMsS0FBSyxDQUFDLE9BQ2xCLENBQUMsTUFEVyxDQUNKLFNBQUMsTUFBRDthQUFZLE1BQU0sQ0FBQyxHQUFQLENBQVcsUUFBWCxDQUFBLEtBQXdCLFlBQVksQ0FBQztJQUFqRCxDQURJLENBRVosQ0FBQyxLQUhMO0dBQUEsTUFBQTtJQUtFLFdBQUEsR0FBYyxFQUxoQjs7U0FPQTtJQUFBLE1BQUEsRUFBUSxNQUFSO0lBQ0EsV0FBQSxFQUFhLFdBRGI7SUFFQSxXQUFBLEVBQWEsV0FGYjtJQUdBLFlBQUEsRUFBYyxNQUFBLElBQVUsV0FIeEI7SUFJQSxZQUFBLEVBQWMsWUFKZDtJQUtBLFlBQUEsRUFBYyxZQUFZLENBQUMsU0FMM0I7SUFNQSxXQUFBLEVBQWEsV0FOYjs7QUFoQmdCOztBQXlCbEIsa0JBQUEsR0FBcUIsU0FBQyxRQUFEO1NBQ25CO0lBQUEsV0FBQSxFQUFhLFNBQUE7YUFDWCxRQUFBLENBQVMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFoQixDQUFBLENBQVQ7SUFEVyxDQUFiOztBQURtQjs7QUFLckIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0FBQSxDQUFRLGVBQVIsRUFBeUIsa0JBQXpCLENBQUEsQ0FBNkMsTUFBN0MiLCJzb3VyY2VzQ29udGVudCI6WyJ7Y29ubmVjdH0gPSByZXF1aXJlICdyZWFjdC1yZWR1eCdcbntBY3Rpb25zOiBSb3V0ZUFjdGlvbnN9ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXJvdXRlci1mbHV4J1xuU2NyZWVuID0gcmVxdWlyZSAnLi9zY3JlZW4nXG5BY3Rpb25zID0gcmVxdWlyZSAnc3JjL3JlZHV4L2FjdGlvbnMnXG57Z2V0Qm9udXNlcywgYm9udXNQb2ludHN9ID0gcmVxdWlyZSAnLi4vLi4vbGlicy9ib251c2VzJ1xuXG5cblRpY2tldFByaWNlID0gMTAwXG5EZWZhdWx0UmFmZmxlVGV4dCA9IFwiXCJcIlxuLURvd25sb2FkIHRoaXMgYXBwIGFuZCBnZXQgYSBjb3Vwb24gZnJvbSBNYWxsIEluZm9ybWF0aW9uIERlc2sgYW5kIGVudGVyIG91ciBkYWlseSByYWZmbGUuXG4tUHVyY2hhc2UgZnJvbSBhbnkgQmF3YWRpIE1hbGwgc3RvcmVzLCBicmluZyB5b3VyIHJlY2VpcHQgdG8gSW5mb3JtYXRpb24gRGVzayBhbmQgZ2V0IGEgY2hhbmNlIHRvIHdpbiBvdXIgZGFpbHkgcHJpemUgb2YgQUVEMzAwMCB3b3J0aCBvZiBCYXdhZGkgTWFsbCBHaWZ0IFZvdWNoZXJzIHRoYXQgYXJlIHJlZGVlbWFibGUgYXQgYW55IG9mIHRoZSBvdXRsZXRzIGluIHRoZSBtYWxsLlxuUmFmZmxlIGRyYXcgd2lsbCBiZSBoZWxkIGRhaWx5IGF0IDkgUE0uXG5cIlwiXCJcblxuXG5tYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpIC0+XG4gIHBvaW50cyA9IGJvbnVzUG9pbnRzKGdldEJvbnVzZXMoc3RhdGUpKVxuICBkZXNjcmlwdGlvbiA9IHN0YXRlLmNvbmZpZy5nZXQoJ3JhZmZsZVRleHQnKT8uZ2V0KCd2YWx1ZScpIG9yIERlZmF1bHRSYWZmbGVUZXh0XG5cbiAgYWN0aXZlUmFmZmxlID0gc3RhdGUucmFmZmxlc1xuICAgIC5maWx0ZXIgKHJhZmZsZSkgLT4gcmFmZmxlLmdldCgnYWN0aXZlJylcbiAgICAuc29ydEJ5IChyYWZmbGUpIC0+IC1yYWZmbGUuZ2V0KCd0bycpXG4gICAgLmZpcnN0KCk/LnRvSlMoKVxuXG4gIGlmIGFjdGl2ZVJhZmZsZVxuICAgIHRpY2tldENvdW50ID0gc3RhdGUudGlja2V0c1xuICAgICAgLmZpbHRlciAodGlja2V0KSAtPiB0aWNrZXQuZ2V0KCdyYWZmbGUnKSBpcyBhY3RpdmVSYWZmbGUuaWRcbiAgICAgIC5zaXplXG4gIGVsc2VcbiAgICB0aWNrZXRDb3VudCA9IDBcblxuICBwb2ludHM6IHBvaW50c1xuICB0aWNrZXRDb3VudDogdGlja2V0Q291bnRcbiAgdGlja2V0UHJpY2U6IFRpY2tldFByaWNlXG4gIGVub3VnaFBvaW50czogcG9pbnRzID49IFRpY2tldFByaWNlXG4gIGFjdGl2ZVJhZmZsZTogYWN0aXZlUmFmZmxlXG4gIG9uR2V0Qm9udXNlczogUm91dGVBY3Rpb25zLmJvbnVzTGlzdFxuICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cblxuXG5tYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpIC0+XG4gIG9uQnV5VGlja2V0OiAtPlxuICAgIGRpc3BhdGNoKEFjdGlvbnMuYm9udXNlcy5idXlUaWNrZXQoKSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNjcmVlbilcbiJdfQ==
