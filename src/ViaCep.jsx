const ViaCep = () => {
 
    return (
        <div className="Viacep">
            <h3>Endereço do Cliente </h3>
               
            <input type={"text"} title="CEP"
              id={"cep"} className={"Cep"}
              name={"cep"} placeholder="0000000"/>
 
              <input type={"button"} title="Buscar"
              id={"botao"} className={"button-primary"}
              value={"Buscar"}name={"botao"} />
        </div>
    )
}
 
export default ViaCep
 