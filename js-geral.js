// ****************************************** CRITERIO DE AVALIAÇÃO SEMESTRAL ********************************************* //
//console.log(document.URL);
function criterioAvaliacao(){
	var container	= document.getElementById("criterio-avaliacao"),
		calcular 	= document.getElementById("btn");
		
		//console.log(container);
		calcular.onclick = function(){
			var p1 	 = document.getElementById("input-p1").value,
				p2 	 = document.getElementById("input-p2").value,
				ativ = document.getElementById("input-ativ").value;
				
			var media = (p1 * 4)+ (p2 * 4)+ (ativ * 2);
				
			container.innerHTML = 'Resultado ='+media+"<button onclick='window.location.reload();'>Reset</button>";

		}
		
		
	fadeIn(container,1);	
}

// ****************************************** CAPITURAR CÓDIGO TECLAS ***************************************************** //

function teclas(){
	var container  = document.getElementById('teclas-key'),
		contentKey = document.getElementById('content_codigos'),
		codigoArea = document.getElementById('codigo_tecla'), 
		btnTeclas  = document.getElementById('btn1');

		btnTeclas.onclick = function(){
			var texto = function(){
				contentKey.innerHTML = " <br />Aperte as teclas e veja seu codigo  "
			};
			texto(fadeIn(contentKey,2));
			document.body.onkeypress = function(){
				codigoArea.innerHTML = " tecla digitada: "+ event.keyCode + "<br /> <button onclick='window.location.reload();'>Reset</button>";
			};
		};	
	fadeIn(container,1);		
}

/*
PEGAR TECLA DIGITADA.
function tecla(){
	console.log(event.keyCode);
}

document.body.onkeypress = tecla;

//document.onkeypress = function(){ console.log(event.keyCode)};
*/
// ****************************************** TESTANDO REGEX NA PRÓPRIA PÁGINA *********************************************** //
function regex(){
	var html_container	= document.getElementsByTagName("html")[0].outerHTML,
		container 		= document.getElementById("regex_tester"),
		resultado		= document.getElementById("resultado_regex"),
		regex_tags 		= document.getElementById("botao_regex1"),	 
		regex_links 	= document.getElementById("botao_regex2"),
		regex_values	= document.getElementById("botao_regex3"),
		regex_divs		= document.getElementById("botao_regex4");

		// função para pegar todas as tags da página
		regex_tags.onclick = function(){
			var valor = html_container.match(/<\/.+?>/g);
			resultado.innerText = valor;
			//console.log(valor.toString());
		};
		// Pegar todos os links 
		regex_links.onclick = function(){
			var valor = html_container.match(/href=".+?"/g);
			resultado.innerHTML = valor;
		};
		// Pegar todos os values
		regex_values.onclick = function(){
			var valor = html_container.match(/ value=".+?"/g);
			resultado.innerText = valor;
		};
		// Pegar todos as divs
		regex_divs.onclick = function(){
			var valor = html_container.match(/div/g).length;
			resultado.innerHTML = " total de divs = "+ valor;
		};
		//console.dir(resultado);
	fadeIn(container,1);	
}

// ****************************************** VERIFICAR PAR OU IMPAR ********************************************************* //

function tipoNumero(){
	var container	= document.getElementById('par_impar'),
		contentVal	= document.getElementById('valor_numero'),
		botao		= document.getElementById('botao_numero');

	botao.onclick = function(){
		inputNumero	= document.getElementById('input_par_impar').value;
		if(inputNumero % 2 === 0){
			contentVal.innerHTML = "O numero <b>"+inputNumero+ "</b> e  <b>PAR</b> <br /> <button onclick='window.location.reload();'>Reset</button>";
		}else if(inputNumero % 2 === 1){
			contentVal.innerHTML = "O numero <b>"+inputNumero+ "</b> e  <b>IMPAR</b> <br /> <button onclick='window.location.reload();'>Reset</button>";
		}
		
	};

	fadeIn(container,1);	
}


// EFEITO FADEIN E FADEOUT //

function fadeIn(elemento,tempo){
	//elemento, tempo, inicia(estado),finaliza(estado elemen)
	processa(elemento,tempo,0,100);  
}
function fadeOut(elemento,tempo){
	//elemento, tempo, inicia(estado),finaliza(estado elemen)
	processa(elemento,tempo,100,0); 
}
function processa(elemento,tempo,inicia,finaliza){
	if(inicia == 0){
		increment = 2;
		elemento.style.display = "block";
	}else{
		increment=-2;
	}
	opc = inicia;
	intervalo = setInterval(function(){
		if((opc == finaliza)){
			if(finaliza == 0){
					elemento.style.display = "none";
				  }
			  clearInterval(intervalo);
		}else {
		  opc += increment;
		  elemento.style.opacity = opc/100;
		  elemento.style.filter = "alpha(opacity="+opc+")";
		}
	},tempo * 10);
}