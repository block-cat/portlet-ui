<?php

/*
 * This file is part of block-cat/portlet-ui.
 *
 * Copyright (c) 2021 .
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace BlockCat\PortletUI;

use Flarum\Extend;
use s9e\TextFormatter\Configurator;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Settings())
        ->serializeToForum('block-cat.welcomeSettings', 'block-cat.welcome_settings')
        ->serializeToForum('block-cat.vasiaSettings', 'block-cat.vasia_settings'),
    (new Extend\Formatter)
        ->configure(function (Configurator $config) {
            $config->BBCodes->addCustom(
                '[pdf]{TEXT}[/pdf]',
                '<iframe src="" style="width:100%; height:500px;" class="iframe_pdf" frameborder="0">{TEXT}</iframe><span class="span_pdf">{TEXT}</span>'
            );
        })
];
