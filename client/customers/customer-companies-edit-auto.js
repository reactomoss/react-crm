//import './customer-companies-edit-auto.html';

//import { CustomerCompanies } from '../../api/customers/customer-company.js';

Template.updateCustomerEdit.helpers({

    someDoc() {
        const customerId = () => FlowRouter.getParam('_id');
        const instance = Template.instance();

        instance.subscribe('CustomerCompany.get', customerId());

        return CustomerCompanies.findOne({_id: customerId()});
    }
});

