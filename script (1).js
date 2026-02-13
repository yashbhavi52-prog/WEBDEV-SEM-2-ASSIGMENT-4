const form = document.getElementById("eventForm");
const eventList = document.getElementById("event-list");
const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");
const keyBox = document.getElementById("keyBox");

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(eventList.textContent.includes("No events")){
        eventList.innerHTML="";
    }

    const card = document.createElement("div");
    card.className="event";

    card.innerHTML = `
        <button class="delete">X</button>
        <h4>${title.value}</h4>
        <span>${date.value}</span>
        <span>${category.value}</span>
        <p>${description.value}</p>
    `;

    eventList.appendChild(card);
    form.reset();
});

eventList.addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();

        if(eventList.children.length===0){
            eventList.textContent="No events yet. Add your first event!";
        }
    }
});

clearBtn.onclick = ()=>{
    eventList.textContent="No events yet. Add your first event!";
};

sampleBtn.onclick = ()=>{
    eventList.innerHTML="";

    ["Conference 2026","Web Dev Webinar","College Meetup"].forEach(name=>{
        const div=document.createElement("div");
        div.className="event";

        div.innerHTML=`
            <button class="delete">X</button>
            <h4>${name}</h4>
            <span>Sample Date</span>
            <span>Sample Category</span>
            <p>Sample Description</p>
        `;

        eventList.appendChild(div);
    });
};

document.addEventListener("keydown", e=>{
    keyBox.textContent="You Pressed: " + e.key;
});
