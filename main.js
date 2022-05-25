const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item

function selectItem(e){
    removeBorder();
    removeShow();
    //Add Border to current tab
    this.classList.add('tab-border')
    //Grab content item from DOM(me lol)
    const tabContentItem = document.querySelector(`#${this.id}-content`);//Back ticks are used because this is going to be dynamic
    //Add show class
    tabContentItem.classList.add('show');
}

//Function to remove border after each click
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

//Removes default show elements after you click
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listens for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));