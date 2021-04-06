import React,{Component} from "react";
import { render } from "react-dom";
import scpData from "./info.json";

const scp = scpData.map(
    (scpData) => {
        return(
            <div>
                <div key={scpData.id}>
                    <div className="card shadow-lg bg-dark">
                        <img className="mx-auto d-block w-50" src={scpData.image} />
                        <div className="col-md-12">
                            <div className="card-body text-warning">
                                <h1 className="card-title text-center">{scpData.item}</h1>
                                <hr />
                                <h3 className="card-subtitle mb-2 text-muted">{scpData.class}</h3>
                                <p className="card-text">{scpData.containment}</p>
                                <p className="card-text">{scpData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

class Content extends Component
{
    render()
    {
        return(
        <div className="album py-5 bg-dark">
            <div className="container">
                <div className="row row-cols-sm-2 cols-md-3 g-3">
                {scp}
                </div>
            </div>
        </div>
        );
    }
}

export default Content;