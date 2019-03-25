const entries = document.getElementsByClassName("entry");
const articles = document.getElementsByClassName("article");
const timeline = document.getElementsByClassName("timeline")[0];

function init() {
  setWidth(timeline, entries.length, 3.7);
  addListeners();
  showElement(timeline);
}

function setWidth(ele, multiplier, value) {
  const widthCalc = multiplier * value;
  ele.style.width = `${widthCalc}px`;
}

function addListeners() {
  for (var i = 0; i < entries.length; i++) {
    entries.item(i).addEventListener("click", entryHandleClick);
  }
}

function entryHandleClick(e) {
  e.preventDefault();
  const entry = e.currentTarget;
  const article = entry.getElementsByClassName("article")[0];
  const thumbnail = entry.getElementsByClassName("thumbnail")[0];

  console.log(thumbnail);

  closeAllEntries();
  hideAllArticles();

  entry.classList.add("open");
  thumbnail.classList.add("hide");
  article.classList.remove("hide");

  centerEntry(entry);
}

function closeAllEntries() {
  for (var i = 0; i < entries.length; i++) {
    entries.item(i).classList.remove("open");
  }
}

function hideAllArticles() {
  for (var i = 0; i < articles.length; i++) {
    articles.item(i).classList.add("hide");
  }
}

function centerEntry(entry) {
  window.scroll(entry.offsetLeft - entry.offsetWidth / 2, 0);
}

function showElement(ele) {
  ele.style.opacity = 1;
}

init();
