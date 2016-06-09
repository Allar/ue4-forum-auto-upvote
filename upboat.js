var ass = [];

// Simply push thread and post ids into 'ass' like so:
ass.push({threadid:98787,postid:463063});

// Generating a list of thread ids and post ids is up to you.
// I used Web Scraper while using the Mobile UE4 Forum theme (shows a button for each page)
// and a search result such as: https://forums.unrealengine.com/search.php?searchid=3147431


var returnCount = 0;

function forcevote(threadid, postid) {
$.ajax({
        type: "POST",
        url: "threadvote.php",
        data: "flag=1&threadid="+threadid+"&postid="+postid,
		success: function(res){
			returnCount += 1;
			console.log("Finished with vote request " + returnCount);
		}
	});
};

for (i = 0; i < ass.length; ++i)
{
	forcevote(ass[i].threadid, ass[i].postid);
}
	