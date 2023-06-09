import React from 'react'
const HomePage = (props) => {
    return ( <>
    <div id="carouselExampleIndicators" className="m-5 carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="img/063 span.jpg" alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="img/063 span2.jpg" alt="Second slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="img/067 first.jpg" alt="Third slide" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  
  
 
  <div className="m-5">
  <img src="../../img/063 span2.jpg"  alt="..."  height="250px" />
    <h5 className="card-title">New produt</h5>
    <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officia beatae aspernatur minima, voluptate, facilis impedit corrupti voluptatem at deserunt qui incidunt delectus sequi vitae nam quidem. Aut, corrupti consequatur? Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="m-5">
  <img src="../../img/063 span.jpg"  alt="..."  height="250px" />
    <h5 className="card-title">New produt</h5>
    <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officia beatae aspernatur minima, voluptate, facilis impedit corrupti voluptatem at deserunt qui incidunt delectus sequi vitae nam quidem. Aut, corrupti consequatur? Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="m-5">
  <img src="../../img/067 first.jpg"  alt="..."  height="250px" />
    <h5 className="card-title">New produt</h5>
    <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officia beatae aspernatur minima, voluptate, facilis impedit corrupti voluptatem at deserunt qui incidunt delectus sequi vitae nam quidem. Aut, corrupti consequatur? Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>


 </> );
}
 
export default HomePage;