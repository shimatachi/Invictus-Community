import React from "react";

export const About = (props) => {
  return (
    <section class="page-section bg-mlx" id="services">

            <div class="card3 mt-lg-69-2">
                <div class="card-body m">
                    <p class="text-white text-center fs-69 font-roboto-condenses ">OUR COMMUNITY GROUPS</p>
                </div>
            </div>

        <div class="row row-cols-1 row-cols-md-3 g-5 px-3 mt-lg-69">
        <div class="col">
            <div class="card h-100 bg-dark-blue">
            <img src="../img/misc/card01.png" alt="..."/>
            <div class="card-body bg-dark-blue">
                <h1 class="card-title text-white font-roboto-condenses">LEGIO - ORDO</h1>
                <h5 class="card-title text-white font-roboto-condenses mb-4">Blue Protocol</h5>
                <p class="card-text text-white font-roboto-condenses">Nullam quam massa, fringilla quis tortor eu, aliquet faucibus leo. Proin mollis erat congue, interdum ipsum sed, venenatis ante. Fusce non ultrices urna. Proin imperdiet quam diam, vel hendrerit mauris tempor et. Curabitur ut turpis sit amet mi blandit lobortis. Ut bibendum mauris non vehicula pellentesque. Ut ultricies feugiat neque nec ultricies. Fusce vulputate tortor fringilla fermentum congue.</p>
                <h5 class="card-title text-white font-roboto-condenses">Learn More</h5>
                <hr class="divider" />
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 bg-dark-blue">
            <img src="../img/misc/card02.png" alt="..."/>
            <div class="card-body bg-dark-blue">
                <h1 class="card-title text-white font-roboto-condenses">Jawa Only Survivor</h1>
                <h5 class="card-title text-white font-roboto-condenses mb-4">Project Zomboid</h5>
                <p class="card-text text-white font-roboto-condenses">Nullam quam massa, fringilla quis tortor eu, aliquet faucibus leo. Proin mollis erat congue, interdum ipsum sed, venenatis ante. Fusce non ultrices urna. Proin imperdiet quam diam, vel hendrerit mauris tempor et. Curabitur ut turpis sit amet mi blandit lobortis. Ut bibendum mauris non vehicula pellentesque. Ut ultricies feugiat neque nec ultricies. Fusce vulputate tortor fringilla fermentum congue.</p>
                <h5 class="card-title text-white font-roboto-condenses">Learn More</h5>
                <hr class="divider" />
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100 bg-dark-blue">
            <img src="../img/misc/card03.png" alt="..."/>
            <div class="card-body bg-dark-blue">
                <h1 class="card-title text-white font-roboto-condenses">Task Force - 13 “Invictus”</h1>
                <h5 class="card-title text-white font-roboto-condenses mb-4">War Thunder</h5>
                <p class="card-text text-white font-roboto-condenses">Nullam quam massa, fringilla quis tortor eu, aliquet faucibus leo. Proin mollis erat congue, interdum ipsum sed, venenatis ante. Fusce non ultrices urna. Proin imperdiet quam diam, vel hendrerit mauris tempor et. Curabitur ut turpis sit amet mi blandit lobortis. Ut bibendum mauris non vehicula pellentesque. Ut ultricies feugiat neque nec ultricies. Fusce vulputate tortor fringilla fermentum congue.</p>
                <h5 class="card-title text-white font-roboto-condenses">Learn More</h5>
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
                            <img src="../img/sponsorship/nvidiaw1.png"  width="150" height="150" alt="..."/>
                        </div>
                    </div>
                    <div class="col-lg-20 col-md-6 text-center">
                        <div class="mt-5">
                            <img src="../img/sponsorship/logigw1.png"  width="150" height="150" alt="..."/>
                        </div>
                    </div>
                    <div class="col-lg-20 col-md-6 text-center">
                        <div class="mt-5">
                            <img src="../img/sponsorship/BPIicon1.png"  width="150" height="150" alt="..."/>
                        </div>
                    </div>
                    <div class="col-lg-20 col-md-6 text-center">
                        <div class="mt-5">
                            <img src="../img/sponsorship/kominfo1.png"  width="150" height="150" alt="..."/>
                        </div>
                    </div>
                    <div class="col-lg-20 col-md-6 text-center">
                        <div class="mt-5">
                            <img src="../img/sponsorship/bswb1.png"   width="150" height="150" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card2 mt-100 ms-lg-69 me-lg-69">
                <div class="card-body m">
                    <h1 class="text-white mt-2 pt-lg-3 text-center font-roboto-condenses ">READY TO BE INVICTUS?</h1>
                    <p class="text-white mb-lg-2 text-center font-roboto-condenses">Where the Journey Begins and the Rewards Never End</p>
                    <div class="col text-center">
                    <a class="button-bawah hvr-outline-out mt-lg-2 mb-lg-3 font-roboto-condenses" href="https://discord.gg/btQQsH6PTn" target="_blank">JOIN NOW</a>
                    </div>
                </div>
            </div>

    </section>
  );
};
