"use client"

import React, { useEffect, useState } from 'react'
import { getPostById, uploadPost, getPost } from '../axios'
import { usePersonStore } from '../store'
import { Container } from '@mui/material'

interface IPosts {
    userId: string
    id: number
    title: string
    body: string
    completed: boolean
}

interface IUpload {
    title: string
    body: string
}

const sumArray = (arr: number[]) => {
    //return arr.reduce((sum, current) => sum + current, 0)
    return Math.max(...arr)
}

const AddNumberUI = () => {
    const [num1, setNum1] = useState<number>(0)
    const [num2, setNum2] = useState<number>(0)

    return (
        <div>
            <input
                type="text"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value) || 0)}
            />
            <input
                type="text"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value) || 0)}
            />
            <h1>Result : {num1 + num2}</h1>
        </div>
    );
}

const PracticePage = () => {
    const [todo, setTodo] = useState<IPosts>()
    const [post, setPost] = useState<IUpload>({ title: '', body: '' })

    /* useEffect(() => {
        const fetchDitto = async () => {
            const data = await getTodoById(2)
            setTodo(data)
        }

        fetchDitto()
    }, []) */

    const firstName = usePersonStore((state) => state.firstName)
    const updateFirstName = usePersonStore((state) => state.updateFirstName)

    const handleInputChange = async (id: number) => {
        const post = await getPostById(id)
        setTodo(post)
        console.log(todo)
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value
        setPost(prevPost => ({
            ...prevPost,
            title: title
        }))
    }

    const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const body = e.target.value
        setPost(prevPost => ({
            ...prevPost,
            body: body
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(post)
        uploadPost(post)
    }

    const result = sumArray([5, 6, 7, 8])

    return (
        <Container>
            <div>
                <h1>{todo?.body}</h1>
                <h1>{todo?.id}</h1>
                <h1>{todo?.completed}</h1>
                <h1>{todo?.title}</h1>

                <input type='text' onChange={(e) => handleInputChange(Number(e.target.value))} />
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={post.title}
                        onChange={handleTitleChange}
                    />
                    <input
                        type='text'
                        value={post.body}
                        onChange={handleBodyChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>

            <div>
                <button onClick={getPost}>Log</button>
            </div>

            <div>
                <input
                    type='text'
                    value={firstName}
                    onChange={(e) => updateFirstName(e.currentTarget.value)}
                />

                <h1>{firstName}</h1>
            </div>

            <AddNumberUI />

            <div>
                {sumArray([5, 6, 7, 8])}
            </div>
        </Container>
    )
}

export default PracticePage