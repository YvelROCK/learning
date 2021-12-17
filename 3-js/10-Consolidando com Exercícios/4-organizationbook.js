const library = [
    { 
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


const howManyCategories = library.length;
console.log("Total de categorias: ", howManyCategories);

for(let howManyBooks of library) 
{
    console.log(`Total de livros da categoria ${howManyBooks.category}: `, howManyBooks.books.length, );
}

// Função que conta a quantidade de Autores
function countAuthors() 
{
    let authors = [];

    for (let howManyAuthors of library) 
    {
        for (let book of howManyAuthors.books) 
        {
            if(authors.indexOf(book.author) == -1)
            {
                authors.push(book.author);
            }
        }
    }
    
    console.log("Total de autores: ", authors.length);
}

countAuthors();

// Função que busca livros do Augusto Cury
function booksOfAugustoCury() 
{  
    // Array vazio que irá receber os livros do Augusto Cury
    let books = []; 
    
    // Percorre o Array library[] e atribui os objetos no seus indices à category{}
    for (let category of library) 
    {
        /* 
        Como atribuimos um Object à category{} podemos acessar sua propriedade 
        books[] que é um Array. Dessa forma, iremos percorrê-la e atribuir os
        objetos nos seus indices à book{}.
        */
        for (let book of category.books)
        {
            /* 
            Estando dentro do objeto book{} acessamos sua propriedade auhor e
            verificamos se o atributo String dela corresponde ao "Agusto Cury".
            */
            if(book.author === "Augusto Cury")
                // Se corresponder enviamos ela para o array vazio books[] no início da função.
                books.push(book.title);
        }
    }
    // Agora que o array está preenchido com os livros do Autor, percorremos ele e retornamos seus Livros.
    console.log("Livros do Augusto Cury: ")
    for (let book of books) 
    {
        console.log("-", book);
    }
}

booksOfAugustoCury();

// Função que busca os livros de algum Autor
function booksOfAuthor(author) 
{  
    // Array vazio que irá receber os livros do Autor
    let books = []; 
    
    // Percorre o Array library[] e atribui os objetos no seus indices à category{}
    for (let category of library) 
    {
        /* 
        Como atribuimos um Object à category{} podemos acessar sua propriedade 
        books[] que é um Array. Dessa forma, iremos percorrê-la e atribuir os
        objetos dos seus indices à book{}.
        */ 
        for (let book of category.books)
        {
            /* 
            Estando dentro do objeto book{} acessamos sua propriedade author e
            verificamos se o atributo String dela corresponde ao Autor.
            */
            if(book.author === author) 
            {
                // Se corresponder enviamos ela para o Array vazio books[] no início da função.
                books.push(book.title);
            }  
        }
    }
    
    // Verifica se o Array books[] está vazio, pois se estiver o nome do autor está errado.
    if (books.length === 0)
    {
        throw new Error (`Não possuimos livros do(a) Autor(a) ${author} em nossa biblioteca.`)
    }
    
    // Agora que o Array está preenchido com os livros do Autor, percorremos ele e retornamos seus Livros.
    console.log(`Livros do ${author}:`);

    
    for (let book of books) 
    {
        console.log("-", book);
    }
}

booksOfAuthor("Augusto Cury");














