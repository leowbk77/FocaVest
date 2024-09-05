# FocaVest

[↩ FocaVest](https://leowbk77.github.io/FocaVest/)

## 🛠🛠🛠 _Este documento ainda está em produção_ 🛠🛠🛠

## _Documento de Requisitos_
### Sumário
1. [Introdução](#introdução)
2. [Descrição Geral do Sistema](#descrição-geral-do-sistema)
3. [Requisitos Funcionais](#requisitos-funcionais)
4. [Requisitos Não-Funcionais](#requisitos-não-funcionais)
5. [Requisitos de Interface](#requisitos-de-interface)
6. [Glossário](#glossário)

### Informações do Documento de Requisitos

|Título do documento|Documento de Requisitos do FocaVest|
|Autores|Leonardo Marques Ferreira (lmf), Rafael Alves Cardoso (rac), Lucas de Oliveira Ketelhut (lok), João Victor B.C. Teixeira (jvt)|
|Comentários||
|Nome do arquivo|TemplateRequisitos.doc|
|HISTÓRICO DE REVISÕES|
|Revisões|Data|Descrição|Autor|
|01|02/09/24|Elaboração da primeira versão do documento|lmf, rac, lok, jvt|
|02|05/09/24|Documento na web|lmf|

### Introdução

Este documento tem como objetivo apresentar uma descrição dos requisitos do FocaVest. Por meio deste, o cliente tomará conhecimento das funcionalidades do projeto e os desenvolvedores terão uma noção de como implementar suas funcionalidades.

#### Objetivos

O objetivo é apresentar de forma clara e coesa os requisitos funcionais e os não funcionais do FocaVest. O que permitirá que os desenvolvedores compreendam o que é a plataforma e como ela deve ser implementada, além de servir aos clientes como uma fonte de informação 

#### Escopo

O documento descreve de forma abrangente os requisitos funcionais e não funcionais do FocaVest, facilitando a compreensão por parte da equipe de projeto e clientes envolvidos.

#### Visão Geral do Documento

A seguir são apresentadas as divisões deste documento e uma rápida descrição de cada seção:
 - Seção 2 – Descrição Geral do Sistema: descreve o escopo do sistema e seus usuários de maneira geral. 
 - Seção 3 – Requisitos Funcionais: especifica todos os requisitos funcionais planejados para o sistema.
 - Seção 4 – Requisitos Não-Funcionais: especifica todos os requisitos não-funcionais da primeira iteração do sistema
 - Seção 5 – Requisitos de Interface. 

#### Padrões e Convenções
##### Identificação dos Requisitos

Para a especificação dos requisitos utilizaremos a seguinte representação: 

[TIPODOREQUISITONúmero] Nome 

O campo TIPODOREQUISITO poderá ser especificado pelos códigos RF (Requisitos Funcionais) ou RNF (Requisitos Não-Funcionais). Já o campo Número será preenchido com um número correspondente à ordem em que os requisitos aparecem no documento. 

##### Prioridade dos Requisitos

A cada requisito será atribuída uma prioridade. A descrição de cada uma segue abaixo:
 - Essencial é um requisito imprescindível. Sem ele, o sistema não funcionará. 
 - Importante é um requisito que deve ser implementado, mas, se não for, o sistema funcionará do mesmo jeito, mas de maneira insatisfatória. 
 - Desejável é um requisito que trará um diferencial adicional ao sistema. Por isso, pode ser deixado para ser implementado por último ou em próximas iterações. 

### Descrição Geral do Sistema

Para os pré-vestibulandos que enfrentam dificuldades em acessar informações centralizadas e confiáveis sobre vestibulares e cursos, a **FocaVest** é uma plataforma digital que centraliza dados essenciais, fornece ferramentas de gestão de estudos e oferece suporte personalizado através de uma comunidade de estudantes e ex-alunos. De outro modo, as opções atuais de informações fragmentadas e a falta de suporte comunitário, a FocaVest integra tudo em um único lugar, facilitando a organização e a preparação eficaz dos usuários. 

#### Escopo Negativo

Devido à amplitude do projeto FocaVest, é necessário delimitar claramente quais funcionalidades não serão abordadas nas versões iniciais do projeto. Algumas funcionalidades fundamentais demandarão maior atenção e refinamento para a entrega de uma melhor experiencia de uso da plataforma, por isso algumas funcionalidades citadas em documentos anteriores não terão comprometimento de implementação nas primeiras versões da plataforma, como funcionalidades de Inteligência artificial e suporte multilíngue. 

O projeto se compromete a desenvolver as funcionalidades citadas neste documento, pois são vistas pela equipe de desenvolvimento como prioridade para o funcionamento base da plataforma e permitirão que o valor principal do FocaVest seja entregue aos seus usuários e serão base para a expansão futura da plataforma.

### Requisitos Funcionais

Esta seção apresenta em detalhes os requisitos funcionais do sistema.

#### Cadastro e Autenticação

**[RF001] Cadastro de alunos, professores e administradores** 
Requisito básico para permitir que os usuários entrem no sistema. 
Prioridade: **Essencial**

**[RF002] Sistema de login e autenticação seguros**
Vários usuários poderão se cadastrar. 
Prioridade: **Essencial**

**[RF003] Recuperação de senha e gestão de perfil**
Recuperação de senha e gestão de perfil. 
Prioridade: **Essencial**

#### Agenda e Organização de Estudos

**[RF004] Criação e gerenciamento de agendas de estudo**
Uma das principais funções do sistema. Permite que o usuário crie e gerencie o processo de preparação pré-vestibular 
Prioridade: **Essencial**

**[RF005] Adicionar, editar e remover tarefas e eventos**
Permite que o usuário tenha controle personalizado sobre a funcionalidade de agenda 
Prioridade: **Essencial**

**[RF006] Notificações e lembretes para prazos e eventos importantes**
Funcionalidade que mantém o usuário por dentro dos prazos e eventos definidos nos planos de estudo. 
Prioridade: **Essencial**

#### Conteúdos e Materiais de Estudo
 

**[RF007] Biblioteca de materiais de estudo** 
Funcionalidade que permite que os usuários tenham acesso facilitado a materiais relevantes para o processo de preparação.  
Prioridade: **Essencial**

**[RF008] Categorias e tags para busca e organização dos conteúdos** 
Funcionalidades que facilitam a busca por materiais relevantes.  
Prioridade: **Essencial**
 
**[RF009] Possibilidade de upload e compartilhamento de materiais e agendas** 
Funcionalidades de compartilhamento de conteúdo entre diferentes usuários.  
Prioridade: **Essencial**

#### Funcionalidades sobre Vestibulares

**[RF010] Calendário com datas de vestibulares** 
Funcionalidade básica que permitirá o acesso de informações sobre os diferentes vestibulares. 
Prioridade: **Essencial**

**[RF011] Informações detalhadas sobre cada vestibular** 
Funcionalidade que permitirá o acesso de informações detalhadas sobre os diferentes vestibulares. 
Prioridade: **Essencial**

**[RF012] Alertas e atualizações sobre mudanças nos vestibulares** 
Funcionalidade básica permitirá que os usuários fiquem por dentro de atualizações sobre os diferentes vestibulares.
Prioridade: **Essencial**

#### Avaliações e Exercícios
**[RF013] Banco de questões e simulados de provas anteriores** 
Funcionalidade que permitirá ao usuário ter acesso a conteúdos de  vestibulares anteriores. 
Prioridade: **Essencial**

**[RF014] Criação e gerenciamento de exercícios personalizados** 
Funcionalidade que permitirá o acesso e gerenciamento personalizado de exercícios. 
Prioridade: **Essencial**

**[RF015] Feedback e análise de exercícios** 
Funcionalidade que permite ao usuário rastrear seu desempenho no período de preparação. 
Prioridade: **Essencial**

#### Interação e Suporte
**[RF016] Fórum/Espaço de discussão entre alunos e professores** 
Funcionalidade que permite a conexão entre diferentes usuários. 
Prioridade: **Essencial**

**[RF017] Sistema de mensagens para comunicação direta** 
Funcionalidade que permite a conexão entre diferentes usuários e/ou suporte da plataforma de forma mais privada. 
Prioridade: **Essencial**

**[RF018] Suporte e FAQ** 
Ferramentas de suporte ao usuário com algum tipo de problema na plataforma. 
Prioridade: **Essencial**

### Requisitos Não-Funcionais
#### Segurança
#### Usabilidade
#### Confiabilidade
#### Desempenho
#### Manutenção e Atualiazação
#### Escalabilidade

### Requisitos de Interface

Esta seção apresenta em detalhes os requisitos de interface do sistema.  Especificam como um sistema de software interage com outros sistemas, usuários e hardware. Esses requisitos são fundamentais para garantir que o software possa se comunicar de maneira eficaz e eficiente com outras partes do ambiente de tecnologia ou com os usuários finais.

**Interface Responsiva** 

O sistema deve ser acessível em dispositivos móveis, tablets e desktops, ajustando automaticamente a interface para cada tipo de tela. 

**Dashboard** 

O usuário deve visualizar um painel inicial com o resumo de suas metas diárias, progresso dos estudos e notificações importantes. 

**Navegação Intuitiva** 

A navegação deve ser simples e intuitiva, com menus e botões claramente identificados para facilitar o acesso às funcionalidades principais. 

**Sistema de notificação** 

A interface deve exibir notificações sobre prazos de metas, novas tarefas ou conteúdos a serem revisados. 

**Interface de calendário interativo** 

A interface deve ter um calendário interativo, onde o usuário pode organizar seus horários de estudo e registrar suas atividades. 

**Feedback imediato** 

O sistema deve fornecer feedback visual imediato ao usuário ao completar tarefas, como animações ou mensagens de confirmação. 

**Personalização de temas** 

O usuário deve poder personalizar a interface, escolhendo diferentes temas de cores ou layouts de acordo com sua preferência. 

**Acessibilidade** 

O design da interface deve seguir boas práticas de acessibilidade, como contrastes adequados e suporte para navegação por teclado e leitores de tela. 

**Ajuda contextual** 

A interface deve fornecer dicas e orientações contextuais de forma discreta para ajudar o usuário a entender as funcionalidades, sem interromper o fluxo de uso. 

### Glossário

 - **FocaVest**: Plataforma digital para preparação de vestibulares, fornecendo ferramentas de gestão de estudos e suporte comunitário.
 - **Vestibulares**: Exames de admissão para instituições de ensino superior. 
 - **Agenda de Estudos**: Ferramenta dentro da plataforma FocaVest que permite a criação e gestão de planos de estudo personalizados.
 - **Simulados**: Conjuntos de questões de vestibulares anteriores disponíveis na plataforma para prática dos usuários. 
 - **IA (Inteligência Artificial)**: Tecnologia usada para personalizar recomendações e otimizar o planejamento de estudos dentro da plataforma. 
 - **CRM (Customer Relationship Management)**: Sistema para gerenciar interações com os usuários e fornecer suporte dentro da plataforma.
 - **Backup**: Processo de cópia de segurança dos dados armazenados na plataforma.
 - **Escalonamento**: Capacidade da plataforma de aumentar sua infraestrutura para suportar um número maior de usuários.
 - **API (Application Programming Interface)**: Interface para integração entre diferentes sistemas, como universidades e plataformas educacionais.
