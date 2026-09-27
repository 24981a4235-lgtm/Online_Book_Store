function searchBooks() {

    let search = document.getElementById("search").value.toLowerCase();

    let books = document.getElementsByClassName("book");

    let found = false;

    for (let i = 0; i < books.length; i++) {

        let title = books[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (title.includes(search)) {
            books[i].style.display = "block";
            found = true;
        }
        else {
            books[i].style.display = "none";
        }
    }

    if (found) {
        document.getElementById("result").innerText = "✅ Book is available!";
    }
    else {
        document.getElementById("result").innerText = "❌ Book is not available.";
    }
}