module.exports =(sequelize, Sequeligitze)=>{
    const kits = sequelize.define("kits",{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            validate: {
                isNumeric: true
            }
        },
        id_convocatoria: {
            type: Sequelize.INTEGER,
            foreingkey: true,
            allowNull:false,
            validate: {
                isNumeric: true

            }
        },
        requisitos: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true
            }
        },
        active: {
          type: Sequelize.BOOLEAN,
          defaultValue: true  
        }


    },{
        freezeTableName:
        true
    });

    return kits;

}