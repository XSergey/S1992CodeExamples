var StyleSheet, colors;

StyleSheet = require('react-native').StyleSheet;

colors = require('bawadi-client/app/colors');

module.exports = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    paddingHorizontal: 16
  },
  image: {
    marginBottom: 8,
    height: 128,
    width: null,
    resizeMode: 'contain'
  },
  info: {
    marginTop: 8
  },
  firstButton: {
    marginTop: 16
  },
  button: {
    marginVertical: 8
  },
  bonus: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bonusPoints: {
    fontSize: 36,
    color: colors.lightGreen
  },
  tickets: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ticketsText: {
    fontSize: 36,
    color: colors.orange
  },
  ticketsIcon: {
    marginTop: 6
  },
  activeRaffle: {
    alignSelf: 'flex-end',
    color: colors.orange,
    fontSize: 24
  }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9yYWZmbGUvc3R5bGVzLmpzIiwic291cmNlcyI6WyJzY3JlZW5zL3JhZmZsZS9zdHlsZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUMsYUFBYyxPQUFBLENBQVEsY0FBUjs7QUFDZixNQUFBLEdBQVMsT0FBQSxDQUFRLDBCQUFSOztBQUdULE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFVBQVUsQ0FBQyxNQUFYLENBQ2Y7RUFBQSxNQUFBLEVBQ0U7SUFBQSxlQUFBLEVBQWlCLE9BQWpCO0lBQ0EsaUJBQUEsRUFBbUIsRUFEbkI7R0FERjtFQUlBLEtBQUEsRUFDRTtJQUFBLFlBQUEsRUFBYyxDQUFkO0lBQ0EsTUFBQSxFQUFRLEdBRFI7SUFFQSxLQUFBLEVBQU8sSUFGUDtJQUdBLFVBQUEsRUFBWSxTQUhaO0dBTEY7RUFVQSxJQUFBLEVBQ0U7SUFBQSxTQUFBLEVBQVcsQ0FBWDtHQVhGO0VBYUEsV0FBQSxFQUNFO0lBQUEsU0FBQSxFQUFXLEVBQVg7R0FkRjtFQWdCQSxNQUFBLEVBQ0U7SUFBQSxjQUFBLEVBQWdCLENBQWhCO0dBakJGO0VBbUJBLEtBQUEsRUFDRTtJQUFBLGFBQUEsRUFBZSxLQUFmO0lBQ0EsY0FBQSxFQUFnQixlQURoQjtHQXBCRjtFQXVCQSxXQUFBLEVBQ0U7SUFBQSxRQUFBLEVBQVUsRUFBVjtJQUNBLEtBQUEsRUFBTyxNQUFNLENBQUMsVUFEZDtHQXhCRjtFQTJCQSxPQUFBLEVBQ0U7SUFBQSxhQUFBLEVBQWUsS0FBZjtJQUNBLFVBQUEsRUFBWSxRQURaO0dBNUJGO0VBK0JBLFdBQUEsRUFDRTtJQUFBLFFBQUEsRUFBVSxFQUFWO0lBQ0EsS0FBQSxFQUFPLE1BQU0sQ0FBQyxNQURkO0dBaENGO0VBbUNBLFdBQUEsRUFDRTtJQUFBLFNBQUEsRUFBVyxDQUFYO0dBcENGO0VBc0NBLFlBQUEsRUFDRTtJQUFBLFNBQUEsRUFBVyxVQUFYO0lBQ0EsS0FBQSxFQUFPLE1BQU0sQ0FBQyxNQURkO0lBRUEsUUFBQSxFQUFVLEVBRlY7R0F2Q0Y7Q0FEZSIsInNvdXJjZXNDb250ZW50IjpbIntTdHlsZVNoZWV0fSA9IHJlcXVpcmUgJ3JlYWN0LW5hdGl2ZSdcbmNvbG9ycyA9IHJlcXVpcmUgJ3NyYy9jb2xvcnMnXG5cblxubW9kdWxlLmV4cG9ydHMgPSBTdHlsZVNoZWV0LmNyZWF0ZVxuICBzY3JlZW46XG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG4gICAgcGFkZGluZ0hvcml6b250YWw6IDE2XG5cbiAgaW1hZ2U6XG4gICAgbWFyZ2luQm90dG9tOiA4XG4gICAgaGVpZ2h0OiAxMjhcbiAgICB3aWR0aDogbnVsbFxuICAgIHJlc2l6ZU1vZGU6ICdjb250YWluJ1xuXG4gIGluZm86XG4gICAgbWFyZ2luVG9wOiA4XG5cbiAgZmlyc3RCdXR0b246XG4gICAgbWFyZ2luVG9wOiAxNlxuXG4gIGJ1dHRvbjpcbiAgICBtYXJnaW5WZXJ0aWNhbDogOFxuXG4gIGJvbnVzOlxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ1xuXG4gIGJvbnVzUG9pbnRzOlxuICAgIGZvbnRTaXplOiAzNlxuICAgIGNvbG9yOiBjb2xvcnMubGlnaHRHcmVlblxuXG4gIHRpY2tldHM6XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdydcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuXG4gIHRpY2tldHNUZXh0OlxuICAgIGZvbnRTaXplOiAzNlxuICAgIGNvbG9yOiBjb2xvcnMub3JhbmdlXG5cbiAgdGlja2V0c0ljb246XG4gICAgbWFyZ2luVG9wOiA2XG5cbiAgYWN0aXZlUmFmZmxlOlxuICAgIGFsaWduU2VsZjogJ2ZsZXgtZW5kJ1xuICAgIGNvbG9yOiBjb2xvcnMub3JhbmdlXG4gICAgZm9udFNpemU6IDI0XG4iXX0=
