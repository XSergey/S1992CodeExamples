var applyMiddleware, compose, configureStore, createSagaMiddleware, createStorageEngine, createStore, filter, immutableJsMerger, reducer, ref, storage;

ref = require('redux'), createStore = ref.createStore, applyMiddleware = ref.applyMiddleware, compose = ref.compose;

storage = require('redux-storage');

createSagaMiddleware = require('redux-saga')["default"];

createStorageEngine = require('redux-storage-engine-reactnativeasyncstorage')["default"];

filter = require('redux-storage-decorator-filter')["default"];

immutableJsMerger = require('redux-storage-merger-immutablejs/src')["default"];

reducer = require('./reducers');

import {
  composeWithDevTools
} from 'remote-redux-devtools';

configureStore = function() {
  var engine, enhancer, load, middleware, sagaMiddleware, storageMiddleware, store;
  engine = createStorageEngine('db');
  engine = filter(engine, ['store', 'dining', 'promo', ['user', 'info'], ['user', 'auth', 'codeSent'], ['user', 'auth', 'token']]);
  storageMiddleware = storage.createMiddleware(engine);
  sagaMiddleware = createSagaMiddleware();
  reducer = storage.reducer(reducer, immutableJsMerger);
  middleware = applyMiddleware(sagaMiddleware, storageMiddleware);
  enhancer = compose(middleware, composeWithDevTools());
  store = createStore(reducer, enhancer);
  store.runSaga = sagaMiddleware.run;
  load = storage.createLoader(engine);
  load(store);
  return store;
};

