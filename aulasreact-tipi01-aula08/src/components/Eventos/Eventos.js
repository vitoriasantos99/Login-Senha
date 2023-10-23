import { useState } from "react";

function Eventos(){
    // let [conta, setConta] = useState(0);
    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();

    function enviaNome(e){
        //preventDefault() faz com que a página não recarregue 
        e.preventDefault();

        if(nome == "vitoriasantos.cristina@hotmail.com" && senha == "281214@Wf"){
            console.log("Login com sucesso!")
        }
        else{
            console.log("Login ou senha incorreta!")
        }
    }
    return(
        <>
        
        {/* <button onClick={() => {setConta(conta + 1)}}>Clique aqui!</button> */}
        <br/>
        <form>
            <p>Login</p>
            <input 
                placeholder="Insira seu E-mail" 
                type="text" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)}
            />
            <p>Senha</p>
            <input
                placeholder="Insira sua Senha" 
                type="text" 
                value={senha} 
                onChange={(e) => setSenha(e.target.value)}
            />
            <br/>
            <br/>
            <button 
                type="submit" 
                onClick={enviaNome}
            >
            Enviar
            </button>
        </form>
        </>
    )
}

export default Eventos;