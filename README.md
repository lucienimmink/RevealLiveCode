# RevealLiveCode plugin

A plugin for [Reveal.js](https://github.com/hakimel/reveal.js) allowing to do live coding.

## Installation

Copy the files `editor.js` and/or `editor.esm.js` into the plugin folder of your reveal.js presentation, i.e. ```plugin/editor``` and load the plugin as shown below.

```html
<script type="module">
import Editor from './plugin/editor/editor.esm.js';

Reveal.initialize({
    ...,
    plugins: [ ..., Editor ]
});
</script>
```

## Usage

Both the HTML and markdown synthax is supported. Code highlighted using hljs can be clicked and that code becomes editable. The text output of the codeblock is copied (as HTML) into an element with the `data-edit` attribute in the same section.

```html
<pre><code>
<style>
  :root {
    --hw-color: orange;
  }
</style>
<hello-world type="amazing">Light DOM fallback</hello-world>
</code></pre>
<div data-edit>
<!-- repeat code or leave empty; this element will be populated when you change the code-->
</div>
```

## Compilation

If you want to change the source use `plugin.js` and add it to the build process of [Reveal.js](https://github.com/hakimel/reveal.js) by appending it to the `plugins` task:

```js
{ name: 'Editor', input: './plugin/editor/plugin.js', output: './plugin/editor/editor' },
```

## Examples

### Example: HTML

```html
<pre><code>
<style>
  :root {
    --hw-color: orange;
  }
</style>
<hello-world type="amazing">Light DOM fallback</hello-world>
</pre></code>
<div data-edit>
<!-- repeat code or leave empty; this element will be populated when you change the code-->
</div>
```

### Example: Markdown

````markdown
```html
<style>
  :root {
    --hw-color: orange;
  }
</style>
<hello-world type="amazing">Light DOM fallback</hello-world>
```

<div data-edit>
<style>
  :root {
    --hw-color: orange;
  }
</style>
<hello-world type="amazing">Light DOM fallback</hello-world>
</div>
````

## License

MIT licensed

Copyright (C) 2022 Lucien Immink, iO
