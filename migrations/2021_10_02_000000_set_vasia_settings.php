<?php

use Flarum\Database\Migration;

$vasia_settings = [
    // use if should hide sidemenu on main page
    'button_3d_new' => 0,
    'sideNav_shadow' => 0,
    'buttons_votes_comments_views' => 0,
    'view_tags' => 0,
    'view_hero' => 0,
   
];

// save above settings on database in 'settings' table
return Migration::addSettings([
    'block-cat.vasia_settings' => json_encode($vasia_settings)
]);