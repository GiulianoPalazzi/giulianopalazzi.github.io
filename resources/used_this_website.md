---
layout: basic
backlink: /Cool_Resources
backlinktitle: Cool Resouces Page
---
On this page are the collection of resources I have used to create this website

## Main sources (meat & potatoes of the site per se)

* [Markdown](https://daringfireball.net/projects/markdown/){: target="_blank"} - official documentation
* [Kramdown](https://kramdown.gettalong.org/){: target="_blank"} - official documentation
* [KaTeX](https://katex.org/){: target="_blank"} - official site
	* Consider switching to [MathJax](https://kramdown.gettalong.org/math_engine/mathjax.html){: target="_blank"}
	* [MathJax](https://www.mathjax.org/){: target="_blank"} - official site
* [Jekyll](https://jekyllrb.com/){: target="_blank"} - official site
* [Eric Chapdelaine blog](https://ericchapdelaine.com/){: target="_blank"}
* Blog section is using the default [minima(gh repo)](https://github.com/jekyll/minima){: target="_blank"} jekyll theme
* TOC written in Liquid so can be used with `include` command in a layout [github repo](https://github.com/allejo/jekyll-toc){: target="_blank"}. (Is in my `_includes` file but isn't in use yet)
* Pure Kramdown TOC [Stack Overflow](https://stackoverflow.com/questions/38417624/table-of-contents-using-jekyll-and-kramdown){: target="_blank"}, [Official Kramdown documentation](https://kramdown.gettalong.org/converter/html.html#toc){: target="_blank"}.

### Extra miscellaneous stuff

* [Adding markdown to linguist repo stats](https://joshuatz.com/posts/2019/how-to-get-github-to-recognize-a-pure-markdown-repo/){: target="_blank"}

---
## Kramdown tricks

* Adding html attributes to things (I stumbled accross this cos I wanted to left align an image)\
[Stack Overflow thread](https://stackoverflow.com/questions/23819197/jekyll-blog-post-centering-images){: target="_blank"}\
[Kramdown documentation about the matter for image](https://kramdown.gettalong.org/syntax.html#images){: target="_blank"}\
[Kramdown documentation about the matter in general](https://kramdown.gettalong.org/syntax.html#attribute-list-definitions){: target="_blank"}
* [Markdown/Kramdown tips and tricks page](https://about.gitlab.com/blog/2016/07/19/markdown-kramdown-tips-and-tricks/){: target="_blank"}

---

## To consider adding:

* The following code snippet allows for all the links that lead to a site that isn't my local site to have `target="_blank"` as default.
I found it in [this](https://stackoverflow.com/questions/4425198/can-i-create-links-with-target-blank-in-markdown){:target="_blank"} stack overflow thread
```js
Array.from(javascript.links)
    .filter(link => link.hostname != window.location.hostname)
    .forEach(link => link.target = '_blank');
```

* [Hyderjack](https://hydejack.com/){: target="_blank"} - This is a jekyll theme that is payed ($39 lol) but you can get for free by looking at the source code of a site that uses it\
[Lazy Ren blog](https://github.com/LazyRen/LazyRen.github.io){: target="_blank"} - Blog that uses it\
*note*: lol the guy in the blog has customised the theme but hasn't bothered changing the titlepages and the favicon
* Checkout the following pages for dynamic TOCs:
	* [https://ouyi.github.io/post/2017/12/31/jekyll-table-of-contents.html](https://ouyi.github.io/post/2017/12/31/jekyll-table-of-contents.html){:target="_blank"}
	* [https://webdevtrick.com/dynamic-table-of-contents/](https://webdevtrick.com/dynamic-table-of-contents/){:target="_blank"}
	* [https://craig-creeger.github.io/javascript/table-of-contents.html](https://craig-creeger.github.io/javascript/table-of-contents.html){:target="_blank"}
	* [http://www.whitsoftdev.com/articles/toc.html](http://www.whitsoftdev.com/articles/toc.html){:target="_blank"}
	* [https://inspiredwebdev.com/create-dynamic-sticky-table-of-contents/](https://inspiredwebdev.com/create-dynamic-sticky-table-of-contents/){:target="_blank"}
	* [https://docraptor.com/documentation/article/1068722-code-example-dynamic-table-of-contents](https://docraptor.com/documentation/article/1068722-code-example-dynamic-table-of-contents){:target="_blank"}
* Checkout the following pages for writting books:
	* [https://github.com/MichaelCurrin/jekyll-gh-actions-quickstart](https://github.com/MichaelCurrin/jekyll-gh-actions-quickstart){:target="_blank"}
	* [https://github.com/MichaelCurrin/mdbook-quickstart](https://github.com/MichaelCurrin/mdbook-quickstart){:target="_blank"}

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
* Dynamic autoscrolling toc
* Copy how XahLee displays codeblocks
	* Add code highlighting
* Create coyote 404 page

## Thing completed from the above list

1. Fix blog posts theme
1. Scollbar on toc if it is long
	1. Style scrollbar
