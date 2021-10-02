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
        ->serializeToForum('block-cat.defaultSettings', 'block-cat.default_settings')
        ->serializeToForum('block-cat.vasiaSettings', 'block-cat.vasia_settings')
        ->serializeToForum('block-cat.defaultRoutes', 'block-cat.default_routes'),
    (new Extend\Formatter)
        ->configure(function (Configurator $config) {
            $config->BBCodes->addFromRepository('ACRONYM');
            $config->BBCodes->addFromRepository('ALIGN');
            $config->BBCodes->addFromRepository('B');
            $config->BBCodes->addFromRepository('BACKGROUND');
            $config->BBCodes->addFromRepository('C');
            $config->BBCodes->addFromRepository('CENTER');
            $config->BBCodes->addFromRepository('CODE');
            $config->BBCodes->addFromRepository('COLOR');
            $config->BBCodes->addFromRepository('DD');
            $config->BBCodes->addFromRepository('DEL');
            $config->BBCodes->addFromRepository('DL');
            $config->BBCodes->addFromRepository('DT');
            $config->BBCodes->addFromRepository('EM');
            $config->BBCodes->addFromRepository('EMAIL');
            $config->BBCodes->addFromRepository('FLASH');
            $config->BBCodes->addFromRepository('FLOAT');
            $config->BBCodes->addFromRepository('FONT');
            $config->BBCodes->addFromRepository('H1');
            $config->BBCodes->addFromRepository('H2');
            $config->BBCodes->addFromRepository('H3');
            $config->BBCodes->addFromRepository('H4');
            $config->BBCodes->addFromRepository('H5');
            $config->BBCodes->addFromRepository('H6');
            $config->BBCodes->addFromRepository('HR');
            $config->BBCodes->addFromRepository('I');
            $config->BBCodes->addFromRepository('IMG');
            $config->BBCodes->addFromRepository('INS');
            $config->BBCodes->addFromRepository('JUSTIFY');
            $config->BBCodes->addFromRepository('LEFT');
            $config->BBCodes->addFromRepository('LIST');
            $config->BBCodes->addFromRepository('*');
            $config->BBCodes->addFromRepository('MAGNET');
            $config->BBCodes->addFromRepository('NOPARSE');
            $config->BBCodes->addFromRepository('OL');
            $config->BBCodes->addFromRepository('QUOTE');
            $config->BBCodes->addFromRepository('RIGHT');
            $config->BBCodes->addFromRepository('S');
            $config->BBCodes->addFromRepository('SIZE');
            $config->BBCodes->addFromRepository('SPOILER');
            $config->BBCodes->addFromRepository('STRONG');
            $config->BBCodes->addFromRepository('SUB');
            $config->BBCodes->addFromRepository('SUP');
            $config->BBCodes->addFromRepository('TABLE');
            $config->BBCodes->addFromRepository('TBODY');
            $config->BBCodes->addFromRepository('TD');
            $config->BBCodes->addFromRepository('TH');
            $config->BBCodes->addFromRepository('THEAD');
            $config->BBCodes->addFromRepository('TR');
            $config->BBCodes->addFromRepository('U');
            $config->BBCodes->addFromRepository('UL');
            $config->BBCodes->addFromRepository('URL');
            $config->BBCodes->addFromRepository('VAR');
        })
];
