const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config/connection.js");

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.UUID.V4,
            allowNull: false,
            primaryKey: true,
            defaultValue: UUIDV4
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        uid: {
            type: DataTypes.UUID.V4,
            references: {
                model: "user",
                key: "id"
            } 
        },
        mid: {
            type: DataTypes.UUID.V4,
            references: {
                model: "machine",
                key: "id"
            }  
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    }
);

module.exports = Comment;