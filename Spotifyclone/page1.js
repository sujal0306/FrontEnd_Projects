const card=document.querySelectorAll(".card");
const cardImage=document.querySelectorAll(".imgp1")
const image2=document.querySelector(".img");
const sinfo=document.querySelector(".info")
card.forEach(card=>{
    card.addEventListener("click",()=>
{
window.location.href="page2.html";
image2.src=card.querySelector(".imgp1");
fetch('page1.html')
  .then(response => response.text()) // Convert the response to text
  .then(data => {
    // Create a temporary container to extract elements
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = data;

    // Get the specific element's content
    let sourceContent = tempDiv.querySelector(".h5").innerHTML;

    // Inject it into the destination element
    document.getElementsByClassName("sName").innerHTML = sourceContent;
  })
  .catch(error => console.error('Error fetching data:', error));
console.log(sourceContent);
})
})
fetch('page1.html')
  .then(response => response.text()) // Convert the response to text
  .then(data => {
    // Create a temporary container to extract elements
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = data;

    // Get the specific element's content
    let sourceContent = tempDiv.querySelector(".h5").innerHTML;

    // Inject it into the destination element
    document.getElementsByClassName("sName").innerHTML = sourceContent;
  })
  .catch(error => console.error('Error fetching data:', error));
console.log(sourceContent);

