const {stringLength, reverseString, user, add, subtract, divide, multiply, capitalise} = require("./main.js")

const array = [1,2,3,4,5];
test("count number of letters", ()=>{
 expect(stringLength("stan")).toBe(4);
})

test("count should be greater or equal to 1", ()=>{
 expect(stringLength("stan")).toBeGreaterThanOrEqual(1);
})
test("Letters should be less than 10", ()=>{
 expect(stringLength("stanleysunday")).toBeGreaterThanOrEqual(1)
 expect(stringLength('stanley')).toBeLessThan(10)
})

test("Reverse the string", ()=>{
 expect(reverseString("stanley")).toBe("yelnats")
})

test("return average of the user's data", ()=>{
 expect(user(array)).toBe(3);
})


describe("Add numbers using the add method", () =>{
 test("Can add numbers", ()=>{
  expect(add(4,5)).toBe(9)
 })
 test("Can add numbers", ()=>{
  expect(add(16,5)).toBeGreaterThanOrEqual(15)
 })
 test("Numbers to be exactly equal to", ()=>{
  expect(add(5,5)).toEqual(10)
 })
 test("Can add negative numbers", ()=>{
  expect(add(-15,5)).toBe(-10)
 })
})

describe("Subtract numbers using the subtract", () =>{
 test("should return negative number", ()=>{
  expect(subtract(4,5)).toBe(-1)
 })
 test("Can subtract numbers", ()=>{
  expect(subtract(6,5)).toBe(1)
 })
 test("should return zero", ()=>{
  expect(subtract(5,5)).toBe(0)
 })
 test("Can subtract numbers", ()=>{
  expect(subtract(15,5)).toBe(10)
 })
})
describe("Mutliply numbers using the multiplication method", () =>{
 test("Can mutiply numbers", ()=>{
  expect(multiply(4,5)).toEqual(20)
 })
 test("Can subtract numbers", ()=>{
  expect(subtract(4,5)).toBe(-1)
 })
 test("Can mutiple negative numbers", ()=>{
  expect(multiply(-5,5)).toBe(-25)
 })
})
describe("Divide numbers", () =>{
 test("Can divide numbers", ()=>{
  expect(divide(10,5)).toBe(2)
 })
 test("should return decimal numbers", ()=>{
  expect(divide(4,5)).toBeLessThan(1)
 })
 test("Can add numbers", ()=>{
  expect(divide(15,5)).toBe(3)
 })
})

describe("Divide numbers", () =>{
 test("Capitalize the word", ()=>{
  expect(capitalise("stan")).toBe("Stan")
 })
})
