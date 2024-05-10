# Teste Allintra

[![en](https://img.shields.io/badge/Language-English-red.svg)](https://github.com/nardini-22/teste-allintra/blob/master/README.md)

## ✏️ Introdução

Uma dashboard simples que se conecta com a [API da Binance](https://binance-docs.github.io/apidocs/spot/en/#change-log) para monitorar e mostrar, em tempo real, o último preço e a flutuação de porcentagem de preço de criptomoedas específicas.

## 📋 Features

Algumas coisas que esse projeto faz:

* Utiliza WebSocket para se conectar com a API;
* Mostra o preço de criptomoedas em tempo real;
* Exibe a flutuação de porcentagem de preço em tempo real;
* Reconecta automaticamente se a conexão for perdida, ou acontecer qualquer outro erro;
* Usa Redux para manutenção do estado da aplicação;
* É possível acessar a aplicação com desktop ou mobile, sem perda de perfomance ou quebra na interface;

## 💻 Criado com

* [Next.js](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Redux](https://redux.js.org/)
* [Redux Toolkit](https://redux-toolkit.js.org)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
* [Shadcn/ui](https://ui.shadcn.com/)
* [DotEnv](https://www.npmjs.com/package/dotenv)

## 🚀 Instalação

Para clonar e rodar essa aplicação, é necessário [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com o [npm](http://npmjs.com)) instalado no seu computador. Na linha de comando:

```bash
# Clone esse repositório
$ git clone https://github.com/nardini-22/teste-allintra.git

# Entre na pasta do repositório
$ cd teste-allintra

# Instale as dependências
$ npm install

# Crie um arquivo .env e adicione a url da API
$ NEXT_WEBSOCKET_URL:"wss://stream.binance.com:9443/ws"

# Rode a aplicação
$ npm run dev
```

> **Observação**
> Se você está utilizando Linux Bash for Windows, [siga esse guia](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) ou use `node` no prompt de comando. 
