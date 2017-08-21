import checkWidth from "./check-width";

export default {
  bind: function(el, binding, vnode) {
    if (el.tagName.toLocaleUpperCase() !== "INPUT") {
      throw new Error("v-input-autowidth can only be used on input elements.");
    }
    let mirror = document.createElement("span");
    mirror.classList.add("vue-input-autosize-mirror");

    setTimeout(() => {
      let styles = window.getComputedStyle(el, null);
      Object.assign(mirror.style, {
        position: "absolute",
        top: "-9999px",
        left: "-9999px",
        width: "auto",
        whiteSpace: "nowrap",
        opacity: 0,
        border: styles.getPropertyValue("border"),
        fontSize: styles.getPropertyValue("font-size"),
        fontFamily: styles.getPropertyValue("font-family"),
        fontWeight: styles.getPropertyValue("font-weight"),
        fontStyle: styles.getPropertyValue("font-style"),
        fontFeatureSettings: styles.getPropertyValue("font-feature-settings"),
        fontKerning: styles.getPropertyValue("font-kerning"),
        fontStretch: styles.getPropertyValue("font-stretch"),
        fontVariant: styles.getPropertyValue("font-variant"),
        fontVariantCaps: styles.getPropertyValue("font-variant-caps"),
        fontVariantLigatures: styles.getPropertyValue("font-variant-ligatures"),
        fontVariantNumeric: styles.getPropertyValue("font-variant-numeric"),
        letterSpacing: styles.getPropertyValue("letter-spacing"),
        padding: styles.getPropertyValue("padding"),
        textTransform: styles.getPropertyValue("text-transform"),
        ariaHidden: true
      });
      document.body.appendChild(mirror);
      checkWidth(el, binding);
    }, 0);
  },
  update: function(el, binding) {
    checkWidth(el, binding);
  }
};
