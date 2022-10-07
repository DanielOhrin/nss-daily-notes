/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [];

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/
notes.push(
    {
        id: 1, //For easy lookup
        text: "Test", //Name of book
        author: "Test", //Author's first & last
        date: "Test", //Publication date
        topics: ["test"] //Like themes
    }
);

notes.push({
    id: 2,
    text: "Book2",
    author: "Daniel",
    date: "8/17/2022",
    topics: ["Coding", "Algorithms"]
    },
    {
        id: 3,
        text: "Book3",
        author: "Daniel",
        date: "8/17/2022",
        topics: ["Coding"]
    },
    {
        id: 4,
        text: "Book4",
        author: "Daniel",
        date: "8/17/2022",
        topics: ["Coding", "Algorithms", "Cookies"]        
    }
)
console.log(notes);

notes.push({
    id: 2,
    text: "Book5",
    author: "Daniel",
    date: "8/17/2022",
    topics: ["Coding"]
})

//For..of loop that only displays the text property of each object
for (const object of notes) {
    console.log(object.text);
}
//For..of loop that displays only the topics of each object. Should have a console.log before it labeled "*** All Note Topics ***""
for (const object of notes) {
    if (notes.indexOf(object) === 0) {
        console.log("*** All Note Topics***");
    }
    console.log(object.topics);
}
//Calculates the average number of topics per notes/"books" -- Start with "*** Average Topics Per Note ***"
let avgTopics = 0;
for (const object of notes) {
    if (notes.indexOf(object) === 0) {
        console.log("*** Average Topics Per Note ***");
    }
    avgTopics += object.topics.length;
    if (notes.indexOf(object) === notes.length - 1) {
        avgTopics /= notes.length;
        console.log(avgTopics);
        avgTopics = 0;
    }
}

//For...of loop that filters notes based on topic
let filteredNotes = [];
for (const object of notes) {
    if (object.topics.includes("Algorithms")) {
        filteredNotes.push(object);
    };
}
console.log(filteredNotes);

//Note_Articles
let sections = [];
//Empty string for printing later -- Start with array, then .join with </section><section>
console.log("***  Note Articles  ***")
for (const object of notes) {
    for (const topic of object.topics) {
        sections.push(topic);
    }
    /*console.log(`<article>${object.text}</article>`) -- Old code*/
    //If statement that resets the sections array after printing a topic
    if (sections.length === object.topics.length) {
        console.log(`<article>\n    ${object.text}\n    <section>${sections.join("</section>\n    <section>")}</section>\n</article>`)
        sections = [];
    }
}

