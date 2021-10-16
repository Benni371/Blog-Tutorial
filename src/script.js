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
    document.getElementById("userInfo").innerHTML = "STORING AS INDIVIDUAL ITEMS:</br><p>User: " + localStorage.getItem("User") + "</p>" + "<p>Hobby: " + localStorage.getItem("Hobby") + "</p>" +"<p>Favorite Food: " + localStorage.getItem("FavFd") + "</p>"
}

function storeInfoAsObject(){
    let n = document.getElementById("name")
    let hbby = document.getElementById("hobby")
    let Fd = document.getElementById("favFd")
    let person = {name: n.value, hobby: hbby.value, favFd: Fd.value}
    console.log(person)
    //set the data for the user
    let jsonString = JSON.stringify(person);
    localStorage.setItem("Object", jsonString)

    //get the data from the user and parse it into a JS object
    let info = JSON.parse(localStorage.getItem("Object"))

    console.log(info)
    document.getElementById("userInfo").innerHTML += "<br>STORING AS OBJECT: <br>Hi " + info.name + " you like to do " + info.hobby + " and eat " + info.favFd

}

function StoreMultipleObjects(){
    // let personArr = []
    // let html = ""
    // let person1 = {name: "Jeff", hobby: "football", favFd: "hamburgers"}
    // let person2 = {name: "Jack", hobby: "baseball", favFd: "salad"}
    // let person3 = {name: "John", hobby: "hockey", favFd: "fries"}
    // //push to the array
    // personArr.push(person1)
    // personArr.push(person2)
    // personArr.push(person3)
    // //stringify the array
    // localStorage.setItem("People", JSON.stringify(personArr))

    // //if we want to retrieve only Jack
    // personArr.forEach(person => {
    //     if(person.name === "Jack"){
    //     html += "this is " + person.name + " he likes " + person.hobby + " and " + person.favFd + ". <br><br>"
    //     }
    // });
    // //if we want to get everybody
    // personArr.forEach(person => {
        
    //     html += "this is " + person.name + " he likes " + person.hobby + " and " + person.favFd + ". <br>"
        
    // });

    
    // document.getElementById("People").innerHTML = html


}