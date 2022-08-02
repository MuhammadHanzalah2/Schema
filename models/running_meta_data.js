/*
Model For running_meta_data with three fields 'sectionName', 'sectionDescription', 'sequence' 
*/
module.exports = (sequelize, DataTypes) => {
    const running_meta_data = sequelize.define('running_meta_data', {
        starting_cursor: {
            type: DataTypes.JSON
        },
        next_cursor: {
            type: DataTypes.JSON,
        },
        current_cursor: {
            type: DataTypes.JSON,
        },
        userId: {
            type: DataTypes.INTEGER,
        },
        projectId:{
            type: DataTypes.INTEGER
        }
    })
    return running_meta_data;
}