module.exports = (sequelize, Sequelize) => {
    const Inscripcion = sequelize.define("inscripcion", {
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
        id_convocatoria: {
            type: Sequelize.INTEGER,
            foreingkey: true,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        id_usuario: {
            type: Sequelize.STRING,
            validate: {
                isEmail: {
                    message: 'No es un correo'
                }
            },
            foreingkey: true

        },
        fecha: {
            type: Sequelize.DATE,
            validate: {
                isDate: true
            }
        },
        numero_participante: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true
    });
    return Inscripcion
};