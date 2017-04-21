var Alert, Bonuses, RouteActions, apiSending, buyRaffleTicket, call, getApi, getCurrentScreen, newBonus, put, ref, ref1, ref2, select, takeEvery;

Alert = require('react-native').Alert;

RouteActions = require('react-native-router-flux').Actions;

ref = require('redux-saga'), takeEvery = ref.takeEvery, (ref1 = ref.effects, call = ref1.call, select = ref1.select, put = ref1.put);

Bonuses = require('./types');

ref2 = require('../utils'), getApi = ref2.getApi, getCurrentScreen = ref2.getCurrentScreen;

apiSending = require('bawadi-client/app/redux/actions').apiSending;

newBonus = function*(action) {
  var api, base64, error, screen;
  api = (yield select(getApi));
  base64 = action.payload;
  try {
    yield put(apiSending(true));
    yield call(api.uploadReceipt, base64);
    yield put(apiSending(false));
    Alert.alert("Thank you!", "You will get bonus points when we will check your receipt", [
      {
        text: "OK"
      }
    ]);
    screen = (yield select(getCurrentScreen));
    if (screen === 'scanReceipt') {
      try {
        return RouteActions.pop();
      } catch (error1) {

      }
    }
  } catch (error1) {
    error = error1;
    yield put(apiSending(false));
    return Alert.alert("Something went wrong :(", "Please check your internet connection or try to restart application", [
      {
        text: "OK"
      }
    ]);
  }
};

buyRaffleTicket = function*() {
  var api, error;
  api = (yield select(getApi));
  try {
    yield call(api.buyRaffleTicket);
    return Alert.alert("Congratulations!", "You have successfully get raffle ticket", [
      {
        text: "OK"
      }
    ]);
  } catch (error1) {
    error = error1;
    return Alert.alert("Something went wrong :(", "Please check your internet connection or try to restart application", [
      {
        text: "OK"
      }
    ]);
  }
};

