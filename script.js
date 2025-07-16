// Allow unselecting radio buttons by clicking again
(function() {
    let lastClicked = {};
    document.addEventListener('mousedown', function(e) {
        if (e.target.classList && e.target.classList.contains('square-radio')) {
            if (e.target.checked) {
                lastClicked[e.target.name] = e.target;
            } else {
                lastClicked[e.target.name] = null;
            }
        }
    });
    document.addEventListener('click', function(e) {
        if (e.target.classList && e.target.classList.contains('square-radio')) {
            if (lastClicked[e.target.name] === e.target) {
                e.target.checked = false;
                lastClicked[e.target.name] = null;
            }
        }
    });
})();

// Shrink header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 30) {
        header.classList.add('header-small');
    } else {
        header.classList.remove('header-small');
    }
});

// Show/hide Type of Institution details
function toggleTypeDetails() {
    var row = document.getElementById('type-details-row');
    if (row.classList.contains('details-visible')) {
        row.classList.remove('details-visible');
        row.classList.add('details-hidden');
        row.setAttribute('aria-expanded', 'false');
    } else {
        row.classList.remove('details-hidden');
        row.classList.add('details-visible');
        row.setAttribute('aria-expanded', 'true');
    }
}
function hideTypeDetails() {
    var row = document.getElementById('type-details-row');
    row.classList.remove('details-visible');
    row.classList.add('details-hidden');
    row.setAttribute('aria-expanded', 'false');
}

function toggleEnrollmentDetails() {
    var row = document.getElementById('enrollment-details-row');
    if (row.classList.contains('details-visible')) {
        row.classList.remove('details-visible');
        row.classList.add('details-hidden');
        row.setAttribute('aria-expanded', 'false');
    } else {
        row.classList.remove('details-hidden');
        row.classList.add('details-visible');
        row.setAttribute('aria-expanded', 'true');
    }
}
function hideEnrollmentDetails() {
    var row = document.getElementById('enrollment-details-row');
    row.classList.remove('details-visible');
    row.classList.add('details-hidden');
    row.setAttribute('aria-expanded', 'false');
}

function toggleOrientationDetails() {
    var row = document.getElementById('orientation-details-row');
    if (row.classList.contains('details-visible')) {
        row.classList.remove('details-visible');
        row.classList.add('details-hidden');
        row.setAttribute('aria-expanded', 'false');
    } else {
        row.classList.remove('details-hidden');
        row.classList.add('details-visible');
        row.setAttribute('aria-expanded', 'true');
    }
}
function hideOrientationDetails() {
    var row = document.getElementById('orientation-details-row');
    row.classList.remove('details-visible');
    row.classList.add('details-hidden');
    row.setAttribute('aria-expanded', 'false');
}

function toggleProgramDetails() {
    var row = document.getElementById('program-details-row');
    if (row.classList.contains('details-visible')) {
        row.classList.remove('details-visible');
        row.classList.add('details-hidden');
        row.setAttribute('aria-expanded', 'false');
    } else {
        row.classList.remove('details-hidden');
        row.classList.add('details-visible');
        row.setAttribute('aria-expanded', 'true');
    }
}
function hideProgramDetails() {
    var row = document.getElementById('program-details-row');
    row.classList.remove('details-visible');
    row.classList.add('details-hidden');
    row.setAttribute('aria-expanded', 'false');
}

function toggleDegreeDetails() {
    var row = document.getElementById('degree-details-row');
    if (row.classList.contains('details-visible')) {
        row.classList.remove('details-visible');
        row.classList.add('details-hidden');
        row.setAttribute('aria-expanded', 'false');
    } else {
        row.classList.remove('details-hidden');
        row.classList.add('details-visible');
        row.setAttribute('aria-expanded', 'true');
    }
}
function hideDegreeDetails() {
    var row = document.getElementById('degree-details-row');
    row.classList.remove('details-visible');
    row.classList.add('details-hidden');
    row.setAttribute('aria-expanded', 'false');
}
document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.details-btn-type');
    if (btn) {
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-controls', 'type-details-row');
        btn.addEventListener('click', toggleTypeDetails);
    }
    var closeBtn = document.querySelector('.close-details');
    if (closeBtn) closeBtn.addEventListener('click', hideTypeDetails);

    var btnEnrollment = document.querySelector('.details-btn-enrollment');
    if (btnEnrollment) {
        btnEnrollment.setAttribute('aria-expanded', 'false');
        btnEnrollment.setAttribute('aria-controls', 'enrollment-details-row');
        btnEnrollment.addEventListener('click', toggleEnrollmentDetails);
    }
    var closeBtnEnrollment = document.querySelector('.close-details-enrollment');
    if (closeBtnEnrollment) closeBtnEnrollment.addEventListener('click', hideEnrollmentDetails);

    var btnOrientation = document.querySelector('.details-btn-orientation');
    if (btnOrientation) {
        btnOrientation.setAttribute('aria-expanded', 'false');
        btnOrientation.setAttribute('aria-controls', 'orientation-details-row');
        btnOrientation.addEventListener('click', toggleOrientationDetails);
    }
    var closeBtnOrientation = document.querySelector('.close-details-orientation');
    if (closeBtnOrientation) closeBtnOrientation.addEventListener('click', hideOrientationDetails);

    var btnProgram = document.querySelector('.details-btn-program');
    if (btnProgram) {
        btnProgram.setAttribute('aria-expanded', 'false');
        btnProgram.setAttribute('aria-controls', 'program-details-row');
        btnProgram.addEventListener('click', toggleProgramDetails);
    }
    var closeBtnProgram = document.querySelector('.close-details-program');
    if (closeBtnProgram) closeBtnProgram.addEventListener('click', hideProgramDetails);

    var btnDegree = document.querySelector('.details-btn-degree');
    if (btnDegree) {
        btnDegree.setAttribute('aria-expanded', 'false');
        btnDegree.setAttribute('aria-controls', 'degree-details-row');
        btnDegree.addEventListener('click', toggleDegreeDetails);
    }
    var closeBtnDegree = document.querySelector('.close-details-degree');
    if (closeBtnDegree) closeBtnDegree.addEventListener('click', hideDegreeDetails);
}); 