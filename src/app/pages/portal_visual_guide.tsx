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
          <div className="bg-yellow-50 border-4 border-yellow-400 rounded-lg p-6">
            <p className="text-xl font-bold mb-3">Open your web browser</p>
            <p className="text-lg mb-4">Look for one of these icons on your computer or tablet:</p>
            <div className="flex gap-6 justify-center my-6">
              <div className="text-center">
                <div className="w-20 h-20  rounded-full mx-auto mb-2 flex items-center justify-center"><img src="./microsoft-edge.png" /></div>
                <p className="text-base">Edge</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20  rounded-full mx-auto mb-2 flex items-center justify-center"><img src="./chrome.png" /></div>
                <p className="text-base">Chrome</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20  rounded-full mx-auto mb-2 flex items-center justify-center"><img src="./firefox.png" /></div>
                <p className="text-base">Firefox</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20  rounded-full mx-auto mb-2 flex items-center justify-center"><img src="./safari.png" /></div>
                <p className="text-base">Safari</p>
              </div>
            </div>
          </div>
          <div className="bg-white border-4 border-gray-800 rounded-lg p-6">
            <p className="text-xl font-bold mb-3">Two ways to get to your account:</p>
            
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-4">
              <p className="text-lg font-bold mb-2">Option 1: Start from the main website</p>
              <div className="bg-white border-2 border-gray-400 rounded p-4 text-center mb-3">
                <p className="text-2xl font-mono font-bold"><a href="https://www.cashbackloans.com/" target="_blank">www.cashbackloans.com</a></p>
              </div>
              <p className="text-lg mb-2">Then click <strong>"My Account"</strong> button</p>
              <div className="border-2 border-gray-400 rounded">
                  <img className="wid-100" src="./my-account.jpg" />
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
              <p className="text-lg font-bold mb-2">Option 2: Go directly to login page (Faster!)</p>
              <div className="bg-white border-2 border-gray-400 rounded p-4 text-center">
                <p className="text-xl font-mono font-bold"><a href="https://my.cashbackloans.com/" target="_blank">my.cashbackloans.com</a></p>
              </div>
            </div>
            
            <p className="text-lg mt-4 text-gray-700 font-semibold">Press <strong>ENTER</strong> on your keyboard after typing the address</p>
          </div>
        </div>
      )
    },
    {
      title: "Step 2: Logging Into Your Account",
      content: (
        <div className="space-y-6">
          <div className="bg-white border-4 border-green-500 rounded-lg p-4">
              <img className="wid-100" src="./login.jpg" />
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
                <img className="wid-100" src="./reset.jpg" />
                <p className="text-lg mt-2">Click the <strong>Reset Password</strong> button to continue</p>
            </div>

            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 mb-4">
              <p className="text-lg font-semibold">✓ Write down your new password and keep it in a safe place!</p>
            </div>

             <div className="bg-white rounded-lg p-5 border-2 border-purple-300 mb-4">
                <p className="text-lg mb-4">After successfull authentication you will receive a <strong>One Time Password</strong> to your registered cell number.</p>   
                <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./verification-code.jpg" />
                <p className="text-lg mt-4">Click the <strong>Verify</strong> button after entering the <strong>One Time Password</strong>.</p>            
            </div>
            
             <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
                <p className="text-lg mb-2">If your account is already active in any device, you will see the below alert. </p>      
                <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./security-alert.jpg" />
                <p className="text-lg mt-2">Click <strong>Continue</strong> button if you recognize the device or click <strong>I don't recognize the device</strong>.</p>            
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
              <p className="text-xl font-bold mb-3">Step 1: Find "I want apply for a new loan” button</p>
              <div>
                <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./apply-new-loan.jpg" />
                <p className="text-lg mt-4">Click the <strong>I want apply for a new loan</strong> button to continue.</p>            
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Select Your Loan Amount</p>
              <p className="text-lg mb-3">Choose the amount you need from the dropdown menu</p>
              <div>
                <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./select-loan.jpg" />
                <p className="text-lg mt-4">After selecting the loan amount click the <strong>submit</strong> button and you will see the loan amount confirmation screen.</p>            
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 3: Submit Your Application</p>
              <p className="text-lg mb-2">Click the <strong>Yes, Submit!</strong> button</p>
              <div>
                <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./submit-screen.jpg" />
                <p className="text-lg mt-4 mb-4">You will see the below screen if your <strong>loan is approved</strong>. Otherwise you will be notified with the denied reason.</p>    
                <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./congrats.jpg" />        
              </div>
              <p className="text-lg mt-3">You'll see a confirmation pop-up - click <strong>OK</strong> to confirm</p>
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
              <p className="text-lg mb-2">You'll need to sign your loan documents just like you normally would.</p>
              <p className="text-lg mb-3">You will see the <strong>Sign Loan Agreement button</strong> in the reminder section.</p>
              
              <div>
                <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./sign-loan.jpg" />
                <p className="text-lg mt-4 mb-4">Click the <strong>SIGN LOAN AGREEMENT</strong> button and you will be redirected to the agreement screen.</p>    
                </div>
              
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
              <p className="text-xl font-bold mb-3">What Happens Next:</p>
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
              <p className="text-lg mb-3">Find the <strong>I want to pay my next payment using my debit card</strong> button.</p>              
              <div>
                <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./pay-using-debit.jpg" />
                <p className="text-lg mt-4 mb-4">Select the option and click the <strong>submit</strong> button. You will be redirected to the payment screen.</p>   
                <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./choose-to-pay.jpg" />
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Choose When to Pay</p>
              <p className="text-lg mb-3">You'll see a confirmation screen with two options:</p>
              <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./choose-when-to-pay.jpg" />    
                <p className="text-lg mt-4 mb-4">On clicking you will be redirected to card payment screen to enter card details.</p>            
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300">
              <p className="text-xl font-bold mb-3">Step 3: Enter Your Card Information</p>
              <p className="text-lg mb-3">If you have already <strong>saved card information</strong> you will see the below screen.</p>              
              <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./saved-payment.jpg" />
              <p className="text-lg mb-3">Select your card to pay.</p>            
              <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./saved-card-pay.jpg" />
              <p className="text-lg mb-3">If you don't have any saved card information, you will see the below screen to enter your card details.</p>  
              <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./card-detail.jpg" />
              <p className="text-lg mb-3">Click the <strong>Pay</strong> button. If the payment is successful, the Payment Success screen will be displayed or the return reason will be shown:</p>
              <div className="bg-blue-100 border-2 border-blue-400 rounded p-3 mt-4">
                <p className="text-base font-semibold">🔒 Your card information is secure and encrypted</p>
              </div>
              <img className="wid-100 border-2 border-gray-400 rounded mb-2 mt-4" src="./payment-approved.jpg" />
            </div>

            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 mt-4">
              <p className="text-lg font-semibold">✓ You'll get a confirmation message when your payment is complete!</p>
            </div>
            <p className="text-lg mb-3 mt-4">Clicking the Go to <strong>Home</strong> button will redirect you to the home screen, where you can verify the payment status and request a new loan immediately.</p>
            
            <div className="bg-white rounded-lg p-5 border-2 border-green-300">
              <p className="text-xl font-bold mb-3">Step 4: Apply For A New Loan</p>
              <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./apply-for-new-loan.jpg" />
              <p className="text-lg mb-3">Click the <strong>I want to Apply For A New Loan</strong>  button to apply.</p>              
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
              <p className="text-xl font-bold mb-3">Step 1: Find the <strong>Defer My Next Payment by 1 -5 Calendar Day(s)</strong> Option</p>
              <p className="text-lg mb-3">Click the <strong>Defer My Next Payment by 1 -5 Calendar Day(s)</strong> button to select the number of days. You can select a maximum of 5 days.</p>
              <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./defer-payment.jpg" />
              <p className="text-lg mb-3">Click <strong>submit</strong> button you will see the below screen to confirm the deferred payment details.</p>
              <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./defer-submit.jpg" />
              
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-300 mb-4">
              <p className="text-xl font-bold mb-3">Step 2: Confirm Your Request</p>
              <p className="text-lg mb-2">You'll get a second chance to review and confirm</p>
              <img className="wid-100 border-2 border-gray-400 rounded mb-2" src="./yes-to-continue.jpg" />
              <p className="text-lg">Click yes to complete the deferment after clicking <strong>yes</strong> button you will be redirected to payment authorization agreement.</p>
              <img className="wid-100 border-2 border-gray-400 rounded mb-2 mt-4" src="./agrement.jpg" />
              <p className="text-lg">After <strong>successful signing</strong> you will see the below screen.</p>
              <img className="wid-100 border-2 border-gray-400 rounded mb-2 mt-4" src="./loan-extension-approved.jpg" />
              <p className="text-lg">click <strong>OK</strong>, you will be redirected to home screen and you able see the updated payment date on top section.</p>
              <img className="wid-100 border-2 border-gray-400 rounded mb-2 mt-4" src="./defer-completed.jpg" />
            </div>

            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4">
              <p className="text-lg font-bold mb-2">✓ Success!</p>
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
                  <p className="text-3xl font-bold text-red-600"><a href="tel:9094830474">(909)-483-0474</a></p>
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
                  <p className="text-2xl font-bold text-red-600"><a href="mailto:info@cashbackloans.com">info@cashbackloans.com</a></p>
                </div>
              </div>
              <p className="text-lg">We'll respond as quickly as possible</p>
            </div>
            
            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-6">
              <p className="text-xl font-bold mb-3">🌐 Website Resources</p>
              <p className="text-lg mb-3">Visit our website for more help:</p>
              <p className="text-xl font-semibold"><a href="https://www.cashbackloans.com/" target="_blank">www.cashbackloans.com</a></p>
            </div>
          </div>
          
          <div className="bg-blue-50 border-4 border-blue-400 rounded-lg p-6">
            <p className="text-xl font-bold mb-3">💡 Quick Tips to Remember:</p>
            <ul className="space-y-2 text-lg">
              <li>• <span className="font-bold">Keep this guide handy</span> - print it out and keep it near your computer</li>
              <li>• <span className="font-bold">Save the login page:</span> <a href="https://my.cashbackloans.com/" target="_blank">https://my.cashbackloans.com/</a></li>
              <li>• <span className="font-bold">First time password:</span> Last 4 digits of your Social Security Number</li>
              <li>• <span className="font-bold">Write down your new password</span> and keep it in a safe place</li>
              <li>• <span className="font-bold">Never share your password</span> with anyone</li>
              <li>• <span className="font-bold">Call us anytime</span> you have questions - no question is too small!</li>
            </ul>
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-6">
            <p className="text-xl font-bold mb-3">📋 Quick Reference:</p>
            <div className="space-y-2 text-lg">
              <p><span className="font-bold">Website:</span> <a href="https://www.cashbackloans.com/" target="_blank">www.cashbackloans.com</a></p>
              <p><span className="font-bold">Login Page:</span> <a href="https://my.cashbackloans.com/" target="_blank">https://my.cashbackloans.com/</a></p>
              <p><span className="font-bold">Phone:</span> <a href="tel:9094830474" className="text-green">(909)-483-0474</a></p>
              <p><span className="font-bold">Email:</span> <a href="mailto:info@cashbackloans.com" className="text-green">info@cashbackloans.com</a></p>
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

        <div
  className={`flex items-center pt-6 border-t-2 border-gray-300 print:hidden ${
    currentSection === 0
      ? "justify-end"
      : currentSection === sections.length - 1
      ? "justify-start"
      : "justify-between"
  }`}
>
  {currentSection > 0 && (
    <button
      onClick={() => setCurrentSection(currentSection - 1)}
      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
    >
      <ChevronLeft className="w-6 h-6" />
      Previous
    </button>
  )}

  {currentSection < sections.length - 1 && (
    <button
      onClick={() => setCurrentSection(currentSection + 1)}
      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
    >
      Next
      <ChevronRight className="w-6 h-6" />
    </button>
  )}
</div>

      </div>

      <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-6 text-center print:hidden">
        <p className="text-xl font-bold mb-2">Need Help Right Now?</p>
        <p className="text-2xl font-bold text-blue-600 mb-1 text-green">Call: <a href="tel:9097437800" className="text-green">(909)-743-7800</a> or <a href="tel:9094830474" className="text-green">(909)-483-0474</a></p>
        <p className="text-lg">Email: <a href="mailto:info@cashbackloans.com">info@cashbackloans.com</a></p>
      </div>
    </div>
  );
}