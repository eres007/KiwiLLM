export type SupportPage = {
  title: string
  label: string
  eyebrow: string
  intro: string
  blocks: Array<{ title: string; text: string; items?: string[] }>
  cta?: { label: string; href: string }
}

export const supportPages: Record<string, SupportPage> = {
  '/privacy': {
    title: 'Privacy - Kiwi LLM',
    label: 'Privacy',
    eyebrow: 'TRUST',
    intro: 'Kiwi keeps workspace, auth, usage, and billing data limited to what is needed to run the gateway and support your account.',
    blocks: [
      {
        title: 'Data we use',
        text: 'We store account identity, workspace metadata, API key previews, credit balances, request usage, and operational logs needed for routing, metering, fraud prevention, and support.',
        items: [
          'We never show full API keys after creation.',
          'Prompts and responses are only retained for features that need history, such as playground runs.',
          'Payment records should live with the payment provider, not inside the public app.',
        ],
      },
      { title: 'Control', text: 'Workspace owners can revoke keys, rotate credentials, and request account or usage export through support channels.' },
    ],
  },
  '/terms': {
    title: 'Terms - Kiwi LLM',
    label: 'Terms',
    eyebrow: 'LEGAL',
    intro: 'These production-facing terms set expectations for acceptable use, credits, API access, and service availability.',
    blocks: [
      { title: 'Use of service', text: 'Use Kiwi for lawful development and production workloads. Do not abuse upstream providers, bypass rate limits, resell access without permission, or send content that violates provider policies.' },
      {
        title: 'Credits and access',
        text: 'Credits are prepaid usage units. Model availability, pricing, and routing may change as upstream providers change.',
        items: ['Keep your Kiwi keys private.', 'You are responsible for traffic sent with keys issued to your workspace.', 'Revoked or expired keys stop working immediately.'],
      },
    ],
  },
  '/security': {
    title: 'Security - Kiwi LLM',
    label: 'Security',
    eyebrow: 'SECURITY',
    intro: 'Kiwi is designed around short secrets, revocable keys, strict CORS, metered routing, and clear workspace controls.',
    blocks: [
      {
        title: 'Current safeguards',
        text: 'The API disables framework fingerprinting, sets common browser security headers, verifies Supabase sessions for protected actions, and stores key hashes for gateway authentication.',
        items: ['Use HTTPS in production.', 'Set explicit CORS origins.', 'Keep admin credentials and worker keys only in server env vars.'],
      },
      { title: 'Reporting', text: 'Send security reports with reproduction steps, affected endpoint, and impact. We prioritize issues affecting key leakage, auth bypass, credit abuse, or cross-workspace access.' },
    ],
  },
  '/status': {
    title: 'Status - Kiwi LLM',
    label: 'Status',
    eyebrow: 'STATUS',
    intro: 'Live production status should be backed by monitoring. This page gives users the right place to check gateway, auth, billing, and upstream model health.',
    blocks: [
      { title: 'Gateway', text: 'API health is exposed at /api/health and readiness at /api/ready for uptime monitors.' },
      { title: 'Provider routes', text: 'Model availability is loaded from the active worker, with fallback routes shown if the upstream list cannot be reached.' },
    ],
    cta: { label: 'View models', href: '/models' },
  },
  '/support': {
    title: 'Support - Kiwi LLM',
    label: 'Support',
    eyebrow: 'HELP',
    intro: 'Get help with setup, keys, billing, model routes, and production gateway behavior.',
    blocks: [
      {
        title: 'Before you write in',
        text: 'Check your base URL, key prefix, CORS origin, Supabase session, and credit balance. Most setup issues come from one of those five places.',
        items: ['Base URL should be https://api.kiwillm.in/v1.', 'API keys should start with Kiwi_.', 'Protected dashboard actions require a signed-in workspace.'],
      },
      { title: 'Support channels', text: 'Use the contact page for general questions or email support for account-specific issues.' },
    ],
    cta: { label: 'Contact us', href: '/contact' },
  },
  '/contact': {
    title: 'Contact - Kiwi LLM',
    label: 'Contact Us',
    eyebrow: 'CONTACT',
    intro: 'Reach Kiwi for partnerships, account help, billing questions, production onboarding, or model route requests.',
    blocks: [
      {
        title: 'Email support',
        text: 'For account-specific help, include your workspace email, affected endpoint, approximate request time, and any error code shown in the dashboard.',
        items: ['support@kiwillm.in', 'Response priority goes to billing, auth, and production routing issues.', 'Never send full API keys in support messages.'],
      },
      { title: 'Partnerships', text: 'For provider partnerships, creator launches, or custom model routes, include expected traffic, regions, and target clients.' },
    ],
    cta: { label: 'Email support', href: 'mailto:support@kiwillm.in' },
  },
  '/creator-program': {
    title: 'Creator Program - Kiwi LLM',
    label: 'Creator Program',
    eyebrow: 'PROGRAMS',
    intro: 'The creator program is for builders, educators, and community leads who teach practical agent workflows with Kiwi.',
    blocks: [
      {
        title: 'What creators get',
        text: 'Approved creators can receive starter credits, tracked invite codes, early feature previews, and support for tutorials or workshops.',
        items: ['Custom redeem codes', 'Usage examples for common AI clients', 'Launch support for guides and videos'],
      },
      { title: 'Who should apply', text: 'Developers, AI educators, open-source maintainers, and community hosts with a real audience of builders.' },
    ],
    cta: { label: 'Contact us', href: '/contact' },
  },
  '/sdks': {
    title: 'SDKs - Kiwi LLM',
    label: 'SDKs',
    eyebrow: 'BUILD',
    intro: 'Kiwi works with existing OpenAI-compatible and Anthropic-compatible clients, so you can start without waiting for a custom SDK.',
    blocks: [
      {
        title: 'Supported clients',
        text: 'Use the OpenAI SDK, Anthropic-compatible CLIs, Cursor, Cline, Roo Code, Continue, Codex, and custom fetch clients.',
        items: ['Base URL: https://api.kiwillm.in/v1', 'Auth: Authorization: Bearer YOUR_KIWI_KEY', 'Models: choose any live route from /models'],
      },
      { title: 'Examples', text: 'Full cURL, Python, Node, CLI, image, and video examples are available in the docs.' },
    ],
    cta: { label: 'Open docs', href: '/docs' },
  },
  '/blog': {
    title: 'Blog - Kiwi LLM',
    label: 'Blogs',
    eyebrow: 'NOTES',
    intro: 'A place for release stories, routing notes, model comparisons, and practical guides for agent-heavy teams.',
    blocks: [
      { title: 'Launch notes', text: 'Kiwi brings model routing, key management, usage metering, playground runs, and admin credit tools into one app.' },
      { title: 'Coming articles', text: 'Planned posts include Codex setup, Claude CLI routing, credit planning, and provider fallback strategy.' },
    ],
  },
  '/cookie-policy': {
    title: 'Cookie Policy - Kiwi LLM',
    label: 'Cookie Policy',
    eyebrow: 'PRIVACY',
    intro: 'Kiwi uses essential browser storage for sessions, security, preferences, and product functionality.',
    blocks: [
      {
        title: 'What we store',
        text: 'Authentication sessions are handled by Supabase. The app may also store local UI preferences and playground presets in your browser.',
        items: ['Admin session tokens use session storage.', 'Playground presets use local storage.', 'Analytics or marketing cookies should be disclosed here before launch if added.'],
      },
      { title: 'Choices', text: 'You can clear browser storage at any time. Some authenticated features will require signing in again.' },
    ],
  },
  '/acceptable-use': {
    title: 'Acceptable Use - Kiwi LLM',
    label: 'Acceptable Use',
    eyebrow: 'POLICY',
    intro: 'Kiwi is built for legitimate development, automation, research, and production AI workloads.',
    blocks: [
      {
        title: 'Not allowed',
        text: 'Do not use Kiwi for illegal activity, credential theft, malware, spam, harassment, evading provider safety systems, or abusing upstream model networks.',
        items: ['Do not share or resell keys without permission.', 'Do not attempt to bypass rate limits or metering.', 'Do not send content that violates upstream provider policy.'],
      },
      { title: 'Enforcement', text: 'We may throttle, suspend, revoke keys, or close workspaces that create security, legal, billing, or provider-risk issues.' },
    ],
  },
  '/roadmap': {
    title: 'Roadmap - Kiwi LLM',
    label: 'Roadmap',
    eyebrow: 'ROADMAP',
    intro: 'The next production milestones focus on payments, monitoring, workspace controls, and deeper client integrations.',
    blocks: [
      {
        title: 'Near term',
        text: 'Wire live top-ups, add account-level billing history, publish status monitoring, and expand model route metadata.',
        items: ['Card and UPI checkout', 'USDT payment confirmation', 'Per-key budget controls', 'Public incident history'],
      },
      { title: 'Later', text: 'Team invites, route policies, custom providers, webhooks, and organization audit exports.' },
    ],
  },
  '/changelog': {
    title: 'Changelog - Kiwi LLM',
    label: 'Changelog',
    eyebrow: 'RELEASES',
    intro: 'Track production changes across the app, gateway, model routing, and dashboard surfaces.',
    blocks: [
      { title: 'May 2026', text: 'Added dashboard, model browser, docs, playground, admin overview, redemption codes, and API key creation.' },
      { title: 'Next', text: 'Top-up checkout, legal pages, public status, and production monitoring polish.' },
    ],
  },
  '/community': {
    title: 'Community - Kiwi LLM',
    label: 'Community',
    eyebrow: 'CONNECT',
    intro: 'Find product updates, setup help, and launch announcements for Kiwi builders.',
    blocks: [
      { title: 'Telegram', text: 'Join the public Telegram channel for announcements and quick support.' },
      { title: 'Discord', text: 'Discord can be linked here when the community server is ready.' },
    ],
    cta: { label: 'Open Telegram', href: 'https://t.me/KIWILLM' },
  },
  '/github': {
    title: 'GitHub - Kiwi LLM',
    label: 'GitHub',
    eyebrow: 'SOURCE',
    intro: 'Use this page as the stable footer destination until the public GitHub organization or repository is ready.',
    blocks: [
      { title: 'Repository', text: 'Add the production GitHub URL here when source packages, SDK examples, or issue templates are published.' },
      { title: 'For now', text: 'Docs include the integration examples needed to connect Kiwi to existing clients.' },
    ],
    cta: { label: 'Open docs', href: '/docs' },
  },
  '/linkedin': {
    title: 'LinkedIn - Kiwi LLM',
    label: 'LinkedIn',
    eyebrow: 'SOCIAL',
    intro: 'This page is the stable footer destination for LinkedIn until the official company profile is connected.',
    blocks: [
      { title: 'Company updates', text: 'Use LinkedIn for launch announcements, hiring posts, partnership updates, and longer company notes.' },
      { title: 'For now', text: 'Telegram and the blog are the best places to follow current Kiwi updates.' },
    ],
    cta: { label: 'Open blog', href: '/blog' },
  },
}

