$(document).ready(function() {
  $("#quote").on("click", getQuote);
  ! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = p + '://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);
    }
  }(document, 'script', 'twitter-wjs');
  getQuote();
});

function getQuote() {
    
  var quote = newQuote();
  $("#message").html(quote.quote);
  $("#author").html(quote.author);
  
  $('.tweet-button iframe').remove();
  // Generate new markup
  var tweetButton = $('<a></a>')
    .addClass('twitter-hashtag-button')
    .attr('href', 'https://twitter.com/intent/tweet?button_hashtag=freecodecamp')
    .attr('data-size', "large")
    .attr('data-text', quote.quote);
          
  $('.tweet-button').append(tweetButton);
  
  twttr.widgets.load();

}

function newQuote() {
  var index = currentIndex;
  while (index == currentIndex) {
    index = Math.floor(Math.random() * Quotes.length);
  }
  
  currentIndex = index;
  return Quotes[index];
}

var currentIndex = -1;

var Quotes = [
  {
    quote: '"Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer."',
    author: "Coluche"
  },
  {
    quote: '"Le monde est dangereux à vivre ! Non pas tant à cause de ceux qui font le mal, mais à cause de ceux qui regardent et laissent faire."',
    author: "Albert Einstein"
  },
  {
    quote: '"On passe une moitié de sa vie à attendre ceux qu\'on aimera et l\'autre moitié à quitter ceux qu\'on aime."',
    author: "Victor Hugo"
  },
  {
    quote: '"La différence qu\'il y a entre les oiseaux et les hommes politiques, c\'est que de temps en temps les oiseaux s\'arrêtent de voler !"',
    author: "Coluche"
  },
  {
    quote: '"Il paraît que la crise rend les riches plus riches et les pauvres plus pauvres. Je ne vois pas en quoi c\'est une crise. Depuis que je suis petit, c\'est comme ça."',
    author: "Coluche"
  },
  {
    quote: '"Mesdames, un conseil. Si vous cherchez un homme beau, riche et intelligent... prenez-en trois !"',
    author: "Coluche"
  }
];
