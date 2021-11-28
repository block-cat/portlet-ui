import Component from "flarum/Component";
import Button from "flarum/components/Button";
import Modal from "flarum/components/Modal";

export default class Welcome extends Component {
  init() {
    this.hidden = false;
  }

  view() {
    // if (this.hidden) return <div />;

    const slideUp = () => {
      this.$().slideUp(this.hide.bind(this));
    };

    let html = "<h1> Hello! </h1>";

    let obContent = {
      "##ATTRIBUTE.WELCOME_TITLE": app.forum.attribute("welcomeTitle"),
      "##ATTRIBUTE.WELCOME_MESSAGE": app.forum.attribute("welcomeMessage"),
      "##COMPONENT.HERO_CLOSE": '<div id="welcomeHeroButton-dismiss"></div>',
    };
    let hasDismissButton = true;
    let ret = html.replace(
      /##ATTRIBUTE.WELCOME_TITLE|##ATTRIBUTE.WELCOME_MESSAGE|##COMPONENT.HERO_CLOSE/gi,
      (matched) => {
        hasDismissButton =
          matched === "##COMPONENT.HERO_CLOSE" ? true : hasDismissButton;
        return obContent[matched];
      }
    );

    return m(
      "header",
      { className: "Welcome" },
      m(
        ".container",
        m(
          "div#welcomeHeroButton-dismiss",
          hasDismissButton
            ? Button.component({
                icon: "fas fa-times",
                onclick: slideUp,
                className: "Hero-close Button Button--icon Button--link",
              })
            : ""
        ),
        m.trust(ret)
      )
    );
  }

  /**
   * Hide the welcome hero.
   */
  hide() {
    // localStorage.setItem("customwelcomehero_welcomeHidden", "true");

    this.hidden = false;
  }
}