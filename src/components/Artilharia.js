import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import key from "../services/Keys";
import api from "../services/Api";

function Artilharia(){
const [dados, setDados] = useState((
    <>
        <h3>Carregando...</h3>
    </>
));
var {id} = useParams();
useEffect(() => {
    api("/campeonatos/"+id+"/artilharia", {
        headers:{
            Authorization: key
        }
    }).then((response) => {
        var d = response.data;
        var jsx = (
            <>
                <div className="row mt-4" id="div_table">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Gols</th>
                                    <th scope="col">Time</th>
                                </tr>
                            </thead>

                            <tbody>
                                {d.map((element, i) => {
                                    console.log(element);
                                    return(
                                        <>
                                            <tr>
                                                <td scope="row">{element.atleta.nome_popular}</td>
                                                <td scope="row">{element.gols}</td>
                                                <td scope="row">{element.time.nome_popular}</td>
                                            </tr>
                                        </>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div> 
                </div>
            </>
        );
        setDados(jsx);
    }).catch((err) => {console.log(err)});
});
return (
    <>
    {dados}
    </>
);
}

export default Artilharia;