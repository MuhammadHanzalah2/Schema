/*
Model For user_region 
*/
module.exports = (sequelize, DataTypes) => {
    const user_region = sequelize.define('user_region', {
        isActive:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
            allowNull:false
        },
        // assignedBy:{
        //     type:DataTypes.INTEGER,
        //     allowNull:false
        // },
        reportingStatus:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
        }
    },
    {
        hierarchy: true
    }
    )

    return user_region;
}