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
      slidesPerView: 'auto',
      centeredSlidesBounds:true,
      observer: true,
      observeParents: true,
      // loop: true,
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
            centeredSlides: false,
        }
      },
      on: {
        init: function() {
          setTimeout(() => toggleNavigation(this), 100);
        },
        resize: function() {
          toggleNavigation(this);
        }
      }
    })
  }
  if(document.querySelector('.reviews-slider')){
    const reviews_slider = new Swiper ('.reviews-slider', {
      watchOverflow: true,
      centeredSlidesBounds:true,
      observer: true,
      slidesPerView: 'auto',
      observeParents: true,
      // loop: true,
      slidesOffsetAfter:false,
      speed: 1000,
      pagination: {
        el: '.reviews-slider__pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
      },
      dynamicBullets: true,
      navigation: {
        nextEl: '.reviews-slider-button_next',
        prevEl: '.reviews-slider-button_prev',
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
    },
    on: {
      init: function() {
        setTimeout(() => toggleNavigation(this), 100);
      },
      resize: function() {
        toggleNavigation(this);
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
      observer: true,
      observeParents: true,
      // loop: true,
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
      },
      on: {
        init: function() {
          setTimeout(() => toggleNavigation(this), 100);
        },
        resize: function() {
          toggleNavigation(this);
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
      
    })
  }
})




function toggleNavigation(swiper) {
  const paginationEl = swiper.pagination.el;
  if (paginationEl && paginationEl.classList.contains('swiper-pagination-lock')) {
    // Скрываем кнопки навигации
    if (swiper.navigation.nextEl) {
      swiper.navigation.nextEl.style.display = 'none';
    }
    if (swiper.navigation.prevEl) {
      swiper.navigation.prevEl.style.display = 'none';
    }
  } else {
    // Показываем кнопки навигации
    if (swiper.navigation.nextEl) {
      swiper.navigation.nextEl.style.display = 'block';
    }
    if (swiper.navigation.prevEl) {
      swiper.navigation.prevEl.style.display = 'block';
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zbGlkZXInKSl7XHJcbiAgICBsZXQgaW50ZXJsZWF2ZU9mZnNldCA9IDAuNTtcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgY29uc3QgaGVyb19zbGlkZXIgPSBuZXcgU3dpcGVyICgnLmhlcm9fX3NsaWRlcicsIHtcclxuICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICBlbDogJy5oZXJvX19zbGlkZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgICBidWxsZXRzOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiAxNTAwLFxyXG4gICAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgZGVsYXk6IDUwMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICBuZXh0RWw6ICcuaGVyb19fc2xpZGVyLWJ1dHRvbl9uZXh0JyxcclxuICAgICAgICAgIHByZXZFbDogJy5oZXJvX19zbGlkZXItYnV0dG9uX3ByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb246e1xyXG4gICAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxldCBzd2lwZXIgPSB0aGlzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBsZXQgc2xpZGVQcm9ncmVzcyA9IHN3aXBlci5zbGlkZXNbaV0ucHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgICAgIGlubmVyT2Zmc2V0ID0gc3dpcGVyLndpZHRoICogaW50ZXJsZWF2ZU9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgaW5uZXJUcmFuc2xhdGUgPSBzbGlkZVByb2dyZXNzICogaW5uZXJPZmZzZXQ7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIuaGVyb19faW1nLXdyYXBwZXJcIikuc3R5bGUudHJhbnNmb3JtID1cclxuICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlWChcIiArIGlubmVyVHJhbnNsYXRlICsgXCJweClcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uKHNwZWVkKSB7XHJcbiAgICAgICAgICAgIGxldCBzd2lwZXIgPSB0aGlzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVzW2ldLnN0eWxlLnRyYW5zaXRpb24gPSBzcGVlZCArIFwibXMgZWFzZS1vdXRcIjtcclxuICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIuaGVyb19faW1nLXdyYXBwZXJcIikuc3R5bGUudHJhbnNpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICBzcGVlZCArIFwibXNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdXBkYXRlU2xpZGVDb3VudGVyKHRoaXMpOyBcclxuICAgICAgICAgICAgaGVyb19saW5lc19hbmltYXRpb24odGhpcy5zbGlkZXNbdGhpcy5hY3RpdmVJbmRleF0pO1xyXG4gICAgICAgICAgICBoZXJvX2NvbnRlbnRfYW5pbWF0aW9uKHRoaXMuc2xpZGVzW3RoaXMuYWN0aXZlSW5kZXhdKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgfSlcclxuICAgIH0sMjAwMClcclxuICBcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZUNvdW50ZXIoaGVyb19zbGlkZXIpIHtcclxuICAgICAgbGV0IGN1cnJlbnRTbGlkZSA9IGhlcm9fc2xpZGVyLnJlYWxJbmRleCArIDE7XHJcbiAgICAgIGNvbnN0IHRvdGFsU2xpZGVzID0gaGVyb19zbGlkZXIuc2xpZGVzLmxlbmd0aCAtIDI7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zbGlkZXItY291bnRlcicpLmlubmVySFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX2N1cnJlbnRcIj5cclxuICAgICAgICAke2N1cnJlbnRTbGlkZSA8IDEwID8gJzAnICsgY3VycmVudFNsaWRlIDogY3VycmVudFNsaWRlfVxyXG4gICAgICA8L3NwYW4+IFxyXG4gICAgICAvIFxyXG4gICAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tY291bnRlcl9fdG90YWxcIj5cclxuICAgICAgICAke3RvdGFsU2xpZGVzIDwgMTAgPyAnMCcgKyB0b3RhbFNsaWRlcyA6IHRvdGFsU2xpZGVzfVxyXG4gICAgICA8L3NwYW4+YDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhlcm9fbGluZXNfYW5pbWF0aW9uKGhlcm9fX3NsaWRlKXtcclxuICAgICAgbGV0IGxpbmUgPSBoZXJvX19zbGlkZS5xdWVyeVNlbGVjdG9yKCcuaGVyb19fbGluZSBwYXRoJyk7XHJcbiAgICAgIGxldCBwYXRoTGVuZ3RoID0gbGluZS5nZXRUb3RhbExlbmd0aCgpO1xyXG4gICAgICBsaW5lLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IHBhdGhMZW5ndGg7XHJcbiAgICAgIGxpbmUuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IHBhdGhMZW5ndGg7XHJcbiAgICAgIGxpbmUuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICBsaW5lLnN0eWxlLmFuaW1hdGlvbiA9ICdkcmF3IDEuMnMgbGluZWFyIGZvcndhcmRzJztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICBsaW5lLnN0eWxlLmFuaW1hdGlvbiA9ICdub25lJztcclxuICAgICAgICAgIGxpbmUuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IDA7XHJcbiAgICAgICAgfSwgMTIwMClcclxuICAgICAgfSwgMTIwMCk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGVyb19jb250ZW50X2FuaW1hdGlvbihoZXJvX19zbGlkZSkge1xyXG4gICAgICBjb25zdCB0aXRsZSA9IGhlcm9fX3NsaWRlLnF1ZXJ5U2VsZWN0b3IoJy5oMScpO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gaGVyb19fc2xpZGUucXVlcnlTZWxlY3RvcignLmhlcm9fX3RleHQnKTtcclxuICAgICAgY29uc3QgYnV0dG9uID0gaGVyb19fc2xpZGUucXVlcnlTZWxlY3RvcignLmhlcm9fX2J1dHRvbicpO1xyXG4gICAgICBcclxuICAgICAgZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NQbHVnaW4pO1xyXG4gICAgXHJcbiAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0LjRgdGF0L7QtNC90YvQuSDRgtC10LrRgdGCINC30LDQs9C+0LvQvtCy0LrQsCDQuCDRgNCw0LfQtNC10LvRj9C10Lwg0LXQs9C+INC90LAg0YHQu9C+0LLQsFxyXG4gICAgICBjb25zdCBvcmlnaW5hbFRpdGxlQ29udGVudCA9IHRpdGxlLnRleHRDb250ZW50O1xyXG4gICAgICBjb25zdCB3b3JkcyA9IG9yaWdpbmFsVGl0bGVDb250ZW50LnNwbGl0KCcgJyk7XHJcbiAgICBcclxuICAgICAgLy8g0J7Rh9C40YnQsNC10Lwg0YHQvtC00LXRgNC20LjQvNC+0LUg0LfQsNCz0L7Qu9C+0LLQutCwXHJcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgXHJcbiAgICAgIC8vINCh0L7Qt9C00LDQtdC8IDxzcGFuPiDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0YHQu9C+0LLQsCDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LjRhSDQsiDQt9Cw0LPQvtC70L7QstC+0LpcclxuICAgICAgd29yZHMuZm9yRWFjaCgod29yZCwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB3b3JkICsgKGluZGV4IDwgd29yZHMubGVuZ3RoIC0gMSA/ICdcXHUwMEEwJyA6ICcnKTsgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC90LXRgNCw0LfRgNGL0LLQvdGL0Lkg0L/RgNC+0LHQtdC7INC/0L7RgdC70LUg0LrQsNC20LTQvtCz0L4g0YHQu9C+0LLQsCwg0LrRgNC+0LzQtSDQv9C+0YHQu9C10LTQvdC10LPQvlxyXG4gICAgICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgICAvLyDQn9GA0LjQvNC10L3Rj9C10Lwg0LDQvdC40LzQsNGG0LjRjiDQuiDQutCw0LbQtNC+0LzRgyA8c3Bhbj4g0LIg0LfQsNCz0L7Qu9C+0LLQutC1XHJcbiAgICAgIGdzYXAuZnJvbVRvKFxyXG4gICAgICAgIHRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKSxcclxuICAgICAgICB7IG9wYWNpdHk6IDAsIHk6IDUwIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSwgeTogMCxcclxuICAgICAgICAgIGRlbGF5OiAwLjUsIC8vINCX0LDQtNC10YDQttC60LAg0L/QtdGA0LXQtCDQvdCw0YfQsNC70L7QvCDQsNC90LjQvNCw0YbQuNC4XHJcbiAgICAgICAgICBzdGFnZ2VyOiAwLjIsIC8vINCX0LDQtNC10YDQttC60LAg0LzQtdC20LTRgyDQsNC90LjQvNCw0YbQuNGP0LzQuCDRgdC70L7QslxyXG4gICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICBlYXNlOiAncG93ZXIyLm91dCcsXHJcbiAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IG9yaWdpbmFsVGl0bGVDb250ZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgICBnc2FwLmZyb21UbyhcclxuICAgICAgICBbdGV4dCwgYnV0dG9uXSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgeTogNTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgeTogMCxcclxuICAgICAgICAgIGRlbGF5OiAxLFxyXG4gICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICBlYXNlOiAncG93ZXIyLm91dCcsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXJlY3Rpb25zLWJsb2NrX19zbGlkZXInKSl7XHJcbiAgICBsZXQgZGlyZWN0aW9uc19zbGlkZXI7XHJcbiAgICBmdW5jdGlvbiBkaXJlY3Rpb25zX3NsaWRlcl9pbml0ICgpIHtcclxuICAgICAgaWYgKCFkaXJlY3Rpb25zX3NsaWRlcikge1xyXG4gICAgICAgIGRpcmVjdGlvbnNfc2xpZGVyID0gbmV3IFN3aXBlciAoJy5kaXJlY3Rpb25zLWJsb2NrX19zbGlkZXInLCB7XHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgIHNsaWRlc1BlckNvbHVtbkZpbGw6ICdjb2x1bW5zJyxcclxuICAgICAgICAgIHNsaWRlc1BlckNvbHVtbjogMixcclxuICAgICAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDU3MDoge1xyXG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLmRpcmVjdGlvbnMtYmxvY2tfX3NsaWRlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgICAgIGJ1bGxldHM6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5kaXJlY3Rpb25zLWJsb2NrX19zbGlkZXItYnV0dG9uX25leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcuZGlyZWN0aW9ucy1ibG9ja19fc2xpZGVyLWJ1dHRvbl9wcmV2JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRpcmVjdGlvbnNfc2xpZGVyX2Rlc3Ryb3kgKCkge1xyXG4gICAgICBpZiAoZGlyZWN0aW9uc19zbGlkZXIpIHtcclxuICAgICAgICBkaXJlY3Rpb25zX3NsaWRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgZGlyZWN0aW9uc19zbGlkZXIgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlyZWN0aW9ucy1ibG9ja19fc2xpZGVyJykpe1xyXG4gICAgICBsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgaWYgKHdpbmRvd1dpZHRoIDw9IDcwMCkge1xyXG4gICAgICAgIGRpcmVjdGlvbnNfc2xpZGVyX2luaXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkaXJlY3Rpb25zX3NsaWRlcl9kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT57XHJcbiAgICAgICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBpZiAod2luZG93V2lkdGggPD0gNzAwKSB7XHJcbiAgICAgICAgICBkaXJlY3Rpb25zX3NsaWRlcl9pbml0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpcmVjdGlvbnNfc2xpZGVyX2Rlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWFtLWJsb2NrX19zbGlkZXInKSl7XHJcbiAgICBjb25zdCB0ZWFtX3NsaWRlciA9IG5ldyBTd2lwZXIgKCcudGVhbS1ibG9ja19fc2xpZGVyJywge1xyXG4gICAgICB3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgIGNlbnRlcmVkU2xpZGVzQm91bmRzOnRydWUsXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgLy8gbG9vcDogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy50ZWFtLWJsb2NrX19zbGlkZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgICBidWxsZXRzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcudGVhbS1ibG9ja19fc2xpZGVyLWJ1dHRvbl9uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcudGVhbS1ibG9ja19fc2xpZGVyLWJ1dHRvbl9wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzgsICAgICAgICBcclxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA0MDA6e1xyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMiwgIFxyXG4gICAgICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTQwMDoge1xyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDI4LFxyXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvbjoge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0b2dnbGVOYXZpZ2F0aW9uKHRoaXMpLCAxMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRvZ2dsZU5hdmlnYXRpb24odGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3cy1zbGlkZXInKSl7XHJcbiAgICBjb25zdCByZXZpZXdzX3NsaWRlciA9IG5ldyBTd2lwZXIgKCcucmV2aWV3cy1zbGlkZXInLCB7XHJcbiAgICAgIHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcbiAgICAgIGNlbnRlcmVkU2xpZGVzQm91bmRzOnRydWUsXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAvLyBsb29wOiB0cnVlLFxyXG4gICAgICBzbGlkZXNPZmZzZXRBZnRlcjpmYWxzZSxcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5yZXZpZXdzLXNsaWRlcl9fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgICBidWxsZXRzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5yZXZpZXdzLXNsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnJldmlld3Mtc2xpZGVyLWJ1dHRvbl9wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzgsICBcclxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA0MDA6e1xyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMiwgIFxyXG4gICAgICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTQwMDoge1xyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDI4LFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbjoge1xyXG4gICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRvZ2dsZU5hdmlnYXRpb24odGhpcyksIDEwMCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdG9nZ2xlTmF2aWdhdGlvbih0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgfSlcclxuICB9XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2UtYmxvY2tfX3NsaWRlcicpKXtcclxuICAgIGNvbnN0IHNlcnZpY2Vfc2xpZGVyID0gbmV3IFN3aXBlciAoJy5zZXJ2aWNlLWJsb2NrX19zbGlkZXInLCB7XHJcblxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc2VydmljZS1ibG9ja19fc2xpZGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgYnVsbGV0czogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgc3BlZWQ6IDEyMDAsXHJcbiAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnNlcnZpY2UtYmxvY2tfX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnNlcnZpY2UtYmxvY2tfX3NsaWRlci1idXR0b25fcHJldicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgIHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgICBjZW50ZXJlZFNsaWRlc0JvdW5kczp0cnVlLFxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIGxvb3A6ZmFsc2UsXHJcbiAgICAgIHNsaWRlc09mZnNldEFmdGVyOmZhbHNlLFxyXG4gIFxyXG4gICAgfSlcclxuICAgIGxldCBzZXJ2aWNlX2N1cnJlbnRfc2xpZGUgPSBzZXJ2aWNlX3NsaWRlci5yZWFsSW5kZXggKyAxO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2UtYmxvY2tfX3NsaWRlci1jb3VudGVyJykuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tY291bnRlcl9fY3VycmVudFwiPlxyXG4gICAgICAgICR7c2VydmljZV9jdXJyZW50X3NsaWRlIDwgMTAgPyAnMCcgKyBzZXJ2aWNlX2N1cnJlbnRfc2xpZGUgOiBzZXJ2aWNlX2N1cnJlbnRfc2xpZGV9XHJcbiAgICAgIDwvc3Bhbj4gXHJcbiAgICAgIC8gXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudGVyX190b3RhbFwiPlxyXG4gICAgICAgICR7c2VydmljZV9zbGlkZXIuc2xpZGVzLmxlbmd0aCA8IDEwID8gJzAnICsgc2VydmljZV9zbGlkZXIuc2xpZGVzLmxlbmd0aCA6IHNlcnZpY2Vfc2xpZGVyLnNsaWRlcy5sZW5ndGh9XHJcbiAgICAgIDwvc3Bhbj5gO1xyXG4gICAgc2VydmljZV9zbGlkZXIub24oXCJzbGlkZUNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlcnZpY2VfY3VycmVudF9zbGlkZSA9IHRoaXMuYWN0aXZlSW5kZXggKyAxO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZS1ibG9ja19fc2xpZGVyLWNvdW50ZXInKS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudGVyX19jdXJyZW50XCI+XHJcbiAgICAgICR7c2VydmljZV9jdXJyZW50X3NsaWRlIDwgMTAgPyAnMCcgKyBzZXJ2aWNlX2N1cnJlbnRfc2xpZGUgOiBzZXJ2aWNlX2N1cnJlbnRfc2xpZGV9XHJcbiAgICAgIDwvc3Bhbj4gXHJcbiAgICAgIC8gXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudGVyX190b3RhbFwiPlxyXG4gICAgICAke3RoaXMuc2xpZGVzLmxlbmd0aCA8IDEwID8gJzAnICsgdGhpcy5zbGlkZXMubGVuZ3RoIDogdGhpcy5zbGlkZXMubGVuZ3RofVxyXG4gICAgICA8L3NwYW4+IGA7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2ctYmxvY2tfX3NsaWRlcicpKXtcclxuICAgIGNvbnN0IGJsb2dfYmxvY2tfc2xpZGVyID0gbmV3IFN3aXBlciAoJy5ibG9nLWJsb2NrX19zbGlkZXInLCB7XHJcbiAgICAgIHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAvLyBsb29wOiB0cnVlLFxyXG4gICAgICBzbGlkZXNPZmZzZXRBZnRlcjpmYWxzZSxcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5ibG9nLWJsb2NrX19zbGlkZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgICBidWxsZXRzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5ibG9nLWJsb2NrX19zbGlkZXItYnV0dG9uX25leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5ibG9nLWJsb2NrX19zbGlkZXItYnV0dG9uX3ByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMTAwOntcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxNDAwOiB7XHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDI4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uOiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRvZ2dsZU5hdmlnYXRpb24odGhpcyksIDEwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNpemU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdG9nZ2xlTmF2aWdhdGlvbih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJzLWJsb2NrX19zbGlkZXInKSl7XHJcbiAgICBjb25zdCB0YWJzX3NsaWRlciA9ICBuZXcgU3dpcGVyICgnLnRhYnMtYmxvY2tfX3NsaWRlcicsIHtcclxuICAgICAgd2F0Y2hPdmVyZmxvdzogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICBjZW50ZXJlZFNsaWRlc0JvdW5kczp0cnVlLFxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIGxvb3A6ZmFsc2UsXHJcbiAgICAgIHNsaWRlc09mZnNldEFmdGVyOmZhbHNlLFxyXG4gICAgICBcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlTmF2aWdhdGlvbihzd2lwZXIpIHtcclxuICBjb25zdCBwYWdpbmF0aW9uRWwgPSBzd2lwZXIucGFnaW5hdGlvbi5lbDtcclxuICBpZiAocGFnaW5hdGlvbkVsICYmIHBhZ2luYXRpb25FbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1wYWdpbmF0aW9uLWxvY2snKSkge1xyXG4gICAgLy8g0KHQutGA0YvQstCw0LXQvCDQutC90L7Qv9C60Lgg0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsKSB7XHJcbiAgICAgIHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCkge1xyXG4gICAgICBzd2lwZXIubmF2aWdhdGlvbi5wcmV2RWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8g0J/QvtC60LDQt9GL0LLQsNC10Lwg0LrQvdC+0L/QutC4INC90LDQstC40LPQsNGG0LjQuFxyXG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCkge1xyXG4gICAgICBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsKSB7XHJcbiAgICAgIHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sImZpbGUiOiJzbGlkZXJzLmpzIn0=
