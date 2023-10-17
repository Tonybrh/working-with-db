import React from 'react';
import {
    Container,
    Form,
    FormContainer,
    Input,
    InputContainer,
    InputLabel,
    LoginLink,
    SpanError,
    Submit,
    Title
} from './style';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import sendForm from 'src/service/sendRegister';

const schema = yup.object({
    name: yup.string().required('Campo obrigatório').trim(),
    email: yup
        .string()
        .required('Campo obrigatório')
        .trim()
        .email('Digite um email válido'),
    password: yup.string().required('Campo obrigatório').trim(),
    confirmPassword: yup
        .string()
        .required('Campo obrigatório')
        .trim()
        .oneOf([yup.ref('password')], 'As senhas não coincidem')
});

interface FormType {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Home: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm<FormType>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<FormType> = async data => {
        sendForm(data);
        reset();
    };

    return (
        <Container>
            <FormContainer>
                <Title>Cadastre-se</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <InputLabel>Digite seu nome</InputLabel>
                        <Input
                            {...register('name')}
                            type="name"
                            placeholder="Digite seu nome"
                        />
                        <SpanError>{errors?.name?.message}</SpanError>
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>Digite seu email</InputLabel>
                        <Input
                            {...register('email')}
                            type="email"
                            placeholder="Confirme sua senha"
                        />
                        <SpanError>{errors?.email?.message}</SpanError>
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>Crie sua senha</InputLabel>
                        <Input
                            {...register('password')}
                            type="password"
                            placeholder="Digite sua senha"
                        />
                        <SpanError>{errors?.password?.message}</SpanError>
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>Confirme sua senha</InputLabel>
                        <Input
                            {...register('confirmPassword', {
                                validate: (val: string) => {
                                    if (watch('password') != val) {
                                        return 'Senhas não coincidem';
                                    }
                                }
                            })}
                            type="password"
                            placeholder="Confirme sua senha"
                        />
                        <SpanError>
                            {errors?.confirmPassword?.message}
                        </SpanError>
                    </InputContainer>
                    <Submit type="submit" value="Enviar" />
                </Form>
            </FormContainer>
            Já tem uma conta? <LoginLink href="/loginpage">Entrar</LoginLink>
        </Container>
    );
};

export default Home;
