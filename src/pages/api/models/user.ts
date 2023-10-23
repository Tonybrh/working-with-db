import { Model, DataTypes } from 'sequelize';
import sequelize from '../instances/mysql';

export interface userType extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const User = sequelize.define<userType>(
    'User',
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        confirmPassword: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'users',
        timestamps: false
    }
);

export default User;
