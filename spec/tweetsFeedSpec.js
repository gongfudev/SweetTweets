describe("Public interface", function() {

  it("should be a namespace", function() {
    expect(SWTW).toBeDefined();
  });

  it("should have an update tweet function", function(){
    expect(SWTW.updateTweets).toBeDefined();
  });

  it("should have an url", function(){
    expect(SWTW.url).toBeDefined();
  });
});

describe("Tweets Loading", function() {

  it("should load tweets", function() {
      SWTW.updateTweets();
      expect(SWTW.tweets.length).toBeGreaterThan(0);
  });

  // TO DO
  it("should execute an ajax call", function() {
    spyOn(jQuery, 'ajax');
    SWTW.updateTweets();

    expect(true).toBeFalsy();
  });
});