export const pageNotFound: SupportPage = {
  title: 'Page not found - Kiwi LLM',
  label: 'Not found',
  eyebrow: '404',
  intro: 'This Kiwi page is not available yet. Use the navigation below to get back to a live production surface.',
  blocks: [{ title: 'Available pages', text: 'Docs, models, playground, top-up, dashboard, and the production policy pages are ready to browse.' }],
  cta: { label: 'Back home', href: '/' },
}

export const renderSupportPage = (page: SupportPage, pageHeader: string) => `
  <main class="content-page">
    ${pageHeader}
    <section class="content-shell">
      <div class="content-hero">
        <p class="section-kicker">${page.eyebrow}</p>
        <h1>${page.label}</h1>
        <p>${page.intro}</p>
      </div>
      <div class="content-grid">
        ${page.blocks
          .map(
            (block) => `
              <article>
                <h2>${block.title}</h2>
                <p>${block.text}</p>
                ${block.items ? `<ul>${block.items.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
              </article>
            `,
          )
          .join('')}
      </div>
      <div class="content-actions">
        <a class="button button-primary" href="${page.cta?.href || '/dashboard'}">${page.cta?.label || 'Open dashboard'}</a>
        <a class="button button-ghost" href="/docs">Read docs</a>
      </div>
    </section>
  </main>
`
