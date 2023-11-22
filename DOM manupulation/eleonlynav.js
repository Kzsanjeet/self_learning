const changeBodyColor  =()=>{
    document.body.firstElementChild.style.background = "red"
}

let a = document.body
console.log("The first child of the b is:", a.firstChild)
console.log("The first child of the b is:", a.firstElementChild)