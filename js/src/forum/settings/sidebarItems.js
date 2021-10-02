import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import SelectDropdown from 'flarum/components/SelectDropdown';

export default function () {

    extend(IndexPage.prototype, 'sidebarItems', function (items) {
        if (items.has('nav')) {
            items.remove('nav');
        }

        let items1 = this.navItems(this).toArray();

        for (let i = 0; i < items1.length; i++) {
            if (items1[i].itemName === "separator") {
                items1.splice(i , items1.length --);
            }
        }
        let items2 = this.navItems(this).toArray();

        for (let i = 0; i < items2.length; i++) {
            if (items2[i].itemName === "separator") {
                items2.splice(0, i + 1);
            }
        }
        

        items.add(
            'nav_Navigation',
            SelectDropdown.component(
              {
                buttonClassName: 'Button',
                className: 'App-titleControl nav_Navigation',
                accessibleToggleLabel: app.translator.trans('core.forum.index.toggle_sidenav_dropdown_accessible_label'),
              },
              items1
            )
          );

          items.add(
            'nav_Categories',
            SelectDropdown.component(
              {
                buttonClassName: 'Button',
                className: 'App-titleControl nav_Navigation',
                accessibleToggleLabel: app.translator.trans('core.forum.index.toggle_sidenav_dropdown_accessible_label'),
              },
              items2
            )
          );
    })

}