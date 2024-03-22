// import './lines-animation.js';

document.addEventListener('DOMContentLoaded', function(){
  if(document.querySelector('.hero__slider')){
    const hero_slider = new Swiper ('.hero__slider', {
      pagination: {
        el: '.hero__slider-pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
      },
      effect: 'slide', // Используйте эффект slide
      centeredSlides: true,
      loopAdditionalSlides: 5,
      speed: 1500,
      dynamicBullets: true,
      navigation: {
        nextEl: '.hero__slider-button_next',
        prevEl: '.hero__slider-button_prev',
      },
      // loop: true,
      on: {
        init: function () {
          updateSlideCounter(this);
        },
        slideChange: function () {
          updateSlideCounter(this);
        },
      },
    })

    function updateSlideCounter(hero_slider) {
      let currentSlide = hero_slider.realIndex + 1;
      const totalSlides = hero_slider.slides.length - hero_slider.loopAdditionalSlides;
      document.querySelector('.hero__slider-counter').innerHTML = `
      <span class="pagination-counter__current">
        ${currentSlide < 10 ? '0' + currentSlide : currentSlide}
      </span> 
      / 
      <span class="pagination-counter__total">
        ${totalSlides < 10 ? '0' + totalSlides : totalSlides}
      </span>`;
    }
    
      let hero_lines = document.querySelectorAll('.hero__line path');
      hero_lines.forEach(el => {
        let pathLength = el.getTotalLength();
        el.style.strokeDasharray = pathLength;
        el.style.strokeDashoffset = pathLength;
        el.style.opacity = 1;
      })
      hero_slider.on("slideChange", function () {
        currentSlide = this.activeIndex + 1;
        document.querySelector('.hero__slider-counter').innerHTML = `
        <span class="pagination-counter__current">
        ${currentSlide< 10 ? '0' + currentSlide : currentSlide}
        </span> 
        / 
        <span class="pagination-counter__total">
        ${this.slides.length< 10 ? '0' + this.slides.length : this.slides.length}
        </span> `;
        const title = this.slides[this.activeIndex].querySelector('.h1');
        gsap.fromTo(
          title,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            markers: false
          }
        );
 
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9saW5lcy1hbmltYXRpb24uanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3NsaWRlcicpKXtcclxuICAgIGNvbnN0IGhlcm9fc2xpZGVyID0gbmV3IFN3aXBlciAoJy5oZXJvX19zbGlkZXInLCB7XHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5oZXJvX19zbGlkZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgICBidWxsZXRzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBlZmZlY3Q6ICdzbGlkZScsIC8vINCY0YHQv9C+0LvRjNC30YPQudGC0LUg0Y3RhNGE0LXQutGCIHNsaWRlXHJcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICBsb29wQWRkaXRpb25hbFNsaWRlczogNSxcclxuICAgICAgc3BlZWQ6IDE1MDAsXHJcbiAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLmhlcm9fX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLmhlcm9fX3NsaWRlci1idXR0b25fcHJldicsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIGxvb3A6IHRydWUsXHJcbiAgICAgIG9uOiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdXBkYXRlU2xpZGVDb3VudGVyKHRoaXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHVwZGF0ZVNsaWRlQ291bnRlcih0aGlzKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZUNvdW50ZXIoaGVyb19zbGlkZXIpIHtcclxuICAgICAgbGV0IGN1cnJlbnRTbGlkZSA9IGhlcm9fc2xpZGVyLnJlYWxJbmRleCArIDE7XHJcbiAgICAgIGNvbnN0IHRvdGFsU2xpZGVzID0gaGVyb19zbGlkZXIuc2xpZGVzLmxlbmd0aCAtIGhlcm9fc2xpZGVyLmxvb3BBZGRpdGlvbmFsU2xpZGVzO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc2xpZGVyLWNvdW50ZXInKS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudGVyX19jdXJyZW50XCI+XHJcbiAgICAgICAgJHtjdXJyZW50U2xpZGUgPCAxMCA/ICcwJyArIGN1cnJlbnRTbGlkZSA6IGN1cnJlbnRTbGlkZX1cclxuICAgICAgPC9zcGFuPiBcclxuICAgICAgLyBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX3RvdGFsXCI+XHJcbiAgICAgICAgJHt0b3RhbFNsaWRlcyA8IDEwID8gJzAnICsgdG90YWxTbGlkZXMgOiB0b3RhbFNsaWRlc31cclxuICAgICAgPC9zcGFuPmA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgbGV0IGhlcm9fbGluZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVyb19fbGluZSBwYXRoJyk7XHJcbiAgICAgIGhlcm9fbGluZXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgbGV0IHBhdGhMZW5ndGggPSBlbC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gICAgICAgIGVsLnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IHBhdGhMZW5ndGg7XHJcbiAgICAgICAgZWwuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IHBhdGhMZW5ndGg7XHJcbiAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgIH0pXHJcbiAgICAgIGhlcm9fc2xpZGVyLm9uKFwic2xpZGVDaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuYWN0aXZlSW5kZXggKyAxO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zbGlkZXItY291bnRlcicpLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tY291bnRlcl9fY3VycmVudFwiPlxyXG4gICAgICAgICR7Y3VycmVudFNsaWRlPCAxMCA/ICcwJyArIGN1cnJlbnRTbGlkZSA6IGN1cnJlbnRTbGlkZX1cclxuICAgICAgICA8L3NwYW4+IFxyXG4gICAgICAgIC8gXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX3RvdGFsXCI+XHJcbiAgICAgICAgJHt0aGlzLnNsaWRlcy5sZW5ndGg8IDEwID8gJzAnICsgdGhpcy5zbGlkZXMubGVuZ3RoIDogdGhpcy5zbGlkZXMubGVuZ3RofVxyXG4gICAgICAgIDwvc3Bhbj4gYDtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuc2xpZGVzW3RoaXMuYWN0aXZlSW5kZXhdLnF1ZXJ5U2VsZWN0b3IoJy5oMScpO1xyXG4gICAgICAgIGdzYXAuZnJvbVRvKFxyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIHk6IDUwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjIub3V0JyxcclxuICAgICAgICAgICAgbWFya2VyczogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpcmVjdGlvbnMtYmxvY2tfX3NsaWRlcicpKXtcclxuICAgIGxldCBkaXJlY3Rpb25zX3NsaWRlcjtcclxuICAgIGZ1bmN0aW9uIGRpcmVjdGlvbnNfc2xpZGVyX2luaXQgKCkge1xyXG4gICAgICBpZiAoIWRpcmVjdGlvbnNfc2xpZGVyKSB7XHJcbiAgICAgICAgZGlyZWN0aW9uc19zbGlkZXIgPSBuZXcgU3dpcGVyICgnLmRpcmVjdGlvbnMtYmxvY2tfX3NsaWRlcicsIHtcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgc2xpZGVzUGVyQ29sdW1uRmlsbDogJ2NvbHVtbnMnLFxyXG4gICAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAyLFxyXG4gICAgICAgICAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAwOiB7XHJcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTcwOiB7XHJcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcuZGlyZWN0aW9ucy1ibG9ja19fc2xpZGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgICAgICAgYnVsbGV0czogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLmRpcmVjdGlvbnMtYmxvY2tfX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5kaXJlY3Rpb25zLWJsb2NrX19zbGlkZXItYnV0dG9uX3ByZXYnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGlyZWN0aW9uc19zbGlkZXJfZGVzdHJveSAoKSB7XHJcbiAgICAgIGlmIChkaXJlY3Rpb25zX3NsaWRlcikge1xyXG4gICAgICAgIGRpcmVjdGlvbnNfc2xpZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICBkaXJlY3Rpb25zX3NsaWRlciA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXJlY3Rpb25zLWJsb2NrX19zbGlkZXInKSl7XHJcbiAgICAgIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBpZiAod2luZG93V2lkdGggPD0gNzAwKSB7XHJcbiAgICAgICAgZGlyZWN0aW9uc19zbGlkZXJfaW5pdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpcmVjdGlvbnNfc2xpZGVyX2Rlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCk9PntcclxuICAgICAgICB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGlmICh3aW5kb3dXaWR0aCA8PSA3MDApIHtcclxuICAgICAgICAgIGRpcmVjdGlvbnNfc2xpZGVyX2luaXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGlyZWN0aW9uc19zbGlkZXJfZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlYW0tYmxvY2tfX3NsaWRlcicpKXtcclxuICAgIGNvbnN0IHRlYW1fc2xpZGVyID0gbmV3IFN3aXBlciAoJy50ZWFtLWJsb2NrX19zbGlkZXInLCB7XHJcbiAgICAgIHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgICAvLyBjZW50ZXJlZFNsaWRlc0JvdW5kczp0cnVlLFxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIHNsaWRlc09mZnNldEFmdGVyOmZhbHNlLFxyXG4gICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnRlYW0tYmxvY2tfX3NsaWRlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICAgIGJ1bGxldHM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnRlYW0tYmxvY2tfX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnRlYW0tYmxvY2tfX3NsaWRlci1idXR0b25fcHJldicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDM4LFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDQwMDp7XHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDMyLCAgXHJcbiAgICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxNDAwOiB7XHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjgsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgfSlcclxuICB9XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2UtYmxvY2tfX3NsaWRlcicpKXtcclxuICAgIGNvbnN0IHNlcnZpY2Vfc2xpZGVyID0gbmV3IFN3aXBlciAoJy5zZXJ2aWNlLWJsb2NrX19zbGlkZXInLCB7XHJcblxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc2VydmljZS1ibG9ja19fc2xpZGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgYnVsbGV0czogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgc3BlZWQ6IDEyMDAsXHJcbiAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnNlcnZpY2UtYmxvY2tfX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnNlcnZpY2UtYmxvY2tfX3NsaWRlci1idXR0b25fcHJldicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgICBjZW50ZXJlZFNsaWRlc0JvdW5kczp0cnVlLFxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIGxvb3A6ZmFsc2UsXHJcbiAgICAgIHNsaWRlc09mZnNldEFmdGVyOmZhbHNlLFxyXG4gIFxyXG4gICAgfSlcclxuICAgIGxldCBzZXJ2aWNlX2N1cnJlbnRfc2xpZGUgPSBzZXJ2aWNlX3NsaWRlci5yZWFsSW5kZXggKyAxO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2UtYmxvY2tfX3NsaWRlci1jb3VudGVyJykuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tY291bnRlcl9fY3VycmVudFwiPlxyXG4gICAgICAgICR7c2VydmljZV9jdXJyZW50X3NsaWRlIDwgMTAgPyAnMCcgKyBzZXJ2aWNlX2N1cnJlbnRfc2xpZGUgOiBzZXJ2aWNlX2N1cnJlbnRfc2xpZGV9XHJcbiAgICAgIDwvc3Bhbj4gXHJcbiAgICAgIC8gXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudGVyX190b3RhbFwiPlxyXG4gICAgICAgICR7c2VydmljZV9zbGlkZXIuc2xpZGVzLmxlbmd0aCA8IDEwID8gJzAnICsgc2VydmljZV9zbGlkZXIuc2xpZGVzLmxlbmd0aCA6IHNlcnZpY2Vfc2xpZGVyLnNsaWRlcy5sZW5ndGh9XHJcbiAgICAgIDwvc3Bhbj5gO1xyXG4gICAgc2VydmljZV9zbGlkZXIub24oXCJzbGlkZUNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNlcnZpY2VfY3VycmVudF9zbGlkZSA9IHRoaXMuYWN0aXZlSW5kZXggKyAxO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZS1ibG9ja19fc2xpZGVyLWNvdW50ZXInKS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudGVyX19jdXJyZW50XCI+XHJcbiAgICAgICR7c2VydmljZV9jdXJyZW50X3NsaWRlIDwgMTAgPyAnMCcgKyBzZXJ2aWNlX2N1cnJlbnRfc2xpZGUgOiBzZXJ2aWNlX2N1cnJlbnRfc2xpZGV9XHJcbiAgICAgIDwvc3Bhbj4gXHJcbiAgICAgIC8gXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudGVyX190b3RhbFwiPlxyXG4gICAgICAke3RoaXMuc2xpZGVzLmxlbmd0aCA8IDEwID8gJzAnICsgdGhpcy5zbGlkZXMubGVuZ3RoIDogdGhpcy5zbGlkZXMubGVuZ3RofVxyXG4gICAgICA8L3NwYW4+IGA7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2ctYmxvY2tfX3NsaWRlcicpKXtcclxuICAgIGNvbnN0IGJsb2dfYmxvY2tfc2xpZGVyID0gbmV3IFN3aXBlciAoJy5ibG9nLWJsb2NrX19zbGlkZXInLCB7XHJcbiAgICAgIHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgY2VudGVyZWRTbGlkZXNCb3VuZHM6dHJ1ZSxcclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzbGlkZXNPZmZzZXRBZnRlcjpmYWxzZSxcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5ibG9nLWJsb2NrX19zbGlkZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgICBidWxsZXRzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5ibG9nLWJsb2NrX19zbGlkZXItYnV0dG9uX25leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5ibG9nLWJsb2NrX19zbGlkZXItYnV0dG9uX3ByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAxMTAwOntcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxNDAwOiB7XHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDI4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9KVxyXG4gIH1cclxuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFicy1ibG9ja19fc2xpZGVyJykpe1xyXG4gICAgY29uc3QgdGFic19zbGlkZXIgPSAgbmV3IFN3aXBlciAoJy50YWJzLWJsb2NrX19zbGlkZXInLCB7XHJcbiAgICAgIHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgY2VudGVyZWRTbGlkZXNCb3VuZHM6dHJ1ZSxcclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICBsb29wOmZhbHNlLFxyXG4gICAgICBzbGlkZXNPZmZzZXRBZnRlcjpmYWxzZSxcclxuICAgIH0pXHJcbiAgfVxyXG59KSJdLCJmaWxlIjoic2xpZGVycy5qcyJ9