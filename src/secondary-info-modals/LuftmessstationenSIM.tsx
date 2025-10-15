import React, { type ComponentType } from "react";
import type { ChartOptions } from "chart.js";
import SecondaryInfoPanelSection from "react-cismap/topicmaps/SecondaryInfoPanelSection";
import SecondaryInfo from "react-cismap/topicmaps/SecondaryInfo";
import { opendataLinkSections } from "../luftmessstationen/OpendataLinkSections";
import {
  getLastYearMeasurements,
  getLastYearMinus1Measurements,
  getStatus4Value,
  LOOKUP,
  MONTHS,
} from "../luftmessstationen/helper";

import Color from "color";
import Icon from "react-cismap/commons/Icon";

import { SecondaryInfoFooter } from "../luftmessstationen";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

type WindowSize = { width: number; height: number };

type FooterProps = {
  close: () => void;
  version: string;
  hintergrundKartenAttribution?: string | JSX.Element;
  applicationName?: string;
  skipTeilzwilling?: boolean;
};

type InfoPanelProps = {
  feature?: unknown;
  setOpen?: (open: boolean) => void;
  Footer?: ComponentType<FooterProps>;
  versionString?: string;
  reactCismapVersion?: string;
  inStorybook?: boolean;
  windowSize?: WindowSize;
  close?: () => void;
};


