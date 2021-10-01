<?php

use Flarum\Database\Migration;

$settings = [
    // use for icon name for 'allDiscussions'
    'allDiscussionsIcon' => "",
    // use if should hide sidemenu on main page
    'mainPageMenu' => 0,
    // use if should hide 'toolbar' on main page
    'toolbar' => 0,
    // use if should hide 'refresh' button on main page
    'refreshButton' => 0,
    // use if should hide 'markAllAsRead' button on main page
    'markAllAsReadButton' => 0,
    // use if should hide discussion menu on discussion page
    'discussionMenu' => 0,
    // use if should hide controls button on discussion page
    'controlsButton' => 0,
    // use if should hide scrubber on discussion page
    'scrubberDiv' => 0,
    // use if should place post controls on header
    'postControlsUp' => 0,
    // use if should merge disussion controls with post controls
    'discussionControlsToPost' => 0,
    // use if should hide post count for every discussion on main page
    'postCount' => 0,
    // use if should place home button on main page
    'emoldovaButton' => 0,
    // use if should hide post reply on discussion page
    'postReply' => 0,
    // use if should hide 'terminalPost' for every discussion on main page
    'terminalPost' => 0,
    // use if should hide 'pane' discussion page
    'pane' => 0,
];

// save above settings on database in 'settings' table
return Migration::addSettings([
    'block-cat.default_settings' => json_encode($settings)
]);