module.exports = function*() {
  return (yield [takeEvery(Bonuses.New, newBonus), takeEvery(Bonuses.BuyTicket, buyRaffleTicket)]);
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpL3JlZHV4L2JvbnVzZXMvc2FnYXMuanMiLCJzb3VyY2VzIjpbImFwaS9yZWR1eC9ib251c2VzL3NhZ2FzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFDLFFBQVMsT0FBQSxDQUFRLGNBQVI7O0FBQ0EsZUFBZ0IsT0FBQSxDQUFRLDBCQUFSLEVBQXpCOztBQUNELE1BQTRDLE9BQUEsQ0FBUSxZQUFSLENBQTVDLEVBQUMseUJBQUQsY0FBWSxTQUFVLGtCQUFNLHNCQUFROztBQUNwQyxPQUFBLEdBQVUsT0FBQSxDQUFRLFNBQVI7O0FBQ1YsT0FBNkIsT0FBQSxDQUFRLFVBQVIsQ0FBN0IsRUFBQyxvQkFBRCxFQUFTOztBQUNSLGFBQWMsT0FBQSxDQUFRLGlDQUFSOztBQUdmLFFBQUEsR0FBVyxVQUFDLE1BQUQ7QUFDVCxNQUFBO0VBQUEsR0FBQSxHQUFNLENBQUEsTUFBTSxNQUFBLENBQU8sTUFBUCxDQUFOO0VBQ04sTUFBQSxHQUFTLE1BQU0sQ0FBQztBQUVoQjtJQUNFLE1BQU0sR0FBQSxDQUFJLFVBQUEsQ0FBVyxJQUFYLENBQUo7SUFDTixNQUFNLElBQUEsQ0FBSyxHQUFHLENBQUMsYUFBVCxFQUF3QixNQUF4QjtJQUNOLE1BQU0sR0FBQSxDQUFJLFVBQUEsQ0FBVyxLQUFYLENBQUo7SUFFTixLQUFLLENBQUMsS0FBTixDQUNFLFlBREYsRUFFRSwyREFGRixFQUdFO01BQUM7UUFBQSxJQUFBLEVBQU0sSUFBTjtPQUFEO0tBSEY7SUFNQSxNQUFBLEdBQVMsQ0FBQSxNQUFNLE1BQUEsQ0FBTyxnQkFBUCxDQUFOO0lBQ1QsSUFBRyxNQUFBLEtBQVUsYUFBYjtBQUNFO2VBQUksWUFBWSxDQUFDLEdBQWIsQ0FBQSxFQUFKO09BQUEsY0FBQTtBQUFBO09BREY7S0FaRjtHQUFBLGNBQUE7SUFlTTtJQUVKLE1BQU0sR0FBQSxDQUFJLFVBQUEsQ0FBVyxLQUFYLENBQUo7V0FFTixLQUFLLENBQUMsS0FBTixDQUNFLHlCQURGLEVBRUUscUVBRkYsRUFHRTtNQUFDO1FBQUEsSUFBQSxFQUFNLElBQU47T0FBRDtLQUhGLEVBbkJGOztBQUpTOztBQThCWCxlQUFBLEdBQWtCLFVBQUE7QUFDaEIsTUFBQTtFQUFBLEdBQUEsR0FBTSxDQUFBLE1BQU0sTUFBQSxDQUFPLE1BQVAsQ0FBTjtBQUVOO0lBQ0UsTUFBTSxJQUFBLENBQUssR0FBRyxDQUFDLGVBQVQ7V0FDTixLQUFLLENBQUMsS0FBTixDQUNFLGtCQURGLEVBRUUseUNBRkYsRUFHRTtNQUFDO1FBQUEsSUFBQSxFQUFNLElBQU47T0FBRDtLQUhGLEVBRkY7R0FBQSxjQUFBO0lBUU07V0FFSixLQUFLLENBQUMsS0FBTixDQUNFLHlCQURGLEVBRUUscUVBRkYsRUFHRTtNQUFDO1FBQUEsSUFBQSxFQUFNLElBQU47T0FBRDtLQUhGLEVBVkY7O0FBSGdCOztBQW9CbEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsVUFBQTtTQUFHLENBQUEsTUFBTSxDQUN4QixTQUFBLENBQVUsT0FBTyxDQUFDLEdBQWxCLEVBQXVCLFFBQXZCLENBRHdCLEVBRXhCLFNBQUEsQ0FBVSxPQUFPLENBQUMsU0FBbEIsRUFBNkIsZUFBN0IsQ0FGd0IsQ0FBTjtBQUFIIiwic291cmNlc0NvbnRlbnQiOlsie0FsZXJ0fSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZSdcbntBY3Rpb25zOiBSb3V0ZUFjdGlvbnN9ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXJvdXRlci1mbHV4J1xue3Rha2VFdmVyeSwgZWZmZWN0czoge2NhbGwsIHNlbGVjdCwgcHV0fX0gPSByZXF1aXJlICdyZWR1eC1zYWdhJ1xuQm9udXNlcyA9IHJlcXVpcmUgJy4vdHlwZXMnXG57Z2V0QXBpLCBnZXRDdXJyZW50U2NyZWVufSA9IHJlcXVpcmUgJy4uL3V0aWxzJ1xue2FwaVNlbmRpbmd9ID0gcmVxdWlyZSAnc3JjL3JlZHV4L2FjdGlvbnMnXG5cblxubmV3Qm9udXMgPSAoYWN0aW9uKSAtPlxuICBhcGkgPSB5aWVsZCBzZWxlY3QoZ2V0QXBpKVxuICBiYXNlNjQgPSBhY3Rpb24ucGF5bG9hZFxuXG4gIHRyeVxuICAgIHlpZWxkIHB1dChhcGlTZW5kaW5nKHllcykpXG4gICAgeWllbGQgY2FsbChhcGkudXBsb2FkUmVjZWlwdCwgYmFzZTY0KVxuICAgIHlpZWxkIHB1dChhcGlTZW5kaW5nKG5vKSlcblxuICAgIEFsZXJ0LmFsZXJ0KFxuICAgICAgXCJUaGFuayB5b3UhXCJcbiAgICAgIFwiWW91IHdpbGwgZ2V0IGJvbnVzIHBvaW50cyB3aGVuIHdlIHdpbGwgY2hlY2sgeW91ciByZWNlaXB0XCJcbiAgICAgIFt0ZXh0OiBcIk9LXCJdXG4gICAgKVxuXG4gICAgc2NyZWVuID0geWllbGQgc2VsZWN0KGdldEN1cnJlbnRTY3JlZW4pXG4gICAgaWYgc2NyZWVuIGlzICdzY2FuUmVjZWlwdCdcbiAgICAgIHRyeSBSb3V0ZUFjdGlvbnMucG9wKCkgY2F0Y2hcblxuICBjYXRjaCBlcnJvclxuICAgICMgVE9ETzogdG9rZW4gZXhwaXJlZFxuICAgIHlpZWxkIHB1dChhcGlTZW5kaW5nKG5vKSlcblxuICAgIEFsZXJ0LmFsZXJ0KFxuICAgICAgXCJTb21ldGhpbmcgd2VudCB3cm9uZyA6KFwiXG4gICAgICBcIlBsZWFzZSBjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24gb3IgdHJ5IHRvIHJlc3RhcnQgYXBwbGljYXRpb25cIlxuICAgICAgW3RleHQ6IFwiT0tcIl1cbiAgICApXG5cblxuYnV5UmFmZmxlVGlja2V0ID0gLT5cbiAgYXBpID0geWllbGQgc2VsZWN0KGdldEFwaSlcblxuICB0cnlcbiAgICB5aWVsZCBjYWxsKGFwaS5idXlSYWZmbGVUaWNrZXQpXG4gICAgQWxlcnQuYWxlcnQoXG4gICAgICBcIkNvbmdyYXR1bGF0aW9ucyFcIlxuICAgICAgXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgZ2V0IHJhZmZsZSB0aWNrZXRcIlxuICAgICAgW3RleHQ6IFwiT0tcIl1cbiAgICApXG5cbiAgY2F0Y2ggZXJyb3JcbiAgICAjIFRPRE86IHRva2VuIGV4cGlyZWRcbiAgICBBbGVydC5hbGVydChcbiAgICAgIFwiU29tZXRoaW5nIHdlbnQgd3JvbmcgOihcIlxuICAgICAgXCJQbGVhc2UgY2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uIG9yIHRyeSB0byByZXN0YXJ0IGFwcGxpY2F0aW9uXCJcbiAgICAgIFt0ZXh0OiBcIk9LXCJdXG4gICAgKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gLT4geWllbGQgW1xuICB0YWtlRXZlcnkoQm9udXNlcy5OZXcsIG5ld0JvbnVzKVxuICB0YWtlRXZlcnkoQm9udXNlcy5CdXlUaWNrZXQsIGJ1eVJhZmZsZVRpY2tldClcbl1cbiJdfQ==
