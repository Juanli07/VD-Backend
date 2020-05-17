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
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        id_usuario: {
            type: Sequelize.STRING,
            primaryKey: true,
            validate: {
                isEmail: {
                    message: 'No es un correo'
                }
            }
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
                noEmpty: true
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