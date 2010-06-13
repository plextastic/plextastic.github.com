// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-16943685-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


// Flattr settings
var flattr_btn = 'compact';
var flattr_uid = '215';
var flattr_tle = 'the entry title';
var flattr_dsc = 'the entry description, please be as thorough as possible';
var flattr_cat = 'category';
var flattr_lng = 'language';
var flattr_tag = 'tag1, tag2, tag3';
var flattr_url = 'http://www.example.com';
var flattr_hide = 'true';

// Twitter feed
/*
getTwitters('tweet', {
	id: 'dsvensson',
	count: 4,
	enableLinks: true,
	ignoreReplies: true,
	clearContents: true,
	template: '"%text%" <a href="http://twitter.com/%user_screen_name%/statuses/%id%/">%time%</a>'
});
*/

// Photo Showcase Cycle
$('#showcase').cycle({
    fx: 'fade',
    speed:    1500,
    timeout:  7000
});
