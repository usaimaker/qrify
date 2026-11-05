// Long-tail SEO landing pages. Each entry renders through components/LandingPage.tsx
// via the dynamic route app/[slug]/page.tsx, and is automatically included in the
// sitemap and internal linking because it is listed in LANDING_PAGES (lib/constants.ts).
// Content is written to answer a specific search intent, not templated filler.

export interface SeoBlock {
  heading: string;
  paragraphs: string[];
  code?: string;
}

export interface SeoFaq {
  q: string;
  a: string;
}

export interface SeoPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  tagline: string;
  intro: string[];
  generatorInitialData?: string;
  generatorLabel?: string;
  howToHeading: string;
  steps: string[];
  blocks: SeoBlock[];
  faqs: SeoFaq[];
  ctaHeading: string;
}

export const SEO_PAGES: SeoPage[] = [
  {
    slug: "qr-code-for-pdf",
    title: "QR Code for a PDF - Link Any Document Free | QRify",
    description:
      "Put a QR code on a poster, invoice or product label that opens your PDF instantly. Free, no sign-up, export PNG or SVG.",
    h1: "QR Code for a PDF",
    tagline: "One scan takes someone straight to your document - no typing a long URL, no hunting through a site menu.",
    intro: [
      "A QR code cannot store a PDF itself. A file with any real content is far larger than the few kilobytes a QR symbol can hold, so the practical solution is to encode a short web address that points to the hosted PDF. When a phone scans it, the browser opens the file directly. That is why the first step is always getting a stable, public link to your document - from your own site, a cloud drive set to 'anyone with the link', or a document host - and then turning that link into a code.",
      "This matters most on printed material. Menus, manuals, product specification sheets, safety data sheets, event programmes, warranty terms and real-estate brochures all have a document behind them. Printing a QR code in the corner means the reader gets the full, current version instead of a truncated URL they will never type. If you later replace the file at the same address, every code you already printed keeps working.",
      "Paste your PDF link into the generator below, choose a dark foreground on a light background, and download a high-resolution PNG for web use or an SVG that stays sharp at any print size. The whole thing runs in your browser, so your unpublished document link is never sent to us.",
    ],
    generatorInitialData: "https://example.com/your-document.pdf",
    generatorLabel: "Public link to your PDF",
    howToHeading: "How to make a QR code that opens a PDF",
    steps: [
      "Upload the PDF somewhere with a permanent public URL, and set sharing to anyone with the link can view.",
      "Copy that URL and paste it into the box above, replacing the example address. Keep the https:// prefix.",
      "Open the link in a private/incognito window to confirm it works without a login - a scanner will not be logged in either.",
      "Style the code if you want it to match your document, then scan the preview with your own phone before printing.",
      "Export SVG for print (it scales without blurring) or PNG for a slide, email signature or web page.",
    ],
    blocks: [
      {
        heading: "Why the link, not the file, goes inside the code",
        paragraphs: [
          "A QR code is a grid of modules. Even at the highest density and largest practical size it holds only a few thousand characters, while a one-page PDF is routinely tens or hundreds of kilobytes. Encoding the file directly is not physically possible. Encoding a short URL is, and it has a useful side effect: you can update, correct or translate the document later without reprinting anything.",
          "The trade-off is that the code depends on that link staying alive. Use a URL you control, avoid link shorteners that can expire or be flagged, and keep the hosting on a domain you expect to keep. For compliance documents with a long shelf life, put the PDF on your own domain rather than a free file-sharing service.",
        ],
      },
      {
        heading: "Print settings that keep the code scannable",
        paragraphs: [
          "Keep at least a four-module quiet zone (empty margin) around the symbol and never let a border or caption intrude into it. Contrast is more important than colour: a dark code on a white or very light background scans far more reliably than a light code on a dark one. As a rule of thumb, print roughly 1 cm of code width for every 10 cm of expected scanning distance, so a code on a wall needs to be much larger than one on a business card.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a QR code contain the PDF file itself?",
        a: "No. A QR code holds only a few kilobytes at most, while a typical PDF is much larger. The code stores a link to the hosted PDF instead, which is also better because you can update the document later without reprinting the code.",
      },
      {
        q: "What happens if I change or replace the PDF later?",
        a: "As long as the file stays at the same public URL, every printed code immediately points to the new version. If you move the file to a different address, you will need to generate and reprint the codes.",
      },
      {
        q: "Will Google Drive or Dropbox links work?",
        a: "They can, provided the sharing setting is 'anyone with the link can view'. Test the URL in an incognito window first - if it asks for a login, a scanner will fail. For anything long-lived, host the file on your own domain instead.",
      },
      {
        q: "Should I use PNG or SVG for a printed PDF link?",
        a: "Use SVG for print: it is a true vector and stays sharp at any size, so a poster or a box label will not blur. PNG is fine for screens, presentations and email.",
      },
    ],
    ctaHeading: "Turn your PDF link into a scannable code",
  },
  {
    slug: "restaurant-menu-qr-code",
    title: "Restaurant Menu QR Code Generator - Free, No Sign-Up | QRify",
    description:
      "Create a QR code for your restaurant menu in seconds. Print it on tables and update the menu anytime without reprinting. Free PNG & SVG.",
    h1: "Restaurant Menu QR Code",
    tagline: "Put a code on every table and let guests open the menu on their own phone - then change the menu without reprinting a thing.",
    intro: [
      "A menu QR code is simply a link to a web page or a hosted PDF that contains your menu. Guests scan it, the menu opens in the browser, and nobody has to hand out, wipe down or reprint a physical card between sittings. The important detail is that the code points to a URL you control, so when you swap in a seasonal menu, add allergen notes or change a price, you edit the page - not the hundreds of stickers already stuck to your tables.",
      "If you can, use a lightweight HTML menu page rather than a PDF. It loads faster on a phone, reflows to fit the screen instead of forcing guests to pinch and zoom, is easier for screen readers, and can be indexed by search engines so people find your dishes before they walk in. A PDF works, but treat it as a fallback.",
      "Generate one master code for the whole menu and place it consistently - table tents, a sticker on the corner of each table, the front window, and the receipt. Use a dark code on a light background with a generous empty margin, because restaurant lighting is often warm and dim, which is the hardest condition for a phone camera to read a low-contrast code.",
    ],
    generatorInitialData: "https://example.com/menu",
    generatorLabel: "Your online menu URL",
    howToHeading: "How to set up a QR menu for your restaurant",
    steps: [
      "Publish your menu at a permanent URL on your own site, or a public PDF link that does not require a login.",
      "Paste that URL into the generator above and replace the example address.",
      "Check the page on a real phone over mobile data: it should load in a couple of seconds and be readable without zooming.",
      "Style the code with your brand colours if you like, but keep strong contrast and an unbroken quiet zone.",
      "Download SVG for table stickers and window decals, print one sample, and scan it under your actual dining-room lighting before ordering a full run.",
    ],
    blocks: [
      {
        heading: "Static codes versus dynamic redirects",
        paragraphs: [
          "The codes made here are static: they encode your destination directly, so they never expire, never depend on a subscription, and keep working if a third-party redirect service disappears. That permanence is a real advantage for printed material you cannot easily replace.",
          "The trade-off is that the URL itself is fixed. If you think you will move the menu to a different domain, use a short, stable path on your own site (for example /menu) that you can redirect or repoint internally. You get the same edit-anytime flexibility without paying anyone a monthly fee.",
        ],
      },
      {
        heading: "Make the destination page worth scanning",
        paragraphs: [
          "Most menu pages fail on the phone, not on the code. Keep the page small, put prices and dish names in real text rather than in an image, mark allergens clearly, and put opening hours and the booking link near the top. Avoid PDF-only menus that require pinch-zoom. A fast, readable page is also the one that ranks when someone nearby searches for what you serve.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I change the menu without reprinting the QR code?",
        a: "Yes. The code points to a URL, not to the food list itself. Update the page or replace the PDF at the same address and every printed code shows the new menu immediately.",
      },
      {
        q: "Should the QR code open a PDF or a web page?",
        a: "A web page is usually better: it loads faster, fits a phone screen automatically, is accessible and can appear in search results. Use a PDF only if you cannot publish a page.",
      },
      {
        q: "How big should a menu QR code be on a table?",
        a: "About 3-4 cm square works for a table tent scanned from a seated distance. Add a clear empty margin around it and keep dark-on-light contrast, especially in dim lighting.",
      },
      {
        q: "Do I need a different code for every table?",
        a: "No. One master code for the whole menu is simpler to manage and cheaper to print. Use separate codes only if you need table-specific ordering or tracking.",
      },
    ],
    ctaHeading: "Make a menu code you can print today",
  },
  {
    slug: "google-maps-qr-code",
    title: "Google Maps QR Code Generator - Share a Location Free | QRify",
    description:
      "Create a QR code that opens your exact location in Google Maps. Free, no sign-up, download PNG or SVG for signs, cards and invitations.",
    h1: "Google Maps QR Code",
    tagline: "One scan opens your exact location and starts directions - perfect for invitations, shop signs and delivery instructions.",
    intro: [
      "A location QR code stores a normal Google Maps URL. When scanned, the phone opens Maps (or the browser fallback) with your pin already placed, and the visitor can tap for turn-by-turn directions. It is the simplest way to replace 'it's near the second roundabout, look for the blue sign' on an invitation, a flyer, a business card or a package insert.",
      "The reliable way to build the link is to find your place in Google Maps, use Share, then copy the link. That works whether you have a full Business Profile or just a dropped pin on a map. Paste the resulting URL into the generator below and it becomes a code. Avoid typing an address as free text - a link with exact coordinates removes any ambiguity about which entrance or which similarly named street to use.",
      "Because the payload is just a URL, the code is static and permanent: it will keep working without an account, a subscription or a redirect service. Print it as an SVG so it stays crisp on a large sign, and always test the scan on a phone that is not logged into your own Google account.",
    ],
    generatorInitialData: "https://maps.app.goo.gl/your-share-link",
    generatorLabel: "Google Maps share link",
    howToHeading: "How to create a QR code for a Google Maps location",
    steps: [
      "Open Google Maps, find your business or drop a pin on the exact spot you want people to reach.",
      "Click Share, choose 'Copy link', and keep the short URL it gives you.",
      "Paste that link into the box above, replacing the example. Do not shorten it a second time.",
      "Scan the preview with your phone and confirm it opens the right pin, not just a nearby address.",
      "Export SVG for printed signs and invitations, or PNG for a digital flyer or email.",
    ],
    blocks: [
      {
        heading: "Use a share link, not an address string",
        paragraphs: [
          "Maps links generated by the Share button usually contain a place identifier or precise coordinates. A plain street address pasted into a QR code relies on the scanning app to guess what to do with it, and different phones handle that differently. A proper https link gives consistent behaviour across iOS, Android and desktop browsers.",
          "If you want to be certain, open the copied link in an incognito window before generating the code. If it resolves to the right pin without a login, it will work for a stranger scanning your sign.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a Google Business Profile?",
        a: "No. Any location you can share from Google Maps works, including a manually dropped pin. A Business Profile simply gives the link a nicer name and photo when it opens.",
      },
      {
        q: "Will the code keep working if Google changes Maps URLs?",
        a: "Google maintains its short share links and redirects for the long term, but for anything critical consider pointing the code at a page on your own domain that then redirects to Maps. That way you control the destination forever.",
      },
      {
        q: "Can the code open directions instead of just showing the pin?",
        a: "Yes - use a Maps directions URL with your address as the destination parameter instead of a place link. The phone will open Maps with the route ready to start.",
      },
      {
        q: "Does the QR code track who scanned it?",
        a: "No. It is a static link with no tracking built in. If you need scan counts, add your own analytics to a landing page on your own domain and point the code at that.",
      },
    ],
    ctaHeading: "Put your location on a scannable code",
  },
  {
    slug: "whatsapp-qr-code",
    title: "WhatsApp QR Code Generator - Open a Chat Instantly | QRify",
    description:
      "Make a QR code that opens a WhatsApp chat with your business, optionally with a pre-filled message. Free, no sign-up, PNG & SVG export.",
    h1: "WhatsApp QR Code",
    tagline: "Let customers start a chat with one scan - no saving a number, no typing a message from scratch.",
    intro: [
      "WhatsApp supports a public click-to-chat link: put a phone number in full international format into a wa.me URL and the browser opens a conversation with that contact. Turn that link into a QR code and a customer can scan a sticker on a shop counter, a product label, a flyer or an invoice and land straight in a chat with your business.",
      "The number must include the country code with no plus sign, spaces, brackets or leading zero - for example 447700900123 rather than +44 (0)7700 900123. That single formatting rule is the reason most click-to-chat codes fail. You can also append a pre-filled message with the text parameter, which is useful for 'I'd like to reorder', 'Request a quote' or 'Report a problem with order...' flows.",
      "Everything is generated locally in your browser. The code is static, costs nothing to keep alive, and never expires. Add a short caption next to the printed code - 'Scan to message us' - because a bare QR symbol gives people no idea what will happen when they scan it.",
    ],
    generatorInitialData: "https://wa.me/15551234567?text=Hello%2C%20I'd%20like%20to%20enquire%20about",
    generatorLabel: "WhatsApp click-to-chat link (edit number and text)",
    howToHeading: "How to make a QR code that opens a WhatsApp chat",
    steps: [
      "Write your number in full international format: country code, then the number, with no +, spaces, dashes or leading zero.",
      "Build the link as https://wa.me/<number>. Optionally add ?text= followed by a URL-encoded pre-filled message.",
      "Paste the full link into the generator above, replacing the example.",
      "Open the link in a desktop browser first to confirm it resolves to the correct contact, then scan the preview with a phone that has WhatsApp installed.",
      "Download PNG or SVG, print it with a short caption, and keep strong dark-on-light contrast.",
    ],
    blocks: [
      {
        heading: "Link format and pre-filled messages",
        paragraphs: [
          "The base form is https://wa.me/<number>. Add a message with ?text= and URL-encode the text: spaces become %20 or +, and characters like &, ? and # must be encoded or they will break the link. Keep it short - a long message makes a dense, harder-to-scan code.",
        ],
        code: "https://wa.me/15551234567\nhttps://wa.me/15551234567?text=Hello%2C%20I%20would%20like%20a%20quote",
      },
      {
        heading: "A caption increases scans more than any styling",
        paragraphs: [
          "People hesitate to scan an unlabelled code. One line - 'Scan to chat on WhatsApp' or 'Message us for a quote' - plus a small WhatsApp-coloured accent does more for conversion than a gradient or a custom dot shape ever will. Keep the quiet zone clear around the symbol, and test at the size you will actually print.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does my WhatsApp link not open a chat?",
        a: "Almost always the number format. Use full international format with the country code and no +, spaces, brackets or leading zero. Test the raw wa.me link in a browser before making the code.",
      },
      {
        q: "Can I pre-fill a message for the customer?",
        a: "Yes. Add ?text= with a URL-encoded message. The customer still has to press send - nothing is sent automatically, and nothing is transmitted to us.",
      },
      {
        q: "Does this work with WhatsApp Business?",
        a: "Yes. The click-to-chat link works with any WhatsApp account that can receive messages, including the Business app and the Business Platform.",
      },
      {
        q: "Will the code expire or need a subscription?",
        a: "No. It encodes the link directly, so it works indefinitely without an account, a redirect service or a fee.",
      },
    ],
    ctaHeading: "Let customers reach you with one scan",
  },
  {
    slug: "instagram-qr-code",
    title: "Instagram QR Code Generator - Link Your Profile Free | QRify",
    description:
      "Create a QR code that opens your Instagram profile, a post or a Reel. Free, no sign-up, download crisp PNG or SVG for print and packaging.",
    h1: "Instagram QR Code",
    tagline: "Bridge offline to online: one scan takes someone from a package, poster or receipt straight to your Instagram.",
    intro: [
      "An Instagram QR code is just the profile URL encoded as a QR symbol. Put instagram.com/yourhandle (or a link to a specific post or Reel) into the generator and a phone camera will open it in the app or the mobile browser. It is one of the cheapest ways to turn physical touchpoints - product packaging, a shop window, a business card, an event banner, a receipt - into followers.",
      "Use the shortest stable URL you can. A handle link is better than a share link full of tracking parameters: it produces a less dense code that scans faster, and it will not break if a campaign parameter is retired. If you are promoting a specific campaign, consider a short path on your own domain that redirects to the campaign, so you can change the destination without reprinting.",
      "Keep the code dark on a light background with a clear empty margin. Instagram's own branding is colourful, but a low-contrast pastel code on a busy printed photo is the most common reason these fail in the real world. Add a one-line caption so people know where the scan will take them.",
    ],
    generatorInitialData: "https://www.instagram.com/yourhandle/",
    generatorLabel: "Instagram profile or post URL",
    howToHeading: "How to make an Instagram QR code",
    steps: [
      "Copy your profile URL in its short form: https://www.instagram.com/yourhandle/",
      "Paste it into the box above, replacing the example. For a specific post or Reel, copy that share URL instead.",
      "Strip unnecessary tracking parameters to keep the code simple and quick to scan.",
      "Scan the preview with a phone to confirm it opens the right profile, then style it with your brand colours if you wish.",
      "Export SVG for packaging and large print, PNG for receipts, slides and digital use.",
    ],
    blocks: [
      {
        heading: "Profile link versus a link-in-bio landing page",
        paragraphs: [
          "If you only want followers, link straight to the profile. If you want to send people to a shop, a menu or a signup, point the code at your own short URL and manage the destination yourself - that keeps one printed code useful across many campaigns.",
          "Remember that a static QR code cannot tell you how many people scanned it. If scan counts matter, use a redirect on your own domain with analytics in front of the final Instagram link.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the QR code open the Instagram app directly?",
        a: "Usually yes - phones recognise instagram.com links and offer to open the app. If the app is not installed, the link opens in the mobile browser instead.",
      },
      {
        q: "Can I link to a specific post or Reel?",
        a: "Yes. Copy the share URL for that post and paste it in. Keep in mind that post URLs are longer, so the resulting code is denser - print it a little larger.",
      },
      {
        q: "Will changing my handle break the code?",
        a: "Yes. A static code stores the URL at the moment you made it, so a handle change means reprinting. Use a short redirect on your own domain if you expect to rebrand.",
      },
      {
        q: "Is this different from Instagram's own QR code?",
        a: "Instagram's in-app code is designed for profile discovery inside the app. This is a standard QR code containing your public URL, so any phone camera can scan it from printed material.",
      },
    ],
    ctaHeading: "Turn your packaging into a follower funnel",
  },
  {
    slug: "email-qr-code",
    title: "Email QR Code Generator - Pre-fill a Message Free | QRify",
    description:
      "Create a QR code that opens a ready-to-send email with your address, subject and message already filled in. Free, no sign-up, PNG & SVG.",
    h1: "Email QR Code",
    tagline: "A scan opens the mail app with your address, subject and message already written - ideal for support, feedback and enquiries.",
    intro: [
      "An email QR code encodes a mailto: link rather than a web address. When scanned, the phone opens its default mail app with the recipient, and optionally the subject and body, already filled in. That removes the friction of copying an address off a poster or a business card, which is why it works well for support desks, feedback cards, warranty registrations, conference badges and 'report a problem' labels on equipment.",
      "The mailto: format is simple and has existed for decades. You can append a subject and a body using query parameters, with text URL-encoded so spaces and special characters survive. Keep the pre-filled text short: long payloads produce dense codes that are slow to scan on older phones.",
      "One caveat worth knowing: mailto links rely on the device having a configured mail app. A phone with no mail account set up will do nothing, or prompt to configure one. For critical customer-facing flows, consider a link to a web form on your own site instead - and if you use an email code, put the plain address in small text next to it as a fallback.",
    ],
    generatorInitialData: "mailto:hello@example.com?subject=Enquiry&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about",
    generatorLabel: "mailto link (edit address, subject and body)",
    howToHeading: "How to create an email QR code",
    steps: [
      "Start with mailto: followed by the address, for example mailto:hello@example.com",
      "Add ?subject= and &body= with URL-encoded text if you want a pre-filled subject and message.",
      "Paste the complete link into the generator above, replacing the example.",
      "Test it on a phone with a mail account configured, and confirm the address and subject are correct.",
      "Download the code and print the plain email address beside it as a fallback for devices without a mail app.",
    ],
    blocks: [
      {
        heading: "The mailto format",
        paragraphs: [
          "Separate multiple recipients with commas, add cc or bcc as additional parameters, and URL-encode the subject and body. A plus sign, an ampersand or a raw space in the wrong place will silently truncate the message.",
        ],
        code: "mailto:hello@example.com\nmailto:hello@example.com?subject=Feedback&body=Hi%20team%2C%20",
      },
    ],
    faqs: [
      {
        q: "What happens if the phone has no email app set up?",
        a: "Nothing, or a prompt to configure mail. That is why we recommend printing the plain address as text next to the code, or using a web form for anything business-critical.",
      },
      {
        q: "Can I pre-fill the subject and message?",
        a: "Yes. Use ?subject= and &body= with URL-encoded text. The recipient still has to press send - the code never sends anything by itself.",
      },
      {
        q: "Can one code address several people?",
        a: "Yes, separate addresses with commas inside the mailto link, or use cc= and bcc= parameters. Longer lists make the code denser, so keep it short.",
      },
      {
        q: "Is my email address exposed to spam by making a code?",
        a: "The address is printed publicly either way, which is the real exposure. The generator itself runs entirely in your browser and does not transmit or store your address.",
      },
    ],
    ctaHeading: "Make enquiries as easy as one scan",
  },
  {
    slug: "phone-number-qr-code",
    title: "Phone Number QR Code Generator - Tap to Call Free | QRify",
    description:
      "Create a QR code that dials your number with one scan. Free, no sign-up, download PNG or SVG for signs, cards and equipment labels.",
    h1: "Phone Number QR Code",
    tagline: "Scan, confirm, call - no copying digits off a sign, no misdialled number when someone needs help fast.",
    intro: [
      "A phone-number QR code contains a tel: link. Scanning it opens the phone dialler with the number already entered, so the person only has to press call. It is a small change that removes real friction on 'call for assistance' signs, equipment service labels, property listings, delivery notes, taxi cards, emergency contacts and the back of a business card.",
      "Use the full international format with a leading plus and no spaces or separators: +15551234567 rather than (555) 123-4567. Most diallers can handle local formats, but the international form is unambiguous when someone scans your sign while roaming, and it keeps the code short and easy to read.",
      "As with any printed code, add a caption - 'Scan to call support' - and print the number in plain text underneath as a fallback for devices that cannot place calls, such as tablets and laptops. Export SVG for large signage so the edges stay sharp.",
    ],
    generatorInitialData: "tel:+15551234567",
    generatorLabel: "tel link (edit to your number)",
    howToHeading: "How to make a QR code that calls a number",
    steps: [
      "Write the number in full international format with a leading + and no spaces, brackets or dashes.",
      "Prefix it with tel: to form the link, for example tel:+15551234567",
      "Paste it into the generator above, replacing the example.",
      "Scan the preview with a phone and confirm the dialler shows the exact number.",
      "Export the code and print the number in plain text below it as a fallback.",
    ],
    blocks: [
      {
        heading: "Keep the payload minimal",
        paragraphs: [
          "A tel: link is about as short as a QR payload gets, which means a low-density symbol that scans quickly and stays readable at small sizes. Resist the temptation to add extra text into the code itself - put context in a caption outside the symbol instead.",
          "If you need different departments, generate separate codes with separate numbers and label each one clearly. One ambiguous code with a menu of options is worse than three clearly captioned ones.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the scan place the call automatically?",
        a: "No. It opens the dialler with the number filled in; the person still presses call. Nothing is dialled or transmitted without their action.",
      },
      {
        q: "Should I include the country code?",
        a: "Yes. Use + followed by country code and number, with no spaces or punctuation. It works for local callers and for anyone roaming, and keeps the code short.",
      },
      {
        q: "Will it work on a tablet or laptop?",
        a: "Not reliably - those devices usually have no dialler. Always print the number in plain text next to the code as a fallback.",
      },
      {
        q: "Can I use this for SMS instead?",
        a: "Yes, use an sms: link (optionally with ?body= for a pre-filled text). The same generator handles it - just replace the payload.",
      },
    ],
    ctaHeading: "Make it effortless to call you",
  },
  {
    slug: "youtube-video-qr-code",
    title: "YouTube Video QR Code Generator - Free, No Sign-Up | QRify",
    description:
      "Create a QR code that opens your YouTube video or channel instantly. Free, no sign-up, export crisp PNG or SVG for print and packaging.",
    h1: "YouTube Video QR Code",
    tagline: "Put a video on a physical object: one scan plays the tutorial, the demo or the campaign film.",
    intro: [
      "A video QR code stores an ordinary YouTube URL. Scan it and the phone opens the video in the app or the mobile browser. It is a direct way to connect printed material to moving content - a recipe card that shows the technique, a product box with a setup tutorial, a museum label with an oral history, a poster with a campaign film, a textbook with a worked example.",
      "Use the short youtu.be link for a single video: it is much shorter than the full watch URL, so the resulting code is less dense and scans faster from a distance. For a channel or playlist, use the canonical channel or playlist URL and strip tracking parameters such as timestamps and campaign tags unless they are essential.",
      "Think about context before printing. Someone scanning a code in a shop may have mobile data but no headphones; a muted autoplay preview, a caption or a short line like '2-min setup video' sets the expectation. And as always, keep dark-on-light contrast and an unbroken quiet zone, then test the scan on a real phone before a print run.",
    ],
    generatorInitialData: "https://youtu.be/VIDEO_ID",
    generatorLabel: "YouTube video, channel or playlist URL",
    howToHeading: "How to make a QR code for a YouTube video",
    steps: [
      "Open the video on YouTube, click Share, and copy the short youtu.be link.",
      "Paste it into the generator above, replacing the example. Strip timestamps and tracking parameters you do not need.",
      "Open the link in an incognito window to confirm it is public and not unlisted or age-restricted.",
      "Scan the preview with a phone and confirm the correct video opens.",
      "Export SVG for packaging and posters, PNG for slides, cards and digital use.",
    ],
    blocks: [
      {
        heading: "Check the video is actually public",
        paragraphs: [
          "The most common failure is not the code, it is a video that is private, unlisted, age-restricted, region-blocked or later deleted. Test the link in a private browser window - that approximates a stranger's phone. If the video may change, point the code at a playlist or a landing page on your own domain instead, so you can swap the video without reprinting.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I link to a channel or a playlist?",
        a: "Yes. Paste the channel or playlist URL instead of a video link. Playlists are useful because you can add or reorder videos without changing the code.",
      },
      {
        q: "Why use the short youtu.be link?",
        a: "It is much shorter, so the QR code is less dense, scans faster and stays readable at smaller print sizes - important on packaging and labels.",
      },
      {
        q: "Can I start the video at a specific timestamp?",
        a: "Yes, append ?t= or &t= with the number of seconds. It makes the link slightly longer, so print the code a little larger.",
      },
      {
        q: "What if I later delete or replace the video?",
        a: "A static code keeps pointing at the old URL, which will break or show a removed-video page. Use a playlist or your own redirect page if you expect changes.",
      },
    ],
    ctaHeading: "Put your video where your customers already are",
  },
  {
    slug: "business-card-qr-code",
    title: "Business Card QR Code Generator - Free, No Sign-Up | QRify",
    description:
      "Add a QR code to a business card that shares your contact details, site or portfolio. Free, print-ready SVG and PNG, no watermark.",
    h1: "Business Card QR Code",
    tagline: "A business card has room for a headline, not a career. One scan hands over the full picture.",
    intro: [
      "A QR code on a business card solves a simple problem: paper is small and your details are not. Point the code at a contact page, a vCard file, a portfolio, a booking link or your LinkedIn profile, and the person you just met can save everything accurately in a couple of seconds instead of typing an email off a 3.5-inch card.",
      "Decide what the scan should accomplish before you design the card. 'Save my contact' (a vCard or contact page), 'see my work' (portfolio) and 'book a meeting' (calendar) are three different jobs and three different destinations. Pick one. If you genuinely need several, use a short link on your own domain that leads to a small landing page with those options - you can then change it later without reprinting 500 cards.",
      "Physical constraints matter more here than anywhere else. Cards get printed small, handled, and sometimes put under a glass desk. Keep the code at least 2 cm square, keep a clear quiet zone of about four modules, use dark-on-light contrast, and avoid placing it near a fold, a rounded corner or a textured spot-UV finish. Always print one proof and scan it with a real phone before the full run.",
    ],
    generatorInitialData: "https://example.com/contact",
    generatorLabel: "Contact page, vCard or portfolio URL",
    howToHeading: "How to add a QR code to a business card",
    steps: [
      "Choose a single job for the code: save contact, view portfolio, or book a meeting.",
      "Publish the destination at a short, permanent URL and paste it into the generator above.",
      "Keep the design high contrast and leave a clear empty margin around the symbol.",
      "Export SVG - it prints razor sharp at small sizes - and place it away from folds and edges.",
      "Print one proof, scan it with a real phone under normal light, and only then order the full batch.",
    ],
    blocks: [
      {
        heading: "vCard or a web page?",
        paragraphs: [
          "A vCard (.vcf) lets someone save your name, number and email straight into their contacts, which is the most direct 'save my details' experience. A web page is more flexible: it can show a photo, links, a portfolio and a booking button, and it works in any browser. If you want both, use a page that offers a download-contact button.",
          "Whichever you choose, host it somewhere you control. A free link shortener or a temporary file host can disappear, and unlike a website you cannot quietly fix 500 printed cards.",
        ],
      },
      {
        heading: "Print specifications that survive the real world",
        paragraphs: [
          "Minimum about 2 x 2 cm including the quiet zone, dark modules on a white or very light background, and no gradient or photo behind the code. Matte or uncoated stock scans better than high-gloss. Avoid reversing the code out to light-on-dark: many camera decoders assume the standard polarity and will fail.",
        ],
      },
    ],
    faqs: [
      {
        q: "What should the QR code on a business card link to?",
        a: "One clear destination: a vCard to save your details, a contact/portfolio page, or a booking link. If you need several options, use a short landing page on your own domain.",
      },
      {
        q: "How small can I print it?",
        a: "Around 2 cm square including the empty margin is a practical floor for a card scanned at arm's length. Anything smaller becomes unreliable on real phones.",
      },
      {
        q: "Can I change where it points after printing?",
        a: "Only if the code points at a URL you control and can redirect. A static code stores its destination permanently, so plan the URL before the print run.",
      },
      {
        q: "Will a coloured or logo QR code still scan on a card?",
        a: "Usually, if contrast stays strong and the logo covers less than about a quarter of the code. Test a printed proof - card stock and gloss change the result compared with a screen.",
      },
    ],
    ctaHeading: "Make the back of your card do more",
  },
  {
    slug: "transparent-qr-code",
    title: "Transparent QR Code Generator - No Background Free | QRify",
    description:
      "Generate a QR code with a transparent background for labels, overlays and dark designs. Free, no sign-up, export PNG or SVG.",
    h1: "Transparent QR Code",
    tagline: "Drop a QR code onto a coloured label, a photo or a dark background without a white box around it.",
    intro: [
      "A transparent QR code has no background fill, so the surface it sits on shows through between the dark modules. That is what you want when placing a code on a coloured product label, a dark poster, a photo, a presentation slide or packaging where a white square would look like a sticker someone forgot to remove.",
      "Transparency raises one hard constraint: the surface behind the code must be light enough, and the modules dark enough, to preserve contrast. Most phone decoders expect dark modules on a light background. A black code on a pale pastel background works well; a white code on a dark photograph fails far more often. If your background is dark, place the code on a light plate or an inset white area rather than inverting the colours.",
      "Export as PNG with alpha, or as SVG, to keep the transparency intact - a JPEG will fill the empty area with white and undo the whole point. Then test the finished composition, not just the code on its own: scan it over the actual artwork, at the actual print size, under the actual lighting.",
    ],
    generatorInitialData: "https://example.com",
    generatorLabel: "URL or text for your transparent code",
    howToHeading: "How to make a transparent QR code",
    steps: [
      "Enter your URL or text in the generator above and set the foreground to a dark colour.",
      "Set the background to transparent (or remove the background fill) so the underlying surface shows through.",
      "Keep a clear quiet zone - the empty margin must also be transparent, with no border or text inside it.",
      "Export PNG with alpha or SVG. Do not save as JPEG, which will flatten transparency to white.",
      "Place it over your real artwork and scan a printed proof with a phone before production.",
    ],
    blocks: [
      {
        heading: "Why light-on-dark transparent codes fail",
        paragraphs: [
          "QR decoders binarise the image by looking for a brightness difference between modules and background. The convention is dark modules on a light background. Inverting that - light modules on a dark background - works on some phones and fails on others, and there is no way to know which phone your customer has. Transparency removes the background entirely, so the surface becomes the background: choose a light surface.",
          "The quiet zone is part of the specification, not decoration. It must be at least four modules wide and must stay light and empty. A coloured label, a texture or a line of text creeping into that margin is a common cause of intermittent scans that are hard to diagnose.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which file format keeps transparency?",
        a: "PNG with an alpha channel, or SVG. A JPEG has no transparency support and will fill the background with white.",
      },
      {
        q: "Can I put a transparent QR code on a dark background?",
        a: "Not reliably. Use dark modules on a light area - add a light plate or inset panel behind the code. Inverted light-on-dark codes fail on many phones.",
      },
      {
        q: "Does a transparent background reduce scan reliability?",
        a: "Only if the surface behind it is low contrast or busy. On a flat light surface with dark modules, a transparent code scans exactly like a white one.",
      },
      {
        q: "Does the quiet zone need to be transparent too?",
        a: "Yes - the empty margin around the code must stay clear and light. Keep text, borders and artwork out of it.",
      },
    ],
    ctaHeading: "Make a code that belongs on your design",
  },
];
