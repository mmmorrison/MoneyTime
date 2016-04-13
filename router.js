// WebApp.connectHandlers.use(function(req, res, next) {
//     // add allow origin
//     res.setHeader('Access-Control-Allow-Origin', '*');
//
//     // add headers
//     res.setHeader('Access-Control-Allow-Headers', [
//         'Accept',
//         'Accept-Charset',
//         'Accept-Encoding',
//         'Accept-Language',
//         'Accept-Datetime',
//         'Authorization',
//         'Cache-Control',
//         'Connection',
//         'Cookie',
//         'Content-Length',
//         'Content-MD5',
//         'Content-Type',
//         'Date',
//         'User-Agent',
//         'X-Requested-With',
//         'Origin'
//     ].join(', '));
// });

FlowRouter.route('/', {
    name: 'main',
    action() {
        BlazeLayout.render('layout', {
            child: 'main'
        });
    }
});

FlowRouter.route('/map', {
    name: 'map',
    action() {
        BlazeLayout.render('layout', {
            child: 'map'
        });
    }
})

FlowRouter.route('/majorEvents', {
    name: 'majorEvents',
    action() {
        BlazeLayout.render('layout', {
            child: 'majorEvents'
        });
    }

});

FlowRouter.route('/contact', {
    name: 'contact',
    action() {
        BlazeLayout.render('layout', {
            child: 'contact'
        });
    }
});

FlowRouter.route('/register', {
    name: 'register',
    action() {
        BlazeLayout.render('layout', {
            child: 'resister'
        })
    }
});

FlowRouter.route('/users', {
    name: 'users',
    action() {
        BlazeLayout.render('layout', {
            child: 'users'
        })
    }
})