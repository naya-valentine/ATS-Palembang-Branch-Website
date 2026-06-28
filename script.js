//DOM Elements
const dropDownGoals = document.getElementById("dropDownGoals")
const dropDownActivities = document.getElementById("dropDownActivities")
const dropDownProgress = document.getElementById("dropDownProgress")
const memberPageWrapper = document.getElementById("memberPageWrapper")


const dropDownGoalsContent = document.getElementById("dropDownGoalsContent")
const dropDownActivitiesContent = document.getElementById("dropDownActivitiesContent")
const dropDownProgressContent = document.getElementById("dropDownProgressContent")

const membersBtn = document.getElementById("membersBtn")
const memberPage1 = document.getElementById("memberPage1")
const memberPage2 = document.getElementById("memberPage2")

function loadMembers() {
    memberPageWrapper.classList.remove("slide")
}
loadMembers() 
//the averafe loadMemvers won't work with back tabs, because the wbesite restoores the snapshot of "Page 2" exactly as it was, this is called bfcache (back-forward cache)
// window.addEventListener("pageshow", (e)=> {
//     if (e.persisted) {
//         loadMembers()
//     } else {
//         console.log("do nothing")
//     }
// }
// pageshow event dires whenever a webpage becomes visible to the user, so it will fire when the Back Button is hit
// this won't work either because then the next button would never work since the loadMembers will keep commencing

// window.addEventListener("pageshow", (e)=> {
//     const navEntries = performance.getEntriesByType("navigation"); 
//     if (navEntries.length > 0) { 
// // in javascript, if you try to look at an empty array it will crash
// // 
//         const navType = navEntries[0].type
//         if (navType === "back_forward"){
//             loadMembers()
//         }
//     }
// })
// this will check what kind of action is done in navigation and then act accordingly, but it will only work if  you directly change the URL, otherwise it won't detect anything  
//Vissions Content
dropDownGoals.addEventListener("click", () => {
    if (!dropDownGoalsContent.classList.contains("hidden")) {
        dropDownGoalsContent.classList.add("hidden");
    } else {
        dropDownGoalsContent.classList.remove("hidden");
    }
    
})

dropDownActivities.addEventListener("click", () => {
    if (!dropDownActivitiesContent.classList.contains("hidden")) {
        dropDownActivitiesContent.classList.add("hidden");
    } else {
        dropDownActivitiesContent.classList.remove("hidden");
    }
})

dropDownProgress.addEventListener("click", () => {
    if (!dropDownProgressContent.classList.contains("hidden")) {
        dropDownProgressContent.classList.add("hidden");
    } else {
        dropDownProgressContent.classList.remove("hidden");
    }
})

//Members Content
// membersBtn.addEventListener("click", () => {
//     console.log("clicked")
//     memberPage1.classList.toggle("hidden"); 
//     memberPage2.classList.toggle("hidden");
// })

membersBtn.addEventListener("click", () => {
    memberPageWrapper.classList.toggle("slide");
    if (membersBtn.innerText === ">") {
        document.getElementById("membersBtn").innerText = "<"
    } else {
        document.getElementById("membersBtn").innerText = ">"
    }
})


