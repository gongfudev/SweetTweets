var SWTW = SWTW || {};

(function ($, exports){

  var url = "http://search.twitter.com/search.json?q=jsgeneve",
      tweets = [];

  function getTweets(){
    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function(data) {
        $.each(data.results, function(index, tweet) {
          tweets.push(render(tweet));
        });
        $(document).trigger('tweetsLoaded');
      },
      error: function () {
      }
    });
  };

  function render(tweet){

    return "<li><a href='#'><span>"+tweet.from_user+"</span>"+ parseURL(tweet.text) + "</a></li>";
  };

  function parseURL(tweetText) {
    var REGEXP = /https?\:\S+/g;
    var matches = tweetText.match(REGEXP);
    for (var index in matches) {
      var matchee = matches[index];
      tweetText = tweetText.replace(matchee, "<a href='" + matchee + "'>" + matchee + "</a>");
    }
    return tweetText;
  };

  exports.getTweets = getTweets;
  exports.url = url;
  exports.tweets = tweets


})(jQuery, SWTW);
