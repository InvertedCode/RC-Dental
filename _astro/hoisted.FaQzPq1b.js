import"./hoisted.De_egwNy.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("carousel-content"),o=(t?Array.from(t.children):[]).length;let e=0;function n(){e>=o?(t&&(t.classList.add("opacity-0"),t.classList.remove("animate-carouselScroll"),t.style.transition="none"),e=0,setTimeout(()=>{t&&(t.style.transform="translateX(0%)",t.classList.remove("opacity-0"),setTimeout(()=>{t.style.transition="transform 10s ease-in-out, opacity 1s ease-in-out",t.classList.add("animate-carouselScroll"),s()},2))},300)):t&&(t.style.transform=`translateX(-${e*100}%)`)}function s(){e++,n()}setInterval(s,6e3)});