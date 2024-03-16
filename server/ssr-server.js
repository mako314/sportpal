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
  server.get('/', (req, res) => {
    res.send('Hello World!');
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})