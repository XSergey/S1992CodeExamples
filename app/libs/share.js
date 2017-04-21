var Share, share;

Share = require('react-native-share');

share = function(title, description, image, link) {
  var content;
  if (!link) {
    return;
  }
  content = {
    title: "Share to friends",
    url: link,
    message: title
  };
  return Share.open(content)["catch"]((function(_this) {
    return function() {};
  })(this));
};

module.exports = share;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicy9zaGFyZS5qcyIsInNvdXJjZXMiOlsibGlicy9zaGFyZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLG9CQUFSOztBQUdSLEtBQUEsR0FBUSxTQUFDLEtBQUQsRUFBUSxXQUFSLEVBQXFCLEtBQXJCLEVBQTRCLElBQTVCO0FBQ04sTUFBQTtFQUFBLElBQUcsQ0FBSSxJQUFQO0FBQWlCLFdBQWpCOztFQUVBLE9BQUEsR0FDRTtJQUFBLEtBQUEsRUFBTyxrQkFBUDtJQUNBLEdBQUEsRUFBSyxJQURMO0lBRUEsT0FBQSxFQUFTLEtBRlQ7O1NBSUYsS0FBSyxDQUFDLElBQU4sQ0FBVyxPQUFYLENBQW1CLEVBQUMsS0FBRCxFQUFuQixDQUEwQixDQUFBLFNBQUEsS0FBQTtXQUFBLFNBQUEsR0FBQTtFQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBMUI7QUFSTTs7QUFXUixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIlNoYXJlID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlLXNoYXJlJ1xuXG5cbnNoYXJlID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIGxpbmspIC0+XG4gIGlmIG5vdCBsaW5rIHRoZW4gcmV0dXJuXG5cbiAgY29udGVudCA9XG4gICAgdGl0bGU6IFwiU2hhcmUgdG8gZnJpZW5kc1wiXG4gICAgdXJsOiBsaW5rXG4gICAgbWVzc2FnZTogdGl0bGVcblxuICBTaGFyZS5vcGVuKGNvbnRlbnQpLmNhdGNoID0+XG5cblxubW9kdWxlLmV4cG9ydHMgPSBzaGFyZVxuIl19
