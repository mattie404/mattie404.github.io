let languageSelect = document.getElementById("languageSelect"),
    title = document.querySelector(".title"),
    descr = document.querySelector(".titleDesc");
    langLab = document.querySelector(".langLab");

languageSelect.addEventListener("change", () => {
    let selectedLang = languageSelect.value;

    title.textContent = data[selectedLang].title;
    descr.textContent = data[selectedLang].titleDesc;
    langLab.textContent = data[selectedLang].langLab;
});

let data = {
    english: {
        "title": "Matt's Website",
        "titleDesc": "Welcome to my personal website!",
        "langLab": "Select Language: "
    },

    hungarian: {
        "title": "Matt's Website",
        "titleDesc": "Üdvözöllek a személyes weboldalamon!",
        "langLab": "Válassz nyelvet: "
    }
}