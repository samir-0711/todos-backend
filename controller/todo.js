import Todo from '../model/todo.js';

export const add = async(req, res) => {
    try {
        const { title, body, userID } = req.body;

        if(!title || !userID) {
            return res.status(405).json({message: "Parameter Missing!"});
        }

        const todo = await Todo.create({
            title,
            body,
            userID
        });

        return res.status(200).json({message: "Todo Added", data: todo});
    } catch(error) {
        return res.status(404).json({message: error.message});
    }
}

export const get = async(req, res) => {
    try {
        const { userID } = req.params;

        if(!userID) {
            return res.status(405).json({message: "Parameter Missing!"});
        }

        const todos = await Todo.find({ userID });

        return res.status(200).json({message: `${todos.length} Todo(s) Delivered`, data: todos});
    } catch(error) {
        return res.status(404).json({message: error.message});
    }
}

export const update = async(req, res) => {
    try {
        const { todoID, newTodo } = req.body;

        if( !todoID || !newTodo) {
            return res.status(405).json({message: "Parameter Missing!"});
        }

        const todo = await Todo.findByIdAndUpdate(todoID, newTodo, {new: true});

        return res.status(200).json({message: 'Todo Updated', data: todo});
    } catch(error) {
        return res.status(404).json({message: error.message});
    }
}