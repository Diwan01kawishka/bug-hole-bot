function successfullMessage(msg) {
    return "β *BUG*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *BUG*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *BUG*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
