var Channel,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Channel = (function() {
  function Channel() {
    this.take = bind(this.take, this);
    this.put = bind(this.put, this);
  }

  Channel.prototype.messages = [];

  Channel.prototype.resolves = [];

  Channel.prototype.put = function(message) {
    var resolve;
    if (resolve = this.resolves.shift()) {
      return resolve(message);
    } else {
      return this.messages.push(message);
    }
  };

  Channel.prototype.take = function() {
    var message;
    if (message = this.messages.shift()) {
      return Promise.resolve(message);
    } else {
      return new Promise((function(_this) {
        return function(resolve) {
          return _this.resolves.push(resolve);
        };
      })(this));
    }
  };

  return Channel;

})();

module.exports = Channel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicy9jaGFubmVsLmpzIiwic291cmNlcyI6WyJsaWJzL2NoYW5uZWwuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsT0FBQTtFQUFBOztBQUFNOzs7Ozs7b0JBQ0osUUFBQSxHQUFVOztvQkFDVixRQUFBLEdBQVU7O29CQUdWLEdBQUEsR0FBSyxTQUFDLE9BQUQ7QUFDSCxRQUFBO0lBQUEsSUFBRyxPQUFBLEdBQVUsSUFBQyxDQUFBLFFBQVEsQ0FBQyxLQUFWLENBQUEsQ0FBYjthQUNFLE9BQUEsQ0FBUSxPQUFSLEVBREY7S0FBQSxNQUFBO2FBR0UsSUFBQyxDQUFBLFFBQVEsQ0FBQyxJQUFWLENBQWUsT0FBZixFQUhGOztFQURHOztvQkFPTCxJQUFBLEdBQU0sU0FBQTtBQUNKLFFBQUE7SUFBQSxJQUFHLE9BQUEsR0FBVSxJQUFDLENBQUEsUUFBUSxDQUFDLEtBQVYsQ0FBQSxDQUFiO2FBQ0UsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsT0FBaEIsRUFERjtLQUFBLE1BQUE7YUFHRSxJQUFJLE9BQUosQ0FBWSxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsT0FBRDtpQkFBYSxLQUFDLENBQUEsUUFBUSxDQUFDLElBQVYsQ0FBZSxPQUFmO1FBQWI7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQVosRUFIRjs7RUFESTs7Ozs7O0FBT1IsTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDaGFubmVsXG4gIG1lc3NhZ2VzOiBbXVxuICByZXNvbHZlczogW11cblxuXG4gIHB1dDogKG1lc3NhZ2UpID0+XG4gICAgaWYgcmVzb2x2ZSA9IEByZXNvbHZlcy5zaGlmdCgpXG4gICAgICByZXNvbHZlKG1lc3NhZ2UpXG4gICAgZWxzZVxuICAgICAgQG1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcblxuXG4gIHRha2U6ID0+XG4gICAgaWYgbWVzc2FnZSA9IEBtZXNzYWdlcy5zaGlmdCgpXG4gICAgICBQcm9taXNlLnJlc29sdmUobWVzc2FnZSlcbiAgICBlbHNlXG4gICAgICBuZXcgUHJvbWlzZSAocmVzb2x2ZSkgPT4gQHJlc29sdmVzLnB1c2gocmVzb2x2ZSlcblxuXG5tb2R1bGUuZXhwb3J0cyA9IENoYW5uZWxcbiJdfQ==
