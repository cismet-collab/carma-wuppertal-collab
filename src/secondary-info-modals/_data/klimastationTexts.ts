const klimastationTexts = {
  allgemeineInformationen: {
    station:
      "Der Datensatz umfasst die Wetter- und Bodenmessdaten der Klimastation des Wuppertaler Ganztagsgymnasiums Johannes Rau auf dem Gelände der Station Natur und Umwelt, in Betrieb seit dem 10.03.2022. Erfasst werden im ca. 10-Minuten-Takt Lufttemperatur, Luftfeuchte, Niederschlag, Windgeschwindigkeit, Windrichtung, Luftdruck, Globalstrahlung sowie Oberflächen- und Bodentemperatur (20 cm Tiefe). Die Station ist Teil des bundesweiten (und international erweiterten) Klimastations-Netzwerks der Research Group for Earth Observation (klima.rgeo.de, PH Heidelberg/Universität Heidelberg), das aus dem Projekt KlimaSensitiv hervorgegangen ist.",
    kontext:
      "Im Rahmen des 2021 gestarteten Klimastationsnetzwerks der UNESCO-Projektschulen wurde an mehr als 10 Standorten der Aufbau von Messstationen initiiert, um Klimadaten für Unterrichtsprojekte nutzbar zu machen. Das Netzwerk wird von der Bundeskoordination der UNESCO-Projektschulen geleitet, wissenschaftlich vom UNESCO-Lehrstuhl der Pädagogischen Hochschule Heidelberg begleitet. Eine dieser Stationen wird seit dem 10. März 2022 vom Wuppertaler Ganztagsgymnasium Johannes Rau auf dem Gelände der Station Natur und Umwelt im Stadtbezirk Cronenberg betrieben. Die gesammelten Daten fließen vor allem in den naturwissenschaftlichen Unterricht und das Fach Erdkunde ein und helfen, lokale Naturbedingungen im Jahresverlauf sowie den globalen Klimawandel besser zu verstehen. Ergänzt wird dies durch eine Kooperation mit dem Lehrstuhl für Geographiedidaktik der Bergischen Universität Wuppertal. Die Daten stehen sowohl dem Ganztagsgymnasium Johannes Rau als auch der Station Natur und Umwelt für Unterricht und Veranstaltungen zur Verfügung und fördern das Verständnis klimatischer Entwicklungen und Zusammenhänge. Öffentlich abrufbar sind die auf dem Gelände erhobenen Messwerte über die Website der Research Group for Earth Observation (rgeo) der Abteilung Geographie der Pädagogischen Hochschule Heidelberg unter ",
    // Text nach dem Link (siehe kontext).
    kontextLinkLabel: "klima.rgeo.de/stations/de_104_ups_wuppertal",
    kontextAfterLink: ".",
    links: [
      {
        phrase: "Station Natur und Umwelt",
        url: "https://www.wuppertal.de/kultur-bildung/stnu/qq-stnu.php",
      },
    ],
  },
  hinweise: {
    // Alle drei Hinweise beschreiben Eigenschaften der Rohdaten von
    // klima.rgeo.de und sind im Erzeuger der Archivdateien dokumentiert
    // (_in/klimastation_historical/klimastation_historical.js).
    niederschlag:
      "Beim Niederschlag zeigt das Diagramm echte Summen je Zeitschritt. Sie werden aus dem Zählerstand der Station berechnet, weil die API auch Niederschlagswerte mittelt und damit deutlich zu kleine Mengen liefern würde.",
    windrichtung:
      "Die Pfeile zeigen in die Richtung, in die der Wind weht: ein Pfeil nach unten bedeutet Nordwind. Jeder Pfeil mittelt die Spanne bis zum nächsten, beim Hineinzoomen werden es mehr. Ein offener Kreis bedeutet, dass gemessen wurde, sich aber keine eindeutige Richtung ergibt (etwa bei Windstille), ein blasser Punkt steht für eine Spanne ganz ohne Messwert.",
    zeitstempel:
      "Alle Zeitstempel sind deutsche Ortszeit ohne Zeitzonenangabe, so wie die Station sie liefert. Bei der Zeitumstellung fehlt im Frühjahr eine Stunde, im Herbst treten zwei Stunden mit gleicher Uhrzeit auf.",
    puffer:
      "Die Messwerte werden von cismet zwischengespeichert und über die Kartenplattform ausgeliefert, weil die Schnittstelle von klima.rgeo.de keine direkten Abfragen aus dem Browser erlaubt.",
  },
};

export default klimastationTexts;
