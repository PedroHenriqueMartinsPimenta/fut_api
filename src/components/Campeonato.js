import api from "../services/Api";
import key from "../services/Keys";
import { useEffect, useState } from "react";

function Campeonato(){
    const [dados, setDados] = useState((
        <><h1>Carregando...</h1></>
    ));
    useEffect(() => {
        api.get("/campeonatos", {
            headers: {
                Authorization: key
            }
        }).then((response) => {
            var d = response.data;
            var jsx = (
                <>
                    <div className="row">
                        {d.map((element, i) => {
                            console.log(element);
                            return(
                                <>
                                        <div className="col-md-3" key={i}>
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4>{element.nome_popular}</h4>
                                                </div>
                                                <div className="card-body">
                                                    <img src={element.logo} width="100%"></img>
                                                    <p></p>
                                                </div>
                                                <div className="card-footer">
                                                    <a href={"/tabela/" + element.campeonato_id} className="btn btn-outline-success">Ver tabela</a>
                                                </div>
                                            </div>
                                        </div>
                                    
                                </>
                            )
                            
                        })}
                    </div>

                </>
            );
            setDados(jsx);
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }, []);
    return(
        <div className="row">
            <div className="col-12">
                {dados}
            </div>
        </div>
    )
}

export default Campeonato; 