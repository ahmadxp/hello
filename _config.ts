import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(metas());
site.use(tailwindcss());
site.use(postcss());

export default site;
