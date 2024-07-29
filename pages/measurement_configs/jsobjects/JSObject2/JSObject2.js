export default {
	selectedPoints: [],

	// Initialize the selected points array
	init: () => {
		this.selectedPoints = [];
	},

	// Handle click event to capture the points
	handleImageClick: (x, y) => {
		if (this.selectedPoints.length < 2) {
			this.selectedPoints.push({ x, y });
			showAlert(`Point ${this.selectedPoints.length} added at (${x}, ${y})`, 'success');
		} else {
			showAlert('Two points already selected. Reset to select new points.', 'error');
		}
	},


	// Function to save the selected points
	savePoints: () => {
		if (this.selectedPoints.length < 2) {
			showAlert('Please select two points before saving.', 'error');
			return;
		}
		// Save the points to the database or perform other actions here
		showAlert('Points saved successfully', 'success');
		// Example: storeValue('selectedPoints', this.selectedPoints);
	}
}
