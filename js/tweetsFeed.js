var SWTW = SWTW || {};

(function ($, exports){

  var url = "http://search.twitter.com/search.json?q=blue%20angels&rpp=5",
      tweets = [];

  function getTweets(){
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data) {
        $.each(data.results, function(index, tweet) {
          tweets.push(render(tweet));
        });
      },
      error: function () {
      }
    })
  };

  function render(tweet){
    return "<li><span>"+tweet.from_user+"</span>"+tweet.text+"</li>";
  };
  exports.getTweets = getTweets;
  exports.url = url;
  exports.tweets = tweets


})(jQuery, SWTW);
