import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';
import Button from 'flarum/components/Button';

export default function () {


    extend(IndexPage.prototype, 'viewItems', function (items) {
        const vasiaSettings = JSON.parse(app.forum.attribute('block-cat.vasiaSettings'));
        
        // by Tudor
        const sort = app.discussions.params.sort || 'latest';

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
                        onclick: changeSort.bind(this, "newest"),
                        active: sort === 'newest',
                        // href: '?sort=newest',
                    },
                        app.translator.trans('block-cat-default.forum.sort_button_3')
                    )
                );

                items.add(
                    'Vechi',
                    LinkButton.component({
                        title: "Vechi",
                        className: 'Button Button--primary',
                        onclick: changeSort.bind(this, "oldest"),
                        active: sort === 'oldest',
                        // href: '?sort=oldest',
                    },
                        app.translator.trans('block-cat-default.forum.sort_button_4')
                    )
                );

                items.add(
                    'Votate',
                    LinkButton.component({
                        title: "Votate",
                        className: 'Button Button--primary',
                        onclick: changeSort.bind(this, "votes"),
                        active: sort === 'votes',
                        // href: '?sort=votes',
                    },
                        app.translator.trans('block-cat-default.forum.sort_button_5')
                    )
                );

                items.add(
                    'Vizualizate',
                    LinkButton.component({
                        title: "Vizualizate",
                        className: 'Button Button--primary',
                        onclick: changeSort.bind(this, "popular"),
                        active: sort === 'popular',
                        // href: '?sort=popular',
                    },
                        app.translator.trans('block-cat-default.forum.sort_button_6')
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

// Change sort by Tudor
function changeSort(sort) {
    const params = app.discussions.getParams();

    if (sort === Object.keys(app.discussions.sortMap())[0]) {
        delete params.sort;
    } else {
        params.sort = sort;
    }

    m.route.set(app.route(this.attrs.routeName, params));
}