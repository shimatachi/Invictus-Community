import React from "react";

export const Community = (props) => {
  return (
    <>

        {/* <!--Navbar--> */}

        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container px-lg-5">
            <a class="navbar-brand" href="#page-top"><img src="../img/favicon.ico" alt="favicon" width="auto" height="auto"></img></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-lg-3">
                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                    <li class="nav-item active"><a class="nav-link text-crimson" href="/community">Community</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio">Guides</a></li>
                    <li class="nav-item ms-lg-1001"><a class="nav-link text-crimson" href="https://discord.gg/btQQsH6PTn" target="_blank"  rel="noopener noreferrer">Join Now</a></li>
                </ul>
            </div>
        </div>
    </nav>

    {/* <!--Header--> */}

    <header className="masthead2" id="masthead2">
        <div className="col-lg-10 container">
            <div className="masthead-subheading2">
            Our Community
            </div>
            <div className="masthead-heading2 text-uppercase">
            Bound by passion, united in gameplay.
            </div>
        </div>
    </header>

    {/* <!--About--> */}

    <section class="page-section bg-wlx" id="services">

        <div class="card4 ms-lg-5 me-lg-5 mb-lg-5">
            <div class="card5 px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-xl-6 col-md-6 text-left">
                        <div class="mt-5">
                        <h2 class="introduction-header2 mt-0 font-roboto-condenses">{props.data ? props.data.title : "Loading"}</h2>
                        <p class="introduction-subheader2 mb-2 font-roboto-condenses">{props.data ? props.data.subtitle : "Loading"}</p>
                        <p class="introduction-subheader2 mb-4 font-roboto-condenses">{props.data ? props.data.text : "Loading"}</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 text-center">
                        <div class="mt-5">
                        <div class="mb-2"><img src={props.data ? props.data.image : "Loading"} alt="..." width="auto" height="auto" class="img-fluid2 rounded mx-auto d-block"/></div>
                        <a href="#asdsa" class="button-community hvr-outline-out2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card6 ms-lg-5 me-lg-5 mt-lg-5 mb-lg-5">
            <div class="px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-xl-6 col-md-6 text-center">
                        <div class="mt-5">
                        <div class="mb-2"><img src={props.data ? props.data.image2 : "Loading"} alt="..." width="auto" height="auto" class="img-fluid2 rounded mx-auto d-block"/></div>
                        <a href="/tf-13-invictus" class="button-community hvr-outline-out2">Learn More</a>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 text-left">
                        <div class="mt-5">
                        <h2 class="introduction-header2 mt-0 font-roboto-condenses">{props.data ? props.data.title2 : "Loading"}</h2>
                        <p class="introduction-subheader2 mb-2 font-roboto-condenses">{props.data ? props.data.subtitle2 : "Loading"}</p>
                        <p class="introduction-subheader2 mb-4 font-roboto-condenses">{props.data ? props.data.text2 : "Loading"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card4 ms-lg-5 me-lg-5 mt-lg-5">
            <div class="card5 px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-xl-6 col-md-6 text-left">
                        <div class="mt-5">
                        <h2 class="introduction-header2 mt-0 font-roboto-condenses">{props.data ? props.data.title3 : "Loading"}</h2>
                        <p class="introduction-subheader2 mb-2 font-roboto-condenses">{props.data ? props.data.subtitle3 : "Loading"}</p>
                        <p class="introduction-subheader2 mb-4 font-roboto-condenses">{props.data ? props.data.text3 : "Loading"}</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 text-center">
                        <div class="mt-5">
                        <div class="mb-2"><img src={props.data ? props.data.image3 : "Loading"} alt="..." width="auto" height="auto" class="img-fluid2 rounded mx-auto d-block"/></div>
                        <a href="#asdsa" class="button-community hvr-outline-out2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* Box */}

            <div class="card2 mt-100 ms-lg-69 me-lg-69">
                <div class="card-body m">
                    <h1 class="text-white mt-2 pt-lg-3 text-center font-roboto-condenses ">{props.data ? props.data.boxheading : "Loading"}</h1>
                    <p class="text-white mb-lg-2 text-center font-roboto-condenses">{props.data ? props.data.boxsubheading : "Loading"}</p>
                    <div class="col text-center">
                    <a class="button-bawah hvr-outline-out mt-lg-2 mb-lg-3 font-roboto-condenses" href="https://discord.gg/btQQsH6PTn" target="_blank"  rel="noopener noreferrer">JOIN NOW</a>
                    </div>
                </div>
            </div>

    </section>
    </>


  );
};

export default Community;
