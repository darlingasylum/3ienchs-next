# 3ienchs

3ienchs is a project website for the 3ienchs microbrewery, located near Paris.

## Getting started

1. Clone the repo

```
git clone https://github.com/ElisaHery/3ienchs-next.git
```

2. Install database.sql file in you database management system (phpMyAdmin for instance)

3. Create a `config.js` file in `helpers` folder, with your connexion datas:

```
cd app/helpers
touch config.js
```

Put your connexion datas in config file :

```
'use strict';
module.exports = {
  secret: 'Passphrase for encryption',
  database_host: 'localhost',
  database_user: '****',
  database_password: '****',
  database_name: '3ienchs-next'
};

```

(a `socketPath` key could be necessary on macOS)

4. Install node modules in root folder and client folder :

```
cd ../..
npm install
cd client
npm install
```

5. Run the app (from root folder)

```
cd ..
npm run dev
```

Welcome in the doghouse :metal: :beers:

## What's inside ?

A quick look at the top-level files and directories you'll see in this project.

1.  **`/app`**: Back-end part : this directory contains all of the routes/apis and sql requests
2.  **`/client`**: Front-end part: this directory contains the next.js project
3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
4.  **`README.md`**: A text file containing useful reference information about your project.
5.  **`database.sql`**: A sql file you can import in your db management system to provide our app a database
6.  **`README.md`**: A text file containing useful reference information about your project.
7.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**
8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
9.  **`server.js`**: A file in which we create the server of the app

## Built With

- [Next.js](https://nextjs.org/)
- [React.JS](https://reactjs.org/ReactJS)
- [NodeJS](https://nodejs.org/en/NodeJS)
- [mySQL](https://www.mysql.com/fr/MySQL)

## Author

**Elisa Hery** - _Initial work_ - ([GitHub](https://github.com/ElisaHery) - [LinkedIn](https://www.linkedin.com/in/elisa-hery-425a58108/))
