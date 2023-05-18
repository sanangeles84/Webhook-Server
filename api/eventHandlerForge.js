var eventHandlerForge = {
  handler: function(req, res) {
    console.log(
      '\n\n----------------Forge Event ----------------------------------------------------------'
    );

    if(!req.body.payload || !req.body.payload.ext)
    {
      console.log(req.body);        
      res.status(200).send();
      return;
    }

    var res_Urn = req.body.payload.ext
      ? req.body.resourceUrn
      : req.body.resourceUrn + '_deleted';
    var verb = req.body.payload.ext ? 'created/updated' : 'deleted';
    var fileName = req.body.payload.ext
      ? req.body.payload.name
      : req.body.payload['custom-metadata'].file_name;

    console.log('Received at ' + new Date());
    console.log(`-----> file "${fileName}" ${verb} <-----`);
    console.log(req.body);
        
    res.status(200).send();
  }
};

module.exports = eventHandlerForge;
