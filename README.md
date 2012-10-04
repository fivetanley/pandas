Pandas
====
Streaming API for Flickr's [Panda API][pandas-api]

## Usage

### Panda( apiKey )

You'll need to register an API key with flickr. This is *not* your secret key.

Usage:

```
var Panda = require( 'pandas' )
  , panda = new Panda( 'myApiKey' )
```

### getList()

Returns a `ReadableStream` that emits a data event for every panda name.

Usage:

```
var pandaNameStream = pandas.getList()
pandaNameStream.on( 'data', function( data ) {
  console.log( data )
})

```

### getPhotos( pandaName )

Returns a `ReadableStream` that emits a `data` event for every photo the panda
 tells us about

```
var pandaPhotoStream = pandas.getPhoto( 'example panda' )
pandaPhotoStream.on( 'data', function( photo ) {
  //if the panda has 10 photos, this will be called 10 times
  console.log( JSON.stringify( photo ) )
})
```

[pandas-api]:http://code.flickr.com/blog/2009/03/03/panda-tuesday-the-history-of-the-panda-new-apis-explore-and-you/
