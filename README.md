# 🚀 Astro, React e LESS

Este é um projeto de landing page desenvolvido utilizando Astro, React e LESS, aplicando as melhores práticas de desenvolvimento moderno. O objetivo é criar uma página eficiente, modular e fácil de manter.

## 🖌️ Design no Figma

O design desta landing page foi planejado e prototipado utilizando o [**Figma**](https://www.figma.com/design/jRQgPJeUwiumGfbrbvZ3iY/LandingPageArsh-(Community)?node-id=106-49&t=spP08zAWRfAGC9ZZ-0)

## 💡 O que é o Astro?
Astro é um framework moderno focado em gerar sites rápidos e eficientes. Seu grande diferencial é a renderização **"zero JavaScript por padrão"**, entregando apenas HTML puro para páginas estáticas, o que garante performance superior.

#### Diferenciais:
- **Zero JavaScript** por padrão: Gera HTML puro e carrega JavaScript apenas quando necessário.
- **Compatível com múltiplos frameworks:** Use React, Vue, Svelte, e outros no mesmo projeto.
- **Islands Architecture:** Componentes dinâmicos são carregados sob demanda, otimizando o desempenho.
- **Builds rápidos:** Ideal para sites estáticos otimizados para SEO, como blogs e landing pages.

#### Comparação com outros frameworks:
- **Astro vs. Next.js:** Foco em páginas estáticas rápidas, enquanto Next.js se destaca em aplicações dinâmicas.
- **Astro vs. Gatsby:** Astro é mais leve, eliminando JavaScript desnecessário.
- **Astro vs. Nuxt:** Ideal para sites multipáginas, enquanto Nuxt é mais voltado para SPAs.

## 🎨 O que é LESS?
LESS (Leaner Style Sheets) é uma extensão dinâmica do CSS que adiciona recursos poderosos como variáveis, aninhamento, funções e mixins. Isso torna o CSS mais eficiente, modular e fácil de manter, especialmente em projetos grandes.

#### Principais benefícios do LESS:
- Variáveis: Armazene valores (como cores, fontes e espaçamentos) em variáveis reutilizáveis.
- Aninhamento: Escreva CSS de forma hierárquica, refletindo a estrutura do HTML.
- Mixins: Reutilize conjuntos de propriedades CSS em várias partes do projeto.
- Funções: Use funções matemáticas e de manipulação de cores diretamente no CSS.
Ao usar LESS, é possível organizar melhor os estilos e aplicar mudanças de forma rápida e eficiente.

## 📁 Estrutura do Projeto

Abaixo está a estrutura básica do projeto para garantir que ele siga boas práticas de organização:

```sh
       src/
    ├── assets/                     # Arquivos estáticos (imagens, fontes, etc.)
    ├── components/
    │   ├── Component/              # Nome do componente a ser criado
    │   │   ├── component.jsx       # Component em JSX
    │   │   ├── component.astro     # Componente em Astro
    │   │   └── index.less          # Estilização do componente
    │   ├── App.astro               # Componente principal
    ├── layouts/
    │   └── MainLayout.astro        # Layout principal do projeto
    ├── pages/                      # Diretório das paginas do projeto
    │   └── index.astro             # Página principal
    ├── style/
    │   ├── global.css              # Arquivo CSS gerado após a compilação do LESS
    │   ├── global.less             # Estilos globais da aplicação
    │   ├── reset.less              # Reset de estilos para consistência entre navegadores (não precisa ser compilado)
    │   └── variables.less          # Variáveis de estilo (não precisa ser compilado)
```

## 🛠️ Ferramentas Utilizadas

- **Astro:** Framework de construção de websites moderno, que permite o uso de diferentes frameworks como React, Svelte, Vue, entre outros.
- **React:** Biblioteca JavaScript para criar interfaces de usuário.
- **LESS:** Pre-processador CSS que facilita a escrita de estilos com variáveis, aninhamentos e mixins.

## 🏗️ Instalação

1. Clone o repositório:
   ```bash
    git clone https://github.com/LyanBrito/study-astro.react.git
   ```
2. Instale as dependências: Navegue até o diretório do projeto e instale as dependências com seu gerenciador de pacotes preferido:
   ```bash
    cd nome-do-repositorio
    npm install
    # ou
    yarn install
    # ou
    pnpm install
   ```
3. Rodando o projeto: Para iniciar o servidor de desenvolvimento:
   ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
   ```

## ⚙️ Lista de Comandos

| Comando                   | Ação                                               |
| :------------------------ | :------------------------------------------------- |
| `npm install`             | Instala as dependências                            |
| `npm run dev`             | Roda o projeto localmente em: `localhost:4321`     |
| `npm run build`           | Constrói a versão de produção do projeto `./dist/` |
| `npm run preview`         | Preview your build locally, before deploying       |
| `npm run astro ...`       | Roda comandos CLI como: `astro add`, `astro check` |
| `npm run astro -- --help` | Lista de ajuda com comandos CLI                    |

Para evitar o uso do comando `lessc .\global.less .\global.css` para criar o arquivo `.css`, utilizo a extensão [Easy Less](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less)no VSCode, que cria automaticamente um arquivo .css cada vez que atualiza o arquivo.

## 🌱 Contribuições

Sinta-se à vontade para abrir uma issue ou fazer um fork e enviar pull requests para melhorias ou correções. Todas as contribuições são bem-vindas!

### 🔗 Links

<div>
  <a href=""><img src="https://img.shields.io/badge/Astro-BC52EE.svg?style=for-the-badge&logo=Astro&logoColor=white" alt="astro-link"></a>
  <a href=""><img src="https://img.shields.io/badge/Less-1D365D.svg?style=for-the-badge&logo=Less&logoColor=white" alt="lessjs-link"></a>
  <a href=""><img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="react-link"></a>
  <a href=""><img src="https://img.shields.io/badge/Biome-60A5FA.svg?style=for-the-badge&logo=Biome&logoColor=white" alt="biome-link"></a>
</div>
