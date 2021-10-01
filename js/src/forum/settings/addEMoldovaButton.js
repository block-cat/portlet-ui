/*
 * This function add button to emoldova.org on header on main page
 */

import { override } from 'flarum/extend';
import Navigation from 'flarum/components/Navigation';

// This is emoldova.org button
function getEMoldovaButton() {
  return (
    <a class="Button Button--icon hasIcon" href="https://emoldova.org/" title="EMoldova" active="false" type="button" target="_self">
      <i class="icon fas fa-home Button-icon"></i>
    </a>
  );
}

export default function () {
  override(Navigation.prototype, 'view', function(original) {
    // get all settings from Flarum API
    const defaultSettings = JSON.parse(app.forum.attribute('block-cat.defaultSettings'));
    
    // check if is set '1' for EMoldova button
    if (defaultSettings.emoldovaButton) {
      const { history, pane } = app;
      
      // return result
      // like original Flarum code
      return (
        <div
          className={'Navigation ButtonGroup ' + (this.attrs.className || '')}
          onmouseenter={pane && pane.show.bind(pane)}
          onmouseleave={pane && pane.onmouseleave.bind(pane)}
        >
          {/* Add EMoldova button */}
          {history.canGoBack() ? [this.getBackButton(), this.getPaneButton()] : [getEMoldovaButton(), this.getDrawerButton()]}
        </div>
      );
    } else {
      // if is set '0' for EMoldova button
      // return original Flarum code
      return original();
    }
  });
};
