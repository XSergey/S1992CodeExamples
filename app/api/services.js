var ConfigActions, DefaultActions, RaffleActions, convertConfig, convertCreatedAt, convertDate, convertRaffle;

convertDate = require('./redux/utils').convertDate;

convertRaffle = require('./redux/raffles/convert');

convertConfig = require('./redux/config/convert');

convertCreatedAt = function(items) {
  return convertDate(items, '_createdAt', 'date');
};

DefaultActions = [
  {
    name: 'found',
    convert: convertCreatedAt
  }, {
    name: 'created',
    isEvent: true,
    convert: convertCreatedAt
  }, {
    name: 'updated',
    isEvent: true,
    convert: convertCreatedAt
  }, {
    name: 'patched',
    isEvent: true,
    convert: convertCreatedAt
  }, {
    name: 'removed',
    isEvent: true,
    convert: convertCreatedAt
  }
];

RaffleActions = [
  {
    name: 'found',
    convert: convertRaffle
  }, {
    name: 'created',
    isEvent: true,
    convert: convertRaffle
  }, {
    name: 'updated',
    isEvent: true,
    convert: convertRaffle
  }, {
    name: 'patched',
    isEvent: true,
    convert: convertRaffle
  }, {
    name: 'removed',
    isEvent: true,
    convert: convertRaffle
  }
];

ConfigActions = [
  {
    name: 'found',
    convert: convertConfig
  }, {
    name: 'created',
    isEvent: true,
    convert: convertConfig
  }, {
    name: 'updated',
    isEvent: true,
    convert: convertConfig
  }, {
    name: 'patched',
    isEvent: true,
    convert: convertConfig
  }, {
    name: 'removed',
    isEvent: true,
    convert: convertConfig
  }
];

