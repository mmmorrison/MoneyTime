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

FlowRouter.route('/events', {
    name: 'events',
    action() {
        BlazeLayout.render('layout', {
            child: 'events'
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

FlowRouter.route('/about', {
    name: 'about',
    action() {
        BlazeLayout.render('layout', {
            child: 'about'
        })
    }
})