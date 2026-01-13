const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target)//para magprint sa console
                entry.target.classList.add("show")//para lumabas
            }else{
              entry.target.classList.remove("show");//para umalis ulit pag baba
            }
        })
    }, {
      threshold: 0.01,
      rootMargin: '0px 0px -50px 0px'
    });
    const animatedElements = document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
