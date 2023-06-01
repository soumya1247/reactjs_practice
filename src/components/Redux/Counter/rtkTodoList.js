import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const TodoListApi = createApi({
    reducerPath: 'todoList',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts' }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/',
            transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Todos']
        }),
        addTodos: builder.mutation({
            query: (todo) => ({
                url: '/',
                method: 'POST',
                body: todo,
            }),
            invalidatesTags: ['Todos'],
        }),
        updateTodos: builder.mutation({
            query: (todo) => ({
                url: `/:${todo.id}`,
                method: 'PATCH',
                body: todo,
            }),
            invalidatesTags: ['Todos'],
        }),
        deleteTodo: builder.mutation({
            query: ({ id }) => ({
                url: `/:${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['Todos'],
        })
    })
})

export const { useGetTodosQuery, useAddTodosMutation, useUpdateTodosMutation, useDeleteTodoMutation } = TodoListApi