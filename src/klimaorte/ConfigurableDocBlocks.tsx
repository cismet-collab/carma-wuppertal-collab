import React from "react";
import parse, { domToReact } from "html-react-parser";
import Markdown from "react-markdown";
//import LicenseLuftbildKarte from "./wuppertal/LicenseLuftbildkarte";
import LicenseLuftbildKarte from "react-cismap/topicmaps/wuppertal/LicenseLuftbildkarte";
import LicenseStadtplanTagNacht from "react-cismap/topicmaps/wuppertal/LicenseStadtplanTagNacht";
// import { faqEntriesFactory } from "../tools/uiHelper";
import { faqEntriesFactory } from "react-cismap/tools/uiHelper";
import GenericHelpTextForMyLocation from "react-cismap/topicmaps/docBlocks/GenericHelpTextForMyLocation";
import InKartePositionieren from "react-cismap/topicmaps/docBlocks/InKartePositionieren";
import Einstellungen from "react-cismap/topicmaps/docBlocks/Einstellungen";
import KartendarstellungDerFachobjekte from "react-cismap/topicmaps/docBlocks/KartendarstellungDerFachobjekte";
import FachobjekteAuswaehlenUndAbfragen from "react-cismap/topicmaps/docBlocks/FachobjekteAuswaehlenUndAbfragen";
import CustomizableComp from "react-cismap/topicmaps/docBlocks/CustomizableComp";

const DOCBLOCKSTYLES = {
  TEXT: "TEXT",
  HTML: "HTML",
  REACTCOMP: "REACTCOMP",
  MARKDOWN: "MARKDOWN",
  FAQS: "FAQS",
  DOCBLOCK: "DOCBLOCK",
  LICENSE_LBK: "LICENSE_LBK",
  LICENSE_STADTPLAN: "LICENSE_STADTPLAN",
  MEINSTANDORT: "MEINSTANDORT",
  INKARTEPOSITIONIEREN: "INKARTEPOSITIONIEREN",
  EINSTELLUNGEN: "EINSTELLUNGEN",
  KARTENDARSTELLUNGDERFACHOBJEKTE: "KARTENDARSTELLUNGDERFACHOBJEKTE",
  FACHOBJEKTEAUSWAEHLENUNDABFRAGEN: "FACHOBJEKTEAUSWAEHLENUNDABFRAGEN",
  CUSTOMIZABLECOMP: "CUSTOMIZABLECOMP",
};

type BlockConfig = {
  type: keyof typeof DOCBLOCKSTYLES;
  style?: React.CSSProperties;
  text?: string;
};

interface ConfigurableDocBlocksConfig {
  configs: BlockConfig[];
  style?: React.CSSProperties;
}

export const ConfigurableDocBlocks = ({
  configs = [
    {
      type: "TEXT",
      style: {
        color: "black",
      },
      text: "<ConfigurableDocBlocks/> ohne Konfiguration",
    },
  ],
  style,
}: ConfigurableDocBlocksConfig) => {
  const blocks = [];

  for (const block of configs) {
    // @ts-expect-error: TODO: fix type
    blocks.push(getBlock4Config(block));
  }

  return /*#__PURE__*/ React.createElement(
    "div",
    {
      style: style,
    },
    blocks
  );
};

const getBlock4Config = (block, key) => {
  switch (block.type) {
    case DOCBLOCKSTYLES.TEXT:
      //params: text, style
      return /*#__PURE__*/ React.createElement(
        "div",
        {
          key: key,
          style: block.style,
        },
        block.text
      );

    case DOCBLOCKSTYLES.MARKDOWN:
      //params: md, style
      return /*#__PURE__*/ React.createElement(
        "div",
        {
          key: key,
          style: block.style,
        },
        /*#__PURE__*/ React.createElement(Markdown, {
          escapeHtml: false,
          source: block.content,
        })
      );

    case DOCBLOCKSTYLES.LICENSE_LBK:
      return /*#__PURE__*/ React.createElement(LicenseLuftbildKarte, null);

    case DOCBLOCKSTYLES.LICENSE_STADTPLAN:
      return /*#__PURE__*/ React.createElement(LicenseStadtplanTagNacht, null);

    case DOCBLOCKSTYLES.MEINSTANDORT:
      return /*#__PURE__*/ React.createElement(
        GenericHelpTextForMyLocation,
        null
      );

    case DOCBLOCKSTYLES.INKARTEPOSITIONIEREN:
      return /*#__PURE__*/ React.createElement(InKartePositionieren, null);

    case DOCBLOCKSTYLES.EINSTELLUNGEN:
      return /*#__PURE__*/ React.createElement(Einstellungen, null);

    case DOCBLOCKSTYLES.KARTENDARSTELLUNGDERFACHOBJEKTE:
      return /*#__PURE__*/ React.createElement(
        KartendarstellungDerFachobjekte,
        null
      );

    case DOCBLOCKSTYLES.FACHOBJEKTEAUSWAEHLENUNDABFRAGEN:
      return /*#__PURE__*/ React.createElement(
        FachobjekteAuswaehlenUndAbfragen,
        null
      );

    case DOCBLOCKSTYLES.DOCBLOCK:
      //params: docBlockConfigs, style, innerStyle
      return /*#__PURE__*/ React.createElement(
        "div",
        {
          style: block.style,
        },
        /*#__PURE__*/ React.createElement(ConfigurableDocBlocks, {
          style: block.innerStyle,
          configs: block.docBlockConfigs,
          key: key,
        })
      );

    case DOCBLOCKSTYLES.HTML:
      //params: docBlockConfigs, style, innerStyle
      if (block.replaceConfig === undefined) {
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            key: `DOCBLOCKSTYLES.HTML.${key}`,
            style: block.style,
          },
          parse(block.content)
        );
      } else {
        const options = {
          replace: ({ attribs, children }) => {
            if (!attribs) return;
            const replacementInfo = block.replaceConfig[attribs.id];

            if (replacementInfo !== undefined) {
              // return tReact.createElement(LicenseLuftbildKarte, {});
              return getBlock4Config(replacementInfo, key);
            } else {
              return domToReact(children, options);
            } // if (Object.keys(block.replaceConfig).indexOf()
            // return React.createElement(LicenseLuftbildKarte, {});
          },
        };
        const x = parse(block.content, options);
        return x;
      }

    case DOCBLOCKSTYLES.REACTCOMP:
      //params: content
      return block.content;

    case DOCBLOCKSTYLES.CUSTOMIZABLECOMP:
      //params: customizationKey, customizationComponent
      return /*#__PURE__*/ React.createElement(CustomizableComp, {
        key: block.customizationKey,
        customizationComponent: block.customizationComponent,
        customizationKey: block.customizationKey,
      });

    case DOCBLOCKSTYLES.FAQS: {
      const showOnSeperatePage = false;
      let i = 0;

      for (const faqConfig of block.configs) {
        let key = `DOCBLOCKSTYLES.FAQS.${i}`;

        if (faqConfig.contentBlockConf !== undefined) {
          faqConfig.content = getBlock4Config(faqConfig.contentBlockConf, key);
        }

        i++;
      }

      const { linkArray, entryArray } = faqEntriesFactory(
        showOnSeperatePage,
        block.configs
      );
      return /*#__PURE__*/ React.createElement(
        "div",
        {
          key: `DOCVBLOCKFAQ.${key}`,
          style: block.style,
          name: "help",
        },
        /*#__PURE__*/ React.createElement(
          "font",
          {
            size: "3",
          },
          linkArray
        ),
        entryArray
      );
    }

    default:
      break;
  }
};
