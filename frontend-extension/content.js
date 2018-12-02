var $pageTop = $(".pagetop:first");
$pageTop.append(' | ');

var link = $('<a>')
	.attr({
		id: 'time-tab'
	})
link.text('timelapse: ');


var resetButton = $('<button>')
	.attr({
		id: 'reset-btn'
	});
resetButton.text('Reset Stories');


var slider = $('<input>')
	.attr({
		type: 'range',
		id: 'time-slider',
		step: '1',
		list: 'my-steps',
		min: '0',
		max: '24',
		value: 0
	});


var timeDisplay = $('<p>')
	.attr({
		id: 'time-info',
		style: 'display:inline'
	});
timeDisplay.text(' 0 hours ago');


$pageTop.append(link);
$pageTop.append(slider);
$pageTop.append(resetButton);
$pageTop.append(timeDisplay);

// dont remember what this was for...
// var $body = $('table table tbody')[0];
// var bodyTr = $('<tr>');
// $body.append(bodyTr);


var currentFrontPage = $('.itemList > tbody');


$('#time-slider').on('mousemove', function() {
	var sliderValue = $('#time-slider').val();
	$('#time-info').text(' '+sliderValue+' hours ago');
});

$('#time-slider').on('mouseup', function() {
	var sliderValue = $('#time-slider').val();
	// Re-attach front page if they put the counter back to 0
	if (sliderValue === 0) {
		$('#time-info').text(' '+sliderValue+' hours ago');
			$('.itemList > tbody').detach();
			currentFrontPage.appendTo('.itemList');
	} else if (sliderValue > 0 && sliderValue <= 24) {
		$('#time-info').text(' '+sliderValue+' hours ago');
		$('.itemList > tbody').detach();
			var timeQuery = createQueryString(sliderValue);
			var queryString = '?time='+timeQuery;

				chrome.runtime.sendMessage({
					method: 'GET',
					url: queryString
				}, function(response) {
					if (typeof response.status === 'undefined') {
						renderPastStories(response.time);
					} else {
						failedRequest();
					}
				});
	}
});


$('#reset-btn').on('click', function () {
	$('#time-slider').val(0);
	$('#time-info').text(' 0 hours ago');
	$('.itemList > tbody').remove();
	$('.itemList').append(currentFrontPage);

});

function createQueryString(hoursAgo) {
	var dateObj = new Date();

	hoursAgo = (typeof hoursAgo !== 'undefined') ?  hoursAgo : 0;

	var minutesRoundedTo = 15;
	var coefficent = 1000 * 60 * minutesRoundedTo;
	var roundedTime = new Date(Math.round(dateObj.getTime() / coefficent) * coefficent);

	roundedTime.setHours(roundedTime.getHours() - hoursAgo);

	return roundedTime;
}

function extractDomain(url) {
    var domain;
    // drop any http/https
    if(url === null) {
    	return "No domain name to extract";
    }
    if (url.indexOf("://") > -1) {
      domain = url.split('://')[1];
    }
    //and drop the www.
    if (url.indexOf("www.") > -1) {
    	domain = url.split('www.')[1];
    }
    //then drop any end paths
    domain = domain.split('/')[0];
    return domain;
}

function renderPastStories(data) {
	currentFrontPage.detach();
	for (var i = 0; i < data.length; i++) {
		var domain = extractDomain(data[i].url);

		var html =
  		"<tr class='athing' id='"+data[i].article_id+"'>"+
  		  "<td align='right' valign='top' class='title'><span class='rank'>"+(i+1)+".</span></td>"+
  		  "<td valign='top' class='votelinks'>"+
  		  	"<center>"+
  		  		"<a id='up_"+data[i].article_id+"' href='#'>"+
  		  			"<div class='votearrow' title='upvote'></div>"+
  		  		"</a>"+
  		  	"</center>"+
  		  "</td>"+
  		  "<td class='title'>"+
  		  	"<a href='"+data[i].url+"' class='storylink'>"+data[i].title+"</a>"+
  			  	"<span class='sitebit comhead'> ("+
  			  		"<a href='from?site="+domain+"'>"+
  			  			"<span class='sitestr'>"+domain+"</span>"+
  			  		"</a>)"+
  			  "</span>"+
  			"</td>"+
  		"</tr>"+
  		"<tr>"+
  			"<td colspan='2'></td>"+
  				"<td class='subtext'>"+
  		      "<span class='score' id='score_"+data[i].article_id+"'>points</span> by"+
  		      "<a href='item?id="+data[i].article_id+"' class='hnuser' target='_blank'> user </a>"+
  		      "<span class='age'>"+
  		      	"<a href='item?id="+data[i].article_id+"'>time</a>"+
  		      "</span>"+
  		      "<span id='unv_"+data[i].article_id+"'></span> | "+
  		      "<a href='item?id="+data[i].article_id+"' target='_blank'>flag</a> | "+
  		      "<a href='item?id="+data[i].article_id+"' target='_blank'>hide</a> | "+
  		      "<a href='item?id="+data[i].article_id+"' target='_blank'>comments</a>"+
  		  "</td>"+
  		"</tr>"+
  		"<tr class='spacer' style='height:5px'></tr>";
		$('.itemList').append(html);
	}
}

function failedRequest() {
	$('#time-slider').val(0);
	$('#time-info').text(' 0 hours ago');
	$('.itemList > tbody').remove();
	// currentFrontPage.append('.itemList');
	// console.log(currentFrontPage);
	$('.itemList').append(currentFrontPage);
	$('#time-tab').html("<a style='color:red'>Error retrieving extension data.</a>" );
}