const InfoPanel: React.FC<InfoPanelProps> = ({
  feature = {},
  //setOpen = (b: boolean) => undefined,
  Footer = SecondaryInfoFooter,
  versionString = "???",
  reactCismapVersion = "???",
  inStorybook = false,
  windowSize,
  close = () => {},
}) => {
  const selectedFeature = feature as { properties?: any };
  const station = selectedFeature?.properties as any;
  console.log("station", station);

  const chartOptions: ChartOptions<"bar"> = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `${context.formattedValue}` as string;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          maxTicksLimit: 4,
        },
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore TS6133: 'footer' is declared but its value is never read.
  const footer = (
    <div style={{ fontSize: "11px" }}>
      <div>
        <b>
          {document.title} v{versionString}
        </b>
        :{" "}
        <a href="https://cismet.de/" target="_cismet">
          cismet GmbH
        </a>{" "}
        auf Basis von{" "}
        <a href="http://leafletjs.com/" target="_more">
          Leaflet
        </a>{" "}
        und{" "}
        <a href="https://cismet.de/#refs" target="_cismet">
          cids | react-cismap v{reactCismapVersion}
        </a>{" "}
        |{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://cismet.de/datenschutzerklaerung.html"
        >
          Datenschutzerklärung (Privacy Policy)
        </a>
      </div>
    </div>
  );

  if (station !== undefined) {
    const foto = station?.foto;

    let minHeight4MainSextion: number | undefined = undefined;
    if (foto !== undefined) {
      minHeight4MainSextion = 250;
    }

    // --- value and outage counter and avg of the last 10 years
    let valueCounter = 0;
    let outageCounter = 0;
    const avgs: Record<string, number[]> = JSON.parse(
      JSON.stringify(station?.mittelwerte)
    );
    const last12ChartData: Array<[string, number | null]> = [];

    const last12Colors: Array<Color | null> = [];
    const avgsChartData: Array<[string, number[]]> = [];
    const avgsColors: Color[] = [];
    for (const year of Object.keys(station.werte)) {
      const yearValues = station.werte[year];
      for (let i = 0; i < Math.min(yearValues.length, 12); ++i) {
        if (yearValues[i] === -9999) {
          outageCounter++;
        } else {
          valueCounter++;
        }
      }
    }

    let last12: Array<{ year: number; index: number; value: number | -9999 }> | undefined;

    if (station?.werte && Object.keys(station?.werte).length > 0) {
      // --- measurements of the last 12 months
      const gym = getLastYearMeasurements(station as unknown as any) as
        | { values: number[]; year: string | number }
        | undefined;
      const lastYearValues = gym?.values;
      const lastYear = Number(gym?.year ?? new Date().getFullYear());
      const lastYearM1Values = getLastYearMinus1Measurements(
        station as unknown as any
      ) as number[] | undefined;

      const twoYearVals: Array<{ year: number; index: number; value: number }> = [];
      if (lastYearM1Values) {
        let index = 0;
        for (const value of lastYearM1Values) {
          twoYearVals.push({ year: lastYear - 1, index, value });
          index++;
        }
      }
      if (lastYearValues) {
        let index = 0;
        for (const value of lastYearValues) {
          twoYearVals.push({ year: lastYear, index, value });
          index++;
        }
      }

      last12 = twoYearVals.slice(Math.max(twoYearVals.length - 12, 0));

      // --- avg of the last 10 years means delete the first n values
      //     where n=count of keys in werte-10
      const years = Object.keys(station.werte);
      const currentYear = new Date().getFullYear();

      for (const year of years) {
        if (parseInt(year, 10) < currentYear - 10) {
          delete avgs[year];
        }
      }

      // ---create the chart objects

      for (const entry of last12) {
        const key = `${entry.year} ${MONTHS[entry.index].shortname}`;
        if (entry.value !== -9999) {
          last12ChartData.push([key, entry.value]);
          last12Colors.push(new Color(LOOKUP[getStatus4Value(entry.value)].color).fade(0.5));
        } else {
          last12ChartData.push([key, null]);
          last12Colors.push(null);
        }
      }

      for (const year of Object.keys(avgs)) {
        avgsChartData.push([year, avgs[year]]);
        const firstVal = avgs[year]?.[0] ?? 0;
        avgsColors.push(new Color(LOOKUP[getStatus4Value(firstVal)].color).fade(0.5));
      }
    }

    const subSections: JSX.Element[] = [];
    const legend: JSX.Element = (
      <div style={{ fontSize: "90%", textAlign: "center" }}>
        <div>
          <span style={{ whiteSpace: "nowrap" }}>
            <Icon style={{ color: LOOKUP.unauffaellig.color }} name="square" />{" "}
            unauffällig {"(≦ 35)"}
          </span>
          <span
            style={{ whiteSpace: "nowrap", marginLeft: 10, marginRight: 10 }}
          >
            <Icon style={{ color: LOOKUP.auffaellig.color }} name="square" />{" "}
            auffällig {"(> 35)"}
          </span>
          {(windowSize?.width ?? 0) < 463 && <br />}
          <span style={{ whiteSpace: "nowrap" }}>
            <Icon style={{ color: LOOKUP.warnend.color }} name="square" />{" "}
            warnend {"(> 40)"}
          </span>
        </div>
        <div style={{ fontSize: "80%" }}> Messwerte in µg/m³</div>
      </div>
    );
    if (station?.bis === undefined) {
      subSections.push(
        <SecondaryInfoPanelSection
          key="last12"
          bsStyle="info"
          header={"NO₂-Messwerte der letzten 12 Monate"}
        >
          <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
            {legend}
            <div
              style={{
                height: "300px",
                lineHeight: "300px",
                width: "100%",
              }}
            >
              <Bar
                data={{
                  labels: last12ChartData.map((item) => item[0]),
                  datasets: [
                    {
                      data: last12ChartData.map((item) => item[1]),
                      backgroundColor: last12Colors.map((c) =>
                        c ? c.rgb().alpha(0.5).string() : null
                      ) as any,
                      borderColor: last12Colors.map((c) =>
                        c ? c.rgb().alpha(0.5).string() : null
                      ) as any,
                    },
                  ],
                }}
                options={chartOptions}
              />
            </div>
          </div>
        </SecondaryInfoPanelSection>
      );
    }
    if (Object.keys(avgsChartData).length > 0) {
      subSections.push(
        <SecondaryInfoPanelSection
          key="average10"
          bsStyle="warning"
          header={"NO₂-Jahresmittelwerte der letzten zehn Kalenderjahre"}
        >
          <div style={{ fontSize: "115%", padding: "10px", paddingTop: "0px" }}>
            {legend}
            <div
              style={{
                height: "300px",
                lineHeight: "300px",
                width: "100%",
              }}
            >
              <Bar
                data={{
                  labels: avgsChartData.map((item) => item[0]),
                  datasets: [
                    {
                      data: avgsChartData.map((item) => item[1][0]),
                      backgroundColor: avgsColors.map((c) => c.rgb().alpha(0.5).string()) as any,
                      borderColor: avgsColors.map((c) => c.rgb().alpha(0.5).string()) as any,
                    },
                  ],
                }}
                options={chartOptions}
              />
            </div>
            {/* <pre>{JSON.stringify(avgs, null, 2)}</pre> */}
          </div>
        </SecondaryInfoPanelSection>
      );
    }

    let stationsaktivitaet;
    const twothousandandeight = new Date("2008-01-01");

    if (station?.bis && new Date(station.bis) < twothousandandeight) {
      //Fall 1
      stationsaktivitaet = (
        <div>
          <b>Stationsaktivität:</b>
          <p>
            Von {new Date(station?.von).toLocaleDateString()} bis{" "}
            {new Date(station?.bis).toLocaleDateString()} generierte diese
            Station NO₂-Messwerte.
            {opendataLinkSections[0]}
          </p>
        </div>
      );
    } else if (
      new Date(station?.von) < twothousandandeight &&
      station?.bis &&
      new Date(station.bis) >= twothousandandeight
    ) {
      //Fall 2
      stationsaktivitaet = (
        <div>
          <b>Stationsaktivität:</b>
          <p>
            Von {new Date(station?.von).toLocaleDateString()} bis{" "}
            {new Date(station?.bis).toLocaleDateString()} generierte diese
            Station insgesamt {valueCounter} NO₂-Messwerte (Ausfälle und
            Messwerte vor 1.1.2008 nicht berücksichtigt).
            {opendataLinkSections[1]}
          </p>
        </div>
      );
    } else if (
      new Date(station?.von) >= twothousandandeight &&
      station?.bis !== undefined
    ) {
      //Fall 3
      stationsaktivitaet = (
        <div>
          <b>Stationsaktivität:</b>

          <p>
            Von {new Date(station?.von).toLocaleDateString()} bis{" "}
            {new Date(station?.bis).toLocaleDateString()} generierte diese
            Station insgesamt {valueCounter} NO₂-Messwerte (Ausfälle nicht
            berücksichtigt).
            {opendataLinkSections[2]}
          </p>

          <b>Messausfälle:</b>
          {outageCounter > 0 && (
            <p>
              Diese Messstation generierte an {outageCounter}{" "}
              {outageCounter === 1 ? "Monat" : "Monaten"} einen Messausfall.
              Damit besitzt sie eine Zuverlässigkeit von{" "}
              {(
                Math.round(
                  (valueCounter / (valueCounter + outageCounter)) * 1000
                ) / 10
              ).toLocaleString()}
              %.
            </p>
          )}
          {outageCounter === 0 && (
            <p>
              Diese Messstation lieferte in jedem Monat der Stationsaktivität
              einen NO₂-Messwert. Damit liegt bisher kein Messausfall vor.
            </p>
          )}
        </div>
      );
    } else if (
      new Date(station?.von) >= twothousandandeight &&
      station?.bis === undefined
    ) {
      //Fall 3.5
      stationsaktivitaet = (
        <div>
          <b>Stationsaktivität:</b>

          <p>
            Seit {new Date(station?.von).toLocaleDateString()} generierte diese
            Station {valueCounter} NO₂-Messwerte (Ausfälle nicht
            berücksichtigt).
            {opendataLinkSections[3]}
          </p>

          <b>Messausfälle:</b>
          {outageCounter > 0 && (
            <p>
              Diese Messstation generierte an {outageCounter}{" "}
              {outageCounter === 1 ? "Monat" : "Monaten"} einen Messausfall.
              Damit besitzt sie eine Zuverlässigkeit von{" "}
              {(
                Math.round(
                  (valueCounter / (valueCounter + outageCounter)) * 1000
                ) / 10
              ).toLocaleString()}
              %.
            </p>
          )}
          {outageCounter === 0 && (
            <p>
              Diese Messstation lieferte in jedem Monat der Stationsaktivität
              einen NO₂-Messwert. Damit liegt bisher kein Messausfall vor.
            </p>
          )}
        </div>
      );
    } else if (
      new Date(station?.von) < twothousandandeight &&
      station?.bis === undefined
    ) {
      //Fall 4
      stationsaktivitaet = (
        <div>
          <b>Stationsaktivität:</b>
          <p>
            Seit {new Date(station?.von).toLocaleDateString()} generierte diese
            Station {valueCounter} NO₂-Messwerte (Ausfälle und Messwerte vor
            1.1.2008 nicht berücksichtigt).
          </p>

          {opendataLinkSections[1]}
        </div>
      );
    } else {
      //Fall 5
      stationsaktivitaet = (
        <div>
          <b>Stationsaktivität:</b>

          {station?.bis !== undefined && (
            <p>
              Von {new Date(station?.von).toLocaleDateString()} bis{" "}
              {new Date(station?.bis).toLocaleDateString()} generierte diese
              Station insgesamt {valueCounter} NO₂-Messwerte (Ausfälle nicht
              berücksichtigt).
            </p>
          )}
          {station?.bis === undefined && (
            <p>
              Seit {new Date(station?.von).toLocaleDateString()} generierte
              diese Station {valueCounter} NO₂-Messwerte (Ausfälle nicht
              berücksichtigt).
            </p>
          )}
          <b>Messausfälle:</b>
          {outageCounter > 0 && (
            <p>
              Diese Messstation generierte an {outageCounter}{" "}
              {outageCounter === 1 ? "Monat" : "Monaten"} einen Messausfall.
              Damit besitzt sie eine Zuverlässigkeit von{" "}
              {(
                Math.round(
                  (valueCounter / (valueCounter + outageCounter)) * 1000
                ) / 10
              ).toLocaleString()}
              %.
            </p>
          )}
          {outageCounter === 0 && (
            <p>
              Diese Messstation lieferte in jedem Monat der Stationsaktivität
              einen NO₂-Messwert. Damit liegt bisher kein Messausfall vor.
            </p>
          )}
          {opendataLinkSections[1]}
        </div>
      );
    }

    return (
      <SecondaryInfo
        visible={inStorybook ? true : undefined}
        defaultContextValues={
          inStorybook ? { windowSize: { width: 800, height: 1000 } } : {}
        }
        titleIconName="info-circle"
        title={"Datenblatt: Messstation für Stickstoffdioxid (NO₂)"}
        mainSection={
          <div style={{ width: "100%", minHeight: minHeight4MainSextion }}>
            {foto !== undefined && (
              <div
                style={{
                  textAlign: "center",
                  float: (windowSize?.width ?? 0) < 500 ? undefined : "right",
                }}
              >
                <img
                  alt="Bild"
                  style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    horizontalAlignment: "center",
                    paddingBottom: "5px",
                  } as any}
                  src={foto}
                  width="250"
                />
              </div>
            )}
            <div
              style={{
                fontSize: "115%",
                padding: "10px",
                paddingTop: "0px",
              }}
            >
              <div>
                <b>Adresse:</b>

                <p>
                  {station?.strasse} {station?.hausnummer}{" "}
                  {station?.zusatzinfo && <span>({station?.zusatzinfo})</span>}
                </p>

                {stationsaktivitaet}
              </div>
            </div>
          </div>
        }
        subSections={subSections}
        footer={<Footer version={versionString} close={close} />}
      />
    );
  } else {
    return null;
  }
};
export default InfoPanel;
