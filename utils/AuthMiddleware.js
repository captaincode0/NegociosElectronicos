var auth_middleware = function(req, res, next){
	if(req.session.userlogged)
		next();
	else
		res.status.send("<h1>Access denied</h1>");
};

module.exports = auth_middleware;