/* TODO LIST:
  - Generate the cards for projects
  - Learn to read how many files there are and act accordingly
*/

// const fs = require("fs"); //Node import? ONLY WORKS ON SERVER SIDE NOT CLIENT DONT USE IT

/*Project objects will have the following details:
- Name of project
- URL of image for project
- Image alt text
- Image credit (URL)
- Date of release of project
- Description of project
- List of skills/tools used in the project
- GithubURL of project
*/

class Project {
  constructor(
    name,
    imgURL,
    imgalt,
    imgCredit,
    date,
    description,
    skills,
    githubURL
  ) {
    this.name = name;
    this.imgURL = imgURL;
    this.imgalt = imgalt;
    this.imgCredit = imgCredit;
    this.date = Date.parse(date);
    this.description = description;
    this.skills = skills;
    this.githubURL = checkURL(githubURL);
  }
}

// const projectExample = {
//   name: "Visual Novel",
//   imgURL: "../images/visualnovel.jpg",
//   imgalt: "Gummy snakes on a toy plane",
//   imageCredit:
//     "https://i.pinimg.com/originals/15/2b/74/152b745c8b5f85a4a68dc8225b744bb7.jpg",
//   date: Date.parse("2010/04/23"),
//   description:
//     "A novel where the user makes choices along a story to determine the direction of the narrative. with supporting images, sound and music.",
//   skills: ["Java", "Leadership", "Team Mentor"],
//   githubURL: null,
// };

// Parse the JSON file into an array of Project objects

async function getDirtyJSONs(url) {
  const rawFetch = await fetch(url); // Grab raw data
  const jsFetch = await rawFetch.json(); //Turn to JS readable
  const payload = await jsFetch.payload; //Grab the payload

  let projectPop = "";
  for (const project of payload) {
    projectPop += `
    <div class="container">
      <div class="wrapper">
        <img
          src="${project.imgURL}"
          class="projImg"
          alt="${project.imgalt}"
        />
        <h3>${project.name}</h3>
        <p>${project.description}</p>
      </div>
    <div class="button-wrapper">
      <button class="btn outline">To CV Details</button>
      <button class="btn fill" >Github Code</button>
    </div>
  </div>`;
  }
}

getDirtyJSONs("../projects/all-projects.JSON");

/*Project Slideshow code*/
/******************************/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
