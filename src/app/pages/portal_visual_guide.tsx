import { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, Printer, RefreshCw } from 'lucide-react';

export default function PortalGuide() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      title: "Welcome to Your Cashback Loans Portal",
      content: (
        <div className="space-y-6">
          <p className="text-xl leading-relaxed">
            Welcome! This guide will show you how to use the Cashback Loans online portal step-by-step. 
            Take your time - you can always come back to review these instructions.
          </p>
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">What You'll Learn:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">1.</span>
                <span>How to log into your account</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">2.</span>
                <span>How to apply for a new loan</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">3.</span>
                <span>How to make a payment with your debit card</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">4.</span>
                <span>How to defer (extend) your payment by 1-5 days</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">5.</span>
                <span>Where to get help if you need it</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Step 1: Getting to the Website",
      content: (
        <div className="space-y-6">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
            <p className="text-xl font-bold mb-3">Open your web browser</p>
            <p className="text-lg mb-4">Look for one of these icons on your computer or tablet:</p>
            <div className="flex gap-6 justify-center my-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-3xl font-bold">e</div>
                <p className="text-base">Edge</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-3xl font-bold">C</div>
                <p className="text-base">Chrome</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-3xl font-bold">F</div>
                <p className="text-base">Firefox</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-400 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-3xl font-bold">S</div>
                <p className="text-base">Safari</p>
              </div>
            </div>
          </div>
          <div className="bg-white border-4 border-gray-800 rounded-lg p-6">
            <p className="text-xl font-bold mb-3">Two ways to get to your account:</p>
            
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-4">
              <p className="text-lg font-bold mb-2">Option 1: Start from the main website</p>
              <div className="bg-white border-2 border-gray-400 rounded p-4 text-center mb-3">
                <p className="text-2xl font-mono font-bold">www.cashbackloans.com</p>
              </div>
              <p className="text-lg">Then click "Login / My Account" button</p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
              <p className="text-lg font-bold mb-2">Option 2: Go directly to login page (Faster!)</p>
              <div className="bg-white border-2 border-gray-400 rounded p-4 text-center">
                <p className="text-xl font-mono font-bold">https://my.cashbackloans.com/#/login</p>
              </div>
            </div>
            
            <p className="text-lg mt-4 text-gray-700 font-semibold">Press ENTER on your keyboard after typing the address</p>
          </div>
        </div>
      )
    },
    {
      title: "Step 2: Logging Into Your Account",
      content: (
        <div className="space-y-6">
          <div className="bg-white border-4 border-green-500 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-green-800">Enter Your Login Information</p>
            <div className="space-y-4 bg-gray-50 p-6 rounded border-2 border-gray-300">
              <div>
                <label className="block text-xl font-bold mb-2">Email Address:</label>
                <div className="bg-white border-2 border-gray-400 rounded p-3 text-lg text-gray-500">
                  your.email@example.com
                </div>
                <p className="text-base text-gray-600 mt-1">Use the email address you gave us</p>
              </div>
              <div>
                <label className="block text-xl font-bold mb-2">Password:</label>
                <div className="bg-white border-2 border-gray-400 rounded p-3 text-lg text-gray-500">
                  ••••••••
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-bold w-full mt-4">
                Login
              </button>
            </div>
          </div>

          <div className="bg-yellow-50 border-4 border-yellow-500 rounded-lg p-6">
            <p className="text-2xl font-bold mb-3 text-yellow-900">⚠️ First Time Logging In?</p>
            <p className="text-xl leading-relaxed mb-3">
              Your temporary password is the <span className="font-bold text-red-600">last 4 digits of your Social Security Number</span>
            </p>
            <p className="text-lg">For example, if your SSN ends in 1234, your password is: <span className="font-mono font-bold">1234</span></p>
          </div>
        </div>
      )
    },
    {
      title: "Step 3: Updating Your Password (First Time Only)",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 border-4 border-purple-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-purple-900">You May Need to Update Your Password</p>
            <p className="text-lg mb-4">If your password has expired, you'll see a screen asking you to update your account information.</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-purple-300 mb-4">
              <p className="text-xl font-bold mb-3">What You'll See:</p>
              <div className="bg-gray-100 border-2 border-gray-400 rounded p-4 mb-3">
                <p className="text-lg mb-2">Update Account Information</p>
                <p className="text-base text-gray-600">Please update your password</p>
              </div>
              <p className="text-lg">Click the button to continue</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
              <p className="text-xl font-bold mb-3">Create Your New Password:</p>
              <div className="space-y-3 bg-gray-50 p-4 rounded">
                <div>
                  <label className="block text-lg font-semibold mb-1">Old Password:</label>
                  <div className="bg-white border-2 border-gray-400 rounded p-2 text-gray-500">
                    (Last 4 of your SSN)
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-1">New Password:</label>
                  <div className="bg-white border-2 border-gray-400 rounded p-2 text-gray-500">
                    (Create a password you'll remember)
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-1">Confirm New Password:</label>
                  <div className="bg-white border-2 border-gray-400 rounded p-2 text-gray-500">
                    (Type it again)
                  </div>
                </div>
              </div>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-bold mt-4 w-full">
                Update Password
              </button>
            </div>

            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 mt-4">
              <p className="text-lg font-semibold">✓ Write down your new password and keep it in a safe place!</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 4: Applying for a New Loan",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-4 border-blue-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-blue-900">Once You're Logged In:</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 1: Find "Manage Your Loan Account" Section</p>
              <p className="text-lg mb-3">Look for the button that says:</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold">
                I want to apply for a new loan
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Select Your Loan Amount</p>
              <p className="text-lg mb-3">Choose the amount you need from the dropdown menu</p>
              <div className="bg-gray-50 border-2 border-gray-300 rounded p-3 text-lg">
                Select Loan Amount: $_____ ▼
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 3: Submit Your Application</p>
              <p className="text-lg mb-2">Click the Submit button</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-bold">
                Submit
              </button>
              <p className="text-lg mt-3">You'll see a confirmation pop-up - click to confirm</p>
            </div>

            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4">
              <p className="text-lg font-semibold">✓ You'll get confirmation that your loan has been accepted!</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 5: Signing Your Loan Documents",
      content: (
        <div className="space-y-6">
          <div className="bg-orange-50 border-4 border-orange-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-orange-900">Sign Your Documents</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-orange-300 mb-4">
              <p className="text-xl font-bold mb-3">After Your Loan is Accepted:</p>
              <p className="text-lg mb-3">You'll need to sign your loan documents just like you normally would.</p>
              <div className="bg-yellow-100 border-2 border-yellow-400 rounded p-4">
                <p className="text-lg font-bold">⚠️ Important: Check the due date carefully!</p>
                <p className="text-base mt-2">Make sure the payment due date is correct before signing</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-orange-300 mb-4">
              <p className="text-xl font-bold mb-3">After Signing:</p>
              <p className="text-lg mb-3">1. You'll get a confirmation message</p>
              <p className="text-lg mb-3">2. If you're still logged into the portal, click the refresh button:</p>
              <div className="flex items-center gap-3 bg-gray-100 p-3 rounded">
                <RefreshCw className="w-8 h-8 text-blue-600" />
                <p className="text-lg">Click this circular arrow icon</p>
              </div>
            </div>

            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-5">
              <p className="text-xl font-bold mb-3 text-green-800">What Happens Next:</p>
              <p className="text-lg mb-2">• The Cashback Loans team gets an alert that you've signed</p>
              <p className="text-lg mb-2">• <span className="font-bold">Auto Funding (24/7):</span> If you qualify, you'll be funded instantly</p>
              <p className="text-lg">• <span className="font-bold">Regular Funding:</span> Quick review and funding within minutes during business hours</p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-4 mt-4">
              <p className="text-lg font-semibold mb-2">📱 You'll receive a notification:</p>
              <p className="text-base">• Text message (if you have text notifications)</p>
              <p className="text-base">• Email notification (the minute your loan is funded)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 6: Making a Payment",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border-4 border-green-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-green-900">Pay with Your Debit Card</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-green-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 1: Log Into Your Account</p>
              <p className="text-lg mb-3">Under "Manage Your Loan Account", click:</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-bold">
                I want to make my next payment using my debit card
              </button>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Choose When to Pay</p>
              <p className="text-lg mb-3">You'll see a confirmation screen with two options:</p>
              <div className="space-y-3">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold w-full">
                  Proceed to Pay (Pay Now)
                </button>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-bold w-full">
                  Proceed to Schedule (Pay Later)
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300">
              <p className="text-xl font-bold mb-3">Step 3: Enter Your Card Information</p>
              <p className="text-lg mb-3">If you chose "Schedule", you can:</p>
              <ul className="space-y-2 text-lg ml-6">
                <li>• Confirm your existing debit card information</li>
                <li>• Add a new debit card</li>
                <li>• Choose a future payment date</li>
              </ul>
              <div className="bg-blue-100 border-2 border-blue-400 rounded p-3 mt-4">
                <p className="text-base font-semibold">🔒 Your card information is secure and encrypted</p>
              </div>
            </div>

            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 mt-4">
              <p className="text-lg font-semibold">✓ You'll get a confirmation message when your payment is complete!</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Step 7: Deferring (Extending) Your Payment",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 border-4 border-purple-400 rounded-lg p-6">
            <p className="text-2xl font-bold mb-4 text-purple-900">Need More Time? Extend Your Due Date</p>
            <p className="text-lg mb-4">You can defer (postpone) your next payment by 1 to 5 calendar days.</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-purple-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 1: Find the Defer Option</p>
              <p className="text-lg mb-3">Under "Manage Your Loan Account", click:</p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-bold">
                Defer my next payment by 1-5 Calendar Days
              </button>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Choose How Many Days</p>
              <p className="text-lg mb-3">Select how many days you need (1, 2, 3, 4, or 5 days)</p>
              <div className="bg-gray-50 border-2 border-gray-300 rounded p-3 text-lg">
                Select number of days: ___ ▼
              </div>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-bold mt-3">
                Submit
              </button>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 3: Confirm Your Request</p>
              <p className="text-lg mb-2">You'll get a second chance to review and confirm</p>
              <p className="text-lg">Click "Yes" to confirm or "No" to go back</p>
            </div>

            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4">
              <p className="text-lg font-semibold mb-2">✓ Success!</p>
              <p className="text-base">You'll see confirmation that your payment date has been extended</p>
              <p className="text-base mt-2">Your home screen will show the new payment date</p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-4 mt-4">
              <p className="text-lg font-semibold">Example:</p>
              <p className="text-base">If your payment was due on the 12th and you deferred by 3 days, your new due date will be the 15th</p>
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
            <p className="text-2xl font-bold mb-4 text-red-900">We're Here to Help You!</p>
            
            <div className="bg-white rounded-lg p-6 border-2 border-red-300 mb-4">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-16 h-16 text-red-600" />
                <div>
                  <p className="text-xl font-bold">Call Us:</p>
                  <p className="text-3xl font-bold text-red-600">1-800-XXX-XXXX</p>
                </div>
              </div>
              <p className="text-lg">Our team can walk you through every step on the phone</p>
              <p className="text-lg font-semibold mt-2">Available during business hours</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-2 border-red-300 mb-4">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-16 h-16 text-red-600" />
                <div>
                  <p className="text-xl font-bold">Email Us:</p>
                  <p className="text-2xl font-bold text-red-600">support@cashbackloans.com</p>
                </div>
              </div>
              <p className="text-lg">We'll respond as quickly as possible</p>
            </div>
            
            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-6">
              <p className="text-xl font-bold mb-3">🌐 Website Resources</p>
              <p className="text-lg mb-3">Visit our website for more help:</p>
              <p className="text-xl font-semibold text-blue-600">www.cashbackloans.com</p>
            </div>
          </div>
          
          <div className="bg-blue-50 border-4 border-blue-400 rounded-lg p-6">
            <p className="text-xl font-bold mb-3">💡 Quick Tips to Remember:</p>
            <ul className="space-y-2 text-lg">
              <li>• <span className="font-bold">Keep this guide handy</span> - print it out and keep it near your computer</li>
              <li>• <span className="font-bold">Save the login page:</span> https://my.cashbackloans.com/#/login</li>
              <li>• <span className="font-bold">First time password:</span> Last 4 digits of your Social Security Number</li>
              <li>• <span className="font-bold">Write down your new password</span> and keep it in a safe place</li>
              <li>• <span className="font-bold">Never share your password</span> with anyone</li>
              <li>• <span className="font-bold">Call us anytime</span> you have questions - no question is too small!</li>
            </ul>
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-6">
            <p className="text-xl font-bold mb-3">📋 Quick Reference:</p>
            <div className="space-y-2 text-lg">
              <p><span className="font-bold">Website:</span> www.cashbackloans.com</p>
              <p><span className="font-bold">Login Page:</span> https://my.cashbackloans.com/#/login</p>
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
            <h2 className="text-2xl text-gray-600">Digital Portal Guide</h2>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 print:hidden"
          >
            <Printer className="w-5 h-5" />
            Print Guide
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
        <p className="text-2xl font-bold text-blue-600 mb-1">Call: 1-800-XXX-XXXX</p>
        <p className="text-lg">Email: support@cashbackloans.com</p>
      </div>
    </div>
  );
}