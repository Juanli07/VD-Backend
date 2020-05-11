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
        genero: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        fecha_nacimiento: {
            type: Sequelize.DATE,
            validate: {
                isDate: true
            }
        },
        isAdmin: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        salario: {
            type: Sequelize.FLOAT(9, 2),
            validate: {
                isFloat: true
            }
        },
        ref_ce: {
            type: Sequelize.INTEGER,
            validate: {
                isNumeric: true
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