
// document.querySelectorAll('.text').forEach(item => {
//     item.addEventListener('input', () => {
//         item.setCustomValidity('');
//         item.checkValidity();
//     });
    
//     item.addEventListener('invalid', () => {
//         if(item.value === '') {
//             if (document.getElementById("error"))
//                 return
//             else{
//                 const text = document.createTextNode(`[${item.getAttribute("name")}] cannot be empty`);
//                 const createSpan = document.createElement("span")
//                 createSpan.setAttribute("id","error")
//                 createSpan.append(text)
//                 item.after(createSpan)
//             }
//         } else {
//             if (document.getElementById("error"))
//                 return
//             else{
//                 const text = document.createTextNode("Looks like this is not an email")
//                 const createSpan = document.createElement("span")
//                 createSpan.setAttribute("id","error")
//                 createSpan.append(text)
//                 item.after(createSpan)
//         }}
//     });
//     })
const btn = document.querySelector(".btn-submit");
var tab = [];
const input = document.querySelectorAll("input");
for (var i=0; i < 4; i++){
    tab.push([input[i],input[i].getAttribute("name")]);
}
for (var i=0; i < tab.length; i++){
    console.log(i);
    btn.addEventListener('click', () => {
        console.log(i);
        tab[i][i].addEventListener('invalid', () => {
            if(item.value === '') {
                const text = document.createTextNode(`[${item.getAttribute("name")}] cannot be empty`);
                const createSpan = document.createElement("span");
                createSpan.setAttribute("id","error");
                createSpan.append(text);
                item.after(createSpan);
            }

        });
    })
}
    
