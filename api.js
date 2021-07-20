var arr=[];
let reRenderStar=()=>{
    let point = ` https://swapi.dev/api/people/`;
       let cardUI = "";
       fetch(point)
    .then((response) => response.json())
    .then((data) => {
        arr.push(data);
        console.log(data);
     data.results.forEach((item, index) => {
      cardUI += `<div class="card" key=${index}>
      <p><b>name</b>:${item.name}</p>
      <p><b>height</b>:${item.height}</p>
      <p><b>mass</b>:${item.mass}</p>
      <p><b>hair_color</b>:${item.hair_color}</p>
      <p><b>skin_colo</b>:${item.skin_colo}</p>
      <p><b>eye_color</b>:${item.eye_color}</p>
      <p><b>birth_year</b>:${item.birth_year}</p>
      <p><b>gender</b>:${item.gender}</p>
      <button onclick="deleted(${index})"class="btn btn-warning"> Delete</button>
     
  </div>`;
        });
        setTimeout(() => {
            document.querySelector(".stardata").innerHTML = cardUI;

        }, 3000);
    
    })
};
 reRenderStar(); 
 
 console.log(arr);
  function reRender(res){
    let cardUI = "";
    res.forEach((item,index) => {
        cardUI += `<div class="card" key=${index}>
        <p><b>name</b>:${item.name}</p>
      <p><b>height</b>:${item.height}</p>
      <p><b>mass</b>:${item.mass}</p>
      <p><b>hair_color</b>:${item.hair_color}</p>
      <p><b>skin_colo</b>:${item.skin_colo}</p>
      <p><b>eye_color</b>:${item.eye_color}</p>
      <p><b>birth_year</b>:${item.birth_year}</p>
      <p><b>gender</b>:${item.gender}</p>
      <button onclick="deleted(${index})"class="btn btn-warning"> Delete</button>
     
    </div>`;
          });
          document.querySelector(".stardata").innerHTML = cardUI;
  }
 
function deleted(index){
   let res = arr[0].results
   res.splice(index,1)
    reRender(res);
}
   