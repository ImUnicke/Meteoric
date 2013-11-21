// Channels -- {name: String}

// Channels -- {name: String,
//              description: String}
Meteor.publish('channels', function () {
  return Channels.find();
});

// ChannelUsers -- {text: String,
//           role: String,
//           current_channel_id: String}
// Publish all items for requested current_channel_id.
Meteor.publish('channelUsers', function () {
  //check(current_channel_id, String);
  return ChannelUsers.find({current_channel_id: "PeanutGallery"});
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