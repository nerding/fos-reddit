$(document).ready(function() {
  $(".reader").css('margin-top', $(".top").outerHeight())

  $(".top h1").click(function(event) {
    $(".upgoerfive").hide()
    $(".upgoerfive").attr("src", "about:blank")
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
      out += "<div class='post' id='post-" + i + "' show='false'><hr>" + post.score + ": "
      out += "<a id='" + i + "' href='" + post.url + "'>" + post.title + "</a> "
      out += "<br><small>/r/" + post.subreddit + "</small> "
      out += post.author + "<br>"
      out += "</div>"
      //*/
    })

    $(".reader").append(out)

    $("a").click(function(event) {
      event.preventDefault()

      console.log(event)
      //alert(event.currentTarget.href)

      /*$(".upgoerfive").attr("src", event.currentTarget.href)
      $(".reader").hide()
      $(".upgoerfive").show()*/

      link = event.currentTarget
      //console.log((".post-" + link.id))
      if ($("#post-" + link.id).attr("show") === "false") {
        $("#post-" + link.id).append("<iframe src='" + link.href + "' id='frame-" + link.id + "'/>")
        $("#frame-" + link.id).css("height", $(window).height() - $(".top").outerHeight())
        $("#post-" + link.id).attr("show", "true")
      }
      else {
        $("#frame-" + link.id).remove();
        $("#post-" + link.id).attr("show", "false")
      }

    })
  })
});
