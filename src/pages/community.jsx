import React from "react";

export const Community = (props) => {
  return (
    <>
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

        <div class="card4 ms-lg-5 me-lg-5">
            <div class="card5 px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-xl-6 col-md-6 text-left">
                    <div class="mt-5">
                    <h2 class="introduction-header mt-0 font-roboto-condenses">Legio - Ordo</h2>
                    <p class="introduction-subheader2 mb-2 font-roboto-condenses">Blue Protocol</p>
                    <p class="introduction-subheader2 mb-4 font-roboto-condenses">Legio - Ordo is built upon the principles of order, discipline, and unity, and we are dedicated to tackling the challenges of Blue Protocol as a team. As members of Legio - Ordo, we take on raids, dungeons, and quests together, using our combined skills and strategies to conquer whatever obstacles come our way. Whether you are an experienced player or new to the game, Legio - Ordo provides a welcoming and supportive community that encourages growth and development. With our commitment to excellence and teamwork, we are poised to become one of the strongest and most respected guilds in all of Blue Protocol.</p>
                    </div>
                </div>
                <div class="col-xl-6 col-md-6 text-center">
                    <div class="mt-5">
                    <div class="mb-2"><img src="../img/misc/image5.png" alt="..." width="500" height="240" class="img-fluid rounded mx-auto d-block"/></div>
                    <a href="#asdsa" class="btn btn-primary">Sample</a>
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
