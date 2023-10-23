interface data {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const sendForm = async (data: data) => {
    data.id = crypto.randomUUID();

    try {
        const response = await fetch('/api/controllers/register', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Os dados foram enviados com sucesso, faça algo com a resposta se necessário
            const responseData = await response.json();
            console.log(responseData);
        } else {
            console.error('Erro ao enviar os dados do formulário.');
        }
    } catch (error) {
        console.error('Erro ao fazer a solicitação POST:', error);
    }
};
//criptografar a senha
//decodificar a senha

export default sendForm;
