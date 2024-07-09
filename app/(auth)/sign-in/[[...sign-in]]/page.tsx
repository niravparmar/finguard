import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";


export default function Page() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full lg:flex flex-col items-center justify-center px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-3xl text-[#2E2A47]">
                        Welcome Back to FinGuard!
                    </h1>
                    <p className="text-base text-[#7E8CA0]">
                        Log in or Create an account to get back to your dashboard!
                    </p>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <ClerkLoaded>
                        <SignIn path="/sign-in" />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="animate-spin text-muted-foreground" />
                    </ClerkLoading>

                </div>
            </div>
            <div className="h-full bg-red-600 hidden lg:flex flex-col items-center justify-center">
                <Image src="/logo.png" height={200} width={200} alt="Logo"></Image>
                <p className="text-white font-bold text-6xl font-serif">FinGuard</p>
                <p className="text-white text-lg font-mono">Made by Nirav Parmar</p>
                <div className="max-w-screen-2xl mx-auto w-50% mt-4">
                    <Card className="drop-shadow-2xl">
                        <CardHeader>
                            <p className="text-lg font-mono text-blue-700">Demo Credentials</p>  
                        </CardHeader>
                        <CardContent>
                            <p className="font-mono text-blue-700 text-lg">Username : demo</p>
                            <p className="font-mono text-blue-700 text-lg">Password : 1234</p>                            
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}