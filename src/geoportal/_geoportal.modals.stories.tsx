import type { Meta, StoryObj } from "@storybook/react";
import SecondaryInfoModal from "./sachdatenabfrage-modals/EMobiModal";
import SecondaryInfoModalRad from "./sachdatenabfrage-modals/EMobiRadModal";
import SecondaryInfoModalTrinkwasser from "./sachdatenabfrage-modals/TrinkwasserModal";

const meta: Meta = {
  title: "Geoportal/Sachdatenabfrage",
};

export default meta;

export const EMobilität: StoryObj = {
  render: () => {
    return (
      <SecondaryInfoModal
        feature={{
          properties: {
            standort: "Hardt / Elisenhöhe",
            adresse: "Otto-Schell-Weg 18",
            status: "true",
            foto: "https://www.wuppertal.de/geoportal/emobil/autos/fotos/hardt_elisenhoehe.jpg",
            zusatzinfo: "Parkplatz Hardt / Elisenhöhe",
            bemerkung: "Erste Parkreihe nach der Einfahrt.",
            versatz: "1",
            vorhandene_stecker: "true",
            stecker1:
              "https://www.wuppertal.de/geoportal/emobil/images-autos/Schuko_plug ! 2 x Schuko Steckdose (3.7kW)",
            stecker2:
              "https://www.wuppertal.de/geoportal/emobil/images-autos/Type_2_mennekes ! 2 x Typ 2 Steckdose (22kW)",
            parkgebuehr:
              "Während des Ladevorgangs max. 4 Std. kostenfrei. Der Ladeplatz ist kein Parkplatz.",
            zugang1: "App (Ladepay)",
            zugang2: "Ladekarte (WSW eMobil flat)",
            zugang3: "Ladekarte für den Verbund ladenetz.de",
            anzahl: "4",
            abrechnung:
              "https://www.wsw-online.de/fileadmin/Energie-Wasser/Nachhaltigkeit/Klimafonds_Antrag/2016_07_Preisblatt-WSW_eMOBIL_FLAT.pdf",
            offen:
              "https://www.wuppertal.de/geoportal/emobil/images-autos/pikto_24-7.png",
            strom: "AC",
            betreiber: "WSW Energie & Wasser AG - eMobilität",
            betreiberadresse: "Bromberger Straße 39-41",
            betreiberort: "42281 Wuppertal",
            betreiberhomepage:
              "https://www.wsw-online.de/wsw-energie-wasser/privatkunden/nachhaltigkeit/emobilitaet/",
            betreiberemail: "emobil@wsw-online.de",
            betreibertelefon: "+49-202-5695140",
            gruen:
              "https://www.wuppertal.de/geoportal/emobil/images-autos/pikto_gruener_strom.png",
            signatur: "svg-signaturen/pikto_e-auto_blau_freigestellt_2.svg",
            signatur2: "svg-signaturen/pikto_e-auto_blau_freigestellt_3.svg",
          },
        }}
        setOpen={() => {}}
      />
    );
  },
};

export const EMobilitätRad: StoryObj = {
  render: () => {
    return (
      <SecondaryInfoModalRad
        feature={{
          properties: {
            standort: "Bauhaus Wuppertal Barmen - Auf Lichtscheid",
            adresse: "Oberbergische Straße 200",
            status: "true",
            foto: "https://www.wuppertal.de/geoportal/emobil/raeder/fotos/akku_bauhaus_lichtscheid.jpg",
            bezirk: "6 - Oberbarmen",
            zusatzinfo: "Erreichbar über den Radwanderweg R4a.",
            detailbeschreibung: "Erreichbar über die Nordbahntrasse",
            bemerkung: "Ladeplätze und Radbügel links neben dem Haupteingang.",
            verfuegbar: "Es kann keine Aussage darüber getroffen werden, ob die Station momentan besetzt ist.",
            anzahl_plaetze: "8",
            anzahl_ladepunkte: "6",
            ladekosten: "Zurzeit keine",
            ladebox_zu: "https://www.wuppertal.de/geoportal/emobil/images-autos/pikto_akku_ladebox.png",
            ladebox_anz: "Es sind 3 Schließfächer mit jeweils 2 Steckdosen vorhanden.",
            ladebox_pfand: "Sie benötigen eine der folgenden Münzen: 1€ -- 2€",
            versatz: "1",
            vorhandene_stecker: "true",
            typ1:
              "Schuko (3.7kW, 16A, 230V)",
            typ2:
              "Schoko (3.7kW, 16A, 230V)",
            zugang1: "Freier Zugang",
            zugang2: "Zugang 2",
            zugang3: "Zugang 3",
            anzahl: "2",
            abrechnung:
              "https://www.wsw-online.de/fileadmin/Energie-Wasser/Nachhaltigkeit/Klimafonds_Antrag/2016_07_Preisblatt-WSW_eMOBIL_FLAT.pdf",
            offen:
              "Mo-Sa 7.00-20.00 Uhr",
            betreiber: "Bauhaus",
            betreiberadresse: "Oberbergische Straße 200",
            betreiberort: "42285 Wuppertal",
            betreiberhomepage:
              "https://www.wsw-online.de/wsw-energie-wasser/privatkunden/nachhaltigkeit/emobilitaet/",
            betreiberemail: "emobil@wsw-online.de",
            betreibertelefon: "+49-202-5695140",
            gruen:
              "https://www.wuppertal.de/geoportal/emobil/images-autos/pikto_gruener_strom.png",
            signatur: "svg-signaturen/pikto_e-auto_blau_freigestellt_2.svg",
            signatur2: "svg-signaturen/pikto_e-auto_blau_freigestellt_3.svg",
          },
        }}
        setOpen={() => {}}
      />
    );
  },
};

export const Trinkwasser: StoryObj = {
  render: () => {
    return (
      <SecondaryInfoModalTrinkwasser
        feature={{
          properties: {
            //winterruhe: "!!!Achtung alle Trinkwasserbrunnen im Freien befinden sich in Winterruhe",
            geographicidentifier: "Test - Breslauer Straße",
            adresse: "Breslauer Str.",
            //foto: "https://www.wuppertal.de/geoportal/Trinkwasserbrunnen/fotos/Breslauer.jpg",
            foto: "https://www.wuppertal.de/geoportal/Trinkwasserbrunnen/fotos/Korzert.jpg",
            beschreibung: "Vor dem Zugang zum Spielplatz am Bergischen Plateau",
            betreiber: "Stadt Wuppertal - WAW",
            offen: "https://www.wuppertal.de/geoportal/emobil/images-autos/pikto_24-7.png",
            betreiber_url:
              "https://www.wuppertal.de/microsite/wasserversorgung/index.php",
            signatur: "svg-signaturen/tw_outdoor.svg",
            //massnahmen: "Baum, Haus",
            //dauerlaeufer: "Dies ist ein Dauerläufer.",
            frei: "https://www.wuppertal.de/geoportal/Trinkwasserbrunnen/pikto_barrierefrei.png",
          },
        }}
        setOpen={() => {}}
      />
    );
  },
};