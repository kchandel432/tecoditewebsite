'use client'
import { motion } from 'framer-motion'

export default function Technology() {
    const mlCategories = [
        {
            category: "Deep Learning",
            algorithms: ["CNN", "RNN", "LSTM", "Transformers"],
            applications: ["Malware Detection", "Network Anomalies", "Behavior Analysis"]
        },
        {
            category: "Ensemble Methods",
            algorithms: ["Random Forest", "XGBoost", "LightGBM", "CatBoost"],
            applications: ["Risk Scoring", "Threat Classification", "Fraud Detection"]
        },
        {
            category: "Reinforcement Learning",
            algorithms: ["DQN", "PPO", "A3C", "Multi-Agent RL"],
            applications: ["Automated Response", "Policy Optimization", "Adaptive Defense"]
        },
        {
            category: "Natural Language Processing",
            algorithms: ["BERT", "GPT", "RoBERTa", "Knowledge Graphs"],
            applications: ["Threat Intelligence", "Log Analysis", "Social Engineering Detection"]
        }
    ]

    return (
        <div className="min-h-screen bg-black py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        ML Algorithms
                    </h1>
                    <p className="text-xl text-gray-400">
                        Advanced machine learning powering next-generation cybersecurity
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {mlCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all"
                        >
                            <h3 className="text-2xl font-bold text-cyan-400 mb-4">{category.category}</h3>

                            <div className="mb-4">
                                <h4 className="text-white font-semibold mb-2">Algorithms:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.algorithms.map((algo, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                                            {algo}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-2">Applications:</h4>
                                <ul className="text-gray-300 space-y-1">
                                    {category.applications.map((app, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                            {app}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}