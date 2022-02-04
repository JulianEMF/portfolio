const contactLink = document.querySelector("#contact-link");
const contactButton = document.querySelector("#contact-button-container button");
const contactLinkSmall = document.querySelector("#contact-link-small");

contactLinkSmall.addEventListener('click', () => { 
    smallNavigation.classList.add("invisible-menu");
    smallNavigation.classList.remove("visible-menu");
    mainBody.classList.remove("lock-screen");
});

const renderContact = () => {
    validateLanguage();
    const contactSectionContainer = document.createElement("div");
    contactSectionContainer.className = "contact-section";
    contactSectionContainer.id = "contact-section";
    const content = 
    `  
        <div id="close-contact-container">
            <img id="contact-cross" src="../images/cross.svg" alt="Close Arrow Icon">
        </div>
        <div>
            <h1 id="contact-title">Contact</h1>
            <div id="contact-content">
                <p id="contact-text">If you are interested in hiring me or just chatting about web development, motorcycles, music, or life. Contact me:</p>
                <form class="contact-form" action="https://formspree.io/f/mjvpnweb" method="POST"> 
                    <div>
                        <label for="input-name">Name:</label><br>
                        <input id="input-name" type="text" name="name" required><br>
                    </div>
                    <div>
                        <label for="input-email">Email:</label><br>
                        <input id="input-email" type="email" name="email" required cols="30" rows="10" required><br>
                    </div>
                    <div>
                        <label for="textarea-message">Message:</label><br>
                        <textarea id="textarea-message" type="text" name="message" required></textarea>
                    </div>
                    <button class="submit-button" type="submit" name="submit">Submit</button>
                </form>
            </div>
        </div>
    `;

    contactSectionContainer.innerHTML = content;
    wrapper.appendChild(contactSectionContainer);

    bringContactSectionContent();    

    const cross = document.querySelector("#contact-cross");
    cross.addEventListener('click', () => {
        closeContactSection();
    });
}

const addContactLinkListeners = () => {
    contactLink.addEventListener('click', displaceCirclesDown);
    contactLink.addEventListener('click', renderContact);

    contactLinkSmall.addEventListener('click', displaceCirclesDown);
    contactLinkSmall.addEventListener('click', renderContact);

    contactButton.addEventListener('click', displaceCirclesDown);
    contactButton.addEventListener('click', renderContact);
}

const closeContactSection = () => {
    if(document.querySelector("#contact-section")){
        wrapper.removeChild(document.querySelector("#contact-section"));
        bringMainContent();  
    }
}

const bringContactSectionContent = () => {
    anime({
        targets: ['#contact-section'],
        translateY: ['-200vh', '0vh'],
        duration: 1500,
        easing: 'easeOutElastic',        
    });
    anime({
        targets: ['#main-content', '#navigation-links'],
        translateY: '100vh',
        duration: 1500,
        easing: 'easeOutElastic',
        complete: () => currentSection = "contact"
    });
    setTimeout(() => {
        tiltContactSection();
    }, 1500)
}

const tiltContactSection = () => {
    $('#contact-section').tilt({
        perspective: 5000
    });
}

addContactLinkListeners();