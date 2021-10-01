/*
 * This function removes blue button from
 * rightside from discussion page and
 * what is below to this
 */

import { extend } from 'flarum/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';

export default function () {
  extend(DiscussionPage.prototype, 'sidebarItems', function(items) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));

    // check if is set '1' for controls button
    if (defaultSettings.controlsButton) {
      // check if exists 'controls' item
      if (items.has('controls')) {
        // remove 'controls' item
        items.remove('controls');
      }
    }
    // check if is set '1' for timeline
    if (defaultSettings.scrubberDiv) {
      // check if exists 'scrubber' item
      if (items.has('scrubber')) {
        // remove 'scrubber' item
        items.remove('scrubber');
      }
    }
  });
};
