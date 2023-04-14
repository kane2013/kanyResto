window.onload = function(){ // Quand la page à fini de charger

    let categories = document.getElementById("categories")

    // Fait un appel asyncrone pour récuperer les données du fichier data.json
    fetch("data.json").then(
        response => response.json()) // Converti la reponse au format JSON
        .then( 
            data => {
                data.categories.map( categorie => { // Pour chaque catégorie
                    
                    let htmlProducts = "";
                    categorie.products.map( product => { // Pour chaque produit de cette catégorie
                        htmlProducts+=`
                        <div class="rowElement">
                        <div class="card " style="width: 18rem;">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class=" card-body text-center">
                                <p class="card-text">${product.name}</p>
                                <p class="price">${product.price}€</p>
                                <button onclick='addToPanier(${JSON.stringify(product)})'>Ajouter</button>
                            </div>
                        </div>
                        </div>
                        ` // J'ajoute la carte à liste html de produit
                    })
                    let htmlCategies=`
                        <h2 id="first-title">${categorie.nom}</h2>
                        <div class=" mt-4 d-flex justify-content-around">
                            ${htmlProducts}
                        </div>
                        ` // Crée le html de la catégorie en y ajoutant les produits associés
                        categories.innerHTML+=htmlCategies // Ajoute la catégorie à ma page

                    } )
                }

                    
            
        )

    setInterval(() => { // Appel la function ChangeSlide toute les 2 secondes
        ChangeSlide(1)
    }, 2000);



}


// Liste des images
const slide = ["./images/devanture.jpg", "https://loremflickr.com/1802/1002", "https://loremflickr.com/1804/1000", "https://loremflickr.com/1805/1000"]; 
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0){
        numero = slide.length - 1;
    }
    if (numero > slide.length - 1){
        numero = 0;
    }
    document.getElementById("slide").src = slide[numero];
}








function addToPanier(product){
    /*
    Permet d'ajouter un produit au panier
    */
    let listeProduit = []
    if ( localStorage.getItem("listeProduit")){ // Si il existe une liste de produit dans mon localStorage
        listeProduit = JSON.parse(localStorage.getItem("listeProduit")) // Je la recupere
    }

    listeProduit.push(product); // Ajoute mon produit à ma liste
    localStorage.setItem("listeProduit", JSON.stringify(listeProduit) ) // met la liste dans le localStorage du navigateur

    const toastLiveExample = document.getElementById('liveToast')
    const messageToast = document.getElementById('messageToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample) // Créer un Toast ou recupere le celui egistant
    messageToast.innerText=`${product.name} a eté ajouter à votre panier` // modifie le text du toast
    toastBootstrap.show() // affiche le toast


    
       
}