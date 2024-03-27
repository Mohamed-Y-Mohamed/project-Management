import React,{useEffect} from "react";
import image1 from "../assets/hero-bg.jpg";
import "./style/main.css";
import "./style/main";
import image2 from "../assets/features-light-1.jpg";
import image3 from "../assets/features-light-2.jpg";
import image4 from "../assets/features-light-3.jpg";
import portfolioImage1 from '../assets/masonry-portfolio/masonry-portfolio-1.jpg';
import portfolioImage2 from '../assets/masonry-portfolio/masonry-portfolio-2.jpg';
import portfolioImage3 from '../assets/masonry-portfolio/masonry-portfolio-3.jpg';
import portfolioImage4 from '../assets/masonry-portfolio/masonry-portfolio-4.jpg';
import portfolioImage5 from '../assets/masonry-portfolio/masonry-portfolio-5.jpg';
import portfolioImage6 from '../assets/masonry-portfolio/masonry-portfolio-6.jpg';
import portfolioImage7 from '../assets/masonry-portfolio/masonry-portfolio-7.jpg';
import portfolioImage8 from '../assets/masonry-portfolio/masonry-portfolio-8.jpg';
import portfolioImage9 from '../assets/masonry-portfolio/masonry-portfolio-9.jpg';
import AOS from 'aos';
import GLightbox from 'glightbox';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';

function Home() {
  useEffect(() => {
    // Preloader removal
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.addEventListener('load', () => preloader.remove());
    }

    // Initialize AOS
    AOS.init();

    // Initialize GLightbox
    const glightbox = GLightbox({ selector: '.glightbox' });

    // PureCounter initialization if needed
    // new PureCounter(); // Assuming PureCounter is properly imported or globally available

  }, []);
      return(
<main id="main">
<section id="hero" class="hero">

<img src={image1} alt="" data-aos="fade-in"/>

<div class="container">
  <div class="row">
    <div class="col-lg-10">
      <h2 data-aos="fade-up" data-aos-delay="100">Welcome to Our Website</h2>
      <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap</p>
    </div>
    <div class="col-lg-5">
      <form action="#" class="sign-up-form d-flex" data-aos="fade-up" data-aos-delay="300">
        <input type="text" class="form-control" placeholder="Enter email address"/>
        <input type="submit" class="btn btn-primary" value="Sign up"/>
      </form>
    </div>
  </div>
</div>
</section>
{/* <!-- Services Section - Home Page --> */}
    <section id="services" class="services">

      {/* <!--  Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="100">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-briefcase"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Lorem Ipsum</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="200">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-card-checklist"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Dolor Sitema</a></h4>
                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="300">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-bar-chart"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Sed ut perspiciatis</a></h4>
                <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="400">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-binoculars"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Magni Dolores</a></h4>
                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="500">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-brightness-high"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Nemo Enim</a></h4>
                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="600">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-calendar4-week"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Eiusmod Tempor</a></h4>
                <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

        </div>

      </div>

    </section>
    {/* <!-- End Services Section --> */}

    {/* <!-- Features Section - Home Page --> */}
    <section id="features" class="features">

      {/* <!--  Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div class="container">

        <div class="row gy-4 align-items-center features-item">
          <div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h3>Corporis temporibus maiores provident</h3>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <a href="#" class="btn btn-get-started">Get Started</a>
          </div>
          <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
            <div class="image-stack">
              <img src={image2} alt="" class="stack-front"/>
              <img src={image3} alt="" class="stack-back"/>
            </div>
          </div>
        </div>
        {/* <!-- Features Item --> */}

        <div class="row gy-4 align-items-stretch justify-content-between features-item ">
          <div class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
            <img src={image4} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
            <h3>Sunt consequatur ad ut est nulla</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
              <li><i class="bi bi-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i class="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i class="bi bi-check"></i> <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.</li>
            </ul>
            <a href="#" class="btn btn-get-started align-self-start">Get Started</a>
          </div>
        </div>
        {/* <!-- Features Item --> */}

      </div>

    </section>
    {/* <!-- End Features Section --> */}

    {/* <!-- Portfolio Section - Home Page --> */}
    <section id="portfolio" class="portfolio">

      {/* <!--  Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div class="container">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Card</li>
            <li data-filter=".filter-branding">Web</li>
            </ul>
          {/* <!-- End Portfolio Filters --> */}

          <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={portfolioImage1} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href={portfolioImage1} title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={portfolioImage2} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href={portfolioImage2} title="Product 1" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={portfolioImage3} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href={portfolioImage3} title="Branding 1" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={portfolioImage4} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href={portfolioImage4} title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={portfolioImage5} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Product 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href={portfolioImage5} title="Product 2" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={portfolioImage6} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Branding 2</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href={portfolioImage6} title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={portfolioImage7} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href={portfolioImage7} title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={portfolioImage8} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Product 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href={portfolioImage8} title="Product 3" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={portfolioImage9} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Branding 3</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href={portfolioImage9} title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            {/* <!-- End Portfolio Item --> */}

          </div>
          {/* <!-- End Portfolio Container --> */}

        </div>

      </div>

    </section>
    {/* <!-- End Portfolio Section --> */}
</main>
    );
}
export default  Home;