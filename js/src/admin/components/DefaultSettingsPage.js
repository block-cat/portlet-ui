import ExtensionPage from 'flarum/common/components/ExtensionPage';
import app from 'flarum/app';
import Switch from 'flarum/components/Switch';
import Button from 'flarum/components/Button';
import saveSettings from 'flarum/utils/saveSettings';
import icon from 'flarum/helpers/icon';
import Alert from 'flarum/common/components/Alert';

export default class DefaultSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);

    // get welcome settings
    this.welcomeSettings = JSON.parse(app.data.settings["block-cat.welcome_settings"] || null);

    if (!this.welcomeSettings) {
      this.welcomeSettings = {
        leftText: '',
        rightText: '',
        sliderItems: [],
      };
    }

    // get settings vasia
    this.vasia_settings = JSON.parse(app.data.settings["block-cat.vasia_settings"]);

    // is used when data is saving
    this.loading = false;
    // is used to check modification
    this.modified = false;
  }

  content() {
    return (
      // standard containers on extensions page
      m('.ExtensionPage-settings', [
        m('.container', [
          // insert all in form tag
          m('Form', {
            // onsubmit action call onsubmit method
            onsubmit: this.onsubmit.bind(this),
          }, [
            m('.SettingsGroup', [ // contains all group settings
              m('.Welcome', [ // Start Welcome Settings
                m('label.hello', app.translator.trans('block-cat-default.admin.welcome_settings.title')),
                Object.keys(this.welcomeSettings).map((key) => {
                  return m('.Form-group.' + key, [
                    m('label', app.translator.trans(`block-cat-default.admin.welcome_settings.${key}`)),
                    m('.helpText', app.translator.trans(`block-cat-default.admin.welcome_settings.${key}_text`)),
                    m(key === 'sliderItems' ? 'textarea.FormControl' : 'input.FormControl', {
                      type: key === 'sliderItems' ? undefined : 'text',
                      rows: key === 'sliderItems' ? 6 : undefined,
                      value: key === 'sliderItems' ? this.welcomeSettings[key].join('\n') : this.welcomeSettings[key],
                      placeholder: app.translator.trans('block-cat-default.admin.welcome_settings.placeholder'),
                      oninput: (e) => {
                        key === 'sliderItems' ?
                          this.welcomeSettings[key] = e.target.value.split('\n') :
                          this.welcomeSettings[key] = e.target.value;
                        this.modified = true;
                      },
                    }),
                  ]);
                }),
              ]), // End Welcome Settings

              m('.Settings', [ // Start Settings Column
                m('label', app.translator.trans('block-cat-default.admin.settings.title')),

                Object.keys(this.vasia_settings).map((key) => {
                  if (key === 'button_3d_new' || key === 'sideNav_shadow' || key === 'buttons_votes_comments_views' || key === 'view_tags'
                    || key === 'view_hero' || key === 'button_etichete' || key === 'sidenav_fixed' || key === 'button_adauga_right'
                    || key === 'remove_additional_space' || key === 'show_item_sort' || key === 'add_input_hover_style'
                    || key === 'display_pdf_files' || key === 'add_borders' || key === 'rankings_button_header' || key === 'author_bottom') {
                    return [
                      m('.Form-group', [ // controlsButton and scrubberDiv
                        Switch.component({
                          state: this.vasia_settings[key] || false,
                          onchange: () => {
                            this.vasia_settings[key] ^= true;
                            this.modified = true;
                          }
                        },
                          m('li', app.translator.trans(`block-cat-default.admin.vasia_settings.${key}`))
                        ),
                      ])
                    ];
                  } else if ((key === 'tags_bottom' && this.vasia_settings['view_tags']) || (key === 'modify_item_sort' && this.vasia_settings['show_item_sort']) || (key === 'button_etichete_in_header' && this.vasia_settings['button_etichete'])) {
                    return [
                      m('.Form-group .Form-group-children', [ // controlsButton and scrubberDiv
                        Switch.component({
                          state: this.vasia_settings[key] || false,
                          onchange: () => {
                            this.vasia_settings[key] ^= true;
                            this.modified = true;
                          }
                        },
                          m('li', app.translator.trans(`block-cat-default.admin.vasia_settings.${key}`))
                        ),
                      ])
                    ];
                  }
                  else if (key === 'title_font_size' || key === 'item_excerpt_font_size' || key === 'item_excerpt_color') {
                    return [
                      m('.Form-group .inline',
                        // if icon exists this will be displayed realtime on page
                        this.vasia_settings[key] !== "" ? icon(this.vasia_settings[key]) : '',
                        this.vasia_settings[key] !== "" ? m('span', app.translator.trans(`block-cat-default.admin.vasia_settings.${key}`)) : '',
                        m('input.FormControl', {
                          type: 'text',
                          placeholder: `block-cat-default.admin.vasia_settings.${key}`,
                          value: this.vasia_settings[key],
                          oninput: (e) => {
                            this.vasia_settings[key] = e.target.value;
                            this.modified = true;
                          }
                        })
                      ),
                    ]
                  }
                }),
              ]), // End Settings Column
            ]),

            // save button
            Button.component(
              {
                type: 'submit',
                className: 'Button Button--primary',
                loading: this.loading,
                disabled: !this.modified,
              },
              app.translator.trans('core.admin.edit_header.submit_button')
            ),
          ]),
        ])
      ])
    );
  }

  onsubmit(e) {
    e.preventDefault();
    this.loading = true;

    try {
      saveSettings({
        ["block-cat.welcome_settings"]: JSON.stringify(this.welcomeSettings),
        ["block-cat.vasia_settings"]: JSON.stringify(this.vasia_settings),
      });
      app.alerts.show(
        Alert,
        {
          type: "success"
        },
        app.translator.trans('core.admin.settings.saved_message')
      );
    } catch {
      app.alerts.show(
        Alert,
        {
          type: "error"
        },
        app.translator.trans('core.lib.error.generic_message')
      );
    } finally {
      this.welcomeSettings = JSON.parse(app.data.settings["block-cat.welcome_settings"]);
      this.vasia_settings = JSON.parse(app.data.settings["block-cat.vasia_settings"]);
      this.loading = false;
      this.modified = false;
    }
  }
}