const projects = [
  {
    title: "Plantory",
    description:
      "A simple app to manage plant nursery inventory, track stock, and organize plants.",
    projectImgSrc: "../images/plantory-screen.jpg",
    altImgSrc: "plantory app screenshot",
    linkSrc: "https://inventory-app-jg.up.railway.app/",
    githubSrc: "https://github.com/jacob-guerrero/odin-inventory-app",
    altExternalLinks: "External link",
  },
  {
    title: "Shopping Cart",
    description:
      "A React-based shopping cart application that allows users to browse products, add items to their cart, and manage quantities.",
    projectImgSrc: "../images/shopping-screen.jpg",
    altImgSrc: "shopping cart app screenshot",
    linkSrc: "https://shopping-cart-jg.netlify.app/",
    githubSrc: "https://github.com/jacob-guerrero/odin-shopping-cart",
    altExternalLinks: "External link",
  },
  {
    title: "The Purrfect Memory",
    description:
      "The Purrfect Memory is a React-based memory game where players click unique cat images without repeating selections.",
    projectImgSrc: "../images/memory-screen.jpg",
    altImgSrc: "Memory card app screenshot",
    linkSrc: "https://memory-card-jg.netlify.app/",
    githubSrc: "https://github.com/jacob-guerrero/odin-memorycard",
    altExternalLinks: "External link",
  },
  {
    title: "Weather App",
    description:
      "A simple and interactive weather forecast application that fetches real-time weather data using the Weather API.",
    projectImgSrc: "../images/weather-screen.jpg",
    altImgSrc: "Weather app screenshot",
    linkSrc: "https://jacob-guerrero.github.io/odin-weather-app/",
    githubSrc: "https://github.com/jacob-guerrero/odin-weather-app",
    altExternalLinks: "External link",
  },
  {
    title: "Battleship Game",
    description:
      "This project is a Battleship game where the development process is guided by Test-Driven Development.",
    projectImgSrc: "../images/battleship-screen.jpg",
    altImgSrc: "Battleship app screenshot",
    linkSrc: "https://jacob-guerrero.github.io/odin-battleship/",
    githubSrc: "https://github.com/jacob-guerrero/odin-battleship",
    altExternalLinks: "External link",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A simple Tic Tac Toe game built with JavaScript, HTML, and CSS, following the module pattern and factory functions.",
    projectImgSrc: "../images/tictactoe-screen.jpg",
    altImgSrc: "Tic Tac Toe app screenshot",
    linkSrc: "https://jacob-guerrero.github.io/odin-tic-tac-toe/",
    githubSrc: "https://github.com/jacob-guerrero/odin-tic-tac-toe",
    altExternalLinks: "External link",
  },
];

// Manage links
function addPathLinks() {
  const nav_about = document.getElementById("nav_about");
  const nav_skills = document.getElementById("nav_skills");
  const nav_projects = document.getElementById("nav_projects");
  const nav_contact = document.getElementById("nav_contact");

  if (window.location.pathname === "/portfolio/src/views/projects.html") {
    nav_about.href = "/portfolio/#about";
    nav_skills.href = "/portfolio/#skills";
    nav_projects.href = "/portfolio/#projects";
    nav_contact.href = "/portfolio/#contact";
  } else {
    nav_about.href = "/index.html#about";
    nav_skills.href = "/index.html#skills";
    nav_projects.href = "/index.html#projects";
    nav_contact.href = "/index.html#contact";
  }
}
addPathLinks();

function createProjects(arr, parent) {
  arr.forEach((project) => {
    const liContainer = document.createElement("li");
    const imgProject = document.createElement("img");
    const divInfoContent = document.createElement("div");
    const h3TitleProject = document.createElement("h3");
    const pDescriptionProject = document.createElement("p");
    const divLinksContainer = document.createElement("div");
    const aGithub = document.createElement("a");
    const imgGithub = document.createElement("img");
    const aExternal = document.createElement("a");
    const imgExternal = document.createElement("img");

    /* li container */
    liContainer.className = "group p-4 rounded-lg bg-deep-blue text-text-light";

    /* img project */
    imgProject.src = `${project.projectImgSrc}`;
    imgProject.alt = `${project.altImgSrc}`;
    imgProject.className =
      "aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:brightness-120";

    /* div text content */
    divInfoContent.className = "flex flex-col gap-1 pt-4";

    h3TitleProject.className = "text-xl";
    h3TitleProject.textContent = `${project.title}`;
    pDescriptionProject.textContent = `${project.description}`;

    /* div links container */
    divLinksContainer.className =
      "pt-2 text-lg font-medium flex justify-center gap-3";

    aExternal.href = `${project.linkSrc}`;
    aExternal.className = "w-6 hover:cursor-pointer";
    imgExternal.src = "../icons/link.svg";
    imgExternal.alt = "external link";

    aGithub.href = `${project.githubSrc}`;
    aGithub.className = "w-6 hover:cursor-pointer";
    imgGithub.src = "../icons/github-white.png";
    imgGithub.alt = "external link";

    /* Append elements */
    aExternal.appendChild(imgExternal);
    aGithub.appendChild(imgGithub);
    divLinksContainer.append(aExternal, aGithub);
    divInfoContent.append(
      h3TitleProject,
      pDescriptionProject,
      divLinksContainer
    );
    liContainer.append(imgProject, divInfoContent);

    parent.appendChild(liContainer);
  });
}

const projectContainer = document.getElementById("projects_container");
createProjects(projects, projectContainer);
