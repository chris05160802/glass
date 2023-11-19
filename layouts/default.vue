<script setup>
// import '~/css/header.css';

const { inputFoucs, inputBlur, hamburgerBTN, removeHamburger, open, close} = useHeader();

useHead({
//   link: [
//     {
//       rel: "stylesheet",
//       href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
//     },
//   ],
  title: "Glassnode",

});
</script>

<template>
<div id="body">
    <header>
      <div class="navbar" id="navbar">
        <nav class="nav">
            <div class="logo">
                <nuxt-link to="/">
                  <img src="https://studio.glassnode.com/images/glassnode-studio.svg" alt="">
                </nuxt-link>
            </div>
            <div class="all">
                <div class="function" id="function">
                    <div>
                        <div class="left">
                            <a href="#">
                                <i class="fa-solid fa-chevron-left"></i>
                            </a>
                        </div>
                        <div class="search" id="search">
                            <span class="search-icon">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="14px" height="40px" fill="currentColor" aria-hidden="true">
                                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                                </svg>
                            </span>
                            <input type="text" @blur="inputBlur" @click="inputFoucs" placeholder="Search" id="input">
                            <span class="keyboard">/</span>
                            <span class="clear" id="clear">Clear</span>
                            <div class="suggestion">
                                <small>Search suggestions</small>
                                <div class="suggestio-link">
                                    <a href="#">Avae</a>
                                    <a href="#">Uniswap</a>
                                    <a href="#">BTC</a>
                                    <a href="#">Derivatives</a>
                                    <a href="#">Derivatives Bitcoin</a>
                                    <a href="#">Miner Revenue</a>
                                </div>
                            </div>
                            <div class="minFast">
                                <div class="fast">
                                    <div class="navigate">
                                        <i class="fa-solid fa-arrow-up"></i>
                                        <i class="fa-solid fa-arrow-down"></i>
                                        <small>Navigate</small>
                                    </div>
                                    <div class="close">
                                        <i class="fa-solid fa-power-off"></i>
                                        <small>Close</small>
                                    </div>
                                    <div class="open">
                                        <i class="fa-solid fa-left-long"></i>
                                        <small>Open</small>
                                    </div>
                                    <div class="openTab">
                                        <i class="fa-solid fa-tablet"></i>
                                        <small>Open in new tab</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu">
                        <ul>
                            <li>
                                <a href="#" class="home">Home</a>
                            </li>
                            <li>
                                <a href="#">Charts</a>
                            </li>
                            <li>
                                <a href="#">Dashboards</a>
                            </li>
                            <li>
                                <a href="#">Workbench</a>
                            </li>
                            <li>
                                <a href="#">Alerts</a>
                            </li>
                            <li>
                                <a href="#">Insights</a>
                            </li>
                            <li>
                                <a href="#" class="more">
                                    <small>More</small>
                                    <i class="fa-solid fa-sort-down down"></i>
                                </a>
                                <div class="menu-collapse">
                                    <div class="main-collapse">
                                        <a href="#">TrandingView</a>
                                        <a href="#">Pulses</a>
                                        <a href="#">
                                            <small>Academy</small>
                                        </a>
                                        <a href="#">
                                            <small>Forum</small>
                                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                        <a href="#">
                                            <small>Documentation</small>
                                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                        <a href="#">
                                            <small>API</small>
                                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                        <a href="#">
                                            <small>Catalog</small>
                                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                        <a href="#">
                                            <small>Status</small>
                                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                        <a href="#">
                                            <small>Support</small>
                                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="popup">
                        <div class="trial">
                            <a href="#">Start free trial</a>
                        </div>
                        <div class="settings">
                            <a href="#">
                                <i class="fa-solid fa-gear"></i>
                            </a>
                            <div class="settings-items">
                                <div class="items border">
                                    <small>Dark mode</small>
                                    <div class="box">
                                        <input type="checkbox" id="switch">
                                        <label for="switch"></label>
                                    </div>
                                </div>
                                <div class="items">
                                    <small>Presenter mode</small>
                                    <div class="box">
                                        <input type="checkbox" id="switch2">
                                        <label for="switch2"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="help">
                            <a href="#">
                                <i class="fa-regular fa-message"></i>
                                <div class="help-items">
                                    <div class="min-help">
                                        <div class="title">
                                            <i class="fa-regular fa-message"></i>
                                            <p>Help us improve</p>
                                        </div>
                                        <small>Leave feedback about the Studio product and let us know how we can do better</small>
                                        <a href="#" class="giveBtn">Give feedback</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="login">
                            <nuxt-link to="/login">Log in</nuxt-link>
                        </div>
                    </div>
                    <div class="model" id="model">
                        <div class="search-btn" id="search-btn" @click="open">
                            <a href="#">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="14px" height="40px" fill="currentColor" aria-hidden="true">
                                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="trial">
                            <a href="#">Start free trial</a>
                        </div>
                        <div class="hamburger" id="hamburger" @click="hamburgerBTN">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
                        <div class="model-list" id="model-list">
                            <a class="button" href="#" @click="removeHamburger">
                                <i class="fa-solid fa-x"></i>
                                <p>Menu</p>
                            </a>
                            <div class="list">
                                <a href="#">Home</a>
                                <a href="#">Charts</a>
                                <a href="#">Dashboards</a>
                                <a href="#">Workbench</a>
                                <a href="#">TradingView</a>
                                <a href="#">Alerts</a>
                                <a href="#">Pulses</a>
                            </div>
                            <div class="list">
                                <a href="#">Pricing</a>
                                <a href="#">Catalog</a>
                                <a href="#">Videos</a>
                                <a href="#">Documentation</a>
                                <a href="#">Insights</a>
                                <a href="#">Forum</a>
                                <a href="#">Academy</a>
                                <a href="#">Status</a>
                                <a href="#">Support</a>
                                <a href="#">Contact</a>
                                <a href="#">
                                    Dark Mode
                                    <i class="fa-regular fa-moon"></i>
                                </a>
                                <a href="#">
                                    Presentation Mode
                                    <i class="fa-solid fa-arrow-trend-up"></i>
                                </a>
                                <a href="#">Give Feedback</a>
                            </div>
                            <div class="Remaining-btn">
                                <div class="enter">
                                    <nuxt-link to="/login">Log in</nuxt-link>
                                    <nuxt-link to="/signup">Sign up</nuxt-link>
                                </div>
                                <div class="start">
                                    <a href="#">Start free trial</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="search-web">
            <span class="search-icon">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="14px" height="40px" fill="currentColor" aria-hidden="true">
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                </svg>
            </span>
            <div class="flex">
                <input type="text" placeholder="Search">
                <a href="#" id="back" @click="close">
                    <i class="fa-solid fa-x"></i>
                </a>
            </div>
            <div class="suggestion">
                <small>Search suggestions</small>
                <div class="suggestio-link">
                    <a href="#">Avae</a>
                    <a href="#">Uniswap</a>
                    <a href="#">BTC</a>
                    <a href="#">Derivatives</a>
                    <a href="#">Derivatives Bitcoin</a>
                    <a href="#">Miner Revenue</a>
                </div>
            </div>
        </div>
    </div>
    </header>
    <div class="container">
      <slot />
    </div>
    <footer>
        <div class="other">
            <ul>
                <li class="links">
                    <a href="#">Home</a>
                </li>
                <li class="links">
                    <a href="#">Pricing</a>
                </li>
                <li class="links">
                    <a href="#">Catalog</a>
                </li>
                <li class="links">
                    <a href="#">Insights</a>
                </li>
                <li class="links">
                    <a href="#">Forum</a>
                </li>
                <li class="links">
                    <a href="#">Affiliate</a>
                </li>
                <li class="links">
                    <a href="#">Documentation</a>
                </li>
                <li class="links">
                    <a href="#">Academy</a>
                </li>
                <li class="links">
                    <a href="#">Status</a>
                </li>
                <li class="links">
                    <a href="#">Changelog</a>
                </li>
                <li class="links">
                    <a href="#">Support</a>
                </li>
                <li class="links">
                    <a href="#">Careers</a>
                </li>
                <li class="links">
                    <a href="#">Contact</a>
                </li>
                <li class="links">
                    <a href="#">Privacy Notice</a>
                </li>
                <li class="links">
                    <a href="#">Terms & Conditions</a>
                </li>
                <li class="links">
                    <a href="#">Impressum</a>
                </li>
                <li class="links">
                    <a href="#">Legal</a>
                </li>
            </ul>
        </div>
        <div class="app">
            <a href="#">
                <i class="fa-brands fa-twitter fa-2xs"></i>
            </a>
            <a href="#">
                <i class="fa-brands fa-telegram fa-2xs"></i>
            </a>
            <a href="#">
                <i class="fa-brands fa-instagram fa-2xs"></i>
            </a>
            <a href="#">
                <i class="fa-brands fa-youtube fa-2xs"></i>
            </a>
        </div>
        <div class="content">
            <p>© 2023 Glassnode. All Rights Reserved.</p>
        </div>
    </footer>
