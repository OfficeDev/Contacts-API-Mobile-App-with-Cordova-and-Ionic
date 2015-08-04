(function () {
    "use strict";

    angular.module("myapp.controllers", [])

    .controller("appCtrl", ["$scope", function ($scope) {
        $scope.waiting = false;
        $scope.$on("wait", function (evt, val) {
            $scope.wait = val;
        });
    }])

    //homeCtrl provides the logic for the home screen
    .controller("homeCtrl", ["$scope", "$state", "$ionicModal", "$ionicListDelegate", "myappService", function ($scope, $state, $ionicModal, $ionicListDelegate, myappService) {
        $scope.canAdd = false;
        $scope.contacts = [];

        //refresh binding
        $scope.refresh = function () {
            //make call to service
            myappService.wait(true);
            myappService.getContacts(function (contacts) {
                $scope.contacts = contacts;
                myappService.wait(false);
                $scope.canAdd = true;
                $scope.$broadcast("scroll.refreshComplete");
            });
        };

        //initialize modal
        $ionicModal.fromTemplateUrl("app/templates/view-contact.html", {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.isAdd = false;
        $scope.add = function () {
            $scope.isAdd = true;
            $scope.contact = { EmailAddresses: [{}]};
            $scope.modal.show();
        };

        $scope.edit = function (contact) {
            $scope.isAdd = false;
            $scope.contact = contact;
            $scope.modal.show();
            $ionicListDelegate.closeOptionButtons();
        };

        $scope.delete = function (contact) {
            myappService.wait(true);
            myappService.deleteContact(contact.Id, function (data) {
                $scope.contacts.splice(myappService.indexOf(contact.Id), 1);
                myappService.wait(false);
                $ionicListDelegate.closeOptionButtons();
            });
        };

        $scope.save = function () {
            myappService.wait(true);
            if ($scope.isAdd) {
                //add the new contact
                $scope.contact.EmailAddresses[0].Name = $scope.contact.GivenName + " " + $scope.contact.Surname;
                myappService.addContact($scope.contact, function (data) {
                    $scope.contacts.push(data);
                    myappService.wait(false);
                    $scope.modal.hide();
                });
            }
            else {
                //update the existing contact...first clone it
                $scope.contact.DisplayName = $scope.contact.GivenName + " " + $scope.contact.Surname;
                var updates = {
                    Id: $scope.contact.Id,
                    GivenName: $scope.contact.GivenName,
                    Surname: $scope.contact.Surname,
                    EmailAddresses: [
                        {
                            Name: $scope.contact.DisplayName,
                            Address: $scope.contact.EmailAddresses[0].Address
                        }
                    ],
                    JobTitle: $scope.contact.JobTitle
                };
                myappService.updateContact(updates, function (data) {
                    myappService.wait(false);
                    $scope.modal.hide();
                });
            }
        };

        $scope.cancel = function () {
            $scope.modal.hide();
        };
    }])

    //errorCtrl managed the display of error messages bubbled up from other controllers, directives, myappService
    .controller("errorCtrl", ["$scope", "myappService", function ($scope, myappService) {
        //public properties that define the error message and if an error is present
        $scope.error = "";
        $scope.activeError = false;

        //function to dismiss an active error
        $scope.dismissError = function () {
            $scope.activeError = false;
        };

        //broadcast event to catch an error and display it in the error section
        $scope.$on("error", function (evt, val) {
            //set the error message and mark activeError to true
            $scope.error = val;
            $scope.activeError = true;

            //stop any waiting indicators (including scroll refreshes)
            myappService.wait(false);
            $scope.$broadcast("scroll.refreshComplete");

            //manually apply given the way this might bubble up async
            $scope.$apply();
        });
    }]);
})();