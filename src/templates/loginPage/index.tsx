import * as L from '../signIn/style';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import verifyLogin from 'src/service/verifyLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const schema = yup.object({
    password: yup.string().required('Campo obrigatório').trim(),
    email: yup
        .string()
        .required('Campo obrigatório')
        .email('Digite um email válido')
        .trim()
});

interface FormType {
    password: string;
    email: string;
}

const LoginPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormType>({
        resolver: yupResolver(schema)
    });

    const onsubmit: SubmitHandler<FormType> = async data => {
        verifyLogin(data);
        console.log(data);
    };

    return (
        <L.Container>
            <L.FormContainer>
                <L.Title>Login</L.Title>
                <L.Form onSubmit={handleSubmit(onsubmit)}>
                    <L.InputContainer>
                        <L.InputLabel>Email</L.InputLabel>
                        <L.Input
                            {...register('email')}
                            type="email"
                            placeholder="Digite seu email"
                        />
                        <L.SpanError>{errors?.email?.message}</L.SpanError>
                    </L.InputContainer>
                    <L.InputContainer>
                        <L.InputLabel>Senha</L.InputLabel>
                        <L.Input
                            {...register('password')}
                            type="password"
                            placeholder="Digite sua senha"
                        />
                        <L.SpanError>{errors?.password?.message}</L.SpanError>
                    </L.InputContainer>
                    <L.Submit type="submit" value="Enviar" />
                </L.Form>
            </L.FormContainer>
            <ToastContainer theme="dark" />
        </L.Container>
    );
};

export default LoginPage;
