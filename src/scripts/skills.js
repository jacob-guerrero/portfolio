const skills = [
  {
    title: "HTML5",
    src: "./src/icons/html.png",
    alt: "html icon",
  },
  {
    title: "CSS3",
    src: "./src/icons/css.png",
    alt: "css icon",
  },
  {
    title: "JavaScript",
    src: "./src/icons/js.png",
    alt: "JavaScript icon",
  },
  {
    title: "React",
    src: "./src/icons/react.svg",
    alt: "react icon",
  },
  {
    title: "NodeJS",
    src: "./src/icons/nodejs.svg",
    alt: "nodejs icon",
  },
  {
    title: "ExpressJS",
    src: "./src/icons/express.png",
    alt: "express icon",
    imgClass: "w-15 h-10 bg-white px-2 my-2.5",
  },
  {
    title: "Python",
    src: "./src/icons/python.png",
    alt: "python icon",
  },
  {
    title: "PostgreSQL",
    src: "./src/icons/postgresql.png",
    alt: "postgresql icon",
  },
];

const additionalSkills = [
  {
    title: "Bootstrap",
    src: "./src/icons/bootstrap.svg",
    alt: "bootstrap icon",
  },
  {
    title: "Tailwind",
    src: "./src/icons/tailwind.svg",
    alt: "tailwind icon",
  },
  {
    title: "Material UI",
    src: "./src/icons/materialui.svg",
    alt: "materialui icon",
  },
  {
    title: "Figma",
    src: "./src/icons/figma.svg",
    alt: "figma icon",
  },
  {
    title: "Git",
    src: "./src/icons/git.svg",
    alt: "git icon",
  },
  {
    title: "Dbeaver",
    src: "./src/icons/dbeaver.png",
    alt: "dbeaver icon",
  },
  {
    title: "Django",
    src: "./src/icons/django.svg",
    alt: "django icon",
    imgClass: "w-25 h-15",
  },
];

function createSkills(arr, parent) {
  arr.forEach((skill) => {
    const liContainer = document.createElement("li");
    const imgSkill = document.createElement("img");
    const pSkill = document.createElement("p");

    /* li container */
    liContainer.className =
      "w-full bg-deep-blue rounded-lg flex flex-col gap-3 justify-center items-center px-4 py-6";

    /* img skill */
    imgSkill.src = `${skill.src}`;
    imgSkill.alt = `${skill.alt}`;
    imgSkill.className = !skill.imgClass ? "w-15 h-15" : `${skill.imgClass}`;

    /* div text content */
    pSkill.textContent = `${skill.title}`;
    pSkill.className = "text-xl";

    /* Append elements */
    liContainer.append(imgSkill, pSkill);

    parent.appendChild(liContainer);
  });
}

const skillsContainer = document.getElementById("skills_container");
createSkills(skills, skillsContainer);
