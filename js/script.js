window.onload = function(){

    const slide = ["./images/devanture.jpg", "https://loremflickr.com/1802/1002", "https://loremflickr.com/1804/1000", "https://loremflickr.com/1805/1000"];
let numero = 0;

let categories = document.getElementById("categories")


fetch("data.json").then(
    response => response.json())
    .then( 
        data => {
            data.categories.map( categorie => {
                
                let htmlProduct = "";
                categorie.products.map( product => {
                    htmlProduct+=`
                    <div class="card col-4" style="width: 18rem;">
                        <img src="${product.image}" class="card-img-top" alt="...">
                        <div class=" card-body text-center">
                            <p class="card-text">${product.name}</p>
                            <p class="price">${product.price}€</p>
                            <button onclick='addToPanier(${JSON.stringify(product)})'>Ajouter</button>
                        </div>
                    </div>
                    `
                })
                let htmlCategies=`
                <h2 id="first-title">${categorie.nom}</h2>
                <div class="row mt-4 justify-content-around">
                    ${htmlProduct}
                </div>
                `
                categories.innerHTML+=htmlCategies

            } )
        }

            
    
)




function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
    numero = slide.length - 1;
    if (numero > slide.length - 1)
    numero = 0;
    document.getElementById("slide").src = slide[numero];
}



}

function addToPanier(product){
    let listeProduit = []
    if ( localStorage.getItem("listeProduit")){
        listeProduit = JSON.parse(localStorage.getItem("listeProduit"))
    }

    listeProduit.push(product);
    const toastLiveExample = document.getElementById('liveToast')
    const messageToast = document.getElementById('messageToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    messageToast.innerText=`${product.name} a eté ajouter à votre panier`
    toastBootstrap.show()


    localStorage.setItem("listeProduit", JSON.stringify(listeProduit) )
       
}