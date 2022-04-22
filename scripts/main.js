const englishButton = document.querySelector("#english-container img");
const spanishButton = document.querySelector("#spanish-container img");
const smallNavigation = document.querySelector(".small-navigation");
const mainBody = document.querySelector('body');
const burgerMenu = document.querySelector(".burger-menu");

// ANIMATION TO SLIDE IN THE MAIN MAIN CONTENT
const bringMainContent = () => {
    currentSection = "main";
    displaceCirclesUp();
    anime({
        targets: ['#main-content', '#navigation-links'],
        translateY: '0vh',
        duration: 500,
        easing: 'easeOutBack',        
    });
}

// CHECKS THAT THE WEBSITE HAS LOADED, AND LOADS THE LATEST LANGUAGE REGISTERED
const validateLanguage = () => {
    $(document).ready(()=>{
        if(localStorage.getItem('language') === 'es'){
            fetchTranslation("es");
        }
        else{
            fetchTranslation("en");
        };
    });
}

const fetchTranslation = (language) => {
    $.ajax({ 
        url: `./languages/${language}.json`,
        dataType: 'json', 
        async: true, 
        success: (data) => {
            const languageData = data;
            translate(languageData);
        }
    });
    localStorage.setItem('language', `${language}`);
}

const translate = (languageData) => {
    $('#about-link').text(languageData.about);
    $('#projects-link').text(languageData.projects);
    $('#contact-link').text(languageData.contact);
    $('#about-link-small').text(languageData.about);
    $('#projects-link-small').text(languageData.projects);
    $('#contact-link-small').text(languageData.contact);
    $('.shimmer').text(languageData.title);
    $('#contact-button-container button').text(languageData.contact);
    $('#about-section h1').text(languageData.about);
    $('#about-first').text(languageData.aboutFirst);
    $('#about-second').text(languageData.aboutSecond);
    $('#about-third').text(languageData.aboutThird);
    $('#about-fourth').text(languageData.aboutFourth);
    $('#technologies-used').text(languageData.technologiesUsed);
    $('#projects-title').text(languageData.projectTitle);
    $('.website').text(languageData.website);
    $('.code').text(languageData.code);
    $('#catering-description').text(languageData.cateringDescription);
    $('#catering-technologies').text(languageData.cateringTechnologies);
    $('#scheduler-description').text(languageData.schedulerDescription);
    $('#scheduler-technologies').text(languageData.schedulerTechnologies);
    $('#exortus-description').text(languageData.exortusDescription);
    $('#exortus-technologies').text(languageData.exortusTechnologies);
    $('#cooks-treat-description').text(languageData.cooksTreatDescription);
    $('#cooks-treat-technologies').text(languageData.cooksTreatTechnologies);
    $('#thanksgiving-description').text(languageData.thanksgivingDescription);
    $('#thanksgiving-technologies').text(languageData.thanksgivingTechnologies);
    $('#student-term-tracker-description').text(languageData.studentTermTrackerDescription);
    $('#student-term-tracker-technologies').text(languageData.studentTermTrackerTechnologies);
    $('#contact-title').text(languageData.contactTitle);
    $('#contact-text').text(languageData.contactText);
    $('.submit-button').text(languageData.submitButton);
}

englishButton.addEventListener('click', () => {
    fetchTranslation("en");
});

spanishButton.addEventListener('click', () => {
    fetchTranslation("es");
});

let currentSection = "main";
function escapeKeyDetection (){
    document.body.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            switch(currentSection){
                case "about":
                    closeAboutSection();
                    break;
                case "projects":
                    closeProjectsSection();
                    break;
                case "contact":
                    closeContactSection();
                    break;
                default:
            }
        }
    });
}

validateLanguage();
escapeKeyDetection();

burgerMenu.addEventListener('click', () => { 
    smallNavigation.classList.remove("invisible-menu");
    smallNavigation.classList.add("visible-menu");
    mainBody.classList.add("lock-screen");
    closeAllSections();

});

const closeButton = document.querySelector("#small-menu-close-button");
closeButton.addEventListener('click', () => {
    smallNavigation.classList.add("invisible-menu");
    smallNavigation.classList.remove("visible-menu");
    mainBody.classList.remove("lock-screen");
});

const closeAllSections = () =>{
    closeAboutSection();
    closeContactSection();
    closeProjectsSection();
}


