const projectsLink = document.querySelector("#projects-link");
const projectsLinkSmall = document.querySelector("#projects-link-small");

projectsLinkSmall.addEventListener('click', () => { 
    smallNavigation.classList.add("invisible-menu");
    smallNavigation.classList.remove("visible-menu");
    mainBody.classList.remove("lock-screen");
});

const renderProjects = () => {
    validateLanguage();
    const projectsSectionContainer = document.createElement("div");
    projectsSectionContainer.className = "projects-section";
    projectsSectionContainer.id = "projects-section";
    const content = 
    `  
        <div id="close-projects-container">
            <img id="projects-cross" src="./images/cross.svg" alt="Close Arrow Icon">
        </div>

        <h1 id="projects-title">Projects</h1>

        <div id="projects-container">
            ${cateringProject}
            ${schedulerProject}
            ${exortusProject}
            ${cooksTreatProject}
            ${thanksgivingProject}
            ${termTrackerProject}
        </div>
    `;

    projectsSectionContainer.innerHTML = content;
    wrapper.appendChild(projectsSectionContainer);

    bringProjectsSectionContent();    

    const cross = document.querySelector("#projects-cross");
    cross.addEventListener('click', () => {
        closeProjectsSection();
        projectsLink.addEventListener('click', renderProjects);
    });

    // On Hover
    const eachProject = document.querySelectorAll("#project-container");
    if(detectWidth() > 501){
        eachProject.forEach(item => {
            item.addEventListener('mouseenter', (e)=>{
                console.log(item)
                onCardHover(item);          
            });
            item.addEventListener('mouseleave', (e)=>{
                onCardOut(item);
            });
        });
    }   
}

const cateringProject = `
    <div id="project-container" class="card">
        <div id="project-image-container-catering" class="image-container background-image">
            <div class="project-overlay">
                <div>
                    <a href="https://catering-management.herokuapp.com/" target="_blank"><img src="./images/web.svg"></a>
                    <p class="website">Website</p>
                </div>
                <div>
                    <a href="https://github.com/JulianEMF/catering-management-application" target="_blank"><img src="./images/code.svg"></a>
                    <p class="code">Code</p>
                </div>
            </div>
        </div>
        <div class="project-title-container">
            <h2>Catering Management Application</h2>
        </div>
        <div id="project-text-container" class="overflow-scroll invisible">
            <p id="catering-description">This is a web based application to assist in the daily operations of a catering company. It uses ExpressJs to expedite the creation of a server and its routes. This application integrates a secure login that uses encryption to store a hash of the password in the database. Functionalities to perform CRUD operations on a PostgreSQL database are also included. The alert system was created with the use of classes to display skills in the object oriented programming methodology. Main features like encapsulation, polymorphism, and inheritance are demonstrated in the code.</p>
            <p id="catering-technologies">Technologies: HTML, CSS, JavaScript, NodeJs, ExpressJs, PostgreSQL, Bcrypt, AXIOS, ILLUSTRATOR, XD, SVG</p>
        </div>
    </div>
`;

const schedulerProject = `
    <div id="project-container" class="card">
        <div id="project-image-container-scheduler" class="image-container background-image">
            <div class="project-overlay">
                <div>
                    <a href="https://github.com/JulianEMF/scheduler" target="_blank"><img src="./images/code.svg"></a>
                    <p class="code">Code</p>
                </div>
            </div>
        </div>
        <div class="project-title-container">
            <h2>Scheduler</h2>
        </div>
        <div id="project-text-container" class="overflow-scroll invisible">
            <p id="scheduler-description">This is a Java application with an integrated graphic interface that allows for appointment management. It allows to add contacts, customers, and appointments. The information is displayed in tables by using observable lists. The application implements functionalities that create, read, update, and delete data from the local database that is connected to.</p>
            <p id="scheduler-technologies">Technologies: Java, JavaFX, SQL</p>
        </div>
    </div>
`;

const exortusProject = `
    <div id="project-container" class="card">
        <div id="project-image-container-exortus" class="image-container background-image">
            <div class="project-overlay">
                <div>
                    <a href="https://julianemf.github.io/exortus/" target="_blank"><img src="./images/web.svg"></a>
                    <p class="website">Website</p>
                </div>
                <div>
                <a href="https://github.com/JulianEMF/exortus" target="_blank"><img src="./images/code.svg"></a>
                    <p class="code">Code</p>
                </div>
            </div>
        </div>
        <div class="project-title-container">
            <h2>Exortus</h2>
        </div>
        <div id="project-text-container" class="overflow-scroll invisible">
            <p id="exortus-description">Exortus is a website about a fictional transportation company that includes API requests to OpenWeather, images altered in photoshop and intricated animations. Elements like the burger menu, the navigation bar, and the slideshow have been programmed in JavaScript without the use of any libraries or frameworks.</p>
            <p id="exortus-technologies">Technologies: HTML, CSS/SASS, JavaScript, GSAP, AXIOS, ILLUSTRATOR, PHOTOSHOP, XD, SVG</p>
        </div>
    </div>
`;

