import styled from '@emotion/styled';

export const AnimatedBg = styled.div`
  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #b3b3b3;
  overflow: hidden;
  z-index: -999;

  & > span {
    width: 20vmin;
    height: 20vmin;
    border-radius: 20vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 45;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    z-index: -999;
  }

  & > span:nth-child(0) {
    color: #f1dfdf;
    top: 60%;
    left: 51%;
    animation-duration: 21s;
    animation-delay: -1s;
    transform-origin: -16vw 6vh;
    box-shadow: -40vmin 0 5.552039292848096vmin currentColor;
  }
  & > span:nth-child(1) {
    color: #f1dfdf;
    top: 30%;
    left: 49%;
    animation-duration: 42s;
    animation-delay: -26s;
    transform-origin: 4vw -15vh;
    box-shadow: -40vmin 0 5.136981560745536vmin currentColor;
  }
  & > span:nth-child(2) {
    color: #f9d7ee;
    top: 7%;
    left: 88%;
    animation-duration: 47s;
    animation-delay: -46s;
    transform-origin: 22vw -7vh;
    box-shadow: 40vmin 0 5.587932959820823vmin currentColor;
  }
  & > span:nth-child(3) {
    color: #f1dfdf;
    top: 95%;
    left: 14%;
    animation-duration: 29s;
    animation-delay: -10s;
    transform-origin: 1vw 7vh;
    box-shadow: 40vmin 0 5.836287494378587vmin currentColor;
  }
  & > span:nth-child(4) {
    color: #f1dfdf;
    top: 75%;
    left: 52%;
    animation-duration: 53s;
    animation-delay: -10s;
    transform-origin: 4vw 1vh;
    box-shadow: 40vmin 0 5.652264082276075vmin currentColor;
  }
  & > span:nth-child(5) {
    color: #f9d7ee;
    top: 1%;
    left: 65%;
    animation-duration: 23s;
    animation-delay: -43s;
    transform-origin: 16vw -2vh;
    box-shadow: -40vmin 0 5.3813203291572105vmin currentColor;
  }
  & > span:nth-child(6) {
    color: #f9d7ee;
    top: 30%;
    left: 18%;
    animation-duration: 53s;
    animation-delay: -11s;
    transform-origin: 19vw 8vh;
    box-shadow: 40vmin 0 5.041775285373178vmin currentColor;
  }
  & > span:nth-child(7) {
    color: #ffffff;
    top: 53%;
    left: 18%;
    animation-duration: 38s;
    animation-delay: -26s;
    transform-origin: -12vw -11vh;
    box-shadow: -40vmin 0 5.185755530085608vmin currentColor;
  }
  & > span:nth-child(8) {
    color: #f1dfdf;
    top: 73%;
    left: 5%;
    animation-duration: 28s;
    animation-delay: -10s;
    transform-origin: -8vw 19vh;
    box-shadow: 40vmin 0 5.286217305497046vmin currentColor;
  }
  & > span:nth-child(9) {
    color: #f9d7ee;
    top: 96%;
    left: 2%;
    animation-duration: 18s;
    animation-delay: -41s;
    transform-origin: 8vw 3vh;
    box-shadow: -40vmin 0 5.688292456325995vmin currentColor;
  }
  & > span:nth-child(10) {
    color: #ffffff;
    top: 17%;
    left: 26%;
    animation-duration: 8s;
    animation-delay: -34s;
    transform-origin: -8vw -14vh;
    box-shadow: 40vmin 0 5.255421415783944vmin currentColor;
  }
  & > span:nth-child(11) {
    color: #f1dfdf;
    top: 56%;
    left: 65%;
    animation-duration: 11s;
    animation-delay: -1s;
    transform-origin: -15vw 18vh;
    box-shadow: -40vmin 0 5.061691272155773vmin currentColor;
  }
  & > span:nth-child(12) {
    color: #f9d7ee;
    top: 100%;
    left: 84%;
    animation-duration: 18s;
    animation-delay: -22s;
    transform-origin: 4vw -15vh;
    box-shadow: 40vmin 0 5.295637597533995vmin currentColor;
  }
  & > span:nth-child(13) {
    color: #f9d7ee;
    top: 59%;
    left: 43%;
    animation-duration: 16s;
    animation-delay: -13s;
    transform-origin: 0vw 9vh;
    box-shadow: -40vmin 0 5.583914669310113vmin currentColor;
  }
  & > span:nth-child(14) {
    color: #ffffff;
    top: 47%;
    left: 77%;
    animation-duration: 47s;
    animation-delay: -28s;
    transform-origin: 0vw 0vh;
    box-shadow: -40vmin 0 5.463188581611025vmin currentColor;
  }
  & > span:nth-child(15) {
    color: #f1dfdf;
    top: 74%;
    left: 85%;
    animation-duration: 25s;
    animation-delay: -27s;
    transform-origin: 2vw 15vh;
    box-shadow: -40vmin 0 5.276792530238923vmin currentColor;
  }
  & > span:nth-child(16) {
    color: #f9d7ee;
    top: 75%;
    left: 65%;
    animation-duration: 22s;
    animation-delay: -7s;
    transform-origin: -5vw -5vh;
    box-shadow: 40vmin 0 5.943243378591695vmin currentColor;
  }
  & > span:nth-child(17) {
    color: #f1dfdf;
    top: 52%;
    left: 74%;
    animation-duration: 32s;
    animation-delay: -16s;
    transform-origin: 25vw -6vh;
    box-shadow: -40vmin 0 5.509849444781768vmin currentColor;
  }
  & > span:nth-child(18) {
    color: #ffffff;
    top: 64%;
    left: 79%;
    animation-duration: 35s;
    animation-delay: -26s;
    transform-origin: -20vw 17vh;
    box-shadow: 40vmin 0 5.43824299949107vmin currentColor;
  }
  & > span:nth-child(19) {
    color: #ffffff;
    top: 46%;
    left: 42%;
    animation-duration: 19s;
    animation-delay: -2s;
    transform-origin: -2vw 6vh;
    box-shadow: 40vmin 0 5.242544748016776vmin currentColor;
  }
`;

export const GradientBackground = styled.div`
  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #b3b3b3;
  overflow: hidden;
  z-index: -999;
  background: linear-gradient(90deg, #d9ccf0, #e2a9ba, #cfafaf);
  background-size: 180% 180%;
  animation: gradient-animation 12s ease infinite;
`;
