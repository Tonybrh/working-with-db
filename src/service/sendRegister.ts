interface data {
    id?: number;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const sendForm = async (data: data) => {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    data.id = randomNumber;

    try {
        const response = await fetch('/api/controllers/register', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Os dados foram enviados com sucesso, faça algo com a resposta se necessário
            const responseData = await response.json();
            console.log(responseData);

            window.location.href = '/loginpage';
        } else {
            console.error('Erro ao enviar os dados do formulário.');
        }
    } catch (error) {
        console.error('Erro ao fazer a solicitação POST:', error);
    }
};

export default sendForm;
