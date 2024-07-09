import { Freelancer } from './Freelancer';
import { Projeto } from './Projeto';
import { Avaliacao } from './Avaliaçao';

// Criação de alguns freelancers
const freelancer1 = new Freelancer('João', 'joao90@example.com', 'Desenvolvimento Web');
const freelancer2 = new Freelancer('Joãozin', 'Joãozin3@example.com', 'Design Gráfico');
const freelancer3 = new Freelancer('Wellitin', 'Wellin75@example.com', 'SEO');

// Criação de alguns projetos
const projeto1 = new Projeto('Site Institucional', 'Desenvolvimento de um site para uma empresa');
const projeto2 = new Projeto('Logotipo', 'Criação de logotipo para uma startup');
const projeto3 = new Projeto('Campanha SEO', 'Otimização para mecanismos de busca');

// Atribuição de freelancers a projetos
projeto1.atribuirFreelancer(freelancer1);
projeto2.atribuirFreelancer(freelancer2);
projeto3.atribuirFreelancer(freelancer3);

// Avaliação de freelancers nos projetos
const avaliacao1 = new Avaliacao(freelancer1, projeto1, 9);
const avaliacao2 = new Avaliacao(freelancer2, projeto2, 8);
const avaliacao3 = new Avaliacao(freelancer3, projeto3, 7);

avaliacao1.avaliar();
avaliacao2.avaliar();
avaliacao3.avaliar();

// Testar atribuições e listagens
console.log(`${projeto1.getNome()} - Freelancer: ${projeto1.getFreelancer()?.getNome()}, Especialidade: ${projeto1.getFreelancer()?.getAreaDeEspecializacao()}`);
console.log(`${projeto2.getNome()} - Freelancer: ${projeto2.getFreelancer()?.getNome()}, Especialidade: ${projeto2.getFreelancer()?.getAreaDeEspecializacao()}`);
console.log(`${projeto3.getNome()} - Freelancer: ${projeto3.getFreelancer()?.getNome()}, Especialidade: ${projeto3.getFreelancer()?.getAreaDeEspecializacao()}`);