module.exports = configureStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXgvc3RvcmUuanMiLCJzb3VyY2VzIjpbInJlZHV4L3N0b3JlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFBOztBQUFBLE1BQTBDLE9BQUEsQ0FBUSxPQUFSLENBQTFDLEVBQUMsNkJBQUQsRUFBYyxxQ0FBZCxFQUErQjs7QUFDL0IsT0FBQSxHQUFVLE9BQUEsQ0FBUSxlQUFSOztBQUNBLHVCQUF3QixPQUFBLENBQVEsWUFBUixHQUFqQzs7QUFDUyxzQkFBdUIsT0FBQSxDQUFRLDhDQUFSLEdBQWhDOztBQUNTLFNBQVUsT0FBQSxDQUFRLGdDQUFSLEdBQW5COztBQUNTLG9CQUFxQixPQUFBLENBQVEsc0NBQVIsR0FBOUI7O0FBQ0QsT0FBQSxHQUFVLE9BQUEsQ0FBUSxZQUFSOztBQUNWLE9BQUE7RUFBUyxtQkFBVDtDQUFBLE1BQUE7O0FBRUEsY0FBQSxHQUFpQixTQUFBO0FBQ2YsTUFBQTtFQUFBLE1BQUEsR0FBUyxtQkFBQSxDQUFvQixJQUFwQjtFQUNULE1BQUEsR0FBUyxNQUFBLENBQU8sTUFBUCxFQUFlLENBQ3RCLE9BRHNCLEVBRXRCLFFBRnNCLEVBR3RCLE9BSHNCLEVBSXRCLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FKc0IsRUFLdEIsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixVQUFqQixDQUxzQixFQU10QixDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE9BQWpCLENBTnNCLENBQWY7RUFTVCxpQkFBQSxHQUFvQixPQUFPLENBQUMsZ0JBQVIsQ0FBeUIsTUFBekI7RUFDcEIsY0FBQSxHQUFpQixvQkFBQSxDQUFBO0VBQ2pCLE9BQUEsR0FBVSxPQUFPLENBQUMsT0FBUixDQUFnQixPQUFoQixFQUF5QixpQkFBekI7RUFFVixVQUFBLEdBQWEsZUFBQSxDQUFnQixjQUFoQixFQUFnQyxpQkFBaEM7RUFDYixRQUFBLEdBQVcsT0FBQSxDQUFRLFVBQVIsRUFBb0IsbUJBQUEsQ0FBQSxDQUFwQjtFQUVYLEtBQUEsR0FBUSxXQUFBLENBQVksT0FBWixFQUFxQixRQUFyQjtFQUNSLEtBQUssQ0FBQyxPQUFOLEdBQWdCLGNBQWMsQ0FBQztFQUUvQixJQUFBLEdBQU8sT0FBTyxDQUFDLFlBQVIsQ0FBcUIsTUFBckI7RUFDUCxJQUFBLENBQUssS0FBTDtBQUVBLFNBQU87QUF4QlE7O0FBMkJqQixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIiN7ZGV2VG9vbHN9ID0gcmVxdWlyZSAncmVtb3RlLXJlZHV4LWRldnRvb2xzJ1xue2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2V9ID0gcmVxdWlyZSAncmVkdXgnXG5zdG9yYWdlID0gcmVxdWlyZSAncmVkdXgtc3RvcmFnZSdcbntkZWZhdWx0OiBjcmVhdGVTYWdhTWlkZGxld2FyZX0gPSByZXF1aXJlICdyZWR1eC1zYWdhJ1xue2RlZmF1bHQ6IGNyZWF0ZVN0b3JhZ2VFbmdpbmV9ID0gcmVxdWlyZSAncmVkdXgtc3RvcmFnZS1lbmdpbmUtcmVhY3RuYXRpdmVhc3luY3N0b3JhZ2UnXG57ZGVmYXVsdDogZmlsdGVyfSA9IHJlcXVpcmUgJ3JlZHV4LXN0b3JhZ2UtZGVjb3JhdG9yLWZpbHRlcidcbntkZWZhdWx0OiBpbW11dGFibGVKc01lcmdlcn0gPSByZXF1aXJlICdyZWR1eC1zdG9yYWdlLW1lcmdlci1pbW11dGFibGVqcy9zcmMnXG5yZWR1Y2VyID0gcmVxdWlyZSAnLi9yZWR1Y2VycydcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZW1vdGUtcmVkdXgtZGV2dG9vbHMnO1xuXG5jb25maWd1cmVTdG9yZSA9IC0+XG4gIGVuZ2luZSA9IGNyZWF0ZVN0b3JhZ2VFbmdpbmUoJ2RiJylcbiAgZW5naW5lID0gZmlsdGVyIGVuZ2luZSwgW1xuICAgICdzdG9yZSdcbiAgICAnZGluaW5nJ1xuICAgICdwcm9tbydcbiAgICBbJ3VzZXInLCAnaW5mbyddXG4gICAgWyd1c2VyJywgJ2F1dGgnLCAnY29kZVNlbnQnXVxuICAgIFsndXNlcicsICdhdXRoJywgJ3Rva2VuJ11cbiAgXVxuXG4gIHN0b3JhZ2VNaWRkbGV3YXJlID0gc3RvcmFnZS5jcmVhdGVNaWRkbGV3YXJlKGVuZ2luZSlcbiAgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXG4gIHJlZHVjZXIgPSBzdG9yYWdlLnJlZHVjZXIocmVkdWNlciwgaW1tdXRhYmxlSnNNZXJnZXIpXG5cbiAgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSwgc3RvcmFnZU1pZGRsZXdhcmUpXG4gIGVuaGFuY2VyID0gY29tcG9zZShtaWRkbGV3YXJlLCBjb21wb3NlV2l0aERldlRvb2xzKCkpXG5cbiAgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcilcbiAgc3RvcmUucnVuU2FnYSA9IHNhZ2FNaWRkbGV3YXJlLnJ1blxuXG4gIGxvYWQgPSBzdG9yYWdlLmNyZWF0ZUxvYWRlcihlbmdpbmUpXG4gIGxvYWQoc3RvcmUpXG5cbiAgcmV0dXJuIHN0b3JlXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb25maWd1cmVTdG9yZVxuIl19
