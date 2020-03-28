const promise = new Promise ((resolve, reject) => {
    setTimeout(()=>{
        // resolve('This is my resolved data'); // A promise 'resolves' only one parameter. If A wanna pass many, I should pass an object.
        // resolve('This is my other resolved data'); // this is ignored. A promise 'resolves' only once.
        reject('Something went wrong');
    }, 5000);
});

console.log('before');

promise.then((data) => { // hey, run me when the data comes back
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log('after');