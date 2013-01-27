$(document).ready(function() {
  $("h1").click(function(event) {
    $(".upgoerfive").hide()
    $(".reader").show()
  })

  $.getJSON('http://reddit.com/hot.json?jsonp=?', function(data) {
    //$(".prettyprint").append(prettyPrint(data.data))

    console.log(data.data)

    out = ""
    $.each(data.data.children, function(i, iter) {
      
      ///*
      post = iter.data
      //post = data[i]['data']
      out += "<hr>" + post.score + ": "
      out += "<a href='" + post.url + "'>" + post.title + "</a> "
      out += "<small>" + post.subreddit + "</small>"
      out += "<br>" + post.author
      //*/
    })

    $(".reader").append(out)

    $("a").click(function(event) {
      event.preventDefault()

      console.log(event)
      //alert(event.currentTarget.href)

      $(".upgoerfive").attr("src", event.currentTarget.href)
      $(".reader").hide()
      $(".upgoerfive").show()

      //makeTitleGoBack()
    })
  })
});
