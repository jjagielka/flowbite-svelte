<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";

  let { breadcrumb_title = "", description = "", title = "", dir = "" } = $props();

  // title = title.replaceAll(' ', '-');
  let imgsrc = `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${encodeURIComponent(breadcrumb_title)}`;
  let dirstring = dir.toLowerCase();
  let breadcrumb = breadcrumb_title.toLowerCase().replaceAll(" ", "-");
</script>

<MetaTags
  title={breadcrumb_title}
  titleTemplate="%s - Flowbite"
  {description}
  facebook={{
    appId: "453670756870545"
  }}
  openGraph={{
    type: "website",
    url: `https://flowbite-svelte.com/${dirstring}/${breadcrumb}`,
    title: `${title}`,
    description: `${description}`,
    images: [
      {
        url: imgsrc,
        width: 1200,
        height: 630,
        alt: `${title}`
      }
    ],
    siteName: "Flowbite Svelte"
  }}
  twitter={{
    creator: "@shinokada",
    cardType: "summary_large_image",
    title: `${title}`,
    description: `${description}`,
    image: imgsrc,
    imageAlt: `${title}`
  }}
/>
