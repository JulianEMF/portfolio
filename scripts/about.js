const wrapper = document.querySelector("#wrapper");
const main = document.querySelector("#main-content");
const aboutLink = document.querySelector("#about-link");
const aboutLinkSmall = document.querySelector("#about-link-small");

aboutLinkSmall.addEventListener('click', () => { 
    smallNavigation.classList.add("invisible-menu");
    smallNavigation.classList.remove("visible-menu");
    mainBody.classList.remove("lock-screen");
});

const renderAbout = () => {
    validateLanguage();
    const aboutSectionContainer = document.createElement("div");
    aboutSectionContainer.className = "about-section";
    aboutSectionContainer.id = "about-section";
    const content = 
    `  
        <div id="close-about-container">
            <img id="about-cross" src="./styles/images/cross.svg" alt="Close Arrow Icon">
        </div>
        <h1>About</h1>
        <p id="about-first">I am Julian Montoya Franco, a Front End Developer located in Boston, Massachusetts.</p>
        <p id="about-second">My main focus of attention is on writing scalable code and designing interfaces that are pleasant and intuitive to the end user.</p>
        <p id="about-third">Since I can remember, problem solving and creating impactful visual elements have been two of my biggest passions. Therefore, coding and designing front end applications became extremely rewarding activities for me.</p>
        <p id="about-fourth">When I'm not learning new technologies I can be found riding my motorcycle, listening to classical and opera music, drawing, playing videogames and mastering a few recipes in the kitchen.</p>
        <h2 id="technologies-used">Technologies I use</h2>
        <div id="technologies-container">
            <img src="./styles/images/technologies/html.svg" alt="HTML logo">
            <img src="./styles/images/technologies/css.svg" alt="Css logo">
            <img src="./styles/images/technologies/javascript.svg" alt="Javascript logo">
            <img src="./styles/images/technologies/jquery.svg" alt="Jquery logo">
            <img src="./styles/images/technologies/react-js.svg" alt="React logo">
            <img src="./styles/images/technologies/node-js.svg" alt="NodeJs logo">
            <img src="./styles/images/technologies/bootstrap.svg" alt="Bootstrap logo">
            <img src="./styles/images/technologies/photoshop.svg" alt="Photoshop logo">
            <img src="./styles/images/technologies/illustrator.svg" alt="Illustrator logo">
            <img src="./styles/images/technologies/xd.svg" alt="Adobe Xd logo">
            <img src="./styles/images/technologies/sass.svg" alt="Sass logo">
            <img src="./styles/images/technologies/github.svg" alt="Github logo">
            <img src="./styles/images/technologies/vs-code.svg" alt="Visual Studio logo">
            <img src="./styles/images/technologies/java.svg" alt="Java logo">     
        </div>
    `;

    aboutSectionContainer.innerHTML = content;
    wrapper.appendChild(aboutSectionContainer);

    bringAboutSectionContent();    

    const cross = document.querySelector("#about-cross");
    cross.addEventListener('click', () => {
        closeAboutSection();
    });
}

const addAboutLinkListeners = () => {
    aboutLink.addEventListener('click', displaceCirclesDown);
    aboutLink.addEventListener('click', renderAbout);

    aboutLinkSmall.addEventListener('click', displaceCirclesDown);
    aboutLinkSmall.addEventListener('click', renderAbout);
}

const closeAboutSection = () => {
    if(document.querySelector("#about-section")){
        wrapper.removeChild(document.querySelector("#about-section"));
        bringMainContent();
    }
    
}

const bringAboutSectionContent = () => {
    anime({
        targets: ['#about-section'],
        translateY: ['-200vh', '0vh'],
        duration: 1500,
        easing: 'easeOutElastic',        
    });
    anime({
        targets: ['#main-content', '#navigation-links'],
        translateY: '100vh',
        duration: 1500,
        easing: 'easeOutElastic',
        complete: () => currentSection = "about"     
    });
    setTimeout(() => {
        tiltAboutSection();
    }, 1500)
}

const tiltAboutSection = () => {
    $('#about-section').tilt({
        perspective: 5000
    });
}

addAboutLinkListeners();

