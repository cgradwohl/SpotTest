$(function() {

    $.ajax({
        type: 'GET',
        url: 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'
        success: function(data){
            console.log('success!', data);
        }

    });
});
