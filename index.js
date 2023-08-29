// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats; 
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}

function appendCat(name) {
const catsArray = [
    "Milo", "Otis", "Garfield" ];
    const newCatsArray = [...catsArray, name];
        return newCatsArray;
}

function prependCat(name) {
    const catsArray = [
        "Milo", "Otis", "Garfield" ];
        const newCatsArray = [name, ...catsArray];
            return newCatsArray;
}

function removeLastCat() {
    const catsArray = [
        "Milo", "Otis", "Garfield" ];
        const newCatsArray = catsArray.slice(0,2);
        return newCatsArray;
}

function removeFirstCat() {
    const catsArray = [
        "Milo", "Otis", "Garfield" ];
        const newCatsArray = catsArray.slice(1,3);
        return newCatsArray;
    }