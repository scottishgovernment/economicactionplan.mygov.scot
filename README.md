Scottish Government Github Repository
============================
 
Standards and guidelines web site

Usage instructions:

Clone the repository

install Jekyll

http://jekyllrb.com/docs/installation/


Create your posts in one of the following folders

* guidelines
* standard
* additional

Once posts are added

`git add --all`

`git commit -m "Enter a description of the posts you just added"`

`git pull`

`git push`


## Front matter requirements

There are some important pieces of front matter used to populate subcategory pages, breadcrumbs, and provide styling for the website. Those items are:

### `permalink`

Used to create the folder structure for the site and populate links to pages on category/subcategory pages.

Example values:

* `guidelines/team/team2/`
* `standard/information-security/`
* `glossary/`


### `type`

Determines the colour scheme the page should use. If not present, coloured elements (e.g. title borders) will display in a neutral colour.

Expected values: "guidelines" or "standard"

### `thispage`

Used to populate breadcumbs and for subcategory pages.

Simple ID for the current page. This should generally be a slug-style version of the page's title, e.g. a page with a `title` of "My Excellent Page" should have a `thispage` of "my-excellent-page".

### `parent`

Used to populate breadcumbs and for subcategory pages.

The `thispage` value of the current page's parent. This should be set to "home" for top-level pages.

### `headings`

Used to populate sidebar nav to sections of a document.

This should be a list of all of the H2-level headings in a document. Copy and paste them from the document content to avoid errors, and be aware that subsequently changing the headers in the document will require that this list also be updated.


## Style guide screenshots

Each example in the style guide is a separate HTML page that is typically included via an iFrame in the style guide. In print view, however, we want to show a static image of the examples. We have a [PhantomJS](http://phantomjs.org/) script that creates these images automatically for each example. If you install PhantomJS, you can recreate the images whenever desired with the following command. 


    $ phantomjs generate-example-screenshots.js

See the `generate-example-screenshots.js` script for configuration.


