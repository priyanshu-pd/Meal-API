// $('body').css("background","purple");

// $("body").css({"background-image": "url(foodbg.jpg)" });

function revealFunction(){

  window.sr= ScrollReveal({duration:1200, distance:'200px',easing:'ease-out'});


  sr.reveal('.reveal-left',{origin:'left', reset:false});
  sr.reveal('.reveal-top',{origin:'top', reset:false});
  sr.reveal('.reveal-bottom',{origin:'bottom', reset:false});
  sr.reveal('.reveal-right',{origin:'right', reset:false});

  // sr.reveal('.reveal-reset-true',{origin:'bottom', reset:true});
  // sr.reveal('.reveal-rotate',{origin:'bottom', rotate{x:1000, z:1000},reset:true});

}

window.addEventListener('load',()=>{
  revealFunction();
})



document.getElementById('userInput').addEventListener('focus',()=>{
    document.querySelector('i.fa-solid').style.display = "block"
})
document.getElementById('userInput').addEventListener('blur',()=>{
    document.querySelector('i.fa-solid').style.display = "none"
    if(userInput.value !== ''){
        document.querySelector('i.fa-solid').style.display = "block"
    }
})

document.querySelector('.fa-solid').addEventListener('click',()=>{
    if(userInput.value !==''){
        userInput.value = ''
    }
})

document.getElementById("btn").addEventListener("click", () => {


  let user = document.getElementById("userInput").value;

  let mealAPI = fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`
  );


  mealAPI.then((getData)=>{
    return getData.json();
  }).then((sendData)=>{
    console.log(sendData)
    let data =''
    sendData.meals.forEach((e, i) => {



        data +=`
        <h2 class='text-center text-success mt-5'>Food Area: ${e.strArea}</h2>
        <h2 class='text-center text-163020'>Food Name: ${e.strMeal}</h2>
        <div class="row">
        <div class="col-md-4">
            <img src="${e.strMealThumb}" alt="" class='w-100 img'>
        </div>
        <div class="col-md-8">
<div class="card text-black bg-secondary">
          <div class="card-header">

             <h2>Ingredients:</h2>
          </div>

            <ul>
                <li>${e.strIngredient1}</li>
                <li>${e.strIngredient2}</li>
                <li>${e.strIngredient3}</li>
                <li>${e.strIngredient4}</li>
                <li>${e.strIngredient5}</li>
                <li>${e.strIngredient6}</li>
                <li>${e.strIngredient7}</li>
                <li>${e.strIngredient8}</li>
                <li>${e.strIngredient9}</li>
                <li>${e.strIngredient10}</li>
                <li>${e.strIngredient11}</li>
                <li>${e.strIngredient12}</li>
                <li>${e.strIngredient13}</li>
                <li>${e.strIngredient14}</li>
                <li>${e.strIngredient15}</li>
                <li>${e.strIngredient16}</li>

            </ul>
        </div>
        </div>

        <div class="col-md-8">
        <div class="card text-black bg-secondary">
          <div class="card-header">

  <h2>Measurements:</h2>
            </div>

            <ul>
            <li>${e.strMeasure1}</li>
            <li>${e.strMeasure2}</li>
            <li>${e.strMeasure3}</li>
            <li>${e.strMeasure4}</li>
            <li>${e.strMeasure5}</li>
            <li>${e.strMeasure6}</li>
            <li>${e.strMeasure7}</li>
            <li>${e.strMeasure8}</li>
            <li>${e.strMeasure9}</li>
            <li>${e.strMeasure10}</li>
            <li>${e.strMeasure11}</li>
            <li>${e.strMeasure12}</li>
            <li>${e.strMeasure13}</li>
            <li>${e.strMeasure14}</li>

        </ul>
        </div>
    </div>
    <div class="col-12">
            <div class="card text-white bg-dark">
              <div class="card-header">

        <h2>Instructions:</h2>
        </div>
        <p>${e.strInstructions}</p>
    </div>
    </div>
    <div class='col-6 offset-3'>
        <h2 class='text-center'>Watch Full Video On <a class='text-danger yt' data-bs-toggle="modal" data-bs-target="#exampleModal${i}"><u>Youtube</u></a></h2>

        <!-- Modal -->
<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${e.strMeal}</h1>

      </div>
      <div class="modal-body">
      <iframe src="https://youtube.com/embed/${e.strYoutube.slice(-11,)}" frameborder="0" width="100%" height='300'></iframe>
      </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
    </div>
        `
        heading.innerHTML = ` <h1 class='text-center text-#163020'>Food Category: ${sendData.meals[0].strCategory}</h1>`
        appendData.innerHTML = data
    });
  }).catch((error)=>{
    document.querySelector('.find').style.display = 'none';
    document.querySelector('.notfound').innerHTML = "NOT Found!";
    document.querySelector('.try').innerHTML = "Try other meals ";
  })
});
