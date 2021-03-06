<?php

use Flarum\Database\Migration;

$vasia_settings = [
    // use if should hide sidemenu on main page
    'button_3d_new' => 0,
    'sideNav_shadow' => 0,
    'buttons_votes_comments_views' => 0,
    'view_tags' => 1,
    'tags_bottom' => 1,
    'view_hero' => 0,
    'button_etichete' => 0,
    'button_etichete_in_header' => 1,
    'sidenav_fixed' => 1,
    'button_adauga_right' => 1,
    'remove_additional_space' => 1,
    'show_item_sort' => 1,
    'modify_item_sort' => 1,
    'add_input_hover_style' => 1,
    'display_pdf_files' => 1,
    'add_borders' => 1,
    'rankings_button_header' => 1,
    'author_bottom' => 1,
    'title_font_size' => "18",
    'item_excerpt_font_size' => "14",
    'item_excerpt_color' => "#000",
];

// save above settings on database in 'settings' table
return Migration::addSettings([
    'block-cat.vasia_settings' => json_encode($vasia_settings)
]);