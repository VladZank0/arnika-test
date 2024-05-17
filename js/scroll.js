(function(){
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollSmoother);
        function isTouchDevice() {
            return 'ontouchstart' in window || navigator.maxTouchPoints;
        }
        if(!isTouchDevice() && window.innerWidth > 1100){
            let tabsScrollTrigger;
            let searchScrollTrigger;
            const smoother = ScrollSmoother.create({
                wrapper: "#wrapper",
                content: "#content",
                smooth: 1.8,
                effects: true,
                preventDefault: true,
                normalizeScroll: false,  
            });
            let scroll_header = ScrollTrigger.create({
                trigger: '.header',
                start: 'top top',
                end: 'max',
                pin: true,
                pinSpacing: false,
                
            });
            if(document.querySelector('.about-clinic-description__img')){
                let height = document.querySelector('.about-clinic-description__img').offsetHeight;
                console.log(height);

                scroll_flower = ScrollTrigger.create({
                    trigger: '.about-clinic-description',
                    start: 'top-=148',
                    end: `bottom-=${+height + 148}`,
                    pin: '.about-clinic-description__img',
                    pinSpacing: false,
                });
            }
            if(document.querySelector('.tabs-block_navigation')){
                function setupTabsTrigger() {
                    const screenWidth = window.innerWidth;
                    if (tabsScrollTrigger) {
                        tabsScrollTrigger.kill();
                    }
                    if (screenWidth > 1400) {
                        tabsScrollTrigger = ScrollTrigger.create({
                            trigger: '.hero-block',
                            start: 'bottom-=148px',
                            end: 'max',
                            pin: '.tabs-block_navigation',
                            pinSpacing: false,
                            scrub: true 
                        });
                    } else if(screenWidth > 1100) {
                        tabsScrollTrigger = ScrollTrigger.create({
                            trigger: '.hero-block',
                            start: 'bottom-=136px',
                            end: 'max',
                            pin: '.tabs-block_navigation',
                            pinSpacing: false,
                            scrub: true 
                        });
                    } else if(screenWidth > 700){
                        tabsScrollTrigger = ScrollTrigger.create({
                            trigger: '.hero-block',
                            start: 'bottom-=112px',
                            end: 'max',
                            pin: '.tabs-block_navigation',
                            pinSpacing: false,
                            scrub: true 
                        });
                    } else{
                        tabsScrollTrigger = ScrollTrigger.create({
                            trigger: '.hero-block',
                            start: 'bottom-=72px',
                            end: 'max',
                            pin: '.tabs-block_navigation',
                            pinSpacing: false,
                            scrub: true 
                        });
                    }
                }
                setupTabsTrigger();
                window.addEventListener('resize', setupTabsTrigger);
            }
            if(document.querySelector('.search-wrapper_fixed')){
                function setupSearchTrigger() {
                    const screenWidth = window.innerWidth;
                    if (searchScrollTrigger) {
                        searchScrollTrigger.kill();
                    }
                    if (screenWidth > 1400) {
                        searchScrollTrigger = ScrollTrigger.create({
                            trigger: '#search-container',
                            start: 'top-=188',
                            end: 'bottom',
                            pin: '.search-wrapper',
                            pinSpacing: false,
                            scrub: true 
                        });
                    } else if(screenWidth > 1100) {
                        searchScrollTrigger = ScrollTrigger.create({
                            trigger: '#search-container',
                            start: 'top-=176px',
                            end: 'bottom',
                            pin: '.search-wrapper',
                            pinSpacing: false,
                            scrub: true 
                        });
                    } else if(screenWidth > 700){
                        searchScrollTrigger = ScrollTrigger.create({
                            trigger: '#search-container',
                            start: 'top-=144px',
                            end: 'bottom',
                            pin: '.search-wrapper',
                            pinSpacing: false,
                            scrub: true 
                        });
                    } else{
                        searchScrollTrigger = ScrollTrigger.create({
                            trigger: '#search-container',
                            start: 'top-=100px',
                            end: 'bottom',
                            pin: '.search-wrapper',
                            pinSpacing: false,
                            scrub: true 
                        });
                    }
                }
                setupSearchTrigger();
                window.addEventListener('resize', setupSearchTrigger);
            }
           
            document.querySelectorAll('button').forEach((e)=>{
                if( e.classList.contains('custom-tab') || 
                    e.classList.contains('accordion-btn') || 
                    e.classList.contains('expanded-block-button') ||
                    e.classList.contains('show-more-btn') ||
                    e.classList.contains('tab')){
                        e.addEventListener('click', (event)=>{
                            if(e.closest('.accordion-container')){
                                // gsap.to('.accordion-content', {
                                //     onUpdate: () => {
                                //         ScrollTrigger.refresh(); // Обновление ScrollTrigger при изменении высоты
                                //     }, 
                                // });
                                setTimeout(()=>{
                                    ScrollTrigger.refresh(); 
                                }, 500)
                            }else{
                                ScrollTrigger.refresh(); // Обновление ScrollTrigger при изменении высоты
                            }
                        })
                }
            })
            document.querySelectorAll('a').forEach((e)=>{
                if( e.classList.contains('custom-tab') || 
                    e.classList.contains('accordion-btn') || 
                    e.classList.contains('expanded-block-button') ||
                    e.classList.contains('show-more-btn') ||
                    e.classList.contains('tab')){
                        e.addEventListener('click', (event)=>{
                            if(e.closest('.accordion-container')){
                                gsap.to('.accordion-content', {
                                    onUpdate: () => {
                                        ScrollTrigger.refresh(); // Обновление ScrollTrigger при изменении высоты
                                    }, 
                                });
                            }else{
                                ScrollTrigger.refresh(); // Обновление ScrollTrigger при изменении высоты
                            }
                        })
                }
            })
        }
       
}())

 