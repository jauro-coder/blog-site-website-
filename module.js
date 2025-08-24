//set up database 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js"

import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyACDMk690LGkuZHb54jMCnYQUv6GH1PSJE",
  authDomain: "peach-blog-6c129.firebaseapp.com",
  databaseURL: "https://peach-blog-6c129-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "peach-blog-6c129",
  storageBucket: "peach-blog-6c129.appspot.com",
  messagingSenderId: "213700735624",
  appId: "1:213700735624:web:b8350d2815be45d4c0253d"
}


const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

const blogRef = ref(database, "blogs")


// render all posts function
let blogEl = document.getElementById("blog-el")

function render(blog){
  blog.sort((a ,b) => b.timestamp - a.timestamp)
  
  let blogsToRender = ""
  for (let i = 0;i < blog.length ; i++){
  blogsToRender += `
        <article id="blog">
           <div id="blog-info">
            <div id="blogger-profile-pic">
              <img src="my-img.png" alt="blogger image" id="blg-img">
            </div>
            <div id="name-date">
              <h2 id="blogger-name">${blog[i].author}</h2>
              <p id="date">${blog[i].date}</p>
            </div>
          </div>
          <h1 id="topic">${blog[i].topic}</h1>
          <p id="blog-content">
            ${blog[i].content}
          </p>
        </article>
  `

  }
    blogEl.innerHTML = blogsToRender
}

//Display items
onValue(blogRef , function(snapshot){
  if(snapshot.exists()){
    let blogs = Object.values(snapshot.val())
    let blogsToRender = blogs
    render(blogsToRender)
  }
})

//push data to database
const authorInp = document.getElementById("author-inp")
const dateInp = document.getElementById("date-inp")
const contentInp = document.getElementById("post-inp")
const topicInp = document.getElementById("topic-inp")
let postBtn = document.getElementById("post-btn")



postBtn.addEventListener("click" , function(){

   // get trimmed values
  const author = authorInp.value.trim()
  const date = dateInp.value.trim()
  const content = contentInp.value.trim()
  const topic = topicInp.value.trim()

  // check if ALL are empty
  if (author === "" || date === "" || content === "" || topic === "") {
    alert("All fields are required")
    return
  } else {
  let blogToPush = {
  author: authorInp.value,
  date: dateInp.value,
  topic: topicInp.value,
  content: contentInp.value,
  timestamp: Date.now()
  }
    push(blogRef , blogToPush)
  }


})
