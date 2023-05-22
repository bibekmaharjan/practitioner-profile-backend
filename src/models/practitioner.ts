export default (sequelize, Sequelize) => {
  const practitioner = sequelize.define(
    'practitioner_list',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.DATE,
      },
      workingDays: {
        type: Sequelize.STRING,
      },
      startTime: {
        type: Sequelize.DATE,
      },
      endTime: {
        type: Sequelize.DATE,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      zipcode: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      isICUSpecialist: {
        type: Sequelize.BOOLEAN,
      },
      userImg: {
        type: Sequelize.STRING,
      },
      allergies: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    },
    {
      tableName: 'practitioner_list',
    }
  );

  return practitioner;
};
