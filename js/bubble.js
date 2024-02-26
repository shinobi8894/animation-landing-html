const button = document.querySelector(".box");
const buttonText = document.querySelector(".btn-text");
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const img = document.querySelector('img');
const rwdMenu = document.querySelector('.rwd-menu');

const litepaper = document.querySelector('.litepaper');
const security_audit = document.querySelector('.security_audit');
const etherscan = document.querySelector('.etherscan');

button.addEventListener('mouseover', () => {
    addOverlay();
    animateElement();
    buttonText.innerHTML="Comming Soon"
})

button.addEventListener('mouseleave', () => {
    removeOverlay();
    removeElement();
    buttonText.innerHTML="Buy on Uniswap"
})

menu.childNodes.forEach((item, key) => {
    item.addEventListener('mouseover', () => {
      addOverlay();
    })
    item.addEventListener('mouseleave', () => {
        removeOverlay();
    })
})

litepaper.addEventListener('mouseover', () => {
    litepaper.innerHTML +=" ( Comming Soon )";
})

security_audit.addEventListener('mouseover', () => {
    security_audit.innerHTML +=" ( Comming Soon )";
})

etherscan.addEventListener('mouseover', () => {
    etherscan.innerHTML +=" ( Comming Soon )";
})

litepaper.addEventListener('mouseleave', () => {
    litepaper.innerHTML ="Litepaper";
})

security_audit.addEventListener('mouseleave', () => {
    security_audit.innerHTML ="Audit";  
})

etherscan.addEventListener('mouseleave', () => {
    etherscan.innerHTML ="Etherscan";
})

rwdMenu.addEventListener('click', () => {
    menu.classList.toggle('toggle-menu')
})


const animateElement = () => {
    img.style.boxShadow="0 0 2px 0 rgba(238, 170, 51, 0.1), 0 0 4px 0 rgba(238, 170, 51, 0.2), 0 0 6px 0 rgba(238, 170, 51, 0.3), 0 0 8px 0 rgba(238, 170, 51, 0.4), 0 0 12px 0 rgba(238, 170, 51, 0.5), 0 0 18px 0 rgba(238, 170, 51, 0.6), 0 0 4px 0 rgba(238, 170, 51, 0.7)"
}

const removeElement = () => {
    img.style.boxShadow="0 0 2px 0 rgba(73, 115, 255, .1), 0 0 4px 0 rgba(73, 115, 255, .2), 0 0 6px 0 rgba(73, 115, 255, .3), 0 0 8px 0 rgba(73, 115, 255, .4), 0 0 12px 0 rgba(73, 115, 255, .5), 0 0 18px 0 rgba(73, 115, 255, .6)"
}

const addOverlay = () => {
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "body:after {background-image: linear-gradient(180deg, #072c64, 5%, #03375a, 50%, #000000) !important;opacity:1;}";
}

const removeOverlay = () => {
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "body:after {opacity:0;}";
}