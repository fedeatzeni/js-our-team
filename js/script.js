const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

const output = document.querySelector(".container")
let x = ""

for (let key in teamMembers) {
    // Destructuring
    const { name, role, email, img } = teamMembers[key];
    //console.log(name, role, email, img);
    x += addHtml(name, role, email, img)
    //console.log(x);
}

output.innerHTML = x

// function 
function addHtml(name, role, email, img) {
    return `
    <div class="card">
        <img src="${img}" alt="${name}">
            <div class="info">
                <div><strong>${name}</strong></div>
                <div>${role}</div>
                <div class="blue">${email}</div>
            </div>
    </div>
    `
}