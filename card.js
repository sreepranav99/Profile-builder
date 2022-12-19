let main=document.querySelector(".container");
let row=document.createElement("div");
row.className='row row-cols-md-4'
fetch("https://jsonplaceholder.typicode.com/todos")
.then((res)=>res.json())
.then((data)=>{
    for(let i of data)
    {
        
        let card=document.createElement("div")
        card.className='card mt-5 vertical-card tent ';
        card.style.backgroundColor="#f5a442"
        card.style.height="450px"
        let cardBody=document.createElement("div");
        cardBody.className='card-body  mt-5';
        cardBody.style.textAlign="center"
        
        let div1=document.createElement("div");
        let div2=document.createElement("div");
        let div3=document.createElement("div");
        let div4=document.createElement("div");
        let h1=document.createElement("h3")
        let h2=document.createElement("h3")
        let h3=document.createElement("h3")
        let h4=document.createElement("h3")
        let ele1=document.createElement("h3");
        let ele2=document.createElement("h3");
        let ele3=document.createElement("h3");
        let ele4=document.createElement("h3");
        //for user Id
        h1.textContent="UserId:"
        h1.style.color="#a442f5"
        ele1.textContent=i.userId;
        div1.style.display="flex";
        div1.style.justifyContent="center";
        div1.appendChild(h1)
        div1.appendChild(ele1)
        ele1.style.paddingLeft="5px"
        ele1.style.paddingTop="2px"
        cardBody.appendChild(div1)
        //for id
        h2.textContent="Id:"
        h2.style.color="#a442f5"
        ele2.textContent=i.id;
        div2.style.display="flex";
        div2.style.justifyContent="center";
        div2.appendChild(h2)
        div2.appendChild(ele2)
        ele2.style.paddingLeft="5px"
        ele2.style.paddingTop="2px"
        cardBody.appendChild(div2)
        //for  title
        h3.textContent="Title:";
        h3.style.color="#a442f5"
        ele3.textContent=i.title;
        cardBody.appendChild(h3);
        cardBody.appendChild(ele3);
        //for completed
        h4.textContent="Completed:";
        h4.style.color="#a442f5";
        ele4.textContent=i.completed;
        div4.style.display="flex";
        div4.style.justifyContent="center";
        div4.appendChild(h4)
        div4.appendChild(ele4)
        ele4.style.paddingLeft="5px"
        ele4.style.paddingTop="2px"
        cardBody.appendChild(div4)

        card.appendChild(cardBody);
        row.appendChild(card)
    }
    main.appendChild(row)
})