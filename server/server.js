const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
	setTimeout(next, 2000)
})
const port = process.env.PORT || 3001

server.use(middlewares)
server.use(router)
server.listen(port, () => {
	console.log("JSON Server is running")
})
