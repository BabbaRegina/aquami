require('./config')

const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const ObjectID = mongodb.ObjectID

const EVENTS_COLLECTION = 'events'

const app = express()
app.use(bodyParser.json())

const distDir = __dirname.concat('/dist/')
app.use(express.static(distDir))

let db

mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err)
    process.exit(1)
  }

  db = database
  console.log('Database connection ready')

  const server = app.listen(process.env.PORT || 8080, function () {
    const port = server.address().port
    console.log('App now running on port', port)
  })
})

// CONTACTS API ROUTES BELOW

function handleError (res, reason, message, code) {
  console.log('ERROR: ' + reason)
  res.status(code || 500).json({ 'error': message })
}

/*  '/api/contacts'
 *    GET: finds all events
 *    POST: creates a new event
 */

app.get('/api/events', function (req, res) {
  db.collection(EVENTS_COLLECTION).find({}).sort( { dataMisura: -1 } ).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, 'Failed to get events.')
    } else {
      res.status(200).json(docs)
    }
  })
})

app.post('/api/events', function (req, res) {
  const newEvent = req.body
   db.collection(EVENTS_COLLECTION).insertOne(newEvent, function(err, doc) {
    if (err) {
      handleError(res, err.message, 'Failed to create new event.')
    } else {
      res.status(201).json(doc.ops[0])
    }
  })
})

/*  '/api/events/:id'
 *    GET: find event by id
 *    PUT: update event by id
 *    DELETE: deletes event by id
 */

app.get('/api/events/:id', function(req, res) {
  db.collection(EVENTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, 'Failed to get event')
    } else {
      res.status(200).json(doc)
    }
  })
})

app.put('/api/events/:id', function(req, res) {
  const updateDoc = req.body
  delete updateDoc._id

  db.collection(EVENTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, 'Failed to update event')
    } else {
      updateDoc._id = req.params.id
      res.status(200).json(updateDoc)
    }
  })
})

app.delete('/api/events/:id', function(req, res) {
  db.collection(EVENTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, 'Failed to delete event')
    } else {
      res.status(200).json(req.params.id)
    }
  })
})

