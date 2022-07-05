import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store"

import "./App.css"
import Main from "./components/Main"

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Main />
				</div>
			</BrowserRouter>
		</Provider>
	)
}

export default App
