FlowRouter.route('/', {
    name: 'main',
    action() {
        BlazeLayout.render('layout', {
            child: 'main'
        });
    }
})

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
})

FlowRouter.route('/support', {
    name: 'support',
    action() {
        BlazeLayout.render('layout', {
            child: 'support'
        });
    }
})

FlowRouter.route('/signin', {
    name: 'signin',
    action() {
        BlazeLayout.render('layout', {
            child: 'signin'
        })
    }
})