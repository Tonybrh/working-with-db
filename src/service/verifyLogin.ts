import { toast } from 'react-toastify';

interface VerifyType {
    email: string;
    password: string;
}
const verifyLogin = async (data: VerifyType) => {
    try {
        const response = await fetch('/api/controllers/login', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        const json = await response.json();
        console.log(json);
        if (response.ok) {
            window.location.href = '/home';
            console.log('Login efetuado com sucesso');
        } else {
            toast.error('Email ou senha estão errados');
        }
    } catch (error) {
        console.error(error);
    }
};

export default verifyLogin;
