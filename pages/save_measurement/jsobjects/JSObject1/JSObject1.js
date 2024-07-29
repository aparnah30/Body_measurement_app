export default {
    categories: [],

    // Initialize categories (fetch existing categories from the database if needed)
    init: async () => {
        const fetchedCategories = await fetchCategories.run(); // Assuming fetchCategories is a query to get categories
        this.categories = fetchedCategories.map(cat => ({ label: cat.config, value: cat.configs_id }));
        storeValue('categories', this.categories);
    },

    // Show the modal to add a new category
    showAddCategoryModal: () => {
        showModal('mdl_addCategory');
    },

    // Add a new category
    addCategory: async () => {
        const newCategoryName = inp_categoryName.text;
        if (!newCategoryName) {
            showAlert('Please enter a category name.', 'error');
            return;
        }

        // Save the new category to the database
        const newCategory = await createCategory.run();
        if (newCategory) {
            // Add the new category to the list
            this.categories.push({ label: newCategoryName, value: newCategory.configs_id });
            storeValue('categories', this.categories);

            // Close the modal and show success message
            closeModal('mdl_addCategory');
            showAlert('Category added successfully!', 'success');
        } else {
            showAlert('Failed to add category.', 'error');
        }
    }
}
