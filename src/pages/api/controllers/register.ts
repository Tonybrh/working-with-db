import { NextApiRequest, NextApiResponse } from 'next';
import sequelize from '../instances/mysql';
import User from '../models/user';
import bcrypt from 'bcrypt';
const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso');
    } catch (error) {
        console.error(error);
    }
    if (req.method === 'POST') {
        const data = JSON.parse(req.body);
        console.log(data);
        try {
            const hashedPassword = await bcrypt.hash(data.password, 10);
            console.log(hashedPassword);
            data.password = hashedPassword;
            data.confirmPassword = hashedPassword;
            await User.create(data);
        } catch (error) {
            console.error(error);
        }
        console.log(data.password);
        res.status(200).json({
            content: req.body
        });
    }
};

export default registerUser;
