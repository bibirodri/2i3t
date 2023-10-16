insere_ultimo 
let lista_nome = ["breno","eduardo", "beatris", "calebe","emanuela"];
function atualizar_lista (){
    let nome = "";
    if (lista_nome. length > 0){
        for(let i=0 ; i < lista_nome.length; i++ ){
            nome += lista_nome [i] +  "<br> ";
        }
        document.getElementById("lista"). innerHTML = nomes; 
        return;
    }
    document.getElementById ("lista"). innerHTML = "lista vaiza "

}

function insere_ultimo (){
    let nome = document. getElementById ( "nome").value;
    if (nome != "")
        lista_nome.push(nome);
        document. getElementById ( "nome").value;
        atualizar_lista();
    }
  function deleta_ultimo(){
    lista_nome.shift ()
    atualizar_lista();
  }
  function insere_primeira (){
    let nome = document.getElementById("nome").value;
  if (nome != "")
  lista_nome.unshift(nome)
  document.getElementById ("nome"). value = "";
  atualizar_lista()
  }
  
function deleta_primeira(){
     lista_nome. shift ();
     atualizar_lista (); 
}
 function deleta_tudo(){
    lista_nome. shift (); 
    atualizar_lista (); 
 }

//Fazer os botões deletar_ultimo inserir_primero deltar_primero e limpar_lista