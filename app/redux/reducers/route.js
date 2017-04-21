var Immutable, InitialState, Reducers, Routed, handleActions, obj, route;

handleActions = require('redux-actions').handleActions;

Immutable = require('immutable');

Routed = require('../types').Routed;

route = function(state, action) {
  var current, hasSearch, hideToolbar, index, isRoot, navState, title;
  navState = action.payload;
  index = navState.index;
  current = navState.children[index];
  isRoot = index === 0;
  hasSearch = current.component.hasSearch;
  title = current.title;
  hideToolbar = current.hideToolbar;
  return state.set('name', current.name).set('isRoot', isRoot).set('hasSearch', hasSearch).set('title', title).set('hideToolbar', hideToolbar);
};

Reducers = (
  obj = {},
  obj["" + Routed] = route,
  obj
);

InitialState = Immutable.Map({
  name: null,
  isRoot: true,
  hasSearch: true,
  title: "",
  hideToolbar: false
});

module.exports = handleActions(Reducers, InitialState);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXgvcmVkdWNlcnMvcm91dGUuanMiLCJzb3VyY2VzIjpbInJlZHV4L3JlZHVjZXJzL3JvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFDLGdCQUFpQixPQUFBLENBQVEsZUFBUjs7QUFDbEIsU0FBQSxHQUFZLE9BQUEsQ0FBUSxXQUFSOztBQUNYLFNBQVUsT0FBQSxDQUFRLFVBQVI7O0FBR1gsS0FBQSxHQUFRLFNBQUMsS0FBRCxFQUFRLE1BQVI7QUFDTixNQUFBO0VBQUEsUUFBQSxHQUFXLE1BQU0sQ0FBQztFQUNsQixLQUFBLEdBQVEsUUFBUSxDQUFDO0VBQ2pCLE9BQUEsR0FBVSxRQUFRLENBQUMsUUFBUyxDQUFBLEtBQUE7RUFFNUIsTUFBQSxHQUFTLEtBQUEsS0FBUztFQUNsQixTQUFBLEdBQVksT0FBTyxDQUFDLFNBQVMsQ0FBQztFQUM5QixLQUFBLEdBQVEsT0FBTyxDQUFDO0VBQ2hCLFdBQUEsR0FBYyxPQUFPLENBQUM7U0FFdEIsS0FDRSxDQUFDLEdBREgsQ0FDTyxNQURQLEVBQ2UsT0FBTyxDQUFDLElBRHZCLENBRUUsQ0FBQyxHQUZILENBRU8sUUFGUCxFQUVpQixNQUZqQixDQUdFLENBQUMsR0FISCxDQUdPLFdBSFAsRUFHb0IsU0FIcEIsQ0FJRSxDQUFDLEdBSkgsQ0FJTyxPQUpQLEVBSWdCLEtBSmhCLENBS0UsQ0FBQyxHQUxILENBS08sYUFMUCxFQUtzQixXQUx0QjtBQVZNOztBQWtCUixRQUFBLEdBQ0U7UUFBQSxFQUFBO01BQUEsRUFBQSxHQUFHLFVBQVUsS0FBYjs7OztBQUdGLFlBQUEsR0FBZSxTQUFTLENBQUMsR0FBVixDQUNiO0VBQUEsSUFBQSxFQUFNLElBQU47RUFDQSxNQUFBLEVBQVEsSUFEUjtFQUVBLFNBQUEsRUFBVyxJQUZYO0VBR0EsS0FBQSxFQUFPLEVBSFA7RUFJQSxXQUFBLEVBQWEsS0FKYjtDQURhOztBQVFmLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLGFBQUEsQ0FBYyxRQUFkLEVBQXdCLFlBQXhCIiwic291cmNlc0NvbnRlbnQiOlsie2hhbmRsZUFjdGlvbnN9ID0gcmVxdWlyZSAncmVkdXgtYWN0aW9ucydcbkltbXV0YWJsZSA9IHJlcXVpcmUgJ2ltbXV0YWJsZSdcbntSb3V0ZWR9ID0gcmVxdWlyZSAnLi4vdHlwZXMnXG5cblxucm91dGUgPSAoc3RhdGUsIGFjdGlvbikgLT5cbiAgbmF2U3RhdGUgPSBhY3Rpb24ucGF5bG9hZFxuICBpbmRleCA9IG5hdlN0YXRlLmluZGV4XG4gIGN1cnJlbnQgPSBuYXZTdGF0ZS5jaGlsZHJlbltpbmRleF1cblxuICBpc1Jvb3QgPSBpbmRleCBpcyAwXG4gIGhhc1NlYXJjaCA9IGN1cnJlbnQuY29tcG9uZW50Lmhhc1NlYXJjaFxuICB0aXRsZSA9IGN1cnJlbnQudGl0bGVcbiAgaGlkZVRvb2xiYXIgPSBjdXJyZW50LmhpZGVUb29sYmFyXG5cbiAgc3RhdGVcbiAgICAuc2V0KCduYW1lJywgY3VycmVudC5uYW1lKVxuICAgIC5zZXQoJ2lzUm9vdCcsIGlzUm9vdClcbiAgICAuc2V0KCdoYXNTZWFyY2gnLCBoYXNTZWFyY2gpXG4gICAgLnNldCgndGl0bGUnLCB0aXRsZSlcbiAgICAuc2V0KCdoaWRlVG9vbGJhcicsIGhpZGVUb29sYmFyKVxuXG5cblJlZHVjZXJzID1cbiAgXCIje1JvdXRlZH1cIjogcm91dGVcblxuXG5Jbml0aWFsU3RhdGUgPSBJbW11dGFibGUuTWFwXG4gIG5hbWU6IG51bGxcbiAgaXNSb290OiB5ZXNcbiAgaGFzU2VhcmNoOiB5ZXNcbiAgdGl0bGU6IFwiXCJcbiAgaGlkZVRvb2xiYXI6IG5vXG5cblxubW9kdWxlLmV4cG9ydHMgPSBoYW5kbGVBY3Rpb25zKFJlZHVjZXJzLCBJbml0aWFsU3RhdGUpXG4iXX0=
