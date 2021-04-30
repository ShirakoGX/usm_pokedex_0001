
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
const pokemones=[];
const cargarTabla = ()=>{
      //___1
      let tbody = document.querySelector("#tabla-tbody");

      tbody.innerHTML = "";
      //___2
  for (let i=0; i <pokemones.length; ++i){
    let p =pokemones[i];

      //___3
    let tr = document.createElement("tr");

      //___4
    let tdNro= document.createElement ("td");
    tdNro.innerText = (i+1);
    let tdNombre = document.createElement ("td");
    tdNombre.innerText = p.nombre;
    let tdTipo = document.createElement("td");
      
    let icono = document.createElement("i");
    if (p.tipo =="fuego"){
      //<i class="fas fa-fire"></i>
      icono.classList.add("fas","fa-fire","text-danger","fa-3x");

    }else if (p.tipo == "planta"){
      //<i class="fas fa-leaf"></i>
      icono.classList.add("fas","fa-leaf","text-success","fa-3x");


    }else if (p.tipo == "electrico"){
      //<i class="fas fa-bolt"></i>
      icono.classList.add("fas","fa-bolt","text-warning","fa-3x");


    }else if (p.tipo == "agua"){
      //<i class="fas fa-tint"></i>
      icono.classList.add("fas","fa-tint","text-primary","fa-3x");


    }else{
      //<i class="fas fa-star"></i>
      icono.classList.add("fas","fa-star","text-info","fa-3x")
    }
  
    tdNombre.classList.add("text-center");
    tdTipo.appendChild(icono);
    let tdDesc = document.createElement("td");
    tdDesc.innerHTML = p.descripcion;
    let tdAcciones = document.createElement("td");
      
    //___5
    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDesc);
    tr.appendChild(tdAcciones);
    //___6
    tbody.appendChild(tr);
  };
};

document.querySelector("#registrar-btn").addEventListener("click", ()=> { 
    let nombre = document.querySelector("#nombre-txt").value;
    let descripcion = tinymce.get ("descripcion-txt").getContent();
    let legendario = document.querySelector("#legendario-si").checked;
    let tipo = document.querySelector("#tipo-select").value;

    let pokemon = {};
    pokemon.nombre = nombre;
    pokemon.descripcion = descripcion;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;

    pokemones.push(pokemon);
    cargarTabla();

    Swal.fire("Exito!","Pokemon registrado","success");
} );

