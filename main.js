const fruits = ["Banana", "Orange", "Apple", "Mango"];

function reverseString(fruits) {
    return fruits.reverse();
}

it('fruits', () =>
  expect(reverseString({
    items: [
      "Banana", "Orange", "Apple", "Mango" 
    ]
  })).toBe(false))

/*
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");
*/