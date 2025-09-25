//stack (primitive) , Heap(non-primitive)

let myChennal = "aarudotcom";
let anothername = myChennal;
anothername = "newaaru";
console.log(anothername);
console.log(myChennal);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne;
userTwo.email = "aaru@google.com";
console.log(userOne.email);
console.log(userTwo.email);