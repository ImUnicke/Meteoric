Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Meteor.subscribe("channels");
Session.set("current_channel", "TqABQtva7WHMtnGYZ");

Meteor.autorun(function() {
   Meteor.subscribe("channelUsers", Session.get("current_channel"));
});

Template.channelButton.channels = function () {
  return Channels.find({});
}

Template.userWindow.userQuery = function() {
  return Channels.find({}, {fields: {userList: 1}});
}

