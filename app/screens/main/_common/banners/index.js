var Banners, Component, ImageCarousell, ListView, React,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = (React = require('react')).Component;

ListView = require('react-native').ListView;

ImageCarousell = require('bawadi-client/app/libs/ImageCarousell')["default"];

Banners = (function(superClass) {
  extend(Banners, superClass);

  function Banners(props) {
    this.select = bind(this.select, this);
    this.changePage = bind(this.changePage, this);
    var dataSource, images;
    Banners.__super__.constructor.apply(this, arguments);
    dataSource = new ListView.DataSource({
      rowHasChanged: (function(_this) {
        return function(r1, r2) {
          return r1 !== r2;
        };
      })(this)
    });
    images = props.items.map(function(item) {
      return {
        uri: item.image,
        id: item.id
      };
    });
    this.state.images = dataSource.cloneWithRows(images);
  }

  Banners.prototype.componentWillUnmount = function() {
    return clearInterval(this.timerId);
  };

  Banners.prototype.state = {
    page: 0
  };

  Banners.prototype.render = function() {
    return <ImageCarousell
      dataSource={this.state.images}
      showPreview={false}
      height={240}
      initialIndex={this.state.page}
      style={{backgroundColor: '#f5f5f3'}}
      onPress={(id) => this.select(id)} />;
  };

  Banners.prototype.changePage = function() {
    var page;
    page = this.state.page + 1;
    if (page >= this.props.items.length) {
      page = 0;
    }
    return this.setState({
      page: page
    });
  };

  Banners.prototype.select = function(id) {
    var base;
    if (!id) {
      return;
    }
    return typeof (base = this.props).onSelect === "function" ? base.onSelect(id) : void 0;
  };

  return Banners;

})(Component);

module.exports = Banners;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9tYWluL19jb21tb24vYmFubmVycy9pbmRleC5qcyIsInNvdXJjZXMiOlsic2NyZWVucy9tYWluL19jb21tb24vYmFubmVycy9pbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxtREFBQTtFQUFBOzs7O0FBQUMsWUFBYSxDQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUixDQUFSOztBQUNiLFdBQVksT0FBQSxDQUFRLGNBQVI7O0FBQ0gsaUJBQWtCLE9BQUEsQ0FBUSx1Q0FBUixHQUEzQjs7QUFFSzs7O0VBQ1MsaUJBQUMsS0FBRDs7O0FBQ1gsUUFBQTtJQUFBLDBDQUFBLFNBQUE7SUFDQSxVQUFBLEdBQWEsSUFBSSxRQUFRLENBQUMsVUFBYixDQUF3QjtNQUFBLGFBQUEsRUFBZSxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsRUFBRCxFQUFLLEVBQUw7aUJBQVksRUFBQSxLQUFRO1FBQXBCO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFmO0tBQXhCO0lBQ2IsTUFBQSxHQUFTLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBWixDQUFnQixTQUFDLElBQUQ7YUFBVTtRQUFBLEdBQUEsRUFBSyxJQUFJLENBQUMsS0FBVjtRQUFpQixFQUFBLEVBQUksSUFBSSxDQUFDLEVBQTFCOztJQUFWLENBQWhCO0lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFYLEdBQW9CLFVBQVUsQ0FBQyxhQUFYLENBQXlCLE1BQXpCO0VBSlQ7O29CQU9iLG9CQUFBLEdBQXNCLFNBQUE7V0FDcEIsYUFBQSxDQUFjLElBQUksQ0FBQyxPQUFuQjtFQURvQjs7b0JBSXRCLEtBQUEsR0FDRTtJQUFBLElBQUEsRUFBTSxDQUFOOzs7b0JBR0YsTUFBQSxHQUFRLFNBQUE7V0FDTjs7Ozs7OztFQURNOztvQkFVUixVQUFBLEdBQVksU0FBQTtBQUNWLFFBQUE7SUFBQSxJQUFBLEdBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLEdBQWM7SUFDckIsSUFBRyxJQUFBLElBQVEsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBeEI7TUFDRSxJQUFBLEdBQU8sRUFEVDs7V0FFQSxJQUFDLENBQUEsUUFBRCxDQUFVO01BQUMsTUFBQSxJQUFEO0tBQVY7RUFKVTs7b0JBT1osTUFBQSxHQUFRLFNBQUMsRUFBRDtBQUNOLFFBQUE7SUFBQSxJQUFHLENBQUksRUFBUDtBQUFlLGFBQWY7O29FQUNNLENBQUMsU0FBVTtFQUZYOzs7O0dBakNZOztBQXNDdEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJ7Q29tcG9uZW50fSA9IFJlYWN0ID0gcmVxdWlyZSAncmVhY3QnXG57TGlzdFZpZXd9ID0gcmVxdWlyZSAncmVhY3QtbmF0aXZlJ1xue2RlZmF1bHQ6IEltYWdlQ2Fyb3VzZWxsfSA9IHJlcXVpcmUgJ3NyYy9saWJzL0ltYWdlQ2Fyb3VzZWxsJ1xuXG5jbGFzcyBCYW5uZXJzIGV4dGVuZHMgQ29tcG9uZW50XG4gIGNvbnN0cnVjdG9yOiAocHJvcHMpIC0+XG4gICAgc3VwZXJcbiAgICBkYXRhU291cmNlID0gbmV3IExpc3RWaWV3LkRhdGFTb3VyY2Uocm93SGFzQ2hhbmdlZDogKHIxLCByMikgPT4gcjEgaXNudCByMilcbiAgICBpbWFnZXMgPSBwcm9wcy5pdGVtcy5tYXAgKGl0ZW0pIC0+IHVyaTogaXRlbS5pbWFnZSwgaWQ6IGl0ZW0uaWRcbiAgICB0aGlzLnN0YXRlLmltYWdlcyA9IGRhdGFTb3VyY2UuY2xvbmVXaXRoUm93cyhpbWFnZXMpXG5cblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogLT5cbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJZClcblxuXG4gIHN0YXRlOlxuICAgIHBhZ2U6IDBcblxuXG4gIHJlbmRlcjogLT5cbiAgICBgPEltYWdlQ2Fyb3VzZWxsXG4gICAgICBkYXRhU291cmNlPXt0aGlzLnN0YXRlLmltYWdlc31cbiAgICAgIHNob3dQcmV2aWV3PXtmYWxzZX1cbiAgICAgIGhlaWdodD17MjQwfVxuICAgICAgaW5pdGlhbEluZGV4PXt0aGlzLnN0YXRlLnBhZ2V9XG4gICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNmNWY1ZjMnfX1cbiAgICAgIG9uUHJlc3M9eyhpZCkgPT4gdGhpcy5zZWxlY3QoaWQpfSAvPmBcblxuXG4gIGNoYW5nZVBhZ2U6ID0+XG4gICAgcGFnZSA9IEBzdGF0ZS5wYWdlICsgMVxuICAgIGlmIHBhZ2UgPj0gQHByb3BzLml0ZW1zLmxlbmd0aFxuICAgICAgcGFnZSA9IDBcbiAgICBAc2V0U3RhdGUoe3BhZ2V9KVxuXG5cbiAgc2VsZWN0OiAoaWQpID0+XG4gICAgaWYgbm90IGlkIHRoZW4gcmV0dXJuXG4gICAgQHByb3BzLm9uU2VsZWN0PyhpZClcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhbm5lcnNcbiJdfQ==
