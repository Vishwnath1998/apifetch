
let reRenderStar=()=>{
    let point = ` https://swapi.dev/api/people/`;
       let cardUI = "";
       fetch(point)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
     data.results.forEach((item, index) => {
      cardUI += `<div class="card" key=${index}>
      <p>name:${item.name}</p>
      <p>height:${item.height}</p>
      <p>mass:${item.mass}</p>
      <p>hair_color:${item.hair_color}</p>
      <p>skin_colo:${item.skin_colo}</p>
      <p>eye_color:${item.eye_color}</p>
      <p>birth_year:${item.birth_year}</p>
      <p>gender:${item.gender}</p>
      <button onclick="deleted(${index,data.results})"> Delete</button>
     
  </div>`;
        });
        setTimeout(() => {
            document.querySelector(".stardata").innerHTML = cardUI;

        }, 2000);
    
    })
};
 reRenderStar();    
  function reRender(arr){
    let cardUI = "";
    arr.forEach((item,index) => {
        cardUI += `<div class="card" key=${index}>
        <p>name:${item.name}</p>
        <p>height:${item.height}</p>
        <p>mass:${item.mass}</p>
        <p>hair_color:${item.hair_color}</p>
        <p>skin_colo:${item.skin_colo}</p>
        <p>eye_color:${item.eye_color}</p>
        <p>birth_year:${item.birth_year}</p>
        <p>gender:${item.gender}</p>
        <button onclick="deleted(${index,arr})"> Delete</button>
       
    </div>`;
          });
          document.querySelector(".stardata").innerHTML = cardUI;
  }
 
function deleted(index,arr){
   arr.splice(index,1)
    reRender(arr);
}
   