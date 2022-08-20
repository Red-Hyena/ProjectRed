const introSection = document.querySelector('.introSection');
const navbar = document.querySelector('.navbar');


const introSectionOptions = {

};



const introSectionObserver = new IntersectionObserver(function(
    entries, introSectionObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log(entry);
                navbar.classList.add('navbarScrolled');
            } else {
                console.log(entry);
                navbar.classList.remove('navbarScrolled');
            }
        });
    }, introSectionOptions);

introSectionObserver.observe(introSection);