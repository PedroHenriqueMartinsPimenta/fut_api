import api from "../services/Api";
import key from "../services/Keys";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Tabela(){
    var id = useParams().id;
    var d = [];
    const [dados, setDados] = useState((
        <><h1>Carregando...</h1></>
    ));
    
    const procurar = () => {
        var time = document.querySelector('#time').value;
        var txt = "Time não encontrado, você pode seguir a sugestão campo";
        var l = "";
        d.map((element, i) =>{
            
            if(element.time.nome_popular == time || element.time.nome == time){
                localStorage.setItem("time", JSON.stringify(element));
                txt = "ok";
                l = "/time/" + element.time.time_id
            }
         });
        if(txt != "ok"){
            alert(txt);
        }else{
            window.location.href = l ;
        }
    }
    useEffect(() => {
        api.get("/campeonatos/" + id + "/tabela", {
            headers: {
                Authorization: key
            }
        }).then((response) => {
            d = response.data;
            var jsx = (
                <>
                    <div className="row">
                        <div className="col-md-10">
                            <input type="text" name="time" id="time" list="lista" className="form-control" placeholder="Procurar time"></input>
                        </div>
                        <div className="col-md-2">
                            <button className="col-12 btn btn-outline-success" onClick={procurar}>Procurar</button>
                        </div>
                        <datalist id="lista">
                            {d.map((element, i) =>{
                                return(
                                    <option key={"l" + i}>{element.time.nome_popular}</option>
                                )
                            })}
                        </datalist>
                     </div>
                    <div className="row">
                        <div className="col-md-12">
                            
                        </div>
                    </div>
                     <div className="row mt-4" id="div_table">
                        <div className="col-md-12">
                            <h3>Tabela</h3>
                            <hr></hr>
                            <a className="btn btn-outline-success art" href={"/artilharia/" + id}>Artilharia</a>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            Posição
                                        </th>
                                        <th scope="col">
                                            Nome
                                        </th>
                                        <th scope="col">
                                            Pontos
                                        </th>
                                        <th scope="col">
                                            Gols
                                        </th>
                                        <th scope="col">
                                            Vitorias
                                        </th>
                                        <th scope="col">
                                            Derrotas
                                        </th>
                                        <th scope="col">
                                            Prx partidas
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                {d.map((element, i) =>{
                                return(
                                    <tr scope="row" key={"t" + i}>
                                        <td>{element.posicao}</td>
                                        <td>{element.time.nome_popular}</td>
                                        <td>{element.pontos}</td>
                                        <td>{element.gols_pro}</td>
                                        <td>{element.vitorias}</td>
                                        <td>{element.derrotas}</td>
                                        <td><a href={"/partidas/next/" + element.time.time_id} className="btn btn-danger">Ver</a></td>
                                    </tr>
                                )
                            })}
                                </tbody>
                            </table>
                        </div>
                     </div>
                </>
            );
            setDados(jsx);
        }).catch((err) => {
            console.log(err);
        });
    });
    return(
        <>
            {dados}
        </>
    );
}

export default Tabela;