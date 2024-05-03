Fancybox.bind("[data-fancybox]", {
     
        closeButton:
          '<button data-fancybox-close class="" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
        main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
        <div class="fancybox__backdrop"></div>
        <div class="fancybox__carousel"></div>
        <div class="fancybox__navigation"></div>
      </div>`,
      Carousel: {
        Navigation: {
          prevTpl:
            `
              <button tabindex="0" title="Previous" class="f-button is-prev arrow-button" data-carousel-prev="true">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="39.5" fill="#FCFAF7" stroke="#E7E7E7"/>
                    <circle class="arrow-button__circle" cx="40" cy="40" r="39.5" fill="#FCFAF7" stroke="#BDA37E"/>
                    <path d="M25.6464 40.3536C25.4512 40.1583 25.4512 39.8417 25.6464 39.6464L28.8284 36.4645C29.0237 36.2692 29.3403 36.2692 29.5355 36.4645C29.7308 36.6597 29.7308 36.9763 29.5355 37.1716L26.7071 40L29.5355 42.8284C29.7308 43.0237 29.7308 43.3403 29.5355 43.5355C29.3403 43.7308 29.0237 43.7308 28.8284 43.5355L25.6464 40.3536ZM54 40.5H26V39.5H54V40.5Z" fill="#6B452C"/>
                </svg>    
              </button>
            `
            ,   
          nextTpl:
            `
              <button tabindex="0" title="Next" class="f-button is-next arrow-button" data-carousel-next="true">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="39.5" fill="#FCFAF7" stroke="#E7E7E7"/>
                  <circle class="arrow-button__circle" cx="40" cy="40" r="39.5" fill="#FCFAF7" stroke="#BDA37E"/>
                  <path d="M54.3536 40.3536C54.5488 40.1583 54.5488 39.8417 54.3536 39.6464L51.1716 36.4645C50.9763 36.2692 50.6597 36.2692 50.4645 36.4645C50.2692 36.6597 50.2692 36.9763 50.4645 37.1716L53.2929 40L50.4645 42.8284C50.2692 43.0237 50.2692 43.3403 50.4645 43.5355C50.6597 43.7308 50.9763 43.7308 51.1716 43.5355L54.3536 40.3536ZM26 40.5H54V39.5H26V40.5Z" fill="#6B452C"/>
                </svg> 
              </button>
            `
        },
      },
});