$(document).ready(function() {
  $.getJSON('http://reddit.com/hot.json?jsonp=?', function(data) {
    //a = perttyprint(data)
    $(".prettyprint").append(prettyPrint(data.data))

    console.log(data.data)

    out = ""
    $.each(data.data.children, function(i, iter) {
      //console.log(data.data[i])
      ///*
      post = iter.data
      //post = data[i]['data']
      out += "<hr>" + post.score + ": "
      out += "<a href='" + post.url + "'>" + post.title + "</a> "
      out += "<small>" + post.subreddit + "</small>"
      out += "<br>" + post.author
      //*/
    })

    $(".output").append(out)
  })
});