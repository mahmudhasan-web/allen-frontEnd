import Link from 'next/link';
import React from 'react';

const UserAgreement = () => {
    return (
        <section className='space-y-3'>
            <h1 className='text-xl font-semibold'>Privacy Policy</h1>
            <h2 className='font-semibold'>Updated: December 2024</h2>
            <p>Thank you for visiting www.officialbudhub.com (http://www.officialbudhub.com) (the “Site”). Your privacy is critically important to us. This Privacy Policy (the “Policy”) outlines the types of information that budhub express , LLC (“BudHub,” “we,” “us,” or “our”) may collect from you or that you may provide while using the Site and our services (collectively with the Site, the “Services”). It also details our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
            <p>By accessing or using our Services (or by clicking “accept” or “agree” when prompted), you agree to this Policy on behalf of yourself or the entity you represent. If you do not agree, please refrain from using our Services.</p>

            <div>
                <h1 className='text-lg font-semibold'>1. Children and Access to the Services</h1>
                <p>The Services are not intended for anyone under 21 years old. We do not knowingly collect personal information from individuals under this age. If you are under 21, do not use the Services or provide personal information. If you believe a minor has provided us information, contact us at budhubinfo@gmail.com.</p>
            </div>
            <div>
                <h1 className='text-lg font-semibold'>2. Changes to the Privacy Policy</h1>
                <p>This Policy was last updated in December 2024. We may revise it periodically. Material changes will be posted here, and we may notify you via email or a notice on the Site. Continued use of the Services constitutes your acceptance of the updated terms.</p>
            </div>

            <div>
                <h1 className='text-lg font-semibold'>3. Information We Collect</h1>
                <p>We may collect the following types of information:</p>
                <div className='my-3'>
                    <h2 className=' font-semibold'>A. Information You Provide Directly</h2>
                    <ul className='list-disc ml-5'>
                        <li>Personal Information: Name, address, email, phone number, and account details provided during registration or transactions.</li>
                        <li>Email Correspondence: Records of emails and communications.</li>
                        <li>User Content: Posts, comments, and other contributions shared publicly on the Services.</li>
                        <li>Transaction Information: Purchase history, payment details, and billing/shipping information.</li>
                    </ul>
                </div>
                <div className='my-3'>
                    <h2 className='font-semibold'>B. Automatically Collected Information</h2>
                    <ul className='list-disc ml-5'>
                        <li>Activity Information: Usage patterns, features used, and interactions on the Services.</li>
                        <li>Device Information: Browser type, IP address, and operating system.</li>
                        <li>User Content: Posts, comments, and other contributions shared publicly on the Services.</li>
                        <li>Location Data: GPS or device-based location information for functionality and service enhancements.</li>
                    </ul>
                </div>
                <div className='my-3'>
                    <h2 className='font-semibold'>C. Aggregate/Demographic Information</h2>
                    <ul className='list-disc ml-5'>
                        <li>Non-identifiable statistical data to improve our Services.</li>
                    </ul>
                </div>
                <div className='my-3'>
                    <h2 className='font-semibold'>D. Third-Party Sources</h2>
                    <ul className='list-disc ml-5'>
                        <li>Data from publicly available sources, service providers, or affiliates to enhance security and offer personalized recommendations.</li>
                    </ul>
                </div>

            </div>

            <div>
                <h1 className='text-lg font-semibold'>4. How We Use Your Information</h1>
                <div className='my-3'>
                    <h2 className=' font-semibold'>Your information helps us to:</h2>
                    <ul className='list-disc ml-5'>
                        <li>Provide and personalize the Services.</li>
                        <li>Respond to inquiries and provide customer support.</li>
                        <li>Process transactions and send notifications.</li>
                        <li>Inform you of updates, promotions, or offers.</li>
                        <li>Detect, prevent, and investigate fraud or security issues.</li>
                        <li>Improve functionality through analytics and research.</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1 className='text-lg font-semibold'>5. How We Share Your Information</h1>
                <div className='my-3'>
                    <h2 className='font-semibold'>We do not sell your personal information. We may share it:</h2>
                    <ul className='list-disc ml-5'>
                        <li>With Affiliates: For operational purposes.
                        </li>
                        <li>Respond to inquiries and provide customer support.</li>
                        <li>With Service Providers: For tasks like hosting, payment processing, and analytics.</li>
                        <li>Inform you of updates, promotions, or offers.</li>
                        <li>For Legal Reasons: To comply with laws, court orders, or protect rights and safety.</li>
                        <li>In Business Transfers: If BudHub is involved in a merger or acquisition.</li>
                        <li>With Consent: As specifically authorized by you.</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1 className='text-lg font-semibold'>6. Your Choices</h1>
                <div className='my-3'>
                    {/* <h2 className='text-lg font-semibold'>We do not sell your personal information. We may share it:</h2> */}
                    <ul className='list-disc ml-5'>
                        <li>Cookies: You can adjust browser settings to block cookies, but some features may not function properly.</li>
                        <li>Promotional Emails: Opt out via the “unsubscribe” link in emails or through your account settings.</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1 className='text-lg font-semibold'>7. Accessing and Correcting Your Information</h1>
                <p>You can access, update, or delete your personal information through your account or by contacting us at budhubinfo@gmail.com. Deleted information may remain in backups or logs.</p>
            </div>
            <div>
                <h1 className='text-lg font-semibold'>8. California Privacy Rights</h1>
                <p>California residents may have additional rights under state law. For more information, email us at budhubinfo@gmail.com.</p>
            </div>
            <div>
                <h1 className='text-lg font-semibold'>9. Security of Your Information</h1>
                <p>We employ SSL encryption, firewalls, and secure servers to protect your data. While we strive for robust security, no system is completely secure. Transmission of data is at your own risk.</p>
            </div>
            <div>
                <h1 className='text-lg font-semibold'>10. Contact Us</h1>
                <p>For questions or concerns about this Policy, email us at <Link href={`mailto:budhubinfo@gmail.com`}>budhubinfo@gmail.com</Link></p>
                <p>This Policy reflects BudHub’s commitment to transparency and security in managing your personal data.</p>
            </div>


        </section>
    );
};

export default UserAgreement;