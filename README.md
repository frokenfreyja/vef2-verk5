# Verkefni 5

Verkefni 5 snýst um að endurútfæra framenda úr [seinna hópverkefni í vefforritun 1, 2018](https://github.com/vefforritun/vef1-2018-h2-synilausn) með React.

## Fyrirlestrar

Fylgja skal [útliti sem gefið er í hópverkefni 2](https://github.com/vefforritun/vef1-2018-h2-synilausn/tree/master/utlit), og er grunnur að lausn uppsettur með Sass og búið er að færa einhvern hluta af útliti úr sýnilausn yfir.

Birta þarf upplýsingar úr `lectures.json` bæði á yfirlitssíðu og fyrir hvern og einn fyrirlestur. Lesa má nánar um [uppsetningu á json skrá í lýsingu á hópverkefni 2](https://github.com/vefforritun/vef1-2018-h2-synilausn#fyrirlestrag%C3%B6gn).

Titill skal vera „Fyrirlestrar“ fyrir forsíðu en titill fyrirlesturs fyrir hvern stakan fyrirlestur. Hver fyrirlestur skal svara á `/:slug`, setja skal upp routing með `react-router`.

Á forsíðu skal vera hægt að sía fyrirlestra eftir flokkum: `HTML`, `CSS` og `JavaScript`.

Fyrir hvern fyrirlestur þarf að birta efni úr `content` fylki fyrirlesturs. Útfæra þarf react component sem gerir þetta.

## Útfærsla

Gefinn er grunnur að „statísku“ API sem skilar gögnum og leyfir að merkja fyrirlestur sem kláraðann. Gögn um kláraða fyrirlestra skal geyma í `localStorage`.

Titil á síðu skal breyta með `react-helmet`.

Útfæra ætti fleiri en færri componenta, í sýnilausn eru t.d. útfærðir eftirfarandi components (þeir gætu verið fleiri):

* `filters`, birtir síur og sér um að viðhalda stöðu um hvaða síur séu virkar
* `header`, birtir haus síðu, titil, flokk og hugsanlega mynd
* `item`, tekur við fylki af efni fyrir fyrirlestur og skilar HTML elementum
* `lecture`, birtir fyrirlestur
* `lectures`, birtir lista af fyrirlestrum

Milli `filters` og `lectures` þarf að mynda tengls (senda föll á milli og láta foreldri sjá um stöðu) þ.a. þegar smellt er á síu fái `lectures` nýjan lista af síuuðum fyrirlestrum. Farið yfir í fyrirlestri 9.

og í `routes/` ættu að vera síður fyrir

* `home`, yfirlitssíða
* `lecture`, stakur fyrirlestur, má heita sama og component, myndi setja saman viðeigandi componenta, þ.m.t. `lecture` component
* `not-found`, 404 síða

Allar myndir sem þarf eru gefnar undir `public/img/`.

Ekki þarf að bæta við fleiri pökkum en eru í grunn að lausn.

Alls ekki ætti að nota neinar DOM aðferðir í lausn.

## Git og GitHub

Verkefni þetta er sett fyrir á GitHub og almennt ætti að skila því úr einka (private) repo nemanda. Nemendur geta fengið gjaldfrjálsan aðgang að einkarepos á meðan námi stendur, sjá https://education.github.com/.

Til að byrja er hægt að afrita þetta repo og bæta við á sínu eigin:

```bash
> git clone https://github.com/vefforritun/vef2-2019-v5.git
> cd vef2-2019-v5
> git remote remove origin # fjarlægja remote sem verkefni er í
> git remote add origin <slóð á repo> # bæta við í þínu repo
> git push -u origin master # ýta á nýtt origin og tracka branch
```

## Mat

* 10% – Snyrtilegur kóði, engar villur þegar `npm test` er keyrt
* 30% – Yfirlitssíða með síu
* 40% – Fyrirlestrarsíða útfærð með efni
* 10% – Hægt að skrá að fyrirlestur sér kláraður
* 10% – Verkefni uppsett á Heroku

## Sett fyrir

Verkefni sett fyrir í fyrirlestri fimmtudaginn 7. mars 2019.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags föstudaginn 22. mars 2019.

Skilaboð skulu innihalda:

* Slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo (sjá leiðbeiningar). Notendanöfn þeirra eru `freyrdanielsson`, `gunkol`, `kth130`
* Slóð á verkefni keyrandi á Heroku

## Einkunn

Sett verða fyrir sex minni verkefni þar sem fimm bestu gilda 6% hvert, samtals 30% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 15%, samtals 30% af lokaeinkunn.

Verkefnahluti gildir 60% og lokapróf gildir 40%. Ná verður *bæði* verkefnahluta og lokaprófi með lágmarkseinkunn 5.

---

> Útgáfa 0.1

| Útgáfa | Lýsing                            |
|--------|-----------------------------------|
| 0.1    | Fyrsta útgáfa                     |
| 0.2    | Bæta við mati um snyrtilegan kóða |
