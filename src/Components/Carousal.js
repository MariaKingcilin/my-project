import React from 'react';
import './Carousal.scss'

function Carousal() {
  return (
    <section id='carousal-sec'>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src="https://images.ctfassets.net/66mrrren2unf/64XDO7ni5pxZ6wwnmUGlxL/82f7790f4dafd2989e2d54a9d131ade5/hair_with_CTA.jpg?q=40" class="d-block w-100" alt="loading" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://images.ctfassets.net/66mrrren2unf/3A13cT5ieM6Fnd3RiPFCVN/998fce2e8f7346037f1ded43246bb056/sunscreenwith_CTA.jpg?q=40" class="d-block w-100" alt="loading" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://images.ctfassets.net/66mrrren2unf/78Wz0KV0F1veU2GdC1g1jp/6ff980f3a965b4cfed90dc43f30be782/generic-website-soon.gif?q=40" class="d-block w-100" alt="loading" />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://images.ctfassets.net/66mrrren2unf/3ytUJk6BRb3jD8rnV2fIB3/654d5d7db20889aa352a33bdd66d2a06/face_with_CTA.jpg?q=40" class="d-block w-100" alt="loading" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default Carousal