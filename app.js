// getting the event object
// const btn = document.querySelector('button')

// btn.addEventListener("click", (e) => (
//     console.log(e))
// )


// similar methods:
    // .value
    // .textContent
    // .innerHTML
    // .text

// *look up key press instead of click of mouse for games*


// *Using addEventListener*
let screen = document.querySelector(".screen")

screen.addEventListener("click", (e) => {
    let clear = document.querySelector(".sImg")
    clear.setAttribute("src", "https://t4.ftcdn.net/jpg/02/66/38/15/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg")
})

const btn = document.querySelector('.comment')
// Target btn
btn.addEventListener("click", (e) => {
    // console.log("event now listening")

    // Allow button to do something => runnung an eventListener
    let newEntry = document.createElement("div")
    // newElement created by the new event
    let nput = document.querySelector("input")
    // Targeting input to snatch out value
    let relevantData = nput.value

    // Link scraped data into new element
    newEntry.textContent = relevantData

    // Select place to drop new element
    screen.append(newEntry)
})


const weather = {
    sunny: {
        temp: 100,
        url: "https://images.unsplash.com/photo-1464660439080-b79116909ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VubnklMjBkYXl8ZW58MHx8MHx8&w=1000&q=80"
    },
    rainy: {
        temp: 55,
        url: "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjBkYXl8ZW58MHx8MHx8&w=1000&q=80"
    },
    snowy: {
        temp: 20,
        url: "https://images.unsplash.com/photo-1486140525285-12e658d9ac0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwZGF5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    cloudy: {
        temp: 68,
        url: "https://media.istockphoto.com/id/912014918/photo/blue-sky-with-cloud-background.jpg?b=1&s=612x612&w=0&k=20&c=7IOeO6_pw8ogYPZIApSQM8JojrieqmKat38PWmOehsI="
    }
    
}


let sunny = document.querySelector(".sun")
let rainy = document.querySelector(".rain")
let snowy = document.querySelector(".snow")
let cloudy = document.querySelector(".cloud")



sunny.addEventListener("click", (e) => {
    let firstPic = document.querySelector(".sImg")
    firstPic.setAttribute("src", weather.sunny.url)

    let firstText = document.querySelector(".weatherText")
    firstText.innerHTML = `It's blazing at ${weather.sunny.temp} degrees, I'm tryna cook some eggs on top of my car.`
})

rainy.addEventListener("click", (e) => {
    let firstPic = document.querySelector(".sImg")
    firstPic.setAttribute("src", weather.rainy.url)

    let firstText = document.querySelector(".weatherText")
    firstText.innerHTML = `It's ${weather.rainy.temp} degrees outside but the weather is not looking too nice, I'd don't want to get my sneakers wet.`
})

snowy.addEventListener("click", (e) => {
    let firstPic = document.querySelector(".sImg")
    firstPic.setAttribute("src", weather.snowy.url)

    let firstText = document.querySelector(".weatherText")
    firstText.innerHTML = `It's ${weather.snowy.temp} degrees and it's just brick.`
})

cloudy.addEventListener("click", (e) => {
    let firstPic = document.querySelector(".sImg")
    firstPic.setAttribute("src", weather.cloudy.url)

    let firstText = document.querySelector(".weatherText")
    firstText.innerHTML = `It's ${weather.cloudy.temp} degrees and the sun is playing peek-a-boo.`
})


// *using onlick feature*
// const changeSunny = () => {
//     let firstPic = document.querySelector(".sImg")
//     firstPic.setAttribute("src", weather.sunny.url)
    
//     let firstText = document.querySelector(".weatherText")
//     firstText.innerHTML = `It's blazing at ${weather.sunny.temp} degrees, I'm tryna cook some eggs on top of my car.`
// }

// const changeRainy = () => {
//     let firstPic = document.querySelector(".sImg")
//     firstPic.setAttribute("src", weather.rainy.url)

//     let firstText = document.querySelector(".weatherText")
//     firstText.innerHTML = `It's ${weather.rainy.temp} degrees outside but the weather is not looking too nice, I'd don't want to get my sneakers wet.`
// }

// const changeSnowy = () => {
//     let firstPic = document.querySelector(".sImg")
//     firstPic.setAttribute("src", weather.snowy.url)

//     let firstText = document.querySelector(".weatherText")
//     firstText.innerHTML = `It's ${weather.snowy.temp} degrees and it's just brick.`
// }

// const changeCloudy = () => {
//     let firstPic = document.querySelector(".sImg")
//     firstPic.setAttribute("src", weather.cloudy.url)

//     let firstText = document.querySelector(".weatherText")
//     firstText.innerHTML = `It's ${weather.cloudy.temp} degrees and the sun is playing peek-a-boo.`
// }


// Event Bubbling
// an event occurring on an element and goes all the way up to the DOM, so be specific when choosing click, because it can go up the chain
// All event listeners registered for the same event, such as click, will be invoked along the path to the documentelement - unless one of those listeners calls the event object's stopPropagation method.
    // (element) div -> (element) body -> (element) html -> document

// Use Event delegation to avoid Event Bubbling
// can set callback functions to a variable and call the variable instead of writing the function over and over again

