var convertDate, convertKey;

convertDate = require('../utils').convertDate;

convertKey = function(items) {
  var convert;
  convert = function(item) {
    if (!item.key) {
      return item;
    }
    item.id = item.key;
    return item;
  };
  if (Array.isArray(items)) {
    return items.map(convert);
  } else {
    return convert(items);
  }
};

module.exports = function(items) {
  items = convertDate(items, '_createdAt', 'date');
  items = convertKey(items);
  return items;
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpL3JlZHV4L2NvbmZpZy9jb252ZXJ0LmpzIiwic291cmNlcyI6WyJhcGkvcmVkdXgvY29uZmlnL2NvbnZlcnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUMsY0FBZSxPQUFBLENBQVEsVUFBUjs7QUFHaEIsVUFBQSxHQUFhLFNBQUMsS0FBRDtBQUNYLE1BQUE7RUFBQSxPQUFBLEdBQVUsU0FBQyxJQUFEO0lBQ1IsSUFBRyxDQUFJLElBQUksQ0FBQyxHQUFaO0FBQ0UsYUFBTyxLQURUOztJQUdBLElBQUksQ0FBQyxFQUFMLEdBQVUsSUFBSSxDQUFDO0FBQ2YsV0FBTztFQUxDO0VBT1YsSUFBRyxLQUFLLENBQUMsT0FBTixDQUFjLEtBQWQsQ0FBSDtXQUNFLEtBQUssQ0FBQyxHQUFOLENBQVUsT0FBVixFQURGO0dBQUEsTUFBQTtXQUdFLE9BQUEsQ0FBUSxLQUFSLEVBSEY7O0FBUlc7O0FBY2IsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxLQUFEO0VBQ2YsS0FBQSxHQUFRLFdBQUEsQ0FBWSxLQUFaLEVBQW1CLFlBQW5CLEVBQWlDLE1BQWpDO0VBQ1IsS0FBQSxHQUFRLFVBQUEsQ0FBVyxLQUFYO0FBQ1IsU0FBTztBQUhRIiwic291cmNlc0NvbnRlbnQiOlsie2NvbnZlcnREYXRlfSA9IHJlcXVpcmUgJy4uL3V0aWxzJ1xuXG5cbmNvbnZlcnRLZXkgPSAoaXRlbXMpIC0+XG4gIGNvbnZlcnQgPSAoaXRlbSkgLT5cbiAgICBpZiBub3QgaXRlbS5rZXlcbiAgICAgIHJldHVybiBpdGVtXG5cbiAgICBpdGVtLmlkID0gaXRlbS5rZXlcbiAgICByZXR1cm4gaXRlbVxuXG4gIGlmIEFycmF5LmlzQXJyYXkoaXRlbXMpXG4gICAgaXRlbXMubWFwKGNvbnZlcnQpXG4gIGVsc2VcbiAgICBjb252ZXJ0KGl0ZW1zKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gKGl0ZW1zKSAtPlxuICBpdGVtcyA9IGNvbnZlcnREYXRlKGl0ZW1zLCAnX2NyZWF0ZWRBdCcsICdkYXRlJylcbiAgaXRlbXMgPSBjb252ZXJ0S2V5KGl0ZW1zKVxuICByZXR1cm4gaXRlbXNcbiJdfQ==
