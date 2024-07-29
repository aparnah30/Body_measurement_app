export default {

  measurements: [],

  addMeasurement: () => {
    const newMeasurement = {
      name: appsmith.store.measurementName,
      point: appsmith.store.clickedPoint,
      group: appsmith.store.selectedGroup || 'Ungrouped'
    };

    const updatedMeasurements = [...this.measurements, newMeasurement];
    storeValue('measurements', updatedMeasurements);
    showAlert('Measurement Added!', 'success');
  },

  openSaveModal: () => {
    showModal('saveMeasurementModal');
  },

  saveMeasurements: async () => {
    const category = appsmith.store.selectedCategory || appsmith.store.newCategory;
    if (!category) {
      showAlert('Please select or create a category', 'error');
      return;
    }

    const updatedMeasurements = this.measurements.map(m => ({
      ...m,
      group: category
    }));

    await saveMeasurements.run({
      measurements: updatedMeasurements
    });

    storeValue('measurements', []);
    closeModal('saveMeasurementModal');
    showAlert('Measurements Saved!', 'success');
  },

  handleCategoryChange: (event) => {
    storeValue('selectedCategory', event.target.value);
  },

  handleNewCategoryChange: (event) => {
    storeValue('newCategory', event.target.value);
  }
}
