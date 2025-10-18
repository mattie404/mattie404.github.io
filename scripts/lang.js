let languageSelect = document.getElementById("languageSelect"),
    title = document.querySelector(".title"),
    descr = document.querySelector(".titleDesc"),
    langLab = document.querySelector(".langLab"),
    home = document.querySelector(".home a");
    aboutme = document.querySelector(".aboutme a");
    guest = document.querySelector(".guestbook a");
    projects = document.querySelector(".projects a");
    contact = document.querySelector(".contact a");

languageSelect.addEventListener("change", () => {
    let selectedLang = languageSelect.value;

    title.textContent = data[selectedLang].title;
    descr.textContent = data[selectedLang].titleDesc;
    langLab.textContent = data[selectedLang].langLab;
    home.textContent = data[selectedLang].home;
    aboutme.textContent = data[selectedLang].aboutme;
    guest.textContent = data[selectedLang].guest;
    projects.textContent = data[selectedLang].projects;
    contact.textContent = data[selectedLang].contact;
});

let data = {
    english: {
        "title": "Matt's Website",
        "titleDesc": "Welcome to my personal website!",
        "langLab": "Select Language: ",
        "home": "Home",
        "aboutme": "About Me",
        "guest": "Guestbook",
        "projects": "Projects",
        "contact": "Contact",
    },

    hungarian: {
        "title": "Matyi Weboldala",
        "titleDesc": "Üdvözöllek a személyes weboldalamon!",
        "langLab": "Válassz nyelvet: ",
        "home": "Honlap",
        "aboutme": "Rólam",
        "guest": "Vendégkönyv",
        "projects": "Projektek",
        "contact": "Elérhetőség",
    }
}
