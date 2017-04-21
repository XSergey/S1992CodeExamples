var StyleSheet, colors;

StyleSheet = require('react-native').StyleSheet;

colors = require('bawadi-client/app/colors');

module.exports = StyleSheet.create({
  scroll: {
    top: 8,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoContainer: {
    flexDirection: 'row'
  },
  name: {
    marginLeft: 22,
    fontSize: 18
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc'
  },
  connected: {
    marginRight: 16,
    marginLeft: 8,
    color: colors.lightGreen,
    fontWeight: 'bold'
  }
});

module.exports.extra = {
  connectButton: {
    textColor: colors.blue
  }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9wcm9maWxlL19jb21tb24vc29jaWFsL3N0eWxlcy5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9wcm9maWxlL19jb21tb24vc29jaWFsL3N0eWxlcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQyxhQUFjLE9BQUEsQ0FBUSxjQUFSOztBQUNmLE1BQUEsR0FBUyxPQUFBLENBQVEsMEJBQVI7O0FBR1QsTUFBTSxDQUFDLE9BQVAsR0FBaUIsVUFBVSxDQUFDLE1BQVgsQ0FDZjtFQUFBLE1BQUEsRUFDRTtJQUFBLEdBQUEsRUFBSyxDQUFMO0lBQ0EsTUFBQSxFQUFRLEVBRFI7SUFFQSxhQUFBLEVBQWUsS0FGZjtJQUdBLGNBQUEsRUFBZ0IsZUFIaEI7SUFJQSxVQUFBLEVBQVksUUFKWjtHQURGO0VBT0EsYUFBQSxFQUNFO0lBQUEsYUFBQSxFQUFlLEtBQWY7R0FSRjtFQVVBLElBQUEsRUFDRTtJQUFBLFVBQUEsRUFBWSxFQUFaO0lBQ0EsUUFBQSxFQUFVLEVBRFY7R0FYRjtFQWNBLFNBQUEsRUFDRTtJQUFBLE1BQUEsRUFBUSxDQUFSO0lBQ0EsZUFBQSxFQUFpQixTQURqQjtHQWZGO0VBa0JBLFNBQUEsRUFDRTtJQUFBLFdBQUEsRUFBYSxFQUFiO0lBQ0EsVUFBQSxFQUFZLENBRFo7SUFFQSxLQUFBLEVBQU8sTUFBTSxDQUFDLFVBRmQ7SUFHQSxVQUFBLEVBQVksTUFIWjtHQW5CRjtDQURlOztBQTBCakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLEdBQ0U7RUFBQSxhQUFBLEVBQ0U7SUFBQSxTQUFBLEVBQVcsTUFBTSxDQUFDLElBQWxCO0dBREYiLCJzb3VyY2VzQ29udGVudCI6WyJ7U3R5bGVTaGVldH0gPSByZXF1aXJlICdyZWFjdC1uYXRpdmUnXG5jb2xvcnMgPSByZXF1aXJlICdzcmMvY29sb3JzJ1xuXG5cbm1vZHVsZS5leHBvcnRzID0gU3R5bGVTaGVldC5jcmVhdGVcbiAgc2Nyb2xsOlxuICAgIHRvcDogOFxuICAgIGhlaWdodDogNDhcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93J1xuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuXG4gIGluZm9Db250YWluZXI6XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdydcblxuICBuYW1lOlxuICAgIG1hcmdpbkxlZnQ6IDIyXG4gICAgZm9udFNpemU6IDE4XG5cbiAgc2VwYXJhdG9yOlxuICAgIGhlaWdodDogMVxuICAgIGJhY2tncm91bmRDb2xvcjogJyNjY2NjY2MnXG5cbiAgY29ubmVjdGVkOlxuICAgIG1hcmdpblJpZ2h0OiAxNlxuICAgIG1hcmdpbkxlZnQ6IDhcbiAgICBjb2xvcjogY29sb3JzLmxpZ2h0R3JlZW5cbiAgICBmb250V2VpZ2h0OiAnYm9sZCdcblxuXG5tb2R1bGUuZXhwb3J0cy5leHRyYSA9XG4gIGNvbm5lY3RCdXR0b246XG4gICAgdGV4dENvbG9yOiBjb2xvcnMuYmx1ZVxuIl19
