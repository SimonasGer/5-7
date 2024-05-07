// Sukurti funkcija, kuri atrinktu knygas pagal kategorija. Nurodzius funkcijai pvz. grozine, 
// turi rodyti isvesti HTML liste tas knygas, kurios priklauso siai kategorijai.

const categories = [
{
    name: "Fantasy",
    books: [
        {
            isbn: "FAN001",
            release_date: 2022,
            title: "D Fantasy Book 1",
            num_of_pages: 120,
            price: 125.56,
        },
        {
            isbn: "FAN002",
            release_date: 2021,
            title: "C Fantasy Book 2",
            num_of_pages: 150,
            price: 25.56,
        },
        {
            isbn: "FAN003",
            release_date: 2020,
            title: "A Fantasy Book 3",
            num_of_pages: 170,
            price: 35.70,
        },
        {
            isbn: "FAN004",
            release_date: 2019,
            title: "B Fantasy Book 4",
            num_of_pages: 190,
            price: 40.10,
        },
    ]
},
{
    name: "Poetry",
    books: [
        {
            isbn: "POE001",
            release_date: 2008,
            title: "X Poetry Book 1",
            num_of_pages: 99,
            price: 36.78,
        },
        {
            isbn: "POE002",
            release_date: 2023,
            title: "C Poetry Book 2",
            num_of_pages: 139,
            price: 78.80,
        },
        {
            isbn: "POE003",
            release_date: 2006,
            title: "D Poetry Book 3",
            num_of_pages: 159,
            price: 56.60,
        },
        {
            isbn: "POE004",
            release_date: 2005,
            title: "A Poetry Book 4",
            num_of_pages: 179,
            price: 78.70,
        },
    ]
},
{
    name: "Horror",
    books: [
        {
            isbn: "HOR001",
            release_date: 2004,
            title: "G Horror Book 1",
            num_of_pages: 300,
            price: 100.05
        },
        {
            isbn: "HOR002",
            release_date: 2006,
            title: "E Horror Book 2",
            num_of_pages: 500,
            price: 250.50
        },
        {
            isbn: "HOR003",
            release_date: 2023,
            title: "F Horror Book 3",
            num_of_pages: 600,
            price: 13.37
        },
        {
            isbn: "HOR004",
            release_date: 2000,
            title: "R Horror Book 4",
            num_of_pages: 650,
            price: 85.36
        }
    ]
}
];

let booksList = document.querySelector(".books");


function getBooks(categories, genre, min, max){
    if (isNaN(min) || isNaN(max) || typeof genre !== "string" || max < min){
        return console.log("Negalimi duomenys");
    }
    for (category in categories){
        if (categories[category].name == genre){
            let bookArray = (categories[category].books);
            bookArray = bookArray.filter(book => book.price > min && book.price < max);
            for (book of bookArray){
                let bookName = document.createElement("li");
                booksList.appendChild(bookName).innerHTML = book.title;
            }
        }
    }  
}

getBooks(categories, "Fantasy" ,20 ,0);