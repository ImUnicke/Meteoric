Meteor.startup(function () {
  //if (Channels.find().count() === 0) {
  if (Channels.find().count() === 0) {
    var timestamp = (new Date()).getTime();
    Channels.insert({name: "Testing", created: timestamp, description: "Just testing", security: "Public", password: null, userList: ["csob","ImUnicke"]});
    Channels.insert({name: "Testing2", created: timestamp, description: "Just testing", security: "Public", password: null, userList: ["phleep","breet"]});
    /*var tempchanneldata = [
                            {name: "Peanut Gallery",
                             contents: [
                               ["Description for the channel", "Public", null]
                             ]
                            },
                            {name: "Peanut Gallery 2",
                             contents: [
                               ["Description for the channel 2", "Private", "1234"]
                             ]
                            },
                            {name: "Peanut Gallery 3",
                             contents: [
                               ["Description for the channel 3", "Public", null]
                             ]
                            },
                          ];

    var timestamp = (new Date()).getTime();
    for (var i = 0; i < tempchanneldata.length; i++) {
      //var channel_name = Channels.insert({name: tempchanneldata[i].name});
        var info = tempchanneldata[i].contents[0];
        Channels.insert({name: tempchanneldata[i].name,
                         created: timestamp,
                         description: info[0],
                         security: info[1],
                         password: info[2]});
    }*/
}
});