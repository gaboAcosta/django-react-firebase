import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getHeaders, singInWithGoogle } from "./util/firebase";

export interface User {
  id: number
  email: string
}


function App() {
  const [users, setUsers] = React.useState<User[]>([])
  const getUsers = async (): Promise<void> => {
    const headers = await getHeaders()
    const url = `/api/users`
    const res = await fetch(url, {
      method: "GET",
      headers: headers,
      redirect: "follow",
    })
    if (res.status !== 200) {
      console.error(res)
      throw new Error("Error al cargar Proyectos")
    }
    const { results } = await res.json()
    const newUsers: User[]  = results
    setUsers(newUsers)
  }
  const onLoginClick = () => {
    singInWithGoogle()
        .then((result) => {
          console.trace(result)
        })
        .catch((err) => {
          console.error(err)
        })
  }
  return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                Gabo's site!
            </h1>
            <button onClick={() => onLoginClick()}>Click to Login!</button>
            <button onClick={() => getUsers()}>Click to get users!</button>
            <h3>Users:</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.email}>
                        {user.email}
                    </li>
                ))}
            </ul>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
  );
}

export default App;
