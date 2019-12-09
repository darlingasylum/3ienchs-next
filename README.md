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
'use strict';
module.exports = {
  secret: 'Passphrase for encryption',
  database_host: 'localhost',
  database_user: '****',
  database_password: '****',
  database_name: '3ienchs-next'
};

```

(a socketPath key could be necessary on macOS)

4. Install node modules in root folder and client folder :

```
npm install
```

5. Run the app (from root folder)

```
npm run dev
```

Welcome in the doghouse :metal: :beers:

## Built With

- [React.JS](https://reactjs.org/ReactJS)
- [NodeJS](https://nodejs.org/en/NodeJS)
- [mySQL](https://www.mysql.com/fr/MySQL)

## Author

**Elisa Hery** - _Initial work_ - ([GitHub](https://github.com/ElisaHery) - [LinkedIn](https://www.linkedin.com/in/elisa-hery-425a58108/))
