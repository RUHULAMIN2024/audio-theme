import { produce } from "immer";

export const themeSwitch = (theme = "", attributes) =>
  produce(attributes, (draft) => {
    draft["theme"] = theme;

    switch (theme) {
      case "theme1":
        draft["styles"]["container"]["bg"] = {
          color: "linear-gradient(135deg, #581c87 0%, #312e81 100%)",
          type: "gradient",
          gradient: "linear-gradient(135deg, #581c87 0%, #312e81 100%)",
        };

        draft["styles"]["container"]["border"] = {
          width: "",
          style: "solid",
          color: "",
        };
        draft["styles"]["content"]["title"]["typo"]["fontSize"] = {
          desktop: "1.25rem",
          tablet: "1.25rem",
          mobile: "1.25rem",
        };
        draft["styles"]["content"]["title"]["color"] = "#ffffff";
        draft["styles"]["content"]["artist"]["typo"]["fontSize"] = {
          desktop: "0.875rem",
          tablet: "0.875rem",
          mobile: "0.875rem",
        };
        draft["styles"]["content"]["artist"]["color"] = "#a5b4fc";

        break;
      case "theme2":
        draft["styles"]["container"]["bg"] = {
          color:
            "linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)",
          type: "gradient",
          gradient:
            "linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)",
        };
        draft["styles"]["container"]["border"] = {
          width: "1px",
          style: "solid",
          color: "#374151",
        };
        draft["styles"]["content"]["title"]["typo"]["fontSize"] = {
          desktop: "1.25rem",
          tablet: "1.25rem",
          mobile: "1.25rem",
        };
        draft["styles"]["content"]["title"]["color"] = "#ffffff";
        draft["styles"]["content"]["artist"]["typo"]["fontSize"] = {
          desktop: "0.875rem",
          tablet: "0.875rem",
          mobile: "0.875rem",
        };
        draft["styles"]["content"]["artist"]["color"] = "#9ca3af";

        break;
      case "theme3":
        draft["styles"]["container"]["bg"] = {
          color: "#030712",
        };

        draft["styles"]["container"]["border"] = {
          width: "1px",
          style: "solid",
          color: "#1f2937",
        };

        draft["styles"]["content"]["title"]["typo"]["fontSize"] = {
          desktop: "1.25rem",
          tablet: "1.25rem",
          mobile: "1.25rem",
        };
        draft["styles"]["content"]["title"]["color"] = "#22d3ee";
        draft["styles"]["content"]["artist"]["typo"]["fontSize"] = {
          desktop: "0.875rem",
          tablet: "0.875rem",
          mobile: "0.875rem",
        };
        draft["styles"]["content"]["artist"]["color"] = "#9ca3af";

        break;
    }
  });
