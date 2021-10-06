fetch('http://localhost:3000/api/products')
    .then(res => {
        console.log (res);

        if(res.ok){
            res.json().then(data => {
                imageURL.src = data[0].url
            })
        }else{
            console.log("ERREUR");
            document.getElementById('erreur').innerHTML = "Erreur :("
        }
    })
