var PNF, PhoneUtil, RouteActions, RouteType, Screen, authActions, connect, mapDispatchToProps, mapStateToProps, phoneUtils, ref, ref1, token;

connect = require('react-redux').connect;

ref = require('google-libphonenumber'), PNF = ref.PhoneNumberFormat, PhoneUtil = ref.PhoneNumberUtil;

ref1 = require('react-native-router-flux'), RouteActions = ref1.Actions, RouteType = ref1.ActionConst;

authActions = require('bawadi-client/app/redux/actions').user.auth;

Screen = require('./screen');

phoneUtils = PhoneUtil.getInstance();

token = null;

mapStateToProps = function(state) {
  var auth, close, info, newToken, route;
  auth = state.user.auth;
  info = state.user.info;
  route = state.route;
  close = function() {
    if (route.get('isRoot')) {
      return RouteActions.main({
        type: RouteType.REPLACE
      });
    } else {
      try {
        return RouteActions.pop();
      } catch (error) {

      }
    }
  };
  newToken = auth.get('token');
  if (newToken !== token) {
    token = newToken;
    close();
    return {};
  }
  return {
    processing: auth.get('processing'),
    codeSent: auth.get('codeSent'),
    phone: info.get('phone'),
    age: info.get('age'),
    gender: info.get('gender'),
    error: auth.get('signUpError'),
    onSkip: close
  };
};

