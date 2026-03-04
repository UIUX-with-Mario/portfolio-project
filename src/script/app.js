const projectContainer = document.querySelector(".project-card-container");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
import  projects  from "/src/script/data.js";

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

function renderProjects() {
    projectContainer.innerHTML = projects.map(project => {
        return `
            <div class="project-card">
                <div class="project-image-container"> <img src="${project.image}" alt="${project.name}" class="project-image"></div>
                <div class="project-info">
                    <p class="project-type">${project.type}</p>
                    <p class="project-title"> ${project.name} </p>
                    <p class="project-note"> ${project.description}</p>
                    <a href="${project.link}" target="_blank"> View Project</a>
                </div>
            </div>
        `;
    }).join("");
}

renderProjects();

const sunBtn = document.getElementById('sun');
const moonBtn = document.getElementById('moon');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
}

moonBtn.addEventListener('click', () => {
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
});

sunBtn.addEventListener('click', () => {
  root.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
});