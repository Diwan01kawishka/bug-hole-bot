function successfullMessage(msg) {
    return "✅ *BUG*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *BUG*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *BUG*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
