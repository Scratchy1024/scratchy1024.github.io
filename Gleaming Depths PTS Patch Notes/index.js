document.body.innerHTML = document.body.innerHTML.replaceAll(/(<div.*article-el-h3(.|\n)*?div>)/gm, '</div><button type="button" class="button collapsible">$1</button><div class="content">');
document.body.innerHTML = document.body.innerHTML.replace("<a href=\"https://discord.gg/fo76datamining\"", "</div>\n<a href=\"https://discord.gg/fo76datamining\"");

var coll = document.getElementsByClassName("collapsible");
var triDiv = document.createElement('i');
triDiv.classList.add('fa');
triDiv.classList.add('fa-caret-right');
triDiv.classList.add('fa-2x');
triDiv.classList.add('collapsible-triangle');

var noteCountDiv = document.createElement('div');
noteCountDiv.classList.add('note-count');

var i;
let hovercounters = [];

for (let i = 0; i < coll.length; i++) {
  coll[i].insertBefore(triDiv.cloneNode(true), coll[i].firstChild);
  var noteCount = coll[i].nextElementSibling.getElementsByClassName("miner-note").length;
  if (noteCount > 0){
  noteCountDiv.innerHTML = (noteCount + ' \u26CF');
  coll[i].append(noteCountDiv.cloneNode(true));
  }
}

for (i = 0; i < coll.length; i++) {
  if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // If media query matches
    coll[i].nextElementSibling.style.maxHeight = coll[i].nextElementSibling.scrollHeight + "px";
    coll[i].classList.toggle("active");
    coll[i].firstElementChild.classList.remove('fa-caret-right');
    coll[i].firstElementChild.classList.add('fa-caret-down');
  }
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var collapsibleTriangle = this.firstElementChild;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      collapsibleTriangle.classList.remove('fa-caret-down');
      collapsibleTriangle.classList.add('fa-caret-right');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      collapsibleTriangle.classList.remove('fa-caret-right');
      collapsibleTriangle.classList.add('fa-caret-down');
    }
  });
}

