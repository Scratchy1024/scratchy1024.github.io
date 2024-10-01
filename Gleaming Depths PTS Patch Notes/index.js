document.body.innerHTML = document.body.innerHTML.replaceAll(/(<div.*article-el-h3(.|\n)*?div>)/gm,'</div><button type="button" class="button collapsible">$1</button><div class="content">');
document.body.innerHTML = document.body.innerHTML.replace("<div class=\"footer\">", "</div>\n<div class=\"footer\">");

var coll = document.getElementsByClassName("collapsible");
var triDiv = document.createElement('i');
triDiv.classList.add('fa');
triDiv.classList.add('fa-caret-right');
triDiv.classList.add('fa-2x');
triDiv.classList.add('triangle');
var i;
let hovercounters = [];

for (let i = 0; i < coll.length; i++) {
    coll[i].insertBefore(triDiv.cloneNode(true), coll[i].firstChild);
}

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var collapsibleTriangle = this.firstElementChild;
    if (content.style.maxHeight){
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