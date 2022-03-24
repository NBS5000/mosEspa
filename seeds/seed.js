const sequelize = require('../config/connection');
const { User, Product } = require('../models');
const userData = require('./user.json');
const productData = require('./product.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const product of productData) {
    await Product.create({
      ...product,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();
