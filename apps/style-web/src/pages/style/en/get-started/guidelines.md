---
title: Riktlinjer
layout: "@layouts/Page.astro"
---

# Övergripande riktlinjer

## Visa användaren vad som händer

Applikationen informerar användarna tydligt om vad som händer genom korrekt feedback inom rimlig tid.

## Ta användarens perspektiv

Applikationen följer konventioner från användarens verklighet så att denne känner igen sig i:

- Den konceptuella modellen i stort
- Uppsättningen av funktioner (applikationens urval av funktioner och design fokuserar på att lösa de viktigaste och mest använda uppgifterna för användarna)
- Hur uppgiften utförs
- Språk, fraser och terminologi. Information ges i en för användaren naturlig och logisk ordning.
- Grafisk design som t ex ikoner

## Informera så att användaren förstår

Säkerställ att instruktioner är tydliga och lätta att förstå genom att:

- Prata användarens språk. Använd samma terminologi som användarna gör. Undvik tekniskt språk.
- Beskriv det indataformat som krävs
- webbriktlinjer.se (Gör inte instruktioner beroende av sensoriska kännetecken)
- webbriktlinjer.se (Skriv välformulerade felmeddelanden så ökar chansen att användarna gör rätt)

## Ge användaren kontroll och frihet

Användaren har kontroll över applikationen. Användaren ska uppleva: ”Jag vet var jag är och vad jag kan göra” och det ska alltid finnas en utväg genom att användaren kan ångra och återställa.

## Var konsekvent i navigation, struktur och utformning

Informationen presenteras konsekvent för att underlätta igenkänning för användaren. Samma kommando eller åtgärd har samma effekt genom hela applikationen. Ord och situationer betyder alltid samma sak.

Standarder och konventioner för plattformen följs. Till exempel så följs utseendet på applikationen plattformens övergripande utseende, även om den kan ha sin egen stil. Genom att använda komponenter i KTH Style uppnås till stor del ett konsekvent utseende. Kvar är att bygga upp sidor och navigation så att det upplevs konsekvent för användaren.

Se webbriktlinjer.se (Var konsekvent i navigation, struktur och utformning)

## Förhindra att fel uppkommer

Applikationen hjälper användaren att undvika fel genom att:

- Ta bort möjligheter att göra fel, till exempel genom att vara så förlåtande som möjligt när det gäller indata (så länge det inte strider mot någon annan princip eller teknikalitet) men formatera och lagra datat på ett så tydligt och konsekvent sätt som möjligt. Exempel: Tillåt telefonnummer med ”space”, och ta bort det när du processar och lagrar datat.
- Gör det möjligt att ångra klick (se nedan)
- Ge möjlighet att ångra, korrigera eller bekräfta viktiga transaktioner som kan innebära riskabla förändringar (se nedan)

### Gör det möjligt att ångra klick

Ge i första hand användaren möjlighet att ångra åtgärden innan nedtryckningen upphör. Se webbriktlinjer.se (Gör det möjligt att ångra klick).

### Gör det möjligt att ångra, korrigera eller bekräfta vid viktiga transaktioner

Se webbriktlinjer.se (Ge möjlighet att ångra, korrigera eller bekräfta vid viktiga transaktioner).

Använd Dialog: Confirm modal (se Modaler) för att bekräfta viktiga transaktioner.

## Hjälp användaren att upptäcka, förstå och lösa problem

När det inte går att att förhindra att fel uppkommer (se ovan), hjälp användaren att rätta fel genom att:

- Visa var ett fel uppstått och beskriv det tydligt:

  - Följ webbriktlinjer.se (Visa var ett fel uppstått och beskriv det tydligt)
  - Avänd "Error alert" (se Alerts, tooltips) för att informera om att något har gått fel
  - Placera felmeddelandet överst på sidan. Samla där alla felmeddelanden så att användarna får en överblick över vad de måste göra för att korrigera felen.
  - Om flera fel har inträffat bör du ange i texten hur många fel användarna måste åtgärda för att komma vidare.
  - Markera också varje fel i anslutning till det fält där felet inträffat med röd text. Är det flera fält, markera också med en röd ram runt fälten.
  - Beskriv tydligt för användarna vad som har gått fel genom att: - Förklara vad som hänt; varför det blivit fel. Beskriv exakt det specifika problemet istället för att ge en generell beskrivning. - Föreslå konstruktivt hur användaren ska göra för att åtgärda felet.
    - Se webbriktlinjer.se (Ge förslag på hur fel kan rättas till)
  - Se ovan: Hur man informerar
  - Ange i sidans titel (title-elementet) att ett fel inträffat.

- Spara det som inte är fel. Se webbriktlinjer.se (Visa var ett fel uppstått och beskriv det tydligt/spara det som inte är fel).
- Testa om användaren kan förstå och rätta fel genom att utföra användningstest. Se .

## Hjälp användaren att känna igen sig så denne inte behöver hålla allt i minnet

Applikationen minimerar användarens minnesbelastning genom att göra objekt, åtgärder och alternativ synliga.

Användaren behöver inte komma ihåg information från en del av dialogen till en annan.

Instruktioner för användning av applikationen är synliga eller lätt åtkomliga när de kan behövas.

## Gör användningen flexibel och effektiv

Applikationen har funktioner som gör interaktionen så effektiv som möjligt för olika användargrupper. Det kan till exempel vara snabbkommandon för expertanvändare.

Användarna kan också anpassa frekventa funktioner för att kunna göra användningen effektivare.

## Sträva efter en design som är estetisk och minimalistisk

Informationen som presenteras för användaren är den information som användaren behöver (och inte mer) vid rätt tidpunkt och plats. Information som är irrelevant eller används sällan konkurrerar med den information som är viktig och gör den mindre synlig.

Designen understryker struktur och stödjer prioritering. Grafiska element är utvalda och designade med omsorg.

## Ge hjälp som är användbar

Online-hjälpen är tillgänglig, kontextkänslig och har en sökfunktion som är anpassad efter användarens uppgifter.

Uppbyggnaden av informationen och läsbarheten av texten är bra. Varje sektion är fristående. Instruktionerna listar konkreta steg som kan vidtas och är inte för omfattande.

Felmeddelanden länkar till den kontextkänsliga hjälpen. Även länkar mellan relaterade problem är tillgängliga.

## Se till att koden validerar

webbriktlinjer.se (Se till att koden validerar)
