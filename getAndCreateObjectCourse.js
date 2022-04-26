function getCourseAndCreateObject(accordionMain){
	let content = document.querySelectorAll(accordionMain)
	let contentArray = Array.from(content);
	this.createCourseObject = function(accordionSeconday){
		let titulosCollection = contentArray.map(tituloCollection=>{
		let titulos = tituloCollection.querySelector("h5");
		let aulasNode = tituloCollection.querySelectorAll(".collapse > div div > .d-flex .pr-3 label a")
		let aulas = Array.from(aulasNode);
		return{titulos, aulas}
	})
		titulosCollection.forEach(titulo=>{
			console.log(titulo.titulos.innerText)
			titulo.aulas.forEach(aula=>{
				console.log(aula.innerText);
			})
		})
	}
}

let content = new getCourseAndCreateObject("#accordion .card")
content.createCourseObject(".collapse > div div > .d-flex .pr-3 label a")

