function getCourseAndCreateObject(){
	let accordionNode;
	let buttonsArray;
	let content;
	let contentArray;
	let titulosCollection;
	let titulos;
	let aulasNode;

	this.openAllContent = function(accordionButtons){
		accordionNode = document.querySelectorAll(accordionButtons)
		buttonsArray = Array.from(accordionNode);
		buttonsArray.forEach(i=>{i.click()})
	}
	
	this.createCourseObject = function(accordionMain, tagTitle, accordionSecondary){
		content = document.querySelectorAll(accordionMain)
		contentArray = Array.from(content);
		titulosCollection = contentArray.map(tituloCollection=>{
		titulos = tituloCollection.querySelector(tagTitle);
		aulasNode = tituloCollection.querySelectorAll(accordionSecondary)
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

let content = new getCourseAndCreateObject()
content.openAllContent("#accordion .card-header")
content.createCourseObject("#accordion .card", "h5", ".collapse > div div > .d-flex .pr-3 label a")

