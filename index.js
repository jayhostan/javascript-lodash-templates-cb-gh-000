function postComment() {

    var commenter = document.getElementById("commenterName").value;
    var comment = document.getElementById("commentText").value;

    //template string
    var commentTemplate = document.getElementById("comment-template").innerHTML;

    //template function
    var templateFn = _.template(commentTemplate);

    var commentsDiv = document.getElementById("comments");

    var templateHTML = templateFn({
        'comment': comment,
        'commenter': commenter
    });

    commentsDiv.innerHTML += templateHTML;
}
