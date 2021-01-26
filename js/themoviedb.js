

(function() {
    var app = angular.module("moviesApp", []);
    
  
    app.controller("searchMoviesCtrl", function($http, $scope) {
      $scope.search = "";
      $scope.$watch("search", function() {
        if ($scope.search.length >= 1) {
          document.getElementById("overp2").innerHTML = "";
          document.getElementById("overp2").innerHTML += ' <h1 class="pop-import">Search</h1>';
          searchAll();
        } else {
          showPopular();
        }
      });
      $scope.myPopular = function() {
        document.getElementById("overp2").innerHTML = "";
        document.getElementById("overp2").innerHTML += ' <h1 class="pop-import">Most Popular</h1>';
       showPopular();
      }



      $scope.getTitle = function() {
          var list = $("#movT").text();

          document.getElementById("watchText").innerHTML += list + "<br>";
      }
      $scope.getTitle2 = function() {
        var list = $("#movT2").text();

        document.getElementById("watchText").innerHTML += list + "<br>";
     }
        

  
      $scope.listOfMovies;
      $scope.baseUrl = "http://image.tmdb.org/t/p/w300/";
  
      function searchAll() {
        $http
          .get(
            "https://api.themoviedb.org/3/search/movie?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&query=" +
              $scope.search +
              "&page=1&include_adult=false"
          )
          .then(function(response) {
            $scope.listOfMovies = response.data.results;
          });
      }
  
      function showPopular() {
        $http
          .get(
            "https://api.themoviedb.org/3/movie/popular?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
          )
          .then(function(response) {
            $scope.listOfMovies = response.data.results;
          });
      }



    });

    app.controller("searchRandomCtrl", function($http, $scope) {
      $scope.search = "";
      makeid();

      $scope.$watch("search", function() {
          searchAll();
      });

  
      $scope.listOfMovies;
      $scope.baseUrl = "http://image.tmdb.org/t/p/w300/";

      function makeid(){
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";
      
        for (var i = 0; i < 2; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
            $scope.search = text;
      }
      $scope.getTitle5 = function() {
        var list = $("#movT5").text();

        document.getElementById("watchText").innerHTML += list + "<br>";
      } 
  
      function searchAll() {
        $http
          .get(
            "https://api.themoviedb.org/3/search/movie?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&query=" +
            $scope.search +
            "&page=1&include_adult=false"
          )
          .then(function(response) {
            $scope.listOfMovies = response.data.results;
          });
      }

    });
    app.controller("searchActionCtrl", function($http, $scope) {
      $scope.search = "";

      $scope.listOfMovies;
      $scope.baseUrl = "http://image.tmdb.org/t/p/w300/";

      $scope.getTitle6 = function() {
        var list = $("#movT6").text();

        document.getElementById("watchText").innerHTML += list + "<br>";
      } 
      $scope.getTitle7 = function() {
        var list = $("#movT7").text();

        document.getElementById("watchText").innerHTML += list + "<br>";
      } 

      $scope.myFunction = function() {
        document.getElementById("slapp").innerHTML = "";
        document.getElementById("innerButton").innerHTML = "";
        document.getElementById("buttonCalc3").innerHTML = "";
 
        document.getElementById("slapp").innerHTML += "<h5>Maybe these movies are something for you!?</h5><br>";
        document.getElementById("top1").style.visibility = "visible";

        if(winner != ""){
              switch(winner){
                  case "action": 
                    showAction();
                    break;
                  case "animation":
                    showAnimation();
                    break;
                  case "documentary":
                    showDocumentary();
                    break;
                  case "drama":
                    showDrama();
                    break;
                  case "family":
                    showFamily();
                    break;
                  case "fantasy":
                    showFantasy();
                    break;
                  case "history":
                    showHistory();
                    break;
                  case "comedy":
                    showComedy();
                    break;
                  case "war":
                    showWar();
                    break;
                  case "crime":
                    showCrime();
                    break;
                  case "mystery":
                    showMystery();
                    break;
                  case "romance":
                    showRomance();
                    break;
                  case "sci":
                    showSci();
                    break;
                  case "horror":
                    showHorror();
                    break;
                  case "thriller":
                    showThriller();
                    break;
                  case "western":
                    showWestern();
                    break;
                  case "adventure":
                    showAdventure();
                    break;
                  
              }
          }

      }

      function showAction() {
          $http
          .get(
            "https://api.themoviedb.org/3/genre/28/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        
          )
          .then(function(response) {
            $scope.listOfMovies = response.data.results;
          });
        
      }

      function showAnimation() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/16/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }

      function showDocumentary() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/99/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showDrama() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/18/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showFamily() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/10751/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showFantasy() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/14/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showHistory() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/36/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showComedy() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/35/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showWar() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/10752/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showCrime() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/80/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showMystery() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/9648/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showRomance() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/10402/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showSci() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/878/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showHorror() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/27/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showThriller() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/53/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showWestern() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/37/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showAdventure() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/12/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }

    });

    app.controller("searchGenreCtrl", function($http, $scope) {
      $scope.search = "";

      $scope.listOfMovies;
      $scope.baseUrl = "http://image.tmdb.org/t/p/w300/";

      $scope.myAction = function() {
         
        document.getElementById("containerp3").innerHTML = "";
 
        document.getElementById("containerp3").innerHTML += "<h3>Action</h3><br>";
        document.getElementById("top2").style.visibility = "visible";
        document.getElementById("buttonBack").innerHTML += buttonBack;
        showAction();
      }
      $scope.myRomance = function() {
         
        document.getElementById("containerp3").innerHTML = "";
 
        document.getElementById("containerp3").innerHTML += "<h3>Romance</h3><br>";
        document.getElementById("top2").style.visibility = "visible";
        document.getElementById("buttonBack").innerHTML += buttonBack;
        showRomance();
      }
      $scope.myDrama = function() {
         
        document.getElementById("containerp3").innerHTML = "";
 
        document.getElementById("containerp3").innerHTML += "<h3>Drama</h3><br>";
        document.getElementById("top2").style.visibility = "visible";
        document.getElementById("buttonBack").innerHTML += buttonBack;
        showDrama();
      }
      $scope.myCrime = function() {
         
        document.getElementById("containerp3").innerHTML = "";
 
        document.getElementById("containerp3").innerHTML += "<h3>Crime</h3><br>";
        document.getElementById("top2").style.visibility = "visible";
        document.getElementById("buttonBack").innerHTML += buttonBack;
        showCrime();
      }
      $scope.myHorror = function() {
         
        document.getElementById("containerp3").innerHTML = "";
 
        document.getElementById("containerp3").innerHTML += "<h3>Horror</h3><br>";
        document.getElementById("top2").style.visibility = "visible";
        document.getElementById("buttonBack").innerHTML += buttonBack;
        showHorror();
      }
      $scope.mySci = function() {
         
        document.getElementById("containerp3").innerHTML = "";
 
        document.getElementById("containerp3").innerHTML += "<h3>Sci-Fi</h3><br>";
        document.getElementById("top2").style.visibility = "visible";
        document.getElementById("buttonBack").innerHTML += buttonBack;
        showSci();
      }
      $scope.myWestern = function() {
         
        document.getElementById("containerp3").innerHTML = "";
 
        document.getElementById("containerp3").innerHTML += "<h3>Western</h3><br>";
        document.getElementById("top2").style.visibility = "visible";
        document.getElementById("buttonBack").innerHTML += buttonBack;
        showWestern();
      }
      $scope.myThriller = function() {
         
        document.getElementById("containerp3").innerHTML = "";
 
        document.getElementById("containerp3").innerHTML += "<h3>Thriller</h3><br>";
        document.getElementById("top2").style.visibility = "visible";
        document.getElementById("buttonBack").innerHTML += buttonBack;
        showThriller();
      }
      $scope.myComedy = function() {
         
        document.getElementById("containerp3").innerHTML = "";
 
        document.getElementById("containerp3").innerHTML += "<h3>Comedy</h3><br>";
        document.getElementById("top2").style.visibility = "visible";
        document.getElementById("buttonBack").innerHTML += buttonBack;
        showComedy();
      }
      $scope.myFamily = function() {
         
        document.getElementById("containerp3").innerHTML = "";
 
        document.getElementById("containerp3").innerHTML += "<h3>Family</h3><br>";
        document.getElementById("top2").style.visibility = "visible";
        document.getElementById("buttonBack").innerHTML += buttonBack;
        showFamily();
      }

      $scope.getTitle3 = function() {
        var list = $("#movT3").text();

        document.getElementById("watchText").innerHTML += list + "<br>";
      } 
      $scope.getTitle4 = function() {
        var list = $("#movT4").text();

        document.getElementById("watchText").innerHTML += list + "<br>";
      } 
      function showAction() {
          $http
          .get(
            "https://api.themoviedb.org/3/genre/28/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        
          )
          .then(function(response) {
            $scope.listOfMovies = response.data.results;
          });
        
      }

      function showAnimation() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/16/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }

      function showDocumentary() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/99/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showDrama() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/18/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showFamily() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/10751/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showFantasy() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/14/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showHistory() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/36/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showComedy() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/35/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showWar() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/10752/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showCrime() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/80/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showMystery() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/9648/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showRomance() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/10402/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showSci() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/878/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showHorror() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/27/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showThriller() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/53/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showWestern() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/37/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }
      function showAdventure() {
        $http
        .get(
          "https://api.themoviedb.org/3/genre/12/movies?api_key=3fcc4c18d6df53c06d2776ee56df1918&language=en-US&page=1"
        )
        .then(function(response) {
          $scope.listOfMovies = response.data.results;
      });
      }

    });


  })(); //end of SIF