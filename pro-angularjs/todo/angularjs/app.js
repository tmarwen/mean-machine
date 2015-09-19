var model = {
	user: "Marwen"
};

var todoApp = angular.module("todoApp", []);

todoApp.run(function($http) {
	$http.get("data.json").success(function(data) {
		model.items = data;
	});
});

todoApp.controller("ToDoCtrl", function() {
	
	var vm = this;

	vm.todo = model;
	vm.showComplete = true;

	vm.incompleteCount = function() {
		var count = 0;
		angular.forEach(vm.todo.items, function(item){
			if (!item.done) count++
		});
		return count;
	};

	vm.warningLevel = function() {
		return vm.incompleteCount() < 3 ? 'label-success' : 'label-warning';
	};

	vm.addNewItem = function(actionText) {
		vm.todo.items.push({"action": actionText, "done": false});
	};

});

todoApp.filter("checkedItems", function() {
	return function(items, showComplete) {
		var results = [];
		angular.forEach(items, function(item) {
			if (!item.done || showComplete) results.push(item);
		});
		return results;
	}
});