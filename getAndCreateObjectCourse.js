(function(){
	const collapse = document.querySelectorAll("#accordion .collapse")
	const accordion = document.querySelectorAll("#accordion > div")
	
	collapse.forEach(i=>{
    	i.classList.add("show")
	})
	
	const array1 = Array.from(accordion)	

	const lista = array1.map(i=>{
    	const titulo = i.querySelector("div.cursor-pointer h5 span")
    	const subtitulo = i.querySelectorAll(".collapse .py-2")
    	const aula = i.querySelectorAll(".collapse.show a")
    	return{
        titulo:titulo.innerText,
        subtitulo,
        aula,
    		}
	})
	
	lista.forEach(i=>{
	console.log(i.titulo)
    	i.aula.forEach(j=>{
        console.log(j.innerText)
    })
})
})()