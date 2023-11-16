
const listaPersonaje= document.getElementById('character-list')
const previo =document.getElementById('prev-page');
const avanzar =document.getElementById('next-page');
let numeroPagina=1;

function mostrarLista(numeroPagina){


    fetch(`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`)
    .then(response => {
    
      if (!response.ok) {
        throw new Error('No responde');
      }

       return response.json();
      
    })
    .then(data => {
      
        data.results.forEach(elemento => {

            let texto =`<li><div><img src="${elemento.image}"/><p>${elemento.name}</p><p>${elemento.species}</p></div></li>`
            listaPersonaje.innerHTML+=texto;
            
            console.log(elemento.name)
        });

        

    })
    .catch(error => {
      
      console.error('Fetch error:', error);
    });



}

mostrarLista();


avanzar.addEventListener('click', function () {
    listaPersonaje.innerHTML = '';
    ++numeroPagina;
    mostrarLista(numeroPagina);
  });
  
  previo.addEventListener('click', function () {
    if (numeroPagina > 1) {
      listaPersonaje.innerHTML = '';
      --numeroPagina;
      mostrarLista(numeroPagina);
    } else {
      
      mostrarLista(1)
    }
  });
