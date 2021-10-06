import app from 'flarum/common/app';
import { extend, override } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';

export default function () {


    extend(IndexPage.prototype, 'viewItems', function (items) {
        if (items.has('sort')) {
            items.remove('sort');
        }
    })

    extend(IndexPage.prototype, 'actionItems', function (items) {

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




    });

}