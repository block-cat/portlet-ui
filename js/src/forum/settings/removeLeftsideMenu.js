/*
 * This function removes leftside menu from main page
 */

import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';

export default function () {
  extend(IndexPage.prototype, 'sidebarItems', function(items) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));

    // check if is set '1' for main page menu
    if (defaultSettings.mainPageMenu) {
      // check if exists 'nav' item
      if (items.has('nav')) {
        // remove 'nav' item
        items.remove('nav');
      }
    }
  });
};
