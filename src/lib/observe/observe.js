export function observe(){
  const inViewport = (entries, observer) => {
    entries.forEach(entry => {entry.target.classList.toggle("is-in", entry.isIntersecting);});
  };
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {};
  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  })
}