Meteor.startup(function() {
    process.env.MAIL_URL = "postmaster@sandbox173d719e405046fb87498ac436fa662d.mailgun.org:7dbd0627a944c5486c3dcbe29998691d@smtp.mailgun.org:578";
});

// Email.send({
//   to: "to.mariaIsTesting@gmail.com",
//   from: "from.address@email.com",
//   subject: "Example Email",
//   text: "The contents of our email in plain text."
// });
