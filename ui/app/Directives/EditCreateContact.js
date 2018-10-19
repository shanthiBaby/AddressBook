app.directive("contactManagement", function() {
  return {
    restrict: "AE",
    templateUrl: "./app/Directives/EditCreateContact.html",
    scope: {
      updateCreate: "&",
      editContact: "="
    },
    controller: function($scope) {
      if ($scope.editContact) {
        $scope.editFlag = true;
      }
      $scope.model = {
        ContactTitle: $scope.editFlag ? $scope.editContact.ContactTitle[0] : "",
        ContactName: $scope.editFlag ? $scope.editContact.ContactName[0] : "",
        CompanyName: $scope.editFlag ? $scope.editContact.CompanyName[0] : "",
        City: $scope.editFlag ? $scope.editContact.City[0] : "",
        Country: $scope.editFlag ? $scope.editContact.Country[0] : "",
        CustomerID: $scope.editFlag ? $scope.editContact.CustomerID[0] : "",
        Email: $scope.editFlag ? $scope.editContact.Email[0] : "",
        Fax: $scope.editFlag ? $scope.editContact.Fax[0] : "",
        Phone: $scope.editFlag ? $scope.editContact.Phone[0] : "",
        Address: $scope.editFlag ? $scope.editContact.Address[0] : "",
        PostalCode: $scope.editFlag ? $scope.editContact.PostalCode[0] : ""
      };
      $scope.handleSave = function() {
        $scope.updateCreate({
          editFlag: $scope.editFlag,
          contact: $scope.model,
          index: $scope.editFlag? $scope.editContact.index:null
        });
      };
      $scope.handleCancel=function(){
        $scope.updateCreate({
            editFlag: false,
            contact: null,
            index:null
          });
      }
    }
  };
});
