window.onload = function(){

    if (localStorage.getItem("listeProduit")){
        let listeProduit = JSON.parse(localStorage.getItem("listeProduit"));
        let bodyPanier = document.getElementById("bodyPanier");
        let total = 0;
        listeProduit.map( product => {
            total+=product.price
            bodyPanier.innerHTML+=`<tr>
                                        <th scope="row"><img src="${product.image}" width="300px"/></th>
                                        <td>${product.name}</td>
                                        <td>${product.price}€</td>
                                    </tr>`
        })
        bodyPanier.innerHTML+=`<tr>
                                        <th scope="row" colspan="2">TOTAL</th>
                                        <td>${total}€</td>
                                    </tr>`
    }else{
        body = document.getElementById("body");
        body.innerHTML="<h2>Votre panier est vide, retournez à la page d'acceuil</h2>"
    }
    
}


function validerPannier(){
    localStorage.removeItem("listeProduit");
    window.location.href="./fin.html"
}