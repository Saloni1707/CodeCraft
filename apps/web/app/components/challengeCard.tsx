"use client"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export interface ChallengeCardProps {
  id: string;
  name: string;
  description: string;
  maxPoints: number;
  contestId?: string;
}

export function ChallengeCard({ 
  id, 
  name, 
  description, 
  maxPoints,
  contestId 
}: ChallengeCardProps) {
  const router = useRouter();

  const handleStartChallenge = () => {
    // Navigate to the challenge page with both contest and challenge IDs
    router.push(`/contest/${contestId}/challenge/${id}`);
  };

  return (
    <Card className="
      border-2 border-gray-200 
      hover:border-primary/50 
      transition-all 
      rounded-xl 
      shadow-sm hover:shadow-md
      flex flex-col 
      w-full 
      h-full
      overflow-hidden
      group
    ">
      <div className="p-6 flex-1 flex flex-col">
        <CardHeader className="p-0 mb-4">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold line-clamp-2">
              {name}
            </CardTitle>
            <Badge variant="secondary" className="ml-2 whitespace-nowrap">
              {maxPoints} pts
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 p-0 mb-4">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        </CardContent>

        <CardFooter className="p-0 mt-auto">
          <Button 
            className="w-full" 
            onClick={handleStartChallenge}
            aria-label={`Start ${name} challenge`}
          >
            Start Challenge
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
