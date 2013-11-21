Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Meteor.subscribe("channels");
Meteor.subscribe("channelUsers");

Template.channelButton.channels = function () {
  return Channels.find({});
}

Template.userWindow.channelUsers = function () {
  return ChannelUsers.find({});
}