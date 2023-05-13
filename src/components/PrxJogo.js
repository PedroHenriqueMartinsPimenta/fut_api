import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/Api";
import key from "../services/Keys";

function PrxJogo(){
    const [dados, setDados] = useState((
        <>
            <h3>Carregando...</h3>
        </>
    ));
    var id = useParams().id;
    useEffect(() => {
        api.get("/times/"+id+"/partidas/proximas", {
            headers:{
                Authorization: key
            }
        }).then((response) => {
            var d = response.data["copa-do-brasil"][0];
            console.log(d);
            var jsx = (
                <>
                    <div className="row" id="card-time">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 card">
                            <div className="card-header">
                                <h4>{d.time_mandante.nome_popular} X {d.time_visitante.nome_popular}</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-5">
                                        <img src={d.time_mandante.escudo} width="100%"></img>
                                    </div>
                                    <div className="col-2">
                                        <h1>X</h1>
                                    </div>
                                    <div className="col-5">
                                        <img src={d.time_visitante.escudo} width="100%"></img>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-12">
                                        <p>
                                            <b>{d.data_realizacao} as {d.hora_realizacao}</b>
                                        </p>
                                        <hr></hr>
                                        <p>
                                            <b>Estádio {d.estadio.nome_popular}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </>
            );
            setDados(jsx);
        }).catch((err) => {console.log(err)});
    });
    return(
        <>
            {dados}
        </>
    );
}

export default PrxJogo;