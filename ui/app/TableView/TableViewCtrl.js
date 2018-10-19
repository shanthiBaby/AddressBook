app.controller("TableViewCtrl",function($http){
    var vm = this;
    vm.model={
        contacts:[],
        toggleContactMgmt:false,
        selectedRecordToEdit:null
    }
    $http.get("/api/contacts").then(function(res){
        vm.model.contacts=res.data.AddressBook.Contact.map(function(contact){
            contact.editMode=false;
             return contact;
        });
    },function(){
        console.log("Unable to reterive the data");
    });

    vm.updateCreate=function(editMode,contact,index){

        if(contact==null){
            vm.model.selectedRecordToEdit=null;
            vm.model.toggleContactMgmt=!vm.model.toggleContactMgmt;
            return;
        }
        if(editMode){
            vm.model.contacts[index].ContactTitle[0]=contact.ContactTitle;
            vm.model.contacts[index].ContactName[0]=contact.ContactName;
            vm.model.contacts[index].CompanyName[0]=contact.CompanyName;
            vm.model.contacts[index].City[0]=contact.City;
            vm.model.contacts[index].Country[0]=contact.Country;
            vm.model.contacts[index].CustomerID[0]=contact.CustomerID;
            vm.model.contacts[index].Email[0]=contact.Email;
            vm.model.contacts[index].Fax[0]=contact.Fax;
            vm.model.contacts[index].Phone[0]=contact.Phone;
            vm.model.contacts[index].Address[0]=contact.Address;
            vm.model.contacts[index].PostalCode[0]=contact.PostalCode;
            vm.model.selectedRecordToEdit=null;

        }else{
            vm.model.contacts.unshift({
                Address: [contact.Address],
                City:[contact.ContactTitle],
                CompanyName:[contact.City],
                ContactName: [contact.ContactName],
                ContactTitle:[contact.ContactTitle],
                Country: [contact.Country],
                CustomerID: [contact.CustomerID],
                Email: [contact.Email],
                Fax: [contact.Fax],
                Phone: [contact.Phone],
                PostalCode:[contact.PostalCode]
            })
        }
        vm.model.toggleContactMgmt=!vm.model.toggleContactMgmt;
    }

    vm.editRecord=function(contact,index){
        vm.model.selectedRecordToEdit=Object.assign({},contact);
        vm.model.selectedRecordToEdit.index=index;
        vm.model.toggleContactMgmt=!vm.model.toggleContactMgmt;
    }

    vm.addContact=function(){
        vm.model.selectedRecordToEdit=null;
        vm.model.toggleContactMgmt=!vm.model.toggleContactMgmt;
    }

});
