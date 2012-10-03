var flickr = require( './flickr' )
  , JSONStream = require( 'JSONStream' )

function Panda( apiKey ) {
  if ( !apiKey || typeof apiKey !== 'string' )
    throw new Error( 'must provide a valid Flickr API key' )
  this.apiKey = apiKey
}

Panda.prototype = {

  getList: function(){
    var jsonStream = JSONStream.parse( [ 'pandas', true, true, "_content" ] )
    var flickrStream = flickr.request( 'flickr.panda.getList', {
      api_key: this.apiKey
    }, jsonStream )
    return jsonStream
  }
}

module.exports = Panda