</div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, Helvetica, Arial, sans-serif;
}

i{
    font-family: "Font Awesome 6 Free";
}

.app a i{
    font-family: "Font Awesome 6 Brands";
}

.navbar{
    width: 100%;
    height: 70px;
    top: 0;
    position: fixed;
    background-color: #fff;
}

.navbar .nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
}

.navbar .nav .logo{
    padding: 0px 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.navbar .nav .logo img{
    width: 160px;
    height: 20px;
}

.navbar .nav .all{
    width: 100%;
}

.navbar .nav .all .function{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 8px;
}

.navbar .nav .all .function .left{
    position: absolute;
    left: 36px;
    top: 30%;
    display: none;
    cursor: pointer;
    z-index: 2000;
}

.navbar .nav .all .function .search{
    position: relative;
}

.navbar .nav .all .function .search .search-icon{
    position: absolute;
    top: 0;
    left: 10px;
    opacity: .5;
    transition: .3s;
}

.navbar .nav .all .function .search input{
    width: 200px;
    height: 40px;
    background: #f7f8fa;
    outline: none;
    border: none;
    padding-left: 32px;
    transition: .3s;
}

.navbar .nav .all .function .search input::placeholder{
    opacity: .5;
}

.navbar .nav .all .function .search .keyboard{
    position: absolute;
    top: 16%;
    right: 26px;
    padding: 4px;
    background: #edeff2;
    opacity: .5;
}

.navbar .nav .all .function .search .clear{
    display: none;
    transition: .3s;
    cursor: pointer;
    z-index: 200;
}

.navbar .nav .all .function .search .clear:hover{
    color: rgba(0, 0, 0, 0.88);
    background-color: rgba(0, 0, 0, 0.06);
}

.navbar .nav .all .function .search .suggestion{
    position: absolute;
    left: 48px;
    width: 0;
    padding: 24px;
    background: #fff;
    transition: .5s;
    display: none;
}

.navbar .nav .all .function .search .suggestion small{
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .5px;
    color: #000000E0;
}

.navbar .nav .all .function .search .suggestion .suggestio-link{
    margin-top: 20px;
}

.navbar .nav .all .function .search .suggestion .suggestio-link a{
    font-size: 12px;
    color: #000000E0;
    padding: 10px;
    background: #f7f8fa;
    margin-right: 8px;
    text-decoration: none;
    transition: .1s;
}

.navbar .nav .all .function .search .suggestion .suggestio-link a:hover{
    border: 1px solid #000;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.88);
}

.navbar .nav .all .function .search .minFast{
    display: none;
}

.navbar .nav .all .function .search .minFast .fast{
    position: absolute;
    left: 48px;
    top: 145px;
    background-color: #f7f8fa;
    width: 800px;
    padding: 8px 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.navbar .nav .all .function .search .minFast .fast .navigate,
.navbar .nav .all .function .search .minFast .fast .close,
.navbar .nav .all .function .search .minFast .fast .open,
.navbar .nav .all .function .search .minFast .fast .openTab{
    color: #5a5a5a;
    font-size: 14px;
    margin-right: 24px;
}

.navbar .nav .all .function .search .minFast .fast .navigate i,
.navbar .nav .all .function .search .minFast .fast .close i,
.navbar .nav .all .function .search .minFast .fast .open i,
.navbar .nav .all .function .search .minFast .fast .openTab i{
    height: 20px;
    font-size: .75rem;
    padding: 4px;
    background: #edeff2;
    border: 1px solid #edeff2;
    border-radius: 2px;
    margin-right: 4px;
}

.navbar .nav .all .function .menu{
    margin-left: 20px;
    position: relative;
}

.navbar .nav .all .function .menu ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    gap: 1rem;
}

.navbar .nav .all .function .menu ul li a{
    color: #808080;
    font-size: 14px;
    text-decoration: none;
    font-weight: 500;
    transition: .3s;
}

.navbar .nav .all .function .menu ul li .home{
    color: #333;
}

.navbar .nav .all .function .menu ul li a:hover{
    color: #333;
}

.navbar .nav .all .function .menu ul li .more{
    display: flex;
    flex-direction: row;
    align-items: center;

}

.navbar .nav .all .function .menu ul li .more small{
    font-size: 14px;
    font-weight: 500;
}

.navbar .nav .all .function .menu ul li .down{
    margin-left: 4px;
    margin-bottom: 4px;
}

.navbar .nav .all .function .menu ul li .menu-collapse{
    display: none;
    height: 0;
    transition: 2s;
}

.navbar .nav .all .function .menu ul li .more:hover ~ .menu-collapse,
.navbar .nav .all .function .menu ul li .more:focus ~ .menu-collapse{
    display: block;
    height: 100%;
}


.navbar .nav .all .function .menu ul li .menu-collapse:hover{
    display: block;
    height: 100%;
}

.navbar .nav .all .function .menu ul li .menu-collapse .main-collapse{
    position: absolute;
    left: 260px;
    background: #fff;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4px 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar .nav .all .function .menu ul li .menu-collapse .main-collapse a{
    padding: 10px 8px;
}

.navbar .nav .all .function .menu ul li .menu-collapse .main-collapse a:hover{
    background-color: #F5F5F5;
}

.navbar .nav .all .function .menu ul li .menu-collapse .main-collapse a small{
    margin-right: 4px;
}

.navbar .nav .all .function .menu ul li .menu-collapse .main-collapse a,
.navbar .nav .all .function .menu ul li .menu-collapse .main-collapse a small{
    font-size: 14px;
    font-weight: 500;
    color: #333;
}

.navbar .nav .all .function .popup{
    position: relative;
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.navbar .nav .all .function .popup a{
    font-size: 14px;
    text-decoration: none;
    margin: 4px 8px;
    color: #1a1a1a;
    font-weight: 400;
}

.navbar .nav .all .function .popup .trial a{
    color: #fff;
    background: #1a1a1a;
    border: 1px solid #1a1a1a;
    border-radius: 3px;
    padding: 6px 15px;
}

.navbar .nav .all .function .popup .settings .settings-items{
    display: none;
    position: absolute;
    top: 20px;
    left: -24px;
    width: 180px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 4px 0;
    transition: 2s;
}

.navbar .nav .all .function .popup .settings .settings-items:hover{
    display: block;
}

.navbar .nav .all .function .popup .settings a:hover ~ .settings-items,
.navbar .nav .all .function .popup .settings a:focus ~ .settings-items{
    display: block;
}

.navbar .nav .all .function .popup .settings .settings-items .items{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 8px;
}

.navbar .nav .all .function .popup .settings .settings-items .items:hover{
    background-color: #f5f5f5;
}

.navbar .nav .all .function .popup .settings .settings-items .items small{
    font-size: 14px;
}

/* settings btn*/
#switch{
    display: none;
}
  
#switch + label{
    position: relative;
    display: inline-block;
    width: 30px;
    height: 15px;
    box-shadow: 0 0 0 2px #808080;
    border-radius: 30px;
    background-color: #808080;
    overflow: hidden;
    transition: all .3s;
}
  
