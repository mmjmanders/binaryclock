import Clock from './app/scripts/components/clock.jsx';

const express = require('express'),
  app = express(),
  React = require('react'),
  ReactDOMServer = require('react-dom/server'),
  ClockComponent = React.createFactory(Clock);

app.set('view engine', 'html');
app.set('views', './dist');
app.engine('html', require('hbs').__express);
app.use('/styles', express.static('./dist/styles'));
app.use('/scripts', express.static('./dist/scripts'));

app.get('/', (req, res) => {
  res.render('index', {
    content: ReactDOMServer.renderToString(ClockComponent())
  });
});

app.listen(3000, () => {
  console.log('BinaryClock listening on port 3000...');
});
