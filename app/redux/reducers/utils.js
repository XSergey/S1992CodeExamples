var isObjectLike, setter;

isObjectLike = require('lodash.isobjectlike');

setter = function(property, extra) {
  return function(state, action) {
    var ref;
    if (isObjectLike(property)) {
      ref = [property, null], extra = ref[0], property = ref[1];
    }
    if (extra) {
      state = state.merge(extra);
    }
    if (property) {
      state = state.set(property, action.payload);
    }
    return state;
  };
};

module.exports = {
  setter: setter
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXgvcmVkdWNlcnMvdXRpbHMuanMiLCJzb3VyY2VzIjpbInJlZHV4L3JlZHVjZXJzL3V0aWxzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBOztBQUFBLFlBQUEsR0FBZSxPQUFBLENBQVEscUJBQVI7O0FBR2YsTUFBQSxHQUFTLFNBQUMsUUFBRCxFQUFXLEtBQVg7U0FDUCxTQUFDLEtBQUQsRUFBUSxNQUFSO0FBQ0UsUUFBQTtJQUFBLElBQUcsWUFBQSxDQUFhLFFBQWIsQ0FBSDtNQUNFLE1BQW9CLENBQUMsUUFBRCxFQUFXLElBQVgsQ0FBcEIsRUFBQyxjQUFELEVBQVEsa0JBRFY7O0lBR0EsSUFBRyxLQUFIO01BQ0UsS0FBQSxHQUFRLEtBQUssQ0FBQyxLQUFOLENBQVksS0FBWixFQURWOztJQUdBLElBQUcsUUFBSDtNQUNFLEtBQUEsR0FBUSxLQUFLLENBQUMsR0FBTixDQUFVLFFBQVYsRUFBb0IsTUFBTSxDQUFDLE9BQTNCLEVBRFY7O0FBR0EsV0FBTztFQVZUO0FBRE87O0FBY1QsTUFBTSxDQUFDLE9BQVAsR0FBaUI7RUFDZixRQUFBLE1BRGUiLCJzb3VyY2VzQ29udGVudCI6WyJpc09iamVjdExpa2UgPSByZXF1aXJlICdsb2Rhc2guaXNvYmplY3RsaWtlJ1xuXG5cbnNldHRlciA9IChwcm9wZXJ0eSwgZXh0cmEpIC0+XG4gIChzdGF0ZSwgYWN0aW9uKSAtPlxuICAgIGlmIGlzT2JqZWN0TGlrZShwcm9wZXJ0eSlcbiAgICAgIFtleHRyYSwgcHJvcGVydHldID0gW3Byb3BlcnR5LCBudWxsXVxuICAgIFxuICAgIGlmIGV4dHJhXG4gICAgICBzdGF0ZSA9IHN0YXRlLm1lcmdlKGV4dHJhKVxuICAgICAgXG4gICAgaWYgcHJvcGVydHlcbiAgICAgIHN0YXRlID0gc3RhdGUuc2V0KHByb3BlcnR5LCBhY3Rpb24ucGF5bG9hZClcblxuICAgIHJldHVybiBzdGF0ZVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXR0ZXJcbn1cbiJdfQ==
