// https://expressjs.com/en/starter/basic-routing.html
// https://blog.logrocket.com/build-server-rendered-react-app-next-express/
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

    // Custom route for the homepage
    server.get('/homepage', (req, res) => {
    res.send('Hello World!');
    });

    // API route for data handling
    server.get('/api/data', (req, res) => {
    // Handle the data (fetch, post, etc.)
    res.json({ message: 'This is the data response' });
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