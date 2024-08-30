# FocaVest

[↩ FocaVest](https://leowbk77.github.io/FocaVest/)

## _Plano Metodológico_

### Sumário

1. [Introdução](#introdução)
2. [Análise geral do Projeto](#análise-geral-do-projeto)
3. [Organização do Projeto](#organização-do-projeto)

#### Controle de versões

|Versão|Data|Autor|Notas da Revisão|
|:---:|:---:|:---:|:---:|
|1.0|19/08/2024|João Victor B.C. Teixeira, Leonardo Marques Ferreira, Lucas de Oliveira Ketelhut, Rafael Alves Cardoso|Elaboração Inicial do Plano Metodológico|
|||||

### Introdução

Esse documento descreve o plano metodológico que será seguido no desenvolvimento do projeto FocaVest, relativo à disciplina Projeto e Desenvolvimento de Sistemas 1. 

Nesse documento, serão expostos fatores levados em conta no planejamento, como recursos de hardware e software, gerenciamento do pessoal da equipe, divisão de horário de trabalho, detalhes dos módulos, assim também como uma estimativa do cronograma e restrições. 

A equipe usará o conteúdo deste documento como guia de orientação visando elaborar um projeto fiel ao planejamento prévio.

### Análise geral do Projeto
#### Metodologia

Este documento apresenta o plano geral do aplicativo FocaVest, uma plataforma digital completa para auxiliar estudantes a alcançarem seus objetivos de aprovação no vestibular. O FocaVest visa otimizar o processo de estudo, oferecendo ferramentas personalizadas e um ambiente colaborativo para os alunos. 

O cronograma do projeto está dividido em duas fases principais. Na primeira fase, com duração de 8 semanas, concentraremos nossos esforços em definir a arquitetura do sistema, identificar as funcionalidades essenciais e realizar a análise detalhada dos requisitos do usuário. Utilizaremos o modelo de desenvolvimento Kanban para garantir um planejamento eficiente e flexível. 

Na segunda fase, adotaremos uma abordagem ágil para o desenvolvimento, com o objetivo de entregar valor ao usuário de forma incremental. Através de Kanban, realizaremos iterações curtas e focadas no desenvolvimento das funcionalidades mais importantes, permitindo que adaptemos o projeto às mudanças e feedback dos usuários. 

#### Algumas restrições do Projeto

Este documento detalha o plano de desenvolvimento do aplicativo FocaVest, uma plataforma digital completa para auxiliar estudantes na preparação para o vestibular. O projeto será realizado por uma equipe de quatro(4) integrantes e terá duração de 8 semanas, com entrega final prevista para 11 de novembro de 2024.

Todos os artefatos do projeto serão documentados e disponibilizados no [https://leowbk77.github.io/FocaVest/](https://leowbk77.github.io/FocaVest/). O cronograma prevê entregas intermediárias nos seguintes períodos:

16/09 e 14/10: Entregas 1 e 2 do repositório online (estima-se a entrega de 6 Requisitos Funcionais). 

04/11 e 11/11: Entregas 3 e 4 do repositório online (estima-se a entrega de 5 Requisitos Funcionais).

### Organização do Projeto
#### Estrutura Organizacional

A equipe de desenvolvimento é composta por seis componentes que está dividida em: 

 - Gerente de projeto 

 - Time de desenvolvimento 

 - Time de Arquitetura 

 - Time de design UX/UI 

 - PO

Esta divisão na estrutura da equipe é apenas para manter a organização, já que os quatro integrantes têm praticamente mesma experiência e capacidade de desenvolver os problemas propostos.  

Porém, previamente é definido um nome para gerenciar e se responsabilizar pela execução das tarefas e funções específicas.  

Cabe ao gerente do projeto unificar essas “sub-equipes”, tendo uma visão mais ampla e geral de como anda o projeto e se este está acorrendo dentro do que foi planejado, visando um bom andamento do projeto.

#### Papéis

![Papel do gerente de projetos](/assets/img/planometodologico/gerente-de-projetos.jpg)
![Papel do project owner](/assets/img/planometodologico/po.jpg)
![Papel do time de arquitetura](/assets/img/planometodologico/time-de-arquitetura.jpg)
![Papel do time de desenvolvimento](/assets/img/planometodologico/time-de-desenvolvimento.jpg)
![Papel do time de experiencia de usuário](/assets/img/planometodologico/time-de-ux-ui.jpg)

#### Rituais

**Versões:** Versões planejadas:
 - **V0** Versão inicial de planejamento
 - **V1** Prototipagem
 - **V2** Versão beta do app
 - **V3** Versão de lançamento

**Trabalho diário**

|Horário|Segunda-feira|Terça-feira|Quarta-feira|Quinta-feira|Sexta-feira|Sábado|Domingo|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|8|1🔴|1🔴|1🔴|1🔴|1🔴|1🔴|1🔴|
|10|1🔴|1🔴|1🔴|1🔴|1🔴|6🟡|6🟡|
|12|1🔴|1🔴|1🔴|1🔴|1🔴|6🟡|6🟡|
|14|1🔴|1🔴|1🔴|1🔴|1🔴|6🟡|6🟡|
|16|1🔴|1🔴|1🔴|1🔴|1🔴|1🔴|1🔴|
|18|4🟠|4🟠|4🟠|4🟠|4🟠|1🔴|1🔴|
|20|9🟢|3🟠|3🟠|3🟠|3🟠|1🔴|1🔴|
|22|9🟢|3🟠|3🟠|3🟠|3🟠|1🔴|1🔴|

**Reuniões de validação**

Sim, o horário da segunda feira no período da noite é o ideal para tais reuniões, podendo ser semanais ou a cada 15 dias, sendo que usaremos cerca de 30 minutos para tais validações

**Correções?**

Durante todo o processo estaremos realizando procedimentos de melhorias e correções principalmente durante as reuniões de segunda feira.

#### Técnicas de codificação

 - **Programação em pares (XP):**

 Técnica em que dois desenvolvedores trabalham juntos no mesmo código. Um escreve o código enquanto o outro revisa em tempo real, trocando papéis frequentemente. Esta prática melhora a qualidade do código e reduz a incidência de bugs.

 - **Code Review:**

 Revisões de código periódicas feitas por outros membros da equipe para garantir que o código esteja seguindo as melhores práticas, padrões de codificação e esteja livre de defeitos. 

 - **Integração Contínua (Continuous Integration - CI):**

 A prática de integrar regularmente o código ao repositório principal, seguido pela execução de testes automatizados. Isso ajuda a identificar problemas de integração rapidamente e mantém o software sempre em um estado pronto para ser entregue. 

 - **Refatoração:**
 
 Processo contínuo de melhorar a estrutura interna do código sem alterar seu comportamento externo. Isso garante que o código permaneça limpo e fácil de manter ao longo do tempo. 

 - **Uso de Linters e Ferramentas de Análise Estática:**

 Ferramentas como ESLint ou SonarQube são utilizadas para analisar o código automaticamente em busca de problemas de estilo, complexidade e possíveis bugs antes de sua execução. 

#### Comunicação

 - **Reuniões Presenciais ou Virtuais:**

 Utilização de plataformas como Microsoft Teams, Google Meet e Discord para reuniões, revisões de sprint e alinhamento entre as partes interessadas. 

 - **Email:**

 Canal formal de comunicação para troca de informações importantes, decisões e atualizações de status do projeto entre clientes, equipe de desenvolvimento e stakeholders. 

 - **Mensagens Instantâneas:**

 Uso de ferramentas como Whatsapp e Discord para comunicação rápida entre os membros da equipe, facilitando a resolução de dúvidas e a coordenação diária. 

 - **Documentação Compartilhada:**

 Utilização de plataformas como Google Drive, Confluence ou SharePoint para armazenar e compartilhar documentos, especificações, relatórios e atas de reunião. 

 - **Ferramentas de Gestão de projetos:**

 Uso de ferramentas como Jira, Trello ou Asana para acompanhar o progresso das tarefas, gerenciamento de backlog, e comunicação relacionada ao desenvolvimento de funcionalidades específicas. 

 - **Repositório de Código (GitHub):**

 O GitHub será utilizado como a principal plataforma de controle de versão, onde o código-fonte será armazenado e gerenciado. 

#### Ferramentas de Planejamento

 - **Trello**
 Trello será utilizado como a principal ferramenta de planejamento e monitoramento do trabalho no projeto. Ele oferece uma interface visual e intuitiva para o gerenciamento de tarefas, onde as atividades são organizadas em quadros (boards) compostos por listas e cartões (cards). Cada cartão representa uma tarefa ou atividade, que pode ser movida entre listas conforme o progresso, como "A Fazer", "Em Andamento" e "Concluído". 

 Os cartões podem ser atribuídos a membros específicos da equipe, facilitando a definição de papéis e responsabilidades no projeto. 

 Cada cartão pode ter datas de vencimento para garantir que as tarefas sejam concluídas dentro do prazo, além de checklists internos para detalhar subtarefas ou etapas dentro de uma atividade. 

 Essa abordagem garante que o planejamento e a execução das tarefas sejam claros para todos os membros da equipe, facilitando a colaboração e o acompanhamento do progresso ao longo do projeto.

#### Métricas de gerenciamento

 - **Quadro de Conhecimento:**

 O Quadro de Conhecimento, ou Mapa de Calor (Heatmap), mede a distribuição do conhecimento técnico e de domínio entre os membros da equipe. Ele identifica as áreas em que o conhecimento está concentrado ou disperso, ajudando a garantir que o conhecimento crítico do projeto não esteja limitado a poucos indivíduos. Essa métrica é útil para balancear as competências da equipe e planejar treinamentos ou rotações de funções quando necessário. 

 - **Gráfico de Burndown:**

 O gráfico de burndown é utilizado para monitorar o progresso do trabalho restante em relação ao tempo disponível. Ele exibe a quantidade de trabalho que falta para ser concluído no sprint ou no projeto em geral, ajudando a equipe a visualizar se está no caminho certo para cumprir os prazos. 

 - **Velocidade:**

 A velocidade mede a quantidade de trabalho concluído durante uma iteração ou sprint. A equipe define a velocidade com base no número de pontos de história (story points) ou tarefas concluídas ao final de cada sprint. Isso ajuda a prever a capacidade de entrega da equipe em sprints futuros.