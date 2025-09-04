// Este evento garante que o código JavaScript só será executado 
// depois que todo o conteúdo da página (HTML) for carregado.
document.addEventListener('DOMContentLoaded', function() {

    // --- INTERATIVIDADE DO FORMULÁRIO DE CADASTRO ---

    // 1. Seleciona o formulário de cadastro pelo ID que definimos no HTML.
    const formCadastro = document.getElementById('form-cadastro');

    // 2. Adiciona um "ouvinte" que espera pelo evento de 'submit' (envio do formulário).
    formCadastro.addEventListener('submit', function(event) {
        
        // 3. Impede o comportamento padrão do navegador, que é recarregar a página.
        event.preventDefault(); 

        // 4. Exibe uma mensagem de alerta para o usuário.
        alert('Cadastro realizado com sucesso! Em breve você receberá nossas novidades.');

        // 5. Limpa todos os campos do formulário após o envio.
        formCadastro.reset();
    });


    // --- INTERATIVIDADE DO FORMULÁRIO DE AGENDAMENTO ---

    // 1. Seleciona o formulário de agendamento pelo seu ID.
    const formAgendamento = document.getElementById('form-agendamento');

    // 2. Adiciona o "ouvinte" de 'submit' para este formulário.
    formAgendamento.addEventListener('submit', function(event) {

        // 3. Impede o recarregamento da página.
        event.preventDefault();

        // 4. Pega os valores dos campos de data e hora para usar na mensagem.
        const dataAgendada = document.getElementById('inputData').value;
        const horaAgendada = document.getElementById('inputHorario').value;

        // 5. Exibe uma mensagem de confirmação personalizada.
        alert(`Agendamento confirmado para o dia ${dataAgendada} às ${horaAgendada}. Obrigado!`);

        // 6. Limpa o formulário.
        formAgendamento.reset();
    });

});