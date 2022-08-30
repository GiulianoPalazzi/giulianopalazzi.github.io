---
layout: basic
backlink: ./cool_resources.html
backlinktitle: Cool Resouces Page
---
On this page are the collection of resources I have used to create this page

## Main sources (meat & potatoes of the site per se)

* Jekyll
* Eric chap blog

---
### Links

* [https://joshuatz.com/posts/2019/how-to-get-github-to-recognize-a-pure-markdown-repo/](https://joshuatz.com/posts/2019/how-to-get-github-to-recognize-a-pure-markdown-repo/) adding markdown to repo stats

---

## To consider adding:

The following code snippet allows for all the links that lead to a site that isn't my local site to have `target="_blank"` as default.

I found it in [this](https://stackoverflow.com/questions/4425198/can-i-create-links-with-target-blank-in-markdown){:target="_blank"} stack overflow thread

```js
Array.from(javascript.links)
    .filter(link => link.hostname != window.location.hostname)
    .forEach(link => link.target = '_blank');
```
---

## Thing I want to add on

* Zettlekasten notes database
* Fix blog posts area
* Start blogging
* Projects area when I eventually start making them
	* this will then lead me to make a CV/resume page
