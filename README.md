# toastit.js

An ultra-light, configurable HTML toast messages suitable for your webapp.

```npm install toastit.js```
```bower install toastit```

## Demo

<p data-height="268" data-theme-id="0" data-slug-hash="OVQewR" data-default-tab="result" data-user="belfz" class='codepen'>See the Pen <a href='http://codepen.io/belfz/pen/OVQewR/'>toast</a> by Marcin (<a href='http://codepen.io/belfz'>@belfz</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Compatibility

toastit.js is compatible with AMD (require.js), CommonJS (like browserify) and as a global script in html.

## Usage

To use toastit.js, wire in two files:
- dist/toastit.min.js
- dist/toastit.css

```toastit(text, timeout, options)``` is then available as a function.

## API

### ```toastit(text, timeout, options)```
- ```text``` - the text to display in the toast message.
- ```timeout``` - duration [ms] of the animated toast messages (this parameter is optional - it defaults to 3000ms).
- ```options``` - a hash (javascript object) with keys being css property names. Example: ```{fontSize: '18px'}```

## Building

The styles were written in LESS (```src/toastit.less```). There's a gulpfile in the project root which handles two tasks:
- LESS compilation to CSS followed by autoprefixer [last 2 versions]
- Minification of JS code

Built files are then put in ```dist``` directory.

## License
MIT
