const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const Agendamento = db.define('agendamento',{
    codAgendamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type:DataTypes.DATEONLY,
        allowNull: false
    },
    hora: {
        type:DataTypes.TIME,
        allowNull: false
    },

    
    idCiclista:{
        type:DataTypes.INTEGER,
        references: {
            model: 'ciclistas',
            key: 'codCiclista'
        }
    },

    idBicicleta:{
        type:DataTypes.INTEGER,
        references: {
            model: 'bicicletas',
            key: 'codBicicleta'
        }
    },

    },{
        timestamps: false,
        tableName: 'agendamentos'
})

module.exports = Agendamento