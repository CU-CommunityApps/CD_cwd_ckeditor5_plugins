## INTRODUCTION

The cwd_ckeditor5_plugins module is a module that provides additional ckeditor5 plugin buttons to enhance the editors experience

- Plugins used to help with "div traps"
  - Insert at Begin: inserts a paragraph as the first element of the editor
  - Insert at End: inserts a paragraph as the first element of the editor
  - Insert after Element: inserts space after an element and after its parent most element (most similar to the ckeditor4 magic line)
- Plugins to add markup
  - Aside: adds aside tag element

## REQUIREMENTS

This module depends on the drupal core ckeditor5 module.

## INSTALLATION

Require via composer
```
composer require cubear/cwd_ckeditor5_plugins
```

Enable module via Drupal or drush
```
drush en cwd_ckeditor5_plugins
```

Clear site cache and configure ckeditor text formats to use the new buttons.

*** Note that if you are adding functionality that has a tag not supported but the allowed tags of ckeditor5 you will need to update you ckeditor5 configuration to allow these tags to be added to the content.

## MAINTAINERS

Current maintainers for Drupal 10:

- Bill Juda

## To Contribute

This module is meant to add additional plugins for use in ckeditor5 in order to contribute you make download the module repo from github, create a new branch, and develop a new plugin to add new functionality.

To generate a ckeditor5 plugin in this module run

```
drush generate ckeditor
```

Select cwd_ckeditor5_plugins as your module. Follow the rest of the prompts and drush will scaffold out the ckeditor5 plugin for you.

From here you can edit the javascript for your plugin in js/ckeditor5_plugins/src/YOU_NEW_PLUGIN

In order for your plugin to work you must be able to run the build process writing the cwd_ckeditor5_plugins module to do this run

```
npm run build
```

This will generate all the assets needed to create your plugin and allow you to add it to the ckeditor5 toolbar to use.
