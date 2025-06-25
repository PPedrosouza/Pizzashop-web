# Painel Web para Gestão de Pedidos

Este projeto é um painel web para gestão de pedidos de pizzarias, desenvolvido em React + TypeScript, utilizando Vite, Tailwind CSS e diversas bibliotecas modernas para uma experiência rica e produtiva.

## Funcionalidades

- Autenticação de parceiros (login/cadastro)
- Dashboard com métricas de vendas e pedidos
- Listagem e gerenciamento de pedidos em tempo real
- Visualização detalhada de cada pedido
- Interface responsiva e tema escuro/claro

## Tecnologias Principais

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/latest)
- [Radix UI](https://www.radix-ui.com/)
- [Sonner](https://sonner.emilkowal.ski/) (notificações)
- [Vitest](https://vitest.dev/) (testes)

## Estrutura do Projeto

```
/
├── public/                # Arquivos estáticos
├── src/
│   ├── api/               # Funções para comunicação com a API
│   ├── components/        # Componentes reutilizáveis de UI
│   ├── lib/               # Utilitários e configurações globais
│   ├── pages/             # Páginas e layouts principais
│   ├── app.tsx            # Componente raiz da aplicação
│   ├── main.tsx           # Ponto de entrada
│   └── global.css         # Estilos globais (Tailwind)
├── .env.local             # Variáveis de ambiente
├── package.json           # Dependências e scripts
├── tailwind.config.js     # Configuração do Tailwind
├── vite.config.ts         # Configuração do Vite
└── tsconfig.json          # Configuração do TypeScript
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) >= 8

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/PPedrosouza/pizzashop-web.git
   cd pizzashop-web
   ```

2. Instale as dependências:
   ```sh
   pnpm install
   ```
   
## Executando em Desenvolvimento

```sh
pnpm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Rodando Testes

```sh
pnpm run test
```

## Licença

Este projeto é open-source e está sob a licença MIT.
