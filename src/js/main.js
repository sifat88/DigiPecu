
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
                // collapsible.classList.remove("active");
              content.style.display = "block";
            }
          });
        });
    }
