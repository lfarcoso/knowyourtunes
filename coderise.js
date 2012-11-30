(function() {

  StackMob.init({
    appName: "knowyourtunes",
    clientSubdomain: "lfarcosoalcazareseduco",
    publicKey: "2e9107d9-6983-4005-a01d-fa686d15d7f4",
    apiVersion: 0
  });

  $('#addsong').click(function(e) {
    e.preventDefault();
  
    console.log("Add song");
  
    var group_name = $('#groupname').val();
    var album = $('#album').val();
    var iframe = $('#iframe').val();
    var song_name = $('#songname').val();
    var song_genre = $('#songgenre').val();
    var song_description = $('#songdescription').val();
    
    var Song = StackMob.Model.extend({ schemaName: 'songs' });
    var song = new Song({ groupname : group_name , album : album , iframe : iframe , songname : song_name , songgenre : song_genre , songdescription : song_description });
    song.create();
        
    console.log("Created a new Song in StackMob server");
  });
    
    
    
 var readingrocksongs = function() {
     
      var Song = StackMob.Model.extend({ schemaName: 'songs' });
  
      var q = new StackMob.Collection.Query();
      q.equals('songgenre', 'rock');
      
      var find = new Song();
      find.query(q, {
          success: function(model) {
              var songs = model.toJSON();
              $.each(songs, function(ix, song) {
                  $('#rocksongs').append('<div class="well"><h4>' + song.songname + ' - ' + song.groupname + '</h4><p> album: ' + song.album + '</p><p>' + song.songdescription +'</p><button type="button" class="btn" data-toggle="collapse" data-target="#'+ix+'"> Listen Now! </button> <div id="'+ix+'" class="collapse out">' + song.iframe + '</p></div></div>');
              });
          },
          error: function(model, response) {
              console.log(response);
          }
      });
  };
  
  
  
  var readingregsongs = function() {
     
      var Song = StackMob.Model.extend({ schemaName: 'songs' });
  
      var q = new StackMob.Collection.Query();
      q.equals('songgenre', 'reggae');
      
      var find = new Song();
      find.query(q, {
          success: function(model) {
              var songs = model.toJSON();
              $.each(songs, function(ix, song) {
                  $('#regsongs').append('<div class="well"><h4>' + song.songname + ' - ' + song.groupname + '</h4><p> album: ' + song.album + '</p><p>' + song.songdescription +'</p><button type="button" class="btn" data-toggle="collapse" data-target="#'+ix+'"> Listen Now! </button> <div id="'+ix+'" class="collapse out">' + song.iframe + '</p></div></div>');
              });
          },
          error: function(model, response) {
              console.log(response);
          }
      });
  };
  
  
  
   var readingelectronicsongs = function() {
     
      var Song = StackMob.Model.extend({ schemaName: 'songs' });
  
      var q = new StackMob.Collection.Query();
      q.equals('songgenre', 'electronic');
      
      var find = new Song();
      find.query(q, {
          success: function(model) {
              var songs = model.toJSON();
              $.each(songs, function(ix, song) {
                  $('#electronicsongs').append('<div class="well"><h4>' + song.songname + ' - ' + song.groupname + '</h4><p> album: ' + song.album + '</p><p>' + song.songdescription +'</p><button type="button" class="btn" data-toggle="collapse" data-target="#'+ix+'"> Listen Now! </button> <div id="'+ix+'" class="collapse out">' + song.iframe + '</p></div></div>');
              });
          },
          error: function(model, response) {
              console.log(response);
          }
      });
  };
    
//reading functions
    readingelectronicsongs()
    readingrocksongs();
    readingregsongs();
})();