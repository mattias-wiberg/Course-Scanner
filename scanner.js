
total = 0;
progress = 0;

function parse_course_code(dom) {
    var courseName = dom.getElementsByClassName('H3')[0].textContent;
    var courseCode = courseName.substring(0, courseName.indexOf(String.fromCharCode(160)));
    return courseCode;
}

function load_course(url) {

    // Creating Our XMLHttpRequest object 
    var xhr = new XMLHttpRequest();
    const parser = new DOMParser();

    // Making our connection  
    url = "http://localhost:8080/"+url;
    console.log("Requesting " + url)
    xhr.open("GET", url, true);

    // function execute after request is successful 
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            dom = parser.parseFromString(this.responseText, "text/html");
            courseCodes.push(parse_course_code(dom));
            console.log("Fetched " + courseCodes[courseCodes.length - 1]);
            progress++;
            console.log(progress + "/" + total)
        }
    }
    // Sending our request 
    xhr.send();
    total++;
    console.log(progress + "/" + total)
}

function fetch_course_codes() {
    for (var i = 0; i < urls.length; i++) {
        load_course(urls[i]);
    }
}

