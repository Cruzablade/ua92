const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});



const HE = document.querySelectorAll('.prohidden');
HE.forEach((ele) => obs.observe(ele));