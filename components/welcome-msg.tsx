"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
    const { user, isLoaded } = useUser();
    let userName = user?.username;

    return (
        <div className="space-y-2 mb-4">
            <h2 className="text-2xl lg:text-4xl text-white font-medium capitalize">
                Welcome Back{isLoaded ? ", " : " "}{userName}
            </h2>
            <p className="text-sm lg:text-base text-[#e4edfb]">
                Financial Overview Report
            </p>
        </div>
    );
};