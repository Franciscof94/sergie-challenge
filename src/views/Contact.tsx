import { useState } from 'react'
import styled from 'styled-components'
import { Button, Button2 } from '../share/Button'
import { Input } from '../share/Input'

const Contact = () => {
    const initialState = {
        name: '',
        email: '',
    }

    const [value, setValue] = useState(initialState)
    const [show, setShow] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValue((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(value)
        setShow(true)
    }

    console.log(show)

    return (
        <Wrapper>
            <div>
                {!show ? <form onSubmit={handleSubmit}>
                    <h1>Contacto</h1>
                    <label htmlFor="name">Nombre</label>
                    <Input type="text" name="name" id="name" onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                    <Input type="email" name="email" id="email" onChange={handleChange} />
                    <Button type="submit">Enviar</Button>
                </form> : <div>
                    <div>Nombre: <span>{value.name}</span></div>
                    <div>Email: <span>{value.email}</span></div>
                    <Button2 onClick={() => setShow(false)}>Regresar al formulario</Button2>
                </div>}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 350px);
    >div {
        max-width: 350px;
        width: 100%;
       > form {
        height: fit-content;
        background-color: var(--blue-color);
        padding: 1.5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        h1 {
            color: white;
            margin: 1rem 0;
        }
        label {
            color: white;
            display: flex;
            align-items: start;
            padding: .5rem;
        }
        button {
            margin-top: 1rem;
        }
       }
       > div:last-child {
        > div {
            font-size: 1.3rem;
            span {
                font-weight: 600;
                
            }
        }

            button {
                color: white;
                margin: 1rem 0;
            }
        
       }
    }
`

export default Contact