module.exports = (sequelize, Sequelize)=>{
const convocatoria= sequelize.define("convocatoria",{
    /*id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
        validate: {
            isNumeric: true
        } 
    },*/
    id_empresa:{
        type: Sequelize.STRING,
        foreingkey: true //no estoy seguro de esto
        ,allowNull:false
        ,validate: {
            isNumeric: true
        }
    },
    titulo:{
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    banner:{
        type: Sequelize.BLOB,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    costo:{
        type:Sequelize.FLOAT(9,2),
        allowNull:false,
        validate:{
            isFloat:true
        }
    },
    fecha:{
        type: Sequelize.DATE,
        allowNull: false,
        validate:{
            isDate: true
        }
    },
    ref_modalidad:{
        type:Sequelize.STRING,
        notNUll: true,
        validate:{
            notEmpty: true
    }
    },
    precio:{
        type: Sequelize.FLOAT(9,2),
        notNUll: true,
        validate:{
            isFloat:true
        }

    },
    num_participantes:{
        type: Sequelize.INTEGER,
        notNUll: true,
        validate:{
            isNumeric:true
        }
    },
    active:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true

    }

},{
    freezeTableNAme:true
});
return convocatoria;
};