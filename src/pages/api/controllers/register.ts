import { NextApiRequest, NextApiResponse } from 'next';
import sequelize from '../instances/mysql';
import User from '../models/user';

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
        await User.create(data);
        res.status(200).json({
            content: req.body
        });
    }
};

export default registerUser;
