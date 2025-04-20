"use client";

import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-800 prose dark:prose-invert max-w-none">
            <p className="text-sm text-gray-500 mb-6 text-center">Last Updated: June 30, 2024</p>
            
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using InfluenceXP, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily use InfluenceXP for personal, non-commercial purposes only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on InfluenceXP</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by InfluenceXP at any time.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
            <p>
              The materials on InfluenceXP are provided on an 'as is' basis. InfluenceXP makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="mt-2">
              Further, InfluenceXP does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitations</h2>
            <p>
              In no event shall InfluenceXP or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on InfluenceXP, even if InfluenceXP or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on InfluenceXP could include technical, typographical, or photographic errors. InfluenceXP does not warrant that any of the materials on its website are accurate, complete or current. InfluenceXP may make changes to the materials contained on its website at any time without notice. However, InfluenceXP does not make any commitment to update the materials.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Links</h2>
            <p>
              InfluenceXP has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by InfluenceXP of the site. Use of any such linked website is at the user's own risk.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modifications</h2>
            <p>
              InfluenceXP may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. User Account</h2>
            <p>
              If you create an account with us, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account. You must immediately notify InfluenceXP of any unauthorized uses of your account or any other breaches of security.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            
            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
              <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 