#switch + label::after{
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: ' ';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    transition: all .3s;
}
  
#switch:checked + label{
    box-shadow: 0 0 0 2px #333;
    background-color: #333;
}
  
#switch:checked + label::after{
    transform: translateX(15px);
}

#switch2{
    display: none;
}
  
#switch2 + label{
    position: relative;
    display: inline-block;
    width: 30px;
    height: 15px;
    box-shadow: 0 0 0 2px #808080;
    border-radius: 30px;
    background-color: #808080;
    overflow: hidden;
    transition: all .3s;
}
  
#switch2 + label::after{
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: ' ';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    transition: all .3s;
}
  
#switch2:checked + label{
    box-shadow: 0 0 0 2px #333;
    background-color: #333;
}
  
#switch2:checked + label::after{
    transform: translateX(15px);
}
/* settings btn*/

.navbar .nav .all .function .popup .help .help-items{
    display: none;
    position: absolute;
    background: #fff;
    width: 300px;
    left: -40%;
    padding: 30px 20px;
}

.navbar .nav .all .function .popup .help .help-items .min-help{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.navbar .nav .all .function .popup .help .help-items .min-help .title{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
}

.navbar .nav .all .function .popup .help .help-items .min-help .title i{
    font-size: 20px;
    margin-right: 8px;
}

.navbar .nav .all .function .popup .help .help-items .min-help .title p{
    font-size: 20px;
    font-weight: 600;
    line-height: 12px;
}

.navbar .nav .all .function .popup .help .help-items .min-help small{
    color: #808080;
    font-size: 14px;
    line-height: 20px;
}

.navbar .nav .all .function .popup .help .help-items .min-help .giveBtn{
    margin-top: 24px;
    width: 100%;
    text-align: center;
    background-color: #1a1a1a;
    color: #F5F5F5;
    border: 1px solid #1a1a1a;
    border-radius: 4px;
    padding: 8px 0;
}

.navbar .nav .all .function .popup .help a:hover ~ .help-items,
.navbar .nav .all .function .popup .help a:focus ~ .help-items{
    display: block;
}

/* search click */
.navbar .nav .all .function .search input:focus{
    width: 800px;
    border: 1px solid #000;
    margin-left: 48px;
}

.navbar .nav .all .function .search input:focus ~ .keyboard{
    display: none;
}

.navbar .nav .all .function .search input:focus ~ .clear{
    position: absolute;
    top: 16%;
    right: 26px;
    padding: 6px 8px;
    font-weight: 400;
    font-size: 14px;
    opacity: .4;
    display: block;
}

.navbar .nav .all .active{
    margin-left: 24px;
}

.navbar .nav .all .active .search .search-icon{
    left: 60px;
}

.navbar .nav .all .active .left{
    display: block;
    cursor: pointer;
}

.navbar .nav .all .function .search input:focus ~ .suggestion{
    width: 800px;
    display: block;
}

.navbar .nav .all .function .search input:focus ~ .minFast{
    display: block;
}

.navbar .nav .all .active .menu{
    transform: translateX(130%);
}
/* search click */

.navbar .nav .all .function .model{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.navbar .nav .all .function .model .search-btn{
    position: relative;
    margin: 20px;
    display: none;
}

.navbar .nav .all .function .model .search-btn{
    text-decoration: none;
    color: #1a1a1a;
}

.navbar .nav .all .function .model .trial{
    margin-right: 20px;
    display: none;
}

.navbar .nav .all .function .model .trial a{
    color: #fff;
    background: #1a1a1a;
    border: 1px solid #1a1a1a;
    border-radius: 3px;
    padding: 6px 15px;
    text-decoration: none;
}

.navbar .nav .all .function .model .hamburger{
    display: none;
    cursor: pointer;
    margin-right: 16px;
}

.navbar .nav .all .function .model .hamburger .bar{
    display: block;
	width: 20px;
	height: 2px;
	margin: 4px auto;
	transition: all 0.3s ease-in-out;
	-webkit-transation: all 0.3s ease-in-out;
	background: #333;
}

.navbar .nav .all .function .model .model-list{
    position: absolute;
    top: -16px;
    right: 0;
    background: #333;
    width: 300px;
    height: 680px;
    padding: 28px 0;
    overflow: scroll;
    transform: translateX(100%);
    transition: .3s;
}

.navbar .nav .all .function .model .model-list .button{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 24px;
    cursor: pointer;
    font-size: 14px;
}

.navbar .nav .all .function .model .model-list .button i{
    color: #fff;
}

.navbar .nav .all .function .model .model-list .button p{
    color: #808080;
    margin-left: 8px;
}

.navbar .nav .all .function .model .model-list .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
    padding: 16px;
}

.navbar .nav .all .function .model .model-list .list a{
    text-decoration: none;
    color: #808080;
    margin-bottom: 8px;
    line-height: 20px;
}

.navbar .nav .all .function .model .model-list .Remaining-btn .enter{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;
}

.navbar .nav .all .function .model .model-list .Remaining-btn .enter a{
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #F5F5F5;
    padding: 7px 15px;
    border: 1px solid #f5f5f5;
    border-radius: 2px;
    margin: 6px;
    transition: .3s;
}

.navbar .nav .all .function .model .model-list .Remaining-btn .enter a:hover{
    color: #1a1a1a;
    border-color: #1a1a1a;
    background: #f5f5f5;
}

.navbar .nav .all .function .model .model-list .Remaining-btn .start{
    text-align: center;
    display: none;
    margin: 10px;
}

.navbar .nav .all .function .model .model-list .Remaining-btn .start a{
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    padding: 7px 15px;
    border: 1px solid #f5f5f5;
    border-radius: 2px;
    margin: 6px;
    transition: .3s;
    background: #f5f5f5;
    transition: .3s;
}

.navbar .nav .all .function .model .model-list .Remaining-btn .start a:hover{
    border: none;
}

/* model btn */
.navbar .nav .all .function .click .model-list{
    transform: translateX(0%);
}
/* model btn */

.container{
    width: 100%;
    height: 1000px;
    background: #edeff2;
}

footer{
    padding: 32px;
    background: #333;
}

footer .other{
    margin-bottom: 12px;
}

footer .other ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;
}

