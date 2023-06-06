export default (sequelize, Sequelize) => {
  const User = sequelize.define(
    'users',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return User;
};
