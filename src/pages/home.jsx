import React from "react";

export const Home = (props) => {
  return (
    <>
    <header className="masthead" id="masthead">

        <div className="col-lg-10 container">
            <div className="masthead-subheading">
            {props.data ? props.data.heading : "Loading"}
            </div>
            <div className="masthead-heading text-uppercase">
            {props.data ? props.data.subheading : "Loading"}
            </div>
            <a className="button-atas hvr-outline-out" href="https://discord.gg/btQQsH6PTn" target="_blank" rel="noopener noreferrer">JOIN NOW</a>
            <a className="button-atas2 hvr-outline-out ms-lg-4" href="#introduction">LEARN MORE</a>
        </div>
    </header>

    {/* <!--introduction--> */}

        <section class="page-section bg-glx" id="introduction">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-xl-6 col-md-6 text-center">
                    <div class="mt-5">
                    <div class="mb-2"><img src="../img/favicon.png" alt="..." width="auto" height="auto" class="img-fluid rounded mx-auto d-block"/></div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-6 text-left">
                    <div class="mt-5">
                    <h2 class="introduction-header text-white mt-0 font-roboto-condenses">{props.data ? props.data.heading2 : "Loading"}</h2>
                    <hr class="divider divider-light" />
                    <p class="introduction-subheader text-white mb-4 font-roboto-condenses">{props.data ? props.data.paragraph : "Loading"}</p>
                    <p class="introduction-subheader text-white mb-4 font-roboto-condenses">{props.data ? props.data.paragraph2 : "Loading"}</p>
                    </div>
                </div>
                </div>
            </div>
        </section>

    {/* <!--About--> */}

    <section class="page-section bg-mlx" id="services">

            <div class="card3 mt-lg-69-2">
                <div class="card-body m">
                    <p class="text-white text-center fs-69 font-roboto-condenses ">{props.data ? props.data.topheading : "Loading"}</p>
                </div>
            </div>

        <div class="row row-cols-1 row-cols-md-3 g-5 px-3 mt-lg-69">
        <div class="col">
            <div class="card h-100 bg-dark-blue">
            <img src={props.data ? props.data.img : "Loading"} alt="..."/>
            <div class="card-body bg-dark-blue">
                <h1 class="card-title text-white font-roboto-condenses">{props.data ? props.data.heading3 : "Loading"}</h1>
                <h5 class="card-subtitle text-white font-roboto-condenses mb-4">{props.data ? props.data.subheading3 : "Loading"}</h5>
                <p class="card-text text-white font-roboto-condenses">{props.data ? props.data.content : "Loading"}</p>
                <h5 class="card-subtitle text-white font-roboto-condenses">Learn More</h5>
                <hr class="divider" />
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 bg-dark-blue">
            <img src={props.data ? props.data.img2 : "Loading"} alt="..."/>
            <div class="card-body bg-dark-blue">
            <h1 class="card-title text-white font-roboto-condenses">{props.data ? props.data.heading4 : "Loading"}</h1>
                <h5 class="card-subtitle text-white font-roboto-condenses mb-4">{props.data ? props.data.subheading4 : "Loading"}</h5>
                <p class="card-text text-white font-roboto-condenses">{props.data ? props.data.content2 : "Loading"}</p>
                <h5 class="card-subtitle text-white font-roboto-condenses">Learn More</h5>
                <hr class="divider" />
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 bg-dark-blue">
            <img src={props.data ? props.data.img3 : "Loading"} alt="..."/>
            <div class="card-body bg-dark-blue">
            <h1 class="card-title text-white font-roboto-condenses">{props.data ? props.data.heading5 : "Loading"}</h1>
                <h5 class="card-subtitle text-white font-roboto-condenses mb-4">{props.data ? props.data.subheading5 : "Loading"}</h5>
                <p class="card-text text-white font-roboto-condenses">{props.data ? props.data.content3 : "Loading"}</p>
                <h5 class="card-subtitle text-white font-roboto-condenses">Learn More</h5>
                <hr class="divider" />
            </div>
            </div>
        </div>
        </div>

        {/* Sponsor */}

            <div class="container px-4 px-lg-5 mt-100">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-20 col-md-6 text-center">
                        <div class="mt-5">
                            <img src={props.data ? props.data.sponsor : "Loading"}  width="150" height="150" alt="..."/>
                        </div>
                    </div>
                    <div class="col-lg-20 col-md-6 text-center">
                        <div class="mt-5">
                            <img src={props.data ? props.data.sponsor2 : "Loading"}  width="150" height="150" alt="..."/>
                        </div>
                    </div>
                    <div class="col-lg-20 col-md-6 text-center">
                        <div class="mt-5">
                            <img src={props.data ? props.data.sponsor3 : "Loading"}  width="150" height="150" alt="..."/>
                        </div>
                    </div>
                    <div class="col-lg-20 col-md-6 text-center">
                        <div class="mt-5">
                            <img src={props.data ? props.data.sponsor4 : "Loading"}  width="150" height="150" alt="..."/>
                        </div>
                    </div>
                    <div class="col-lg-20 col-md-6 text-center">
                        <div class="mt-5">
                            <img src={props.data ? props.data.sponsor5 : "Loading"}   width="150" height="150" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>

        {/* Box */}

            <div class="card2 mt-100 ms-lg-69 me-lg-69 ">
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

export default Home;
