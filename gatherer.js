courses = document.getElementsByClassName("blockheading");
courseLinks = [];
for(var i = 1; i < courses.length; i++) {
    courseLinks.append(courses[i].getElementsByTagName('a')[0].href)
}
