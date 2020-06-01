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
        modalidad: {
            type: Sequelize.STRING
        },
        id_usuario: {
            type: Sequelize.STRING,
            foreingkey: true

        },
        fecha: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        numero_participante: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        kitState: {
            type: Sequelize.STRING,
            defaultValue: '0|0|0'
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