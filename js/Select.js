const selectButton = document.querySelectorAll('.select');
for(let button of selectButton){
  button.addEventListener('click',function(event){
  const singlePlayer = event.target.parentNode.childNodes[3].firstElementChild.innerText;
  const textPlayer = document.getElementById('text-player');
  const playerEror = textPlayer.childNodes.length;
  if(playerEror > 4){
    alert('You cant select more than five');
    return;
  }
  const listItem = document.createElement('li');
  listItem.innerText = singlePlayer;
  textPlayer.appendChild(listItem);
  event.target.setAttribute('disabled',true);
  event.target.style.backgroundColor = 'gray';
  })

}