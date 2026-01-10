import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out LearnFlow",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Access to 10 free courses",
      "Basic progress tracking",
      "Community forum access",
      "Mobile app access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For serious learners who want to level up",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Unlimited course access",
      "Downloadable resources",
      "Certificates of completion",
      "Priority support",
      "Project feedback",
      "1-on-1 mentorship calls",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Teams",
    description: "For organizations training their teams",
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      "Everything in Pro",
      "Team analytics dashboard",
      "Custom learning paths",
      "SSO integration",
      "Dedicated success manager",
      "API access",
      "Invoice billing",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Pro plan includes a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for Teams plans.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "We offer a 30-day money-back guarantee on all paid plans. No questions asked.",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Simple, transparent{" "}
              <span className="text-gradient">pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that's right for you. All plans include access to
              our learning community.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="mb-12 flex items-center justify-center gap-4">
            <span
              className={`text-sm ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span
              className={`text-sm ${isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Yearly{" "}
              <span className="ml-1 rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">
                Save 20%
              </span>
            </span>
          </div>

          {/* Pricing cards */}
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-smooth ${
                  plan.popular
                    ? "border-primary bg-card glow-primary"
                    : "border-border bg-card/50 hover:border-primary/50 hover:bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "glow-primary" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="mx-auto mt-24 max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-border bg-card/50 p-6"
                >
                  <h3 className="mb-2 font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
