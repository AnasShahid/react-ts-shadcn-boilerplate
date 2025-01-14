import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PricingPlan } from "../config/plans";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card className={`w-[300px] ${plan.highlighted ? 'border-primary shadow-lg' : ''}`}>
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-3xl font-bold">${plan.price}</span>
          <span className="text-muted-foreground">/{plan.billingPeriod}</span>
        </div>
        <ul className="space-y-2">
          {plan.features.map((feature) => (
            <li key={feature.name} className="flex items-center gap-2">
              {feature.included ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <X className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="text-sm">
                {feature.name}
                {feature.limit && (
                  <span className="text-muted-foreground"> ({feature.limit})</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
