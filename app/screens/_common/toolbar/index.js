var Toolbar, connect, mapDispatchToProps, mapStateToProps, toolbarSearch;

connect = require('react-redux').connect;

Toolbar = require('./component');

toolbarSearch = require('bawadi-client/app/redux/actions').toolbarSearch;

mapStateToProps = function(state) {
  return {
    show: !state.route.get('hideToolbar'),
    isRoot: state.route.get('isRoot'),
    hasSearch: state.route.get('hasSearch'),
    title: state.route.get('title'),
    showSearch: state.app.get('toolbarSearchShow')
  };
};

mapDispatchToProps = function(dispatch) {
  return {
    onSearch: function(text) {
      return dispatch(toolbarSearch.text(text));
    },
    onShowSearch: function() {
      return dispatch(toolbarSearch.show(true));
    },
    onHideSearch: function() {
      dispatch(toolbarSearch.show(false));
      return dispatch(toolbarSearch.text(null));
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Toolbar);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVucy9fY29tbW9uL3Rvb2xiYXIvaW5kZXguanMiLCJzb3VyY2VzIjpbInNjcmVlbnMvX2NvbW1vbi90b29sYmFyL2luZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFDLFVBQVcsT0FBQSxDQUFRLGFBQVI7O0FBQ1osT0FBQSxHQUFVLE9BQUEsQ0FBUSxhQUFSOztBQUNULGdCQUFpQixPQUFBLENBQVEsaUNBQVI7O0FBR2xCLGVBQUEsR0FBa0IsU0FBQyxLQUFEO1NBQ2hCO0lBQUEsSUFBQSxFQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFaLENBQWdCLGFBQWhCLENBQVA7SUFDQSxNQUFBLEVBQVEsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFaLENBQWdCLFFBQWhCLENBRFI7SUFFQSxTQUFBLEVBQVcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFaLENBQWdCLFdBQWhCLENBRlg7SUFHQSxLQUFBLEVBQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFaLENBQWdCLE9BQWhCLENBSFA7SUFJQSxVQUFBLEVBQVksS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFWLENBQWMsbUJBQWQsQ0FKWjs7QUFEZ0I7O0FBUWxCLGtCQUFBLEdBQXFCLFNBQUMsUUFBRDtTQUNuQjtJQUFBLFFBQUEsRUFBVSxTQUFDLElBQUQ7YUFDUixRQUFBLENBQVMsYUFBYSxDQUFDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBVDtJQURRLENBQVY7SUFHQSxZQUFBLEVBQWMsU0FBQTthQUNaLFFBQUEsQ0FBUyxhQUFhLENBQUMsSUFBZCxDQUFtQixJQUFuQixDQUFUO0lBRFksQ0FIZDtJQU1BLFlBQUEsRUFBYyxTQUFBO01BQ1osUUFBQSxDQUFTLGFBQWEsQ0FBQyxJQUFkLENBQW1CLEtBQW5CLENBQVQ7YUFDQSxRQUFBLENBQVMsYUFBYSxDQUFDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBVDtJQUZZLENBTmQ7O0FBRG1COztBQVlyQixNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFBLENBQVEsZUFBUixFQUF5QixrQkFBekIsQ0FBQSxDQUE2QyxPQUE3QyIsInNvdXJjZXNDb250ZW50IjpbIntjb25uZWN0fSA9IHJlcXVpcmUgJ3JlYWN0LXJlZHV4J1xuVG9vbGJhciA9IHJlcXVpcmUgJy4vY29tcG9uZW50J1xue3Rvb2xiYXJTZWFyY2h9ID0gcmVxdWlyZSAnc3JjL3JlZHV4L2FjdGlvbnMnXG5cblxubWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSAtPlxuICBzaG93OiAhc3RhdGUucm91dGUuZ2V0KCdoaWRlVG9vbGJhcicpXG4gIGlzUm9vdDogc3RhdGUucm91dGUuZ2V0KCdpc1Jvb3QnKVxuICBoYXNTZWFyY2g6IHN0YXRlLnJvdXRlLmdldCgnaGFzU2VhcmNoJylcbiAgdGl0bGU6IHN0YXRlLnJvdXRlLmdldCgndGl0bGUnKVxuICBzaG93U2VhcmNoOiBzdGF0ZS5hcHAuZ2V0KCd0b29sYmFyU2VhcmNoU2hvdycpXG5cblxubWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSAtPlxuICBvblNlYXJjaDogKHRleHQpIC0+XG4gICAgZGlzcGF0Y2godG9vbGJhclNlYXJjaC50ZXh0KHRleHQpKVxuXG4gIG9uU2hvd1NlYXJjaDogLT5cbiAgICBkaXNwYXRjaCh0b29sYmFyU2VhcmNoLnNob3coeWVzKSlcblxuICBvbkhpZGVTZWFyY2g6IC0+XG4gICAgZGlzcGF0Y2godG9vbGJhclNlYXJjaC5zaG93KG5vKSlcbiAgICBkaXNwYXRjaCh0b29sYmFyU2VhcmNoLnRleHQobnVsbCkpXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUb29sYmFyKVxuIl19
