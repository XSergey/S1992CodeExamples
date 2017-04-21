var Screen, connect, linking, mapStateToProps;

connect = require('react-redux').connect;

Screen = require('./screen');

linking = require('bawadi-client/app/libs/linking');

mapStateToProps = function(state) {
  var items;
  items = state.about.filter(function(item) {
    return item.get('visible');
  }).sortBy(function(item) {
    return item.get('priority');
  });
  return {
    items: items.toList().toJS(),
    onSelect: function(id) {
      var item, link, parts;
      item = items.get(id);
      if (!(link = item.get('link'))) {
        return;
      }
      parts = link.split(':');
      if (parts.length >= 2 && parts[0] === 'map') {
        return linking.openMap(parts[1]);
      } else {
        return linking.openUrl(link);
      }
    }
  };
};

module.exports = connect(mapStateToProps)(Screen);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9hYm91dC9pbmRleC5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9hYm91dC9pbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQyxVQUFXLE9BQUEsQ0FBUSxhQUFSOztBQUNaLE1BQUEsR0FBUyxPQUFBLENBQVEsVUFBUjs7QUFDVCxPQUFBLEdBQVUsT0FBQSxDQUFRLGdDQUFSOztBQUdWLGVBQUEsR0FBa0IsU0FBQyxLQUFEO0FBQ2hCLE1BQUE7RUFBQSxLQUFBLEdBQVEsS0FBSyxDQUFDLEtBQ1osQ0FBQyxNQURLLENBQ0UsU0FBQyxJQUFEO1dBQVUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxTQUFUO0VBQVYsQ0FERixDQUVOLENBQUMsTUFGSyxDQUVFLFNBQUMsSUFBRDtXQUFVLElBQUksQ0FBQyxHQUFMLENBQVMsVUFBVDtFQUFWLENBRkY7U0FJUjtJQUFBLEtBQUEsRUFBTyxLQUFLLENBQUMsTUFBTixDQUFBLENBQWMsQ0FBQyxJQUFmLENBQUEsQ0FBUDtJQUNBLFFBQUEsRUFBVSxTQUFDLEVBQUQ7QUFDUixVQUFBO01BQUEsSUFBQSxHQUFPLEtBQUssQ0FBQyxHQUFOLENBQVUsRUFBVjtNQUVQLElBQUcsQ0FBSSxDQUFBLElBQUEsR0FBTyxJQUFJLENBQUMsR0FBTCxDQUFTLE1BQVQsQ0FBUCxDQUFQO0FBQ0UsZUFERjs7TUFHQSxLQUFBLEdBQVEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxHQUFYO01BQ1IsSUFBRyxLQUFLLENBQUMsTUFBTixJQUFnQixDQUFoQixJQUFzQixLQUFNLENBQUEsQ0FBQSxDQUFOLEtBQVksS0FBckM7ZUFDRSxPQUFPLENBQUMsT0FBUixDQUFnQixLQUFNLENBQUEsQ0FBQSxDQUF0QixFQURGO09BQUEsTUFBQTtlQUdFLE9BQU8sQ0FBQyxPQUFSLENBQWdCLElBQWhCLEVBSEY7O0lBUFEsQ0FEVjs7QUFMZ0I7O0FBbUJsQixNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFBLENBQVEsZUFBUixDQUFBLENBQXlCLE1BQXpCIiwic291cmNlc0NvbnRlbnQiOlsie2Nvbm5lY3R9ID0gcmVxdWlyZSAncmVhY3QtcmVkdXgnXG5TY3JlZW4gPSByZXF1aXJlICcuL3NjcmVlbidcbmxpbmtpbmcgPSByZXF1aXJlICdzcmMvbGlicy9saW5raW5nJ1xuXG5cbm1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgLT5cbiAgaXRlbXMgPSBzdGF0ZS5hYm91dFxuICAgIC5maWx0ZXIgKGl0ZW0pIC0+IGl0ZW0uZ2V0KCd2aXNpYmxlJylcbiAgICAuc29ydEJ5IChpdGVtKSAtPiBpdGVtLmdldCgncHJpb3JpdHknKVxuXG4gIGl0ZW1zOiBpdGVtcy50b0xpc3QoKS50b0pTKClcbiAgb25TZWxlY3Q6IChpZCkgLT5cbiAgICBpdGVtID0gaXRlbXMuZ2V0KGlkKVxuXG4gICAgaWYgbm90IGxpbmsgPSBpdGVtLmdldCgnbGluaycpXG4gICAgICByZXR1cm5cblxuICAgIHBhcnRzID0gbGluay5zcGxpdCgnOicpXG4gICAgaWYgcGFydHMubGVuZ3RoID49IDIgYW5kIHBhcnRzWzBdIGlzICdtYXAnXG4gICAgICBsaW5raW5nLm9wZW5NYXAocGFydHNbMV0pXG4gICAgZWxzZVxuICAgICAgbGlua2luZy5vcGVuVXJsKGxpbmspXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2NyZWVuKVxuIl19
