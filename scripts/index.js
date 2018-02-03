/* global shoppingList, store, Api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

Api.getItems(function(data) {
  console.log(data);
});