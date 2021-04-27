use zoo;


const id = ObjectId('608747e651f029439899333b');
db.animals.findOne({ _id: id });

db.animals.updateOne( 
    { _id: ObjectId('608747e651f029439899333b') },
    { $set: { name: "Knurek" } }
  );