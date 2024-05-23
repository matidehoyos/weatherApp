const server = require("./server.js");
const router = require("./src/routes/index.js")
const port = process.env.PORT || 3001; 


server.use(router)

server.listen(port, () => {
  console.log(`Server on port ${port}` );
})
server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});