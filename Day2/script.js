var navBar = document.getElementById("navBar");
var contentDiv = document.getElementById("contentDiv");
var id = 1;


var result  = fetch("https://jsonplaceholder.typicode.com/users");

result.then((res) => {
    return res.json();
})
.then((usersName) => {
    for(var i = 0; i < usersName.length; i++){
        var anchor = document.createElement('a');
        var link = document.createTextNode(usersName[i].name);
        anchor.appendChild(link);

        anchor.classList.add("nav-item");
        anchor.classList.add("nav-link");
        anchor.id = id;

        anchor.setAttribute("data-toggle", "tab");
        anchor.setAttribute("aria-selected", "false");
        anchor.setAttribute("role", "tab");
        anchor.setAttribute("aria-controls", `nav-${id}`);
        anchor.setAttribute("onclick", "newContent(this)");

        anchor.href = `#nav-${id++}`;
        navBar.appendChild(anchor); 
    }
})
.catch((error) => {
    console.log(error);
});


async function getPostTitles(div, userId) {
    try {
        var result = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId);

        var postsText = await result.json();
        for(var i = 0; i < postsText.length; i++){
            div.innerHTML += i+1 + "- " + postsText[i].title + "<br>";
        }
    } catch (error) {
        console.log(error);
    }
}

function newContent(that) {
    var dataDiv = document.createElement('div');

    dataDiv.classList.add("tab-pane");
    dataDiv.classList.add("fade");

    dataDiv.id = that.getAttribute("aria-controls");
    dataDiv.setAttribute("role", "tabpanel");
    dataDiv.setAttribute("aria-labelledby", that.id);

    contentDiv.appendChild(dataDiv);

    getPostTitles(dataDiv, that.id);
}

