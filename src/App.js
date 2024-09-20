import './App.css';
import header from './components/header';
import logo from './images/logo-o.png';
import man from './images/man.png';
import videoioc from './images/Frame9.png';
import recbg from './images/Rectangle1-background.jpg';
import rectop from './images/Rectangle2.jpg';
import user1 from './images/user (1).png';
import user2 from './images/user (2).png';
import user3 from './images/user (3).png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo5.png';
import logo6 from './images/logo6.png';
import logo7 from './images/logo7.png';

function App() {
  return (
    <div className="App">
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
              <figure>
                <a href='#'><img src={logo} alt="Logo" className='logo-main' /></a>
              </figure>
            </div>
            <div className='col-md-7'>
              <ul>
                <li><a>Technologies</a></li>
                <li><a>Service</a></li>
                <li><a>Domain</a></li>
                <li><a>About</a></li>
              </ul>
            </div>
            <div className='col-md-3'>
              <div className='contact-btn'>
                <a href='#'>Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='hero-banner-are'>
        <div className='container'>
          <div className='row'>
            <div className='hero-area'>
              <h1>CodeLogi<span>cx</span></h1>
              <h2>Product Engineering</h2>
              <div className='get-started'>
                <div className='get-btn'>
                  <a href='#'>Get Started</a>
                </div>
                <h5>Company</h5>
              </div>
            </div>
            <div className='banner-right-top'>
              <div className='banner-right'>
                <img src={videoioc} alt="man" />
                <img src={man} alt="man" />
              </div>
              <div className='banner-right-bottom'>
                <ul>
                  <li><img src={user1} alt="user1" /></li>
                  <li><img src={user2} alt="user2" /></li>
                  <li><img src={user3} alt="usewr3" /></li>
                </ul>
                <div className='excellent-reviews'>
                  <a href='#'>Excellent 100+ Reviews</a>
                </div>
              </div>
            </div>
          </div>
          <div className='banner-btm'>
            <div className='banner-btm-left'>
              <img src={recbg} alt="man" />
              <img src={rectop} alt="man" />
            </div>
            <div className='banner-btm-right'>
              <img src={logo2} alt="logo2" />
              <img src={logo3} alt="logo3" />
              <img src={logo4} alt="logo4" />
              <img src={logo5} alt="logo5" />
              <img src={logo6} alt="logo6" />
              <img src={logo7} alt="logo7" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
