import { Header } from "./components/Header/Header"
import { Board } from "./components/Board/Board"

import "./global.css"

import sytles from "./App.module.css"

export function App() {
  return (
    <div>
      <Header />

      <div className={sytles.wrapper}>
        <main>
          <Board />
        </main>
      </div>
    </div>
  )
}
