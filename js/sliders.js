
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
        dynamicBullets: true,
        allowTouchMove: false,
        autoplay: {
          delay: 5000,
        },
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
    },2000)
  

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
    // function hero_content_animation(hero__slide){
    //   const title = hero__slide.querySelector('.h1');
    //   const text = hero__slide.querySelector('.hero__text');
    //   const button = hero__slide.querySelector('.hero__button');
    
    //   gsap.registerPlugin(ScrollTrigger, ScrollSmoother, CSSPlugin);
    
    //   // Сохраняем исходное состояние заголовка
    //   const originalTitleContent = title.innerHTML;
    //   const originalWordSpacing = window.getComputedStyle(title).getPropertyValue('word-spacing');
    
    //   // Применяем анимацию к каждому слову с использованием GSAP
    //   const words = originalTitleContent.split(' ');
    
    //   // Очищаем содержимое заголовка
    //   title.innerHTML = '';
    
    //   // Создаем отдельные элементы <span> для каждого слова
    //   words.forEach(word => {
    //     const span = document.createElement('span');
    //     span.textContent = word;
    //     span.style.opacity = 0;
    //     span.style.transform = 'translateY(50px)';
    //     span.style.display = 'inline-block';
    //     span.style.wordSpacing = originalWordSpacing; // Устанавливаем исходный отступ между словами
    //     title.appendChild(span);
    //   });
    
    //   gsap.fromTo(
    //     title.querySelectorAll('span'),
    //     {
    //       opacity: 0,
    //       y: 50,
    //     },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       delay: 0.8, // Общая задержка для всей анимации
    //       stagger: 0.2, // Задержка между каждым словом
    //       duration: 1,
    //       ease: 'power2.out',
    //       onComplete: () => {
    //         // Восстанавливаем исходное содержимое и стиль заголовка
    //         title.innerHTML = originalTitleContent;
    //         title.style.wordSpacing = originalWordSpacing;
    //       }
    //     }
    //   );
    
    //   gsap.fromTo(
    //     [text, button],
    //     {
    //       opacity: 0,
    //       y: 50,
    //     },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       delay: 1,
    //       duration: 1,
    //       ease: 'power2.out',
    //     }
    //   );
    // }
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
          dynamicBullets: true,
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            570: {
              slidesPerView: 2,
            }
          },
          pagination: {
            el: '.directions-block__slider-pagination',
            clickable: true,
            type: 'bullets',
            bullets: true,
          },
          dynamicBullets: true,
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
    if(document.querySelector('.directions-block__slider')){
      let windowWidth = window.innerWidth;
      if (windowWidth <= 700) {
        directions_slider_init();
      } else {
        directions_slider_destroy();
      }
      window.addEventListener('resize', ()=>{
        windowWidth = window.innerWidth;
        if (windowWidth <= 700) {
          directions_slider_init();
        } else {
          directions_slider_destroy();
        }
      })
    }
  }
  if(document.querySelector('.team-block__slider')){
    const team_slider = new Swiper ('.team-block__slider', {
      watchOverflow: true,
      slidesPerView: "auto",
      // centeredSlidesBounds:true,
      observer: true,
      observeParents: true,
      loop: true,
      slidesOffsetAfter:false,
      speed: 1000,
      pagination: {
        el: '.team-block__slider-pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
      },
      dynamicBullets: true,
      navigation: {
        nextEl: '.team-block__slider-button_next',
        prevEl: '.team-block__slider-button_prev',
      },
      breakpoints: {
        0: {
            spaceBetween: 38,
                    
            centeredSlides: true,
        },
        400:{
          spaceBetween: 32,  
          centeredSlides: false,
        },
        1400: {
            spaceBetween: 28,
        }
    }
  
    })
  }
  if(document.querySelector('.service-block__slider')){
    const service_slider = new Swiper ('.service-block__slider', {

      pagination: {
        el: '.service-block__slider-pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
      },
      speed: 1200,
      dynamicBullets: true,
      navigation: {
        nextEl: '.service-block__slider-button_next',
        prevEl: '.service-block__slider-button_prev',
      },
      spaceBetween: 10,
      slidesPerView: 1,
      watchOverflow: true,
      slidesPerView: "auto",
      centeredSlidesBounds:true,
      observer: true,
      observeParents: true,
      loop:false,
      slidesOffsetAfter:false,
  
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
      centeredSlidesBounds:true,
      observer: true,
      observeParents: true,
      loop: true,
      slidesOffsetAfter:false,
      speed: 1000,
      pagination: {
        el: '.blog-block__slider-pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
      },
      dynamicBullets: true,
      navigation: {
        nextEl: '.blog-block__slider-button_next',
        prevEl: '.blog-block__slider-button_prev',
      },
      breakpoints: {
        0: {
          spaceBetween: 20,
        },
        
        1100:{
          spaceBetween: 32,
        },
        1400: {
          spaceBetween: 28,
        },
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
    })
  }
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcclxuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc2xpZGVyJykpe1xyXG4gICAgbGV0IGludGVybGVhdmVPZmZzZXQgPSAwLjU7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgIGNvbnN0IGhlcm9fc2xpZGVyID0gbmV3IFN3aXBlciAoJy5oZXJvX19zbGlkZXInLCB7XHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgZWw6ICcuaGVyb19fc2xpZGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICAgICAgYnVsbGV0czogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogMTUwMCxcclxuICAgICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgICAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgbmV4dEVsOiAnLmhlcm9fX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICAgICAgICBwcmV2RWw6ICcuaGVyb19fc2xpZGVyLWJ1dHRvbl9wcmV2JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uOntcclxuICAgICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgc3dpcGVyID0gdGhpcztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHNsaWRlUHJvZ3Jlc3MgPSBzd2lwZXIuc2xpZGVzW2ldLnByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICBpbm5lck9mZnNldCA9IHN3aXBlci53aWR0aCAqIGludGVybGVhdmVPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgIGlubmVyVHJhbnNsYXRlID0gc2xpZGVQcm9ncmVzcyAqIGlubmVyT2Zmc2V0O1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlc1tpXS5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX2ltZy13cmFwcGVyXCIpLnN0eWxlLnRyYW5zZm9ybSA9XHJcbiAgICAgICAgICAgICAgICBcInRyYW5zbGF0ZVgoXCIgKyBpbm5lclRyYW5zbGF0ZSArIFwicHgpXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXRUcmFuc2l0aW9uOiBmdW5jdGlvbihzcGVlZCkge1xyXG4gICAgICAgICAgICBsZXQgc3dpcGVyID0gdGhpcztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlc1tpXS5zdHlsZS50cmFuc2l0aW9uID0gc3BlZWQgKyBcIm1zIGVhc2Utb3V0XCI7XHJcbiAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlc1tpXS5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX2ltZy13cmFwcGVyXCIpLnN0eWxlLnRyYW5zaXRpb24gPVxyXG4gICAgICAgICAgICAgICAgc3BlZWQgKyBcIm1zXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNsaWRlQ291bnRlcih0aGlzKTsgXHJcbiAgICAgICAgICAgIGhlcm9fbGluZXNfYW5pbWF0aW9uKHRoaXMuc2xpZGVzW3RoaXMuYWN0aXZlSW5kZXhdKTtcclxuICAgICAgICAgICAgaGVyb19jb250ZW50X2FuaW1hdGlvbih0aGlzLnNsaWRlc1t0aGlzLmFjdGl2ZUluZGV4XSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICB9LDIwMDApXHJcbiAgXHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVDb3VudGVyKGhlcm9fc2xpZGVyKSB7XHJcbiAgICAgIGxldCBjdXJyZW50U2xpZGUgPSBoZXJvX3NsaWRlci5yZWFsSW5kZXggKyAxO1xyXG4gICAgICBjb25zdCB0b3RhbFNsaWRlcyA9IGhlcm9fc2xpZGVyLnNsaWRlcy5sZW5ndGggLSAyO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc2xpZGVyLWNvdW50ZXInKS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudGVyX19jdXJyZW50XCI+XHJcbiAgICAgICAgJHtjdXJyZW50U2xpZGUgPCAxMCA/ICcwJyArIGN1cnJlbnRTbGlkZSA6IGN1cnJlbnRTbGlkZX1cclxuICAgICAgPC9zcGFuPiBcclxuICAgICAgLyBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX3RvdGFsXCI+XHJcbiAgICAgICAgJHt0b3RhbFNsaWRlcyA8IDEwID8gJzAnICsgdG90YWxTbGlkZXMgOiB0b3RhbFNsaWRlc31cclxuICAgICAgPC9zcGFuPmA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoZXJvX2xpbmVzX2FuaW1hdGlvbihoZXJvX19zbGlkZSl7XHJcbiAgICAgIGxldCBsaW5lID0gaGVyb19fc2xpZGUucXVlcnlTZWxlY3RvcignLmhlcm9fX2xpbmUgcGF0aCcpO1xyXG4gICAgICBsZXQgcGF0aExlbmd0aCA9IGxpbmUuZ2V0VG90YWxMZW5ndGgoKTtcclxuICAgICAgbGluZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBwYXRoTGVuZ3RoO1xyXG4gICAgICBsaW5lLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBwYXRoTGVuZ3RoO1xyXG4gICAgICBsaW5lLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgbGluZS5zdHlsZS5hbmltYXRpb24gPSAnZHJhdyAxLjJzIGxpbmVhciBmb3J3YXJkcyc7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgbGluZS5zdHlsZS5hbmltYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICBsaW5lLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSAwO1xyXG4gICAgICAgIH0sIDEyMDApXHJcbiAgICAgIH0sIDEyMDApO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC8vIGZ1bmN0aW9uIGhlcm9fY29udGVudF9hbmltYXRpb24oaGVyb19fc2xpZGUpe1xyXG4gICAgLy8gICBjb25zdCB0aXRsZSA9IGhlcm9fX3NsaWRlLnF1ZXJ5U2VsZWN0b3IoJy5oMScpO1xyXG4gICAgLy8gICBjb25zdCB0ZXh0ID0gaGVyb19fc2xpZGUucXVlcnlTZWxlY3RvcignLmhlcm9fX3RleHQnKTtcclxuICAgIC8vICAgY29uc3QgYnV0dG9uID0gaGVyb19fc2xpZGUucXVlcnlTZWxlY3RvcignLmhlcm9fX2J1dHRvbicpO1xyXG4gICAgXHJcbiAgICAvLyAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlciwgU2Nyb2xsU21vb3RoZXIsIENTU1BsdWdpbik7XHJcbiAgICBcclxuICAgIC8vICAgLy8g0KHQvtGF0YDQsNC90Y/QtdC8INC40YHRhdC+0LTQvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC30LDQs9C+0LvQvtCy0LrQsFxyXG4gICAgLy8gICBjb25zdCBvcmlnaW5hbFRpdGxlQ29udGVudCA9IHRpdGxlLmlubmVySFRNTDtcclxuICAgIC8vICAgY29uc3Qgb3JpZ2luYWxXb3JkU3BhY2luZyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRpdGxlKS5nZXRQcm9wZXJ0eVZhbHVlKCd3b3JkLXNwYWNpbmcnKTtcclxuICAgIFxyXG4gICAgLy8gICAvLyDQn9GA0LjQvNC10L3Rj9C10Lwg0LDQvdC40LzQsNGG0LjRjiDQuiDQutCw0LbQtNC+0LzRgyDRgdC70L7QstGDINGBINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC10LwgR1NBUFxyXG4gICAgLy8gICBjb25zdCB3b3JkcyA9IG9yaWdpbmFsVGl0bGVDb250ZW50LnNwbGl0KCcgJyk7XHJcbiAgICBcclxuICAgIC8vICAgLy8g0J7Rh9C40YnQsNC10Lwg0YHQvtC00LXRgNC20LjQvNC+0LUg0LfQsNCz0L7Qu9C+0LLQutCwXHJcbiAgICAvLyAgIHRpdGxlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgXHJcbiAgICAvLyAgIC8vINCh0L7Qt9C00LDQtdC8INC+0YLQtNC10LvRjNC90YvQtSDRjdC70LXQvNC10L3RgtGLIDxzcGFuPiDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0YHQu9C+0LLQsFxyXG4gICAgLy8gICB3b3Jkcy5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAvLyAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHdvcmQ7XHJcbiAgICAvLyAgICAgc3Bhbi5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIC8vICAgICBzcGFuLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDUwcHgpJztcclxuICAgIC8vICAgICBzcGFuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgIC8vICAgICBzcGFuLnN0eWxlLndvcmRTcGFjaW5nID0gb3JpZ2luYWxXb3JkU3BhY2luZzsgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LjRgdGF0L7QtNC90YvQuSDQvtGC0YHRgtGD0L8g0LzQtdC20LTRgyDRgdC70L7QstCw0LzQuFxyXG4gICAgLy8gICAgIHRpdGxlLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgLy8gICB9KTtcclxuICAgIFxyXG4gICAgLy8gICBnc2FwLmZyb21UbyhcclxuICAgIC8vICAgICB0aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyksXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgb3BhY2l0eTogMCxcclxuICAgIC8vICAgICAgIHk6IDUwLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgb3BhY2l0eTogMSxcclxuICAgIC8vICAgICAgIHk6IDAsXHJcbiAgICAvLyAgICAgICBkZWxheTogMC44LCAvLyDQntCx0YnQsNGPINC30LDQtNC10YDQttC60LAg0LTQu9GPINCy0YHQtdC5INCw0L3QuNC80LDRhtC40LhcclxuICAgIC8vICAgICAgIHN0YWdnZXI6IDAuMiwgLy8g0JfQsNC00LXRgNC20LrQsCDQvNC10LbQtNGDINC60LDQttC00YvQvCDRgdC70L7QstC+0LxcclxuICAgIC8vICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgLy8gICAgICAgZWFzZTogJ3Bvd2VyMi5vdXQnLFxyXG4gICAgLy8gICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAvLyDQktC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LjRgdGF0L7QtNC90L7QtSDRgdC+0LTQtdGA0LbQuNC80L7QtSDQuCDRgdGC0LjQu9GMINC30LDQs9C+0LvQvtCy0LrQsFxyXG4gICAgLy8gICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBvcmlnaW5hbFRpdGxlQ29udGVudDtcclxuICAgIC8vICAgICAgICAgdGl0bGUuc3R5bGUud29yZFNwYWNpbmcgPSBvcmlnaW5hbFdvcmRTcGFjaW5nO1xyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgKTtcclxuICAgIFxyXG4gICAgLy8gICBnc2FwLmZyb21UbyhcclxuICAgIC8vICAgICBbdGV4dCwgYnV0dG9uXSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgLy8gICAgICAgeTogNTAsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgLy8gICAgICAgeTogMCxcclxuICAgIC8vICAgICAgIGRlbGF5OiAxLFxyXG4gICAgLy8gICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAvLyAgICAgICBlYXNlOiAncG93ZXIyLm91dCcsXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfVxyXG4gICAgZnVuY3Rpb24gaGVyb19jb250ZW50X2FuaW1hdGlvbihoZXJvX19zbGlkZSkge1xyXG4gICAgICBjb25zdCB0aXRsZSA9IGhlcm9fX3NsaWRlLnF1ZXJ5U2VsZWN0b3IoJy5oMScpO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gaGVyb19fc2xpZGUucXVlcnlTZWxlY3RvcignLmhlcm9fX3RleHQnKTtcclxuICAgICAgY29uc3QgYnV0dG9uID0gaGVyb19fc2xpZGUucXVlcnlTZWxlY3RvcignLmhlcm9fX2J1dHRvbicpO1xyXG4gICAgICBcclxuICAgICAgZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NQbHVnaW4pO1xyXG4gICAgXHJcbiAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0LjRgdGF0L7QtNC90YvQuSDRgtC10LrRgdGCINC30LDQs9C+0LvQvtCy0LrQsCDQuCDRgNCw0LfQtNC10LvRj9C10Lwg0LXQs9C+INC90LAg0YHQu9C+0LLQsFxyXG4gICAgICBjb25zdCBvcmlnaW5hbFRpdGxlQ29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xyXG4gICAgICBjb25zdCB3b3JkcyA9IG9yaWdpbmFsVGl0bGVDb250ZW50LnNwbGl0KCcgJyk7XHJcbiAgICBcclxuICAgICAgLy8g0J7Rh9C40YnQsNC10Lwg0YHQvtC00LXRgNC20LjQvNC+0LUg0LfQsNCz0L7Qu9C+0LLQutCwXHJcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgXHJcbiAgICAgIC8vINCh0L7Qt9C00LDQtdC8IDxzcGFuPiDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0YHQu9C+0LLQsCDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LjRhSDQsiDQt9Cw0LPQvtC70L7QstC+0LpcclxuICAgICAgd29yZHMuZm9yRWFjaCgod29yZCwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB3b3JkICsgKGluZGV4IDwgd29yZHMubGVuZ3RoIC0gMSA/ICdcXHUwMEEwJyA6ICcnKTsgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC90LXRgNCw0LfRgNGL0LLQvdGL0Lkg0L/RgNC+0LHQtdC7INC/0L7RgdC70LUg0LrQsNC20LTQvtCz0L4g0YHQu9C+0LLQsCwg0LrRgNC+0LzQtSDQv9C+0YHQu9C10LTQvdC10LPQvlxyXG4gICAgICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICAvLyDQn9GA0LjQvNC10L3Rj9C10Lwg0LDQvdC40LzQsNGG0LjRjiDQuiDQutCw0LbQtNC+0LzRgyA8c3Bhbj4g0LIg0LfQsNCz0L7Qu9C+0LLQutC1XHJcbiAgICAgIGdzYXAuZnJvbVRvKFxyXG4gICAgICAgIHRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKSxcclxuICAgICAgICB7IG9wYWNpdHk6IDAsIHk6IDUwIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSwgeTogMCxcclxuICAgICAgICAgIGRlbGF5OiAwLjUsIC8vINCX0LDQtNC10YDQttC60LAg0L/QtdGA0LXQtCDQvdCw0YfQsNC70L7QvCDQsNC90LjQvNCw0YbQuNC4XHJcbiAgICAgICAgICBzdGFnZ2VyOiAwLjIsIC8vINCX0LDQtNC10YDQttC60LAg0LzQtdC20LTRgyDQsNC90LjQvNCw0YbQuNGP0LzQuCDRgdC70L7QslxyXG4gICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICBlYXNlOiAncG93ZXIyLm91dCcsXHJcbiAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IG9yaWdpbmFsVGl0bGVDb250ZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgICBnc2FwLmZyb21UbyhcclxuICAgICAgICBbdGV4dCwgYnV0dG9uXSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgeTogNTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgeTogMCxcclxuICAgICAgICAgIGRlbGF5OiAxLFxyXG4gICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICBlYXNlOiAncG93ZXIyLm91dCcsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXJlY3Rpb25zLWJsb2NrX19zbGlkZXInKSl7XHJcbiAgICBsZXQgZGlyZWN0aW9uc19zbGlkZXI7XHJcbiAgICBmdW5jdGlvbiBkaXJlY3Rpb25zX3NsaWRlcl9pbml0ICgpIHtcclxuICAgICAgaWYgKCFkaXJlY3Rpb25zX3NsaWRlcikge1xyXG4gICAgICAgIGRpcmVjdGlvbnNfc2xpZGVyID0gbmV3IFN3aXBlciAoJy5kaXJlY3Rpb25zLWJsb2NrX19zbGlkZXInLCB7XHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgIHNsaWRlc1BlckNvbHVtbkZpbGw6ICdjb2x1bW5zJyxcclxuICAgICAgICAgIHNsaWRlc1BlckNvbHVtbjogMixcclxuICAgICAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDU3MDoge1xyXG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLmRpcmVjdGlvbnMtYmxvY2tfX3NsaWRlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgICAgIGJ1bGxldHM6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5kaXJlY3Rpb25zLWJsb2NrX19zbGlkZXItYnV0dG9uX25leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuZGlyZWN0aW9ucy1ibG9ja19fc2xpZGVyLWJ1dHRvbl9wcmV2JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRpcmVjdGlvbnNfc2xpZGVyX2Rlc3Ryb3kgKCkge1xyXG4gICAgICBpZiAoZGlyZWN0aW9uc19zbGlkZXIpIHtcclxuICAgICAgICBkaXJlY3Rpb25zX3NsaWRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgZGlyZWN0aW9uc19zbGlkZXIgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlyZWN0aW9ucy1ibG9ja19fc2xpZGVyJykpe1xyXG4gICAgICBsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgaWYgKHdpbmRvd1dpZHRoIDw9IDcwMCkge1xyXG4gICAgICAgIGRpcmVjdGlvbnNfc2xpZGVyX2luaXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXJlY3Rpb25zX3NsaWRlcl9kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT57XHJcbiAgICAgICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBpZiAod2luZG93V2lkdGggPD0gNzAwKSB7XHJcbiAgICAgICAgICBkaXJlY3Rpb25zX3NsaWRlcl9pbml0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpcmVjdGlvbnNfc2xpZGVyX2Rlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWFtLWJsb2NrX19zbGlkZXInKSl7XHJcbiAgICBjb25zdCB0ZWFtX3NsaWRlciA9IG5ldyBTd2lwZXIgKCcudGVhbS1ibG9ja19fc2xpZGVyJywge1xyXG4gICAgICB3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgICAgLy8gY2VudGVyZWRTbGlkZXNCb3VuZHM6dHJ1ZSxcclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzbGlkZXNPZmZzZXRBZnRlcjpmYWxzZSxcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy50ZWFtLWJsb2NrX19zbGlkZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgICBidWxsZXRzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy50ZWFtLWJsb2NrX19zbGlkZXItYnV0dG9uX25leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy50ZWFtLWJsb2NrX19zbGlkZXItYnV0dG9uX3ByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzOCxcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA0MDA6e1xyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMiwgIFxyXG4gICAgICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTQwMDoge1xyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDI4LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIH0pXHJcbiAgfVxyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlLWJsb2NrX19zbGlkZXInKSl7XHJcbiAgICBjb25zdCBzZXJ2aWNlX3NsaWRlciA9IG5ldyBTd2lwZXIgKCcuc2VydmljZS1ibG9ja19fc2xpZGVyJywge1xyXG5cclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnNlcnZpY2UtYmxvY2tfX3NsaWRlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICAgIGJ1bGxldHM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNwZWVkOiAxMjAwLFxyXG4gICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zZXJ2aWNlLWJsb2NrX19zbGlkZXItYnV0dG9uX25leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zZXJ2aWNlLWJsb2NrX19zbGlkZXItYnV0dG9uX3ByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICB3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgICAgY2VudGVyZWRTbGlkZXNCb3VuZHM6dHJ1ZSxcclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICBsb29wOmZhbHNlLFxyXG4gICAgICBzbGlkZXNPZmZzZXRBZnRlcjpmYWxzZSxcclxuICBcclxuICAgIH0pXHJcbiAgICBsZXQgc2VydmljZV9jdXJyZW50X3NsaWRlID0gc2VydmljZV9zbGlkZXIucmVhbEluZGV4ICsgMTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlLWJsb2NrX19zbGlkZXItY291bnRlcicpLmlubmVySFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX2N1cnJlbnRcIj5cclxuICAgICAgICAke3NlcnZpY2VfY3VycmVudF9zbGlkZSA8IDEwID8gJzAnICsgc2VydmljZV9jdXJyZW50X3NsaWRlIDogc2VydmljZV9jdXJyZW50X3NsaWRlfVxyXG4gICAgICA8L3NwYW4+IFxyXG4gICAgICAvIFxyXG4gICAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tY291bnRlcl9fdG90YWxcIj5cclxuICAgICAgICAke3NlcnZpY2Vfc2xpZGVyLnNsaWRlcy5sZW5ndGggPCAxMCA/ICcwJyArIHNlcnZpY2Vfc2xpZGVyLnNsaWRlcy5sZW5ndGggOiBzZXJ2aWNlX3NsaWRlci5zbGlkZXMubGVuZ3RofVxyXG4gICAgICA8L3NwYW4+YDtcclxuICAgIHNlcnZpY2Vfc2xpZGVyLm9uKFwic2xpZGVDaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXJ2aWNlX2N1cnJlbnRfc2xpZGUgPSB0aGlzLmFjdGl2ZUluZGV4ICsgMTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2UtYmxvY2tfX3NsaWRlci1jb3VudGVyJykuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tY291bnRlcl9fY3VycmVudFwiPlxyXG4gICAgICAke3NlcnZpY2VfY3VycmVudF9zbGlkZSA8IDEwID8gJzAnICsgc2VydmljZV9jdXJyZW50X3NsaWRlIDogc2VydmljZV9jdXJyZW50X3NsaWRlfVxyXG4gICAgICA8L3NwYW4+IFxyXG4gICAgICAvIFxyXG4gICAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tY291bnRlcl9fdG90YWxcIj5cclxuICAgICAgJHt0aGlzLnNsaWRlcy5sZW5ndGggPCAxMCA/ICcwJyArIHRoaXMuc2xpZGVzLmxlbmd0aCA6IHRoaXMuc2xpZGVzLmxlbmd0aH1cclxuICAgICAgPC9zcGFuPiBgO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nLWJsb2NrX19zbGlkZXInKSl7XHJcbiAgICBjb25zdCBibG9nX2Jsb2NrX3NsaWRlciA9IG5ldyBTd2lwZXIgKCcuYmxvZy1ibG9ja19fc2xpZGVyJywge1xyXG4gICAgICB3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgIGNlbnRlcmVkU2xpZGVzQm91bmRzOnRydWUsXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6ZmFsc2UsXHJcbiAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuYmxvZy1ibG9ja19fc2xpZGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgYnVsbGV0czogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuYmxvZy1ibG9ja19fc2xpZGVyLWJ1dHRvbl9uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuYmxvZy1ibG9ja19fc2xpZGVyLWJ1dHRvbl9wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgMTEwMDp7XHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDMyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTQwMDoge1xyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyOCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICB9XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnMtYmxvY2tfX3NsaWRlcicpKXtcclxuICAgIGNvbnN0IHRhYnNfc2xpZGVyID0gIG5ldyBTd2lwZXIgKCcudGFicy1ibG9ja19fc2xpZGVyJywge1xyXG4gICAgICB3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgIGNlbnRlcmVkU2xpZGVzQm91bmRzOnRydWUsXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgbG9vcDpmYWxzZSxcclxuICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6ZmFsc2UsXHJcbiAgICB9KVxyXG4gIH1cclxufSkiXSwiZmlsZSI6InNsaWRlcnMuanMifQ==