const cooksTreatProject = `
    <div id="project-container" class="card">
        <div id="project-image-container-cooks-treat" class="image-container background-image">
            <div class="project-overlay">
                <div>
                    <a href="https://cooks-treat.netlify.app/" target="_blank"><img src="./images/web.svg"></a>
                    <p class="website">Website</p>
                </div>
                <div>
                    <a href="https://github.com/JulianEMF/cooks-treat" target="_blank"><img src="./images/code.svg"></a>
                    <p class="code">Code</p>
                </div>
            </div>
        </div>
        <div class="project-title-container">
            <h2>Cook's Treat</h2>
        </div>
        <div id="project-text-container" class="invisible overflow-scroll">
            <p id="cooks-treat-description">Cook's Treat is an application that requests recipes from the Tasty API, and returns the results in an organized way using React Js to assist with the content organization.</p>
            <p id="cooks-treat-technologies">Technologies: HTML, CSS/SASS, JavaScript, React, AXIOS, ILLUSTRATOR, PHOTOSHOP, XD, SVG.</p>
        </div>
    </div>
`;

const thanksgivingProject = `
    <div id="project-container" class="card">
        <div id="project-image-container-thanksgiving" class="image-container background-image">
            <div class="project-overlay">
                <div>
                    <a href="https://julianemf.github.io/thanksgiving/" target="_blank"><img src="./images/web.svg"></a>
                    <p class="website">Website</p>
                </div>
                <div>
                    <a href="https://github.com/JulianEMF/thanksgiving" target="_blank"><img src="./images/code.svg"></a>
                    <p class="code">Code</p>
                </div>
            </div>
        </div>
        <div class="project-title-container">
            <h2>I AM THANKSGIVING</h2>
        </div>
        <div id="project-text-container" class="overflow-scroll invisible">
            <p id="thanksgiving-description">I AM THANKSGIVING is the landing page for a potential new restaurant in the city of Boston. Most visual elements have been altered using photoshop, while the SVG elements were edited with Illustrator.</p>
            <p id="thanksgiving-technologies">Technologies: HTML, CSS/SASS, JavaScript, GSAP, ILLUSTRATOR, PHOTOSHOP, XD, SVG</p>
        </div>
    </div>
`;

const termTrackerProject = `
    <div id="project-container" class="card">
        <div id="project-image-container-term-tracker" class="image-container background-image">
            <div class="project-overlay">
                <div>
                    <a href="https://github.com/JulianEMF/student-term-tracker" target="_blank"><img src="./images/code.svg"></a>
                    <p class="code">Code</p>
                </div>
            </div>
        </div>
    <div class="project-title-container">
        <h2>Student Term Tracker</h2>
    </div>
    <div id="project-text-container" class="overflow-scroll invisible">
        <p id="student-term-tracker-description">The student term tracker application is a mobile application to track a student's progress throughout a college term. The user can add terms, courses, and assessments. They can also associate assessments to courses, and courses to terms. Alerts can be set to point out that a new term, or course is beginning, or that an assessment is due. The application uses the Java language in combination with built-in methods from the android library in order to instantiate a local database, create entities, query the database, and implement fragments, and activities.</p>
        <p id="student-term-tracker-technologies">Technologies: Java, Android Studio</p>
    </div>
`;


// Detects the window width to determine what animation to use for the project cards
const detectWidth = () => {
    return window.innerWidth;
}

window.addEventListener('resize', detectWidth);

const addProjectsLinkListeners = () => {
    projectsLink.addEventListener('click', displaceCirclesDown);
    projectsLink.addEventListener('click', renderProjects);

    projectsLinkSmall.addEventListener('click', displaceCirclesDown);
    projectsLinkSmall.addEventListener('click', renderProjects);
}

const closeProjectsSection = () => {
    if(document.querySelector("#projects-section")){
        wrapper.removeChild(document.querySelector("#projects-section"));
        bringMainContent();
    }
}

const bringProjectsSectionContent = () => {
    anime({
        targets: ['#projects-section'],
        translateY: ['-200vh', '0vh'],
        duration: 1500,
        easing: 'easeOutElastic',        
    });
    anime({
        targets: ['#main-content', '#navigation-links'],
        translateY: '100vh',
        duration: 1500,
        easing: 'easeOutElastic',
        complete: () => currentSection = "projects"      
    });
    setTimeout(() => {
        tiltProjectsSection();
    }, 1500)
}

const tiltProjectsSection = () => {
    $('#projects-section').tilt({
        perspective: 5000
    });
}

// On Mouse Over
const onCardHover = (item) => {
    const projectTitle = item.children[1];
    const projectDescription = item.children[2];
    const overlay = item.children[0].children[0];

    projectTitle.classList.remove("visible"); 
    projectTitle.classList.add("invisible");
    projectDescription.classList.remove("invisible"); 
    projectDescription.classList.add("visible"); 

    anime({
        targets: projectTitle,
        opacity:[1,0]
    });

    const tl = anime.timeline({
        targets: projectDescription,
        easing: 'easeInExpo',
        duration: 200
    });

    tl.add({
        translateY:[150, 0]
    });

    anime({
        targets: projectDescription,
        duration: 750,
        // background: ['#fff','radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(176,176,176,1) 100%)'],
    });
    anime({
        targets: overlay,
        opacity: 1
    });   
}

// On Mouse Out
const onCardOut = (item) => {
    const projectTitle = item.children[1];
    const projectDescription = item.children[2];
    const overlay = item.children[0].children[0];

    projectTitle.classList.remove("invisible"); 
    projectTitle.classList.add("visible"); 
    projectDescription.classList.remove("visible"); 
    projectDescription.classList.add("invisible"); 

    anime({
        targets: projectTitle,
        opacity:[1],
    });
    anime({
        targets: overlay,
        opacity: 0
    });  
}

addProjectsLinkListeners();






