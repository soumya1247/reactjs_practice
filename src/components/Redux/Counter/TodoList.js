// add imports
import { useGetTodosQuery, useAddTodosMutation, useUpdateTodosMutation, useDeleteTodoMutation } from './rtkTodoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    const [updateTodo, setUpdateTodo] = useState('')
    const { 
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery()

    const [addTodo] = useAddTodosMutation()
    const [updateTodos] = useUpdateTodosMutation()
    const [deleteTodo] = useDeleteTodoMutation()

    let postTodo
    const handleSubmit = async (e) => {
        e.preventDefault();
        postTodo = await addTodo({ userId: 1, title: newTodo, body: 'Something' })
        setNewTodo('')
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodos({ id: 1, userId: 1, title: updateTodo, body: 'Something' })
        setUpdateTodo('')
    }

    const newItemSection =
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
                <FontAwesomeIcon icon={faUpload} />
            </button>
        </form>

    const updateItemSection =
        <form onSubmit={handleUpdate}>
            <label htmlFor="new-todo">Update a todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={updateTodo}
                    onChange={(e) => setUpdateTodo(e.target.value)}
                    placeholder="Update a todo"
                />
            </div>
            <button className="submit">
                <FontAwesomeIcon icon={faUpload} />
            </button>
        </form>

    let content;
    // Define conditional content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        content = todos.map((todo) => {
            return (
                <article key = {todo.id}>
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    <div>{todo.body}</div>
                    <button className="trash" onClick={() => deleteTodo({ id: todo.id })}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </article>
            )
        })
    } else if (isError) {
        content = <p>{error}</p>
    }

    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {updateItemSection}
            {content}
        </main>
    )
}
export default TodoList