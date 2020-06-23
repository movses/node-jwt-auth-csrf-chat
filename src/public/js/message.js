function sendMessage() {
    const message = document.getElementById("message").value
    const csrf = document.getElementById("csrf").value
    $.ajax({
        type: "POST",
        url: '/api/v1/message/publish',
        data: { message: message, _csrf: csrf }
    })
}
