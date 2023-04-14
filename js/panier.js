window.onload = function(){

    if (localStorage.getItem("listeProduit")){ // Si il existe une liste de produit dans mon localStorage
        let listeProduit = JSON.parse(localStorage.getItem("listeProduit")); // Convertie la liste du format STRING en JSON
        let bodyPanier = document.getElementById("bodyPanier"); // Body tu tableau de panier
        let total = 0; // Prix total
        listeProduit.map( product => { // Pour chasue produit de ma liste de produit
            total+=product.price // J'ajoute le prix du produit au prix total
            bodyPanier.innerHTML+=`<tr>
                                        <th scope="row"><img src="${product.image}" width="300px"/></th>
                                        <td>${product.name}</td>
                                        <td>${product.price}€</td>
                                    </tr>` // Ajoute a mon Tableau une ligne correspondant à mon produit
        })

        bodyPanier.innerHTML+=`<tr>
                                    <th scope="row" colspan="2">TOTAL</th>
                                    <td>${total}€</td>
                                </tr>` // Ajoute la ligne du total

        // Méthode sans template String                                
        // bodyPanier.innerHTML+="<tr>"+
        //                         "<th scope='row' colspan='2'>TOTAL</th>"+
        //                         "<td>$"+total+"€</td>"+
        //                     "</tr>" /
    }else{
        document.getElementById("body").innerHTML="<h2>Votre panier est vide, retournez à la page d'acceuil</h2>"
    }
    
}


function validerPanier(){
    localStorage.removeItem("listeProduit"); // Supprime le panier du localStorage
    window.location.href="./fin.html" // Redirection vers la page de fin
}