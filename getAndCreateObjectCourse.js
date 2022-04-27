// COPIE E COLE ESTE CÓDIGO NO CONSOLE
function getCourseAndCreateObject(){
	let accordionButtonsNode;
	let buttonsArray;
	let content;
	let contentArray;
	let titulosCollection;
	let titulos;
	let aulasNode;

	this.openAllContent = function(accordionButtons){
		accordionButtonsNode = document.querySelectorAll(accordionButtons)
		buttonsArray = Array.from(accordionButtonsNode);
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
// ANALISE O HTML DO SITE E FAÇA AS DEVIDAS ALTERAÇÕES PARA FUNCIONAR

// INSTANCIE PRIMEIRO
let content = new getCourseAndCreateObject()
// EXECUTE PRIMEIRO ESTA FUNÇÃO CASO TENHA BOTÕES PARA ABRIR NO SITE
content.openAllContent("#accordion .card-header")
// EXECUTE ESTA FUNÇÃO APÓS ABRIR TODOS OS BOTÕES
content.createCourseObject("#accordion .card", "h5", ".collapse > div div > .d-flex .pr-3 label a")

