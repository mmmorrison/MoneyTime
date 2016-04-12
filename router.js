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

FlowRouter.route('/signin', {
    name: 'signin',
    action() {
        BlazeLayout.render('layout', {
            child: 'signin'
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

FlowRouter.route('/api', {
    name: 'api',
    action() {
        BlazeLayout.render('layout'), {
            child: 'api'
        }
    }
})