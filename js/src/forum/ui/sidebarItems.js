import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import SelectDropdown from 'flarum/components/SelectDropdown';

export default function () {

  extend(IndexPage.prototype, 'sidebarItems', function (items) {

    const vasiaSettings = JSON.parse(app.forum.attribute('block-cat.vasiaSettings'));



    let inputs = document.getElementsByClassName("FormControl");
    if (inputs != undefined) {
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "search") { break; };
        inputs[i].classList.add("shadow-sm");
        inputs[i].classList.add("border-gray-300");
        inputs[i].classList.add("rounded-lg");
        inputs[i].classList.add("py-2");
        inputs[i].classList.add("px-3");
        if (vasiaSettings.add_input_hover_style) {
          inputs[i].classList.add("focus:ring-2");
          inputs[i].classList.add("focus:ring-blue-200");
          inputs[i].classList.add("focus:border-blue-400");
        }
        /* inputs[i].classList.remove("FormControl"); */
      }
    }


    if (vasiaSettings.button_3d_new) {
      let button_new = document.getElementsByClassName("item-newDiscussion")[0];
      if (button_new != undefined) {
        button_new.classList.add("item-newDiscussion_3d");
      }
    } else {
      let button_new = document.getElementsByClassName("item-newDiscussion")[0];
      if (button_new != undefined) {
        button_new.classList.add("item-newDiscussion-stackoverflow");
      }
    }

    if (items.has('nav')) {
      items.remove('nav');
    }

    let items1 = this.navItems(this).toArray();

    for (let i = 0; i < items1.length; i++) {
      if (vasiaSettings.rankings_button_header == 1) {
        if (items1[i].itemName === "rankings") {
          items1.splice(i, 1);
        }
      }
      if (vasiaSettings.button_etichete == 0) {
        if (items1[i].itemName === "tags") {
          items1.splice(i, 1);
        }
      }

      if (items1[i].itemName === "separator") {
        items1.splice(i, items1.length--);
      }
    }

    let items2 = this.navItems(this).toArray();

    for (let i = 0; i < items2.length; i++) {
      if (items2[i].itemName === "separator") {
        items2.splice(0, i + 1);
      }
    }

    if (!vasiaSettings.sideNav_shadow) {
      let sideNav_shadow = document.getElementsByClassName("sideNav")[0];
      if (sideNav_shadow != undefined) {
        sideNav_shadow.classList.add("sideNav_border");
      }
    } else {
      let nav_Navigation = document.getElementsByClassName("nav_Navigation")[0];
      let nav_Navigation1 = document.getElementsByClassName("nav_Navigation")[1];
      if (nav_Navigation != undefined) {
        nav_Navigation.classList.add("nav_Navigation_shadow");
        nav_Navigation1.classList.add("nav_Navigation_shadow");
      }
    }

    if (!vasiaSettings.view_hero) {
      let view_hero = document.getElementsByClassName("Hero")[0];
      if (view_hero != undefined) {
        view_hero.classList.add("d-none");
      }
    }

    if (vasiaSettings.sidenav_fixed) {
      let sidenav_fixed = document.getElementsByClassName("sideNav")[0];
      if (sidenav_fixed != undefined) {
        sidenav_fixed = sidenav_fixed.getElementsByTagName("ul")[0];
        sidenav_fixed.classList.add("sidenav_fixed");
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

  });
}