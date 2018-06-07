# Contributiegids

Bedankt dat je tijd wil nemen om een bijdrage te leveren! :+1:

## Inhoud

- [Ik heb een vraag](#ik-heb-een-vraag)
- [Een Smart Widget verbouwen](#een-smart-widget-verbouwen)
- [Een nieuwe Smart Widget maken](#een-nieuwe-smart-widget-maken)
- [Richtlijnen](#richtlijnen)

## Ik heb een vraag

Heb je een korte vraag over het gebruik van een widget dan is die altijd welkom op de [#acpaas-ui slack groep](https://dgpls.slack.com/messages/C4M60PQJF). Heb je vragen over het (ver)bouwen van widgets dan is die welkom op de [#acpaas-ui-dev slack groep](https://dgpls.slack.com/messages/C4S2D7KTK).

Heb je een complexe vraag over de smart widgets in het algemeen, [maak dan een github issue](https://github.com/digipolisantwerp/smart-widgets/issues/new) bovenaan deze pagina.

Wil je een suggestie doen voor een nieuwe smart widget, maak dan eveneens een github issue bovenaan.

Heb je vragen of opmerkingen over een specifieke Smart Widget, ga dan naar het github project ervan en bekijk de contributiegids om te weten waar je de vragen kan stellen. Ben je daar niet wijzer mee, stel je vraag dan op slack of als een github issue hierboven.

Wens je correcties aan deze contributiegids, maak dan een issue of stuur een pull request.

## Een Smart Widget verbouwen

Wil je functionaliteit toevoegen aan een bestaande Smart Widget, of gewoon een bug fixen erin, ga dan naar de contributiegids in het project van die Smart Widget, en volg de instructies daar.

Indien je een nieuwe front-end of back-end technologie wil toevoegen aan een widget, volg dan de instructies hieronder voor het [maken van nieuwe widgets](#een-nieuwe-smart-widget-maken).

Volg in elk geval de onderstaande [richtlijnen](#richtlijnen).

## Een nieuwe Smart Widget maken

### Algemeen

Een Smart Widget bestaat uit verschillende delen:

- 1 of meer UI packages waarin de front-end component zit voor de verschillende frameworks

    Je kan gebruik maken van de [Angular UI Starter Kit](https://github.com/digipolisantwerp/starter-kit_widget_angular).

    Je kan je ook baseren op de code van de [contact picker angular UI package](https://github.com/digipolisantwerp/contact-picker_widget_angular).

    Een voorbeeldpackage voor React is gepland.

- 1 of meer BFF packages waarin de BFF service component zit voor de verschillende server platformen

    Je kan je baseren op de code van de [contact picker node.js BFF package](https://github.com/digipolisantwerp/contact-picker_service_nodejs).

    Een voorbeeldpackage voor .NET Core is gepland.

Voor beide delen volg je onderstaande richtlijnen.

### Stappenplan

Elke Smart Widget gaat door verschillende stappen om gepubliceerd te geraken:

1. Publicatie op github onder eigen naam

    Je publiceert repo's op github onder je eigen naam of organisatie. Je laat weten aan het ACPaaS UI team waar de widget staat via slack, mail of github issues.

    We nemen jouw widget op in de overzichtslijst met status *Community*. Je staat zelf in voor eventuele ondersteuning (verwerken van pull requests, beantwoorden vragen, ...)

    ![Community](images/status-community.svg)

    > **NPM packages**
    >
    > Publicatie van een NPM package doe je op de officiële npmjs repository (onder een eigen scope) of indien je de nodige permissies hebt kan je dit ook doen op de Digipolis Nexus package repository (onder scope @acpaas-ui-widgets). Kijk naar de voorbeeldpackages voor hoe dit laatste werkt.
    >
    > Er is een migratie onderweg van alle ACPaaS UI en Smart Widget npm packages naar de npmjs repository zodat Nexus niet meer nodig zal zijn.

2. Overname door Digipolis

    Je vraagt aan Digipolis voor een review van de Smart Widget ter voorbereiding van de overname. Dit kan je doen door een [issue te boeken op dit project](https://github.com/digipolisantwerp/smart-widgets/issues/new?template=handoff-request.md).

    Als aan de onderstaande richtlijnen is voldaan krijg je een goedkeuring voor overdracht. Je doet een transfer van de github repo naar de *digipolisantwerp* github organisatie.

    In het kader van de overdracht spreken we af in welke mate je betrokken zal zijn bij het verdere onderhoud en de ondersteuning van afnemers. Bijkomende contributies doe je via pull requests of merge requests. Het ACPaaS UI team zorgt ervoor dat een npm package gepubliceerd wordt op de juiste plek indien nodig.

    ![Live](images/status-live.svg)

## Richtlijnen

### Algemene richtlijnen

- Je volgt de vereisten uit de [technische specificaties van het ACPaaS platform](https://acpaas-portal.antwerpen.be/nl/docs/techspecs).
- Alle widgets horen visueel te passen in de [merkarchitectuur](https://www.antwerpen.be/nl/overzicht/merk-en-huisstijl-1/digitale-componenten/technische-informatie) van de stad Antwerpen.

    > Heb je geen toegang tot bovenliggende pagina volg dan de [instructies vanop de technische specificaties](https://acpaas.digipolis.be/nl/docs/techspecs) om toegang tot de huisstijl te verkrijgen.

    Je kan de [a-ui/core](https://github.com/a-ui/core_branding_scss) package aan je JavaScript project toevoegen om toegang te hebben tot de SASS variabelen uit de huisstijl. In de [contact picker](https://github.com/digipolisantwerp/contact-picker_widget_angular) zie je hier een voorbeeld van.

- Voor de UI packages volg je de [ACPaaS UI richtlijnen](https://acpaas-ui.digipolis.be/docs/guidelines) en maak je maximaal hergebruik van [ACPaaS UI componenten](https://acpaas-ui.digipolis.be/ui-components).

### Code repository

In elke repo verwachten we volgende structuur:

- LICENSE

    We verkiezen de [MIT license](https://choosealicense.com/licenses/mit/). Voor andere licenties vragen we dat je op voorhand even checkt bij Digipolis.

- README.md

  Het readme bestand omschrijft volgende zaken:

  - Omschrijving van de widget en screenshot van hoe die er uit ziet
  - Hoe de widget gebruikt kan worden
  - Hoe de demoapplicatie uitgevoerd kan worden
  - Een link naar contributiemodel voor wijzigingen en bug reports
  - Een link naar de licentie

  Als voorbeeld kan je kijken naar de [readme van de contact picker](https://github.com/digipolisantwerp/contact-picker_widget_angular/blob/master/README.md).

- CONTRIBUTING.md

  Het contributing bestand omschrijft volgende zaken:

  - Waar een vraag gesteld kan worden
  - Waar bugs en feature requests gemeld kunnen worden
  - Hoe je lokale builds maakt en waarop te letten bij wijzigingen
  - Hoe de unit tests uit te voeren
  - Hoe code contributies te doen

  Als voorbeeld kan je kijken naar de [contributing guide van de contact picker](https://github.com/digipolisantwerp/contact-picker_widget_angular/blob/master/CONTRIBUTING.md).

- src/

  De broncode van jouw widget. De exacte mapnaam kan wijzigen in functie van de platformconventies.

- example/

  Een voorbeeldapplicatie om dit deel (UI of BFF) van de widget te demonstreren.

### Vereisten voor publicatie

#### Community

![Community](images/status-community.svg)

Om een widget op te nemen in de overzichtslijst voldoet die aan een minimale set vereisten:

- Een README.md bestand met omschrijving, screenshot en instructies voor gebruik, in Nederlands of Engels.
- Een LICENSE file met de MIT license.
- Een publiek toegankelijke git(hub) repo.

#### Live

![Live](images/status-live.svg)

De *live* status is wat we minimaal verwachten van een widget ontwikkeld in het kader van een Digipolis project.

Voor de *live* status komt bovenop bovenstaande *community* vereisten ook nog dit:

- Architectuur volgens de [SA2020](https://docs.google.com/presentation/d/1F5xLAm7IqepLyBJMswdLXtkD-Epa_xL-iUJfu-k-Kdc/edit?usp=drive_web&ouid=110795847601970524262) richtlijn
- Maakt technologiekeuzes uit de [DAAS](https://goo.gl/HNm92Q) standaard

  Concreet wil dit zeggen: Angular, React, Node.JS en .NET Core.

- Reponaam volgt het patroon `[widget-name]_[part]_[platform]`

  - `[part]`: `widget` voor de UI, `service` voor de BFF
  - `[platform]`: `angular` voor Angular 5, `angularjs`voor Angular 1, `nodejs` voor Node.JS, `dotnet` voor .NET Core.
  - Bvb: `contact-picker_widget_angular`

- NPM packagenaam volgt het patroon `[platform]-[widget-name]`

  - `[platform]`: `ngx` voor Angular 5+, `ng` voor Angular 1, `nodejs` voor Node.JS
  - Publicatie onder de `@acpaas-ui-widgets` scope gebeurt na goedkeuring door het ACPaaS UI team.
  - Bvb: `@acpaas-ui-widgets/ngx-contact-picker`

- De belangrijkste elementen van de [ACPaaS UI coding guidelines](https://acpaas-ui.digipolis.be/docs/guidelines) zijn gevolgd.

- De README.md en CONTRIBUTING.md bestanden bevatten de [bovenvermelde inhoud](#code-repository).

#### Aangeraden

Bovenop bovenstaande vereisten raden we ook nog volgende aan:

- Alle [richtlijnen](#richtlijnen) zijn gevolgd.

- [Semver](http://semver.org/) regels worden toegepast.

- Er is een unit test framework geintegreerd.

- Er is 80% unit test coverage op de widget code (niet op de examples).

- Er is een voorbeeldapplicatie geintegreerd in de `example/` map.

- README.md

  - Vermelding van de changelog zodat men weet wat gewijzigd is in nieuwe versies.
  - Indien er een stabiele en een pre-release versie is, een duidelijk onderscheid hiertussen.

- CONTRIBUTING.md

  - Een vermelding van alle relevante richtlijnen (het eenvoudigst is een link terug naar deze pagina)

## Addendum

De status badges in de readme werden gemaakt met shields.io.
