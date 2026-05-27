'use client';

import { Button } from '@/components/ui/button';
import { CheckCircleIcon } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export function PricingWithChart() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Investment That Scales With Your Vision
        </h1>
        <p className="text-muted-foreground mt-4 text-sm md:text-base">
          Choose the engagement level that fits your brand stage. Every package
          is built around precision, not templates.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="bg-background grid rounded-xl border md:grid-cols-6">
        {/* Discovery Plan */}
        <div className="flex flex-col justify-between border-b p-6 md:col-span-2 md:border-r md:border-b-0">
          <div className="space-y-4">
            <div>
              <h2 className="backdrop-blur-2 inline rounded-[2px] p-1 text-xl font-semibold">
                Discovery
              </h2>
              <span className="my-3 block text-3xl font-bold text-white/70">
                Free
              </span>
              <p className="text-muted-foreground text-sm">
                Best for brands ready to understand their baseline
              </p>
            </div>

            <Button asChild variant="outline" className="w-full">
              <a href="#book">Book a Call</a>
            </Button>

            <div className="bg-border my-6 h-px w-full" />

            <ul className="text-muted-foreground space-y-3 text-sm">
              {[
                '30-min brand audit consultation',
                'Competitive landscape overview',
                'Positioning gap assessment',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-white/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="z-10 grid gap-8 overflow-hidden p-6 md:col-span-4 lg:grid-cols-2">
          {/* Pricing + Chart */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Premium Brand Management</h2>
              <span className="my-3 block text-3xl font-bold text-white/70">
                $2,999<span className="text-base font-normal text-muted-foreground">/mo</span>
              </span>
              <p className="text-muted-foreground text-sm">
                Full-service brand authority for serious market leaders
              </p>
            </div>
            <div className="bg-muted/30 h-fit w-full rounded-lg border p-2">
              <InterestChart />
            </div>
          </div>
          {/* Features */}
          <div className="relative w-full">
            <div className="text-sm font-medium">Everything in Discovery, plus:</div>
            <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
              {[
                'Bespoke brand identity system',
                'Monthly creative direction',
                'Content strategy & production',
                'Social media brand management',
                'Luxury campaign concepting',
                'Priority response within 4 hours',
                'Monthly performance reporting',
                'Market positioning refinement',
                'Dedicated brand strategist',
                'Quarterly brand audit & review',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-white/70" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Call to Action */}
            <div className="mt-10 grid w-full grid-cols-2 gap-2.5">
              <Button
                asChild
                className="bg-white text-black hover:bg-white/90"
              >
                <a href="#book">Get Started</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#book">Book Discovery</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InterestChart() {
  const chartData = [
    { month: 'January', interest: 120 },
    { month: 'February', interest: 180 },
    { month: 'March', interest: 150 },
    { month: 'April', interest: 210 },
    { month: 'May', interest: 250 },
    { month: 'June', interest: 300 },
    { month: 'July', interest: 280 },
    { month: 'August', interest: 320 },
    { month: 'September', interest: 340 },
    { month: 'October', interest: 390 },
    { month: 'November', interest: 420 },
    { month: 'December', interest: 500 },
  ];

  const chartConfig = {
    interest: {
      label: 'Interest',
      color: 'var(--chart-4)',
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader className="space-y-0 border-b p-3">
        <CardTitle className="text-lg">Plan Popularity</CardTitle>
        <CardDescription className="text-xs">
          Monthly trend of brands considering this package.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <ChartContainer config={chartConfig}>
          <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="interest"
              type="monotone"
              stroke="var(--color-interest)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
