var Profiler;

Profiler = (function() {
  function Profiler() {
    this.start = Date.now();
    this.last = this.start;
  }

  Profiler.profile = function(fn) {
    var time;
    time = Date.now();
    fn();
    return Date.now() - time;
  };

  Profiler.prototype.tick = function() {
    var delta, now;
    now = Date.now();
    delta = now - this.last;
    this.last = now;
    return delta;
  };

  Profiler.prototype.tock = function() {
    return Date.now() - this.start;
  };

  return Profiler;

})();

module.exports = Profiler;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicy9wcm9maWxlci5qcyIsInNvdXJjZXMiOlsibGlicy9wcm9maWxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBTTtFQUNTLGtCQUFBO0lBQ1gsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFJLENBQUMsR0FBTCxDQUFBO0lBQ1QsSUFBQyxDQUFBLElBQUQsR0FBUSxJQUFDLENBQUE7RUFGRTs7RUFJYixRQUFDLENBQUEsT0FBRCxHQUFVLFNBQUMsRUFBRDtBQUNSLFFBQUE7SUFBQSxJQUFBLEdBQU8sSUFBSSxDQUFDLEdBQUwsQ0FBQTtJQUNQLEVBQUEsQ0FBQTtXQUNBLElBQUksQ0FBQyxHQUFMLENBQUEsQ0FBQSxHQUFhO0VBSEw7O3FCQUtWLElBQUEsR0FBTSxTQUFBO0FBQ0osUUFBQTtJQUFBLEdBQUEsR0FBTSxJQUFJLENBQUMsR0FBTCxDQUFBO0lBQ04sS0FBQSxHQUFRLEdBQUEsR0FBTSxJQUFDLENBQUE7SUFDZixJQUFDLENBQUEsSUFBRCxHQUFRO0FBQ1IsV0FBTztFQUpIOztxQkFNTixJQUFBLEdBQU0sU0FBQTtBQUNKLFdBQU8sSUFBSSxDQUFDLEdBQUwsQ0FBQSxDQUFBLEdBQWEsSUFBQyxDQUFBO0VBRGpCOzs7Ozs7QUFJUixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2ZpbGVyXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBzdGFydCA9IERhdGUubm93KClcbiAgICBAbGFzdCA9IEBzdGFydFxuXG4gIEBwcm9maWxlOiAoZm4pIC0+XG4gICAgdGltZSA9IERhdGUubm93KClcbiAgICBmbigpXG4gICAgRGF0ZS5ub3coKSAtIHRpbWVcblxuICB0aWNrOiAtPlxuICAgIG5vdyA9IERhdGUubm93KClcbiAgICBkZWx0YSA9IG5vdyAtIEBsYXN0XG4gICAgQGxhc3QgPSBub3dcbiAgICByZXR1cm4gZGVsdGFcblxuICB0b2NrOiAtPlxuICAgIHJldHVybiBEYXRlLm5vdygpIC0gQHN0YXJ0XG5cbiAgICBcbm1vZHVsZS5leHBvcnRzID0gUHJvZmlsZXJcbiJdfQ==
