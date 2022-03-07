/* Esse é o início da primeira versão do código */
// (function(){
// 	const collapse = document.querySelectorAll("#accordion .collapse")
// 	const accordion = document.querySelectorAll("#accordion > div")
	
// 	collapse.forEach(i=>{
//     	i.classList.add("show")
// 	})
	
// 	const array1 = Array.from(accordion)	

// 	const lista = array1.map(i=>{
//     	const titulo = i.querySelector("div.cursor-pointer h5 span")
//     	const subtitulo = i.querySelectorAll(".collapse .py-2")
//     	const aula = i.querySelectorAll(".collapse.show a")
//     	return{
//         titulo:titulo.innerText,
//         subtitulo,
//         aula,
//     		}
// 	})
	
// 	lista.forEach(i=>{
// 	console.log(i.titulo)
//     	i.aula.forEach(j=>{
//         console.log(j.innerText)
//     })
// })
// })()
/* Esse é o final da primeira versão do código */

function getCourseAndCreateObject(collapse, accordion){
	this.collapse = document.querySelectorAll(collapse);
	this.accordion = document.querySelectorAll(accordion);
	const accordionArray = Array.from(this.accordion);

	this.setShowAttribute = function(iterable, classShow){
		const iterableArray = document.querySelectorAll(iterable)
		const hiddenIterable = Array.from(iterableArray)
		hiddenIterable.forEach(i=>{
			i.classList.add(classShow);
			i.style.display = "block";
			i.style.height = "100%";
		})
	}
	this.createCourseObject = function(tituloClass, subtituloClass, aulas){

		const lista = accordionArray.map(i=>{
			const titulo = i.querySelector(tituloClass);
			const subtitulo = i.querySelectorAll(subtituloClass);
			const aula = i.querySelectorAll(aulas);
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
	}

}
// Exemplo do que enviar para a função construtora
const conteudo = new getCourseAndCreateObject("#accordion .collapse", "#accordion > div")
conteudo.setShowAttribute("#accordion .collapse", "show")
conteudo.createCourseObject("div.cursor-pointer h5 span", ".collapse .py-2", ".collapse.show a")
