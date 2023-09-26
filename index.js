
let guestScoreEl = document.getElementById("guest-score")
let homeScoreEl = document.getElementById("home-score")
let firstEl = document.getElementById("first-add-btn")
let guestEl = document.getElementById("guest-first-add")


let homeScore = 18
let guestScore = 10

function add() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function addTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function addThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore

}
function addGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function addGuestTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function addGuestThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}