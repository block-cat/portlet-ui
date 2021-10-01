<?php

use Flarum\Database\Migration;

$routes = [
    'discussion' => ['path' => "", 'regex' => "^(\/\\w+)*\/(:id)(\/\\w+)*$", 'placeholder' => "/d/:id"],
    'discussion.near' => ['path' => "", 'regex' => "^(\/\\w+)*\/(:id)(\/\\w+)*\/(:near)(\/\\w+)*$|^(\/\\w+)*\/(:near)(\/\\w+)*\/(:id)(\/\\w+)*$", 'placeholder' => "/d/:id/:near"],
    'flags' => ['path' => "", 'regex' => "^(\/\\w+)*$", 'placeholder' => "/flags"],
    'following' => ['path' => "", 'regex' => "^(\/\\w+)*$", 'placeholder' => "/following"],
    'index' => ['path' => "", 'regex' => "^(\/\\w+)*$", 'placeholder' => "/all"],
    'notifications' => ['path' => "", 'regex' => "^(\/\\w+)*$", 'placeholder' => "/notifications"],
    'settings' => ['path' => "", 'regex' => "^(\/\\w+)*$", 'placeholder' => "/settings"],
    'tag' => ['path' => "", 'regex' => "^(\/\\w+)*\/(:tags)(\/\\w+)*$", 'placeholder' => "/t/:tags"],
    'tags' => ['path' => "", 'regex' => "^(\/\\w+)*$", 'placeholder' => "/tags"],
    'user' => ['path' => "", 'regex' => "^(\/\\w+)*\/(:username)(\/\\w+)*$", 'placeholder' => "/u/:username"],
    'user.discussions' => ['path' => "", 'regex' => "^(\/\\w+)*\/(:username)(\/\\w+)*$", 'placeholder' => "/u/:username/discussions"],
    'user.mentions' => ['path' => "", 'regex' => "^(\/\\w+)*\/(:username)(\/\\w+)*$", 'placeholder' => "/u/:username/mentions"],
    'user.posts' => ['path' => "", 'regex' => "^(\/\\w+)*\/(:username)(\/\\w+)*$", 'placeholder' => "/u/:username"],
    'user.uploads' => ['path' => "", 'regex' => "^(\/\\w+)*\/(:username)(\/\\w+)*$", 'placeholder' => "/u/:username/uploads"],
];

return Migration::addSettings([
    'block-cat.default_routes' => json_encode($routes)
]);