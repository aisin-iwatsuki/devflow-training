class MessageHandler {
  validateMessage(data) {
    if (!data.username || !data.message) {  // usernameがない場合の条件分岐の追加
      return false;
    }
    return data.username.trim().length > 0 && data.message.trim().length > 0;  // usernameのtrim処理の追加
  }

  formatMessage(data) {
    return {
      message: data.message.trim(),
      timestamp: new Date().toISOString()
    };
  }
}

module.exports = new MessageHandler();