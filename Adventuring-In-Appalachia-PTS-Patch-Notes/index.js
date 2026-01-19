document.body.innerHTML = document.body.innerHTML.replaceAll(/(<div.*article-el-h3(.|\n)*?div>)/gm, '</div><button type="button" class="button collapsible">$1</button><div class="content">');
document.body.innerHTML = document.body.innerHTML.replace("<a href=\"https://discord.gg/fo76datamining\"", "</div>\n<a href=\"https://discord.gg/fo76datamining\"");



var coll = document.getElementsByClassName("collapsible");
var collButt = document.getElementsByClassName("collapsebutton");
var collState = 1;
var triDiv = document.createElement('i');
triDiv.classList.add('fa');
triDiv.classList.add('fa-caret-right');
triDiv.classList.add('fa-2x');
triDiv.classList.add('collapsible-triangle');

var noteCountDiv = document.createElement('div');
noteCountDiv.classList.add('note-count');

var hrdiv = document.createElement("div");
hrdiv.classList.add("hr-sect");

var i;
let hovercounters = [];

for (let i = 0; i < coll.length; i++) {
  coll[i].insertBefore(triDiv.cloneNode(true), coll[i].firstChild);
  var noteCount = coll[i].nextElementSibling.getElementsByClassName("miner-note").length;
  var updateCount = coll[i].getElementsByClassName("update").length;
  if (noteCount > 0) {
    noteCountDiv.innerHTML = (noteCount + ' \u26CF');
    coll[i].append(noteCountDiv.cloneNode(true));
  }
  if (updateCount > 0) {
    coll[i].insertAdjacentElement('beforebegin', hrdiv.cloneNode(true));
  }
}

var updateHrs = document.getElementsByClassName("hr-sect");
const updateDates = ["Undocumented Changes and Datamined Info","1/16 Notes","12/18 Notes"];
for (let i = 0; i < updateHrs.length; i++) {
  updateHrs[i].innerHTML = updateDates[updateDates.length - 1 - i];
}

/* Expand desktop by default
if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
  collState = 0;
  collButt[0].textContent = "Expand all";
}
*/

for (i = 0; i < coll.length; i++) {
/* Expand desktop by default
  if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) { // If mobile
    coll[i].nextElementSibling.style.maxHeight = coll[i].nextElementSibling.scrollHeight + "px";
    coll[i].classList.toggle("active");
    coll[i].firstElementChild.classList.remove('fa-caret-right');
    coll[i].firstElementChild.classList.add('fa-caret-down');
  }
*/
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



function toggleSections() {
  if (collState == 0) {
    for (i = 0; i < coll.length; i++) {
      var content = coll[i].nextElementSibling;
      var collapsibleTriangle = coll[i].firstElementChild;
      coll[i].classList.remove("active");
      content.style.maxHeight = null;
      collapsibleTriangle.classList.remove('fa-caret-down');
      collapsibleTriangle.classList.add('fa-caret-right');
      collButt[0].textContent = "Expand all";
    }
    collState = 1;
  } else {
    for (i = 0; i < coll.length; i++) {
      var content = coll[i].nextElementSibling;
      var collapsibleTriangle = coll[i].firstElementChild;
      coll[i].classList.toggle("active");
      content.style.maxHeight = content.scrollHeight + "px";
      collapsibleTriangle.classList.remove('fa-caret-right');
      collapsibleTriangle.classList.add('fa-caret-down');
      collButt[0].textContent = "Collapse all";
    }
    collState = 0;
  }
}

