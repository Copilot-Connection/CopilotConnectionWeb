import { contentfulClient } from "../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { EntryFieldTypes } from "contentful";

export interface CopilotArticle {
    contentTypeId: "copilot",
    fields: {
      title: EntryFieldTypes.Text,
      subTitle: EntryFieldTypes.Text,
      postDate: EntryFieldTypes.Date,
      intro: EntryFieldTypes.RichText,
      whoIsItForList: EntryFieldTypes.Text,
      whoIsItFor: EntryFieldTypes.Text,
      whatDoesItDo: EntryFieldTypes.RichText,
      howToGetItAndUseIt: EntryFieldTypes.RichText,
      hwoIsItLicensed: EntryFieldTypes.RichText,
      examples: EntryFieldTypes.RichText,
      usefulLinks: EntryFieldTypes.RichText,
      relatedCopilots: EntryFieldTypes.RichText
    }
  }

