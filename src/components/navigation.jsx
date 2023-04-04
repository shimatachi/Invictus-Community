import React from "react";

export const Navigation = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div class="container px-lg-5">
        <a class="navbar-brand" href="#page-top"><img src="../img/favicon.ico" alt="favicon" width="auto" height="auto"></img></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-lg-3">
                <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="/community">Community</a></li>
                <li class="nav-item"><a class="nav-link" href="#portfolio">Guides</a></li>
                <li class="nav-item ms-lg-1001"><a class="nav-link text-crimson" href="https://discord.gg/btQQsH6PTn" target="_blank"  rel="noopener noreferrer">Join Now</a></li>
            </ul>
        </div>
    </div>
</nav>
  );
};

export default Navigation;
