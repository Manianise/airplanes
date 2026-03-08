  export default function getRandomPos() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    };
  }