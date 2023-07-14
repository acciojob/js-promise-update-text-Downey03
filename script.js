//your JS code here. If required.
funtion change(){
	return new Promise.resolve("Hello, World!")
}
setTimeout(()=>{
	let x = change();
	x= "hel"
	document.getElementById("output").textContent = await x.json()
},1000)