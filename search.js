function openRecommended() {    
    open("recommended.html");
    close("search.html");
}
function openFeed() {    
    open("feed.html");
    close("search.html");
}
function openChannels() {    
    open("channels.html");
    close("search.html");
}
function openChallenges() {    
    open("challenges.html");
    close("search.html");
}
function openMyAccount() {    
    open("myaccount.html");
    close("search.html");
}

var searchfor;
var newtext;
function searching() {
    searchfor = document.getElementById("searchinput").value;
    newtext = "Showing results for: "+searchfor+" . . . ";
    document.getElementById("searchresult").innerHTML = newtext;
    // check with database for match
    
    return 1;
}