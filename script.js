//your JS code here. If required.
funtion change(){
	return new Promise.resolve("Hello, World!")
}
document.getElementById("output").textContent = "heo"
setTimeout(()=>{
	let x = change();

	document.getElementById("output").textContent = await x.json()
},1000)