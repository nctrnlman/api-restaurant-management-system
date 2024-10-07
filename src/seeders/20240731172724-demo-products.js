"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
        product_name: "Bruschetta",
        product_price: "15000",
        category_id: 1, // Appetizers
        description:
          "Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil.",
        product_image:
          "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Margherita Pizza",
        product_price: "75000",
        category_id: 2, // Main Courses
        description:
          "Classic pizza with tomato sauce, fresh mozzarella, and basil.",
        product_image:
          "https://images.unsplash.com/photo-1680405620826-83b0f0f61b28?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Tiramisu",
        product_price: "40000",
        category_id: 3, // Desserts
        description:
          "Traditional Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
        product_image:
          "https://images.unsplash.com/photo-1707269388230-60ceceac3e6b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Espresso",
        product_price: "18000",
        category_id: 4, // Beverages
        description:
          "Rich and bold Italian coffee brewed to perfection.",
        product_image:
          "https://images.unsplash.com/photo-1596952954288-16862d37405b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Caprese Salad",
        product_price: "35000",
        category_id: 9, // Salads
        description:
          "Fresh mozzarella, tomatoes, and basil, drizzled with olive oil and balsamic vinegar.",
        product_image:
          "https://plus.unsplash.com/premium_photo-1677619680472-3130a97bd5d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FwcmVzZSUyMFNhbGFkfGVufDB8fDB8fHww", // Replace with actual image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Spaghetti Bolognese",
        product_price: "85000",
        category_id: 2, // Main Courses
        description: "Traditional Italian pasta with a rich and hearty meat sauce.",
        product_image:
          "https://images.unsplash.com/photo-1626844131082-256783844137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BhZ2hldHRpJTIwQm9sb2duZXNlfGVufDB8fDB8fHww", // Replace with actual image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Panna Cotta",
        product_price: "35000",
        category_id: 3, // Desserts
        description:
          "Creamy Italian dessert topped with a sweet fruit sauce.",
        product_image:
          "https://plus.unsplash.com/premium_photo-1714115035062-aca15e889c0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UGFubmElMjBDb3R0YXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Lasagna",
        product_price: "95000",
        category_id: 2, // Main Courses
        description:
          "Layers of pasta, rich Bolognese sauce, creamy béchamel, and melted cheese.",
        product_image:
          "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFzYWduYXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Chianti",
        product_price: "65000",
        category_id: 4, // Beverages
        description:
          "Full-bodied Italian red wine with notes of cherries and spices.",
        product_image:
          "https://images.unsplash.com/photo-1544776527-68e63addedf7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Focaccia",
        product_price: "20000",
        category_id: 1, // Appetizers
        description:
          "Soft Italian flatbread flavored with olive oil, garlic, and rosemary.",
        product_image:
          "https://plus.unsplash.com/premium_photo-1700326967545-91adcec6af2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rm9jYWNjaWF8ZW58MHx8MHx8fDA%3D", // Replace with actual image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Cannoli",
        product_price: "40000",
        category_id: 3, // Desserts
        description:
          "Crispy pastry shells filled with sweet ricotta cream.",
        product_image:
          "https://images.unsplash.com/photo-1600975814842-69bd3df9c798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fubm9saXxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Risotto alla Milanese",
        product_price: "80000",
        category_id: 2, // Main Courses
        description: "Creamy risotto flavored with saffron and Parmesan cheese.",
        product_image:
          "https://images.unsplash.com/photo-1612204078213-a227dba74093?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
