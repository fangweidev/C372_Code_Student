function index(req, res) {
  res.render('index', { session: req.session });
}

function adminDashboard(req, res) {
  res.render('adminDashboard', { session: req.session });
}

module.exports = { index, adminDashboard };
