import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import LinkButton from 'flarum/components/LinkButton';

export default function () {

  extend(HeaderSecondary.prototype, 'items', function (items) {

    const vasiaSettings = JSON.parse(app.forum.attribute('block-cat.vasiaSettings'));

    if (vasiaSettings.rankings_button_header) {

      items.add(
        'rankings',
        LinkButton.component(
          {
            href: app.route('rankings'),
            icon: 'fas fa-trophy',
            className: 'Button Button--flat rankings_button',
          }),
        20
      );
    }
  });
}