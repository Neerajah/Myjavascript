const buttons=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.box');
const searchBox=document.querySelector("#search");
searchBox.addEventListener('keyup',(e)=>{
searchText=e.target.value.toLowerCase().trim();

boxes.forEach((box)=>{
    const data=box.dataset.item;
    if(data.includes(searchText)){
    box.style.display='block';
    }else{
        box.style.display='none';
    }
});
buttons.forEach((button)=>{
    button.classList.remove('btn-clicked');
});
buttons[0].classList.add('btn-clicked');
});

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        
        e.preventDefault();
        setActivateBtn(e);
        const filter=e.target.dataset.filter;
     
           boxes.forEach((box=>{
            if(filter=='all'){
                box.style.display="block";
            }else{
                const boxfilter=box.dataset.item;
                if(btnfilter==boxfilter){
                    box.style.display="block";
                }else{
                    box.style.display="none";
                }
            }
        }));
        });
});

function setActivateBtn(e){
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
}