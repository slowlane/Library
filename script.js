//Library array
let myLibrary = [];

//Book constructor
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;

    this.info = function() {
        return this.title + " by " + this.author + ", " + pages + " pages, not read yet"; 
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
    render();
}

//Render contents of myLibrary
function render(){
    let content = document.getElementById("content");
    content.innerHTML = "";
    createCards();
}

//Add button/form interactivity
document.getElementById("add-button").addEventListener("click", e => {
    document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", e => {
    document.querySelector(".bg-modal").style.display = "none";
});

document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    //Retrieve form items
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    
    //Create book and add it to library
    const book = new Book(title.value, author.value, pages.value);
    addBookToLibrary(book);
    
    //Reset form values 
    title.value = "";
    author.value = "";
    pages.value = "";

    //Close modal
    document.querySelector(".bg-modal").style.display = "none";

})


//Add books for testing purposes
let book1 = new Book("The Hobbit", "Tolkien", 243);
let book2 = new Book("The Hobbit", "Pirate Tolkien", 321);

myLibrary.push(book1, book2);

render();

function createCards() {
    for(let book of myLibrary){

        //Create card
        let bookCard = document.createElement("div");
        bookCard.className = "card";
        
        //Create contents of card

        let bookHeader = document.createElement("h2");
        bookHeader.innerText = book.title;

        let title = document.createElement("p");
        title.innerText = "Author: " + book.author;

        let author = document.createElement("p");
        author.innerText = "Title: " + book.title;

        let pages = document.createElement("p");
        pages.innerText = "Pages: " + book.pages;
        

        //Fixing the read toggle
        let readToggleDiv = document.createElement("div");

        let readToggleLabel = document.createElement("label");
        readToggleLabel.innerText = "Read";
        readToggleLabel.setAttribute("for", "read-toggle");

        let readToggle = document.createElement("INPUT");
        readToggle.setAttribute("type", "checkbox");
        readToggle.id = "read-toggle";

        readToggle.addEventListener("click", e => {
            e.target.parentElement.parentElement.classList.toggle("read-book");
        })


        //Add contents of card, and add card to the content div
        bookCard.appendChild(bookHeader);
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readToggleDiv);
        
        readToggleDiv.appendChild(readToggleLabel);
        readToggleDiv.appendChild(readToggle);
        // bookCard.appendChild(readToggle);

        content.appendChild(bookCard);

    }
}