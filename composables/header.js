export const useHeader = () => {
  
  const inputFoucs = () => {  
    const body = document.getElementById('body');
    const fuction = document.getElementById('function');
    fuction.classList.add('active');
    body.classList.add('activeBody');
  }

  const inputBlur = () => {
    const body = document.getElementById('body');
    const fuction = document.getElementById('function');
    fuction.classList.remove('active');
    body.classList.remove('activeBody');
  }

  const hamburgerBTN = () => {
    model.classList.add('click');
  }

  const removeHamburger = () => {
    model.classList.remove('click');
  }

  const open = () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.add('search-open');
  }

  const close = () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('search-open');
  }

  return{
    inputFoucs,
    inputBlur,
    hamburgerBTN,
    removeHamburger,
    open,
    close,
  };
}
