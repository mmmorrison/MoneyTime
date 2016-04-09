FlowRouter.route('/', {
  name: 'main',
  action(){
    BlazeLayout.render('layout', {child: 'main'});
  }
})

FlowRouter.route('/map', {
  name: 'map',
  action(){
    BlazeLayout.render('layout', {child: 'map'});
  }
})

FlowRouter.route('/major', {
  name: 'major',
  action(){
    BlazeLayout.render('layout', {child: 'major'});
  }
})

FlowRouter.route('/support', {
  name: 'support',
  action(){
    BlazeLayout.render('layout', {child: 'support'});
  }
})

FlowRouter.route('/about', {
  name: 'about',
  action(){
    BlazeLayout.render('layout', {child: 'about'})
  }
})
