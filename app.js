const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8888;
const cors =require("cors");
const userService = require("./service/user-service");
const todoService = require("./service/todo-service");
const TODO_STATUS = require("./enums/status-enum").TODO_STATUS;


app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//#region TODO Endpoints
app.post("/createTodo", async (request, response) => {
  const title = request.body.title;
  response.json(await todoService.create(title));
});
app.put("/markTodoCompleted", async (request, response) => {
  const id = request.body.id;
  const status_id = TODO_STATUS.Completed;
  response.json(await todoService.updateStatus(id, status_id));
});
app.put("/markTodoUncompleted", async (request, response) => {
  const id = request.body.id;
  const status_id = TODO_STATUS.UnCompleted;
  response.json(await todoService.updateStatus(id, status_id));
});
app.delete("/deleteTodo", async (request, response) => {
  const id = request.query.id;
  response.json(await todoService.remove(id));
});
app.get("/listTodos", async (request, response) => {
  let stateId = parseInt(request.query.statusId);
  response.json(await todoService.get(stateId));
});
//#endregion

//#region user end points
app.post("/signUp", async (request, response) => {
  const email = request.body.email;
  const name = request.body.name;
  const password = request.body.password;
  response.json(await userService.create(name, email, password));
});
app.post("/login", async (request, response) => {
  const email = request.body.email;
  const password = request.body.password;
  response.json(await userService.get(email, password));
});
//#endregion

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
