let myLibrary = [];//the main box

function Book(title, author, pages, read) { //the main function
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render() { //pastes the new set of cards
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]; //specific array in myLibrary
        let bookEl = document.createElement("div"); // bookEl = created div
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
        <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">by ${book.author}</h5>
        </div>
        <div class="card-body">
            <p>${book.pages} pages</p>
            <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>    
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        </div>
            `;
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary() { //puts in array, then cast render
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);//push into array
    render();
}

//shows hidden form
let newBookbtn = document.querySelector("#new-book-btn"); //select "New Book" button
newBookbtn.addEventListener("click", function() { //when button is pressed...
    let newBookForm = document.querySelector("#new-book-form"); //select form
    newBookForm.style.display = "block"; //form is set to show
})

//shortcut. when add book is clicked
document.querySelector("#new-book-form").addEventListener("submit", function (event) {
    event.preventDefault()//prevent the server sender
    addBookToLibrary() //the start, take the info from submit
})