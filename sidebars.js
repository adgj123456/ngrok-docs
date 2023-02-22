/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'overview',
    'getting-started',
    {
      label: 'Guides',
      type: 'category',
      link: { type: 'doc', id: 'guides/index' },
      items: [ 
        { type: 'autogenerated', dirName: 'guides',}, 
        {
          label: 'Using ngrok with',
          type: 'category',
          link: { type: 'doc', id: 'using-ngrok-with' },
          items: [ { type: 'autogenerated', dirName: 'using-ngrok-with', }, ],
        },
      ],
    },
    {
      label: 'ngrok Cloud Edge',
      type: 'category',
      link: { type: 'doc', id: 'cloud-edge/index' },
      items: [ { type: 'autogenerated', dirName: 'cloud-edge', }, ],
    },
    {
      label: 'ngrok Secure Tunnels',
      type: 'category',
      link: { type: 'doc', id: 'secure-tunnels/index' },
      items: [ { type: 'autogenerated', dirName: 'secure-tunnels', }, ],
    },
    {
      label: 'ngrok Platform',
      type: 'category',
      items: [ { type: 'autogenerated', dirName: 'platform', }, ],
    },
    {
      label: 'Integrations',
      type: 'category',
      // TODO: @sudobinbash: Change to autogen (for scalability)
      items: [
        { label: 'Aftership', type: 'doc', id: 'integrations/aftership/webhooks', },
        { label: 'Airship', type: 'doc', id: 'integrations/airship/webhooks', },
        { label: 'Amazon SNS', type: 'doc', id: 'integrations/amazonsns/webhooks', },
        { label: 'Autodesk', type: 'doc', id: 'integrations/autodesk/webhooks', },
        { label: 'Azure AD', type: 'doc', id: 'integrations/azure-ad/sso-saml', },
        { label: 'Azure AD B2C', type: 'doc', id: 'integrations/azure-ad-b2c/sso-saml', },
        { label: 'Bitbucket', type: 'doc', id: 'integrations/bitbucket/webhooks', },
        { label: 'Box', type: 'doc', id: 'integrations/box/webhooks', },
        { label: 'Brex', type: 'doc', id: 'integrations/brex/webhooks', },
        { label: 'Buildkite', type: 'doc', id: 'integrations/buildkite/webhooks', },
        { label: 'Calendly', type: 'doc', id: 'integrations/calendly/webhooks', },
        { label: 'Castle', type: 'doc', id: 'integrations/castle/webhooks', },
        { label: 'Chargify', type: 'doc', id: 'integrations/chargify/webhooks', },
        { label: 'Circle CI', type: 'doc', id: 'integrations/circleci/webhooks', },
        { label: 'Cisco Webex', type: 'doc', id: 'integrations/webex/webhooks', },
        { label: 'Clerk', type: 'doc', id: 'integrations/clerk/webhooks', },
        { label: 'Coinbase', type: 'doc', id: 'integrations/coinbase/webhooks', },
        { label: 'Contentful', type: 'doc', id: 'integrations/contentful/webhooks', },
        { label: 'Curity', type: 'doc', id: 'integrations/curity/sso-oidc', },
        { label: 'DocuSign', type: 'doc', id: 'integrations/docusign/webhooks', },
        { label: 'Dropbox', type: 'doc', id: 'integrations/dropbox/webhooks', },
        { label: 'Facebook', type: 'doc', id: 'integrations/facebook/webhooks', },
        { label: 'Facebook Messenger', type: 'doc', id: 'integrations/facebook-messenger/webhooks', },
        { label: 'Frame.io', type: 'doc', id: 'integrations/frameio/webhooks', },
        { label: 'FusionAuth', type: 'doc', id: 'integrations/fusionauth/sso-oidc', },
        { label: 'GitHub', type: 'doc', id: 'integrations/github/webhooks', },
        { label: 'GitLab', type: 'doc', id: 'integrations/gitlab/webhooks', },
        { label: 'Heroku', type: 'doc', id: 'integrations/heroku/webhooks', },
        { label: 'HostedHooks', type: 'doc', id: 'integrations/hostedhooks/webhooks', },
        { label: 'HubSpot', type: 'doc', id: 'integrations/hubspot/webhooks', },
        { label: 'Hygraph', type: 'doc', id: 'integrations/hygraph/webhooks', },
        { label: 'Instagram', type: 'doc', id: 'integrations/instagram/webhooks', },
        { label: 'Intercom', type: 'doc', id: 'integrations/intercom/webhooks', },
        { label: 'JumpCloud', type: 'category', items: [ { type: 'autogenerated', dirName: 'integrations/jumpcloud', }, ], },
        { label: 'LaunchDarkly', type: 'doc', id: 'integrations/launchdarkly/webhooks', },
        { label: 'Mailchimp', type: 'doc', id: 'integrations/mailchimp/webhooks', },
        { label: 'Mailgun', type: 'doc', id: 'integrations/mailgun/webhooks', },
        { label: 'MiniOrange', type: 'category', items: [ { type: 'autogenerated', dirName: 'integrations/miniorange', }, ], },
        { label: 'MongoDB', type: 'doc', id: 'integrations/mongodb/webhooks', },
        { label: 'Modern Treasury', type: 'doc', id: 'integrations/modern-treasury/webhooks', },
        { label: 'Mux', type: 'doc', id: 'integrations/mux/webhooks', },
        { label: 'Okta', type: 'category', items: [ { type: 'autogenerated', dirName: 'integrations/okta', }, ], },
        { label: 'PagerDuty', type: 'doc', id: 'integrations/pagerduty/webhooks', },
        { label: 'Pusher', type: 'doc', id: 'integrations/pusher/webhooks', },
        { label: 'SendGrid', type: 'doc', id: 'integrations/sendgrid/webhooks', },
        { label: 'Sentry', type: 'doc', id: 'integrations/sentry/webhooks', },
        { label: 'Shopify', type: 'doc', id: 'integrations/shopify/webhooks', },
        { label: 'Slack', type: 'doc', id: 'integrations/slack/webhooks', },
        { label: 'Sonatype Nexus', type: 'doc', id: 'integrations/sonatype-nexus/webhooks', },
        { label: 'Square', type: 'doc', id: 'integrations/square/webhooks', },
        { label: 'Stripe', type: 'doc', id: 'integrations/stripe/webhooks', },
        { label: 'Svix', type: 'doc', id: 'integrations/svix/webhooks', },
        { label: 'Terraform', type: 'doc', id: 'integrations/terraform/webhooks', },
        { label: 'TikTok', type: 'doc', id: 'integrations/tiktok/webhooks', },
        { label: 'Trend Micro', type: 'doc', id: 'integrations/trendmicro/webhooks', },
        { label: 'Twilio', type: 'doc', id: 'integrations/twilio/webhooks', },
        { label: 'Twitter', type: 'doc', id: 'integrations/twitter/webhooks', },
        { label: 'Typeform', type: 'doc', id: 'integrations/typeform/webhooks', },
        { label: 'Wallix Trustelem', type: 'category', items: [ { type: 'autogenerated', dirName: 'integrations/trustelem', }, ], },
        { label: 'VMware Workspace ONE', type: 'doc', id: 'integrations/vmware/webhooks', },
        { label: 'WhatsApp', type: 'doc', id: 'integrations/whatsapp/webhooks', },
        { label: 'Worldline', type: 'doc', id: 'integrations/worldline/webhooks', },
        { label: 'Xero', type: 'doc', id: 'integrations/xero/webhooks', },
        { label: 'Zendesk', type: 'doc', id: 'integrations/zendesk/webhooks', },
        { label: 'Zoom', type: 'doc', id: 'integrations/zoom/webhooks', },
      ],
    },
    {
      label: 'Reference',
      type: 'category',
      items: [ 
        {
          type: 'category',
          label: 'ngrok Agent',
          link: { type: 'doc', id: 'ngrok-agent/index' },
          items: [ { type: 'autogenerated', dirName: 'ngrok-agent', }, ],
        },
        {
          type: 'category',
          label: 'ngrok API',
          link: { type: 'doc', id: 'api/index' },
          items: [ 
            {
              type: 'category',
              label: 'API Clients',
              link: { type: 'doc', id: 'api/api-clients' },
              items: [ "api/api-clients", "api/client-libraries", "api/terraform", ],
            },
            {
              type: 'category',
              label: 'API Resources',
              items: [ 
                // Abuse
                'api/resources/abuse-reports',
                // Agent
                {
                  type: 'category', label: 'Agent',
                  items: [ 
                    'api/resources/agent-ingresses',
                    'api/resources/tunnels',
                    'api/resources/tunnel-sessions',
                  ],
                },
                // Application Users
                {
                  type: 'category', label: 'Application Users',
                  items: [ 
                    'api/resources/application-users',
                    'api/resources/application-sessions',
                  ],
                },
                // Backends
                {
                  type: 'category', label: 'Backends',
                  items: [ 
                    'api/resources/failover-backends',
                    'api/resources/http-response-backends',
                    'api/resources/tunnel-group-backends',
                    'api/resources/weighted-backends',
                  ],
                },
                // Certificates
                {
                  type: 'category', label: 'Certificates',
                  items: [ 
                    'api/resources/certificate-authorities',
                    'api/resources/ssh-certificate-authorities',
                    'api/resources/ssh-host-certificates',
                    'api/resources/ssh-user-certificates',
                    'api/resources/tls-certificates',
                  ],
                },
                // Credentials
                {
                  type: 'category', label: 'Credentials',
                  items: [ 
                    'api/resources/api-keys',
                    'api/resources/ssh-credentials',
                    'api/resources/credentials',
                  ],
                },
                // Endpoints
                {
                  type: 'category', label: 'Endpoints',
                  items: [ 
                    'api/resources/reserved-addrs',
                    'api/resources/reserved-domains',
                    'api/resources/endpoints',
                  ],
                },
                // Events
                {
                  type: 'category', label: 'Events',
                  items: [ 
                    'api/resources/event-destinations',
                    'api/resources/event-sources',
                    'api/resources/event-subscriptions',
                  ],
                },
                // HTTPS Edges
                {
                  type: 'category', label: 'HTTPS Edges',
                  items: [ 
                    'api/resources/edges-https',
                    'api/resources/edges-https-routes',
                    'api/resources/https-edge-mutual-tls-module',
                    'api/resources/https-edge-route-backend-module',
                    'api/resources/https-edge-route-circuit-breaker-module',
                    'api/resources/https-edge-route-compression-module',
                    'api/resources/https-edge-route-ip-restriction-module',
                    'api/resources/https-edge-route-oauth-module',
                    'api/resources/https-edge-route-oidc-module',
                    'api/resources/https-edge-route-request-headers-module',
                    'api/resources/https-edge-route-response-headers-module',
                    'api/resources/https-edge-route-saml-module',
                    'api/resources/https-edge-route-webhook-validation-module',
                    'api/resources/https-edge-route-websocket-tcp-converter-module',
                    'api/resources/https-edge-tls-termination-module',
                  ],
                },
                // IP Restrictions
                {
                  type: 'category', label: 'IP Restrictions',
                  items: [ 
                    'api/resources/ip-policies',
                    'api/resources/ip-policy-rules',
                    'api/resources/ip-restrictions',
                  ],
                },
                // TCP Edges
                {
                  type: 'category', label: 'TCP Edges',
                  items: [ 
                    'api/resources/edges-tcp',
                    'api/resources/tcp-edge-backend-module',
                    'api/resources/tcp-edge-ip-restriction-module',
                  ],
                },
                // TLS Edges
                {
                  type: 'category', label: 'TLS Edges',
                  items: [ 
                    'api/resources/edges-tls',
                    'api/resources/tls-edge-backend-module',
                    'api/resources/tls-edge-ip-restriction-module',
                    'api/resources/tls-edge-mutual-tls-module',
                    'api/resources/tls-edge-tls-termination-module',
                  ],
                },
              ],
            },
          ],
        },
        'errors/index',
        {
          type: 'category', label: 'Events',
          link: { type: 'doc', id: 'events/event-sources' },
          items: [ 
            'events/event-sources',
            'events/filtering',
          ],
        },
        'http-header-templates',
      ],
    },
    {
      label: 'Best Practices',
      type: 'category',
      items: [ { type: 'autogenerated', dirName: 'best-practices', }, ],
    },
  ],

};

module.exports = sidebars;
