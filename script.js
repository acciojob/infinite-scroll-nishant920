const list = document.getElementById("infi-list");

let count = 1;



// initial items
for(let i = 0; i < 10; i++){

    addItem();
}



function addItem(){

    const li = document.createElement("li");

    li.innerText = `Item ${count++}`;

    list.appendChild(li);
}





list.addEventListener("scroll", () => {

    const scrollTop = list.scrollTop;

    const clientHeight = list.clientHeight;

    const scrollHeight = list.scrollHeight;



    // reached bottom
    if(scrollTop + clientHeight >= scrollHeight){

        for(let i = 0; i < 2; i++){

            addItem();
        }
    }

});