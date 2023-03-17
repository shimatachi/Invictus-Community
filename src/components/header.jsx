import React from "react";

export const Header = (props) => {
  return (
<header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-left text-left">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">WHERE PASSION MEETS CAMRADERIE.</h1>
                        {/* <hr class="divider" /> */}
                        <br>
                        </br>
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <h2 class="text-white mb-5">INVICTUS AWAITS</h2>
                        <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
                    </div>
                </div>
            </div>
        </header>
  );
};
