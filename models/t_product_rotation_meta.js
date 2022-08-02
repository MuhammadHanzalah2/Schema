/*

Model For t_product_rotation_meta 

*/

module.exports = (sequelize, DataTypes) => {
    const t_product_rotation_meta = sequelize.define("t_product_rotation_meta", {
        status:{
            type: DataTypes.STRING,
        },
        recall:{
            type:DataTypes.INTEGER,
        },
        prev_name:{
            type: DataTypes.STRING,
        },
        product_name:{
            type: DataTypes.STRING,
        },
        projectId:{
            type:DataTypes.INTEGER,
        },
        userId:{
            type:DataTypes.INTEGER,
        },
        current:{
            type: DataTypes.STRING,
        },
        next:{
            type: DataTypes.STRING,
        },
        totalQA:{
            type:DataTypes.INTEGER,
        },
        currentQA:{
            type:DataTypes.INTEGER,
        },
        QAId:{
            type:DataTypes.INTEGER,
        },
        REQId:{
            type:DataTypes.INTEGER,
        },
        combination:{
            type: DataTypes.STRING,
        },
        GUID:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        productSequence:{
            type:DataTypes.STRING,
        },
        completed:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        }
    }, {
        tableName:'t_product_rotation_meta',
    });
  
    return t_product_rotation_meta;
};