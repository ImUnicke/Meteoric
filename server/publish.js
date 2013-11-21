// Channels -- {name: String}

// Channels -- {name: String,
//              description: String}
Meteor.publish('channels', function () {
  return Channels.find();
});

// Publish all items for requested current_channel_id.
Meteor.publish('channelUsers', function (current_channel_id) {
  check(current_channel_id, String);
  return Channels.find({_id: current_channel_id});
});

// Chat -- {text: String,
//          user: String,
//          time: Number}
Chat = new Meteor.Collection("chat");

// Publish all recent chat to all clients
Meteor.publish('chat', function() {
  // Return lines of Chat sorted by timestamp within the last 3 hours
  return Chat.find( { time: { $gt: ((new Date()).getTime() - (1000 * 60 * 60 * 3)) } }, {text: 1, _id: 0}).sort( {time:1} );
});