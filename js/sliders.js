document.addEventListener('DOMContentLoaded', function(){
  if(document.querySelector('.hero__slider')){
    let interleaveOffset = 0.5;
    setTimeout(()=>{
      const hero_slider = new Swiper ('.hero__slider', {
        pagination: {
          el: '.hero__slider-pagination',
          clickable: true,
          type: 'bullets',
          bullets: true,
        },
        loop: true,
        centeredSlides: true,
        watchSlidesProgress: true,
        speed: 1500,
        
        allowTouchMove: false,
        autoplay: {
          delay: 5000,
        },
        autoplayDisableOnInteraction: false,
        navigation: {
          nextEl: '.hero__slider-button_next',
          prevEl: '.hero__slider-button_prev',
        },
        on:{
          progress: function(){
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
              let slideProgress = swiper.slides[i].progress,
                  innerOffset = swiper.width * interleaveOffset,
                  innerTranslate = slideProgress * innerOffset;
             
              swiper.slides[i].querySelector(".hero__img-wrapper").style.transform =
                "translateX(" + innerTranslate + "px)";
            }
          },
          setTransition: function(speed) {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = speed + "ms ease-out";
              swiper.slides[i].querySelector(".hero__img-wrapper").style.transition =
                speed + "ms";
            }
          },
          init: function () {

          },
          slideChange: function () {
            updateSlideCounter(this); 
            hero_lines_animation(this.slides[this.activeIndex]);
            hero_content_animation(this.slides[this.activeIndex]);
          },
        },
        
      })
    }, 2000)
  

    function updateSlideCounter(hero_slider) {
      let currentSlide = hero_slider.realIndex + 1;
      const totalSlides = hero_slider.slides.length - 2;
      document.querySelector('.hero__slider-counter').innerHTML = `
      <span class="pagination-counter__current">
        ${currentSlide < 10 ? '0' + currentSlide : currentSlide}
      </span> 
      / 
      <span class="pagination-counter__total">
        ${totalSlides < 10 ? '0' + totalSlides : totalSlides}
      </span>`;
    }
    function hero_lines_animation(hero__slide){
      let line = hero__slide.querySelector('.hero__line path');
      if(line){
        let pathLength = line.getTotalLength();
        line.style.strokeDasharray = pathLength;
        line.style.strokeDashoffset = pathLength;
        line.style.opacity = 1;
        setTimeout(()=>{
          line.style.animation = 'draw 1.2s linear forwards';
          setTimeout(()=>{
            line.style.animation = 'none';
            line.style.strokeDashoffset = 0;
          }, 1200)
        }, 1200);
      }
    }
    function hero_content_animation(hero__slide) {
      const title = hero__slide.querySelector('.h1');
      const text = hero__slide.querySelector('.hero__text');
      const button = hero__slide.querySelector('.hero__button');
      
      gsap.registerPlugin(CSSPlugin);
    
      // Получаем исходный текст заголовка и разделяем его на слова
      const originalTitleContent = title.textContent;
      const words = originalTitleContent.split(' ');
    
      // Очищаем содержимое заголовка
      title.innerHTML = '';
    
      // Создаем <span> для каждого слова и добавляем их в заголовок
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + (index < words.length - 1 ? '\u00A0' : ''); // Добавляем неразрывный пробел после каждого слова, кроме последнего
        span.style.display = 'inline-block';
        title.appendChild(span);
      });
    
      // Применяем анимацию к каждому <span> в заголовке
      gsap.fromTo(
        title.querySelectorAll('span'),
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          delay: 0.5, // Задержка перед началом анимации
          stagger: 0.2, // Задержка между анимациями слов
          duration: 1,
          ease: 'power2.out',
          onComplete: () => {
            title.innerHTML = originalTitleContent;
          }
        }
      );
        gsap.fromTo(
        [text, button],
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          delay: 1,
          duration: 1,
          ease: 'power2.out',
        }
      );
    }
    
  }
  if(document.querySelector('.directions-block__slider')){
    let directions_slider;
    function directions_slider_init () {
      if (!directions_slider) {
        directions_slider = new Swiper ('.directions-block__slider', {
          spaceBetween: 20,
          slidesPerView: 2,
          slidesPerColumnFill: 'columns',
          slidesPerColumn: 2,
          observer: true,
          observeParents: true,
          pagination: {
            el: '.directions-block__slider-pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
            dynamicBullets: true,
            dynamicMainBullets: 4
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
              pagination: {
                el: '.directions-block__slider-pagination',
                clickable: true,
                type: 'bullets',
                bullets: true,
                dynamicBullets: true,
                dynamicMainBullets: 4
              },
            },
            570: {
              slidesPerView: 2,
            },
            700:{
              pagination: {
                el: '.directions-block__slider-pagination',
                clickable: true,
                type: 'bullets',
                bullets: true,
                dynamicBullets: false,
              },
            }
          },
          navigation: {
            nextEl: '.directions-block__slider-button_next',
            prevEl: '.directions-block__slider-button_prev',
          },
          speed: 1000,
        })
      }
    }
    function directions_slider_destroy () {
      if (directions_slider) {
        directions_slider.destroy();
        directions_slider = null;
      }
    }
    let windowWidth = window.innerWidth;
    if (windowWidth <= 700) {
      directions_slider_init();
    } else {
      directions_slider_destroy();
    }
    window.addEventListener('resize', ()=>{
      setTimeout(()=>{
        let windowWidth = window.innerWidth;
        if (windowWidth <= 700) {
          directions_slider_init();
        } else {
          directions_slider_destroy();
        }
      },100)
      
    })
  }
  if(document.querySelector('.team-block__slider')){
    const team_slider = new Swiper ('.team-block__slider', {
      watchOverflow: true,
      slidesPerView: 'auto',
      centeredSlidesBounds:true,
      observer: true,
      observeParents: true,
      speed: 1000,
      spaceBetween: 28,
      pagination: {
        el: '.team-block__slider-pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
        dynamicBullets: true,
        dynamicMainBullets: 4
      },
      centeredSlides: false,
      navigation: {
        nextEl: '.team-block__slider-button_next',
        prevEl: '.team-block__slider-button_prev',
      },
      
      breakpoints: {
        0: {  
            spaceBetween: 32, 
             pagination: {
              el: '.team-block__slider-pagination',
              clickable: true,
              type: 'bullets',
              bullets: true,
              dynamicBullets: true,
              dynamicMainBullets: 4
            },
        },
        700:{
          pagination: {
            el: '.team-block__slider-pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
            dynamicBullets: false,
          },
        },
        1400: {
            spaceBetween: 28,
            centeredSlides: false,
        }
      },
      on: {
        init: function() {
          setTimeout(()=>{
            hiding_controls(this);
          }, 100);
          setTimeout(()=>{
            let windowWidth = window.innerWidth;
            if (windowWidth <= 700) {
              if(this.slides.length == 1){
                team_slider.slides[0].style.marginLeft = 0;
                team_slider.slides[0].style.marginRight = 0;
                this.el.querySelector('.swiper-wrapper').style.justifyContent = 'center';
              }
              }else {
                  if(this.slides.length == 1){
                    team_slider.slides[0].style.marginLeft = null;
                    team_slider.slides[0].style.marginRight = null;
                    this.el.querySelector('.swiper-wrapper').style.justifyContent = 'start';
                  }
              }
          }, 3000)
        },
        resize: function() {
          hiding_controls(this); 
          let windowWidth = window.innerWidth;
          if (windowWidth <= 700) {
              if(this.slides.length == 1){
                team_slider.slides[0].style.marginLeft = 0;
                team_slider.slides[0].style.marginRight = 0;
                this.el.querySelector('.swiper-wrapper').style.justifyContent = 'center';
              }
          }else {
              if(this.slides.length == 1){
                team_slider.slides[0].style.marginLeft = null;
                team_slider.slides[0].style.marginRight = null;
                this.el.querySelector('.swiper-wrapper').style.justifyContent = 'start';
              }
          }
        },
      }, 
    })
  }
  if (document.querySelector('.reviews-slider')) {
    const reviews_slider = new Swiper('.reviews-slider', {
      watchOverflow: true,
      centeredSlidesBounds: true,
      observer: true,
      slidesPerView: 'auto',
      observeParents: true,
      slidesOffsetAfter: false,
      speed: 1000,
      pagination: {
        el: '.reviews-slider__pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
        dynamicBullets: true,
        dynamicMainBullets: 4
      },
      
      navigation: {
        nextEl: '.reviews-slider-button_next',
        prevEl: '.reviews-slider-button_prev',
      },
      breakpoints: {
        0: {
          spaceBetween: 38,
          centeredSlides: true,
          pagination: {
            el: '.reviews-slider__pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
            dynamicBullets: true,
            dynamicMainBullets: 4
          },
        },
        700:{
          pagination: {
            el: '.reviews-slider__pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
            dynamicBullets: false,
          },
          spaceBetween: 32,
        },
        1400: {
          spaceBetween: 28,
        }
      },
      on: {
        init: function() {
          setTimeout(()=>{
            hiding_controls(this);
          }, 100)
        },
        resize: function() {
          hiding_controls(this);
        }
      }
      
    });
  }
  if (document.querySelector('.programs-max-slider')) {
    const programs_slider = new Swiper('.programs-max-slider', {
      watchOverflow: true,
      centeredSlidesBounds: true,
      observer: true,
      slidesPerView: 'auto',
      observeParents: true,
      slidesOffsetAfter: false,
      speed: 1000,
      pagination: {
        el: '.programs-max-slider__pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
      },
      
      navigation: {
        nextEl: '.programs-max-slider__button_next',
        prevEl: '.programs-max-slider__button_prev',
      },
      breakpoints: {
        0: {
          spaceBetween: 20,
          centeredSlides: true,
        },
        400: {
          spaceBetween: 32,
          centeredSlides: false,
        },
        1400: {
          spaceBetween: 28,
        }
      },
      on: {
        init: function() {
          setTimeout(()=>{
            hiding_controls(this);
          }, 100)
        },
        resize: function() {
          hiding_controls(this);
        }
      }
    });
  }
  if(document.querySelector('.service-block__slider')){
    const service_slider = new Swiper ('.service-block__slider', {
      pagination: {
        el: '.service-block__slider-pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
        dynamicBullets: true,
        dynamicMainBullets: 4
      },
      speed: 1200,
      navigation: {
        nextEl: '.service-block__slider-button_next',
        prevEl: '.service-block__slider-button_prev',
      },
      spaceBetween: 10,
      watchOverflow: true,
      slidesPerView: "auto",
      centeredSlidesBounds:true,
      observer: true,
      observeParents: true,
      loop:false,
      slidesOffsetAfter:false,
      breakpoints: {
        0: {
          pagination: {
            el: '.service-block__slider-pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
            dynamicBullets: true,
            dynamicMainBullets: 4
          },
        },
        700:{
          pagination: {
            el: '.service-block__slider-pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
            dynamicBullets: false,
          },
        },
      },
      on: {
        init: function() {
          setTimeout(()=>{
            hiding_controls(this);
          }, 100)
        },
        resize: function() {
          hiding_controls(this);
        }
      }
    })
    let service_current_slide = service_slider.realIndex + 1;
    document.querySelector('.service-block__slider-counter').innerHTML = `
      <span class="pagination-counter__current">
        ${service_current_slide < 10 ? '0' + service_current_slide : service_current_slide}
      </span> 
      / 
      <span class="pagination-counter__total">
        ${service_slider.slides.length < 10 ? '0' + service_slider.slides.length : service_slider.slides.length}
      </span>`;
    service_slider.on("slideChange", function () {
      service_current_slide = this.activeIndex + 1;
      document.querySelector('.service-block__slider-counter').innerHTML = `
      <span class="pagination-counter__current">
      ${service_current_slide < 10 ? '0' + service_current_slide : service_current_slide}
      </span> 
      / 
      <span class="pagination-counter__total">
      ${this.slides.length < 10 ? '0' + this.slides.length : this.slides.length}
      </span> `;
    });
  }
  if(document.querySelector('.blog-block__slider')){
    const blog_block_slider = new Swiper ('.blog-block__slider', {
      watchOverflow: true,
      slidesPerView: 'auto',
      observer: true,
      observeParents: true,
      slidesOffsetAfter:false,
      speed: 1000,
      pagination: {
        el: '.blog-block__slider-pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
      },
      
      navigation: {
        nextEl: '.blog-block__slider-button_next',
        prevEl: '.blog-block__slider-button_prev',
      },
      breakpoints: {
        0: {
          spaceBetween: 20,
          pagination: {
            el: '.blog-block__slider-pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
            dynamicBullets: true,
            dynamicMainBullets: 4
          },
        },
        700:{
          pagination: {
            el: '.blog-block-slider__pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
            dynamicBullets: false,
          },
        },
        1100:{
          spaceBetween: 32,
        },
        1400: {
          spaceBetween: 28,
        },
      },
      on: {
        init: function() {
          setTimeout(()=>{
            hiding_controls(this);
          }, 100)
        },
        resize: function() {
          hiding_controls(this);
        }
      }
    })
  }
  if(document.querySelector('.tabs-block__slider')){
    const tabs_slider =  new Swiper ('.tabs-block__slider', {
      watchOverflow: true,
      slidesPerView: 'auto',
      centeredSlidesBounds:true,
      observer: true,
      observeParents: true,
      loop:false,
      slidesOffsetAfter:false,
      slideToClickedSlide: true,
      freeMode: true,
    })
    let tabs_btns = document.querySelector('.tabs-block__slider').querySelectorAll('.tabs-block__button');
    window.addEventListener('scroll', ()=>{
      tabs_btns.forEach((el, index)=>{
        if(el.classList.contains('active-anchor')){
          tabs_slider.slideTo(index);
        }
      })
    })
    
  }
  if(document.querySelector('.categories__slider')){
    const categories_slider =  new Swiper ('.categories__slider', {
      watchOverflow: true,
      slidesPerView: 'auto',
      observer: true,
      observeParents: true,
      slideToClickedSlide: true,
    })
  }
  if(document.querySelector('.ordered-list-slider')){
    const ordered_list_slider =  new Swiper ('.ordered-list-slider', {
      watchOverflow: true,
      slidesPerView: 'auto',
      observer: true,
      observeParents: true,
      speed: 1000,
      pagination: {
        el: '.ordered-list-slider-pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
      },
      
      navigation: {
        nextEl: '.ordered-list-slider-button_next',
        prevEl: '.ordered-list-slider-button_prev',
      },
      on: {
        init: function() {
          setTimeout(()=>{
            hiding_controls(this);
          }, 100)
        },
        resize: function() {
          hiding_controls(this);
        }
      },
      breakpoints: {
        0: {
          spaceBetween: 20,
        },
        1100:{
          spaceBetween: 23,
        },
        1400: {
          spaceBetween: 28,
        },
      },
    })
  }
  function hiding_controls(swiper){
    let arrowPrev = swiper.navigation.prevEl;
    let arrowNext = swiper.navigation.nextEl;
    let controls = swiper.navigation.prevEl.closest('.slider-block__controls');
    if (arrowPrev.classList.contains('swiper-button-disabled') && arrowNext.classList.contains('swiper-button-disabled')) {
      arrowPrev.style.display = 'none';
      arrowNext.style.display = 'none';
      if(controls){
        controls.style.display = 'none';
      }
    } else {
      arrowPrev.style.display = 'block';
      arrowNext.style.display = 'block';
      if(controls && controls.style.display == 'none'){
        controls.style.display = 'flex';
      }
      
    }
  }
})




 