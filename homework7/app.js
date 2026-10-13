const link = document.getElementById('resume');
const name = "Levi Qualls";
let hasDownloadedResume = false;

function showGreeting(time, name) {
    return time + ", my name is " + name + "! Welcome to my portfolio!";
}
function daysUntilDeadline(startDate, endDate) {
    let today = new Date(startDate);
    let deadline = new Date(endDate);
    let timeDifference = deadline - today;
    let daysDifference = timeDifference / (1000 * 3600 * 24);

    return daysDifference;
}
function getTimeGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
        return "Good Morning";
    }
    else if (hour < 18) {
        return "Good Afternoon";
    }
    else {
        return "Good Evening";
    }
}

link.addEventListener('click', function(event) {
    if (!hasDownloadedResume) {
        setTimeout(function() {
            alert("Your resume is downloaded successfully!");
        }, 2000);
        hasDownloadedResume = true;
    }
});
window.addEventListener('DOMContentLoaded', function() {
    const greetingSection = document.getElementById('greeting');
    greetingSection.textContent = showGreeting(getTimeGreeting(), name);
});
window.addEventListener('DOMContentLoaded', function() {
    const projectDeadline = document.getElementById('deadline');
    projectDeadline.textContent = daysUntilDeadline('2026-10-12', '2026-10-31') + ' days until deadline.';
});
