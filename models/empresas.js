module.exports = (sequelize, Sequelize) => {
    const Empresa = sequelize.define("empresa", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        validate: {
          isNumeric: true
        },
      },
      nombre: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      tel: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      direccion: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      nombre_repe: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaulValue: true,
      },
    });

}