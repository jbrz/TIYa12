let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=root+beer&includes=Images,Shop';

$.ajax({
  url: etsyURL,
  dataType: 'jsonp',
  method: 'get'
}).then(function (rootbeer) {
    var templateString = $('#itemTemplate').text();
    var renderTemplate = _.template(templateString); 
    _.each(rootbeer.results, function (item){
      console.log('item', item);
      var itemHTML = renderTemplate(item);
      $('.thumbnails').append(itemHTML);
    });

    $('.rootbeer').mouseover( '.icons', function (event){
      console.log(event);
      $(this).find('#heart').removeClass('hideheart').addClass('goheart');
      $(this).find('#hamburger').removeClass('hideham').addClass('goham');
    });

    $('.rootbeer').mouseout( '.icons', function (event){
      console.log(event);
      $(this).find('#heart').addClass('hideheart').removeClass('goheart');
      $(this).find('#hamburger').addClass('hideham').removeClass('goham');
    });

  });