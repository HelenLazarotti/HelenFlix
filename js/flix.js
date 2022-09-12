function addFilme(){
            var filmeFavorito = document.getElementById("filme").value;
            
            if (filmeFavorito.endsWith(".jpg")){
                listarFilmeTela(filmeFavorito)
            } else {
                console.error("Endereço de filme inválido!");
            }
            
            document.getElementById("filme").value ="";
        }

        function listarFilmeTela(filme){
            var campoFilme = "<img src=" + filme + ">";

            var listaFilmes = document.getElementById("listaFilmes");

            listaFilmes.innerHTML += campoFilme;
        }
