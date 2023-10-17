interface VerifyType {
    email: string;
    password: string;
}
interface UserType {
    email: string;
    password: string;
}
const verifyLogin = async (data: VerifyType) => {
    try {
        const response = await fetch('/api/controllers/login', {
            method: 'GET'
        });
        const json = await response.json();
        console.log(json);
        const foundUser = json.find(
            (user: UserType) =>
                user.email === data.email && user.password === data.password
        );
        console.log(foundUser);

        if (foundUser) {
            console.log('Login concluído com sucesso ');
        } else {
            console.log('Usuário não encontrado');
        }
        /* json.map((user: UserType) => {
            if (user.email === data.email && user.password === data.password) {
                console.log('Login concluído com sucesso');
                return;
            } else {
                console.log('Usuário não encontrado');
            }
        }); */
    } catch (error) {
        console.error(error);
    }
};

export default verifyLogin;
