const context = require("../data-models/todo-data");
const TODO_STATUS = require("../enums/status-enum").TODO_STATUS;

async function create(title) {
  const todo = await context.ToDoDM.create({
    title: title,
    status_id: TODO_STATUS.UnCompleted,
  });
  return JSON.stringify(todo);
}

async function updateStatus(id, status_id) {
  const todoItem = await context.ToDoDM.findByPk(id);
  todoItem.set({
    status_id: status_id,
  });
  todoItem.save();
}

async function remove(id) {
  const todoItem = await context.ToDoDM.findByPk(id);
  await todoItem.destroy();
}

async function get(stateId) {
  let todoList = [];
  if (stateId || stateId > 0) {
    todoList = await context.ToDoDM.findAll({ where: { status_id: stateId } },{order: ["id"]});
  } else {
    todoList = await context.ToDoDM.findAll({order: ["id"]});
  }
  return JSON.stringify(todoList);
}

module.exports = {
  create,
  updateStatus,
  remove,
  get,
};
