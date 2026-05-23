import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty';
import { HomeIcon, CompassIcon } from 'lucide-react';

export function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <Empty>
        <EmptyHeader>
          {/* mask-b classes are Tailwind v4 — using inline style equivalent */}
          <EmptyTitle
            className="font-extrabold text-9xl"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
              maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
            }}
          >
            404
          </EmptyTitle>
          <EmptyDescription className="-mt-8 text-nowrap text-foreground/80">
            The page you&apos;re looking for might have been <br />
            moved or doesn&apos;t exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button asChild>
              <a href="/">
                <HomeIcon className="size-4 mr-2" />
                Go Home
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/contact">
                <CompassIcon className="size-4 mr-2" />
                Contact Us
              </a>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
