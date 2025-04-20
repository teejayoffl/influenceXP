import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function FoundersNote() {
  return (
    <Card className="bg-gray-50 dark:bg-gray-900 border-0 shadow-sm">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-3">A Note from the Founder</h3>
        <div className="prose prose-sm dark:prose-invert">
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            I built InfluenceXP because I struggled with consistency on LinkedIn. Despite knowing it was valuable for my career, I couldn't maintain a posting habit.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Our initial release focuses on helping you draft quality content and build consistent habits through gamification. We're starting with a draft-only workflow (copy-paste to LinkedIn) while we work through LinkedIn's API approval process.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Your early support means everything. Once approved, we'll launch direct publishing and detailed analytics to help you grow your reach even faster.
          </p>
        </div>
        <div className="mt-4 flex items-center">
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
            <span className="text-blue-600 font-medium">TJ</span>
          </div>
          <div>
            <p className="font-medium">Teejay</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Founder, InfluenceXP</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 