const allLinks = document.querySelectorAll("a");

// TASK 1
for (let i = 0; i < allLinks.length; i += 2) {
  allLinks[i].style.color = "red";
}

// TASK 2
for (let link of allLinks) {
  const href = link.getAttribute("href");
  if (!href) continue;
  if (href.startsWith("/")) continue;
  if (href.includes("://")) continue;
  link.style.color = "red";
}

const linkArr = Array.from(allLinks);

const isValid = (e) => e.hasAttribute("href");
const isOur = (e) => !e.getAttribute("href").startsWith("/");
const isProtocol = (e) => !e.getAttribute("href").includes("://");
const setColor = (e) => (e.style.color = "red");

linkArr.filter(isValid).filter(isOur).filter(isProtocol).forEach(setColor);
