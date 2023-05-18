var eventHandler = {
  handler: function(req, res) {
    console.log(
      '\n\n-------------------Event ----------------------------------------------'
    );
    console.log('Received at ' + new Date() + "\n");
    console.log(req.body);        
    res.status(200).send();
  }
};

module.exports = eventHandler;
