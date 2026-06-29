# SterkerVerf — projectcontext (overdracht naar nieuwe chat)

Plak dit pad in een nieuwe chat en zeg "lees PROJECT-CONTEXT.md en ga verder":
`/Users/taiga/Claude/Projects/sterkerverf-v2/PROJECT-CONTEXT.md`

## Belangrijkste regel (van de gebruiker)
**Gebruik alleen claims die te bewijzen zijn.** Geen verzonnen cijfers, jaartallen,
reviews of fictieve quotes/portretten. Bewust verwijderd: "500+ klanten",
"1000+ projecten", "sinds 1975", en het fictieve Furkan-portret + quote.
Bij twijfel: weglaten of eerlijker/vager formuleren. Schrijf warm, persoonlijk, in
het **Nederlands** (formeel "u" op de site). Toon werk live (screenshot) en finetune.

## Het bedrijf
- **SterkerVerf** — schilders- & stucadoorsbedrijf, werkzaam in **heel Nederland**.
- **Officieel sinds 2025**; ervaren vakmensen, **opgeleid bij Sigma & Sikkens**.
- Diensten: **Schilderwerk · Stucwerk · Behangen · Lakwerk**.
- Oprichter: **Furkan** (echte persoon; géén fictief portret/quote gebruiken).
- Contact: **+31 6 87979346** · **info@sterkerverf.nl** · KvK **98343599** · BTW **NL005325294B30**.
- Referentiesite (bron van logo + foto's): https://sterkerverf.nl
- Logo: `assets/sterkerverf_logo_transparent.png` (woordmerk in terracotta + kleurrijke verfstrepen).

## Versies op schijf
- `sterkerverf-website/` — oude v1 (klassiek, illustraties). NIET actief.
- **`sterkerverf-v2/`** — DE actieve versie. Hier verder bouwen.
- `sterkerverf-v2.zip` — laatste export om te publiceren.

## Stijl & bestanden
- Pagina's: `index.html` (home), `over-ons.html`, `diensten.html`, `portfolio.html`,
  `kleurkiezer.html` (3D), `werkwijze.html`, `offerte.html`.
- `styles.css` (kleuren onder `:root`: `--terra` terracotta, crème, regenboog `--c-red..--c-blue`).
- `main.js` (mobiel menu, scroll-reveal, actieve nav o.b.v. bestandsnaam).
- `assets/` — logo + 8 echte projectfoto's. Fonts: Sora (koppen) + Inter (tekst).
- Licht & luchtig met terracotta, regenboog-accenten, donkere premium fotosectie.

## Per pagina (huidige staat)
- **Home**: hero met **fotoslideshow op timer** (crossfade, klikbare bolletjes, `#heroSlides`),
  **USP-icoonkaarten-grid** (`.usp`/`.uspc` — 4 kaarten met afgeronde gradient icoon-tegels:
  Vaste prijs vooraf, Netjes & opgeruimd, Opgeleid bij Sigma & Sikkens, Vrijblijvende offerte;
  verving de oude dunne donkere trust-strip), een **kwaststreek-divider** als huisstijl-handtekening
  (`.brush-divide` — SVG verfstreek in de logo-regenboog met gerafelde uiteinden, tussen hero en USP),
  4 diensten, "Waarom SterkerVerf"-sectie (`.why3`), donkere werk-galerij, 3D-kleurkiezer-teaser, CTA.
- **Over ons**: verhaal (eerlijk, geen 1975), Sigma/Sikkens-badges, waarden, beeld,
  en een **"Even kennismaken"-blok in oranje+blauw** (koffie+chat-illustratie, bel/mail-knoppen)
  — dit verving het oude "Maak kennis met Furkan". GEEN tijdlijn (was 1975, verwijderd).
- **Diensten**: 4 dienstblokken met echte foto's + een **"Onze aanpak/voorbereiding"-sectie** (`.prep`).
- **Portfolio**: projectkaarten met **datum + werkzaamheden**, filter op dienst; behangen = illustratie ("foto volgt").
- **Werkwijze**: vriendelijke 4-staps **tijdlijn met SVG-illustraties** (`.fstep`), een
  **"Onze belofte"**-sectie (donker, 4 kaarten) en een FAQ-accordeon.
- **Offerte**: formulier → opent mail naar info@sterkerverf.nl; leest **`?kleuren=`** uit de URL
  en vult het kleurenveld voor (vanuit de kleurkiezer-knop "Mee in offerte").

## De 3D-kleurkiezer (kleurkiezer.html) — kern
- **Three.js r0.160** via CDN importmap (unpkg) → **internet nodig** om de 3D te tonen.
- Realistische belichting: **RoomEnvironment/IBL** + zon + zachte schaduwen.
- **Herkleuren** (klik vlak of paneel): muren, **accentmuur** (los één muur), kozijn, deur, plafond, vloer.
- **Kamertypes**: Woonkamer / Slaapkamer / Keuken (buildWoonkamer/Slaapkamer/Keuken).
- **Vloertypes**: Planken / Visgraat / Tegel / Beton (canvas-textures).
- **Daglicht**: Ochtend / Middag / Avond → `setDaylight()` zet zon, lucht, achtergrond,
  **toneMappingExposure** en **envMapIntensity** per dagdeel.
- **Lichtkleur (Kelvin)**: schuif 2700–5000K → `setKelvin()` (kelvinRGB) kleurt binnenlicht + lampen.
- **Lampen gaan vanzelf aan in het donker** (Avond): `applyLamps()` leest `DAY[state.day].dark`.
  Lampen geregistreerd in `lampLights`/`lampGlows`, gereset in `buildRoom()`.
- Knoppen: Gemeubeld, Auto-draaien, Reset, **Download foto** (PNG, renderer heeft preserveDrawingBuffer), **Mee in offerte**.
- Keuken bevat: kastdeurtjes+handgrepen, **afzuigkap** boven het fornuis, **kraan** (chroom) boven de spoelbak, eiland+krukken, koelkast.
- Nederlandse details: **Rietveld-stoel** — ALLEEN woonkamer, warme neutrale kleuren
  (walnoot/salie/zand, GEEN rood/blauw/zwart). **Klompen** in alle kamers.
  Slaapkamer heeft een **staande lamp** + nachtkastlamp.
- **Gordijnen** (sinds laatste sessie): geplooide stofpanelen links/rechts van het raam +
  rail met knoppen. **Kleurbaar element** (target `gordijn`, `curtainMat`) — staat als 7e knop
  bij "Wat wil je kleuren?", zit in matsFor/highlight/setDaylight-envMap/colorSummary/reset.
  Onderdeel van de shell (altijd zichtbaar, los van Gemeubeld), dus in alle kamertypes.

## Verifiëren / draaien
- Statische site. Lokaal: `python3 -m http.server 8777 --directory sterkerverf-v2`,
  open `http://localhost:8777/kleurkiezer.html`. Gebruik een **cache-buster** (`?fresh=...`) bij herladen.
- Screenshots van WebGL: **Screen Recording** moet aanstaan voor Claude. **Zoom**-screenshots van het
  WebGL-canvas komen vaak **zwart** terug → gebruik volledige screenshots.
- Valkuil: `Object3D.position` is read-only → `mesh.position.set(...)`, niet via `Object.assign`.

## Claude Design-sync (loopt in een APARTE terminal-Claude-Code-sessie)
- Doel van de gebruiker: huisstijl koppelen aan **Claude Design** zodat die tool nieuwe on-brand
  pagina's/UI kan maken. `/design-sync` is eigenlijk voor React+`dist/`-componentbibliotheken;
  deze site is statische HTML/CSS → gekozen voor **"off-label tokens-only sync"** (eerlijk, niets verzonnen).
- Aangemaakt: Claude Design-project **"Auctaris"** (projectId `39145c0c-c8af-448e-80b0-88748c64a02b`).
  Naam is alleen intern in Claude Design — later te hernoemen, raakt de site niet.
- Lokaal toegevoegd: map **`ds-bundle/`** (styles.css entry met `@import` fonts/tokens/_ds_bundle.css,
  leeg `_ds_bundle.js`, `tokens/`, `fonts/`) + **`.design-sync/config.json`** (`tokensOnly:true`,
  `cssEntry:styles.css`, `globalName:SterkerVerf`). Validatie via een Python-script (geen Node op de Mac).
- **Status bij afsluiten:** bundle gebouwd, bezig met **valideren → daarna upload** naar Claude Design.
  Dit gebeurt in de terminal (`claude` in deze map), NIET in de desktop-app-chat. Bij hervatten:
  vraag de gebruiker of de upload geslaagd is, of laat de terminal-sessie het afmaken.
- Belangrijk: de gebruiker heeft `claude` CLI nu geïnstalleerd (`~/.local/bin`, in PATH via `~/.zshrc`).
  Snelkoppeling naar deze map staat op het **bureaublad** (alias, echte map blijft in Claude/Projects).

## NOG TE DOEN (openstaand)
1. **Meertaligheid** NL / EN / TR / FR (taalwissel over alle pagina's) — grootste openstaande taak
   (België/Frankrijk als doelgroep). Doe dit als aparte pass.
2. **Echte foto van Furkan** + **bedrijfsvideo** (over-ons heeft nu een placeholder/illustratie).
3. **Meer portfoliofoto's** (behangen is nu illustratie).
4. Optioneel: nog meer 3D-detail (gordijnen ✓ gedaan; nog mogelijk: tweede raam, meer varianten).
5. **Publiceren**: sleep de map `sterkerverf-v2` op https://app.netlify.com/drop, of upload de zip.
   (Oude link `effortless-bunny-16ae7c.netlify.app` = verouderde "Firmis"-versie; niet meer gebruiken.)
