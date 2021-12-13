import Component from "flarum/Component";
import Button from "flarum/components/Button";
import app from 'flarum/app';


var features = ["Scrie articole fără logare sau înregistare",
"Primește sugestii de îmbunătățire a articolului tău",
"Înregistrează-te pentru a edita articolul tău",
"Conectează-te prin Google (gmail)",
"Votează articole, comentează articole",
"Contribuie la dezvoltarea Moldovei Digitale",
"Dub turbo um",
"Bud bum tour",
"Bum but dour",
"Rub but do mu"];

var seed = 0;
function random() {
  var x = Math.sin(seed++) * 10;
  return x - Math.floor(x);
}

var n = random();


function displayRandomFeature(obj){
    n = (n + 1) % 10;
    obj.innerHTML = features[n];

}

setInterval(function(){ displayRandomFeature(document.getElementById('features')); }, 7000);

export default class Welcome extends Component {
  init() {
    super.init();
    this.hidden = false;
    console.log(app.forum.attribute('block-cat.welcomeSettings'));
  }

  view() {
    console.log(app.forum.attribute('block-cat.welcomeSettings'));
    // if (this.hidden) return <div />;

    const slideUp = () => {
      this.$().slideUp(this.hide.bind(this));
    };

    let html = ` 
    <div className="containerNarrow">
      <h2 className="Hero-title" class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">##ATTRIBUTE.WELCOME_TITLE</h2>
      <div className="Hero-subtitle" class="text-lg text-white mt-2 px-20">##ATTRIBUTE.WELCOME_MESSAGE</div>
    </div> `;

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

    return (
        <header className="Welcome fixed w-11/12 rounded-lg text-center ml-14 p-12 mt-4 z-10">
        <div class="container">
          {Button.component({
            icon: 'fas fa-times rounded-full px-4 py-3 hover:bg-blue-100',
            onclick: slideUp,
            className: 'Hero-close Button Button--icon Button--link',
            title: "Închide panoul de bun-venit"
          })}
        </div>
        {m.trust(ret)}
        <div class="flex mt-4 max-w-5xl mx-auto">
            <div class="w-1/2 bg-blue-100 rounded-lg mr-8">
            <i class="icon fa fa-pencil-alt text-3xl text-blue-500 pt-8"></i>
                {m("h2", {className:"text-lg p-12 mx-auto"}, "Scrie articole")}
                <div id="writeFromWelcomeHero" class="mb-8">
                    {
                        Button.component({
                            // icon: "fas fa-pencil-alt",
                            onclick: () => {
                                app.modal.show();
                            },
                            className: "bg-blue-500 hover:bg-blue-400 text-white text-lg font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",
                            title: "Scrie un articol nou",
                            },
                            "Scrie un articol nou")
                    }
                </div>
            </div>
            <div class="w-1/2 bg-red-100 rounded-lg">
                <i class="icon fas fa-search text-3xl text-red-500 pt-8"></i>
                {m("h2", {className:"text-lg p-8 mx-auto"}, "Caută conținutul dorit și contribuie la asigurarea calității articolelor altor autori prin comentarea, votarea și etichetarea articolelor.")}
                <div id="browseFromWelcomeHero" class="mb-8">
                    {
                        Button.component({
                            // icon: "fas fa-search",
                            onclick: () => {
                                app.modal.show();
                            },
                            className: "bg-red-500 hover:bg-red-400 text-white text-lg font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded",
                            title: "Scrie un articol nou",
                            },
                            "Navighează prin acest portlet")
                    }
                </div>
            </div>
        </div>
        <div class="features flex mt-4 max-w-5xl mx-auto">
            
            <h1 id="features" class="text-3xl text-blue-300 mx-auto">{features[0]}</h1>
        </div>
      </header>
    );
  }

  /**
   * Hide the welcome hero.
   */
  hide() {
    // localStorage.setItem("customwelcomehero_welcomeHidden", "true");

    this.hidden = true;
  }
}