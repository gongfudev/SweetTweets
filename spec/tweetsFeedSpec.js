describe("Public interface", function() {

  it("should be a namespace", function() {
    expect(SWTW).toBeDefined();
  });

  it("should have a get tweet function", function(){
    expect(SWTW.getTweets).toBeDefined();
  });

  it("should have an url", function(){
    expect(SWTW.url).toBeDefined();
  });
});

describe("Tweets Loading", function() {

  var TWEETS_SAMPLE = {"completed_in":0.143,"max_id":200620019514736641,"max_id_str":"200620019514736641","next_page":"?page=2&max_id=200620019514736641&q=blue%20angels&rpp=2","page":1,"query":"blue+angels","refresh_url":"?since_id=200620019514736641&q=blue%20angels","results":[{"created_at":"Thu, 10 May 2012 16:15:14 +0000","from_user":"VistaInnTN","from_user_id":120242411,"from_user_id_str":"120242411","from_user_name":"Melinda Y.","geo":null,"id":200620019514736641,"id_str":"200620019514736641","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/734708649\/vista_inn_and_suites250_normal.JPG","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/734708649\/vista_inn_and_suites250_normal.JPG","source":"&lt;a href=&quot;http:\/\/www.facebook.com\/twitter&quot; rel=&quot;nofollow&quot;&gt;Facebook&lt;\/a&gt;","text":"The Blue Angels are coming this weekend to Smyrna, TN for the Great Tennessee Air Show!  Get directions and view... http:\/\/t.co\/xkdF0qIr","to_user":null,"to_user_id":0,"to_user_id_str":"0","to_user_name":null},{"created_at":"Thu, 10 May 2012 16:09:56 +0000","from_user":"Jaquii_gonzalez","from_user_id":188932098,"from_user_id_str":"188932098","from_user_name":"Jaquii' Gonzalez","geo":null,"id":200618687160524801,"id_str":"200618687160524801","iso_language_code":"es","metadata":{"result_type":"recent"},"profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/1928018886\/image_normal.jpg","profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/1928018886\/image_normal.jpg","source":"&lt;a href=&quot;http:\/\/twitter.com\/#!\/download\/iphone&quot; rel=&quot;nofollow&quot;&gt;Twitter for iPhone&lt;\/a&gt;","text":"@lizgrangel comoo asii q el sabado se enfrentan las cardinals cntra las blue angels jaja","to_user":"lizgrangel","to_user_id":304125284,"to_user_id_str":"304125284","to_user_name":"liz gabriela "}],"results_per_page":2,"since_id":0,"since_id_str":"0"};
  var HTML_TWEET = "<li><a href='#'><span>VistaInnTN</span>The Blue Angels are coming this weekend to Smyrna, TN for the Great Tennessee Air Show!  Get directions and view... <a href='http:\/\/t.co\/xkdF0qIr'>http:\/\/t.co\/xkdF0qIr</a></a></li>";
  var EVENT_LISTENER = { callback: function(){} };

  beforeEach(function () {
    spyOn(jQuery, 'ajax');
    SWTW.getTweets();
  });

  it("should execute an ajax call and fill the tweet array", function() {
    expect(jQuery.ajax).toHaveBeenCalled();
    jQuery.ajax.mostRecentCall.args[0].success(TWEETS_SAMPLE);
    expect(SWTW.tweets.length).toEqual(2);
  });

  it("should render tweets as html", function() {
    jQuery.ajax.mostRecentCall.args[0].success(TWEETS_SAMPLE);
    expect(SWTW.tweets[0]).toEqual(HTML_TWEET);
  });

  it("should dispatch a tweet loaded event",function(){
    spyOn(EVENT_LISTENER, 'callback');
    $(document).on('tweetsLoaded', EVENT_LISTENER.callback);
    jQuery.ajax.mostRecentCall.args[0].success(TWEETS_SAMPLE);

    expect(EVENT_LISTENER.callback).toHaveBeenCalled();
  });
});