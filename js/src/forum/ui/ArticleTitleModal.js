import Modal from "flarum/components/Modal";
import Button from 'flarum/common/components/Button';

export default class ArticleTitleModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);
  }

  className() {
    return "ArticleTitleModal";
  }

  title() {
    return app.translator.trans('block-cat-default.forum.article_title_modal.title');
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group">
            <input className="FormControl" type="text" />
          </div>
          <div className="Form-group">
            {Button.component(
              {
                className: 'Button Button--primary Button--block',
                type: 'submit',
                onclick: this.onsubmit.bind(this, 1),
              },
              app.translator.trans('block-cat-default.forum.article_title.submit_button')
            )}
          </div>
        </div>
      </div>
    );
  }

  onsubmit(value, e) {
    app.modal.close();
    this.attrs.onsubmit(value);
  }
}