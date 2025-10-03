-- First, update existing NULL values with a default end time
-- This sets endTime to startTime + 7 days for existing contests
UPDATE "Contest" 
SET "endTime" = "startTime" + INTERVAL '7 days' 
WHERE "endTime" IS NULL;

-- Now make the column required (NOT NULL)
ALTER TABLE "Contest" ALTER COLUMN "endTime" SET NOT NULL;