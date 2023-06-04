# Food-delivery-back

This repository contains the back-end for Food Delivery website. It provides APIs to manage shops and orders.

## Features

- Fetch all shops
- Fetch all orders by phone and email
- Add a new order

## Installation

Before running the app, you'll need to have Node.js installed. You can download Node.js [here](https://nodejs.org/).

After Node.js is installed, clone this repository to your local machine:

```bash
git clone https://github.com/JustIrish/Food-delivery-back.git
```

Navigate to the project directory:

```bash
cd Food-delivery-back
```

Install project dependencies:

```bash
npm install
```

## Configuration

The app uses two environment variables: `DB_HOST` and `PORT`. These can be set in a `.env` file in the `config` directory.

Here is an example `.env` file:

```plaintext
DB_HOST=mongodb://localhost:27017/mydatabase
PORT=3000
```

Please replace the values above with your own MongoDB URL and the port number you want the server to listen on.

## Usage

You can start the server using the following command:

```bash
npm start
```

The server will start in production mode.

For development mode, use:

```bash
npm run start:dev
```

## Endpoints

Here is a list of available endpoints:

- `GET /api/shops`: Fetch all shops
- `POST /api/orders`: Add a new order
- `POST /api/orders/history`: Fetch all orders by phone and email
