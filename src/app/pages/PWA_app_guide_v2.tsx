import { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, Printer, Smartphone, Menu, MessageSquare } from 'lucide-react';

export default function MobileAppGuide() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      title: "Welcome to the Cashback Loans Mobile App",
      content: (
        <div className="space-y-6">
          <p className="text-xl leading-relaxed">
            Welcome! This guide will show you how to use the Cashback Loans mobile app on your smartphone or tablet. 
            Take your time - you can always come back to review these instructions.
          </p>
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">What You'll Learn:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">1.</span>
                <span>How to add the app to your phone</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">2.</span>
                <span>How to log in on your phone</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">3.</span>
                <span>Understanding your dashboard</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">4.</span>
                <span>How to apply for a new loan</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">5.</span>
                <span>How to make a payment</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">6.</span>
                <span>How to defer your payment</span>
              </li>
            </ul>
          </div>
          <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-5">
            <p className="text-lg font-semibold">📱 This app works on both Android and iPhone!</p>
          </div>
        </div>
      )
    },
    {
      title: "Step 1: Adding the App (Android)",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border-4 border-green-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-green-900">For Android Users</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-green-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 1: Open Chrome Browser</p>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">C</div>
                <p className="text-lg">Look for the Chrome app</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Type the Address</p>
              <div className="bg-gray-100 border-2 border-gray-400 rounded p-4 mb-3">
                <p className="text-xl font-mono font-bold text-center">my.cashbackloans.com</p>
              </div>
              <p className="text-base text-gray-600 text-center">OR</p>
              <div className="bg-gray-100 border-2 border-gray-400 rounded p-4 mt-3">
                <p className="text-xl font-mono font-bold text-center">pwa.cashbackloans.com</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 3: Add to Home Screen</p>
              <p className="text-lg mb-3">A pop-up will appear. Tap:</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-bold w-full">
                Add To Home Screen
              </button>
              <p className="text-lg mt-3">Then tap Install</p>
            </div>

            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4">
              <p className="text-lg font-semibold">✓ Done! The app is now on your home screen!</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 1: Adding the App (iPhone)",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-4 border-blue-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-blue-900">For iPhone Users</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 1: Open Safari</p>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">S</div>
                <p className="text-lg">Look for Safari (compass icon)</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Type the Address</p>
              <div className="bg-gray-100 border-2 border-gray-400 rounded p-4">
                <p className="text-xl font-mono font-bold text-center">my.cashbackloans.com</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 3: Find Share Button</p>
              <p className="text-lg mb-3">At the BOTTOM, look for the share button with an arrow pointing up</p>
              <div className="bg-gray-100 p-4 rounded flex justify-center">
                <div className="w-16 h-16 border-4 border-blue-500 rounded-lg flex items-center justify-center text-3xl">
                  ⬆️
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 4: Add to Home Screen</p>
              <p className="text-lg mb-3">Tap: Add to Home Screen</p>
              <p className="text-lg">Then tap Add in the top right</p>
            </div>

            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4">
              <p className="text-lg font-semibold">✓ Done!</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 2: Logging In",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 border-4 border-purple-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-purple-900">Opening and Logging In</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-purple-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 1: Find the Icon</p>
              <div className="bg-gray-100 p-6 rounded flex justify-center">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                  CBL
                </div>
              </div>
              <p className="text-lg mt-3 text-center">Tap it once</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Enter Your Info</p>
              <div className="space-y-4 bg-gray-50 p-4 rounded">
                <div>
                  <label className="block text-lg font-semibold mb-2">Email:</label>
                  <div className="bg-white border-2 border-gray-400 rounded p-3 text-gray-500">
                    your.email@example.com
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2">Password:</label>
                  <div className="bg-white border-2 border-gray-400 rounded p-3 text-gray-500">
                    ••••••••
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-5">
              <p className="text-xl font-bold mb-2">⚠️ Security Alert</p>
              <p className="text-lg mb-2">You may see: Do you recognize this device?</p>
              <p className="text-lg">Tap YES if this is your phone</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 3: Your Dashboard",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 border-4 border-orange-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-orange-900">Your Home Screen</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-orange-300 mb-4">
              <p className="text-xl font-bold mb-3">Menu Button</p>
              <div className="flex items-center gap-4">
                <Menu className="w-12 h-12 text-orange-600" />
                <p className="text-lg">Tap these three lines for all options</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-orange-300">
              <p className="text-xl font-bold mb-3">Main Sections:</p>
              <div className="space-y-3">
                <div className="bg-yellow-50 p-3 rounded">
                  <p className="font-bold text-lg">📌 Reminders - Alerts at top</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-bold text-lg">📊 Summary - Loan details</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-bold text-lg">⚡ Actions - Apply, pay, defer</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-bold text-lg">📄 Documents - View files</p>
                </div>
                <div className="bg-pink-50 p-3 rounded">
                  <p className="font-bold text-lg">💬 Messages - Read messages</p>
                </div>
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-bold text-lg">🗨️ Chat - Live chat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 4: Apply for Loan",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-4 border-blue-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-blue-900">Request a New Loan</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 1: Tap Actions</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Select</p>
              <div className="bg-blue-100 p-3 rounded">
                <p className="font-semibold">I Want to Apply for a New Loan</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 3: Choose Amount</p>
              <div className="bg-gray-100 border-2 border-gray-400 rounded p-3">
                <p className="text-lg">Select Loan Amount: $_____ ▼</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 4: Submit</p>
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-bold w-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 5: Sign Documents",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border-4 border-green-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-green-900">E-Signing</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-green-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 1: Find Reminder</p>
              <p className="text-lg">Look for colored box at top about e-signing</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Tap</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-bold w-full">
                SIGN LOAN AGREEMENT
              </button>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 3: Sign</p>
              <div className="bg-yellow-100 p-4 rounded">
                <p className="font-semibold">⚠️ Check the due date first!</p>
              </div>
              <p className="text-lg mt-3">Use your finger to sign</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 4: Finish</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold w-full">
                Finish
              </button>
            </div>

            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4">
              <p className="text-lg font-semibold">✓ You'll get funded within minutes!</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 6: Make Payment",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 border-4 border-purple-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-purple-900">Pay with Debit Card</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-purple-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 1: Tap Actions</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Select</p>
              <div className="bg-purple-100 p-3 rounded">
                <p className="font-semibold">I Want to Make My Next Payment Using My Debit Card</p>
              </div>
              <p className="text-lg mt-2">Then tap Submit</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 3: Tap</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-bold w-full">
                Proceed to Pay
              </button>
            </div>

            <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-4">
              <p className="text-lg font-semibold">🔒 Your card info is secure</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 7: Defer Payment",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 border-4 border-orange-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-orange-900">Extend Your Due Date</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-orange-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 1: Tap Actions</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-orange-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Select</p>
              <div className="bg-orange-100 p-3 rounded">
                <p className="font-semibold">Defer My Next Payment by 1-5 Calendar Days</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-orange-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 3: Choose Days</p>
              <div className="bg-gray-100 border-2 border-gray-400 rounded p-3">
                <p className="text-lg">Select days: 1-5 ▼</p>
              </div>
              <p className="text-lg mt-2">Tap Submit</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-orange-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 4: Confirm</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-bold w-full">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Getting Help",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border-4 border-red-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-red-900">We're Here to Help!</p>
            
            <div className="bg-white rounded-lg p-6 border-2 border-red-300 mb-4">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-16 h-16 text-red-600" />
                <div>
                  <p className="text-xl font-bold">Call Us:</p>
                  <p className="text-3xl font-bold text-red-600">1-800-XXX-XXXX</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-2 border-red-300 mb-4">
              <div className="flex items-center gap-4">
                <Mail className="w-16 h-16 text-red-600" />
                <div>
                  <p className="text-xl font-bold">Email:</p>
                  <p className="text-2xl font-bold text-red-600">support@cashbackloans.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-red-300 mb-4">
              <div className="flex items-center gap-4">
                <MessageSquare className="w-16 h-16 text-red-600" />
                <p className="text-xl font-bold">Use Live Chat in the app!</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border-4 border-blue-400 rounded-lg p-6">
            <p className="text-xl font-bold mb-3">💡 Quick Tips:</p>
            <ul className="space-y-2 text-lg">
              <li>• Keep this guide handy</li>
              <li>• Works on Android and iPhone</li>
              <li>• Look for colored reminder boxes</li>
              <li>• Use the menu button (three lines)</li>
              <li>• Never share your password</li>
              <li>• Use live chat for instant help</li>
            </ul>
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-6">
            <p className="text-xl font-bold mb-3">📱 Quick Reference:</p>
            <div className="space-y-2 text-lg">
              <p><span className="font-bold">Website:</span> my.cashbackloans.com</p>
              <p><span className="font-bold">Phone:</span> 1-800-XXX-XXXX</p>
              <p><span className="font-bold">Email:</span> support@cashbackloans.com</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6 print:shadow-none">
        <div className="flex items-center justify-between mb-6 print:mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Cashback Loans</h1>
            <h2 className="text-2xl text-gray-600">Mobile App Guide</h2>
            <div className="flex items-center gap-2 mt-2">
              <Smartphone className="w-6 h-6 text-blue-600" />
              <p className="text-lg text-gray-600">For Android & iPhone</p>
            </div>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 print:hidden"
          >
            <Printer className="w-5 h-5" />
            Print
          </button>
        </div>
        
        <div className="mb-6">
          <div className="bg-gray-200 h-3 rounded-full">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-center mt-2 text-lg font-semibold text-gray-600">
            Section {currentSection + 1} of {sections.length}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-4 border-blue-500">
            {sections[currentSection].title}
          </h2>
          <div className="text-gray-700">
            {sections[currentSection].content}
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t-2 border-gray-300 print:hidden">
          <button
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700"
          >
            <ChevronLeft className="w-6 h-6" />
            Previous
          </button>
          
          <button
            onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
            disabled={currentSection === sections.length - 1}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700"
          >
            Next
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-6 text-center print:hidden">
        <p className="text-xl font-bold mb-2">Need Help Right Now?</p>
        <p className="text-2xl font-bold text-blue-600 mb-1">Call: <a href="tel:9094830474" className="text-green">(909)-483-0474</a></p>
        <p className="text-lg">Or use Live Chat in the app!</p>
      </div>
    </div>
  );
}