function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show-menu");
  }
  

  function toggleReadMore() {
    var loveStoryContent = document.getElementById("love-story-content");
    var readMoreButton = document.querySelector(".read-more-button");
  
    if (loveStoryContent.style.display === "none" || loveStoryContent.style.display === "") {
      loveStoryContent.style.display = "block";
      readMoreButton.innerText = "Read Less";
    } else {
      loveStoryContent.style.display = "none";
      readMoreButton.innerText = "Read More";
    }
  }
  