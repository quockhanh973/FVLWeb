class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <a href="./index.html">
            <img src="./images/logo/1. FVL 2022_logo updated 20220621.png" alt="" id="logo-FVL">
            <img src="./images/logo/2. TPL logo_2017.png" alt="" id="logo-TPL">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./about_us.html">About US</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./solutions.html">Solutions</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./outsourcing.html">Outsourcing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./workfromhome.html">Work From Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./career.html">Careers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
      `;
  }
}

customElements.define('header-component', Header);


class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="footer">
      <div class="container footer_info">
        <div class="row">
          <div class="info">
            <div class="row">
              <div class="col-md-5">
                <h4 class="company_name">First Virtue LLC & Transcend People LLC</h4>
                <p><i class="fa-solid fa-location-dot footer_info-icon"></i><span>Address:</span> 78/2A Binh Loi, Ward 13, Binh Thanh District, HCMC, Vietnam.</p>
                <p><i class="fa-solid fa-phone-volume footer_info-icon"></i><span>VoIP:</span> +1 (650) 472 2233 (USA)</p>
                <P><i class="fa-solid fa-phone footer_info-icon"></i><span>Phone:</span> + (84) 28 3948 4086 (Vietnam)</P>
              </div>
              <div class="col-md-2">
                <h4>Our Careers</h4>
                <p>You can click button to apply your information for our jobs</p>
                <div class="footer_btn-apply">
                    <a href="career.html" target="_blank">APPLY NOW</a>
                </div>
              </div>
              <div class="col-md-3">
                <h4>Social Network Link</h4>
                <div class="footer_logo-facebook row">
                  <div class="col-md-12 footer_link-FVL">
                     <a href="https://www.facebook.com/1stvirtue.company/" target="_blank"> <img src="./images/logo/square-facebook.png" alt="" > First Virtue Limited </a>
                  </div>
                  <div class="col-md-12 footer_link-TPL">
                    <a href="https://www.facebook.com/FVLTPL" target="_blank"><img src="./images/logo/facebook.png" alt="" > Transcend People Limited</a>
                  </div>
                  <div class="col-md-12 footer_link-turkeydash">
                    <a href="https://www.facebook.com/turkeydashvietnam" target="_blank"><img src="./images/logo/turkeydash.jpg" alt="" > Turkey Dash VietNam</a>
                  </div>
                </div>
              </div>
              
              <div class="col-md-2">
                  <div class="footer_img-iso">
                    <img src="./images/logo/iso.png" alt="">
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="row copyright">
      <div class="col-md-12"><p><span>First Virtue Limited Liability Company & Transcend People Limited Liability Company Copyright © 2008 - 2023 •</span> <a href="./privacy_policy.html"><span>Privacy Policy</span></a></p></div>
    </div>
  </div>
      `;
  }
}

customElements.define('footer-component', Footer);