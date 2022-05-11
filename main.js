
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const featuresDropBtn = document.getElementById("featuresDropbtn");
const featuresDropdown = document.getElementById("featuresDropdown");
const companyDropBtn = document.getElementById("companyDropbtn");
const companyDropdown = document.getElementById("companyDropdown");

featuresDropBtn.onclick = function () {
    featuresDropdown.classList.toggle("show");
    companyDropdown.classList.remove('show');
}
companyDropBtn.onclick = function () {
    companyDropdown.classList.toggle("show");
    featuresDropdown.classList.remove('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {

        if (featuresDropdown.classList.contains('show')) {
            featuresDropdown.classList.remove('show');
        }
        else if (companyDropdown.classList.contains('show')) {
            companyDropdown.classList.remove('show');
        }

    }
}

