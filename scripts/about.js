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
            <img id="about-cross" src="../images/cross.svg" alt="Close Arrow Icon">
        </div>
        <h1>About</h1>
        <p id="about-first">I am Julian Montoya Franco, a Front End Developer located in Boston, Massachusetts.</p>
        <p id="about-second">My main focus of attention is on writing scalable code and designing interfaces that are pleasant and intuitive to the end user.</p>
        <p id="about-third">Since I can remember, problem solving and creating impactful visual elements have been two of my biggest passions. Therefore, coding and designing front end applications became extremely rewarding activities for me.</p>
        <p id="about-fourth">When I'm not learning new technologies I can be found riding my motorcycle, listening to classical and opera music, drawing, playing videogames and mastering a few recipes in the kitchen.</p>
        <h2 id="technologies-used">Technologies I use</h2>
       
        <div id="technologies-container">
            <div><img src="../images/technologies/html.svg" class="technology-image" alt="HTML logo"><p>HTML</p></div>
            <div><img src="../images/technologies/css.svg" class="technology-image" alt="Css logo"><p>CSS</p></div>
            <div><img src="../images/technologies/javascript.svg" class="technology-image" alt="Javascript logo"><p>JavaScript</p></div>
            <div><img src="../images/technologies/jquery.svg" class="technology-image" alt="Jquery logo"><p>JQuery</p></div>
            <div><img src="../images/technologies/react-js.svg" class="technology-image" alt="React logo"><p>React Js</p></div>
            <div><img src="../images/technologies/node-js.svg" class="technology-image" alt="NodeJs logo"><p>Node Js</p></div>
            <div><img src="../images/technologies/java.svg" class="technology-image" alt="Java logo"><p>Java</p></div> 
            <div><img src="../images/technologies/bootstrap.svg" class="technology-image" alt="Bootstrap logo"><p>Bootstrap</p></div>
            <div><img src="../images/technologies/photoshop.svg" class="technology-image" alt="Photoshop logo"><p>Photoshop</p></div>
            <div><img src="../images/technologies/illustrator.svg" class="technology-image" alt="Illustrator logo"><p>Illustrator</p></div>
            <div><img src="../images/technologies/xd.svg" class="technology-image" alt="Adobe Xd logo"><p>XD</p></div>
            <div><img src="../images/technologies/sass.svg" class="technology-image" alt="Sass logo"><p>Sass</p></div>
            <div><img src="../images/technologies/github.svg" class="technology-image" alt="Github logo"><p>Github</p></div>
            <div><img src="../images/technologies/vs-code.svg" class="technology-image" alt="Visual Studio logo"><p>VS Code</p></div>
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





