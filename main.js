

// //API


function getPasta() {
  return new Promise(function (callback) {
    var xml = new XMLHttpRequest()
    xml.open('GET', `https://forkify-api.herokuapp.com/api/search?q=pasta`)
    xml.send()
    xml.addEventListener('readystatechange', function () {
      if (xml.readyState == 4) {
        console.log('pasta', JSON.parse(xml.response).recipes);
        callback()
      }
    })
  })
}
function getPizaa() {
  return new Promise(function (callback) {
    var xml = new XMLHttpRequest()
    xml.open('GET', `https://forkify-api.herokuapp.com/api/search?q=pizza`)
    xml.send()
    xml.addEventListener('readystatechange', function () {
      if (xml.readyState == 4) {
        console.log('pizza', JSON.parse(xml.response).recipes);
        callback()
      }
    })
  })
}
function getCarrot() {
  return new Promise(function (callback) {
    var xml = new XMLHttpRequest()
    xml.open('GET', `https://forkify-api.herokuapp.com/api/search?q=carrot`)
    xml.send()
    xml.addEventListener('readystatechange', function () {
      if (xml.readyState == 4) {
        console.log('carrot', JSON.parse(xml.response).recipes);
        callback()
      }
    })
  })
}





function end() {
  console.log('end');
}

///call back hell
// getPizaa(function(){
//   getPasta(function(){
//     getCarrot(end)
//   })
// })

///promise , then 

// getPizaa()
// .then(function(){return getPasta()})
// .then(function(){return getCarrot()})
// .then(end)




//async , await


// (async function() {
//   await getPizaa()
//   await getPasta()
//   await getCarrot()
//   end()
// })();


// var myProm = new Promise(function(resolve,reject){
// if(5<3)
// resolve()
// else
// reject()
// })

// myProm
// .then(function(){console.log('success')})
// .catch(function(){console.log('err');})

//fetch ==> ajax 
var arr=[]
async function getData() {
  var data = await fetch('https://forkify-api.herokuapp.com/api/search?q=carrot')
  data = await data.json()
  arr =data.recipes
  display()
}

getData()


function display()
{
  var box = ''

  for(var i=0;i<arr.length;i++)
  {
    box+=` <div class="col-md-4">
    <div class="item p-3">
      <img src="${arr[i].image_url}" class="w-100" alt="">
      <p>${arr[i].title}</p>
    </div>
   </div>`
  }
  Row.innerHTML = box
}