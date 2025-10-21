// wait for the entire document to load in before running the script
document.addEventListener('DOMContentLoaded', function() {
    const projectDropdown = document.getElementById("projectType");

    // handles category changes
    function handleProjectChange(){
        const selectedCategory = projectDropdown.value;

        // hide all project sections first
        const allSections = document.querySelectorAll("[id$='-projects']");
        allSections.forEach(section => {
            section.style.display = "none";
    });

        // show only the section that matches the selected category
        const sectionToShow = document.getElementById(selectedCategory + "-projects");
        if(sectionToShow){
            sectionToShow.style.display = "block";
        }
    }

    // calls handleProjectChange when projectDropdown changes
    projectDropdown.addEventListener("change", handleProjectChange);

    handleProjectChange();

})