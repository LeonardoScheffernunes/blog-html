import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  function addTask(event) {
    event.preventDefault()

    const text = inputValue.trim()

    if (!text) {
      return
    }

    const newTask = {
      id: Date.now(),
      text,
    }

    setTasks((currentTasks) => [...currentTasks, newTask])
    setInputValue('')
  }

  function removeTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  }

  return (
    <main className="todo-app">
      <header className="hero">
        <p className="eyebrow">Atividade 8</p>
        <h1>To-Do List de Estudos</h1>
        <p className="subtitle">
          Adicione tarefas, organize seus estudos e remova itens com um clique.
        </p>
      </header>

      <section className="todo-card" aria-labelledby="lista-titulo">
        <h2 id="lista-titulo">Minha lista</h2>

        <form className="input-row" onSubmit={addTask}>
          <label className="sr-only" htmlFor="taskInput">
            Digite uma tarefa
          </label>
          <input
            id="taskInput"
            type="text"
            placeholder="Ex.: revisar JavaScript"
            autoComplete="off"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>

        <p className="hint">Use o botão Remover para retirar uma tarefa da lista.</p>

        <ul className="task-list" aria-live="polite">
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button type="button" onClick={() => removeTask(task.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
