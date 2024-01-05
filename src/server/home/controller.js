const homeController = {
  handler: (request, h) => {
    return h.view('home/index', {
      pageTitle: 'Journey Test',
      heading: 'Journey Test'
    })
  }
}

export { homeController }
