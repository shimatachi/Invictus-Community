import React from "react";

export const Introduction = (props) => {
  return (
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
                        <h2 class="introduction-header text-white mt-0 font-roboto-condenses">{props.data ? props.data.heading : "Loading"}</h2>
                        <hr class="divider divider-light" />
                        <p class="introduction-subheader text-white mb-4 font-roboto-condenses">{props.data ? props.data.paragraph : "Loading"}</p>
                        <p class="introduction-subheader text-white mb-4 font-roboto-condenses">{props.data ? props.data.paragraph2 : "Loading"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Introduction;
