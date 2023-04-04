import React from "react";

export const Community = (props) => {
  return (
    <>
    <header className="masthead2" id="masthead2">

        <div className="col-lg-10 container">
            <div className="masthead-subheading2">
            {props.data ? props.data.heading : "Loading"}
            </div>
            <div className="masthead-heading2 text-uppercase">
            {props.data ? props.data.subheading : "Loading"}
            </div>
        </div>
    </header>

    {/* <!--About--> */}

    <section class="page-section bg-mlx" id="services">

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

export default Community;