footer .other ul .links{
    padding-right: 16px;
}

footer .other ul .links a{
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
}

footer .other ul .links a:hover{
    text-decoration: underline;
}

footer .app{
    margin-bottom: 12px;
}

footer .app a i{
    color: #fff;
    padding-right: 8px;
}

footer .content p{
    color: #A0A0A0;
    font-size: 12px;
    font-weight: 500;
}

.navbar .search-web{
    background: #fff;
    width: 100%;
    height: 1100px;
    position: absolute;
    top: 0;
    display: none;
}

.navbar .search-web .search-icon{
    position: absolute;
    top: 16px;
    left: 24px;
    opacity: .5;
    transition: .3s;
}

.navbar .search-web .flex{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    border-bottom: 1px solid #A0A0A0;
}

.navbar .search-web .flex input{
    width: 100%;
    height: 40px;
    background: #f7f8fa;
    outline: none;
    border: 1px solid #1a1a1a;
    padding-left: 32px;
    transition: .3s;
}

.navbar .search-web .flex input::placeholder{
    opacity: .5;
}

.navbar .search-web .flex a{
    padding: 10px 20px;
    text-decoration: none;
    color: #1a1a1a;
}

.navbar .search-web .flex a:hover{
    background-color: #A0A0A0;
}

.navbar .search-web .suggestion{
    padding: 24px;
    background: #fff;
    transition: .5s;
}

