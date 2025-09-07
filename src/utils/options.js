import { __ } from "@wordpress/i18n";

export const generalStyleTabs = [
  { name: "general", title: __("General", "audio-theme") },
  { name: "style", title: __("Style", "audio-theme") },
];


export const themeOptions = [
  { value: "theme1", label: __("Theme-1", "audio-theme") },
  { value: "theme2", label: __("Theme-2", "audio-theme") },
  { value: "theme3", label: __("Theme-3", "audio-theme") },
];

export const blocks = [
  {
    label: "Theme-1",
    value: "theme1",
    content: `<!-- wp:raat/audio-theme /-->`,
  },
  {
    label: "Theme-2",
    value: "theme2",
    content: `
		<!-- wp:raat/audio-theme {"theme":"theme2","styles":{"container":{"margin":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"padding":{"desktop":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"},"tablet":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"},"mobile":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"}},"border":{"width":"1px","style":"solid","color":"#374151"},"radius":{"top":"1rem","right":"1rem","bottom":"1rem","left":"1rem"},"bg":{"color":"linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)","type":"gradient","gradient":"linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)"}},"content":{"textAlign":"left","title":{"typo":{"fontSize":{"desktop":"1.25rem","tablet":"1.25rem","mobile":"1.25rem"},"fontWeight":700,"lineHeight":"1.75rem","fontFamily":"ui-sans-serif, system-ui","textTransform":"capitalize"},"color":"#ffffff","margin":{"desktop":{"top":"0px","right":"0px","bottom":"0.25rem","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0.25rem","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0.25rem","left":"0px"}}},"artist":{"typo":{"fontSize":{"desktop":"0.875rem","tablet":"0.875rem","mobile":"0.875rem"},"fontWeight":600,"lineHeight":"1.25rem","letterSpace":"0.05em","textTransform":"uppercase","fontFamily":"ui-sans-serif, system-ui"},"color":"#9ca3af","margin":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}}},"statusIndicator":{"width":"3rem","height":"3rem","padding":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"border":{"width":"","style":"solid","color":""},"radius":{"top":"50%","right":"50%","bottom":"50%","left":"50%"},"colors":{"color":" #a855f7","bg":"#a855f74d"}},"playBg":{"color":""}}}} /-->
		`,
  },
  {
    label: "Theme-3",
    value: "theme3",
    content: `
<!-- wp:raat/audio-theme {"theme":"theme3","styles":{"container":{"margin":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"padding":{"desktop":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"},"tablet":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"},"mobile":{"top":"1.5rem","right":"1.5rem","bottom":"1.5rem","left":"1.5rem"}},"border":{"width":"1px","style":"solid","color":"#1f2937"},"radius":{"top":"1rem","right":"1rem","bottom":"1rem","left":"1rem"},"bg":{"color":"#030712"}},"content":{"textAlign":"left","title":{"typo":{"fontSize":{"desktop":"1.25rem","tablet":"1.25rem","mobile":"1.25rem"},"fontWeight":700,"lineHeight":"1.75rem","fontFamily":"ui-sans-serif, system-ui","textTransform":"capitalize"},"color":"#22d3ee","margin":{"desktop":{"top":"0px","right":"0px","bottom":"0.25rem","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0.25rem","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0.25rem","left":"0px"}}},"artist":{"typo":{"fontSize":{"desktop":"0.875rem","tablet":"0.875rem","mobile":"0.875rem"},"fontWeight":600,"lineHeight":"1.25rem","letterSpace":"0.05em","textTransform":"uppercase","fontFamily":"ui-sans-serif, system-ui"},"color":"#9ca3af","margin":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}}},"statusIndicator":{"width":"3rem","height":"3rem","padding":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"border":{"width":"","style":"solid","color":""},"radius":{"top":"50%","right":"50%","bottom":"50%","left":"50%"},"colors":{"color":" #a855f7","bg":"#a855f74d"}},"playBg":{"color":""}}}} /-->		`,
  },
];
