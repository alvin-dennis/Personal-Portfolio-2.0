import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem().title("Hero").child(S.document().schemaType("hero").documentId("hero")),
      S.listItem().title("Skills").child(S.document().schemaType("skills").documentId("skills")),
      S.divider(),
      S.documentTypeListItem("experience").title("Experience"),
      S.documentTypeListItem("education").title("Education"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("projectCategory").title("Project Categories"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);
