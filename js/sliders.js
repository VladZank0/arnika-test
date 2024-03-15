document.addEventListener('DOMContentLoaded', function(){

  const hero_slider = new Swiper ('.hero__slider', {
      pagination: {
        el: '.hero__slider-pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
      },
      speed: 1500,
      dynamicBullets: true,
      navigation: {
        nextEl: '.hero__slider-button_next',
        prevEl: '.hero__slider-button_prev',
      },

  })
  let currentSlide = hero_slider.realIndex + 1;
  document.querySelector('.hero__slider-counter').innerHTML = `
    <span class="pagination-counter__current">
      ${currentSlide < 10 ? '0' + currentSlide : currentSlide}
    </span> 
    / 
    <span class="pagination-counter__total">
      ${hero_slider.slides.length < 10 ? '0' + hero_slider.slides.length : hero_slider.slides.length}
    </span>`;
  hero_slider.on("slideChange", function () {
      currentSlide = this.activeIndex + 1;
      document.querySelector('.hero__slider-counter').innerHTML = `
      <span class="pagination-counter__current">
      ${currentSlide < 10 ? '0' + currentSlide : currentSlide}
      </span> 
      / 
      <span class="pagination-counter__total">
      ${this.slides.length < 10 ? '0' + this.slides.length : this.slides.length}
      </span> `;
  });



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


  const team_slider = new Swiper ('.team-block__slider', {
    watchOverflow: true,
    slidesPerView: "auto",
    centeredSlidesBounds:true,
    observer: true,
    observeParents: true,
    loop:false,
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
          spaceBetween: 32,
      },
      1400: {
          spaceBetween: 28,
      }
  }

  })


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

  const blog_block_slider = new Swiper ('.blog-block__slider', {
    watchOverflow: true,
    slidesPerView: 'auto',
    centeredSlidesBounds:true,
    observer: true,
    observeParents: true,
    loop:false,
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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG5cclxuICBjb25zdCBoZXJvX3NsaWRlciA9IG5ldyBTd2lwZXIgKCcuaGVyb19fc2xpZGVyJywge1xyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuaGVyb19fc2xpZGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgYnVsbGV0czogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgc3BlZWQ6IDE1MDAsXHJcbiAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLmhlcm9fX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLmhlcm9fX3NsaWRlci1idXR0b25fcHJldicsXHJcbiAgICAgIH0sXHJcblxyXG4gIH0pXHJcbiAgbGV0IGN1cnJlbnRTbGlkZSA9IGhlcm9fc2xpZGVyLnJlYWxJbmRleCArIDE7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3NsaWRlci1jb3VudGVyJykuaW5uZXJIVE1MID0gYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX2N1cnJlbnRcIj5cclxuICAgICAgJHtjdXJyZW50U2xpZGUgPCAxMCA/ICcwJyArIGN1cnJlbnRTbGlkZSA6IGN1cnJlbnRTbGlkZX1cclxuICAgIDwvc3Bhbj4gXHJcbiAgICAvIFxyXG4gICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX3RvdGFsXCI+XHJcbiAgICAgICR7aGVyb19zbGlkZXIuc2xpZGVzLmxlbmd0aCA8IDEwID8gJzAnICsgaGVyb19zbGlkZXIuc2xpZGVzLmxlbmd0aCA6IGhlcm9fc2xpZGVyLnNsaWRlcy5sZW5ndGh9XHJcbiAgICA8L3NwYW4+YDtcclxuICBoZXJvX3NsaWRlci5vbihcInNsaWRlQ2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5hY3RpdmVJbmRleCArIDE7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zbGlkZXItY291bnRlcicpLmlubmVySFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX2N1cnJlbnRcIj5cclxuICAgICAgJHtjdXJyZW50U2xpZGUgPCAxMCA/ICcwJyArIGN1cnJlbnRTbGlkZSA6IGN1cnJlbnRTbGlkZX1cclxuICAgICAgPC9zcGFuPiBcclxuICAgICAgLyBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX3RvdGFsXCI+XHJcbiAgICAgICR7dGhpcy5zbGlkZXMubGVuZ3RoIDwgMTAgPyAnMCcgKyB0aGlzLnNsaWRlcy5sZW5ndGggOiB0aGlzLnNsaWRlcy5sZW5ndGh9XHJcbiAgICAgIDwvc3Bhbj4gYDtcclxuICB9KTtcclxuXHJcblxyXG5cclxuICBsZXQgZGlyZWN0aW9uc19zbGlkZXI7XHJcbiAgZnVuY3Rpb24gZGlyZWN0aW9uc19zbGlkZXJfaW5pdCAoKSB7XHJcbiAgICBpZiAoIWRpcmVjdGlvbnNfc2xpZGVyKSB7XHJcbiAgICAgIGRpcmVjdGlvbnNfc2xpZGVyID0gbmV3IFN3aXBlciAoJy5kaXJlY3Rpb25zLWJsb2NrX19zbGlkZXInLCB7XHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIHNsaWRlc1BlckNvbHVtbkZpbGw6ICdjb2x1bW5zJyxcclxuICAgICAgICBzbGlkZXNQZXJDb2x1bW46IDIsXHJcbiAgICAgICAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICA1NzA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgIGVsOiAnLmRpcmVjdGlvbnMtYmxvY2tfX3NsaWRlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgICAgIGJ1bGxldHM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICBuZXh0RWw6ICcuZGlyZWN0aW9ucy1ibG9ja19fc2xpZGVyLWJ1dHRvbl9uZXh0JyxcclxuICAgICAgICAgIHByZXZFbDogJy5kaXJlY3Rpb25zLWJsb2NrX19zbGlkZXItYnV0dG9uX3ByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRpcmVjdGlvbnNfc2xpZGVyX2Rlc3Ryb3kgKCkge1xyXG4gICAgaWYgKGRpcmVjdGlvbnNfc2xpZGVyKSB7XHJcbiAgICAgIGRpcmVjdGlvbnNfc2xpZGVyLmRlc3Ryb3koKTtcclxuICAgICAgZGlyZWN0aW9uc19zbGlkZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlyZWN0aW9ucy1ibG9ja19fc2xpZGVyJykpe1xyXG4gICAgbGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBpZiAod2luZG93V2lkdGggPD0gNzAwKSB7XHJcbiAgICAgIGRpcmVjdGlvbnNfc2xpZGVyX2luaXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpcmVjdGlvbnNfc2xpZGVyX2Rlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKT0+e1xyXG4gICAgICB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBpZiAod2luZG93V2lkdGggPD0gNzAwKSB7XHJcbiAgICAgICAgZGlyZWN0aW9uc19zbGlkZXJfaW5pdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpcmVjdGlvbnNfc2xpZGVyX2Rlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICBjb25zdCB0ZWFtX3NsaWRlciA9IG5ldyBTd2lwZXIgKCcudGVhbS1ibG9ja19fc2xpZGVyJywge1xyXG4gICAgd2F0Y2hPdmVyZmxvdzogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgY2VudGVyZWRTbGlkZXNCb3VuZHM6dHJ1ZSxcclxuICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICBsb29wOmZhbHNlLFxyXG4gICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6ZmFsc2UsXHJcbiAgICBzcGVlZDogMTAwMCxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcudGVhbS1ibG9ja19fc2xpZGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgYnVsbGV0czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnRlYW0tYmxvY2tfX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy50ZWFtLWJsb2NrX19zbGlkZXItYnV0dG9uX3ByZXYnLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDA6IHtcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzIsXHJcbiAgICAgIH0sXHJcbiAgICAgIDE0MDA6IHtcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjgsXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIH0pXHJcblxyXG5cclxuICBjb25zdCBzZXJ2aWNlX3NsaWRlciA9IG5ldyBTd2lwZXIgKCcuc2VydmljZS1ibG9ja19fc2xpZGVyJywge1xyXG5cclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcuc2VydmljZS1ibG9ja19fc2xpZGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgYnVsbGV0czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBzcGVlZDogMTIwMCxcclxuICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuc2VydmljZS1ibG9ja19fc2xpZGVyLWJ1dHRvbl9uZXh0JyxcclxuICAgICAgcHJldkVsOiAnLnNlcnZpY2UtYmxvY2tfX3NsaWRlci1idXR0b25fcHJldicsXHJcbiAgICB9LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICB3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICBjZW50ZXJlZFNsaWRlc0JvdW5kczp0cnVlLFxyXG4gICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgIGxvb3A6ZmFsc2UsXHJcbiAgICBzbGlkZXNPZmZzZXRBZnRlcjpmYWxzZSxcclxuXHJcbiAgfSlcclxuICBsZXQgc2VydmljZV9jdXJyZW50X3NsaWRlID0gc2VydmljZV9zbGlkZXIucmVhbEluZGV4ICsgMTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZS1ibG9ja19fc2xpZGVyLWNvdW50ZXInKS5pbm5lckhUTUwgPSBgXHJcbiAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tY291bnRlcl9fY3VycmVudFwiPlxyXG4gICAgICAke3NlcnZpY2VfY3VycmVudF9zbGlkZSA8IDEwID8gJzAnICsgc2VydmljZV9jdXJyZW50X3NsaWRlIDogc2VydmljZV9jdXJyZW50X3NsaWRlfVxyXG4gICAgPC9zcGFuPiBcclxuICAgIC8gXHJcbiAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tY291bnRlcl9fdG90YWxcIj5cclxuICAgICAgJHtzZXJ2aWNlX3NsaWRlci5zbGlkZXMubGVuZ3RoIDwgMTAgPyAnMCcgKyBzZXJ2aWNlX3NsaWRlci5zbGlkZXMubGVuZ3RoIDogc2VydmljZV9zbGlkZXIuc2xpZGVzLmxlbmd0aH1cclxuICAgIDwvc3Bhbj5gO1xyXG4gIHNlcnZpY2Vfc2xpZGVyLm9uKFwic2xpZGVDaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgc2VydmljZV9jdXJyZW50X3NsaWRlID0gdGhpcy5hY3RpdmVJbmRleCArIDE7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZS1ibG9ja19fc2xpZGVyLWNvdW50ZXInKS5pbm5lckhUTUwgPSBgXHJcbiAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tY291bnRlcl9fY3VycmVudFwiPlxyXG4gICAgJHtzZXJ2aWNlX2N1cnJlbnRfc2xpZGUgPCAxMCA/ICcwJyArIHNlcnZpY2VfY3VycmVudF9zbGlkZSA6IHNlcnZpY2VfY3VycmVudF9zbGlkZX1cclxuICAgIDwvc3Bhbj4gXHJcbiAgICAvIFxyXG4gICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX3RvdGFsXCI+XHJcbiAgICAke3RoaXMuc2xpZGVzLmxlbmd0aCA8IDEwID8gJzAnICsgdGhpcy5zbGlkZXMubGVuZ3RoIDogdGhpcy5zbGlkZXMubGVuZ3RofVxyXG4gICAgPC9zcGFuPiBgO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBibG9nX2Jsb2NrX3NsaWRlciA9IG5ldyBTd2lwZXIgKCcuYmxvZy1ibG9ja19fc2xpZGVyJywge1xyXG4gICAgd2F0Y2hPdmVyZmxvdzogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgIGNlbnRlcmVkU2xpZGVzQm91bmRzOnRydWUsXHJcbiAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgbG9vcDpmYWxzZSxcclxuICAgIHNsaWRlc09mZnNldEFmdGVyOmZhbHNlLFxyXG4gICAgc3BlZWQ6IDEwMDAsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLmJsb2ctYmxvY2tfX3NsaWRlci1wYWdpbmF0aW9uJyxcclxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgIGJ1bGxldHM6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5ibG9nLWJsb2NrX19zbGlkZXItYnV0dG9uX25leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuYmxvZy1ibG9ja19fc2xpZGVyLWJ1dHRvbl9wcmV2JyxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAwOiB7XHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgfSxcclxuICAgICAgMTEwMDp7XHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcclxuICAgICAgfSxcclxuICAgICAgMTQwMDoge1xyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjgsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICB9KVxyXG5cclxufSkiXSwiZmlsZSI6InNsaWRlcnMuanMifQ==