mapDispatchToProps = function(dispatch) {
  return {
    sendCode: function(info) {
      var e, phone;
      phone = info.phone;
      try {
        phone = phoneUtils.parse(phone);
        if (!phoneUtils.isValidNumber(phone)) {
          throw new Error("Invalid phone. Phone must be in international format (971 50 1234567)");
        }
      } catch (error) {
        e = error;
        dispatch(authActions.signUpError(e.message));
        return;
      }
      return dispatch(authActions.signUp(info));
    },
    verify: function(phone, code) {
      return dispatch(authActions.verify({
        phone: phone,
        code: code
      }));
    },
    clearError: function() {
      return dispatch(authActions.signUpError(null));
    },
    clearSentState: function() {
      return dispatch(authActions.codeSent(false));
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Screen);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9zaWduLXVwL2luZGV4LmpzIiwic291cmNlcyI6WyJzY3JlZW5zL3NpZ24tdXAvaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUMsVUFBVyxPQUFBLENBQVEsYUFBUjs7QUFDWixNQUF1RCxPQUFBLENBQVEsdUJBQVIsQ0FBdkQsRUFBb0IsVUFBbkIsaUJBQUQsRUFBMEMsZ0JBQWpCOztBQUN6QixPQUdJLE9BQUEsQ0FBUSwwQkFBUixDQUhKLEVBQ1csb0JBQVQsT0FERixFQUVlLGlCQUFiOztBQUVXLGNBQWUsT0FBQSxDQUFRLGlDQUFSLEVBQTNCLEtBQU07O0FBQ1AsTUFBQSxHQUFTLE9BQUEsQ0FBUSxVQUFSOztBQUdULFVBQUEsR0FBYSxTQUFTLENBQUMsV0FBVixDQUFBOztBQUNiLEtBQUEsR0FBUTs7QUFHUixlQUFBLEdBQWtCLFNBQUMsS0FBRDtBQUNoQixNQUFBO0VBQUEsSUFBQSxHQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7RUFDbEIsSUFBQSxHQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7RUFDbEIsS0FBQSxHQUFRLEtBQUssQ0FBQztFQUVkLEtBQUEsR0FBUSxTQUFBO0lBQ04sSUFBRyxLQUFLLENBQUMsR0FBTixDQUFVLFFBQVYsQ0FBSDthQUNFLFlBQVksQ0FBQyxJQUFiLENBQWtCO1FBQUEsSUFBQSxFQUFNLFNBQVMsQ0FBQyxPQUFoQjtPQUFsQixFQURGO0tBQUEsTUFBQTtBQUdFO2VBQUksWUFBWSxDQUFDLEdBQWIsQ0FBQSxFQUFKO09BQUEsYUFBQTtBQUFBO09BSEY7O0VBRE07RUFNUixRQUFBLEdBQVcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxPQUFUO0VBQ1gsSUFBRyxRQUFBLEtBQWMsS0FBakI7SUFDRSxLQUFBLEdBQVE7SUFDUixLQUFBLENBQUE7QUFDQSxXQUFPLEdBSFQ7O1NBS0E7SUFBQSxVQUFBLEVBQVksSUFBSSxDQUFDLEdBQUwsQ0FBUyxZQUFULENBQVo7SUFDQSxRQUFBLEVBQVUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxVQUFULENBRFY7SUFFQSxLQUFBLEVBQU8sSUFBSSxDQUFDLEdBQUwsQ0FBUyxPQUFULENBRlA7SUFHQSxHQUFBLEVBQUssSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFULENBSEw7SUFJQSxNQUFBLEVBQVEsSUFBSSxDQUFDLEdBQUwsQ0FBUyxRQUFULENBSlI7SUFLQSxLQUFBLEVBQU8sSUFBSSxDQUFDLEdBQUwsQ0FBUyxhQUFULENBTFA7SUFNQSxNQUFBLEVBQVEsS0FOUjs7QUFqQmdCOztBQTBCbEIsa0JBQUEsR0FBcUIsU0FBQyxRQUFEO1NBQ25CO0lBQUEsUUFBQSxFQUFVLFNBQUMsSUFBRDtBQUNSLFVBQUE7TUFBQSxLQUFBLEdBQVEsSUFBSSxDQUFDO0FBRWI7UUFDRSxLQUFBLEdBQVEsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsS0FBakI7UUFDUixJQUFHLENBQUksVUFBVSxDQUFDLGFBQVgsQ0FBeUIsS0FBekIsQ0FBUDtBQUNFLGdCQUFNLElBQUksS0FBSixDQUFVLHVFQUFWLEVBRFI7U0FGRjtPQUFBLGFBQUE7UUFJTTtRQUNKLFFBQUEsQ0FBUyxXQUFXLENBQUMsV0FBWixDQUF3QixDQUFDLENBQUMsT0FBMUIsQ0FBVDtBQUNBLGVBTkY7O2FBUUEsUUFBQSxDQUFTLFdBQVcsQ0FBQyxNQUFaLENBQW1CLElBQW5CLENBQVQ7SUFYUSxDQUFWO0lBYUEsTUFBQSxFQUFRLFNBQUMsS0FBRCxFQUFRLElBQVI7YUFDTixRQUFBLENBQVMsV0FBVyxDQUFDLE1BQVosQ0FBbUI7UUFBQyxPQUFBLEtBQUQ7UUFBUSxNQUFBLElBQVI7T0FBbkIsQ0FBVDtJQURNLENBYlI7SUFnQkEsVUFBQSxFQUFZLFNBQUE7YUFDVixRQUFBLENBQVMsV0FBVyxDQUFDLFdBQVosQ0FBd0IsSUFBeEIsQ0FBVDtJQURVLENBaEJaO0lBbUJBLGNBQUEsRUFBZ0IsU0FBQTthQUNkLFFBQUEsQ0FBUyxXQUFXLENBQUMsUUFBWixDQUFxQixLQUFyQixDQUFUO0lBRGMsQ0FuQmhCOztBQURtQjs7QUF3QnJCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLE9BQUEsQ0FBUSxlQUFSLEVBQXlCLGtCQUF6QixDQUFBLENBQTZDLE1BQTdDIiwic291cmNlc0NvbnRlbnQiOlsie2Nvbm5lY3R9ID0gcmVxdWlyZSAncmVhY3QtcmVkdXgnXG57UGhvbmVOdW1iZXJGb3JtYXQ6IFBORiwgUGhvbmVOdW1iZXJVdGlsOiBQaG9uZVV0aWx9ID0gcmVxdWlyZSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJ1xue1xuICBBY3Rpb25zOiBSb3V0ZUFjdGlvbnNcbiAgQWN0aW9uQ29uc3Q6IFJvdXRlVHlwZVxufSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZS1yb3V0ZXItZmx1eCdcbnt1c2VyOiBhdXRoOiBhdXRoQWN0aW9uc30gPSByZXF1aXJlICdzcmMvcmVkdXgvYWN0aW9ucydcblNjcmVlbiA9IHJlcXVpcmUgJy4vc2NyZWVuJ1xuXG5cbnBob25lVXRpbHMgPSBQaG9uZVV0aWwuZ2V0SW5zdGFuY2UoKVxudG9rZW4gPSBudWxsXG5cblxubWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSAtPlxuICBhdXRoID0gc3RhdGUudXNlci5hdXRoXG4gIGluZm8gPSBzdGF0ZS51c2VyLmluZm9cbiAgcm91dGUgPSBzdGF0ZS5yb3V0ZVxuXG4gIGNsb3NlID0gLT5cbiAgICBpZiByb3V0ZS5nZXQoJ2lzUm9vdCcpXG4gICAgICBSb3V0ZUFjdGlvbnMubWFpbih0eXBlOiBSb3V0ZVR5cGUuUkVQTEFDRSlcbiAgICBlbHNlXG4gICAgICB0cnkgUm91dGVBY3Rpb25zLnBvcCgpIGNhdGNoXG5cbiAgbmV3VG9rZW4gPSBhdXRoLmdldCgndG9rZW4nKVxuICBpZiBuZXdUb2tlbiBpc250IHRva2VuICMgRklYTUU6IGhhY2tcbiAgICB0b2tlbiA9IG5ld1Rva2VuXG4gICAgY2xvc2UoKVxuICAgIHJldHVybiB7fVxuXG4gIHByb2Nlc3Npbmc6IGF1dGguZ2V0KCdwcm9jZXNzaW5nJylcbiAgY29kZVNlbnQ6IGF1dGguZ2V0KCdjb2RlU2VudCcpXG4gIHBob25lOiBpbmZvLmdldCgncGhvbmUnKVxuICBhZ2U6IGluZm8uZ2V0KCdhZ2UnKVxuICBnZW5kZXI6IGluZm8uZ2V0KCdnZW5kZXInKVxuICBlcnJvcjogYXV0aC5nZXQoJ3NpZ25VcEVycm9yJylcbiAgb25Ta2lwOiBjbG9zZVxuXG5cbm1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgLT5cbiAgc2VuZENvZGU6IChpbmZvKSAtPlxuICAgIHBob25lID0gaW5mby5waG9uZVxuXG4gICAgdHJ5XG4gICAgICBwaG9uZSA9IHBob25lVXRpbHMucGFyc2UocGhvbmUpXG4gICAgICBpZiBub3QgcGhvbmVVdGlscy5pc1ZhbGlkTnVtYmVyKHBob25lKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBob25lLiBQaG9uZSBtdXN0IGJlIGluIGludGVybmF0aW9uYWwgZm9ybWF0ICg5NzEgNTAgMTIzNDU2NylcIilcbiAgICBjYXRjaCBlXG4gICAgICBkaXNwYXRjaChhdXRoQWN0aW9ucy5zaWduVXBFcnJvcihlLm1lc3NhZ2UpKVxuICAgICAgcmV0dXJuXG5cbiAgICBkaXNwYXRjaChhdXRoQWN0aW9ucy5zaWduVXAoaW5mbykpXG5cbiAgdmVyaWZ5OiAocGhvbmUsIGNvZGUpIC0+XG4gICAgZGlzcGF0Y2goYXV0aEFjdGlvbnMudmVyaWZ5KHtwaG9uZSwgY29kZX0pKVxuXG4gIGNsZWFyRXJyb3I6IC0+XG4gICAgZGlzcGF0Y2goYXV0aEFjdGlvbnMuc2lnblVwRXJyb3IobnVsbCkpXG5cbiAgY2xlYXJTZW50U3RhdGU6IC0+XG4gICAgZGlzcGF0Y2goYXV0aEFjdGlvbnMuY29kZVNlbnQobm8pKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2NyZWVuKVxuIl19
