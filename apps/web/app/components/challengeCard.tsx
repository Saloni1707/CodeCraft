import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";

export interface ChallengeCardProps {
  name: string;
  description: string;
}

export function ChallengeCard({ name, description }: ChallengeCardProps) {
  return (
    <Card
      className="
        border-2 border-gray-500 
        hover:border-gray-700 
        transition-colors 
        rounded-xl 
        shadow-md 
        flex flex-col 
        w-full 
        max-w-sm 
        md:max-w-md 
        lg:max-w-lg 
        p-6
      "
    >
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm md:text-base text-muted-foreground">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button>Enter</Button>
      </CardFooter>
    </Card>
  );
}
