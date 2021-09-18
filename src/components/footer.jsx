import React from "react";
function Footer (){
    return (
      <footer className="" style={{ "backgroundColor": "white" }}>

                <div className="container pt-4 m-4 ">
                    <div className="row" style={{ "color": "rgb(93 84 84)" }}>

                        <div className="col-lg-2 col-md-6">
                            <h6 className="mb-4">Follow us on</h6>

                            <section className="mb-4">
                                
                                <img src="https://img.icons8.com/material/30/000000/facebook-new.png"/> &nbsp;&nbsp;
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/>&nbsp;&nbsp;
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"/>&nbsp;&nbsp;
                                <img src="https://img.icons8.com/material/30/000000/youtube-play--v1.png"/>
                            
                            
                            </section>
                            <h6 className="mb-4">Get app exclusive deals</h6>
                            <button className="btn btn-info p-3 text-light" style={{"backgroundColor":"#01b2ee" , "fontWeight": "bold" }}>Download our App</button>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-2 ">
                            <h6 className="text-capitalize mb-4">GrabOne</h6>

                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="https://new.grabone.co.nz/guarantee" className="
            text-decoration-none" style={{ "color": "rgb(93 84 84)" }}>GrabOne Guarantee</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://www.grabone.co.nz/contact-us?_ga=2.232185951.1304034722.1631875455-1273385797.1631875455" className="text-decoration-none" style={{ "color": "rgb(93 84 84)" }}>Contact Us</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://new.grabone.co.nz/about" className="text-decoration-none" style={{ "color": "rgb(93 84 84)" }}>About Us</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://new.grabone.co.nz/terms-and-conditions" className="text-decoration-none" style={{ "color": "rgb(93 84 84)" }}>Terms & Returns</a>
                                </li>
                                <li className="mb-2">
                                    <a href="http://newblog.grabone.co.nz/?_ga=2.226249818.1304034722.1631875455-1273385797.1631875455" className="text-decoration-none" style={{ "color": "rgb(93 84 84)" }}>Blog</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://new.grabone.co.nz/gift-card" className="text-decoration-none" style={{ "color": "rgb(93 84 84)" }}>Gift Cards</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2  mb-2 ">
                            <h6 className="text-capitalize mb-4">My Account</h6>

                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <a href="https://www.grabone.co.nz/my-stuff/my-account?_ga=2.268773809.1304034722.1631875455-1273385797.1631875455" className="text-decoration-none" style={{ "color": "rgb(93 84 84)" }}>My Account</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://www.grabone.co.nz/view-cart?_ga=2.268773809.1304034722.1631875455-1273385797.1631875455" className="text-decoration-none" style={{ "color": "rgb(93 84 84)" }}>My Cart</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://www.grabone.co.nz/my-stuff/my-deals?_ga=2.261425357.1304034722.1631875455-1273385797.1631875455" className="text-decoration-none" style={{ "color": "rgb(93 84 84)" }}>My Coupons</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://new.grabone.co.nz/faq" className="text-decoration-none" style={{ "color": "rgb(93 84 84)" }}>FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-2 ">
                            <h6 className="text-capitalize mb-4">Merchants</h6>

                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="https://new.grabone.co.nz/run-a-deal" className="text-decoration-none" style={{ "color": "rgb(93 84 84)" }}>Run a Deal</a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://grabonemerchant.co.nz/?_ga=2.29165692.1304034722.1631875455-1273385797.1631875455" className="text-decoration-none" style={{ "color": "rgb(93 84 84)" }}>Merchant Center</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-2 ">
                            <h6 className="text-capitalize mb-4">Newsletter Signup</h6>

                            <p style={{ "fontWeight": "" }}>
                                Sign up for our daily emails and we'll send you all the best deals, tailored for you.
                            </p>
                            <div className="row">
                                <input className="p-2 col-lg-8" placeholder="Enter email address" style={{ "borderRadius": "0", "borderTopLeftRadius": "5px", "borderBottomLeftRadius": "5px", "borderColor": "lightgrey" }}></input>
                                <button className="col-lg-4 btn btn-info text-light" style={{ "fontWeight": "bold", "borderRadius": "0", "borderTopRightRadius": "5px", "borderBottomRightRadius": "5px", "backgroundColor":"#01b2ee" }}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ "background-color": "white" }}>
                    <hr></hr>
                    <a className="text-info text-decoration-none" href="https://new.grabone.co.nz/privacy-policy">Privacy Policy </a>
                    &nbsp; © 2021 GrabOne Limited &nbsp;
                    <a href="https://www.nzme.co.nz/"><img src="https://new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_long.d08e62aa63ff.png" ></img></a>
                </div>

            </footer>
    )
}
export default Footer;