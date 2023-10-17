import { NextApiRequest, NextApiResponse } from 'next';
import sequelize from '../instances/mysql';
import User from '../models/user';

const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso');
    } catch (error) {
        console.error(error);
    }
    if (req.method === 'GET') {
        console.log('Requisição concluída');
        const users = await User.findAll();
        res.status(200).send(JSON.stringify(users));
    }
};
export default loginUser;
