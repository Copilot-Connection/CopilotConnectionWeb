import { contentfulClient } from "../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { EntryFieldTypes } from "contentful";

export interface Article {
    contentTypeId: "newsPost",
    fields: {
      title: EntryFieldTypes.Text
      content: EntryFieldTypes.RichText,
    }
  }

