const bcrypt = require('bcrypt')
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("usuario", {
        email: {
            type: Sequelize.STRING,
            unique: true,
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
        contrasena: {
            type: Sequelize.STRING
        },
        cel: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        isAdmin: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        },
        salario: {
            type: Sequelize.FLOAT(9, 2),
            validate: {
                isFloat: true
            }
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true
    });

    return User;
};