export default {

	customers: [],

	getCustomers: async () => {
		const customers = await fetchCustomers.run();
		const adjustedCustomers = customers.map(c => {
			return {
				Id: c.customer_id,
				Name: c.customer_name,
				Weight: c.weight,
				Height: c.height,
				Measurement: c.customer_measurement,
				NoOfSessions: c.no_of_sessions,
				FrontImg: c.front_img,
				SideImg: c.side_img
			}
		});
		storeValue('customers', adjustedCustomers);
	},

	createCustomer: async () => {
		await createCustomer.run({
		});

		await this.getCustomers();
		closeModal('mdl_manageCustomer');
		showAlert('Customer Created!', 'success');
	},

	init: async () => {
		await this.getCustomers();
	}
}
