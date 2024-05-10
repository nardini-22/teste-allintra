# Teste Allintra

[![pt](https://img.shields.io/badge/README-Portuguese-green.svg)](https://github.com/nardini-22/teste-allintra/blob/master/README.pt-br.md)

## ✏️ Introduction

A simple dashboard that connects to the [Binance API](https://binance-docs.github.io/apidocs/spot/en/#change-log) to monitor and display
in real time the latest price and percentage fluctuation of prices of specific cryptocurrencies.

## 📋 Features

A few of the things this project do:

* Uses WebSocket to connect to the API;
* Display cryptocurrencies price in real time;
* Show cryptocurrencies price fluctuations in real time;
* Automatically reconnects if connection is lost or any other error;
* Uses Redux to maintain state in the application;
* Possible to acess the application with desktop or mobile, without losing perfomance or breaking the interface;

## 💻 Built with

* [Next.js](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Redux](https://redux.js.org/)
* [Redux Toolkit](https://redux-toolkit.js.org)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
* [Shadcn/ui](https://ui.shadcn.com/)
* [DotEnv](https://www.npmjs.com/package/dotenv)

## 🚀 Installation

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/nardini-22/teste-allintra.git

# Go into the repository
$ cd teste-allintra

# Install dependencies
$ npm install

# Create .env file and enter API url
$ NEXT_WEBSOCKET_URL:"wss://stream.binance.com:9443/ws"

# Run the app
$ npm run dev
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

