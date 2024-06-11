(function(){
    document.addEventListener('DOMContentLoaded', (event) => {
        const navLinks = document.querySelectorAll('[data-anchor=""]');
        if(navLinks.length){
            navLinks.forEach((link)=>{
                link.addEventListener('click', (event)=>{
                    event.preventDefault();
                    const targetId = link.getAttribute('href').slice(1);
                     // Получаем ID, удаляя символ '#'
                    const targetElement = document.getElementById(targetId); // Находим целевой элемент по ID
                    if (targetElement && document.querySelector('.tabs-block')) {
                        // Получаем позицию элемента относительно верха страницы
                        const topPosition = targetElement.offsetTop;
                        if(window.matchMedia('(min-width: 1401px)').matches){
                            window.scrollTo({top: topPosition - 218, behavior: 'smooth'});  
                        }else if(window.matchMedia('(min-width: 1101px)').matches) {
                            window.scrollTo({top: topPosition - 203, behavior: 'smooth'});  
                        }else if(window.matchMedia('(min-width: 701px)').matches) {
                            window.scrollTo({top: topPosition - 176, behavior: 'smooth'});  
                        }else{
                            window.scrollTo({top: topPosition - 132, behavior: 'smooth'});  
                        }
                    }else{
                        // const topPosition = targetElement.offsetTop - document.body.offsetTop;
                        const bodyOffsetTop = document.body.getBoundingClientRect().top;
                        const elementOffsetTop = targetElement.getBoundingClientRect().top;
                        const topPosition = elementOffsetTop - bodyOffsetTop;
                        if(window.matchMedia('(min-width: 1401px)').matches){
                            window.scrollTo({top: topPosition - 148, behavior: 'smooth'}); 
                            
                            // targetElement.scrollIntoView({
                            //     behavior: 'smooth',
                            //     block: 'start',
                            //     inline: 'start' ,
                            //     top: topPosition - 148
                            // }); 
                            
                        }else if(window.matchMedia('(min-width: 1101px)').matches) {
                            // targetElement.scrollIntoView({
                            //     behavior: 'smooth',
                            //     block: 'start',
                            //     // inline: 'start' ,
                            //     top: topPosition - 136
                            // }); 
                            window.scrollTo({top: topPosition - 136, behavior: 'smooth'}); 
                        }else if(window.matchMedia('(min-width: 701px)').matches) {
                            window.scrollTo({top: topPosition - 112, behavior: 'smooth'});  
                        }else{
                            window.scrollTo({top: topPosition - 72, behavior: 'smooth'});  
                        }
                    }
                })
            })
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        document.querySelectorAll('[data-anchor=""').forEach((link) => {
                        link.classList.remove('active-anchor');
                    });
                    const id = entry.target.getAttribute('id');
                    const navLink = document.querySelector(`[data-anchor=""][href="#${id}"]`);
                    navLink.classList.add('active-anchor');
                  }
                });
            }, {rootMargin: "-50% 0px -50% 0px"}); // Adjust rootMargin to control when the link becomes active
            if(document.querySelectorAll('[data-anchor-content=""').length){
                document.querySelectorAll('[data-anchor-content=""').forEach((section) => {
                    observer.observe(section);
                })
            }
        }
    });
}())