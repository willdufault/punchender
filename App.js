import React from "react";
import { layout } from "./layout/Layout.js";
import { Model } from "./model/Model.js";
import { Boundary } from "./boundary/Boundary.js";
import { Controller } from "./controller/Controller.js";

function App()
{
	return (
		<main className="App" style={layout.App}>
			<img src="https://media.tenor.com/pY8hg1BiNMcAAAAC/the-bron-jame-basketball.gif" 
			alt="the bron jame"/>
		</main>
	);
}

export default App;
