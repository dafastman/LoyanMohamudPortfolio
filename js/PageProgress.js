const upArrow = document.getElementById('up-arrow');
const scrollYHeight = document.body.scrollHeight
const bar = document.getElementById('bar')

upArrow.addEventListener('click', function(event) {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",    
    });
});

setInterval(function(){
    let scrollY = window.scrollY
    let scrollPercentage = (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    bar.style.width = scrollPercentage + '%'
}, 5)