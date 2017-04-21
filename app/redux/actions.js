var Types, createAction, getAction, lowercaseFirstLetter, mapObject, ref;

createAction = require('redux-actions').createAction;

Types = require('./types');

ref = require('bawadi-client/app/libs/utils'), mapObject = ref.mapObject, lowercaseFirstLetter = ref.lowercaseFirstLetter;

getAction = function(type) {
  return createAction(type);
};

module.exports = mapObject(Types, getAction, lowercaseFirstLetter);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXgvYWN0aW9ucy5qcyIsInNvdXJjZXMiOlsicmVkdXgvYWN0aW9ucy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQyxlQUFnQixPQUFBLENBQVEsZUFBUjs7QUFDakIsS0FBQSxHQUFRLE9BQUEsQ0FBUSxTQUFSOztBQUNSLE1BQW9DLE9BQUEsQ0FBUSw4QkFBUixDQUFwQyxFQUFDLHlCQUFELEVBQVk7O0FBR1osU0FBQSxHQUFZLFNBQUMsSUFBRDtTQUNWLFlBQUEsQ0FBYSxJQUFiO0FBRFU7O0FBSVosTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQSxDQUFVLEtBQVYsRUFBaUIsU0FBakIsRUFBNEIsb0JBQTVCIiwic291cmNlc0NvbnRlbnQiOlsie2NyZWF0ZUFjdGlvbn0gPSByZXF1aXJlICdyZWR1eC1hY3Rpb25zJ1xuVHlwZXMgPSByZXF1aXJlICcuL3R5cGVzJ1xue21hcE9iamVjdCwgbG93ZXJjYXNlRmlyc3RMZXR0ZXJ9ID0gcmVxdWlyZSAnc3JjL2xpYnMvdXRpbHMnXG5cblxuZ2V0QWN0aW9uID0gKHR5cGUpIC0+XG4gIGNyZWF0ZUFjdGlvbih0eXBlKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gbWFwT2JqZWN0KFR5cGVzLCBnZXRBY3Rpb24sIGxvd2VyY2FzZUZpcnN0TGV0dGVyKVxuIl19
