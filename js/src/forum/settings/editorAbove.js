import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';

export default function () {
    extend(IndexPage.prototype, 'view', function (view) {
      if ($('.ArticleModal').length !== 0 && app.composer.position !== 'hidden') {
        $('#modal > .ModalManager').addClass("newEditor");
        $('div.modal-backdrop').addClass("newEditor");
      }
      
      if ($('.ArticleModal').length !== 0 && app.composer.position == 'hidden') {
        $('#modal > .ModalManager').removeClass("newEditor");
        $('div.modal-backdrop').removeClass("newEditor");
      }
    });
}