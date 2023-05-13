import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import key from "../services/Keys";
import api from "../services/Api";

function Time(){
    var time = JSON.parse(localStorage.getItem("time"));
    var id = useParams().id;
    
    return(
        <>
                    <div className="row" id="card-time">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 card">
                            <div className="card-header">
                                <h3>{time.time.nome_popular} - {time.time.sigla}</h3>
                            </div>
                            <div className="card-body">
                            <img src={time.time.escudo} width="100%"></img>
                            <br></br>
                            <hr></hr>
                            <p>
                                <b>Aproveitamento: {time.aproveitamento}%
                                </b>
                            </p>
                            <hr></hr>

                            <p>
                                <b>Derrotas: {time.derrotas}
                                </b>
                            </p><hr></hr>

                            <p>
                                <b>Empates: {time.empates}
                                </b>
                            </p><hr></hr>

                            <p>
                                <b>Gols contra: {time.gols_contra}
                                </b>
                            </p><hr></hr>

                            <p>
                                <b>Gols pró: {time.gols_pro}
                                </b>
                            </p><hr></hr>

                            <p>
                                <b>Jogos: {time.jogos}
                                </b>
                            </p><hr></hr>

                            <p>
                                <b>Posição na tabela: {time.posicao}ª
                                </b>
                            </p><hr></hr>
                            
                            <b>Ultimos jogos: 
                                <ul>
                                    {time.ultimos_jogos.map((r, i) => {
                                        return(
                                            <>
                                                {r == "v" ?
                                                <li key={"v"+i}>Vitoria</li> :
                                                <li key={"d"+i}>Derrota</li>
                                                }
                                                
                                            </>
                                        );
                                    })}
                                </ul>
                            </b>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </>
    );
}

export default Time;