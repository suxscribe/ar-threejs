// import { elements } from './components/base.js';

const setVh = () => {
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const startOnClick = () => {
  // Close preloader and start the show on button click
  const playButton = document.querySelector('.preloader__play');
  const arVideo = document.getElementById('arvideo');
  const preloader = document.querySelector('.preloader');

  playButton.addEventListener('click', (e) => {
    arVideo.play();
    arVideo.pause();

    // const preloader = document.querySelector('.preloader');
    preloader.classList.remove('preloader--active');

    console.log('play click');
  });
};

const endLoading = () => {
  console.log('arnftEndLoading');
  //here the nft data is fully loaded
  const preloader = document.querySelector('.preloader');
  const preloaderContent = document.querySelector('.preloader__content');

  preloader.classList.remove('preloader--halfway');
  // preloaderLabel.innerHTML = 'Все загружено';

  // Need user interaction to be able to play the video
  // preloaderContent.classList.remove('preloader__content--active');
  preloaderContent.classList.add('preloader__content--loaded');
};

// DOCUMENT READY
document.addEventListener('DOMContentLoaded', () => {
  // COMMON SCRIPTS
  setVh();
  window.addEventListener('resize', setVh); // recalc browser height on resize

  const elements = {
    preloader: document.querySelector('.preloader'),
    preloaderContent: document.querySelector('.preloader__content'),
    preloaderLabel: document.querySelector('.preloader__label'),
    playButton: document.querySelector('.preloader__play'),
    arVideo: document.getElementById('arvideo'),
  };

  const preloader = document.querySelector('.preloader');
  const preloaderContent = document.querySelector('.preloader__content');
  const preloaderLabel = document.querySelector('.preloader__label');
  const playButton = document.querySelector('.preloader__play');
  const arVideo = document.getElementById('arvideo');

  preloaderContent.classList.add('preloader__content--active');

  // ! Full Loading. Hide preloader Ready to augment
  document.addEventListener('arnftEndLoading', () => {
    endLoading();
  });

  startOnClick();

  document.addEventListener('nftTrackingLost', (e) => {
    console.log(e);
    arVideo.pause();
  });
  document.addEventListener('getMatrixGL_RH', (e) => {
    // console.log(e);
  });
  document.addEventListener('nftTrackingFound', (e) => {
    arVideo.play();

    console.log(e);
  });
});
