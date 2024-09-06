// Sidebar toggle functionality
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.navbar-toggler-icon').toggleClass('open');
    });

    $('.container, .img-fluid').waypoint(function () {
        $(this.element).addClass('animate__animated animate__fadeIn');
    }, {
        offset: '75%'
    });
});

// Get the modal elements
var modalCoche = document.getElementById("modalCoche");
var modalTransporte = document.getElementById("modalTransporte");
var modalAparcamiento = document.getElementById("modalAparcamiento");

// Get the button elements
var btnCoche = document.getElementById("btnCoche");
var btnTransporte = document.getElementById("btnTransporte");
var btnAparcamiento = document.getElementById("btnAparcamiento");

// Get the <span> elements that close the modals
var spanCoche = modalCoche.getElementsByClassName("close")[0];
var spanTransporte = modalTransporte.getElementsByClassName("close")[0];
var spanAparcamiento = modalAparcamiento.getElementsByClassName("close")[0];

// When the user clicks the button, open the corresponding modal 
btnCoche.onclick = function () {
    modalCoche.style.display = "block";
}

btnTransporte.onclick = function () {
    modalTransporte.style.display = "block";
}

btnAparcamiento.onclick = function () {
    modalAparcamiento.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanCoche.onclick = function () {
    modalCoche.style.display = "none";
}

spanTransporte.onclick = function () {
    modalTransporte.style.display = "none";
}

spanAparcamiento.onclick = function () {
    modalAparcamiento.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalCoche) {
        modalCoche.style.display = "none";
    }
    if (event.target == modalTransporte) {
        modalTransporte.style.display = "none";
    }
    if (event.target == modalAparcamiento) {
        modalAparcamiento.style.display = "none";
    }
}


