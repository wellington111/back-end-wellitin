import { Freelancer } from './Freelancer';
import { Projeto } from './Projeto';
import { Cliente } from './Cliente';
import { FeedBack } from './Feedback';
import { Avaliacao } from './Avaliaçao';


//rodar freelancers

const freelancer1 = new Freelancer('Pedro', 'pedro9809@gmail.com', 'Programador')
const freelancer2 = new Freelancer('Wellitin', 'Wellitin75gmail.com', 'Escritor')
const freelancer3 = new Freelancer('veronica', 'Veronica2030@gmail.com', 'Gerente')

//clientes

const cliente1 = new Cliente('Vera', 'vera2025@gmail.com')
const cliente2 = new Cliente('Pedro', ' Pedroca@gmail.com')
const cliente3 = new Cliente('Victor', ' Victor098@gmail.com')

//teste projeto

const projeto1 = new Projeto('Site', 'CriadorWeb', cliente1)
const projeto2 = new Projeto('Wifi', 'Rede', cliente2)
const projeto3 = new Projeto('Yotube', 'videos', cliente3)

//atribuição

projeto1.setFreelancer(freelancer1)
projeto2.setFreelancer(freelancer2)
projeto3.setFreelancer(freelancer3)
        
//concluidos

projeto1.marcarConcluido();
projeto2.marcarConcluido();
projeto3.marcarConcluido();

//FeedBacks

const FeedBack1 = new FeedBack(cliente1, projeto1, 'Trabalho bem feito', 7)
const FeedBack2 = new FeedBack(cliente2, projeto2, 'Trabalho otimo ', 10)
const FeedBack3 = new FeedBack(cliente1, projeto3, 'Trabalho mal feito "_" ', 3)

//Avaliacao

const Avaliacao1 = new Avaliacao(freelancer1, projeto1, 9)
Avaliacao1.adicionarFeedback(FeedBack1)
const Avaliacao2 = new Avaliacao(freelancer2, projeto1, 8)
Avaliacao2.adicionarFeedback(FeedBack2)
const Avaliacao3 = new Avaliacao(freelancer3, projeto1, 5)
//Avaliacao3.adicionarFeedback(FeedBack3)

//avaliar

Avaliacao1.avaliar();
Avaliacao2.avaliar();
Avaliacao3.avaliar();