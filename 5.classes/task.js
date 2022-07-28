// task 1
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
        
    }

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        this._state = Math.min(100, Math.max(10,value));
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100) {
        super(name,releaseDate, pagesCount, state);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state = 100) {
        super(name,releaseDate, pagesCount, state);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'detective';
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = null;
        this.books.forEach(element => {
            if (element.hasOwnProperty(type) && element[type] === value)
                book = element;
        });
        return book;
    }

    giveBookByName(bookName) {
        let book = this.findBookBy('name',bookName);
        if (book !== null) {
            const index = this.books.indexOf(book);
            this.books.splice(index, 1); // remove only one book
        }
        return book;
    }
}

// task 3





