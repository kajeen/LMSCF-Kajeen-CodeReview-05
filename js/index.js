console.log(info)
var movies = info;
var likeCounter = [];

movies.forEach( function(){
    likeCounter.push(Math.floor(Math.random()* Math.floor(15)));
    }
)

const addLike = function(index) {
    var like = $(`#likes${index}`).html();
    like++;
    $(`#likes${index}`).html(like);
}


for (i=0; i< movies.length; i++) {
var b = `<div id="container" class="col-lg-5 media text-white p-4 mb-3">
			<img src="${movies[i].image}" alt="image" class="foto media-left pr-4">
			<div class="media-body">
				<h4 class="card-titel">${movies[i].name}</h4>
				<p class="card-text">${movies[i].desc}</p>
				<div class="alignButton"><button onclick="addLike(${i})" id="likeButton" type="button" class="btn bg-dark text-success btn-sm pb-2">Like <i class="fas fa-thumbs-up"></i> </button>
            		<span id="likes${i}" class="likes">${likeCounter[i]}</span>
        		</div>
			</div>
		</div>`;

		document.getElementById('kiste1').innerHTML += b;			
};	




