const eventForm=document.getElementById("eventForm");
const eventTitle=document.getElementById("eventTitle");
const eventDate=document.getElementById("eventDate");
const eventCategory=document.getElementById("eventCategory");
const eventDescription=document.getElementById("eventDescription");
const clearAllBtn=document.getElementById("clearAllBtn");
const addSampleBtn=document.getElementById("addSampleBtn");
const eventContainer=document.getElementById("eventContainer");

const sampleEvents=[
{
    title:"Web dev",
    date:"2026-05-04",
    category:"Workshop",
    description:"Sample workshop event"
},
{
    title:"Web dev2",
    date:"2026-06-04",
    category:"Conference",
    description:"Sample conference event"
}
];

function createEventCard(eventData){
   const card=document.createElement("div");
   card.classList.add("event-card");

   card.innerHTML=`
   <button class="delete-btn">X</button>
   <h3>${eventData.title}</h3>
   <div>${eventData.date}</div>
   <span>${eventData.category}</span>
   <p>${eventData.description}</p>
   `;
   return card;
}

function addEvent(eventData){
    const emptyState=document.querySelector(".empty-state");
    if(emptyState) emptyState.remove();
    eventContainer.appendChild(createEventCard(eventData));
}

eventForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const eventData={
        title:eventTitle.value,
        date:eventDate.value,
        category:eventCategory.value,
        description:eventDescription.value
    };
    addEvent(eventData);
    eventForm.reset();
});

clearAllBtn.addEventListener("click",()=>{
    eventContainer.innerHTML=`<div class="empty-state">
    No events yet. Add your first event!
    </div>`;
});

addSampleBtn.addEventListener("click",()=>{
    sampleEvents.forEach(addEvent);
});

eventContainer.addEventListener('click',(event)=>{
    if(event.target.classList.contains('delete-btn')){
        event.target.closest('.event-card').remove();

        if(!eventContainer.querySelector('.event-card')){
            eventContainer.innerHTML=`<div class="empty-state">
            No events yet. Add your first event!
            </div>`;
        }
    }
});