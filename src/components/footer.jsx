import React from "react";

export const Footer = (props) => {
  return (
    <footer class="bg-dark-blue py-5">
      <div class="container px-4 px-lg-5">
        <div class="small text-center text-white mb-4">
        <img src={props.data ? props.data.img : "Loading"} alt="logo-footer" width="40" height="40" />
        </div>
      </div>
      <div class="container px-4 px-lg-5">
        <div class="small text-center text-white mb-1">
          {props.data ? props.data.heading : "Loading"}
        </div>
      </div>

      <div class="container px-4 px-lg-5">
        <div class="small text-center text-white mb-1">
          &copy; 2023 
        <b> • Invictus: Community</b>
        . All rights reserved. Unauthorized use and/or duplication of this material without express 
        </div>
      </div>

      <div class="container px-4 px-lg-5">
        <div class="small text-center text-white mb-1">
        and written permission from this site’s owners is strictly prohibited. Excerpts and links may be used, provided that full
        </div>
      </div>

      <div class="container px-4 px-lg-5">
        <div class="small text-center text-white mb-1">
        and clear credit is given to 
        <b> Invictus: Community </b>
        with appropriate and specific direction to the original content.        </div>
      </div>
    </footer>
  );
};
