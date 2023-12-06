const fellowship = document.querySelector(".fellowship");
const allMembers = fellowship.querySelectorAll("p");
allMembers.forEach((el) => {
  el.style.color = "red";
});
