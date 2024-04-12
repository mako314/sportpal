// https://expressjs.com/en/starter/basic-routing.html
// https://blog.logrocket.com/build-server-rendered-react-app-next-express/

// node server/ssr-server.js
// nvm use 18.17.0 

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const express = require('express')
const next = require('next')
const { Pool } = require('pg');


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

console.log(process.env.NODE_ENV)
console.log(process.env.DB_PASSWORD)

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432, // Default port for PostgreSQL
  ssl: {
    rejectUnauthorized: false // For production, set this to true and provide the necessary CA certificates
  }
});

// " When you're running a Next.js application with a custom server like Express, you're effectively replacing the default Next.js server. This means you don't need to worry about the default Next.js development server that runs on localhost:3000. Instead, you'll be using the Express server, which you can configure to run on any port you choose, like localhost:5000 in your case. "

app.prepare()
.then(() => {
  const server = express()

    // So just realize, anything in a route will be fetched with API, otherwise if we do this /homepage stuff abnd it'd have this message appear, or any other content.

    // // Custom route for the homepage
    // server.get('/homepage', (req, res) => {
    // res.send('Hello World!');
    // });

  // API route for data handling
  server.get('/api/data', (req, res) => {
  // Handle the data (fetch, post, etc.)
    res.json({ message: 'This is the data response' });
  });

  // API route to list all tables in the 'public' schema
  server.get('/api/tables', async (req, res) => {
  try {
    const queryText = `
      SELECT table_schema, table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `;
    const { rows } = await pool.query(queryText);
    console.log(rows)
    res.json({ success: true, tables: rows });
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: err });
  }
  });


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(5000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:5000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})