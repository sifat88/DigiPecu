// collapsibes --------------
const collapsibles = document.querySelectorAll(".collapsible");
    if (collapsibles.length !== 0) {
        console.log('ll')
        collapsibles.forEach((collapsible) => {
          collapsible.addEventListener("click", function () {
              collapsible.classList.toggle("active");
              
              const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        });
    }
// info sm slider ----------
const infoSwiper = new Swiper(".swiper-info-sm", {
  loop: true,
  pagination: {
    el: ".pagination-info-sm",
  },
  navigation: {
    nextEl: ".next-info-sm",
    prevEl: ".prev-info-sm",
  },
});
// home slider ----------
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
