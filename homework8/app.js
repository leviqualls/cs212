const link = document.getElementById('resume');
const name = "Levi Qualls";
let hasDownloadedResume = false;
let downloadCount = 0;

const projectTitles = [
    "Project Lorem Ipsum",
    "Lorem Ipsum 2",
    "The Final Ipsum"
];
const projectDescriptions = [
    "Project about lorem ipsum.",
    "The second project for lorem ipsum.",
    "The final ipsum of lorem."
];
const projectDeadlines = [
    "10/14/2026",
    "11/15/2026",
    "12/2/2026"
];

const education = [
    {
        school: "Shadow Ridge High School",
        degree: "High School Diploma",
        dates: "2020 - 2024"
    },
    {
        school: "Northern Arizona University",
        degree: "BSCS Computer Science",
        dates: "2024 - 2028"
    }
];
const experience = [
    {
        company: "Honeywell",
        role: "Intern",
        dates: "20XX - 20XX"
    }
];

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
function addSkill() {
    const skillInput = document.getElementById("skillInput");
    const skillsList = document.getElementById("skillsList");
    const skill = skillInput.value.trim();

    if (skill !== "") {
        const newSkill = document.createElement("li");
        newSkill.textContent = skill;

        skillsList.appendChild(newSkill);

        skillInput.value = "";
    }
}
function updateDownloadCount() {
    downloadCount++;

    const countDisplay = document.getElementById("downloadCount");
    countDisplay.textContent = "Resume Downloads: " + downloadCount;
}

document.getElementById("addSkillBtn").addEventListener("click", addSkill);
link.addEventListener('click', function(event) {
    updateDownloadCount();
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
window.addEventListener('DOMContentLoaded', function() {
    const projectList = document.getElementById("projectList");

    for (let i = 0; i < projectTitles.length; i++) {
        const projectTitle = document.createElement("h4");
        projectTitle.textContent = projectTitles[i];
        const projectDescription = document.createElement("p");
        projectDescription.textContent = projectDescriptions[i];
        const projectDeadline = document.createElement("p");
        projectDeadline.textContent = "Deadline: " + projectDeadlines[i];
        const projectStatus = document.createElement("p");
        const today = new Date().toISOString().split('T')[0];
        const daysRemaining = daysUntilDeadline(today, projectDeadlines[i]);

        if (daysRemaining > 0) {
            projectStatus.textContent = "Status: Ongoing";
        }
        else if (daysRemaining < 0) {
            projectStatus.textContent = "Status: Completed";
        }
        else if (daysRemaining === 0) {
            projectStatus.textContent = "Status: Due Today";
        }

        projectList.appendChild(projectTitle);
        projectList.appendChild(projectDescription);
        projectList.appendChild(projectDeadline);
        projectList.appendChild(projectStatus);
    }
});
window.addEventListener('DOMContentLoaded', function() {
    const educationContainer = document.getElementById("educationTable");
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const institutionHeader = document.createElement("th");
    institutionHeader.textContent = "Institution";
    const degreeHeader = document.createElement("th");
    degreeHeader.textContent = "Degree";
    const durationHeader = document.createElement("th");
    durationHeader.textContent = "Duration";

    headerRow.appendChild(institutionHeader);
    headerRow.appendChild(degreeHeader);
    headerRow.appendChild(durationHeader);

    table.appendChild(headerRow);

    for (let i = 0; i < education.length; i++) {
        const row = document.createElement("tr");
        const school = document.createElement("td");
        school.textContent = education[i].school;
        const degree = document.createElement("td");
        degree.textContent = education[i].degree;
        const dates = document.createElement("td");
        dates.textContent = education[i].dates;

        row.appendChild(school);
        row.appendChild(degree);
        row.appendChild(dates);

        table.appendChild(row);
    }
    educationContainer.appendChild(table);
});
window.addEventListener('DOMContentLoaded', function() {
    const experienceContainer = document.getElementById("experienceTable");
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const companyHeader = document.createElement("th");
    companyHeader.textContent = "Company";
    const roleHeader = document.createElement("th");
    roleHeader.textContent = "Position";
    const durationHeader = document.createElement("th");
    durationHeader.textContent = "Duration";

    headerRow.appendChild(companyHeader);
    headerRow.appendChild(roleHeader);
    headerRow.appendChild(durationHeader);

    table.appendChild(headerRow);

    for (let i = 0; i < experience.length; i++) {
        const row = document.createElement("tr");
        const company = document.createElement("td");
        company.textContent = experience[i].company;
        const role = document.createElement("td");
        role.textContent = experience[i].role;
        const dates = document.createElement("td");
        dates.textContent = experience[i].dates;

        row.appendChild(company);
        row.appendChild(role);
        row.appendChild(dates);

        table.appendChild(row);
    }
    experienceContainer.appendChild(table);
});
