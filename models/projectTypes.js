/*

Model For projectTypes with one fields 'projectType' 

*/

module.exports = (sequelize, DataTypes) => {
    const projectTypes = sequelize.define('projectTypes', {
        projectType: {
            type: DataTypes.STRING,
            unique: true,
        },
        
    })

    return projectTypes;
}