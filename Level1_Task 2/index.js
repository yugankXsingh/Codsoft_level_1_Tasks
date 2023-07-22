
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");
    const fadeInOptions = {
        threshold: 0.2,
    };

    const fadeInObserver = new IntersectionObserver(function (entries, fadeInObserver) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    sections.forEach(function (section) {
        fadeInObserver.observe(section);
    });
});


// Function to check if an element is in the viewport
// Function to add the animation class when the projects section is in the viewport
function animateProjectsSection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}

// Create a new Intersection Observer instance
const projectsObserver = new IntersectionObserver(animateProjectsSection, {
    root: null,
    threshold: 0.5, // Adjust the threshold to control when the animation triggers
});

// Observe the projects section
const projectsSection = document.querySelector(".projects");
projectsObserver.observe(projectsSection);




