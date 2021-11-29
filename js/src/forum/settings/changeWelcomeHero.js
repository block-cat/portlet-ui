export default function () {
    // get all used Flarum routes
    const routes = app.routes;
    // get all routes defined in admin page
    const routesCustom = JSON.parse(app.data.resources[0].attributes["block-cat.defaultRoutes"]);
    
    // map all keys from Flarum routes
    Object.keys(routes).map((key) => {
        // check if key is specified in admin page
        if (routesCustom.hasOwnProperty(key)) {
            // check if key from admin page has value
            if (routesCustom[key].path !== "") {
                // set new path for specific key
                app.routes[key].path = routesCustom[key].path;
            }
        }
    });
};
