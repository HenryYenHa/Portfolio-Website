/* TODO LIST:
  - Generate the cards for projects

*/

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

function checkURL(theURL) {
  if (theURL == null) {
    return "MISSING_LINK";
  } else {
    return theURL;
  }
}

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

// Parse the JSON file
