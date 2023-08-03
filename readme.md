# Prerequisites

You will need the following installed on your system:

- [hugo](https://gohugo.io/installation/)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

# Cloning

In the command-line navigate to the themes folder in your hugo project. Create it if it doesn't already exist.

Once you're there type in the following:

`git clone https://github.com/gilluly-it-services/simple-business-hugo`

This should create a folder named simple-business-hugo.

# Setting it as your theme

In the default config.toml in the root of your hugo project, add the following line under the title line like below:

`theme = "simple-business-hugo"`

This should have set the theme of your site to this one you just downloaded.

# Adding logo and slogan parameters

These two parameters are for customizations such as site logo and slogan.

## Logo

Create or copy an image file in your hugo project's static dir, keep in mind that anything in the static folder will be at the root of the site. Once you get that in place, add the following under the params section in your project's config.toml.

```
[params]
logo = '/yourimage.jpg'
```

## Slogan

You can add a slogan which will show up in the header below the site title, by adding the slogan string in your project's config.toml.

```
[params]
slogan = 'Your slogan here'
```

# Adding pages in menu

You can add pages to the Main Menu by putting the following parameters in your frontmatter (Between the three dashed lines, like below. Leave others alone like title.):

```
---
title: "Page Title"
...
menu: "mainmenu"
weight: 1
---
```

The number of the weight can be customized. The higher the number something is, the further right it will be on the desktop-width site, and further down on the mobile nav menu.

# Customizing colors

Coming soon!