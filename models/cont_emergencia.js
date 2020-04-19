module.exports = (sequelize, Sequelize) => {
    const Cont_emergencia = sequelize.define("cont_emergencia", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                isNumeric: {
                    message: 'No es numérico'
                }
            }
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: {
                    message: 'No es un correo'
                }
            }
        },
        nombre: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },

        cel: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
    }, {
        freezeTableName: true
    });
    return Cont_emergencia
};