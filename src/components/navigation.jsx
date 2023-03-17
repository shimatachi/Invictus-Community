import React from "react";

export const Navigation = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#page-top"><img src="../img/favicon.ico" width="40" height="40"></img></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-left my-2 my-lg-0">
                <li class="nav-item"><a class="nav-link" href="#about">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#services">Community</a></li>
                <li class="nav-item"><a class="nav-link" href="#portfolio">Guides</a></li>
            </ul>
        </div>
    </div>
</nav>
  );
};
