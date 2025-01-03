'use client'
import OrderList from '@/Components/Order/OrderList';
import IdDetails from '@/Components/Profile/IdDetails';
import LoyalPoint from '@/Components/Profile/LoyalPoint';
import ProfileDetails from '@/Components/Profile/ProfileDetails';
import UserAgreement from '@/Components/UserAgreement/UserAgreement';
import React, { useState } from 'react';

const Profile = () => {
    const [activeTab, setActiveTab] = useState<string>("Your Account");
   


    const tabs = [
        "Your Account",
        "ID Information",
        "Loyalty Points",
        "Order History",
        "Pre-Order History",
        "User Agreement",
        "Sign Out",
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "Your Account":
                return <ProfileDetails></ProfileDetails>
            case "ID Information":
                return <IdDetails></IdDetails>
            case "Loyalty Points":
                return <LoyalPoint></LoyalPoint>
            case "Order History":
                return <OrderList/>;
            case "Pre-Order History":
                return <div>Pre-order history details go here.</div>;
            case "User Agreement":
                return <UserAgreement></UserAgreement>;
            case "Sign Out":
                return <div>You have signed out.</div>;

        }
    };

    return (
        <section className='max-w-5xl relative flex flex-wrap transition-transform justify-between border-2 mx-auto px-4 py-10 bg-white shadow-lg rounded-lg'>
            {/* Tabs */}
            <div className="flex  lg:flex-col lg:w-44 h-full mb-auto w-full overflow-x-visible gap-2 flex-wrap justify-start   relative space-y-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`lg:text-xl  mt-auto font-medium text-start  ${activeTab === tab
                            ? "text-color underline"
                            : "text-gray-700 hover:text-color"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="px-4 bg-gray-50 h-full transition-transform rounded-md lg:w-4/5  text-gray-700 ">
                {renderContent()}
            </div>
        </section>
    );
};

export default Profile;