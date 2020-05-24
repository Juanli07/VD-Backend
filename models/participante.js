module.exports = (sequelize, Sequelize) => {
    const Participante = sequelize.define('participante', {
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
        cel: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        genero: {
            type: Sequelize.STRING
        },
        club: {
            type:Sequelize.STRING
        },
        fecha_nacimiento: {
            type:Sequelize.DATE
        },
        ref_ce : {
            type: Sequelize.INTEGER
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true
    });
    return Participante
}