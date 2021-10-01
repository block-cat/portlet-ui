/*
 * This function removes tools bar from top of
 * discussions list on main page
 */

import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';

export default function () {
  extend(IndexPage.prototype, 'view', function(view) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));

    // check if is set '1' for toolbar
    if (defaultSettings.toolbar) {
      // remove first element from 'view.children[1].children[0].children[1].children'
      view.children[1].children[0].children[1].children.shift();
    }
  });
};
