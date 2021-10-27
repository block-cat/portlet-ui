import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';
import Button from 'flarum/components/Button';

export default function () {


    extend(IndexPage.prototype, 'viewItems', function (items) {
        const vasiaSettings = JSON.parse(app.forum.attribute('block-cat.vasiaSettings'));

        if (vasiaSettings.show_item_sort) {
            if (vasiaSettings.modify_item_sort) {
                if (items.has('sort')) {
                    items.remove('sort');
                }
                items.add(
                    'Noi',
                    LinkButton.component({
                        title: "Noi",
                        className: 'Button Button--primary',
                        href: '?sort=newest',
                    },
                        app.translator.trans('block-cat-default.forum.sort_button_3')
                    )
                );

                items.add(
                    'Vechi',
                    LinkButton.component({
                        title: "Vechi",
                        className: 'Button Button--primary',
                        href: '?sort=oldest',
                    },
                        app.translator.trans('block-cat-default.forum.sort_button_4')
                    )
                );
            }
        } else {
            if (items.has('sort')) {
                items.remove('sort');
            }
        }
    })

    extend(IndexPage.prototype, 'sidebarItems', function (items) {
        const vasiaSettings = JSON.parse(app.forum.attribute('block-cat.vasiaSettings'));

        if (vasiaSettings.button_adauga_right) {
            if (items.has('newDiscussion')) {
                items.remove('newDiscussion');
            }
        }
    });

    extend(IndexPage.prototype, 'actionItems', function (items) {
        const vasiaSettings = JSON.parse(app.forum.attribute('block-cat.vasiaSettings'));
        if (vasiaSettings.button_adauga_right) {
            const canStartDiscussion = app.forum.attribute('canStartDiscussion') || !app.session.user;

            items.add(
                'newDiscussion',
                Button.component(
                    {
                        icon: 'fas fa-edit',
                        className: 'Button Button--primary IndexPage-newDiscussion',
                        itemClassName: 'App-primaryControl',
                        onclick: () => {
                            // If the user is not logged in, the promise rejects, and a login modal shows up.
                            // Since that's already handled, we dont need to show an error message in the console.
                            return this.newDiscussionAction().catch(() => { });
                        },
                        disabled: !canStartDiscussion,
                    },
                    app.translator.trans(canStartDiscussion ? 'core.forum.index.start_discussion_button' : 'core.forum.index.cannot_start_discussion_button')
                )
            );
        }
    });

}