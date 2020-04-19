let supported;
let prefix;

const d = document.body || document.documentElement;
if ('style' in d) {
  if ('transition' in d.style) {
    supported = true;
  } else if ('webkitTransition' in d.style) {
    supported = true;
    prefix = 'webkit';
  } else if ('mozTransition' in d.style) {
    supported = true;
    prefix = 'moz';
  }
}

const transitionEndEventName = prefix ? `${prefix}TransitionEnd` : 'transitionend';
const animationEndEventName = prefix ? `${prefix}AnimationEnd` : 'animationend';

const transitionEndHandler = (fallback, node, done) => {
  if (supported) {
    node.addEventListener(transitionEndEventName, done, false);
  } else {
    setTimeout(done, fallback);
  }
};

export default {
  supported,
  prefix,
  transitionEndEventName,
  animationEndEventName,
  transitionEndHandler
};