.navbar .search-web .suggestion small{
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .5px;
    color: #000000E0;
}

.navbar .search-web .suggestion .suggestio-link{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
}

.navbar .search-web .suggestion .suggestio-link a{
    font-size: 12px;
    color: #000000E0;
    padding: 10px;
    background: #f7f8fa;
    margin-right: 8px;
    text-decoration: none;
    transition: .1s;
    margin-bottom: 16px;
}

.navbar .search-web .suggestion .suggestio-link a:hover{
    border: 1px solid #000;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.88);
}

/* search btn */
.search-open .search-web{
    display: block;
}
/* search btn */

@media screen and (max-width: 1120px){
    .navbar .nav .all .function .search input:focus{
        max-width: 600px;
    }

    .navbar .nav .all .function .search input:focus ~ .suggestion{
        max-width: 600px;
        display: block;
    }

    .navbar .nav .all .function .search .minFast{
        display: none;
    }

    .navbar .nav .all .function .search input:focus ~ .minFast{
        display: none;
    }

    .navbar .nav .all .function .menu{
        display: none;
    }

    .navbar .nav .all .function .popup{
        display: none;
    }

    .navbar .nav .all .active .model{
        transform: translateX(130%);
    }

    .navbar .nav .all .function .model .trial{
        display: block;
    }

    .navbar .nav .all .function .model .hamburger{
        display: block;
    }
}

@media screen and (max-width: 888px){
    .navbar .nav .all .function .search input:focus{
        max-width: 400px;
    }

    .navbar .nav .all .function .search .suggestion .suggestio-link{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .navbar .nav .all .function .search .suggestion .suggestio-link a{
        margin-bottom: 12px;
    }

    .navbar .nav .all .function .search input:focus ~ .suggestion{
        max-width: 400px;
        display: block;
    }
}

@media screen and (max-width: 768px){
    .navbar .nav .all .function .search{
        display: none;
    }

    .navbar .nav .all .function .model .model-list{
        padding: 40px 0;
        top: 0px;
    }

    .navbar .nav .all .function .model .search-btn{
        display: block;
    }

    footer{
        padding: 16px;
    }

    footer .other ul{
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }

    footer .other ul .links a{
        line-height: 34px;
    }
}

@media screen and (max-width: 500px){
    .navbar .nav .all .function .model .model-list .Remaining-btn .start{
        display: block;
    }

    .navbar .nav .all .function .model .trial{
        display: none;
    }
}
</style>


