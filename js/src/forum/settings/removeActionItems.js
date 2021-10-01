/*
 * This function removes refresh button and
 * mark all as read button from top of
 * discussions list on main page
 */

import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';

export default function () {
  extend(IndexPage.prototype, 'actionItems', function(items) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));

    // check if is set '1' for refresh button
    if (defaultSettings.refreshButton) {
      // check if exists 'refresh' item
      if (items.has('refresh')) {
        // remove 'refresh' item
        items.remove('refresh');
      }
    }
    // check if is set '1' for mark all as read button
    if (defaultSettings.markAllAsReadButton) {
      // check if exists 'markAllAsRead' item
      if (items.has('markAllAsRead')) {
        // remove 'markAllAsRead' item
        items.remove('markAllAsRead');
      }
    }
  });
};
