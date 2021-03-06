var StyleSheet, gray;

StyleSheet = require('react-native').StyleSheet;

gray = require('bawadi-client/app/colors').gray;

module.exports = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: 'white',
    borderColor: gray,
    borderBottomWidth: 1
  },
  title: {
    marginBottom: 8,
    marginLeft: 48,
    textAlignVertical: 'center',
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: '500',
    flex: 1
  },
  titleIOS: {
    marginBottom: 10,
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: '500',
    flex: 1
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48
  },
  logo: {
    alignSelf: 'flex-start',
    marginLeft: 48,
    width: 128,
    height: 40,
    resizeMode: 'contain'
  },
  logoIOS: {
    alignSelf: 'center',
    width: 128,
    height: 40,
    resizeMode: 'contain'
  },
  searchField: {
    alignSelf: 'stretch',
    height: 44,
    marginHorizontal: 48
  }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9fY29tbW9uL3Rvb2xiYXIvc3R5bGVzLmpzIiwic291cmNlcyI6WyJzY3JlZW5zL19jb21tb24vdG9vbGJhci9zdHlsZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUMsYUFBYyxPQUFBLENBQVEsY0FBUjs7QUFDZCxPQUFRLE9BQUEsQ0FBUSwwQkFBUjs7QUFHVCxNQUFNLENBQUMsT0FBUCxHQUFpQixVQUFVLENBQUMsTUFBWCxDQUNmO0VBQUEsT0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEVBQVI7SUFDQSxlQUFBLEVBQWlCLE9BRGpCO0lBRUEsV0FBQSxFQUFhLElBRmI7SUFHQSxpQkFBQSxFQUFtQixDQUhuQjtHQURGO0VBTUEsS0FBQSxFQUNFO0lBQUEsWUFBQSxFQUFjLENBQWQ7SUFDQSxVQUFBLEVBQVksRUFEWjtJQUVBLGlCQUFBLEVBQW1CLFFBRm5CO0lBR0EsU0FBQSxFQUFXLFlBSFg7SUFJQSxRQUFBLEVBQVUsRUFKVjtJQUtBLFVBQUEsRUFBWSxLQUxaO0lBTUEsSUFBQSxFQUFNLENBTk47R0FQRjtFQWVBLFFBQUEsRUFDRTtJQUFBLFlBQUEsRUFBYyxFQUFkO0lBQ0EsaUJBQUEsRUFBbUIsUUFEbkI7SUFFQSxRQUFBLEVBQVUsRUFGVjtJQUdBLFVBQUEsRUFBWSxLQUhaO0lBSUEsSUFBQSxFQUFNLENBSk47R0FoQkY7RUFzQkEsTUFBQSxFQUNFO0lBQUEsU0FBQSxFQUFXLFFBQVg7SUFDQSxVQUFBLEVBQVksUUFEWjtJQUVBLGNBQUEsRUFBZ0IsUUFGaEI7SUFHQSxNQUFBLEVBQVEsRUFIUjtJQUlBLEtBQUEsRUFBTyxFQUpQO0dBdkJGO0VBNkJBLElBQUEsRUFDRTtJQUFBLFNBQUEsRUFBVyxZQUFYO0lBQ0EsVUFBQSxFQUFZLEVBRFo7SUFFQSxLQUFBLEVBQU8sR0FGUDtJQUdBLE1BQUEsRUFBUSxFQUhSO0lBSUEsVUFBQSxFQUFZLFNBSlo7R0E5QkY7RUFvQ0EsT0FBQSxFQUNFO0lBQUEsU0FBQSxFQUFXLFFBQVg7SUFDQSxLQUFBLEVBQU8sR0FEUDtJQUVBLE1BQUEsRUFBUSxFQUZSO0lBR0EsVUFBQSxFQUFZLFNBSFo7R0FyQ0Y7RUEwQ0EsV0FBQSxFQUNFO0lBQUEsU0FBQSxFQUFXLFNBQVg7SUFDQSxNQUFBLEVBQVEsRUFEUjtJQUVBLGdCQUFBLEVBQWtCLEVBRmxCO0dBM0NGO0NBRGUiLCJzb3VyY2VzQ29udGVudCI6WyJ7U3R5bGVTaGVldH0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG57Z3JheX0gPSByZXF1aXJlICdzcmMvY29sb3JzJ1xuXG5cbm1vZHVsZS5leHBvcnRzID0gU3R5bGVTaGVldC5jcmVhdGVcbiAgdG9vbGJhcjpcbiAgICBoZWlnaHQ6IDU2XG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG4gICAgYm9yZGVyQ29sb3I6IGdyYXlcbiAgICBib3JkZXJCb3R0b21XaWR0aDogMVxuXG4gIHRpdGxlOlxuICAgIG1hcmdpbkJvdHRvbTogOFxuICAgIG1hcmdpbkxlZnQ6IDQ4XG4gICAgdGV4dEFsaWduVmVydGljYWw6ICdjZW50ZXInXG4gICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCdcbiAgICBmb250U2l6ZTogMjBcbiAgICBmb250V2VpZ2h0OiAnNTAwJ1xuICAgIGZsZXg6IDFcblxuICB0aXRsZUlPUzpcbiAgICBtYXJnaW5Cb3R0b206IDEwXG4gICAgdGV4dEFsaWduVmVydGljYWw6ICdjZW50ZXInXG4gICAgZm9udFNpemU6IDIwXG4gICAgZm9udFdlaWdodDogJzUwMCdcbiAgICBmbGV4OiAxXG5cbiAgYnV0dG9uOlxuICAgIGFsaWduU2VsZjogJ2NlbnRlcidcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIGhlaWdodDogNDhcbiAgICB3aWR0aDogNDhcblxuICBsb2dvOlxuICAgIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnXG4gICAgbWFyZ2luTGVmdDogNDhcbiAgICB3aWR0aDogMTI4XG4gICAgaGVpZ2h0OiA0MFxuICAgIHJlc2l6ZU1vZGU6ICdjb250YWluJ1xuXG4gIGxvZ29JT1M6XG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJ1xuICAgIHdpZHRoOiAxMjhcbiAgICBoZWlnaHQ6IDQwXG4gICAgcmVzaXplTW9kZTogJ2NvbnRhaW4nXG5cbiAgc2VhcmNoRmllbGQ6XG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCdcbiAgICBoZWlnaHQ6IDQ0XG4gICAgbWFyZ2luSG9yaXpvbnRhbDogNDhcbiJdfQ==
