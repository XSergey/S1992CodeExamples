var async, capitalizeFirstLetter, delay, genRandomHex, getRandomColor, isObjectLike, lowercaseFirstLetter, mapObject, toLowerCase;

isObjectLike = require('lodash.isobjectlike');

getRandomColor = function() {
  var i, j, letters, parts;
  letters = '0123456789abcdef'.split('');
  for (i = j = 0; j < 6; i = ++j) {
    parts = letters[Math.floor(Math.random() * 16)];
  }
  return "#" + (parts.join(''));
};

genRandomHex = function() {
  return Math.random().toString(36).substring(2);
};

capitalizeFirstLetter = function(str) {
  return str[0].toUpperCase() + str.slice(1);
};

lowercaseFirstLetter = function(str) {
  return str[0].toLowerCase() + str.slice(1);
};

toLowerCase = function(str) {
  return str.toLowerCase();
};

mapObject = function(object, setValue, setKey, reduceObject) {
  var _mapObject;
  _mapObject = function(object, setValue, setKey, path) {
    var key, nextPath, result, value;
    if (path == null) {
      path = [];
    }
    result = {};
    for (key in object) {
      value = object[key];
      nextPath = path.concat(key);
      key = (typeof setKey === "function" ? setKey(key, nextPath) : void 0) || key;
      if (isObjectLike(value)) {
        result[key] = _mapObject(value, setValue, setKey, nextPath);
      } else {
        result[key] = (typeof setValue === "function" ? setValue(value, nextPath) : void 0) || value;
      }
    }
    return (typeof reduceObject === "function" ? reduceObject(result, path) : void 0) || result;
  };
  return _mapObject(object, setValue, setKey);
};

delay = function(time, callback) {
  return setTimeout(callback, time);
};

async = function(callback) {
  return delay(0, callback);
};

