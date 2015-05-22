(function(){

  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    document.querySelector(".search").innerHTML= "";
    document.querySelector(".movie").innerHTML= "";
    var input = document.querySelector('input').value;
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'http://omdbapi.com/?s=' + encodeURIComponent(input), true);
    xhr.addEventListener('load', function(response){
      var res =  JSON.parse(this.response).Search;
      for(var i = 0; i < res.length; i++){
        var node = document.createElement('li');
        node.innerText = res[i].Title;
        document.querySelector('.search').appendChild(node);
        

                            node.addEventListener('click', function(){
                              document.querySelector(".movie").innerHTML = "";
                              var aj = new XMLHttpRequest();
                              aj.open('get', 'http://omdbapi.com/?t=' + this.innerHTML, true);
                              aj.addEventListener('load', function(response){
                                  var respon = JSON.parse(this.response)
                            
                                var titleNode = document.createElement('li');
                                var yearNode = document.createElement('li');
                                var ratedNode = document.createElement('li');
                                var genreNode = document.createElement('li');
                                var plotNode = document.createElement('li');
                                titleNode.innerText = respon.Title;
                                yearNode.innerText += respon.Year;
                                ratedNode.innerText += respon.Rated;
                                genreNode.innerText += respon.Genre;
                                plotNode.innerText += respon.Plot;
                                document.querySelector('.movie').appendChild(titleNode);
                                document.querySelector('.movie').appendChild(yearNode);
                                document.querySelector('.movie').appendChild(ratedNode);
                                document.querySelector('.movie').appendChild(genreNode);
                                document.querySelector('.movie').appendChild(plotNode);
                              });
                              aj.send();
                            });  





      }
  });
    xhr.send();
  });
})();
























