import React from "react";
function Form1(){
    return(
        <div className="container mb-4" style={{ "backgroundColor": "white" }}>
                <div className="row" style={{}}>
                    <p className="col-lg-6 text-info" style={{ "fontWeight": "bolder", "fontSize": "23px", "lineHeight": "130px" }}>Get the best deals delivered direct to your inbox each day</p>
                    <div className="col-lg-6 row" style={{ "alignItems": "center" }}>
                        <input className="p-2 col-lg-9" placeholder="Enter email address" style={{ "borderRadius": "0", "borderTopLeftRadius": "5px", "borderBottomLeftRadius": "5px", "borderColor": "lightgrey", "height": "50px" }}></input>
                        <button className="col-lg-3 btn btn-info text-light" style={{"backgroundColor":"#01b2ee" , "fontWeight": "bold", "borderRadius": "0", "borderTopRightRadius": "5px", "borderBottomRightRadius": "5px", "height": "50px" }}>Subscribe</button>
                    </div>
                </div>
            </div>
    )
}
export default Form1;