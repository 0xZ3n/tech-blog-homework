const path = require('path');

//helps with the creation of the templates
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
