function exibe1(){

    document.getElementById("item1").style.display = 'block';
    
    document.getElementById("item2").style.display = 'none'; 
    document.getElementById("item3").style.display = 'none'; 
    document.getElementById("item4").style.display = 'none';
    document.getElementById("item5").style.display = 'none'; 

}

function exibe2(){

    document.getElementById("item1").style.display = 'none';
    document.getElementById("item2").style.display = 'block';
    document.getElementById("item3").style.display = 'none'; 
    document.getElementById("item4").style.display = 'none'; 
    document.getElementById("item5").style.display = 'none'; 

}


function exibe3(){

    document.getElementById("item3").style.display = 'block';
    
    document.getElementById("item1").style.display = 'none'; 
    document.getElementById("item2").style.display = 'none'; 
    document.getElementById("item4").style.display = 'none';  
    document.getElementById("item5").style.display = 'none'; 

}

function exibe4(){

    document.getElementById("item4").style.display = 'block';
    
    document.getElementById("item1").style.display = 'none'; 
    document.getElementById("item2").style.display = 'none'; 
    document.getElementById("item3").style.display = 'none'; 
    document.getElementById("item5").style.display = 'none'; 

}

function exibe5(){

    document.getElementById("item5").style.display = 'block';
    document.getElementById("item1").style.display = 'none'; 
    document.getElementById("item2").style.display = 'none'; 
    document.getElementById("item3").style.display = 'none'; 
    document.getElementById("item4").style.display = 'none'; 

}


// cabeçalho a partir de index
function nav1(){
	var cabe = "<nav id='main_nav' class='navbar navbar-expand-lg navbar-light bg-white shadow'> <div class='container d-flex justify-content-between align-items-center'> <a class='navbar-brand h1' href='index.html'> <span class='text-dark h4'>Computação</span> <span class='text-primary h4'>Livre</span> </a> <button class='navbar-toggler border-0' type='button' data-bs-toggle='collapse' data-bs-target='#navbar-toggler-success' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between' id='navbar-toggler-success'> <div class='flex-fill mx-xl-5 mb-2'> <ul class='nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark'> <li class='nav-item'> <a class='nav-link btn-outline-primary rounded-pill px-3' href='index.html'>Início</a> </li> <li class='nav-item'> <br> </li> <li class='nav-item'> <a class='nav-link btn-outline-primary rounded-pill px-3' href='./intro-py3.html'>Cursos</a> </li> <li class='nav-item'> <a class='nav-link btn-outline-primary rounded-pill px-3' href='./links.html'>Links Úteis</a> </li> <li class='nav-item'> <a class='nav-link btn-outline-primary rounded-pill px-3' href='./oprojeto.html'>O projeto</a> </li> </ul> </div> <div class='navbar align-self-center d-flex'> <br> </div></div></div></nav>"; 
      		
	return cabe; 
}
// cabeçalho a partir da pasta cap
function nav2(){
	var cabe = "<nav id='main_nav' class='navbar navbar-expand-lg navbar-light bg-white shadow'> <div class='container d-flex justify-content-between align-items-center'> <a class='navbar-brand h1' href='index.html'> <span class='text-dark h4'>Computação</span> <span class='text-primary h4'>Livre</span> </a> <button class='navbar-toggler border-0' type='button' data-bs-toggle='collapse' data-bs-target='#navbar-toggler-success' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between' id='navbar-toggler-success'> <div class='flex-fill mx-xl-5 mb-2'> <ul class='nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark'> <li class='nav-item'> <a class='nav-link btn-outline-primary rounded-pill px-3' href='./../index.html'>Início</a> </li> <li class='nav-item'> <br> </li> <li class='nav-item'> <a class='nav-link btn-outline-primary rounded-pill px-3' href='./../intro-py3.html'>Cursos</a> </li> <li class='nav-item'> <a class='nav-link btn-outline-primary rounded-pill px-3' href='./../links.html'>Links Úteis</a> </li> <li class='nav-item'> <a class='nav-link btn-outline-primary rounded-pill px-3' href='./../oprojeto.html'>O projeto</a> </li> </ul> </div> <div class='navbar align-self-center d-flex'> <br> </div></div></div></nav>"; 
      		
	return cabe; 
}

