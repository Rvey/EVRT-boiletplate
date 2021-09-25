import React from 'react';
import Home from './components/Pages/Home/home';
import Nav from './components/Navigation/nav';
function App() {
	console.log(window.ipcRenderer);
	

	return (
<div className="text-center text-red-400 ">
	haha
	<Nav />
	<Home />
</div>)
}

export default App;
