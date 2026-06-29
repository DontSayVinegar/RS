---
title: Kryt pro IR senzory
description: Návrh a výroba krytu pro IR senzory a elektroniku pro chytrou slepeckou hůl.
slug: irkryt
order: 1
cover: ./smartstick.jpg
coverAlt: Chytrá hůl
gallery:
  - src: ./housingassemblycutcompressed.jpg
    alt: IR Housing
  - src: ./IR_firstiteration.jpg
    alt: First Iteration
  - src: ./first_iteration_exploded.jpeg
    alt: First Iteration Exploded
---

## O projektu

V rámci finálního týmového projektu na výměnném pobytu na Singapore University of Technology and Design jsem měl za úkol navrhnout kryt pro IR senzory naší chytré slepecké hole.

První iterace měla mnoho problémů. Od kolegů jsem neměl rozměry elektronických součástek, které do krytu měly patřit, takže jsem rozměry odhadoval.

![První iterace explodovaná](./first_iteration_exploded.jpeg)

Návrh se skládal z kolíku, který tvořil uložení s přesahem s holí. Ten se čepem nalisoval do hlavního těla dutého válcového krytu, který měl po stranách dva výstupky pro samotné IR senzory. Na tělo se čepy nalisovala tzv. čepice půlkulového tvaru.

Hlavní problém byl v čepech. Bylo těžké nadimenzovat čepy a otvory tak, aby do sebe pasovaly a zároveň držely. Čepy byly navíc tak malé, že měly tendenci prasknout i při menším zatížení. Materiál prvních tisků byl PLA.

![Nezdařilý první tisk](./IR_firstiteration.jpg)

Druhý návrh měl vyřešit problém smontovatelnosti. Do prvního návrhu bylo těžké vměstnat elektroniku, jelikož byl relativně uzavřený. Proto jsem u druhého návrhu ustoupil od „čepicového“ designu a rozhodl se tělo navrhnout jako rozpůlený válcový tvar.

![Druhý návrh](./druha_iterace.jpg)

Tento návrh se nedostal daleko, jelikož nevyužíval efektivně prostor a otevřená elektronika by nepůsobila dobře. Byl rychle nahrazen dalším návrhem.

Ten je druhému podobný, ale elektronika byla vložena takovým způsobem, který zaručoval minimální průměr válce. Nový návrh nevyužíval žádné čepy a místo toho byla většina spojů řešena pomocí vložených matic. U nich jsem došel k optimální vůli 0,2 mm.

![Třetí návrh](./housingassemblycutcompressed.jpg)

U prvního návrhu byl také problém s tiskem výstupků pro IR senzory. Jelikož se tiskly pod úhlem a na podpěrách, nevypadaly dobře a výsledek byl velmi nepřesný. Proto jsem se u třetího návrhu rozhodl tisknout výstupky zvlášť a připevnit je k hlavnímu tělu pomocí rybinového spoje. Jelikož se rybinový spoj musel na těle tisknout pod úhlem, nebyl příliš přesný, a nakonec jsme použili vteřinové lepidlo, aby vše lépe drželo.

Většina šroubů byla zvolena podle toho, co jsem měl k dispozici. Většinou šlo o M2.5 plus jeden inbusový šroub M5×40, který jsem našel ve šrotu.

Celkově finální design vyřešil problém rozebíratelnosti a v rámci možností držel docela dobře.
