/* TODO LIST:
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
let scrollPosi = Number(0);
let isScrollListening = true;
let scrollPos = Number(0);
let howManyScrolls = 0;

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
  let projPopNum = 0;
  for (project of payload) {
    //Populate what needs to be written to innerHTML
    projPopNum++;
    projectPop += `
    <div class="container fade">
      <div class="wrapper">
        <div class="alignLeftAndRight">
          <img
            src="${project.imgURL}"
            class="projImg"
            alt="${project.imgalt}"
          />
          <div class="alignUpAndDown">
            <button
              class="btn outline"
              onclick="window.location.href='${project.githubURL}';"
            >
              GitHub Code
            </button>
            <button
              class="btn fill"
              onclick="window.location.href='${project.demoURL}';"
            >
              Try Demo
            </button>
          </div>
        </div>
        <h3>${project.name}</h3>
        <p class="cardDetails">${project.description}</p>
      </div>
    </div>`;
    document.getElementById(
      "populateDotsHere"
    ).innerHTML += `<span class="dot" onclick="currentSlide(${projPopNum})"></span>`;
  }
  //Write to innerHTML (the DOM)
  document.getElementById("populateProjectsHere").innerHTML += projectPop;
  //Refresh the slides
  showSlides(1);
}

getDirtyJSONs("../projects/all-projects.JSON");

/*Project Slideshow code*/
/************************************************************************************************************************/
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
  let slides = document.getElementsByClassName("container");
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

// Detect Scrolling
/*************************************************************************************************/
function delaySleepingScrolling() {
  isScrollListening = true;
}
// adding scroll event
function scrollingHere() {
  console.log("listenON?" + isScrollListening); //REMOVAL REQUIRED
  if (isScrollListening === true) {
    // Prevents further listening until finished
    isScrollListening = false;
    // detects new state and compares it with the old one
    console.log("sPosi" + scrollPosi); //REMOVAL REQUIRED
    if (document.body.getBoundingClientRect().top > scrollPosi) {
      console.log("up"); //REMOVAL REQUIRED
      scrollUpward();
    } else {
      console.log("down"); //REMOVAL REQUIRED
      scrollDownward();
    }
    // saves the new position for iteration.
    scrollPosi = document.body.getBoundingClientRect().top;
    console.log("++" + howManyScrolls++); //REMOVAL REQUIRED
  }
}

//Scroll Up Stuff
function scrollUpward() {
  if (scrollPos > 0) {
    scrollPos--;
  }
  scrollTo(scrollPos);
}
//Scroll Down Stuff
function scrollDownward() {
  if (scrollPos < 4) {
    scrollPos++;
  }
  scrollTo(scrollPos);
}
//Scroll To Stuff
function scrollTo(n) {
  scrollPos = n;
  console.log("sPos" + scrollPos);
  switch (scrollPos) {
    case 0:
      window.location.href = "#pageTop";
      break;
    case 1:
      window.location.href = "#skills";
      break;
    case 2:
      window.location.href = "#projects";
      break;
    case 3:
      window.location.href = "#about";
      break;
    case 4:
      window.location.href = "#contact";
      break;
    default:
      console.log("SCROLLING TO UNKNOWN ZONE#####################");
  }
  // Re-enable scrolling after 3s
  setTimeout(delaySleepingScrolling(), 3000);
}
