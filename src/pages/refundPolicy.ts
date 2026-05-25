const tocItems = [
  'General Policy',
  'Prepaid Credits',
  'Billing Errors',
  'Unauthorized Charges',
  'No Service Level Credits',
  'Chargebacks',
  'EU/EEA/UK Consumer Rights',
  'No-Refund Scenarios',
  'Limitation of Liability',
  'Contact Information',
]

const section = (title: string, body: string) => `
  <section class="policy-section">
    <h2>${title}</h2>
    ${body}
  </section>
`

export const refundPolicyTitle = 'Refund Policy - Kiwi LLM'

export const renderRefundPolicyPage = () => `
  <main class="policy-page">
    <a class="policy-back" href="/">← Back to home</a>

    <article class="policy-shell">
      <header class="policy-hero">
        <h1>Refund Policy</h1>
        <p>Effective Date: May 25, 2026</p>
        <p>Last Updated: May 25, 2026</p>
      </header>

      <div class="policy-intro">
        <p>
          This Refund Policy governs refund requests, billing disputes, prepaid credits, and related financial matters arising from your use of Kiwi LLM's unified AI/LLM API routing and aggregation service. This policy forms part of the Kiwi LLM Terms and should be read with our <a href="/privacy">Privacy Policy</a> and <a href="/acceptable-use">Acceptable Use Policy</a>.
        </p>
        <p>
          Kiwi LLM is an AI provider aggregator and routing intermediary. Kiwi does not run, train, host, or operate every AI model available through the service. Kiwi routes customer API requests to third-party model providers and returns those providers' responses.
        </p>
        <strong>All charges are final and non-refundable except as expressly stated in this policy or required by mandatory applicable law.</strong>
      </div>

      <nav class="policy-toc" aria-label="Refund policy table of contents">
        <h2>Table of Contents</h2>
        <ol>
          ${tocItems.map((item) => `<li>${item}</li>`).join('')}
        </ol>
      </nav>

      ${section(
        '1. General Policy',
        `
          <h3>1.1 All Sales Final</h3>
          <p>All charges are final and non-refundable except as expressly stated in this policy or required by mandatory applicable law. The service is provided on an as-available basis. Kiwi does not guarantee any specific level of uptime, availability, performance, model quality, or output quality.</p>
          <h3>1.2 Intermediary Role</h3>
          <p>Kiwi acts as a routing intermediary to third-party AI model providers. Model availability, latency, accuracy, safety behavior, rate limits, and provider uptime are outside Kiwi's full control and are not, by themselves, billing errors.</p>
          <h3>1.3 Composition of Charges</h3>
          <p>Charges may include upstream provider cost, Kiwi platform fees, payment processing costs, taxes, and region-specific charges. Provider price changes passed through to your workspace are not billing errors.</p>
        `,
      )}

      ${section(
        '2. Prepaid Credits',
        `
          <h3>2.1 Purchase and Use</h3>
          <p>Prepaid credits are purchased through the dashboard and added to your workspace balance after payment confirmation. Credits apply only to the workspace where they are purchased.</p>
          <h3>2.2 Expiration</h3>
          <p>Prepaid credits are valid for six months from purchase unless a longer period is required by mandatory applicable law or an enterprise agreement.</p>
          <ul>
            <li>Where local law prohibits expiration of stored value, the required local rule controls.</li>
            <li>Promotional credits may have shorter expiry windows stated at issuance.</li>
            <li>Expired credits are permanently forfeited unless prohibited by mandatory law.</li>
          </ul>
          <h3>2.3 Non-Refundable and Non-Transferable</h3>
          <p><b>Prepaid credits are non-refundable, non-transferable, and not redeemable for cash</b> except to the minimum extent required by mandatory applicable law.</p>
          <h3>2.4 Consumption Order</h3>
          <p>Charges apply first to promotional credits by earliest expiration, then prepaid credits by earliest expiration, then any pay-as-you-go billing method.</p>
          <h3>2.5 Account Deletion</h3>
          <p>Upon voluntary account deletion, remaining credits are permanently forfeited except to the minimum extent required by mandatory applicable law.</p>
        `,
      )}

      ${section(
        '3. Billing Errors',
        `
          <h3>3.1 Scope</h3>
          <p>Billing disputes are limited to verified billing errors such as duplicate charges, charges for requests never initiated by your workspace, incorrect rate application, or charges for requests Kiwi failed to forward due to a Kiwi system error.</p>
          <p><b>The following are not billing errors and are not eligible for refund or remedy:</b> dissatisfaction with model output, latency, provider outage, provider price changes, rate limiting, model deprecation, or feature changes.</p>
          <h3>3.2 Filing a Dispute</h3>
          <p>To file a billing dispute, email <a href="mailto:billing@kiwillm.in">billing@kiwillm.in</a> within thirty calendar days of the disputed charge. Include your workspace email, date and amount, the billing-error category, and supporting evidence such as request IDs, screenshots, or logs.</p>
          <h3>3.3 Investigation and Resolution</h3>
          <p>Kiwi will review disputes within a commercially reasonable timeframe. Kiwi's determination is final except as required by mandatory applicable law.</p>
        `,
      )}

      ${section(
        '4. Unauthorized Charges',
        `<p>If you believe unauthorized charges were incurred on your account and did not result from your failure to secure credentials, report them to <a href="mailto:security@kiwillm.in">security@kiwillm.in</a> within thirty calendar days of discovery. Kiwi may issue credits or refunds for verified unauthorized charges caused by a confirmed breach of Kiwi infrastructure.</p>`,
      )}

      ${section(
        '5. No Service Level Credits',
        `<p>Kiwi does not offer automated SLA credits, uptime credits, outage credits, or guaranteed compensation unless a separate written enterprise agreement states otherwise. The service is provided on an as-available basis.</p>`,
      )}

      ${section(
        '6. Chargebacks',
        `
          <h3>6.1 Dispute Resolution First</h3>
          <p>You agree to contact <a href="mailto:billing@kiwillm.in">billing@kiwillm.in</a> to resolve billing concerns before initiating a chargeback with your financial institution.</p>
          <h3>6.2 Account Suspension</h3>
          <p>Kiwi may suspend or terminate access upon receiving a chargeback notification. Access may remain suspended until the chargeback is resolved and associated fees are paid.</p>
        `,
      )}

      ${section(
        '7. EU/EEA/UK Consumer Rights',
        `
          <h3>7.1 Right of Withdrawal</h3>
          <p>If you are a consumer in the EU, EEA, or UK, you may have withdrawal rights under applicable consumer law. By using Kiwi credits to make API requests, you acknowledge that digital service performance may begin immediately.</p>
          <h3>7.2 Mandatory Consumer Protections</h3>
          <p>Nothing in this policy excludes or limits rights that cannot be excluded or limited under mandatory consumer protection law.</p>
        `,
      )}

      ${section(
        '8. No-Refund Scenarios',
        `
          <p>The following are not eligible for refund, credit, or remedy:</p>
          <ol>
            <li>Dissatisfaction with model output quality, accuracy, completeness, or safety.</li>
            <li>Service outages, downtime, or degraded performance, including upstream provider outages.</li>
            <li>Latency, slow response times, timeout errors, or rate limiting.</li>
            <li>Model deprecation, discontinuation, version changes, feature changes, or provider cost changes.</li>
            <li>Voluntary account deletion, downgrade, suspension, or termination for policy violations.</li>
          </ol>
        `,
      )}

      ${section(
        '9. Limitation of Liability',
        `<p>The limitation of liability provisions in the <a href="/terms">Terms & Conditions</a> apply to this Refund Policy. Kiwi's total aggregate liability for a refund claim will not exceed the greater of fees paid in the three months preceding the claim or fifty United States Dollars.</p>`,
      )}

      <section class="policy-section">
        <h2>10. Contact Information</h2>
        <div class="policy-contact-grid">
          <article><b>Billing Disputes</b><a href="mailto:billing@kiwillm.in">billing@kiwillm.in</a></article>
          <article><b>Unauthorized Charges</b><a href="mailto:security@kiwillm.in">security@kiwillm.in</a></article>
          <article><b>General Support</b><a href="mailto:support@kiwillm.in">support@kiwillm.in</a></article>
          <article><b>Legal</b><a href="mailto:legal@kiwillm.in">legal@kiwillm.in</a></article>
        </div>
        <div class="policy-company">
          <p>Kiwi LLM</p>
          <p>Production AI routing and aggregation service</p>
          <p>All rights reserved.</p>
        </div>
      </section>

      <aside class="policy-note">
        Kiwi may modify this policy with reasonable advance notice. Continued use of the service after changes take effect constitutes acceptance. If you do not agree, your sole remedy is to discontinue use.
      </aside>
    </article>
  </main>
`
