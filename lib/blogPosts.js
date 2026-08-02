// Simple, local blog data source (can be replaced later with CMS/DB)

export const blogPosts = [
    {
        slug: 'enterprise-ai-security-guardrails',
        title: 'Enterprise AI Security: Practical Guardrails for Production'
        ,
        excerpt:
            'A pragmatic checklist for deploying AI safely—threat modeling, data handling, model hardening, and monitoring.'
        ,
        date: '2026-01-10',
        author: 'Techodite Research',
        readTime: '6 min read',
        tags: ['AI', 'Security', 'Governance'],
        content: [
            'Enterprise AI initiatives often fail for one reason: security is treated as a final gate rather than a design constraint. The best outcomes come from building guardrails into architecture, data pipelines, and operational workflows.',
            'Start with threat modeling. Identify the systems your model touches, the data it consumes, and the decisions it influences. Map your attack surface: prompt injection, data poisoning, model inversion, and supply-chain risk in model artifacts.',
            'Next, lock down data handling. Classify training and inference data, define retention policies, and ensure PII is minimized. Prefer privacy-preserving patterns such as tokenization, encryption-at-rest, and strict access control with audit logging.',
            'Finally, operationalize monitoring. Track drift, anomalous inputs, and output safety signals. Build playbooks for rollbacks and incident response, and ensure human review for high-risk actions.',
        ],
    },
    {
        slug: 'zero-trust-for-modern-saas',
        title: 'Zero Trust for Modern SaaS: Where to Begin'
        ,
        excerpt:
            'Zero Trust is a strategy, not a product. Here is how to phase identity, device posture, and network controls without slowing teams down.'
        ,
        date: '2025-12-22',
        author: 'Security Engineering',
        readTime: '5 min read',
        tags: ['Cybersecurity', 'Zero Trust'],
        content: [
            'Zero Trust means continuously verifying access—based on identity, context, and risk—rather than trusting a network location. For SaaS organizations, the fastest win is identity hardening.',
            'Implement SSO, enforce MFA, and adopt strong session controls. Then add device posture checks and conditional access rules so risky devices cannot access sensitive apps.',
            'From there, segment access by application and environment. Use least privilege for cloud roles, just-in-time access for admins, and robust logging for all privileged actions.',
        ],
    },
    {
        slug: 'compliance-automation-playbook',
        title: 'Compliance Automation Playbook: Evidence Without the Panic'
        ,
        excerpt:
            'Audits get easier when evidence is generated continuously. A lightweight framework to automate controls and reporting.'
        ,
        date: '2025-11-30',
        author: 'GRC Team',
        readTime: '4 min read',
        tags: ['Compliance', 'SOC2', 'ISO 27001'],
        content: [
            'Manual audits create last-minute work and inconsistent evidence. Compliance automation turns controls into repeatable, testable processes tied to real system data.',
            'Begin by identifying the 20% of controls that drive 80% of audit pain: access reviews, asset inventory, logging, and backup validation. Create a single source of truth for each control and automate its evidence collection.',
            'Use dashboards for exceptions, not status reports. Your goal is to see control drift early and fix it before an audit ever begins.',
        ],
    },
]

export function getAllPosts() {
    return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug) {
    return blogPosts.find((p) => p.slug === slug) || null
}

