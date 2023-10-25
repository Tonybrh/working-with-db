import { NextApiRequest, NextApiResponse } from 'next';
import sequelize from '../instances/mysql';
import User from '../models/user';
import bcrypt from 'bcrypt';
interface UserType {
    dataValues: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    };
}
const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso');
    } catch (error) {
        console.error(error);
    }
    if (req.method === 'POST') {
        console.log('Requisição concluída');
        const data = JSON.parse(req.body);
        const users = await User.findAll();
        const foundUser: UserType | undefined = users.find((user: UserType) => {
            return user.dataValues.email === data.email;
        });
        if (foundUser) {
            const match = await bcrypt.compare(
                data.password,
                foundUser.dataValues.password
            );

            if (match) {
                res.status(200).send({
                    message: 'Login efetuado com sucesso'
                });
            } else {
                res.status(401).send({
                    message: 'Senha incorreta'
                });
            }
        } else {
            res.status(404).send({
                message: 'Email não cadastrado'
            });
        }
    }
};
export default loginUser;
