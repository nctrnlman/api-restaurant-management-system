"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
        product_name: "Spring Rolls",
        product_price: "12000",
        category_id: 1, // Appetizers
        description:
          "Crispy spring rolls filled with vegetables and served with a dipping sauce.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Grilled Salmon",
        product_price: "85000",
        category_id: 2, // Main Courses
        description: "Grilled salmon fillet served with lemon and dill sauce.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Chocolate Cake",
        product_price: "30000",
        category_id: 3, // Desserts
        description:
          "Rich and moist chocolate cake topped with creamy frosting.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Mojito",
        product_price: "15000",
        category_id: 4, // Beverages
        description:
          "Refreshing mint and lime cocktail with a hint of sweetness.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Caesar Salad",
        product_price: "25000",
        category_id: 9, // Salads
        description:
          "Classic Caesar salad with romaine lettuce, croutons, and parmesan cheese.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Spaghetti Carbonara",
        product_price: "70000",
        category_id: 2, // Main Courses
        description: "Creamy pasta with pancetta, egg, and parmesan.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Tiramisu",
        product_price: "35000",
        category_id: 3, // Desserts
        description:
          "Italian coffee-flavored dessert made with mascarpone cheese.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Vegetarian Pizza",
        product_price: "60000",
        category_id: 2, // Main Courses
        description:
          "Pizza topped with fresh vegetables and mozzarella cheese.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Fruit Smoothie",
        product_price: "20000",
        category_id: 4, // Beverages
        description: "Blended smoothie made with fresh fruits and yogurt.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Chicken Wings",
        product_price: "30000",
        category_id: 1, // Appetizers
        description:
          "Spicy and crispy chicken wings served with ranch dipping sauce.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Beef Burger",
        product_price: "75000",
        category_id: 2, // Main Courses
        description:
          "Juicy beef burger with lettuce, tomato, and cheddar cheese.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Lemon Tart",
        product_price: "32000",
        category_id: 3, // Desserts
        description:
          "Tangy lemon tart with a buttery crust and fresh lemon zest.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Iced Coffee",
        product_price: "18000",
        category_id: 4, // Beverages
        description: "Cold brewed coffee served over ice with a touch of milk.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Greek Salad",
        product_price: "27000",
        category_id: 9, // Salads
        description:
          "Fresh Greek salad with cucumbers, tomatoes, olives, and feta cheese.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Pancakes",
        product_price: "22000",
        category_id: 12, // Breakfast
        description:
          "Fluffy pancakes served with maple syrup and fresh berries.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Chicken Alfredo",
        product_price: "68000",
        category_id: 2, // Main Courses
        description:
          "Creamy Alfredo pasta with grilled chicken and parmesan cheese.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Apple Pie",
        product_price: "28000",
        category_id: 3, // Desserts
        description: "Classic apple pie with a flaky crust and spiced apples.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Mango Lassi",
        product_price: "19000",
        category_id: 4, // Beverages
        description:
          "Creamy and refreshing mango lassi with a hint of cardamom.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Buffalo Cauliflower",
        product_price: "22000",
        category_id: 1, // Appetizers
        description: "Crispy cauliflower bites tossed in spicy buffalo sauce.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: "Pork Ribs",
        product_price: "95000",
        category_id: 2, // Main Courses
        description: "Tender pork ribs glazed with a smoky BBQ sauce.",
        product_image:
          "https://www.telkomsel.com/sites/default/files/2024-05/w1%20mei%203398.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
