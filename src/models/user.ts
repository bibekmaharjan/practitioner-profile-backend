export default (sequelize, Sequelize) => {
  const User = sequelize.define(
    'users',
    {
      email: {
        type: Sequelize.STRING,
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
