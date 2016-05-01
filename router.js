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
FlowRouter.route('/about', {
    name: 'about',
    action() {
        BlazeLayout.render('layout', {
            child: 'about'
        })
    }
})
FlowRouter.route('/soon', {
    name: 'soon',
    action() {
        BlazeLayout.render('layout', {
            child: 'soon'
        })
    }
})
