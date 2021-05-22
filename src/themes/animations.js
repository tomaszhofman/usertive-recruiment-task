import { gsap } from 'gsap';
import { TimelineMax } from 'gsap/gsap-core';

export const aniamtionRocket = (el) => {
  let tl = new TimelineMax();
  tl.from(el, {
    duration: 0.1,
    x: '+=3px',
    repeat: 15,
  });
  tl.from(el, {
    duration: 0.1 * 20,
    y: '+=5px',
  });

  tl.to(el, {
    duration: 2,
    y: '-=100px',
  });

  tl.to(el, {
    duration: 4,
    y: () => '-=' + document.body.offsetHeight + 'px',
    ease: 'power4',
  }).reverse(10, false);
};

export const animationSmokeRight = (el) => {
  gsap.from(el, {
    duration: 1,
    scale: 0,
    opacity: 2,
    stagger: 15 / el.length,
    x: '-=45px',
    y: '+=30px',
  });
};

export const animationSmokeLeft = (el) => {
  gsap.from(el, {
    duration: 1,
    scale: 0,
    opacity: 2,
    stagger: 15 / el.length,
    x: '+=10px',
    y: '-=5px',
  });
};
