// Simulação de dados de participantes por evento
let participantesPorEvento = {
    1: [
        { nome: 'Carlos', email: 'carlos@gmail.com' },
        { nome: 'Maria', email: 'maria@gmail.com' }
    ],
    2: [
        { nome: 'João', email: 'joao@gmail.com' },
        { nome: 'Ana', email: 'ana@gmail.com' }
    ]
};

// Função para redirecionar para a página de participantes do evento
function verParticipantes(eventoId) {
    localStorage.setItem('eventoId', eventoId);
    window.location.href = 'participantes.html';
}

// Ao carregar a página de participantes, exibe os dados
window.onload = function () {
    const eventoId = localStorage.getItem('eventoId');
    const eventoTitulo = document.getElementById('eventoTitulo');
    const participantesList = document.getElementById('participantes');

    if (eventoId) {
        eventoTitulo.innerText = eventoId;  // Exibir ID do evento como título (pode ser ajustado com dados reais)
        
        // Carregar participantes fictícios
        const participantes = participantesPorEvento[eventoId] || [];
        participantes.forEach(p => {
            const li = document.createElement('li');
            li.innerText = `${p.nome} - ${p.email}`;
            participantesList.appendChild(li);
        });
    }
};

// Função para adicionar novo participante
function adicionarParticipante(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const eventoId = localStorage.getItem('eventoId');

    if (nome && email) {
        const novoParticipante = { nome, email };
        
        // Adicionar participante à lista fictícia
        participantesPorEvento[eventoId].push(novoParticipante);

        // Atualizar a lista de participantes exibida
        const li = document.createElement('li');
        li.innerText = `${nome} - ${email}`;
        document.getElementById('participantes').appendChild(li);

        // Limpar formulário
        document.getElementById('formParticipante').reset();
    }
}

// Função para voltar à página de eventos
function voltar() {
    window.location.href = 'index.html';
}