module.exports = {
  getRandomColor: getRandomColor,
  genRandomHex: genRandomHex,
  capitalizeFirstLetter: capitalizeFirstLetter,
  lowercaseFirstLetter: lowercaseFirstLetter,
  toLowerCase: toLowerCase,
  mapObject: mapObject,
  delay: delay,
  async: async
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicy91dGlscy5qcyIsInNvdXJjZXMiOlsibGlicy91dGlscy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxZQUFBLEdBQWUsT0FBQSxDQUFRLHFCQUFSOztBQUdmLGNBQUEsR0FBaUIsU0FBQTtBQUNmLE1BQUE7RUFBQSxPQUFBLEdBQVUsa0JBQWtCLENBQUMsS0FBbkIsQ0FBeUIsRUFBekI7QUFDVixPQUF5RCx5QkFBekQ7SUFBQSxLQUFBLEdBQVEsT0FBUSxDQUFBLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLEVBQTNCLENBQUE7QUFBaEI7QUFDQSxTQUFPLEdBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFOLENBQVcsRUFBWCxDQUFEO0FBSEs7O0FBTWpCLFlBQUEsR0FBZSxTQUFBO1NBQ2IsSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFhLENBQUMsUUFBZCxDQUF1QixFQUF2QixDQUEwQixDQUFDLFNBQTNCLENBQXFDLENBQXJDO0FBRGE7O0FBSWYscUJBQUEsR0FBd0IsU0FBQyxHQUFEO1NBQ3RCLEdBQUksQ0FBQSxDQUFBLENBQUUsQ0FBQyxXQUFQLENBQUEsQ0FBQSxHQUF1QixHQUFJO0FBREw7O0FBSXhCLG9CQUFBLEdBQXVCLFNBQUMsR0FBRDtTQUNyQixHQUFJLENBQUEsQ0FBQSxDQUFFLENBQUMsV0FBUCxDQUFBLENBQUEsR0FBdUIsR0FBSTtBQUROOztBQUl2QixXQUFBLEdBQWMsU0FBQyxHQUFEO1NBQ1osR0FBRyxDQUFDLFdBQUosQ0FBQTtBQURZOztBQUlkLFNBQUEsR0FBWSxTQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE1BQW5CLEVBQTJCLFlBQTNCO0FBQ1YsTUFBQTtFQUFBLFVBQUEsR0FBYSxTQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE1BQW5CLEVBQTJCLElBQTNCO0FBQ1gsUUFBQTs7TUFEc0MsT0FBTzs7SUFDN0MsTUFBQSxHQUFTO0FBRVQsU0FBQSxhQUFBOztNQUNFLFFBQUEsR0FBVyxJQUFJLENBQUMsTUFBTCxDQUFZLEdBQVo7TUFDWCxHQUFBLG1DQUFNLE9BQVEsS0FBSyxtQkFBYixJQUEwQjtNQUVoQyxJQUFHLFlBQUEsQ0FBYSxLQUFiLENBQUg7UUFDRSxNQUFPLENBQUEsR0FBQSxDQUFQLEdBQWMsVUFBQSxDQUFXLEtBQVgsRUFBa0IsUUFBbEIsRUFBNEIsTUFBNUIsRUFBb0MsUUFBcEMsRUFEaEI7T0FBQSxNQUFBO1FBR0UsTUFBTyxDQUFBLEdBQUEsQ0FBUCxxQ0FBYyxTQUFVLE9BQU8sbUJBQWpCLElBQThCLE1BSDlDOztBQUpGO0FBU0EsaURBQU8sYUFBYyxRQUFRLGVBQXRCLElBQStCO0VBWjNCO1NBY2IsVUFBQSxDQUFXLE1BQVgsRUFBbUIsUUFBbkIsRUFBNkIsTUFBN0I7QUFmVTs7QUFrQlosS0FBQSxHQUFRLFNBQUMsSUFBRCxFQUFPLFFBQVA7U0FDTixVQUFBLENBQVcsUUFBWCxFQUFxQixJQUFyQjtBQURNOztBQUlSLEtBQUEsR0FBUSxTQUFDLFFBQUQ7U0FDTixLQUFBLENBQU0sQ0FBTixFQUFTLFFBQVQ7QUFETTs7QUFJUixNQUFNLENBQUMsT0FBUCxHQUFpQjtFQUNmLGdCQUFBLGNBRGU7RUFFZixjQUFBLFlBRmU7RUFHZix1QkFBQSxxQkFIZTtFQUlmLHNCQUFBLG9CQUplO0VBS2YsYUFBQSxXQUxlO0VBTWYsV0FBQSxTQU5lO0VBT2YsT0FBQSxLQVBlO0VBUWYsT0FBQSxLQVJlIiwic291cmNlc0NvbnRlbnQiOlsiaXNPYmplY3RMaWtlID0gcmVxdWlyZSAnbG9kYXNoLmlzb2JqZWN0bGlrZSdcblxuXG5nZXRSYW5kb21Db2xvciA9IC0+XG4gIGxldHRlcnMgPSAnMDEyMzQ1Njc4OWFiY2RlZicuc3BsaXQoJycpXG4gIHBhcnRzID0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildIGZvciBpIGluIFswLi4uNl1cbiAgcmV0dXJuIFwiIyN7cGFydHMuam9pbignJyl9XCJcblxuXG5nZW5SYW5kb21IZXggPSAtPlxuICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMilcblxuXG5jYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyKSAtPlxuICBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0clsxLi5dXG5cblxubG93ZXJjYXNlRmlyc3RMZXR0ZXIgPSAoc3RyKSAtPlxuICBzdHJbMF0udG9Mb3dlckNhc2UoKSArIHN0clsxLi5dICBcblxuXG50b0xvd2VyQ2FzZSA9IChzdHIpIC0+XG4gIHN0ci50b0xvd2VyQ2FzZSgpICBcblxuXG5tYXBPYmplY3QgPSAob2JqZWN0LCBzZXRWYWx1ZSwgc2V0S2V5LCByZWR1Y2VPYmplY3QpIC0+XG4gIF9tYXBPYmplY3QgPSAob2JqZWN0LCBzZXRWYWx1ZSwgc2V0S2V5LCBwYXRoID0gW10pIC0+XG4gICAgcmVzdWx0ID0ge31cblxuICAgIGZvciBrZXksIHZhbHVlIG9mIG9iamVjdFxuICAgICAgbmV4dFBhdGggPSBwYXRoLmNvbmNhdChrZXkpXG4gICAgICBrZXkgPSBzZXRLZXk/KGtleSwgbmV4dFBhdGgpIG9yIGtleVxuXG4gICAgICBpZiBpc09iamVjdExpa2UodmFsdWUpXG4gICAgICAgIHJlc3VsdFtrZXldID0gX21hcE9iamVjdCh2YWx1ZSwgc2V0VmFsdWUsIHNldEtleSwgbmV4dFBhdGgpXG4gICAgICBlbHNlXG4gICAgICAgIHJlc3VsdFtrZXldID0gc2V0VmFsdWU/KHZhbHVlLCBuZXh0UGF0aCkgb3IgdmFsdWVcblxuICAgIHJldHVybiByZWR1Y2VPYmplY3Q/KHJlc3VsdCwgcGF0aCkgb3IgcmVzdWx0XG5cbiAgX21hcE9iamVjdChvYmplY3QsIHNldFZhbHVlLCBzZXRLZXkpXG5cblxuZGVsYXkgPSAodGltZSwgY2FsbGJhY2spIC0+XG4gIHNldFRpbWVvdXQoY2FsbGJhY2ssIHRpbWUpXG5cblxuYXN5bmMgPSAoY2FsbGJhY2spIC0+XG4gIGRlbGF5KDAsIGNhbGxiYWNrKVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRSYW5kb21Db2xvclxuICBnZW5SYW5kb21IZXhcbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyXG4gIGxvd2VyY2FzZUZpcnN0TGV0dGVyXG4gIHRvTG93ZXJDYXNlXG4gIG1hcE9iamVjdFxuICBkZWxheVxuICBhc3luY1xufVxuIl19
