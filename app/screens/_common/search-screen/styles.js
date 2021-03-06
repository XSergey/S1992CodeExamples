var PixelRatio, StyleSheet, ref;

ref = require('react-native'), StyleSheet = ref.StyleSheet, PixelRatio = ref.PixelRatio;

module.exports = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  overlay: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.5
  },
  list: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white'
  },
  row: {
    height: 76,
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    marginLeft: 8,
    fontSize: PixelRatio.get() > 2 ? 18 : 14
  },
  image: {
    width: 96,
    height: 32,
    resizeMode: 'contain'
  }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9fY29tbW9uL3NlYXJjaC1zY3JlZW4vc3R5bGVzLmpzIiwic291cmNlcyI6WyJzY3JlZW5zL19jb21tb24vc2VhcmNoLXNjcmVlbi9zdHlsZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsTUFBMkIsT0FBQSxDQUFRLGNBQVIsQ0FBM0IsRUFBQywyQkFBRCxFQUFhOztBQUdiLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFVBQVUsQ0FBQyxNQUFYLENBQ2Y7RUFBQSxNQUFBLEVBQ0U7SUFBQSxJQUFBLEVBQU0sQ0FBTjtHQURGO0VBR0EsU0FBQSxFQUNFO0lBQUEsUUFBQSxFQUFVLFVBQVY7SUFDQSxHQUFBLEVBQUssQ0FETDtJQUVBLElBQUEsRUFBTSxDQUZOO0lBR0EsS0FBQSxFQUFPLENBSFA7SUFJQSxNQUFBLEVBQVEsQ0FKUjtHQUpGO0VBVUEsT0FBQSxFQUNFO0lBQUEsSUFBQSxFQUFNLENBQU47SUFDQSxlQUFBLEVBQWlCLE9BRGpCO0lBRUEsT0FBQSxFQUFTLEdBRlQ7R0FYRjtFQWVBLElBQUEsRUFDRTtJQUFBLFFBQUEsRUFBVSxVQUFWO0lBQ0EsR0FBQSxFQUFLLENBREw7SUFFQSxJQUFBLEVBQU0sQ0FGTjtJQUdBLEtBQUEsRUFBTyxDQUhQO0lBSUEsZUFBQSxFQUFpQixPQUpqQjtHQWhCRjtFQXNCQSxHQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsRUFBUjtJQUNBLFVBQUEsRUFBWSxRQURaO0lBRUEsYUFBQSxFQUFlLEtBRmY7R0F2QkY7RUEyQkEsS0FBQSxFQUNFO0lBQUEsVUFBQSxFQUFZLENBQVo7SUFDQSxRQUFBLEVBQWEsVUFBVSxDQUFDLEdBQVgsQ0FBQSxDQUFBLEdBQW1CLENBQXRCLEdBQTZCLEVBQTdCLEdBQXFDLEVBRC9DO0dBNUJGO0VBK0JBLEtBQUEsRUFDRTtJQUFBLEtBQUEsRUFBTyxFQUFQO0lBQ0EsTUFBQSxFQUFRLEVBRFI7SUFFQSxVQUFBLEVBQVksU0FGWjtHQWhDRjtDQURlIiwic291cmNlc0NvbnRlbnQiOlsie1N0eWxlU2hlZXQsIFBpeGVsUmF0aW99ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlJ1xuXG5cbm1vZHVsZS5leHBvcnRzID0gU3R5bGVTaGVldC5jcmVhdGVcbiAgc2NyZWVuOlxuICAgIGZsZXg6IDFcblxuICBjb250YWluZXI6XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB0b3A6IDBcbiAgICBsZWZ0OiAwXG4gICAgcmlnaHQ6IDBcbiAgICBib3R0b206IDBcblxuICBvdmVybGF5OlxuICAgIGZsZXg6IDFcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaydcbiAgICBvcGFjaXR5OiAwLjVcblxuICBsaXN0OlxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgdG9wOiAwXG4gICAgbGVmdDogMFxuICAgIHJpZ2h0OiAwXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG5cbiAgcm93OlxuICAgIGhlaWdodDogNzZcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnXG5cbiAgdGl0bGU6XG4gICAgbWFyZ2luTGVmdDogOFxuICAgIGZvbnRTaXplOiBpZiBQaXhlbFJhdGlvLmdldCgpID4gMiB0aGVuIDE4IGVsc2UgMTRcblxuICBpbWFnZTpcbiAgICB3aWR0aDogOTZcbiAgICBoZWlnaHQ6IDMyXG4gICAgcmVzaXplTW9kZTogJ2NvbnRhaW4nXG4iXX0=
