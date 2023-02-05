let container = document.getElementsByClassName("container")[0];
let myButton = document.getElementsByClassName("myButton")[0];

let greeting = () => {
    let person = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    let nameDiv = document.createElement("div");

    for (let i = 0; i < person.length; i++) {
        let firstLetter = person[i].charAt(0);
        if (firstLetter === "J") {
            let startJ = "Good Bye "+ person[i]+ " / ";
            nameDiv.append(startJ)
        } else {
            let startNoJ = "Hello "+ person[i]+ " / ";
            nameDiv.append(startNoJ);
        }
    };
    container.append(nameDiv);
}

myButton.addEventListener("click",greeting)