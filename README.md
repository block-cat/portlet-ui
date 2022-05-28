# Portlet UI

Aceasta este o extensie de portlet care oferă posibilitatea de a modifica reprezentarea vizuală (UI) a portletului din panoul de administrare. Aceasta permite adăugarea de elemente noi, dar și dezactivarea unor elemente precum ordonarea articoleleor, butonul de refresh, cronologia articolului etc.

## Compatibilitate

Această extensie este compatibilă cu versiunea `1.2.1` de [Flarum](https://flarum.org/).

## Instalare

Pentru instalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer require block-cat/portlet-ui *@dev
```

## Actualizare

Pentru actualizarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer update block-cat/portlet-ui
php flarum migrate
php flarum cache:clear
```

## Dezinstalare

Pentru dezinstalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer remove block-cat/portlet-ui
php flarum cache:clear
```

## Link-uri utile

- [Cod sursă pe GitHub](https://github.com/block-cat/portlet-ui)
- [Changelog](CHANGELOG.md)

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/block-cat/portlet-ui.svg)](https://packagist.org/packages/block-cat/portlet-ui)

**Extensia nu este publicată pe [Packagist](https://packagist.org/)!**
