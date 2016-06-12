(function () {
    'use strict';

    angular
        .module('app')
        .controller('Activity.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;

        vm.user = null;
	vm.activity = null;
        vm.saveActivity = saveActivity;
         
        initController();

        function initController() {
            // get current user
           // UserService.GetCurrent().then(function (user) {
             //   vm.user = user;
           // });
        }

        function saveActivity() {
	
	alert('inside the saveActivity activity index controller');
            UserService.SaveActivity(vm.activity)
                .then(function () {
                    FlashService.Success('User updated');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

         
    }

})();