module.exports = [
  {
    name: 'store/places',
    initialUpdate: true,
    actions: DefaultActions
  }, {
    name: 'store/categories',
    initialUpdate: true,
    actions: DefaultActions
  }, {
    name: 'dining/places',
    initialUpdate: true,
    actions: DefaultActions
  }, {
    name: 'dining/categories',
    initialUpdate: true,
    actions: DefaultActions
  }, {
    name: 'promo/events',
    initialUpdate: true,
    actions: DefaultActions
  }, {
    name: 'promo/offers',
    initialUpdate: true,
    actions: DefaultActions
  }, {
    name: 'bonuses',
    initialUpdate: true,
    requireAuth: true,
    actions: DefaultActions
  }, {
    name: 'raffles',
    initialUpdate: true,
    actions: RaffleActions
  }, {
    name: 'tickets',
    initialUpdate: true,
    requireAuth: true,
    actions: DefaultActions
  }, {
    name: 'parking',
    initialUpdate: true,
    actions: DefaultActions
  }, {
    name: 'about',
    initialUpdate: true,
    actions: DefaultActions
  }, {
    name: 'config',
    initialUpdate: true,
    actions: ConfigActions
  }, {
    name: 'users',
    requireAuth: true,
    actions: [
      {
        name: 'updated',
        isEvent: true,
        reduxAction: 'user.info.updated'
      }, {
        name: 'patched',
        isEvent: true,
        reduxAction: 'user.info.updated'
      }
    ]
  }
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpL3NlcnZpY2VzLmpzIiwic291cmNlcyI6WyJhcGkvc2VydmljZXMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUMsY0FBZSxPQUFBLENBQVEsZUFBUjs7QUFDaEIsYUFBQSxHQUFnQixPQUFBLENBQVEseUJBQVI7O0FBQ2hCLGFBQUEsR0FBZ0IsT0FBQSxDQUFRLHdCQUFSOztBQUdoQixnQkFBQSxHQUFtQixTQUFDLEtBQUQ7U0FDakIsV0FBQSxDQUFZLEtBQVosRUFBbUIsWUFBbkIsRUFBaUMsTUFBakM7QUFEaUI7O0FBSW5CLGNBQUEsR0FBaUI7RUFDZjtJQUFDLElBQUEsRUFBTSxPQUFQO0lBQWdCLE9BQUEsRUFBUyxnQkFBekI7R0FEZSxFQUVmO0lBQUMsSUFBQSxFQUFNLFNBQVA7SUFBa0IsT0FBQSxFQUFTLElBQTNCO0lBQWdDLE9BQUEsRUFBUyxnQkFBekM7R0FGZSxFQUdmO0lBQUMsSUFBQSxFQUFNLFNBQVA7SUFBa0IsT0FBQSxFQUFTLElBQTNCO0lBQWdDLE9BQUEsRUFBUyxnQkFBekM7R0FIZSxFQUlmO0lBQUMsSUFBQSxFQUFNLFNBQVA7SUFBa0IsT0FBQSxFQUFTLElBQTNCO0lBQWdDLE9BQUEsRUFBUyxnQkFBekM7R0FKZSxFQUtmO0lBQUMsSUFBQSxFQUFNLFNBQVA7SUFBa0IsT0FBQSxFQUFTLElBQTNCO0lBQWdDLE9BQUEsRUFBUyxnQkFBekM7R0FMZTs7O0FBU2pCLGFBQUEsR0FBZ0I7RUFDZDtJQUFDLElBQUEsRUFBTSxPQUFQO0lBQWdCLE9BQUEsRUFBUyxhQUF6QjtHQURjLEVBRWQ7SUFBQyxJQUFBLEVBQU0sU0FBUDtJQUFrQixPQUFBLEVBQVMsSUFBM0I7SUFBZ0MsT0FBQSxFQUFTLGFBQXpDO0dBRmMsRUFHZDtJQUFDLElBQUEsRUFBTSxTQUFQO0lBQWtCLE9BQUEsRUFBUyxJQUEzQjtJQUFnQyxPQUFBLEVBQVMsYUFBekM7R0FIYyxFQUlkO0lBQUMsSUFBQSxFQUFNLFNBQVA7SUFBa0IsT0FBQSxFQUFTLElBQTNCO0lBQWdDLE9BQUEsRUFBUyxhQUF6QztHQUpjLEVBS2Q7SUFBQyxJQUFBLEVBQU0sU0FBUDtJQUFrQixPQUFBLEVBQVMsSUFBM0I7SUFBZ0MsT0FBQSxFQUFTLGFBQXpDO0dBTGM7OztBQVFoQixhQUFBLEdBQWdCO0VBQ2Q7SUFBQyxJQUFBLEVBQU0sT0FBUDtJQUFnQixPQUFBLEVBQVMsYUFBekI7R0FEYyxFQUVkO0lBQUMsSUFBQSxFQUFNLFNBQVA7SUFBa0IsT0FBQSxFQUFTLElBQTNCO0lBQWdDLE9BQUEsRUFBUyxhQUF6QztHQUZjLEVBR2Q7SUFBQyxJQUFBLEVBQU0sU0FBUDtJQUFrQixPQUFBLEVBQVMsSUFBM0I7SUFBZ0MsT0FBQSxFQUFTLGFBQXpDO0dBSGMsRUFJZDtJQUFDLElBQUEsRUFBTSxTQUFQO0lBQWtCLE9BQUEsRUFBUyxJQUEzQjtJQUFnQyxPQUFBLEVBQVMsYUFBekM7R0FKYyxFQUtkO0lBQUMsSUFBQSxFQUFNLFNBQVA7SUFBa0IsT0FBQSxFQUFTLElBQTNCO0lBQWdDLE9BQUEsRUFBUyxhQUF6QztHQUxjOzs7QUFTaEIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7RUFDZjtJQUFBLElBQUEsRUFBTSxjQUFOO0lBQ0EsYUFBQSxFQUFlLElBRGY7SUFFQSxPQUFBLEVBQVMsY0FGVDtHQURlLEVBS2Y7SUFBQSxJQUFBLEVBQU0sa0JBQU47SUFDQSxhQUFBLEVBQWUsSUFEZjtJQUVBLE9BQUEsRUFBUyxjQUZUO0dBTGUsRUFTZjtJQUFBLElBQUEsRUFBTSxlQUFOO0lBQ0EsYUFBQSxFQUFlLElBRGY7SUFFQSxPQUFBLEVBQVMsY0FGVDtHQVRlLEVBYWY7SUFBQSxJQUFBLEVBQU0sbUJBQU47SUFDQSxhQUFBLEVBQWUsSUFEZjtJQUVBLE9BQUEsRUFBUyxjQUZUO0dBYmUsRUFpQmY7SUFBQSxJQUFBLEVBQU0sY0FBTjtJQUNBLGFBQUEsRUFBZSxJQURmO0lBRUEsT0FBQSxFQUFTLGNBRlQ7R0FqQmUsRUFxQmY7SUFBQSxJQUFBLEVBQU0sY0FBTjtJQUNBLGFBQUEsRUFBZSxJQURmO0lBRUEsT0FBQSxFQUFTLGNBRlQ7R0FyQmUsRUF5QmY7SUFBQSxJQUFBLEVBQU0sU0FBTjtJQUNBLGFBQUEsRUFBZSxJQURmO0lBRUEsV0FBQSxFQUFhLElBRmI7SUFHQSxPQUFBLEVBQVMsY0FIVDtHQXpCZSxFQThCZjtJQUFBLElBQUEsRUFBTSxTQUFOO0lBQ0EsYUFBQSxFQUFlLElBRGY7SUFFQSxPQUFBLEVBQVMsYUFGVDtHQTlCZSxFQWtDZjtJQUFBLElBQUEsRUFBTSxTQUFOO0lBQ0EsYUFBQSxFQUFlLElBRGY7SUFFQSxXQUFBLEVBQWEsSUFGYjtJQUdBLE9BQUEsRUFBUyxjQUhUO0dBbENlLEVBdUNmO0lBQUEsSUFBQSxFQUFNLFNBQU47SUFDQSxhQUFBLEVBQWUsSUFEZjtJQUVBLE9BQUEsRUFBUyxjQUZUO0dBdkNlLEVBMkNmO0lBQUEsSUFBQSxFQUFNLE9BQU47SUFDQSxhQUFBLEVBQWUsSUFEZjtJQUVBLE9BQUEsRUFBUyxjQUZUO0dBM0NlLEVBK0NmO0lBQUEsSUFBQSxFQUFNLFFBQU47SUFDQSxhQUFBLEVBQWUsSUFEZjtJQUVBLE9BQUEsRUFBUyxhQUZUO0dBL0NlLEVBbURmO0lBQUEsSUFBQSxFQUFNLE9BQU47SUFDQSxXQUFBLEVBQWEsSUFEYjtJQUVBLE9BQUEsRUFBUztNQUNQO1FBQUMsSUFBQSxFQUFNLFNBQVA7UUFBa0IsT0FBQSxFQUFTLElBQTNCO1FBQWdDLFdBQUEsRUFBYSxtQkFBN0M7T0FETyxFQUVQO1FBQUMsSUFBQSxFQUFNLFNBQVA7UUFBa0IsT0FBQSxFQUFTLElBQTNCO1FBQWdDLFdBQUEsRUFBYSxtQkFBN0M7T0FGTztLQUZUO0dBbkRlIiwic291cmNlc0NvbnRlbnQiOlsie2NvbnZlcnREYXRlfSA9IHJlcXVpcmUgJy4vcmVkdXgvdXRpbHMnXG5jb252ZXJ0UmFmZmxlID0gcmVxdWlyZSAnLi9yZWR1eC9yYWZmbGVzL2NvbnZlcnQnXG5jb252ZXJ0Q29uZmlnID0gcmVxdWlyZSAnLi9yZWR1eC9jb25maWcvY29udmVydCdcblxuXG5jb252ZXJ0Q3JlYXRlZEF0ID0gKGl0ZW1zKSAtPlxuICBjb252ZXJ0RGF0ZShpdGVtcywgJ19jcmVhdGVkQXQnLCAnZGF0ZScpXG5cblxuRGVmYXVsdEFjdGlvbnMgPSBbXG4gIHtuYW1lOiAnZm91bmQnLCBjb252ZXJ0OiBjb252ZXJ0Q3JlYXRlZEF0fVxuICB7bmFtZTogJ2NyZWF0ZWQnLCBpc0V2ZW50OiB5ZXMsIGNvbnZlcnQ6IGNvbnZlcnRDcmVhdGVkQXR9XG4gIHtuYW1lOiAndXBkYXRlZCcsIGlzRXZlbnQ6IHllcywgY29udmVydDogY29udmVydENyZWF0ZWRBdH1cbiAge25hbWU6ICdwYXRjaGVkJywgaXNFdmVudDogeWVzLCBjb252ZXJ0OiBjb252ZXJ0Q3JlYXRlZEF0fVxuICB7bmFtZTogJ3JlbW92ZWQnLCBpc0V2ZW50OiB5ZXMsIGNvbnZlcnQ6IGNvbnZlcnRDcmVhdGVkQXR9XG5dXG5cblxuUmFmZmxlQWN0aW9ucyA9IFtcbiAge25hbWU6ICdmb3VuZCcsIGNvbnZlcnQ6IGNvbnZlcnRSYWZmbGV9XG4gIHtuYW1lOiAnY3JlYXRlZCcsIGlzRXZlbnQ6IHllcywgY29udmVydDogY29udmVydFJhZmZsZX1cbiAge25hbWU6ICd1cGRhdGVkJywgaXNFdmVudDogeWVzLCBjb252ZXJ0OiBjb252ZXJ0UmFmZmxlfVxuICB7bmFtZTogJ3BhdGNoZWQnLCBpc0V2ZW50OiB5ZXMsIGNvbnZlcnQ6IGNvbnZlcnRSYWZmbGV9XG4gIHtuYW1lOiAncmVtb3ZlZCcsIGlzRXZlbnQ6IHllcywgY29udmVydDogY29udmVydFJhZmZsZX1cbl1cblxuQ29uZmlnQWN0aW9ucyA9IFtcbiAge25hbWU6ICdmb3VuZCcsIGNvbnZlcnQ6IGNvbnZlcnRDb25maWd9XG4gIHtuYW1lOiAnY3JlYXRlZCcsIGlzRXZlbnQ6IHllcywgY29udmVydDogY29udmVydENvbmZpZ31cbiAge25hbWU6ICd1cGRhdGVkJywgaXNFdmVudDogeWVzLCBjb252ZXJ0OiBjb252ZXJ0Q29uZmlnfVxuICB7bmFtZTogJ3BhdGNoZWQnLCBpc0V2ZW50OiB5ZXMsIGNvbnZlcnQ6IGNvbnZlcnRDb25maWd9XG4gIHtuYW1lOiAncmVtb3ZlZCcsIGlzRXZlbnQ6IHllcywgY29udmVydDogY29udmVydENvbmZpZ31cbl1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgbmFtZTogJ3N0b3JlL3BsYWNlcydcbiAgaW5pdGlhbFVwZGF0ZTogeWVzXG4gIGFjdGlvbnM6IERlZmF1bHRBY3Rpb25zXG4sXG4gIG5hbWU6ICdzdG9yZS9jYXRlZ29yaWVzJ1xuICBpbml0aWFsVXBkYXRlOiB5ZXNcbiAgYWN0aW9uczogRGVmYXVsdEFjdGlvbnNcbixcbiAgbmFtZTogJ2RpbmluZy9wbGFjZXMnXG4gIGluaXRpYWxVcGRhdGU6IHllc1xuICBhY3Rpb25zOiBEZWZhdWx0QWN0aW9uc1xuLFxuICBuYW1lOiAnZGluaW5nL2NhdGVnb3JpZXMnXG4gIGluaXRpYWxVcGRhdGU6IHllc1xuICBhY3Rpb25zOiBEZWZhdWx0QWN0aW9uc1xuLFxuICBuYW1lOiAncHJvbW8vZXZlbnRzJ1xuICBpbml0aWFsVXBkYXRlOiB5ZXNcbiAgYWN0aW9uczogRGVmYXVsdEFjdGlvbnNcbixcbiAgbmFtZTogJ3Byb21vL29mZmVycydcbiAgaW5pdGlhbFVwZGF0ZTogeWVzXG4gIGFjdGlvbnM6IERlZmF1bHRBY3Rpb25zXG4sXG4gIG5hbWU6ICdib251c2VzJ1xuICBpbml0aWFsVXBkYXRlOiB5ZXNcbiAgcmVxdWlyZUF1dGg6IHllc1xuICBhY3Rpb25zOiBEZWZhdWx0QWN0aW9uc1xuLFxuICBuYW1lOiAncmFmZmxlcydcbiAgaW5pdGlhbFVwZGF0ZTogeWVzXG4gIGFjdGlvbnM6IFJhZmZsZUFjdGlvbnNcbixcbiAgbmFtZTogJ3RpY2tldHMnXG4gIGluaXRpYWxVcGRhdGU6IHllc1xuICByZXF1aXJlQXV0aDogeWVzXG4gIGFjdGlvbnM6IERlZmF1bHRBY3Rpb25zXG4sXG4gIG5hbWU6ICdwYXJraW5nJ1xuICBpbml0aWFsVXBkYXRlOiB5ZXNcbiAgYWN0aW9uczogRGVmYXVsdEFjdGlvbnNcbixcbiAgbmFtZTogJ2Fib3V0J1xuICBpbml0aWFsVXBkYXRlOiB5ZXNcbiAgYWN0aW9uczogRGVmYXVsdEFjdGlvbnNcbixcbiAgbmFtZTogJ2NvbmZpZydcbiAgaW5pdGlhbFVwZGF0ZTogeWVzXG4gIGFjdGlvbnM6IENvbmZpZ0FjdGlvbnNcbixcbiAgbmFtZTogJ3VzZXJzJ1xuICByZXF1aXJlQXV0aDogeWVzXG4gIGFjdGlvbnM6IFtcbiAgICB7bmFtZTogJ3VwZGF0ZWQnLCBpc0V2ZW50OiB5ZXMsIHJlZHV4QWN0aW9uOiAndXNlci5pbmZvLnVwZGF0ZWQnfVxuICAgIHtuYW1lOiAncGF0Y2hlZCcsIGlzRXZlbnQ6IHllcywgcmVkdXhBY3Rpb246ICd1c2VyLmluZm8udXBkYXRlZCd9XG4gIF1cbl1cbiJdfQ==
