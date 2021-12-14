/*
 * This function add button to emoldova.org on header on main page
 */

import { extend } from 'flarum/extend';
import Navigation from 'flarum/components/Navigation';

// This is emoldova.org button
function getEMoldovaButton() {
  // message for confirm
  let text = app.translator.trans('block-cat-default.forum.confirm_exit_message');

  return (
    <a class="Button Button--icon hasIcon"
      href="https://emoldova.org/" title="e-Moldova"
      active="false" type="button" target="_self"
      onclick={() => {return confirm(text);}}>
      <i class="icon fas fa-home Button-icon"></i>
    </a>
  );
}

export default function () {
  extend(Navigation.prototype, 'view', function(view) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));
    
    // check if is set '1' for EMoldova button
    if (defaultSettings.emoldovaButton) {
      const { history } = app;

      // check if is on Main Page
      if (!history.canGoBack()) {
        if (view.children) { // check if 'view' has children
          view.children.unshift(getEMoldovaButton());
        } else { // if 'view' hasn't children
          // message for confirm
          let text = app.translator.trans('block-cat-default.forum.confirm_exit_message');

          // check if button not exists
          if ($('#header-navigation > .Navigation.ButtonGroup').find('a > .fas.fa-home').length == 0) {
            $('#header-navigation > .Navigation.ButtonGroup').append(
              '<a class="Button Button--icon hasIcon"\
                href="https://emoldova.org/"\
                title="e-Moldova"\
                active="false"\
                type="button"\
                target="_self"\
                onclick="return confirm(\'' + text +'\')">\
                  <i class="icon fas fa-home Button-icon"></i>\
                </a>'
            );
          }
        }
      } else { // if is not on Main Page, should remove button
        if ($('#header-navigation > .Navigation.ButtonGroup').find('a > .fas.fa-home').length == 1) {
          $('a[title="e-Moldova"]').remove();
        }
      }
    }
  });
};
