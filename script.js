// O evento 'DOMContentLoaded' garante que nosso JavaScript só vai rodar
// depois que toda a estrutura HTML da página estiver pronta.
document.addEventListener('DOMContentLoaded', function() {

    // --- MANIPULAÇÃO DO FORMULÁRIO DE CADASTRO ---
    const formCadastro = document.getElementById('form-cadastro');

    if (formCadastro) {
        formCadastro.addEventListener('submit', function(event) {
            // Impede o comportamento padrão de recarregar a página
            event.preventDefault(); 

            // Mensagem de sucesso para o usuário
            alert('Cadastro realizado com sucesso! Em breve você receberá nossas novidades.');

            // Limpa os campos do formulário
            formCadastro.reset();
        });
    }

    // --- MANIPULAÇÃO DO FORMULÁRIO DE AGENDAMENTO ---
    const formAgendamento = document.getElementById('form-agendamento');

    if (formAgendamento) {
        formAgendamento.addEventListener('submit', function(event) {
            // Impede o recarregamento da página
            event.preventDefault();

            const dataAgendada = document.getElementById('inputData').value;
            const horaAgendada = document.getElementById('inputHorario').value;

            // Mensagem de confirmação personalizada
            alert(`Agendamento confirmado para o dia ${dataAgendada} às ${horaAgendada}. Obrigado!`);

            // Limpa o formulário
            formAgendamento.reset();
        });
    }
});