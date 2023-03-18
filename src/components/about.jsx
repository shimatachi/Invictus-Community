import React from "react";

export const About = (props) => {
  return (
    <section class="page-section" id="services">
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100">
            <img src="../img/misc/card1.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h3 class="card-title">LEGIO - ORDO</h3>
                <h5 class="card-title">Blue Protocol</h5>
                <p class="card-text">Nullam quam massa, fringilla quis tortor eu, aliquet faucibus leo. Proin mollis erat congue, interdum ipsum sed, venenatis ante. Fusce non ultrices urna. Proin imperdiet quam diam, vel hendrerit mauris tempor et. Curabitur ut turpis sit amet mi blandit lobortis. Ut bibendum mauris non vehicula pellentesque. Ut ultricies feugiat neque nec ultricies. Fusce vulputate tortor fringilla fermentum congue.</p>
                <small class="text-muted">Learn more</small>
                <hr class="divider divider-light" />
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src="../img/misc/card1.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src="../img/misc/card1.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};
