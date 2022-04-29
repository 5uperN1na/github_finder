// Init Github
const github = new Github();

//Init ui class

const ui = new UI;

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // console.log(userText);
    // Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === "Not Found") {
        //Show alert not found

      } else {
        //Show profile returned
        ui.showProfile(data.profile);
      }
    });
  } else {
    //Clear profile
  }
});
