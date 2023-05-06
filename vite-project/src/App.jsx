import { useEffect } from 'react'
import { useReducer, useState } from 'react'
import './App.css'
import Menu from './Menu.jsx'

function App() {
  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  
  const alerta = () => {
    alert('Curioso emkkkkkkkk')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(nome)
    console.log(email)
  }

  const [user, setUser] = useState({})
  const getUser = () => {
    fetch('https://reqres.in/api/users/4')
    .then((resposta) => resposta.json())
    .then((json) => setUser(json.data))
  }

  useEffect(() => {
    getUser()
  },[])

  return (
    <>
      <Menu title="Cadastro"/>
      <p onClick={alerta}>Dados</p>
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <form>
        <input onChange={(e) => {setNome(e.target.value)}}type="text" placeholder='Digite seu nome' />

        <input onChange={(e) => {setEmail(e.target.value)}}type="text" placeholder='Digite seu email' />
        <p></p>
        <button onClick={handleSubmit}>Salvar</button>
      </form>
      <hr />
      <p>Exemplo</p>
      <p>Nome: {user.first_name} {user.last_name}</p>
      <p>Email: {user.email}</p>
    </>
  )
}

export default App