//rodapé completo
 function foot1(){
 	
 	var pe = " <footer class='bg-secondary pt-4'> <div class='container'> <div class='row py-4'> <div class='col-lg-3 col-12 align-left'> <a class='navbar-brand' href='index.html'> <span class='text-light h5'></span><span class='text-light h5 semi-bold-600'></span></a>          <p class='text-light my-lg-4 my-2'><br> </p> <ul class='list-inline footer-icons light-300'> <li class='list-inline-item m-0'> <a class='text-light' target='_blank' href='http://facebook.com/'> </a> <br> </li> <li class='list-inline-item m-0'> <a class='text-light' target='_blank' href='https://www.linkedin.com/'> </a> <br> </li> <li class='list-inline-item m-0'> <a class='text-light' target='_blank'                href='https://www.whatsapp.com/'> </a> <br> </li> <li class='list-inline-item m-0'> <a class='text-light' target='_blank'                  href='https://www.flickr.com/'> </a> <br> </li> <li class='list-inline-item m-0'> <a class='text-light' target='_blank'                  href='https://www.medium.com/'> </a> <br> </li> </ul> </div> <div class='col-lg-3 col-md-4 my-sm-0 mt-4'> <h3 class='h4 pb-lg-3 text-light light-300'>A UFV </h3> <ul class='list-unstyled text-light light-300'> <li class='pb-2'> <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a   class='text-decoration-none text-light' href='https://www.ufv.br/' target='_blank'>Conheça a UFV</a> </li> <li class='pb-2'> <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class='text-decoration-none text-light py-1' href='http://www2.dpi.ufv.br/'               target='_blank'>Departamento de Informática</a> </li> <li class='pb-2'> <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a                  class='text-decoration-none text-light py-1' href='oprojeto.html' target='_blank'>O projeto</a> </li> <li class='pb-2'> <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class='text-decoration-none text-light py-1' href='#'>Em breve</a> </li> </ul> </div> <div class='col-lg-3 col-md-4 my-sm-0 mt-4'> <h2 class='h4 pb-lg-3 text-light light-300'>Em breve</h2><ul class='list-unstyled text-light light-300'>             <li class='pb-2'> <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a                  class='text-decoration-none text-light py-1' href='#'>Em breve</a> </li> <li class='pb-2'> <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class='text-decoration-none text-light py-1' href='#'>Em breve</a> </li> <li class='pb-2'> <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class='text-decoration-none text-light py-1' href='#'>Em breve</a> </li> <li class='pb-2'> <i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class='text-decoration-none text-light py-1' href='#'>Em breve</a> </li> </ul> </div> <div class='col-lg-3 col-md-4 my-sm-0 mt-4'> <h2 class='h4 pb-lg-3 text-light light-300'>Contate-nos</h2> <ul class='list-unstyled text-light light-300'> <li class='pb-2'> <i class='bx-fw bx bx-mail-send bx-xs'></i><a class='text-decoration-none text-light py-1'>computacaolivreufv@gmail.com</a> </li></ul> </div> </div> </div> <div class='w-100 bg-primary py-3'>    <div class='container'> <div class='row pt-2'> <div class='col-lg-6 col-sm-12'> <p class='text-lg-start text-center text-light light-300'>    Copyright 2021 Universidade Federal de Viçosa All Rights Reserved</p> </div> <div class='col-lg-6 col-sm-12'><p class='text-lg-end text-center text-light light-300'> Designed using <a rel='sponsored' class='text-decoration-none text-light' href='https://templatemo.com/' target='_blank'><strong>TemplateMo</strong></a> </p> </div> </div> </div> </div> </footer> ";
 	
 	return pe;
 }
 
 // Rodapé Simples
 function foot2(){ 
 	
 	var pe = "<footer class='bg-secondary pt-4'> <div class='w-100 bg-primary py-3'> <div class='container'> <div class='row pt-2'>       <div class='col-lg-6 col-sm-12'> <p class='text-lg-start text-center text-light light-300'> © Copyright 2021 Universidade Federal de Viçosa All Rights Reserved. </p> </div> <div class='col-lg-6 col-sm-12'> <p class='text-lg-end text-center text-light light-300'> Designed by <a rel='sponsored' class='text-decoration-none text-light' href='https://templatemo.com/' target='_blank'><strong>TemplateMo</strong></a> </p>   </div>  </div> </div> </div> </footer> ";
 	
 	return pe;
 
 }
 
 function prox(x){
 
	var y = x+1;
	var link = "cap" + y.toString() + ".html";
	
	window.open(link, "_self");
 		
	return link;
 }
 
  function ant(x){
 
	var y = x-1;
	var link = "cap" + y.toString() + ".html";
	
	window.open(link, "_self");
 		
	return link;
 }
 
  function iniciar(){
 
	var link = "cap0.html";
	
	window.open(link, "_self");
 		
	return link;
 }


