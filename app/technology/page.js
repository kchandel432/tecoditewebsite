'use client'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'


const mlCategories = [
    {
        category: 'Deep Learning',
        algorithms: ['CNN', 'RNN', 'LSTM', 'Transformers'],
        applications: ['Malware Detection', 'Network Anomalies', 'Behavior Analysis'],
    },
    {
        category: 'Ensemble Methods',
        algorithms: ['Random Forest', 'XGBoost', 'LightGBM', 'CatBoost'],
        applications: ['Risk Scoring', 'Threat Classification', 'Fraud Detection'],
    },
    {
        category: 'Reinforcement Learning',
        algorithms: ['DQN', 'PPO', 'A3C', 'Multi-Agent RL'],
        applications: ['Automated Response', 'Policy Optimization', 'Adaptive Defense'],
    },
    {
        category: 'Natural Language Processing',
        algorithms: ['BERT', 'GPT', 'RoBERTa', 'Knowledge Graphs'],
        applications: ['Threat Intelligence', 'Log Analysis', 'Social Engineering Detection'],
    },
]

export default function Technology() {
    return (
        <>
            <Section
                eyebrow="Technology"
                title="ML Algorithms"
                intro="Advanced machine learning powering next-generation cybersecurity."
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {mlCategories.map((category) => (
                    <Card key={category.category}>
                        <h3 className="h3 mb-3">{category.category}</h3>

                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-ink-900 dark:text-white mb-2 uppercase tracking-[0.12em]">Algorithms</h4>
                            <div className="flex flex-wrap gap-2">
                                {category.algorithms.map((algo) => (
                                    <span key={algo} className="px-3 py-1 text-xs border border-ink-200 dark:border-ink-700 rounded-lg text-ink-600 dark:text-ink-300 bg-white dark:bg-ink-800">
                                        {algo}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-ink-900 dark:text-white mb-2 uppercase tracking-[0.12em]">Applications</h4>
                            <ul className="text-sm text-ink-500 dark:text-ink-300 space-y-2 list-disc ml-5">
                                {category.applications.map((app) => (
                                    <li key={app}>{app}</li>
                                ))}
                            </ul>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    )
}
