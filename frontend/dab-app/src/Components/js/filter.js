let filterBy = ""
let filterType = ""

function getPostParams() {
    filterBy = ""
    filterType = ""

    // rooms
    let rooms = document.getElementsByClassName("room");
    for (let i = 0; i < rooms.length; i++) {
        let currRoom = rooms[i]
        if (currRoom.checked) {
            filterBy = filterBy + currRoom.className + ", "
            filterType = filterType + currRoom.id + ", "
        }
    }

    // location
    let location = document.getElementsByClassName("location");
    for (let i = 0; i < location.length; i++) {
        let currLocation = location[i]
        if (currLocation.checked) {
            filterBy = filterBy + currLocation.className + ", "
            filterType = filterType + currLocation.id + ", "
        }
    }

    // bathroom
    let bathroom = document.getElementsByClassName("bathroom");
    for (let i = 0; i < bathroom.length; i++) {
        let currBathroom = bathroom[i]
        if (currBathroom.checked) {
            filterBy = filterBy + currBathroom.className + ", "
            filterType = filterType + currBathroom.id.substring(0, currBathroom.id.length - 8) + ", "
        }
    }

    // kitchen
    let kitchen = document.getElementsByClassName("kitchen");
    for (let i = 0; i < kitchen.length; i++) {
        let currKitchen = kitchen[i]
        if (currKitchen.checked) {
            filterBy = filterBy + currKitchen.className + ", "
            filterType = filterType + currKitchen.id.substring(0, currKitchen.id.length - 7) + ", "
        }
    }

    // year
    let year = document.getElementsByClassName("year");
    console.log(year)
    for (let i = 0; i < year.length; i++) {
        let currYear = year[i]
        if (currYear.checked) {
            filterBy = filterBy + currYear.className + ", "
            filterType = filterType + currYear.id + ", "
        }
    }

    // elevator
    let elevator = document.getElementById("hasElevator");
    if (elevator.checked) {
        filterBy = filterBy + elevator.className + ", "
        filterType = filterType + "true, "
    }

    // carpet
    let carpet = document.getElementById("hasCarpet");
    if (carpet.checked) {
        filterBy = filterBy + carpet.className + ", "
        filterType = filterType + "true, "
    }

    // common room
    let commonRoom = document.getElementById("hasCommonRoom");
    if (commonRoom.checked) {
        filterBy = filterBy + commonRoom.className + ", "
        filterType = filterType + "true, "
    }
}

function filterDorms() {
    getPostParams()

    if (filterBy === "") {
        showAllDorms()
    } else {
        let postParameters = {
            "filterBy": filterBy.substring(0, filterBy.length - 2),
            "filterType": filterType.substring(0, filterType.length - 2)
        };

        fetch("http://localhost:4567/filter", {
            method: 'post', body: JSON.stringify(postParameters),
            headers: {"Access-Control-Allow-Origin": "*"}
        }).then((responseObject) => {
            responseObject.json()
                .then((dormNames) => {
                    console.log(dormNames);
                    showDorms(dormNames)
                }).catch((exception) => {
                console.log(exception)
            })
        })
    }
}

function showDorms(dormNames) {
    let dormProfiles = document.getElementsByClassName("col-lg-6 ")

    for (let i = 0; i < dormProfiles.length; i++) {
        let currDorm = dormProfiles[i]
        if (dormNames.includes(currDorm.id)) {
            currDorm.style.display = 'flex'
        } else {
            currDorm.style.display = 'none'
        }
    }
}

function showAllDorms() {
    let dormProfiles = document.getElementsByClassName("col-lg-6 ")

    for (let i = 0; i < dormProfiles.length; i++) {
        let currDorm = dormProfiles[i]
        currDorm.style.display = 'flex'
    }
}

export default filterDorms;