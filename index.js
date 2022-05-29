const compras = [
    {
      url:
        "https://dojiw2m9tvv09.cloudfront.net/11787/product/dogitcamaredonda53cm7136.jpg",
      descripcion: "una cama"
    },
    {
      url:
        "https://ripleycl.imgix.net/http%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2020%2F02%2F14100853%2FVista-1-peincipal.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=9ece057c37052ae32845edf9130b7dbb",
      descripcion: "una casa de perro"
    },
    {
      url:
        "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/download-21.png?itok=5os2Jiwd",
      descripcion: "un juego  de perro"
    },
        {
        url:
            "https://ae01.alicdn.com/kf/H5eccca2fb82f48279d2d8647280abac5N/Collar-ancho-de-cuero-para-Perro-collares-acolchados-suaves-y-grandes-para-perros-medianos-y-grandes.jpg_Q90.jpg_.webp",
        descripcion: "un collar"
        }
]


var texto_iterable=""

compras.forEach((element) => {

    var tarjetita_html = `<div class="col">
    <div class="card" style="width: 18rem;">
        <img src="${element.url}" class="card-img-top" alt="foto">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">${element.descripcion}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>`
    
    texto_iterable += tarjetita_html
    $("#Seguimiento").html( texto_iterable )
});

  