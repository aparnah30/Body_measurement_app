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
			customer_name: inp_customerName.text,
			customer_email: inp_customerEmail.text,
			height: parseInt(inp_customerHeight.text, 10),
			weight: parseInt(inp_customerWeight.text, 10),
			front_img: inp_customerFrontImg.text,
			side_img: inp_customerSideImg.text,
			no_of_sessions: parseInt(inp_customerSessions.text, 10)
		});

		await this.getCustomers();
		closeModal('mdl_manageCustomer');
		showAlert('Customer Created!', 'success');
	},

	init: async () => {
		await this.getCustomers();
	}
}
