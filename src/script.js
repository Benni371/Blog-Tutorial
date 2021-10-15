function storeInfoIndivid(){
    //get user input from index.html
    //use associated html ids to grab data

    let name = document.getElementById("name")
    let hobby = document.getElementById("hobby")
    let favFd = document.getElementById("favFd")
    //set the data for the user
    localStorage.setItem("User", name.value)
    localStorage.setItem("Hobby", hobby.value)
    localStorage.setItem("FavFd", favFd.value)

    //get the data from the user and display on index.html
    document.getElementById("userInfo").innerHTML = "<p>User: " + localStorage.getItem("User") + "</p>" + "<p>Hobby: " + localStorage.getItem("Hobby") + "</p>" +"<p>Favorite Food: " + localStorage.getItem("FavFd") + "</p>"
} 