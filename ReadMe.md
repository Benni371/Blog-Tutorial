# Local Storage, A Genius Way to Store Local Data #
## Introduction ##  
Local Storage was the one of the great features introduced to modern browsers when HTML 5 came out. Unlike session storage, local storage does not get erased even if the browser is later closed. To compare it to something more relatable, Local Storage is in a way a cousin to browser cookies. Unlike Local Storage, cookies operate on the server-side and have an expiration date(usually when the browser is closed unless otherwise specified). The advantages of using Local Storage truly shine when the client data is the focus of the website. Not only does it not expire but browsers allocate around 5MB for Local Storage compared to the 4kb allocated for cookies. In this tutorial, we'll discuss the benefits of using local storage as well as how to use it to store data on your website.

## Tutorial ## 
### Getting Started ###
To begin, you'll need to have a coding environment. Visual Studio Code is my go-to but really any code environment where you can manipulate HTML and JavaScript files will do.  
Next, you'll need to find a way to run your code. I use the [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to see my code live. You can also just open up the index.html file with file explorer(Windows) or Finder(Mac) to see your progress.
Before we start using Local Storage we need to understand some basics on how it actually works. Local Storage is a way for programmers to store user data in a way that is easily accessible and easy to manipulate. Local Storage uses key value pairs in the form of strings in order to store information. A key value pair usually looks something like this:  
`"Vegetables" : "Carrots"`  
In this example Vegetables is the key and Carrots is the value. As mentioned before, Local Storage can hold up to 5MB of data so we could use multiple key value pairs in our storage. You might be thinking that only storing strings is a pretty limited way to store things. Luckily JavaScript has a way that we can store objects in Local Storage using a notation called JSON (JavaScript Object Notation). By using JSON we are able to "stringify" objects and then store them in Local Storage. So in this example, I could add peas, potatoes, cucumbers, etc to the key Vegetables by using JSON. Without JSON, you would only be able to add one string to each key. I'll explain this later in the tutorial so just know for now that Local Storage is able to accept a wide range of data by incorporating JSON.
To begin using local storage, we'll need to create a HTML File with some basic elements that we can manipulate. Follow along with this tutorial [here](https://github.com/Benni371/Blog-Tutorial.git) and then copy the contents of the index.html file into your file in your coding environment. After that setup is done we can focus on manipulating Local storage. In order to manipulate Local Storage we'll need to create a new file called `script.js` the link to this file is already in the `index.html` so you wont have to worry about that part. Now that we have created the script file we can do some simple Local Storage manipulation. There are 2 steps when it comes to doing simple Local Storage manipulation: `localStorage.setItem()` and `localStorage.getItem()`. For the first function that we are going to use we are going to get you to know the basics of how local storage is working. I have given id's to the input tags in `index.html` so that we can use them in `script.js`.   
```js
    let name = document.getElementById("name")
    let hobby = document.getElementById("hobby")
    let favFd = document.getElementById("favFd")
    //set the data for the user
    localStorage.setItem("User", name.value)
    localStorage.setItem("Hobby", hobby.value)
    localStorage.setItem("FavFd", favFd.value)

    //get the data from the user and display on index.html
    document.getElementById("userInfo").innerHTML = "<p>User: " + localStorage.getItem("User") + "</p>" + "<p>Hobby: " + localStorage.getItem("Hobby") + "</p>" +"<p>Favorite Food: " + localStorage.getItem("FavFd") + "</p>"

```
In the first part of the code block I grab each element by its id. Then to store those values in Locale storage I used the `setItem()` method. In each instance that I use `setItem()` the first value is the unique key and the second is the value that the user entered for that field. Key fields **have** to be unique otherwise there will be errors. Now once I have set each of those values, I can retrieve them by using the `getItem()` method. In that line of code I use inner HTML to display three different `<p>` tags that each contain the local storage values. With `getItem()` you can only retrieve one item for each key so you dont need to reference anything else besides the key. Go ahead and test the code and see if it displays! Now once its working, refresh your page and left click on the page to get to the browser inspector then click on the applications tab. On the applications tab, click on the local storage tab on the left and select localhost. You should now see you keys and values appearing there even after you refresh the page! If thats is a little confusing, here is a help video :)
![Help Video](./media/inspect.gif)
## Resources ##
dcode. “Storing Objects with Local Storage in JavaScript.” YouTube, YouTube, 20 Feb. 2018, https://www.youtube.com/watch?v=AUOzvFzdIk4. 
“Local Storage.” Local Storage | HTML Dog, https://htmldog.com/guides/javascript/advanced/localstorage/. 
“Window LocalStorage Property.” Window Localstorage Property, W3Schools, https://www.w3schools.com/jsreF/prop_win_localstorage.asp. 
https://stackoverflow.com/questions/5410820/how-can-i-show-all-the-localstorage-saved-variables
