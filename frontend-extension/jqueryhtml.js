// top tr
var firstTr = $('<tr>')
	.attr({
		class: 'athing',
		id: data[i].article_id
	});

var firstTd = $('<td>')
	.attr({
		align: 'right',
		valign: 'top',
		class: 'title'
	});
var rankSpan = $('<span>')
	.attr({
		class: 'rank'
	});
rankSpan.text(i+1);

var votelinksTd = $('<td>')
	.attr({
		valign: 'top',
		class: 'votelinks'
	});

var center = $('<center>');

var upvoteA = $('<a>')
	.attr({
		id: 'up_'+data[i].article_id,
		href: '#'
	});

var votearrowDiv = $('<div>')
	.attr({
		class: 'votearrow',
		title: 'upvote'
	});

var secondTd = $('<td>')
	.attr({
		class: 'title'
	});

var storlinkA = $('<a>')
	.attr({
		href: data[i].url,
		class: 'storyLink'
	});
storlinkA.text(data[i].title);

var sitebitSpan = $('<span>')
	.attr({
		class: 'sitebit comhead'
	});

var domainA = $('<a>');
	.attr({
		href: 'from?site='+domain
	});
domainA.text(data[i].title);

var sitestrSpan = $('<tr>')
	.attr({
		class: 'sitestr'
	});
span.text(domain);

firstTr.append(firstTd);
firstTd.append(rankSpan);
firstTd.append(votelinksTd);
votelinksTd.append(center);


firstTr.append()

firstTr.append(
  $('<div/>', {'class': 'wrapper'}).append(
    $('<div/>', {'class': 'inner'}).append(
       $('<span/>', {text: 'Some text'})
    )
  )
  .append(
    $('<div/>', {'class': 'inner'}).append(
       $('<span/>', {text: 'Other text'})
    )
  )
);



var secondTr = $('<tr>');

var colspanTd = $('<td>')
	.attr({
		colspan: '2',
	});

var subtextTd = $('<td>')
	.attr({
		class: 'subtext',
	});

var scoreSpan = $('<span>')
	.attr({
		class: 'score',
		id: 'score_'+data[i].article_id
	});

var userA = $('<a>')
	.attr({
		href: 'item?id='+data[i].article_id
		clas: 'hnuser',
		target: '_blank'
	});
userA.text('user');

var ageSpan = $('<span>')
	.attr({
		class: 'age',
	});

var timeA = $('<a>')
	.attr({
		href: 'item?id='+data[i].article_id
		class: 'hnuser',
		target: '_blank'
	});
timeA.text('time');

var unvSpan = $('<span>')
	.attr({
		id: 'unv_'+data[i]..article_id
	});

var flagA = $('<a>')
	.attr({
		href: 'item?id='+data[i].article_id
		target: '_blank'
	});
flagA.text('flag');

var hideA = $('<a>')
	.attr({
		href: 'item?id='+data[i].article_id
		target: '_blank'
	});
a.text('hide');

var commentsA = $('<a>')
	.attr({
		href: 'item?id='+data[i].article_id
		target: '_blank'
	});
commentsA.text('comments');


ageSpan.append(timeA);

subtextTd.append(scoreSpan);
subtextTd.append(' by');
subtextTd.append(userA);
subtextTd.append(ageSpan);
subtextTd.append(unvSpan);
subtextTd.append(' | ');
subtextTd.append(flagA);
subtextTd.append(hideA);
subtextTd.append(commentsA);

secondTr.append(colspanTd);
secondTr.append(subtextTd);

firstTr.after(secondTr);

var html = firstTr;



// top tr
// var firstTr = $('<tr>')
// 	.attr({
// 		class: 'athing',
// 		id: data[i].article_id
// 	});
// var td = $('<td>')
// 	.attr({
// 		align: 'right',
// 		valign: 'top',
// 		class: 'title'
// 	});
// var span = $('<span>')
// 	.attr({
// 		class: 'rank'
// 	});
// span.text(i+1);

// var td = $('<td>')
// 	.attr({
// 		valign: 'top',
// 		class: 'votelinks'
// 	});

// var center = $('<center>')
// 	.attr({

// 	});
// var a = $('<a>')
// 	.attr({
// 		id: 'up_'+data[i].article_id,
// 		href: '#'
// 	});
// var div = $('<div>')
// 	.attr({
// 		class: 'votearrow',
// 		title: 'upvote'
// 	});

// var td = $('<td>')
// 	.attr({
// 		class: 'title'
// 	});
// var a = $('<a>')
// 	.attr({
// 		href: data[i].url,
// 		class: 'storyLink'
// 	});
// a.text(data[i].title);

// var span = $('<span>')
// 	.attr({
// 		class: 'sitebit comhead'
// 	});

// var a = $('<a>');
// 	.attr({
// 		href: 'from?site='+domain
// 	})
// var span = $('<tr>')
// 	.attr({
// 		class: 'sitestr'
// 	});
// span.text(domain);

// var secondTr = $('<tr>');

// var colspanTd = $('<td>')
// 	.attr({
// 		colspan: '2',
// 	});

// var subtextTd = $('<td>')
// 	.attr({
// 		class: 'subtext',
// 	});

// var scoreSpan = $('<span>')
// 	.attr({
// 		class: 'score',
// 		id: 'score_'+data[i].article_id
// 	});

// var userA = $('<a>')
// 	.attr({
// 		href: 'item?id='+data[i].article_id
// 		clas: 'hnuser',
// 		target: '_blank'
// 	});
// userA.text('user');

// var ageSpan = $('<span>')
// 	.attr({
// 		class: 'age',
// 	});

// var timeA = $('<a>')
// 	.attr({
// 		href: 'item?id='+data[i].article_id
// 		class: 'hnuser',
// 		target: '_blank'
// 	});
// timeA.text('time');

// var unvSpan = $('<span>')
// 	.attr({
// 		id: 'unv_'+data[i]..article_id
// 	});

// var flagA = $('<a>')
// 	.attr({
// 		href: 'item?id='+data[i].article_id
// 		target: '_blank'
// 	});
// flagA.text('flag');

// var hideA = $('<a>')
// 	.attr({
// 		href: 'item?id='+data[i].article_id
// 		target: '_blank'
// 	});
// a.text('hide');

// var commentsA = $('<a>')
// 	.attr({
// 		href: 'item?id='+data[i].article_id
// 		target: '_blank'
// 	});
// commentsA.text('comments');

// secondTr.append(colspanTd);
// var html = firstTr;
// html.append(secondTr);