---
layout: basic
backlink: /Cool_Resources
backlinktitle: Cool Resouces Page
---
On this page are the collection of resources I have used to create this website

## Main sources (meat & potatoes of the site per se)

* [Markdown](https://daringfireball.net/projects/markdown/) - official documentation
* [Kramdown](https://kramdown.gettalong.org/) - official documentation
* [KaTeX](https://katex.org/) - official site
	* Consider switching to [MathJax](https://kramdown.gettalong.org/math_engine/mathjax.html)
	* [MathJax](https://www.mathjax.org/) - official site
* [Jekyll](https://jekyllrb.com/) - official site
* [Eric Chapdelaine blog](https://ericchapdelaine.com/)
* Blog section is using the default [minima(gh repo)](https://github.com/jekyll/minima) jekyll theme

### Extra miscellaneous stuff

* [Adding markdown to linguist repo stats](https://joshuatz.com/posts/2019/how-to-get-github-to-recognize-a-pure-markdown-repo/)

---
## Kramdown tricks

* Adding html attributes to things (I stumbled accross this cos I wanted to left align an image)\
[Stack Overflow thread](https://stackoverflow.com/questions/23819197/jekyll-blog-post-centering-images)\
[Kramdown documentation about the matter for image](https://kramdown.gettalong.org/syntax.html#images)\
[Kramdown documentation about the matter in general](https://kramdown.gettalong.org/syntax.html#attribute-list-definitions)

---

## To consider adding:

* The following code snippet allows for all the links that lead to a site that isn't my local site to have `target="_blank"` as default.
I found it in [this](https://stackoverflow.com/questions/4425198/can-i-create-links-with-target-blank-in-markdown){:target="_blank"} stack overflow thread
```js
Array.from(javascript.links)
    .filter(link => link.hostname != window.location.hostname)
    .forEach(link => link.target = '_blank');
```

* [Hyderjack](https://hydejack.com/) - This is a jekyll theme that is payed ($39 lol) but you can get for free by looking at the source code of a site that uses it\
[Lazy Ren blog](https://github.com/LazyRen/LazyRen.github.io) - Blog that uses it\
*note*: lol the guy in the blog has customised the theme but hasn't bothered changing the titlepages and the favicon

---

## Thing I want to add on

### Big things
* Zettlekasten notes database
* Start blogging
* Projects area when I eventually start making them
	* This will then lead me to make a CV/resume page
* Checkout "To consider adding" section and see if anything can be integrated
	* Integrate search
	* Get some nicer css

### Small features
* File and Code line counter of this site on the main page
* Scollbar on toc if it is long
	* Style scrollbar
* Dynamic autoscrolling toc
* Copy how XahLee displays codeblocks
	* Add code highlighting

## Thing completed from the above list

1. Fix blog posts theme
