const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('config_item', {
        key: {
            type: Sequelize.TEXT, primaryKey: true
        },
        value: {
            type: Sequelize.TEXT, allowNull: false
        }
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'config_item',
        scopes: {
            find: {
                fields: ['key', 'code'],
            },
        }
    });
};
