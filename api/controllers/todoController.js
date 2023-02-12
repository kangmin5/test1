const Todo = require("../models/TodoModel");

const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({}).sort({ title: "asc" }).orFail();
    res.status(200).json(todos);
  } catch (err) {
    next(err);
  }
};

const createTodo = async (req, res, next) => {
    try{
        const todo = new Todo();
        const {title,completed}= req.body
        todo.title = title;
        todo.completed = completed; 
        if(!todo.title){
            return res.status(400).json({
                message: "Title is required"
            })
        }
        await todo.save();

    } catch (err) {
        next(err);
    }

}


module.exports = { getTodos ,createTodo};
