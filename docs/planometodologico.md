# FocaVest

# _Este documento ainda está sendo produzido!_

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

Todos os artefatos do projeto serão documentados e disponibilizados no https://leowbk77.github.io/FocaVest/. O cronograma prevê entregas intermediárias nos seguintes períodos:

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

<pre class="mermaid">
flowchart LR;
    subgraph "**Gerente de Projeto**"
        direction TD
        a(Elaborar o plano de projeto)
        b(Gerenciar o escopo)
        c(Gerenciar riscos)
        d(Gerenciamento de equipe)
        e(Monitoramento do progresso)
        f(Gerenciamento de qualidade)
        g(Garantir a integração entre as diferentes equipes)
        h(Monitorar o progresso das entregas parciais)
        i(Gerenciar as expectativas dos estudantes)
        j(Adaptar o projeto às necessidades dos estudantes)
    end
end
</pre>

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
#### Comunicação
#### Ferramentas de Planejamento
#### Métricas de gerenciamento

<script type="module">
	import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
	mermaid.initialize({
		startOnLoad: true
	});
</script>